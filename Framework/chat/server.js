var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
	conf = require('./config.json'),
	validChatUsers = {},
	mySockets;    
//    stationlist = require(__dirname + '/public/json/stationlist.json');
    stationlist = {};
        
// Webserver
// auf den Port x schalten
server.listen(conf.port);

app.configure(function(){
	// statische Dateien ausliefern
	app.use(express.static(__dirname + '/public'));
});

// wenn der Pfad / aufgerufen wird
app.get('/', function (req, res) {
	// so wird die Datei index.html ausgegeben
	res.sendfile(__dirname + '/public/index.html');
});

// Websocket
io.sockets.on('connection', function (socket) {  
    // checks if the key user exists in our object 'validChatUsers'
//	isUserOnline = function (user) {
//  		if(validChatUsers.hasOwnProperty(user)) 
//			return true;
//		else
//			return false;	
//	};


	socket.on('disconnect', function() {
            console.log('trennung')
            if(stationlist.hasOwnProperty(socket.id)){
                //stationlist[socket.nickname] = 0;
                delete stationlist[socket.id];
            }            
            writeUserList();
         });
	// called for the remaining users, when user logs in, out, or gets kicked
	writeUserList = function() {
            //console.log(socket.handshake.headers.user)
		//io.sockets.emit('userList',  { "usercount": Object.keys(validChatUsers).length  , "users" : Object.keys(validChatUsers)  });
                io.sockets.emit('userList',  { "usercount": Object.keys(stationlist).length  , "users" : stationlist  });
	};
        
//        stationlist.forEach(function(name) {
//            var chatname = name;
//            validChatUsers[chatname] = socket;			
//            //
//            
//      }); 
      socket.on('xxx',function(data){
          console.log(data)
      });
      
      socket.on('logmein',  function (data) {
          stationlist[socket.id] = data.name;
          socket.emit('statusMessage',{ name: 'Server', loggedIn: true, text: 'Willkommen im chat, ' + data.name  + '!', status:'online' });
          console.log('da bin ich')
          writeUserList();          
          //console.log(stationlist[data.name])
          socket.nickname = data.name;
          validChatUsers[data.name] = socket;
          //socket.emit('xxx', socket.id);
          
      });
      
        //console.log(stationWatcher)
        //Code to look for a change in the file, use this in it:
//        if(updated){
//            stationWatcher.emit('update');        
//        };
	// first, emit the greeting message to the entered user..
//	socket.emit('statusMessage', { name: 'Server', text: 'Hallo, bitte gib Deinen Namen ein', status:'ready' });
        // test

//         socket.on('heinz', function (name, fn) {
//            console.log(validChatUsers) 
//            fn({ "usercount": Object.keys(validChatUsers).length  , "users" : Object.keys(validChatUsers)  });
//          });
        // 
	// if 'login' is received from client, check if username is not chosen, emit welcome message
//	socket.on('login',  function (data) {
//		var chatname = data.name;
//		if (false === isUserOnline(data.name ))	{ 
//			// 1. emit welcome msg. for the loggedin user
//			socket.emit('statusMessage',{ name: 'Server', loggedIn: true, text: 'Willkommen im chat, ' + chatname  + '!', status:'chat' });
//			
//			// this step is important for the PM ability! add a property to the obj. 'validChatUsers': key is the name, value is the socket obj. 
//			// just for this user
//			validChatUsers[chatname] = socket;
//			// 2. emit servermsg. (on top left) '20.15 user is joined..'
//			io.sockets.emit('serverMessage', { zeit: new Date(), name: 'Server', text: data.name  + ' joined' });
//
//			console.log(data.name + ' has logged in '  );
//			console.log(' now users online: ' +  JSON.stringify(Object.keys(validChatUsers)));
//			writeUserList();
//			// 3. [optional] emit chatmsg for all in main chat window
//			io.sockets.emit('chatMessage', { zeit: new Date(), name: 'Server', text: data.name + ' betritt den chat', type: 'public'});
//		} else	{
//			// this username is already chosen
//			socket.emit('statusMessage',{ name: 'Server', loggedIn: false, text: chatname  + ' bereits vergeben, nimm einen anderen', status:'err' });
//		}
//	});
//
//	// if 'logout' is received from client
//	socket.on('logout',function (data) {
//		var time = new Date();
//  		var chatname = data.name;
//
//		//if (true === isUserOnline(data.name ))	{ 
//			// 1. emit statusmsg. by leaving (top middle) logoutMessage:true is needed, because client already has set to logout
//			socket.emit('statusMessage', { zeit: time, logoutMessage: true, name: 'Server', text: 'bye ' + data.name + ' bis zum nächsten mal!', status:'ready' });
//
//			// 2. emit Servermsg. (on top left)				
//			io.sockets.emit('serverMessage', { zeit: time, logoutMessage: true, logoutUser: data.name , name: 'Server', text: data.name  + ' left'});
//	
//			// simple and performant way to delete an obj. property 
//			delete validChatUsers[chatname];
//			writeUserList();
//
//			// 3. [optional] emit chatmsg for all in main chat window
//			io.sockets.emit('chatMessage', { zeit: new Date(), name: 'Server', text: data.name + ' hat den chat verlassen', type: 'public'});
//
//			console.log(data.name + ' has logged out '  );
//			console.log(' remaining users online: ' +  JSON.stringify(Object.keys(validChatUsers)  ));
//		//}
//	});


	socket.on('userMessage', function (data) {
//		if ( isUserOnline(data.name) === true) {

			var sender = data.name;
			// if the property 'privateTo' is sent 
			if (data.privateTo !== null) {
 
				console.log(data.text + ' is private to ' + data.privateTo );
				// important! pick the corresonding socket of the obj. 'validChatUsers' and send the pm exclusivly through it
				var targetSocket = validChatUsers[data.privateTo];
				
				try {
					// ***** PRIVATE MESSAGE => to recipient ***********
					targetSocket.emit('chatMessage', { zeit: new Date(), name: sender, text: data.text, type: 'privateTo' });
				} catch (err) {
					console.log("Error:", err);
				}
			
				// ***** PUBLIC MESSAGE => return to sender ***********
				// send back the msg. to sender  <b>: orange !
				targetSocket = validChatUsers[sender];
				targetSocket.emit('chatMessage', { zeit: new Date(), name: sender, text: data.text, type: 'privateSelf', goesTo: data.privateTo });
	
			} else {  // ***** PUBLIC MESSAGE ***********
	 			console.log(sender + ' sends: ' + data.text );
				io.sockets.emit('chatMessage', {zeit: new Date(), name: sender, text: data.text, type: 'public' });
			}
//		}

	});
});

console.log('Server runs on: http://127.0.0.1:' + conf.port + '/');


