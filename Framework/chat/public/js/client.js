$(document).ready(function()	{
	// WebSocket
	var socket = io.connect('https://hmi.durr.com', {
            path: '/emostestrd4/chat/socket.io',
            'reconnection': true,
            'reconnectionDelay': 500,
            'reconnectionAttempts': 10
    
    });//;
        //var socket = io.connect('http://localhost');
        console.log(socket)
	/** operational variables. keep them up to date whilst login/out/pm etc. **/
	var	userObj = {chatname:'chatname', setPrivate:false, pmTo:'pmTo', loggedIn: false	},// fill with default val. 
	  	chatCount = 0,
		serverMsgCount = 0,
		currentPmObj = {}; 			// store the current PM values: div, span (for display), (to)user

	/** config variables **/
	var	maxChatCount = 45, 			// max. chat messages to display
		maxCountServerMsg = 9, 		// max. servermsg. to display
		chatMinimumChar = 1;

//	$('#clock').simpleClock();
	// hide input elements for chat, show login first
	$('#chat-box-send').hide();
	$('#logout').hide();
	$('#layer-pm-to').hide();

	getTimeString = function(zeitObj) {
		var zeit = new Date(zeitObj);
		var tstring = '';
		if (zeit.getHours() < 10) 
			tstring+='0'+zeit.getHours();
		else
			tstring+=zeit.getHours();
		tstring+=':';
		if (zeit.getMinutes() < 10) 
			tstring+='0'+zeit.getMinutes();
		else
			tstring+=zeit.getMinutes();
		return tstring;
	};

	writeServerMessage = function(data) {
		var tstring = getTimeString(data.zeit);
		var source   = $("#update-template").html(); // see index.html
		$('#update-area').append(source); 		
		serverMsgCount++;
		// avoid overflow - delete the top message
		if (serverMsgCount > maxCountServerMsg)
			$('#update-area').children('div:first').remove();
	};
        
        var chatbox;
	writeChatMsg = function(data) {
            var myMsg = {
                    'type': "newChatMessage"
                };
                parent.postMessage(JSON.stringify(myMsg), '*');
		var tstring = getTimeString(data.zeit);
		var source   = $("#chat-box-template").html(); // see index.html
//		var template = Handlebars.compile(source);
		// to mark a user in color here
		var	displayUserClass = '';
		// to prepend a colored prefix "to: user"
		var msgPre = '';

		if (data.type =='privateTo') {
			displayUserClass ='text-orange';		// if PM, simply turn the color orange
		}
		else if (data.type == 'privateSelf') {
			msgPre = 'to: ' + data.goesTo + ': ';
		}
		
                chatbox = "<div class='.chat-box-main'>"+ tstring +" " + data.name + " " + data.text  +"</div>";
                $('#talk-box-output').append(chatbox);
		chatCount++;
//		if (chatCount > maxChatCount)
//			$('#talk-box-output').children('div:first').remove();

		/*/ ----- debug
		$('#displayCountChat').html(chatCount); 
		$('#cbh').html('tboxoutp inH: ' + $('#talk-box-output').innerHeight() ); 
		$('#cbi').html( 'gap ' +  gap );
		// ---- debug/*/

		// Try to find the correct scroll position after drawing chat msg. 
                setTimeout(function () {
                    var parentelem = $('#talk-box-output').position().top + $('#talk-box-output').innerHeight();                
                    var elem = $('#talk-box-output').position().top + $('#talk-box-output').prop("scrollHeight");
                    if(elem > parentelem){
                        $('#talk-box-output').animate({scrollTop: elem - 20 });
                    }                    
                }, 400);
	};
        
	writeUserList = function(data) {
		// delete the user list
		$('#onlineusers').html('');		
		$('#usercount').html(data.usercount);
		//console.log(' userlist to write: ' + JSON.stringify(data )) ;
		
		// write new user list
		$.each(data.users, function (index, value) {
			var div_id	= 'user_' +value;
			var span_id = 'span_' +value;
			var onClick = 'privateMsg("' + div_id  + '","' + span_id +  '",' + '"'+value+ '")';
			var attrDiv = {};
			var attrSpan = {}; 
			//css: circle-header14 circle-header_norm / circle-header_pm  / circle-header_current

			attrDiv.class	= 'circle-header14';
			attrDiv.id 		= div_id;    // (grunt) jshint:  ^ ['id'] is better written in dot notation.

			attrSpan.class 	= 'online-user';
			attrSpan.id		= span_id;
			// our user shouldn't PM himself..
                        
//			if (value !== 1)	{ 
//				attrDiv.class+= ' circle-header-norm cursor-pointer ';
//				
//                                attrSpan.class+= ' offline';
//			} else { 
                                attrDiv.onClick = onClick;
				attrDiv.title = 'click for private message';

				attrSpan.class+= ' cursor-pointer';
				attrSpan.onClick = onClick;
				attrSpan.title = 'click for private message';
				attrDiv.class+= ' circle-header-current';   // green user icon for online user
				attrSpan.class+= ' online-user-current';
                                attrSpan.class+= ' online';// and green text
//			}
                        
			// we cannot declare a click() function for the user in the list, since we cannot define a useful id
			// this sequence is tiny enough - no Handlebars 
			$('#onlineusers').append(
				$('<div>').append( 
					$('<div>').attr(attrDiv),
					$('<span>').attr(attrSpan).text(value) 
				)
			);
 
		});
	};

	// called by click action or by Socket (user leaves inmidst PM conversation)
	togglePmOff = function(user,calledby) {
		if (currentPmObj.user === user) {
			userObj.setPrivate = false;
			userObj.pmTo = '';
			console.log('togglePmOff [by'+ calledby +']: switch to norm chat, was to '+ user);
			//if (calledby=='privateMsg')	{	
				$('#'+currentPmObj.div).removeClass("circle-header-pm");
				$('#'+currentPmObj.div).addClass("circle-header-norm");
				$('#'+currentPmObj.div).attr( {'title':'click for private message'});
				$('#'+currentPmObj.span).html(user);
				$('#'+currentPmObj.span).removeClass("online-user-pm");
				$('#'+currentPmObj.span).attr( {'title':'click for private message'});
				$('#layer-pm-to').text('');
				$('#layer-pm-to').hide();
				$('#text').val('');
				$('#text').focus();					
			//}
			currentPmObj = {};
		} else
			console.log( 'Warn: togglePmOff: no PM status for user: ' + user);
	};

	// called by privateMsg()    togglePmOn(user,'privateMsg');
	togglePmOn = function(div,span,user,calledby) {
		userObj.setPrivate = true;
		userObj.pmTo = user;
		$('#'+div).removeClass("circle-header-norm");
		$('#'+div).addClass("circle-header-pm");
		$('#'+div).attr( {'title':'click again to discard private message'});
		$('#'+span).html('=> ' + user);
		$('#'+span).addClass("online-user-pm");	//attrSpan['title'] = 'click for private message'; $("img").attr("width","500");
		$('#'+span).attr({'title':'click again to discard private message'});

		$('#layer-pm-to').text('to: '+ user );
		$('#layer-pm-to').show();
		//$('#text').val('to ['+ user+']: ');
		$('#text').focus();
		currentPmObj = { 'div': div, 'span': span, 'user': user };
		console.log('togglePmOn: pm to '+ user + ' calledby: ' + calledby );	
 	};

	privateMsg = function (div, span, user) {  // privateMsg called:  user_1 span_1  opra
		// toggle pm/normal chat mode    ------  if (data.user == pmTo) togglePmOff(data.user )
		if ((userObj.setPrivate === true) && (user === currentPmObj.user)) {
			togglePmOff(user,'privateMsg');
		} else if (userObj.setPrivate === false) {
			currentPmObj = { 'div': div, 'span': span, 'user': user }; 
			togglePmOn(div,span,user,'privateMsg');
		} else {
			console.log('privateMsg: user clicks falsly' );	// tooltip here
		}
	};
        var myName = window.name;
        socket.nickname = myName;
        
        socket.emit('logmein', { name: myName });
       
//        socket.on('connect',  function (data) {
//          console.log('connected')
//          socket.emit('logmein', { name: myName });
//        });
        socket.on('disconnect', function() {
            console.log('reconnected')
            socket.emit('logmein', { name: myName });
        });
        userObj.chatName = myName;
	// write the userlist, down/left
	socket.on('userList', function (data) {
		if (userObj.loggedIn === true)
			writeUserList(data);
	});
        socket.on('xxx', function(data){
            console.log('jeppo')
            console.log(socket)
        });
 	// after the login attempt
	socket.on('statusMessage', function (data) {
		console.log(' receiving statusmsg: ' + JSON.stringify(data )) ;

		// wird nur nach dem Loginprozess aufgerufen
		if (true === data.loggedIn) {   
			userObj.loggedIn = true;
			console.log('successfully logged in ..');
			$('#chat-box-login').hide();
 			$('#chat-box-send').show();
			$('#logout').show();
                        
		} else {
			$('#name').val('');
			console.log('chat entry, or login failed, name is chosen..');
		}
		$('#top-header-chat-left').text(data.status);
		$('#statusBar').text(data.text);
	});

 	// new servermessage (top/left)
	// e.g. user joins, leaves
	socket.on('serverMessage', function (data) {
		if ((userObj.loggedIn === true) || (data.logoutMessage === true)) { 
			writeServerMessage(data);
			// if the remote user logs off whilst in PM Conversation here
			if (data.logoutMessage && (data.logoutUser == userObj.pmTo) && (true === userObj.setPrivate ))  { 
				togglePmOff(data.logoutUser,'socket');
				console.log('Server calls togglePmOff for user: ' + data.logoutUser );
			}
		}
	});

 	// reveiving chatmessage, public and private
	socket.on('chatMessage', function (data) {
		if ((userObj.loggedIn === true) || (data.logoutMessage === true)) { 
			writeChatMsg(data);
		}
                
	});

	// send private/public chat msg. 
	chatten = function() {
		var text = $('#text').val().trim(); // whitespaces before/after deleted
		var pTo = null;

		console.log('try to send:' +text);
		if (userObj.loggedIn === true) {
			if (text.length >= chatMinimumChar)  {

				// stay in privatmode until user toggles it off 
	 			if (userObj.setPrivate === true)		{
					pTo = userObj.pmTo;
				} 
				// fire the message over socket
				socket.emit('userMessage', { name: userObj.chatName, text: text, privateTo: pTo });
				$('#text').val('');
			} else
				console.log('chatten(): text too short!..');
				// here is a tooltip e.g. useful..
		} else {
			$('#text').val('bitte einloggen');
		} 
	};

	login = function() {
		if (userObj.loggedIn === false) {
			userObj.chatName = $('#name').val().trim();
			// socket send. login attempt
			socket.emit('login', { name: userObj.chatName });
 		}
	};

	logout = function() {
		if (userObj.loggedIn === true) {
	 		socket.emit('logout', { name: userObj.chatName });
	 		userObj.loggedIn = false;
			userObj.chatName = '';
			console.log('currently logged out ..') ;
			//socket.close();			
			$('#chat-box-send').hide();
 			$('#chat-box-login').show();
			$('#logout').hide();
			// $('#talk-box-output').html('');
			$('#onlineusers').html('');		
			$('#usercount').html(0);
		}
	};

	// on click
	$('#login').click(login);
	$('#logout').click(logout);
	$('#senden').click(chatten);

	// by enter - chatbar 
	$('#text').keypress(function (e) {
		if (e.which == 13) {
			chatten();    
		}
	});
	// by enter - loginbar
	$('#name').keypress(function (e) {
		if (e.which == 13) {
			 login();			 
		}
	});


});
