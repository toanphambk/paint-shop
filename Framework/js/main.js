$(function () {
//    $('.ball, .ball1').show(); falls noch benötigt
    window.addEventListener("load", function () {
//        $('.ball, .ball1').hide(); falls noch benötigt
        emosWS.connect();
        resize();
        
        window.addEventListener('online', function () {
            $('.myStation .appicon').removeClass('off');
            $('html,body').removeClass('offline');
        });
        window.addEventListener('offline', function () {
            $('.myStation .appicon').addClass('off');
            $('html,body').addClass('offline');
        });
        window.addEventListener("message", function (msg) {
            try {
                var myData = JSON.parse(msg.data);
                if (myData.type === 'newChatMessage') {
                    $('#chatwrapper.access').show();
                }
            } catch (e) {
            }

        });
        
        window.addEventListener('resize', function(){
            resize();
        });
        
        servers = emosWS.getServers();
        /*setInterval(function () {
            var offlineArr = 0;
            var servers1 = emosWS.getServers();  
            try{
                $.each(servers1, function (key, server){  
                    server.getStatus(function(status){
                        if(status.reachable === false){
                            offlineArr++;                            
                        }
                    }); 					 				
                });  
                if(offlineArr === servers1.length){
                    $('#stationname .appicon').addClass('off');
                    $('html,body').addClass('offline');
                    $('.servererror').show();
                }
            } catch(e){} 
        }, 5000);*/
        var 
            onConnected = function(){
                $('.myStation .appicon').removeClass('off');
                $('html,body').removeClass('offline');
		$('.servererror').hide();
            },
            onClosed = function(){
                $('.myStation .appicon').addClass('off');
                $('html,body').addClass('offline');
		$('.servererror').show();
            };
        emosWS.addEventListener('connecting', onClosed);
        emosWS.addEventListener('openWS', onConnected);
        emosWS.addEventListener('close', onClosed);        
	//$('<iframe id="chat" name="' + myArr.sn + '" src="' + chatURL + '">').appendTo('#chatwrapper');
    }, false);
    window.addEventListener('online', function () {
        $('.myStation .appicon').removeClass('off');
        $('html,body').removeClass('offline');
		$('.servererror').hide();
    });
    window.addEventListener('offline', function () {
        $('.myStation .appicon').addClass('off');
        $('html,body').addClass('offline');
		$('.servererror').show();
    });
    $(document).click(function() {
        $('.servererror').hide();
    });
    emosWS.addEventListener("authentication", function (e) {
        if (e.status === 'PASSED') {
            emosWS.userIdleActionLogout.setDuration(parseInt(globals.logoutTime));
            userRole = JSON.parse(e.profile)[0];
            $('.username').html(e.username);
            myName = e.username;
            userloggedin = true;
            privateResults = $.getPrivValues();
            $('.diagnose.privateOverlay .privTable .tBody').sortable('enable');
            if (!privateResults) {
                privateResults = {};
            }
            if (privateResults.language !== '') {
                emosWS.setLanguage(privateResults.language);
                /*setTimeout(function () {
                   emosWS.setLanguage(privateResults.language);
                }, 1000);*/
                myLanguage = privateResults.language;                
            }
            if(privateResults.measuring && privateResults.measuring !== '') {
                emosWS.setUnit(parseInt(privateResults.measuring));
                myMeasuring = parseInt(privateResults.measuring);
            }
            if(privateResults.languageCode && privateResults.languageCode !== ''){
                myLocalTime = privateResults.languageCode;
            }
            if(privateResults.language12h && privateResults.language12h !== ''){
                show12hTime = privateResults.language12h;
            }
            $('#login').addClass('logged');
            animateOff(".logmein", ".logmein", "#login");
            userRights = e.userright;
            if(quitSecurity){
                activateButton();
            }
            if ($('.diagnose').length > 0) {
                var numOfWin = $('.diagnose:not(.statusWelcome)');
                $.each(numOfWin, function(){
                    $(this).find('.DiagnoseBody')[0].msg.actTab = $(this).find('.DiagnosisPageControl.diatabs').tabs('option', 'active');
                    if($(this).parent().hasClass('configcenter full editor')){
                        $(this).find('.DiagnoseBody')[0].myParent = 'editor';
                    }
                });
                $('.diagnose:not(.statusWelcome)').remove();
                $.each(numOfWin, function(){
                    if($(this).find('.DiagnoseBody')[0].myParent && $(this).find('.DiagnoseBody')[0].myParent === 'editor') {
                        openstatwin($(this).find('.DiagnoseBody')[0].msg);
                    } else {
                        compareWin = true;
                        onMessage($(this).find('.DiagnoseBody')[0].msg);
                    }
                    myCounter++;
                });
            }
            $('.fileManager .save').removeClass('noAction');
            $('.fileManager .delete').removeClass('noAction');
            $('#usercenter').show();
            $('#noUser').hide();
            
        } else {
            $('.chat').hide();
            $('.username').html('');
            $('#precenter .alarm_solo .emosbutton:not(.firsttile)').addClass('disabled');
            userloggedin = false;
            privateResults = {};
            myName = 'Guest';
            $('#login').removeClass('logged');
            $('.diagnose.privateOverlay .privTable .tBody').sortable('cancel');
            $('.diagnose.privateOverlay .privTable .tBody').sortable('disable');
            
            userRights = '';
            $('.fileManager .save').addClass('noAction');
            $('.fileManager .delete').addClass('noAction');
            $('#usercenter').hide();
            $('#noUser').show();
            $('.configcenterRight .Groupbox').hide();
            $('.configcenter .buttonEdit').removeClass('active');
            $('.firsttile .tilename').removeClass('isFav');
            emosWS.setLanguage(defaultLang);
            
            if (defaultMeasuring === 2){
                emosWS.setUnit(0);
            }else{ 
                emosWS.setUnit(defaultMeasuring);
            }
            userRole = '';
            if ($('.diagnose').length > 0) {
                var numOfWin = $('.diagnose:not(.statusWelcome)');
                $.each(numOfWin, function(){
                    $(this).find('.DiagnoseBody')[0].msg.actTab = $(this).find('.DiagnosisPageControl.diatabs').tabs('option', 'active');
                     $(this).find('.DiagnoseBody')[0].actParent = $(this).parent().attr('class');
                });
                $('.diagnose:not(.statusWelcome)').remove();
                $.each(numOfWin, function(){     
                    if($(this).find('.DiagnoseBody')[0].actParent === 'configcenter full editor') {
                        openstatwin($(this).find('.DiagnoseBody')[0].msg);//, anotherWin
                    } else {
                        compareWin = true;
                        onMessage($(this).find('.DiagnoseBody')[0].msg);
                    }
                    myCounter++;
//                    onMessage($(this).find('.DiagnoseBody')[0].msg);//, anotherWin
                });
            }
        }
    }, false);
    
    emosWS.addEventListener("UserRight", function (e) {
        if (e.status !== "out") {            
            userRights = e.userright.rights;            
            if(quitSecurity){
                activateButton();
            }
            $('.fileManager .save').removeClass('noAction');
            $('.fileManager .delete').removeClass('noAction');
        } else {
            userRights = '';
            $('#quickcontrol > span:not(.trends)').addClass('noAction');
            $('.DiagnosisAlarmClient .quit').addClass('noAction');
            $('.fileManager .save').addClass('noAction');
            $('.fileManager .delete').addClass('noAction');
        }

    }, false);

    emosWS.addEventListener("Auto_Logoff_Reload", function () {  
        setTimeout(function () {
            location.reload();
        }, 3000);        
    });
    emosWS.addEventListener("4h_Reload", function () {
        location.reload();
    });
    if(userloggedin === false){
        
        emosWS.setLanguage(defaultLang);
        if (defaultMeasuring === 2)
                emosWS.setUnit(0);
        else 
            emosWS.setUnit(defaultMeasuring);
//        emosWS.addEventListener("open", function(){
//             setTimeout(function(){
//                emosWS.setLanguage(defaultLang);
//              }, 100); 
//        });
    }    
    
    emosWS.addEventListener("language", function (e) {
        countryCode = languageList[e].short;
        $('#langdropdown li').removeClass('active');
        $('#lang_' + e).parent().addClass('active');
        $('#act_lang').text(countryCode.toUpperCase());
        myLanguage = e;
    }, false);
    
    emosWS.addEventListener("unit", function (e) {
        $('#langdropdown li.metrics').removeClass('active');
        $('#langdropdown li.imperials').removeClass('active');
        if (e === 0)
            $('#langdropdown li.metrics').addClass('active');
        else if (e === 1)
            $('#langdropdown li.imperials').addClass('active');
    }, false);
    
    var station = "<span>Eco</span>Screen";//results.sidebuttons[appNum].stationname.replace('Eco', "<span>Eco</span>");
    if (!myArr.sn) {
        myArr.sn = 'Station';
    }
    
    $('#stationname').html('<span class="myStation">' + myArr.sn + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + station + "<span class='appicon'></span></span>");

//    servers = emosWS.getServers();
    if(results){
         // loop to build the Sidebuttons
        $.each(results.sidebuttons, function (key, val) {
            var id = getId();
            var svgPath = configURL + '../' + serverRoot + sidebuttonSVGPath + '/';
            items.push("<li class='cats'><span class='emosbutton " + val.iconclass + "' style='background-image:url(" + svgPath + val.iconclass + 
                    ".svg), linear-gradient(#fff, #d1d7e0);'><span class='' id='" + id + "'></span><p data-num='" + d_num + 
                    "' class='buttontext' id='" + val.textId + "'>" + val.name + "</p></span></li><span class='trenner'></span>");
            
            d_num++;
            getAnimationData(val.name, val.tiles);
            setTimeout(function () {
                alarmAnimations1.push(new emosWS.HTMLFaultWarning({
                    "id": id,
                    "alarmGroup": val.alarm
                }));
            }, 200);
        });
        ulMaker('maincats', items, '#left');
        $("<span/>", {
            "class": "emosbutton chat ",
            "text": "chat",
            click: function () {
                if (!$(this).hasClass('active')) {
                    $('#chatwrapper').show();
                    $(this).addClass('active');
                } else {
                    $('#chatwrapper').hide();
                    $(this).removeClass('active');
                }
            }
        }).appendTo('#left');

        // alerts for the Sidebuttons
        results.sidebuttons.forEach(function (val) {
            var text = document.getElementById(val.textId);
            if (val.textId) {
                text.appName = val.name;
                emosWS.sendAdviseText(val.textId, "name", function (msg) {
                    text.innerHTML = msg.value;
                });
            }
        });
        
        //  Build Tiles for Startpage or load Plant
        var home;
        var home_default;
        if(results.homestation) {
            $.each(results.homestation, function (key, val) {
                if(val.name === myArr.sn) {
                    home = results.homestation[key];
                    var app = home.sidebutton;
                    var plant = home.plant;
                    var pic = home.link;
                    var addAnimationsJobs = [];
                    if (app && plant && pic) {           
                        var tmpElem = $('<div/>', {
                            "data-link": home.link,
                            "target":{'innerText': home.plant}
                        });
                        tmpElem[0].target = {'innerText': home.plant};  
                        $('.cats').removeClass('active');
                        $('.' + app.toLowerCase()).parent().addClass('active');
                        $('.' + app.toLowerCase()).css('background-image', $('.' + app.toLowerCase()).css('background-image').split(",")[0]);
                        loadIframe(tmpElem[0], true);

                        var appNumx = $('.' + app.toLowerCase()).children('p').attr("data-num");
                        $('#alarmheader').empty();
                        buildAlarmHeader(appNumx, app, addAnimationsJobs);
                    }
                } 
            });
        }
        if(!home){
            buildTiles(0, results.sidebuttons[0].name);        
        } 
//        buildLanguageDropDown();
    } else if(myArr.content) { // Ausnahme für iTac
//        $('body').addClass('itac');
        var languageString = myArr.language ? ( (myArr.content.includes("?") ? "&" : "?") + "language=" + myArr.language) : ""; 
        var tmpElem = $('<div/>', {
            "data-link": myArr.content + languageString,
            "target":{'innerText': myArr.contentname}
        });
        tmpElem[0].target = {'innerText': myArr.contentname};
        loadIframe(tmpElem[0], true);
    } else {
        setTimeout(function () {
            activateConfig();
        }, 600); 
        
    }
    buildLanguageDropDown();
    $('#maincats .cats').click(function (event) {
//        $('.ball, .ball1').hide(); falls noch benötigt
        $('.modal').hide();
        closeOther('#maincats');        
        var tmp = $(".diagnose").get().length;
        if (tmp > 0) {
            $('.diagnose').find('.DiagnosisWindow').dialog('close');
            $('.diagnose').remove();
        }
        clearMyInterval();
        terminateActiveAlarmClient();
        $('#breadcrump').empty();
        $('#quickcontrol').empty();
        $('#alarmpage_content').empty();
        filenames = [];
        breadparts = [];
        breadurls = [];
        linklist = [];
        breadalarmgroup = [];
        $('#maincats').find('li.active').find('.emosbutton').css('background-image', $('#maincats').find('li.active').find('.emosbutton').css('background-image') + ", linear-gradient(#fff, #d1d7e0)");
        $('li.cats').removeClass('active');
        $('#center').removeClass('diagnosis');
        var appName = event.target.appName;
        var appNum = event.target.getAttribute("data-num");
        $('#center, #alarmheader').empty();

        animateOff(".alarmpage", ".alarmpage", "#alarms");
        setTimeout(function () {
            $('#precenter').hide();
        }, 400);
        //terminate all created animations before creating the new ones
        alarmAnimations.forEach(function (animation) {
            animation.terminate();
        });
        alarmAnimations = [];
        if(results.sidebuttons[$(event.target).attr('data-num')].link && results.sidebuttons[$(event.target).attr('data-num')].link !== ''){
            $(this).addClass('active').find('.emosbutton').css('background-image', $(this).find('.emosbutton').css('background-image').split(",")[0]);
            if (appName === 'Diagnosis') {
                $('#center').addClass('diagnosis');
            }
            var tmpElem = $('<div/>', {
                    "data-link": results.sidebuttons[$(event.target).attr('data-num')].link,
                    "target":{'innerText': results.sidebuttons[$(event.target).attr('data-num')].name}
                });
            tmpElem[0].target = {'innerText': results.sidebuttons[$(event.target).attr('data-num')].name};        
                    
//            $('#center').append('<div class="frameWrapper"></div>');
            loadIframe(tmpElem[0], true);
//            $('<iframe id="plants" name="plants" src="'+ results.sidebuttons[$(event.target).attr('data-num')].link +'">').appendTo('.frameWrapper');
//            emosWS.addEventListener("OpenDiagnosisWindow", onOpenDiagnosisWindow);
//            $('#plants').load(function () {                             
//                emosWS.addEventListener("SiteProperties", onSiteProperties);
//                var myMsg = {
//                    'type': "DiagnosisWindowMode",
//                    'mode': 1
//                };
//                var myElem = document.getElementById('plants').contentWindow;
//                myElem.postMessage(JSON.stringify(myMsg), '*');
//            });
            var addAnimationsJobs = [];
            buildAlarmHeader(appNum, appName, addAnimationsJobs, null, false, null, null);
        } else {
            buildTiles(appNum, appName);
        }
        
//        if (appName !== 'Diagnosis') {
//            $('#diagnosisApp').hide();
//            $('#diagnosisAlarmheader').hide();
//            $('#center').removeClass('diagnosis');
//            buildTiles(appNum, appName);            
//        } else {
//            $(this).addClass('active');            
//            $('#center').addClass('diagnosis');
//            $('<iframe id="diagnosiscontainer" name="diagnosiscontainer" src="diagnosis.html">').appendTo('#center');
//        }

    });

//    $('main').on("click", "#alarms", function (event) {
    $('main').on("click", ".blockbutton, .singlebutton", function (event) { 
        var self = $(this);
        if ($('#alarms').hasClass('active') || $(this).hasClass('active')) {
            alarmheaderReset();
            animateOff(".alarmpage", ".alarmpage", "#alarms");
            setTimeout(function () {
                $('#precenter').hide();
                $('#alarmpage_content .DiagnosisAlarmClient').remove();
                $('#alarmpage_content .DiagnosisRestAlarmClient').remove();
                $('#alarmpage_content .TrendPageElement').remove();
                $('#alarmpage_content iframe').remove();
                $('#selectId').remove();
                $(".alarmpage").attr('class', '').addClass('alarmpage');
                
                var iconButton = self.parent().find('li');
                if(self.hasClass('active')){
                    if (self.hasClass('singlebutton'))
                        iconButton = self;
                    else
                        iconButton = self.parent().find('.blockbutton');
                    self.parent().find('.blockbutton').removeClass('active');
                }
                self.removeClass('active');
                
                $.each(iconButton, function() {
                    $(this).css('background-image', $(this).css('background-image') + ', linear-gradient(#fff, #d1d7e0)');
                });
            }, 400);
            clearMyInterval();
            terminateActiveAlarmClient();

        } else {
            closeOther("#alarms");
            
            //var boxchecked = false;
            $(".alarmpage").attr('class', '').addClass('alarmpage');
            $("#alarms").find('.emosbutton').removeClass('active');
            
            var iconButton = $(this);
            if($(this).hasClass('blockbutton')){
                var numberOfBlock = $('#alarms').find('.blockbutton');
                var numOfElements  = $('#alarms').find('li');
                if(numberOfBlock.length === numOfElements.length){
                    $(this).parent().addClass('active');
                    iconButton = $(this).parent().find('li');
                } else {
                    $(this).parent().find('.blockbutton[data-num="'+ $(this).attr('data-num') +'"]').addClass('active');
                    iconButton = $(this).parent().find('.blockbutton[data-num="'+ $(this).attr('data-num') +'"]');
                }
            } else {
                $(this).addClass('active');
            }
            
            $.each(iconButton, function() {
                $(this).css('background-image', $(this).css('background-image').split(',')[0]);
            });
            
            $('body').css('overflow', 'hidden');            
            if($(this).attr('data-url') && $(this).attr('data-url') !== ''){
                showSingleOverlay(self.attr('data-name'), self.attr('data-url'));
            } else {
               showReportOverlay(); 
            }
            
//            if(privateResults && privateResults.plants){
//                var mylist = privateResults.plants;
//            }
//            $(".alarmpage").show().animate({
//                height: "100%"
//            }, 600, function () {
//                $.each($('#alarmpage_content ul'), function () {
//                    if ($(this).position().top >= $('#alarmpage').height() - 170) {
//                        $(this).css('opacity', 0.5);
//                        $('#alarmpage .scrollUp, #alarmpage .scrollDown').show();
//                        $('#alarmpage .scrollDown').addClass('active');
//                    }
//                    if(mylist) {
//                        if(jQuery.inArray( $(this).find('.tilename').attr('data-name'), mylist) !== -1){
//                            $(this).find('.tilename').addClass('isFav');
//                            $(this).find("li input").prop('checked', true);
//                            boxchecked = true;
//                        }                          
//                    }
//                    
//                });
//                if (!privateResults && $('#alarmpage_content ul').length <= 3) {
//                    $('ul.alarm_solo').css('float', 'none');
//                    $("ul.alarm_solo li input").prop('checked', true);
//                    getDetailsOverlay();
//                } else if(privateResults && privateResults.plants && boxchecked){
//                    $('ul.alarm_solo').css('float', 'none');
//                    getDetailsOverlay();
//                }
//                showScroll($('#alarmpage_content'));
//            });
//            myAlarmList = emosWS.getAlarmList();
//            event.stopPropagation();

        }
    });
    //AlarmingList - APT & Maintenance
    $('#precenter').on("click", '.DiagnosisRestAlarmClient tr', function(event){
              
        $(this).closest('#maintenanceTable').find('.qrcode').remove();
        
        if ($(event.target).hasClass('acknowledge')){
            var plc = $($(this).find(".tdTask").find('p')[0]).text();
            var iconClass = $(this).find(".tdIcon.icon").attr('data');
            var tag = plc;
            var tagRes;
            var value = 0;
            
            switch (iconClass){
                case "clock": 
                    tag += ".AA.I2001_OperTime";
                    tagRes = plc + ".AA.I2030_ResOpCyc";
                    break;
                case "interval":
                    tag += ".AA.I2032_ResPerMaint";
                    value = Date.parse(new Date());
                    break;
                case "counter":
                    tag += ".AA.I2000_OpCyc";
                    tagRes = plc + ".AA.I2031_ResOperTime";
                    break;
            }
            getResetDialog(plc, tag, value, tagRes);
            return;
        }
        
        if ($(event.target).hasClass('writebutton')){
            $(event.target).css('display', 'none');
            $(this).find('.savemebutton').css('display', 'block');
            $(this).find('.cancelbutton').css('display', 'block');
            $(this).find('.tdLimit').find('.numpadMaintenance').empty().css('display', 'block');
            var iconClass = $(this).find('.tdIcon.icon').attr('data');
            
            switch (iconClass){
                case "interval": 
                    var myDate = $(this).find('.tdLimit').find('.maintenanceStatus').text();
        
                    $(this).find('.tdLimit').find('.numpadMaintenance').mobiscroll().date({
                        theme: 'wp',     
                        mode: 'mixed', 
                        display: 'inline',
                        lang: 'de',
                        scrollLock: false,
                        dateOrder: 'ddmmyy',
                        dateFormat: 'dd/mm/yy',
                        //minDate: new Date(2000, 1, 1, 15, 23, 31),        
                        maxDate: new Date(2050, 12, 31),
                        showLabel: false
                    }).mobiscroll('setValue', myDate);
                    break;
                case "counter":
                    $(this).find('.tdLimit').find('.numpadMaintenance').css('padding-top', '20px');
                    $(this).find('.tdLimit').find('.numpadMaintenance').numpadMaintenance({
                        'myid': event.target.id
                    });
                    break;
                case "clock":
                    var myTime = $(this).find('.tdLimit').find('.maintenanceStatus').text();
                    var splitTime = myTime.replace(/[wdh]/g,'').split(" ");
                    
                    $(this).find('.tdLimit').find('.numpadMaintenance').mobiscroll().scroller({
                        theme: 'wp',     
                        mode: 'mixed', 
                        display: 'inline',
                        lang: 'de',
                        scrollLock: false,
                        cssClass: 'longtype',
                        wheels:[[
                            {
                            label: "week",
                            keys: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
                            values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
                            },
                            {
                            label: "day",
                            keys: [0,1,2,3,4,5,6],
                            values: [0,1,2,3,4,5,6]
                            },
                            {
                            label: "hour",
                            keys: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
                            values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
                            }
                        ]],
                        showLabel: false
                    }).mobiscroll('setValue', [splitTime[0], splitTime[1], splitTime[2]]);
                    break;
            }
            return;
        }
        if ($(event.target).hasClass('cancelbutton')){
            
            var widget = $(this).find('.tdLimit').find('.numpadMaintenance').data("ems-numpadMaintenance");
            if (widget)
                widget.destroy();
            
            $(event.target).css('display', 'none');
            $(this).find('.savemebutton').css('display', 'none');
            $(this).find('.writebutton').css('display', 'block');
            $(this).find('.tdLimit').find('.numpadMaintenance').empty().css('display', 'none');
        }
        
        if ($(event.target).hasClass('savemebutton')){
            $(event.target).css('display', 'none');
            $(this).find('.cancelbutton').css('display', 'none');
            $(this).find('.writebutton').css('display', 'block');
            
            var iconClass = $(this).find(".tdIcon.icon").attr('data');
            switch (iconClass){
                case "clock": 
                    var tag = $($(this).find(".tdTask").find('p')[0]).text() + ".AA.I2011_LimOperTime";
                    var limitScroll = $(this).find('.tdLimit').find('.numpadMaintenance');
                    var limit = limitScroll.mobiscroll('getVal', true).split(" ");
                    var hours = parseInt(limit[0]) * 7 * 24 + parseInt(limit[1]) * 24 + parseInt(limit[2]);
                    emosWS.poke(tag, hours);
                    break;
                case "interval":
                    var tag = $($(this).find(".tdTask").find('p')[0]).text() + ".AA.I2020_PerMaint";
                    var limitScroll = $(this).find('.tdLimit').find('.numpadMaintenance');
                    var limitDif = (parseInt(Date.parse(limitScroll.mobiscroll('getVal', true))) - parseInt($(this).find(".tdStatus.actualValue").attr('data')))/3600000;
                    emosWS.poke(tag, limitDif);
                    break;
                case "counter":
                    var tag = $($(this).find(".tdTask").find('p')[0]).text() + ".AA.I2010_LimOpCyc";
                    emosWS.poke(tag, $(this).find('.numpad').find('input').val());
                    break;
            }
            
            $(this).find('.tdLimit').find('.numpadMaintenance').empty().css('display', 'none');
        }
        
        if ($(event.target).hasClass('maintenanceQRCode')){
            
            var left = event.clientX - 178;
            var top = (event.clientY + 250) > window.innerHeight ? event.clientY - 398 : event.clientY - 224;
            var tableRow = $(this).find(".tdTask").find('p');
            
            var strText = "";
            tableRow.each(function (){
                strText += $(this).text() + " ";
            });
            
            $('<div id="qrCodeM" class="maintenanceStatus qrcode" style="left:' + left + 'px; top:' + top + 'px;"></div>').appendTo($(event.target).parent());
            new QRCode("qrCodeM", {text: strText, width: 125, height: 125, colorDark : "#000000", colorLight : "#ffffff", correctLevel : QRCode.CorrectLevel.M});
            return;
        }
            
        var target = $(this).find('.tdText');
        if (target.text().indexOf("?") === -1 && target.text().indexOf("?") === -1)
            return;
        
        if (!alarmingAPT)
            alarmingAPT = $.getAPTAlarmList();
        
        if($(this).hasClass('expand')){
            target.find('p').remove();
            var text = target.text().replace("▲", "▼");
            target.text(text);
            $(this).removeClass('expand');
        } else {
            var data = checkAPTPattern(target.text());
            var text = target.text().replace("▼", "▲");
            target.text(text);
            
            var component = null;
            if (data && alarmingAPT )
                component = alarmingAPT[data];
            
            if (!component)
                component = {Cause: "-", Action: "-"};
            
            $("<p/>", {
                "text": component.Cause
            }).appendTo(target);
            $("<p/>", {
                "text": component.Action
            }).appendTo(target);
            
            $(this).addClass('expand');
        } 
    });
    //ende text
    $('main').on("mousedown", "#alarms", function () {
        if (!$(this).hasClass('active')) {
            $(this).children('li').addClass('MD');
        }
    });
    $('main').on("mouseup", "#alarms", function () {
        $(this).children('li').removeClass('MD');
    });
    $('main').on("click", ".alarm_solo .automatic,.alarm_solo .handMode,.alarm_solo .handmode,.alarm_solo .handturnonmode,.alarm_solo .localRemote,.alarm_solo .plantStartStop", function () {
        var operationRights;
        if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Process'){
            operationRights = CheckUserRight( "psa_ur", 9 );
        } else if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Conveyor'){
            operationRights = CheckUserRight( "act_ur", 9 );
        } 
        if(!operationRights) 
            return;
        var actTile = results.sidebuttons[$('.cats.active p').attr('data-num')].tiles[$(this).attr('data-name')];
        
        plcurl = actTile.plcsoftware;
        var plcList = $.getPLCdata();
        var myClass = $(this).attr('class').replace('emosbutton ', "");
        var tagsAuto = [
            actTile.plc + actTile.cabinetname + plcList['Manual_IsOn'],
            actTile.plc + actTile.cabinetname + plcList['Manual_TurnOn'],     
            actTile.plc + actTile.cabinetname + plcList['Auto_IsOn'],
            actTile.plc + actTile.cabinetname + plcList['Auto_TurnOn']
        ];
        var tagsRemote = [
            actTile.plc + actTile.cabinetname + plcList['Local_IsOn'],
            actTile.plc + actTile.cabinetname + plcList['Local_TurnOn'],
            actTile.plc + actTile.cabinetname + plcList['Remote_IsOn'],
            actTile.plc + actTile.cabinetname + plcList['Remote_TurnOn'],
        ];
        var tagsCentralstart = [
            actTile.plc + actTile.cabinetname + plcList['CentralStart_IsOn'],
            actTile.plc + actTile.cabinetname + plcList['CentralStart_TurnOn'],
            actTile.plc + actTile.cabinetname + plcList['CentralStart_IsStripeOut'],
            actTile.plc + actTile.cabinetname + plcList['CentralStart_TurnOffPE'],
            actTile.plc + actTile.cabinetname + plcList['CentralStart_TurnOffDirect']
        ];
        $(this).addClass('wantSwitch');
         
        switch (true) {  
            case $(this).hasClass('automatic'):  
                getDialog('automatic', tagsAuto, 1);
//                getDialog('automatic', actTile.plc + actTile.cabinetname + plcList['Auto_TurnOn'], 1);
                break;
            case $(this).hasClass('automode'):
                getDialog('automode');
                break;
            case $(this).hasClass('autoturnonmode'):
                getDialog('autoturnonmode');
                break;
            case $(this).hasClass('handMode'):
                getDialog('handmode', tagsAuto, '1');
//                getDialog('manuell', actTile.plc + actTile.cabinetname + plcList['Manual_TurnOn'], '1');
                
                break;
            case $(this).hasClass('handmode'):
                getDialog('handmode');
                break;
            case $(this).hasClass('handturnonmode'):
                getDialog('handturnonmode');
                break;
            case $(this).hasClass('localRemote'):
//                $(this).addClass('wantSwitch');
                getDialog('LOCAL', tagsRemote, '1');
                break;
            case $(this).hasClass('plantStartStop'):
                onOffCounter = 0;
//                $(this).addClass('wantSwitch');
                getCentralStartDialog('CentralStart turn on', tagsCentralstart, '1');
                break;

        }
    });
    
    $('.languages').click(function (e) {
        var langId = Number($(this).children().attr('id').replace('lang_', ""));
        myLanguage = langId;
        emosWS.setLanguage(langId);
    });
    $('.metrics').click(function (e) {
        emosWS.setUnit(0);
    });
    $('.imperials').click(function (e) {
        emosWS.setUnit(1);
    });
    $('#config').click(function (event) {
        clearMyInterval();
        terminateActiveAlarmClient();
        
        if ($('#config').hasClass('active')) {
            animateOff(".preferences", ".preferences", "#config");
            $(".preferences").animate({
                height: "0"
            }, 400, function(){
                $(".preferences").hide();
                $('#center').css('overflow', 'hidden');   
                $(".configcenter").empty().removeClass('editor');
                $('.newButton').remove();
            });
            $(this).removeClass('active');
        } else {
            $(".configcenter").empty();
            $('.newButton').remove();
            activateConfig();
        }
    });
    
    $('#center').on('click', '.preferences li.cats', function(){
        $('.preferences li.cats').removeClass('active');
        $(".configcenter").empty().removeClass('full').removeClass('editor');
        $('.newButton').remove();
        $(".configcenterRight").empty().hide();
        $(this).addClass('active');    
        var isAdmin = emosWS.isAdmin() ? '' : 'disabled';
        
        if($(this).hasClass('servercenter')){
            $(".configcenter").addClass('full');
            $(".configcenter").append('<div id="servercenter"></div>');
            getServerList(); 
        } else if($(this).hasClass('frameworkcenter')) {
            $(".configcenter").append(frameworkcenter);
            $(".configcenterRight").show().append(frameworkcenterR);            
            $(".configcenter .framework .buttonEdit").removeClass('disabled').addClass(isAdmin);
            if($('#center .preferences.full .configcenterRight').find('.Groupbox:visible').length === 0){
                $('.configcenter').find('.Groupbox.framework').find('.emosbutton.buttonEdit.active').removeClass('active');
            }
        } else if($(this).hasClass('appcenter')) {
            $(".configcenter").addClass('full');
            buildAppList($(".configcenter"));            
            $(".preferences.full").append('<span class="emosbutton newButton newApp '+ isAdmin +'"></span>');
            showScroll($('.configcenter.full'));            
        } else if($(this).hasClass('usercenter')) {
            $(".configcenter").append(usercenter);
            $(".configcenterRight").show().append(usercenterR);
            getTimeCodes();
            if(userloggedin === false){
                $('#usercenter').hide();
                $('#noUser').show();
            } else {
                $('#usercenter').show();
                $('#noUser').hide();
            }
        } else if($(this).hasClass('editorcenter')) {
            $(".configcenter").addClass('full editor');              
            buildJsonList($(".configcenter"));
        }
        if($('.configcenter').hasClass('full') && $('.configcenter.full').nextAll('.scrollDown').length === 0){
            scrollUpDownButton('.configcenter.full', '.preferences.full', '.Groupbox', 'scrollUp');
            scrollUpDownButton('.configcenter.full', '.preferences.full', '.Groupbox', 'scrollDown');
        }
    });
    $('#center').on('change', '.upload', function() {
        $('.cLogo .text').text($(this)[0].files[0].name);
        $(this).parent().prev('.savebutton').removeClass('disabled');
   });
   $('#center').on('click', '.preferences.full .newServer', function(){
         $(".configcenter #servercenter").prepend(newServer());
         buildNewServer = true;
         showScroll($('.configcenter.full'));
         $('.Groupbox.applist').hide();
    });
    $('#center').on('click', '.configcenter #servercenter .newapp .savebutton', function(){
        if($(this).nextAll('.webserver').length > 0) {
            saveServerName($(this).next().find("input[name='Host name']").val());
            saveServer($(this).next().find("input[name='Host name']").val(), $(this));
        } else {
            saveServerName($(this).next().find("input[name='Host name']").val());
            editServer($(this).next().find("input[name='Host name']").val());
        }
        
    });
    $('#center').on('click', '.configcenter #servercenter .server .delete', function(){
        deleteServerName($(this).attr("data-name"), $(this).parent());
    });
    $('#center').on('click', '.configcenter .server:not(.chatserver) .buttonEdit', function(){
        if($(this).closest('#servercenter').find('.Groupbox.newapp').length > 0){
            $(this).closest('#servercenter').find('.Groupbox.newapp').prev().show();
            $(this).closest('#servercenter').find('.Groupbox.newapp').remove();
        }
        var dataFile = $(this).attr('data-name');
        if($(this).parent().hasClass('centralcasserver')){
            editCentralCasServer($(this).parent());
        } else {
            editServer(dataFile, true, $(this).parent()); 
        }
        
     });
     $('#center').on('click', '.configcenter .server .admin', function(){
        if($(this).closest('#servercenter').find('.Groupbox.newapp').length > 0){
            $(this).closest('#servercenter').find('.Groupbox.newapp').prev().show();
            $(this).closest('#servercenter').find('.Groupbox.newapp').remove();
        }
        var dataFile = $(this).attr('data-name');
        showAdminpage(dataFile, $('#servercenter')); 
        
     });
    $('#center').on('click', '.configcenter .framework .buttonEdit', function(){
        $('.configcenter .buttonEdit').removeClass('active');
        $(this).addClass('active');
        $('.configcenterRight .Groupbox').hide();
        $('.configcenterRight .' + $(this).attr("data-name")).show();
        $('.settings .measuring li[data-value="'+ defaultMeasuring +'"]').addClass('active')
    });
    $('#center').on('click', '.configcenter .user .buttonEdit', function(){
        $('.configcenter .buttonEdit').removeClass('active');
        $(this).addClass('active');
        $('.configcenterRight .Groupbox').hide();
        $('.configcenterRight .' + $(this).attr("data-name")).show();
        switch ($(this).attr("data-name")) {
            case 'languagemeasuring':
                $('.configcenterRight .languagemeasuring').find('.languageButton').text(languageList[myLanguage].long).parent().next().find('li').removeClass('active');
                $('.configcenterRight .languagemeasuring .language').find('li[data-value="'+ myLanguage +'"]').addClass('active');
                $('.configcenterRight .languagemeasuring').find('.measuringButton').text(measuringList[myMeasuring]).parent().next().find('li').removeClass('active');
                $('.configcenterRight .languagemeasuring .measuring').find('li[data-value="'+ myMeasuring +'"]').addClass('active');
                break;
            case 'privatetabs':
                getprivateTabList();
                break;
            case 'trendingfav':
                getTrendingSetList();
                break;
            case 'plantfav':
                setPlantFavorites();
                break;
        }    
    });
    $('#center').on('click', '.configcenter .Groupbox.applist .buttonEdit, .configcenter .Groupbox.applist .copyTab', function(){
        if($(this).closest('.configcenter.full').find('.Groupbox.newapp').length > 0){
            $('.Groupbox.newapp').remove();
            $('.Groupbox.applist').show();
        }
        var scrollTo = $(this).closest('.Groupbox.applist').position().top - 20;
        var dataFile = $(this).attr('data-name');
        buildNewApp = false;
        console.log(scrollTo)
        editApp($(this).parent(), dataFile, ($(this).hasClass('copyTab')) ? true : false); 
        showScroll($('.configcenter.full'));
        $('.Groupbox.applist').hide();
    });
    $('#center').on('click', '.configcenter .Groupbox.applist .reload', function(){
        var dataFile = $(this).attr('data-name');
        var newUrl = location.origin + location.pathname + '?app=' + dataFile;
        
        if (myArr.js){
            newUrl += "&js=" + myArr.js; 
        }
        
        if (myArr.css){
            newUrl += "&css=" + myArr.css; 
        } 
        window.location.href = newUrl;
    });
    $('#center').on('click', '.configcenter .Groupbox.applist .delete', function(){
        var dataFile = $(this).attr('data-name');
        getDeleteDialog(dataFile);
    });
    $('#center').on('click', '.configcenter .Groupbox.sidebuttonlist .buttonEdit', function(){
        if($(this).closest('.Groupbox.newapp').find('.newSidebutton').length > 0){
            $(this).closest('.Groupbox.newapp').find('.newSidebutton').remove();
        }
        var scrollTo = $(this).closest('.Groupbox.sidebuttonlist').offset().top - 20 - $('.configcenter.full').offset().top;
        var dataFile = $(this).attr('data-name');
        var dataNum = $(this).attr('data-num');
        editSidebutton($(this).parent(), dataFile, dataNum);
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        }, {
            complete: function () {
                    showScroll($('.configcenter.full'));                
                }
        });
    });
    $('#center').on('click', '.configcenter .Groupbox.sidebuttonlist .delete', function(){
        appResults.sidebuttons.splice($(this).attr('data-num'), 1);
        $(this).closest('.sidebuttonlist').remove();
        showScroll($('.configcenter.full'));
    });
    $('#center').on('click', '.configcenter .Groupbox.plantslist .buttonEdit', function(){
        if($(this).closest('.Groupbox.newapp').find('.newPlant').length > 0){
            $(this).closest('.Groupbox.newapp').find('.newPlant').remove();
        }
        var scrollTo = $(this).closest('.Groupbox.plantslist').offset().top - 20 - $('.configcenter.full').offset().top;
        var dataFile = $(this).attr('data-name');
        var dataNum = $(this).attr('data-num');
        var dataSidebuttonNum = $(this).attr('data-sidebuttonnum');
        editPlant($(this).parent(), dataSidebuttonNum, dataFile, dataNum);
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        }, {
            complete: function () {
                    showScroll($('.configcenter.full'));                
                }
        });
    });
    $('#center').on('click', '.configcenter .Groupbox.plantslist .delete', function(){
        appResults.sidebuttons[$(this).attr('data-sidebuttonnum')].tiles.splice($(this).attr('data-num'), 1);
        $(this).closest('.plantslist').remove();
        showScroll($('.configcenter.full'));
    });
    $('#center').on('click', '.configcenter .Groupbox.alarmbuttonslist .buttonEdit', function(){
        if($(this).closest('.Groupbox.newapp').find('.newAlarmbutton').length > 0){
            $(this).closest('.Groupbox.newapp').find('.newAlarmbutton').remove();
        }
        var scrollTo = $(this).closest('.Groupbox.alarmbuttonslist').offset().top - 20 - $('.configcenter.full').offset().top;
        var dataFile = $(this).attr('data-name');
        var dataNum = $(this).attr('data-num');
        var dataSidebuttonNum = $(this).attr('data-sidebuttonnum');
        editAlarmbutton($(this).parent(), dataFile, dataNum, dataSidebuttonNum); 
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        }, {
            complete: function () {
                showScroll($('.configcenter.full'));                
            }
        });
    });
    $('#center').on('change', '.configcenter input[name="buttontype"]', function(){
        $(this).closest('.newapp.newAlarmbutton')[0].myObj['buttontype'] = $(this)[0].value;
        $(this).closest('.Groupbox.newapp').find('.savebutton').removeClass('disabled');
    });
//    $("input[name='radioName']:checked").val()
    $('#center').on('click', '.configcenter .Groupbox.alarmbuttonslist .delete', function(){
        appResults.sidebuttons[$(this).attr('data-sidebuttonnum')].alarm_buttons.splice($(this).attr('data-num'), 1);
        $(this).closest('.alarmbuttonslist').remove();
    });
    $('#center').on('click', '.configcenter .Groupbox.homestationlist .buttonEdit', function(){
        if($(this).closest('.Groupbox.newapp').find('.newHome').length > 0){
            $(this).closest('.Groupbox.newapp').find('.newHome').remove();
        }
        var scrollTo = $(this).closest('.Groupbox.homestationlist').offset().top - 20 - $('.configcenter.full').offset().top;
        var dataFile = $(this).attr('data-name');
        var dataNum = $(this).attr('data-num');
        editHome($(this).parent(), dataFile, dataNum);        
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        }, {
            complete: function () {
                showScroll($('.configcenter.full'));                
            }
        });
    });
    $('#center').on('click', '.configcenter .Groupbox.homestationlist .delete', function(){
        appResults.homestation.splice($(this).attr('data-num'), 1);
        $(this).closest('.homestationlist').remove();
        showScroll($('.configcenter.full'));
    });
    $('#center').on('change', '.configcenterRight input[type="checkbox"]', function(){
        $(this).closest('.Groupbox').find('.savebutton').removeClass('disabled');
    });
    $('#center').on('click', '.configcenterRight .languages .savebutton', function(){
        saveLanguageList();
    });
    
    $('#center').on('click', '.configcenterRight .settings .savebutton', function(){
        saveSettings();
    });
    $('#center').on('click', '.configcenterRight .logoutSetting .savebutton', function(){
        saveLogoutTime();
    });
    $('#center').on('click', '.configcenterRight .cLogo .savebutton', function(){
        saveLogo();
    });
    $('#center').on('click', '.configcenterRight #languagedropdown', function(){
//        $('#languagedropdownlist').show();
    });
    $('#center').on('click', '.configcenterRight .options .savebutton', function(){
        saveOptions();
    });
    $('#center').on('click', '.configcenterRight .languagemeasuring .savebutton', function(){
        saveUserLanguage();
    });
    
    $('#center').on('click', '.configcenterRight .privatetabs .savebutton', function(){
        var selectedItems = $(this)[0].toDel;
        $.each(selectedItems, function(){
            delete privateResults.tabs[$(this).text()];
            $(this).remove(); 
        }); 
        emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults));
        $(this).addClass('disabled');
    });
    $('#center').on('click', '.configcenterRight .privatetabs .cancelbutton', function(){
        if($(this).next().hasClass('disabled')){
            hideElement(this);
        } else {
            delete $(this)[0].toDel;
            $(this).next().addClass('disabled');
            $(this).nextAll('.tabholder').find('.breadoverlay_li.active').show().removeClass('active');
        }        
    });
    $('#center').on('click', '.configcenterRight .Groupbox.privatetabs .delete', function(){
        var selectedItems = $(this).next().find('.breadoverlay_li.active');
        $.each(selectedItems, function(){
            $(this).hide();    
        });  
        $(this).prev()[0].toDel = selectedItems;
        $(this).prev().removeClass('disabled');        
    });
    $('#center').on('click', '.configcenterRight .trendingfav .savebutton', function(){
        saveTrendingSetFavorites();
    });
    $('#center').on('click', '.configcenterRight .plantfav .savebutton', function(){
        savePlantFavorites();
    });
    $('#center').on('click', '.configcenter .Groupbox.newapp:not(.newserver) .savebutton', function(){
        saveApp($(this).closest('.newapp'));
    });
    $('#center').on('change', '#servercenter input, #servercenter textarea', function(){
        $('#servercenter').find('.savebutton').removeClass('disabled');
    });
    $('#center').on('click', '.preferences.full .dropdownlist li:not(.folder)', function(){
        if($(this).closest('.newjson').length > 0){
//            if($(this).parent().hasClass('chooseTab')){
//                $(this).parent().remove();
//            }
            
            return;
        }
        
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().prev().find('span').attr('class', '');
        $(this).closest('.Groupbox').find('.savebutton').removeClass('disabled');
        $(this).closest('.Groupbox.newapp').find('.savebutton').removeClass('disabled');
        if($(this).parent().attr('data-name') === 'iconclass'){
            $(this).closest('.newapp').prev().find('.pagerHeadLineIcon').attr('class','pagerHeadLineIcon ' + $(this).attr('data-value')).css('background-image', $(this).css('background-image'));
            var plant = $(this).closest('.newSidebutton').children().eq(1).find('.newPlant').find('.inputGroup');
            if ($(this).attr('data-value') === "conveyor"){
                if (!plant.eq(6).hasClass('display')){
                    plant.eq(6).addClass('display');
                    plant.eq(7).addClass('display');
                    plant.eq(8).addClass('display');
                }
            } else if ($(this).parent().hasClass('act')){
                plant.eq(6).removeClass('display');
                plant.removeClass('display');
                plant.eq(8).removeClass('display');
            }
        }
        
        if($(this).closest('.newapp').length > 0){
            var motherObj;
            var bAlarmbutton = false;
            
            if($(this).closest('.newapp').hasClass('newSidebutton')){
                motherObj = $(this).closest('.newapp.newSidebutton');
            } else if($(this).closest('.newapp').hasClass('newPlant')){
                motherObj = $(this).closest('.newapp.newPlant');
            } else if($(this).closest('.newapp').hasClass('newAlarmbutton')){
                motherObj = $(this).closest('.newapp.newAlarmbutton');
                bAlarmbutton = $(this).closest('.dropdownlist').attr('data-name') === "alarm_type" ? true : false;
            }
            
            if (bAlarmbutton) {
                showAlarmIDinConfig(this, motherObj);
            } else {
                if (motherObj[0].myObj["alarm_type"] === "aptanimation"){
                    var alarmName = "alarm";
                    
                    if ($(this).closest('.dropdownlist').attr('data-name') === "alarm_id_rpc")
                        alarmName = "alarm_rpc";
                    motherObj[0].myObj[alarmName] = $.getPLCdataAPT()[$(this).text()];
                }
                
                $(this).parent().prev().find('span').css('background-image', $(this).css('background-image')).text($(this).text());
                motherObj[0].myObj[$(this).parent().attr('data-name')] = $(this).attr('data-value');
            }

        } else if ($(this).closest('.box.language').length > 0){
            $(this).closest('.box.language').find('.dropdown.emosbutton.noicon span').text($(this).text());
        } else if ($(this).closest('.box.measuring').length > 0){
            $(this).closest('.box.measuring').find('.dropdown.emosbutton.noicon span').text($(this).text());
        } else if ($(this).closest('.box.logoutSet').length > 0){
            $(this).closest('.box.logoutSet').find('.dropdown.emosbutton.noicon span').text($(this).text());
        }
        
        
        showScroll($('.configcenter.full'));
    });
    $('#center').on('click', '.preferences.full .newApp', function(){
         $(".configcenter").prepend(newApp());
         buildNewApp = true;
         showScroll($('.configcenter.full'));
         $('.Groupbox.applist').hide();
    });
     $('#center').on('click', '.configcenter .addSidebutton', function(){
        if($(this).closest('.Groupbox.newapp').find('.newSidebutton').length > 0){
            $(this).closest('.Groupbox.newapp').find('.newSidebutton').remove();
        }
        if($(this).closest('.newapp').find('input:required:invalid').length > 0){ 
            $(this).closest('.newapp').find('input:required:invalid').addClass('error');
            var scrollTo = $(this).closest('.newapp').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
            return;
        } else {
            $(this).parent().append(addSidebutton(true));
            showScroll($('.configcenter.full'));
        }
    });
    $('#center').on('click', '.configcenter .addPlant', function(){
        if($(this).closest('.newapp').find('input:required:invalid').length > 0 && !$(this).closest('.newapp').find('input:required:invalid').hasClass('disabled')){
            $(this).closest('.newapp').find('input:required:invalid').addClass('error');
            var scrollTo = $(this).closest('.newapp').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
            return;
        } else {
            if($(this).closest('.Groupbox.newapp').find('.newPlant').length > 0){
                $(this).closest('.Groupbox.newapp').find('.newPlant').remove();
            }
            $(this).parent().append(addPlant(true, $(this).closest('.newSidebutton').attr('data-num')));
            showScroll($('.configcenter.full'));
        }
    });
    $('#center').on('click', '.configcenter .addAlarmbutton', function(){
        if($(this).closest('.newapp').find('input:required:invalid').length > 0 && !$(this).closest('.newapp').find('input:required:invalid').hasClass('disabled')){
            $(this).closest('.newapp').find('input:required:invalid').addClass('error');
            var scrollTo = $(this).closest('.newapp').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
            return;
        } else {
            if($(this).closest('.Groupbox.newapp').find('.newAlarmbutton').length > 0){
                $(this).closest('.Groupbox.newapp').find('.newAlarmbutton').remove();
            }
            $(this).parent().append(addAlarmbutton(true, $(this).closest('.newSidebutton').attr('data-num')));
            var scrollTo = $(this).closest('.innerbox.alarmbuttons').offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            }, {
                complete: function () {
                    showScroll($('.configcenter.full'));                
                }
            });
        }        
    });
    $('#center').on('click', '.configcenter .addHome', function(){
        if($(this).closest('.Groupbox.newapp').find('.newHome').length > 0){
            $(this).closest('.Groupbox.newapp').find('.newHome').remove();
        }
        $(this).prev().append(addHome(true));
        showScroll($('.configcenter.full'));
    });
    $('#center').on('blur', '.secondList .normbox, .secondList .shortbox', function(){
        $(this).closest('.Groupbox.languages').find('.savebutton').removeClass(' disabled');
    });
    $('#center').on('blur', '.preferences.full .configcenter:not(.editor) .Groupbox .text', function(){
        var motherObj;
        var bAlarmButtonPLC = false;
        
        if($(this).closest('.newapp').hasClass('newSidebutton')){
            motherObj = $(this).closest('.newapp.newSidebutton');
        } else if($(this).closest('.newapp').hasClass('newPlant')){
            motherObj = $(this).closest('.newapp.newPlant');
        } else if($(this).closest('.newapp').hasClass('newAlarmbutton')){
            motherObj = $(this).closest('.newapp.newAlarmbutton');
            bAlarmButtonPLC = $(this).attr('name') === "plc" ? true : false;;
        } else if($(this).closest('.newapp').hasClass('newHome')){
            motherObj = $(this).closest('.newapp.newHome');
        }
        if($(this).attr('name') !== 'App name' && $(this).attr('name') !== 'Host name' && $(this).attr('name') !== 'service url' && motherObj && motherObj[0].myObj){

            motherObj[0].myObj[$(this).attr('name')] = $(this).val();
            
            if (bAlarmButtonPLC){
                var text = $(this).val();
                var dataSidebuttonNum = $(this).closest('.newapp.newSidebutton').attr('data-num');
                appResults.sidebuttons[dataSidebuttonNum].alarm_buttons.forEach(function(button){
                    button.plc = text;
                });
            }
        }
        $(this).closest('.Groupbox.newapp').find('.savebutton').removeClass('disabled');
    });
    $('#center').on('input', '.preferences.full .Groupbox .text, #servercenter input, #servercenter textarea',function(e){
        $(this).closest('.Groupbox.newapp').find('.savebutton').removeClass('disabled');
    });
    $('#login').click(function (e) {
        if (!$('body').has('.logmein').length) {
            emosWS.login.au.showUI();
            $('<div class="logmein"></div>').appendTo('#login');
            emosWS.login.au.ui.parent().appendTo('.logmein');
            $('.logmein .ui-dialog').attr('style', '');
            $('.logmein .ui-dialog-content').dialog({
                close: function () {
                    animateOff(".logmein", ".logmein", "#login");
                }
            });
        } else {
            emosWS.login.au.showUI();
            emosWS.login.au.ui.parent().appendTo('.logmein');
            $('.logmein .ui-dialog').attr('style', '');
        }
        if ($('#login').hasClass('active')) {
            animateOff(".logmein", ".logmein", "#login");
        } else {
            closeOther("#login");
            $(this).addClass('active');
            $(".logmein").show().animate({
                height: "670px"
            }, 600);
            $('.logmein .ui-dialog-content').css('height', '670px');
        }
    });
    $('.right .top').click(function () {
        location.reload();
    });
    // todo: einiges hiervon als function auslagern. da an anderer stelle nochmals benötigt
    $('.left .top').click(function () {
        var home;
        var home_default;
        $.each(results.homestation, function (key, val) {
            if(val.name === myArr.sn) {
                home = results.homestation[key];
            } else if(val.name === 'default') {
                home_default = results.homestation[key];
            }
        });
        if(!home && home_default){
            home = home_default;            
        }
        var app = home.sidebutton;
        var plant = home.plant;
        var pic = home.link;
        var addAnimationsJobs = [];
        if (app && plant && pic) {
//            $('.ball, .ball1').show(); falls noch benötigt
//            $('#center').empty();
//            $('#breadcrump').empty();
//            filenames = [];
//            breadparts = [];
//            breadurls = [];
//            linklist = [];
//            $('#center').append('<div class="frameWrapper"></div>');
//            $('<iframe id="plants" name="plants" src="' + pic + '">').appendTo('.frameWrapper');
//            var myRoot = window.location.href.match(/^.*\//);
//            var iframelink = "contents/" + app + "/General_Plant_Overview.htm";
//            var filename = "General_Plant_Overview.htm";
//            var idname = filename.slice(0, -4);
//            filename = idname.replace(/\_/g, " ");
//            filenames.push(filename);
//            breadurls.push(iframelink);
//            breadparts.push("<li id='" + idname + "' class='bread_li' data-link='" + filename + "'>" + filename + "</li>");
//            linklist[idname] = []; 
           
            var tmpElem = $('<div/>', {
                    "data-link": home.link,
                    "target":{'innerText': home.plant}
                });
            tmpElem[0].target = {'innerText': home.plant};  
            loadIframe(tmpElem[0], true);
//            emosWS.addEventListener("OpenDiagnosisWindow", onOpenDiagnosisWindow);
//            $('#plants').load(function (ev) {
//                emosWS.addEventListener("SiteProperties", onSiteProperties);
//                setTimeout(function () {
//                    $('#breadcrump li.bread_li:first-child').text(plant);
//                }, 400);
//                var myMsg = {
//                    'type': "DiagnosisWindowMode",
//                    'mode': 1
//                };
//                var myElem = document.getElementById('plants').contentWindow;
//                myElem.postMessage(JSON.stringify(myMsg), '*');
//
//            });
            $('.cats').removeClass('active');
            $('.' + app.toLowerCase()).parent().addClass('active');
            var appNumx = $('.' + app.toLowerCase()).children('p').attr("data-num");
            $('#alarmheader').empty();
            buildAlarmHeader(appNumx, app, addAnimationsJobs);
        }
    });
    $('#user').click(function (e) {
        if ($(e.target).attr('class') === 'logout') {
            emosWS.login.au.logoff();
            $(this).removeClass('active');
            $('.logout').remove();
        }
    });
    var clickedTile;
    $('#center').click(function (e) {
        if (e.target.getAttribute('class') === 'diagnose') {

        } else if ($(e.target).hasClass('tile')) { 
//            $('.ball, .ball1').show(); falls noch benötigt
            $('#center').empty();
            $('#center').append('<div class="frameWrapper"></div>');
            var http = new XMLHttpRequest();   
			
            http.open('HEAD', e.target.getAttribute('data-link'), true);
            http.setRequestHeader('cache-control', 'max-age=604800, public');
            http.onreadystatechange = function() {
				console.log(http.status )
                if (http.readyState === 4) {
                    if (http.status === 200) {  
                        $('<iframe id="plants" name="plants" src="' + e.target.getAttribute('data-link') + '" textid="' + e.target.getAttribute('textid') + '" title="' + e.target.getAttribute('title') + '" plc="' + e.target.getAttribute('plc') + '">').appendTo('.frameWrapper');
                        emosWS.addEventListener("OpenDiagnosisWindow", onOpenDiagnosisWindow);
                        $('#plants').load(function () {                             
//                            emosWS.addEventListener("SiteProperties", onSiteProperties.bind(e));
                            emosWS.addEventListener("SiteProperties", onSiteProperties);
                            /*if ($(e)[0].target.attributes.textId.value){
                                setTimeout(function () {
                                    var callbackText;
                                    $('#breadcrump li.bread_li:first-child').text($(e)[0].target.innerText);
                                    emosWS.sendAdviseText($(e)[0].target.attributes.textId.value, "name", callbackText = function (msg) {
                                        $('#breadcrump li.bread_li:first-child').text(msg.value);
                                    });
                                    $('#breadcrump li.bread_li:first-child').on("remove", function () {
                                        emosWS.unadvise($(e)[0].target.attributes.textId.value + ".name.Text", callbackText);
                                    });
                                }, 800);
                            }*/
                            var myMsg = {
                                'type': "DiagnosisWindowMode",
                                'mode': 1,
								'serverPool': serverPool,
								'activeServer': emosWS.getWebSocketStatus() ? emosWS.getActiveServerName() : undefined
                            };
                            var myElem = document.getElementById('plants').contentWindow;
                            myElem.postMessage(JSON.stringify(myMsg), '*');
                        });
                      } else {  
					  
                         //link = 'tree.html'; 
                         //$('<iframe id="plants" name="plants" src="' + link + '">').appendTo('.frameWrapper');  
//                         $('.ball, .ball1').hide(); falls noch benötigt
                      } 
                }
            };
            http.send(null);
            
        }
    });

    $('#breadcrump').click(function (e) {
        if($(e.target).hasClass('scrollDown') || $(e.target).hasClass('scrollUp')){
            scrollButtonClicked = 1;
            var myTarget = $(e.target);
            if (!myTarget.hasClass('active')) {
                return false;
            }
            var distance;
            if($(e.target).hasClass('scrollUp')){
                distance = -200;
            } else {
                distance = 200;
            }
            $(e.target).closest('.crumbOL').stop().animate({
                scrollTop: $(e.target).closest('.crumbOL').scrollTop() + distance
            }, {
                step: function(){
                    setScrollbar($(e.target).closest('.crumbOL'));
                }, 
                complete: function () {
                    showScroll($(e.target).closest('.crumbOL'));                
                }
            });
        } else {     
//            $('.ball, .ball1').show(); falls noch benötigt
            $('.diagnose').remove();
            alarmheaderReset();            
            animateOff(".alarmpage", ".alarmpage", "#alarms");
            setTimeout(function () {
                $('#precenter').hide();                
                $('#alarmpage_content iframe').remove();
                $(".alarmpage").attr('class', '').addClass('alarmpage');                
                $('.blockbutton, .singlebutton').removeClass('active');
            }, 400);
            clearMyInterval();
            terminateActiveAlarmClient();
            var myText = e.target.getAttribute('data-link');
            var breadtext = jQuery.inArray(myText, filenames);
            if (breadtext !== -1) {
                var delLinklist = filenames[breadtext].replace(/\ /g, '_');
                breadparts.splice(breadtext + 1);
                breadurls.splice(breadtext + 1);
                filenames.splice(breadtext + 1);
                delete linklist[delLinklist];
                $('#plants').attr('src', breadurls[breadurls.length - 1]);
            }
        }        
    });
    // arrangeTabs means open a new window of another process
    $('#center').on("click", ".arrangeTabs", function (e) {
        if($(this).closest('.configcenter').length > 0)
            return;
        var counter = $('.diagnose:not(.statusWelcome)').get().length;
        counter += bShowSummary ? 1 : 0;
        if (counter === 4){// || (window.screen.width < 1900 && counter === 3)) {
            return;
        }
        $('#dialog-message').show();
        $('.frameWrapper').addClass('border');
        
        //var right = bShowSummary ? $('.statusWelcome').width() : 1;
        //if (bShowSummary)
        //    $('#dialog-message').css('right', right + 'px');
        
        if (counter >= 2) {
            $('#center .diagnose').nextAll().animate({
                'right': 1
            });
        }
        compareWin = true;
        myCounter++;
    });
    // copyTab means open a new window of the same process
    $('#center').on("click", ".diagnose .copyTab", function (e) {
        if ($(this).hasClass('childWin') || $(this).closest('.configcenter').length > 0) {
            return;
        }
        var msg = {};
        var newMsg = [];
        var counter = $('.diagnose:not(.statusWelcome)').get().length;
        counter += bShowSummary ? 1 : 0;
        
        if (counter === 4) { // || (window.screen.width < 1900 && counter === 3)) {
            return;
        }
        myCounter++;
        newMsg = $(this).closest('.diagnose').find('.DiagnoseBody')[0].msg;
        newMsg.additionalClass = 'fixedPart' + (bShowSummary ? ' second' : '');
        newMsg.myCounter = myCounter;
        onMessage(newMsg, true);
        var actWidth = $(this).closest('.diagnose').width();
        var actPos = $(this).closest('.diagnose').css('right');
        
        setTimeout(function () {
            $('.diagnose.' + myCounter).css('right', actPos);
            $('.diagnose.' + myCounter).animate({
                'right': (actWidth * counter) + 2
            });
            $('.diagnose:not(.statusWelcome)').find('.diahead_left').removeClass('emosbutton pushbarOpen pushbarClose');
            if ($('.diagnose:visible').get().length > 1)
                $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarClose');
        }, 200);
    });
    $('#center').on("mouseover", ".copyTab.childWin, .subMenu", function (e) {
        $(this).closest('.diahead_right').siblings('.subMenu').show();
        $(this).closest('.diahead_right').siblings('.subMenu').animate({
            'height': $(this).closest('.diahead_right').siblings('.subMenu').prop("scrollHeight")
        });
    });
    $('#center').on("mouseout", ".copyTab.childWin, .subMenu", function (e) {
        setTimeout(function () {
            if ($("#center").find(".subMenu:hover").length <= 0 && $("#center").find(".copyTab.childWin:hover").length <= 0) {
                animateOff(".subMenu", ".subMenu");
            }
        }, 200);
    });

    $('#center').on("click", ".subMenu .sub", function (e) {
        var newMsg = [];
        var counter = $(".diagnose:not(.statusWelcome)").get().length;
        counter += bShowSummary ? 1 : 0;
        if (counter === 4) {
            return;
        }
        myCounter++;

        var newWin = e.target.getAttribute('data-obj');
        if (newWin) {
            newMsg = $(this).closest('.diagnose').find('.DiagnoseBody')[0].msg;
            var myMsg = {
                "DiagnosisLibID": newMsg.DiagnosisLibID,
                "PLC": newMsg.PLC,
                //"Tag": "." + newMsg.data.childWindowsData[newWin].TextID,
				"Tag": newMsg.Tag + newMsg.data.childWindowsData[newWin].OPCID,
                "DiagnosisControl": newMsg.data.childWindowsData[newWin].Name,
                "GroupRightIndex": newMsg.GroupRightIndex,
                "Enabled": true
            };
            myMsg.additionalClass = 'fixedPart' + (bShowSummary ? ' second' : '');
            myMsg.myCounter = myCounter;
            onMessage(myMsg, true);
        } else {
            newMsg = $(this).closest('.diagnose').find('.DiagnoseBody')[0].msg;
            newMsg.additionalClass = 'fixedPart' + (bShowSummary ? ' second' : '');
            newMsg.myCounter = myCounter;
            onMessage(newMsg, true);
        }
        var actWidth = $(this).closest('.diagnose').width();
        var actPos = $(this).closest('.diagnose').css('right');
        setTimeout(function () {
            $('.diagnose.' + myCounter).css('right', actPos);
            $('.diagnose.' + myCounter).animate({
                'right': (actWidth * counter)
            });
            $('.diagnose.' + myCounter).find('.DiagnosisPageBlank:visible').prevAll('.pager').children('.pagerHead').children('.pagerHeadLine').text($('.diagnose.' + myCounter).find('.DiagnosisPageBlank:visible')[0].head);
            $('.diagnose:not(.statusWelcome)').find('.diahead_left').removeClass('emosbutton pushbarOpen pushbarClose');
    
            if ($('.diagnose:visible').get().length > 1)
                $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarClose');
        }, 200);
        animateOff(".subMenu", ".subMenu");
    });
    $('#center').on("click", ".radio", function (e) {
        setTimeout(function () {
            showScroll($('.DiagnosisSubPageBlank.dPage:visible'));
        }, 100);
    });
    $('#precenter').on("click", ".radio", function (e) {
        setTimeout(function () {
            var tmpCounter = $('.DiagnosisSubPageBlank.dPage:visible');
            $.each(tmpCounter, function(){
                showScroll($(this));
            });            
        }, 100);
    });
    $('#center').on("click", ".closeTabs:not(.closeSubTabs)", function (e) {        
        $.each($(this).closest('.diagnose').nextAll(), function () {
            $(this).animate({
                'right': (parseInt($(this).css('right')) - $(this).closest('.diagnose').width())
            });
        });
        $(this).closest('.diagnose').remove();
        if($('.diagnose.statusWelcome').length > 0){
            $('.diagnose.statusWelcome').next('.diagnose').addClass('first');
        } else {
            $('.diagnose:first').addClass('first');
        }  
        
        $('.diagnose:not(.statusWelcome)').find('.diahead_left').removeClass('emosbutton pushbarOpen pushbarClose');
        if ($('.diagnose:visible').get().length > 1 && $('.diagnose:not(.statusWelcome)').last().css('right') !== "1px")
            $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarClose');
        else if ($('.diagnose:visible').get().length > 1)
            $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarOpen');
        
        try{
            clearMyInterval(this);
        } catch(e){}
        
        terminateActiveAlarmClient();
        $('.copyTab').removeClass('inactive');
        $('.arrangeTabs').removeClass('inactive');
        $('.diagnose:not(.statusWelcome)').last().find('.subPageOverlay').removeClass('disabled');
        if($('.diagnose:not(.statusWelcome)').length === 0){
            $('.diagnose.statusWelcome').show();
            $('#dialog-message').hide();
            $('.frameWrapper').removeClass('border');
        }
    });
    
    $('#center').on("click", ".pin", function (e) {
        
        if ($(this).hasClass('act')){
            $(this).removeClass('act');
            bShowSummary = false;
        } else {
            $(this).addClass('act');
            bShowSummary = true;
        }
    });
    
    var scrolled = 0;
    // todo: click scrolldown/-up umbauen, ggf. die mousescroll
    $('main').on("click", ".scrollDown", function (e) {
        scrollButtonClicked = 1;
        var myTarget = $(e.target);
        if (!myTarget.hasClass('active')) {
            return false;
        }
        var contentelement;
        if(myTarget.closest('.overlayContent').length > 0){
            contentelement = myTarget.closest('.overlayContent');
        } else if(myTarget.closest('.diagnose').length > 0){
            contentelement = myTarget.closest('.diagnose');
        } else if(myTarget.closest('.crumbOL').length > 0){
            contentelement = myTarget.closest('.crumbOL');            
        } else if(myTarget.parent('#center').length > 0){
            contentelement = myTarget.closest('#center');            
        } else if (myTarget.closest('td.transLeft').length > 0){
            contentelement = myTarget.closest('table').find('.plantTableOverflow'); 
        } else if (myTarget.closest('td.transRight').length > 0){
            contentelement = myTarget.closest('table').find('.plcTableOverflow'); 
        } else if(myTarget.closest('#alarmpage').length > 0){
            if(myTarget.closest('#alarmpage').find('.detailOverlay.full').length > 0){
                contentelement = myTarget.closest('#alarmpage').find('.detailTable.act'); 
            } else {
                contentelement = myTarget.closest('#alarmpage');
            }                        
        } else if(myTarget.parent('.preferences.full').length > 0){
            contentelement = myTarget.closest('.preferences.full');
        } else if(myTarget.prev('.unassignedBox').length > 0){
            contentelement = myTarget.prev('.unassignedBox');
        }
        scrollUpDown('down', contentelement);
    });

    $('main').on("click", ".scrollUp", function (e) {
        scrollButtonClicked = 1;
        var contentelement;
        if($(e.target).closest('.overlayContent').length > 0){
            contentelement = $(e.target).closest('.overlayContent');
        } else if($(e.target).closest('.diagnose').length > 0){
            contentelement = $(e.target).closest('.diagnose');
        } else if($(e.target).closest('.crumbOL').length > 0){
            contentelement = $(e.target).closest('.crumbOL');            
        } else if($(e.target).parent('#center').length > 0){
            contentelement = $(e.target).closest('#center');            
        } else if ($(e.target).closest('td.transLeft').length > 0){
            contentelement = $(e.target).closest('table').find('.plantTableOverflow'); 
        } else if ($(e.target).closest('td.transRight').length > 0){
            contentelement = $(e.target).closest('table').find('.plcTableOverflow');           
        } else if($(e.target).closest('#alarmpage').length > 0){
            if($(e.target).closest('#alarmpage').find('.detailOverlay.full').length > 0){
                contentelement = $(e.target).closest('#alarmpage').find('.detailTable.act'); 
            } else {
                contentelement = $(e.target).closest('#alarmpage');
            }            
        } else if($(e.target).parent('.preferences.full').length > 0){
            contentelement = $(e.target).parent('.preferences.full');
        } else if($(e.target).prevAll('.unassignedBox').length > 0){
            contentelement = $(e.target).prevAll('.unassignedBox');
        }
        scrollUpDown('up', contentelement);        
    });
    
    $('main').on('DOMMouseScroll mousewheel', '.dPage, .crumbOL, #cars, .detailTable, #alarmpage_content, .configcenter.full, .configcenterRight, .unassignedBox, .overlayContent', function (e) {
        var contentelement;
        var buttonelement;
        
        if ($(e.target).closest('.plantTableOverflow #plantTable').length > 0)
            return;

        if($(e.target).closest('.overlayContent').length > 0){
            contentelement = $(e.target).closest('.overlayContent');
            buttonelement = contentelement;
        } else if($(e.target).closest('.diagnose').length > 0){
            contentelement = $(e.target).closest('.diagnose');
            buttonelement = contentelement;
        } else if($(e.target).closest('.crumbOL').length > 0){
            contentelement = $(e.target).closest('.crumbOL');  
            buttonelement = contentelement;
        } else if($(e.target).attr('id') === 'cars'){
            contentelement = $(e.target).closest('#center'); 
            buttonelement = contentelement;
        } else if($(e.target).closest('.detailTable').length > 0){
            contentelement = $(e.target).closest('.detailTable'); 
            buttonelement = $(e.target).closest('#alarmpage');
        } else if($(e.target).closest('#alarmpage').length > 0){
            contentelement = $(e.target).closest('#alarmpage'); 
            buttonelement = contentelement;
        } else if($(e.target).closest('.selectElements').length > 0 || $(e.target).closest('#editorhelp').length > 0 || $(e.target).closest('.dropdownlist.filter').length > 0 ) {
            return;
        } else if($(e.target).closest('.preferences.full:not(.selectElements)').length > 0) {
            contentelement = $(e.target).closest('.preferences.full'); 
            buttonelement = contentelement;
        } 
        
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            if (buttonelement.find('.scrollUp').length > 0 && !buttonelement.find('.scrollUp').hasClass('active')) {
                return false;
            }
            scrollUpDown('up', contentelement, $(e.target));
        }
        else {
            
            if (buttonelement.find('.scrollDown').length > 0 && !buttonelement.find('.scrollDown').hasClass('active')) {
                return false;
            }
            scrollUpDown('down', contentelement, $(e.target));
            
            
            if ($(contentelement).hasClass('detailAlarmingTable') && reloadAlarmTable){
                if ($(contentelement).scrollTop() + $(contentelement).height() + 150 > $(contentelement).find('.DiagnosisRestAlarmClient').height()){
                    addToAlarmTable($(contentelement).find('.DiagnosisRestAlarmClient').find('table').attr('id'));
                    reloadAlarmTable = false;
                    setTimeout(function () {
                        reloadAlarmTable = true;
                    }, 2000);
                }
            }
        }
    });
//    var scrollButtonClicked = 0;
    var move,
    down,
    up,
    browser = true;
   
    if($('html').hasClass('IE11')){
//        move = "mousemove";
//        down = "mousedown";
//        up = "mouseup";
//        browser = false;
    } else {
        move = "touchmove";
        down = "touchstart";
        up = "touchend";
    }
    var swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 1000, // maximum time allowed to travel that distance
    elapsedTime,
    startTime;
    
    $('main').on(down, '.dPage, .crumbOL, #cars, .detailTable, #alarmpage_content, .configcenter.full, .configcenterRight, .unassignedBox', function(e){
        var touchobj = (browser === false) ? e.originalEvent : e.originalEvent.changedTouches[0];
        swipedir = 'none';
        startX = touchobj.clientX;
        startY = touchobj.clientY;
        startTime = new Date().getTime();
        if($('html').hasClass('IE11')){
            scrollButtonClicked = 0;
        }
    });
    $('main').on(move, function(e){
        e.preventDefault();
    });
    $('main').on(up, '.dPage, .crumbOL, #cars, .detailTable, #alarmpage_content, .configcenter.full, .configcenterRight, .unassignedBox', function(e){
        e.stopImmediatePropagation();
        var touchobj = (browser === false) ? e.originalEvent : e.originalEvent.changedTouches[0];
        distX = touchobj.clientX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.clientY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for swipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
                if(swipedir === 'left'){
                    var nextVisibleElement;
                    if($(e.target).hasClass('DiagnosisPageControl diasubtabs')){
                        nextVisibleElement = $(e.target).find('.DiagnosisSubPageBlank:visible');
                    } else {
                        nextVisibleElement = $(e.target).closest('.DiagnosisSubPageBlank:visible');
                    }                    
                    var nextElement = $(nextVisibleElement).next();
                    var button = $(e.target).closest('.diagnose').find('.scrollRight');
                    if (nextVisibleElement.is(':animated'))
                        return false;
                    if (nextElement.length > 0) {
                        scrollLeftRight('Right', 'Left', nextVisibleElement, nextElement, 500, button);
                    }
                } else {
                    var prevVisibleElement;
                    if($(e.target).hasClass('DiagnosisPageControl diasubtabs')){
                        prevVisibleElement = $(e.target).find('.DiagnosisSubPageBlank:visible');
                    } else {
                        prevVisibleElement = $(e.target).closest('.DiagnosisSubPageBlank:visible');
                    }
                    var prevElement = $(prevVisibleElement).prev();
                    var button = $(e.target).closest('.diagnose').find('.scrollLeft');
                    if (prevVisibleElement.is(':animated'))
                        return false;
                    if (prevElement.length > 0 && prevElement.hasClass('DiagnosisSubPageBlank')) {
                        scrollLeftRight('Left', 'Right', prevVisibleElement, prevElement, -500, button);
                    }
                }
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met                
                swipedir = (distY < 0)? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
                var buttonHolder;
                if($(this).hasClass('dPage')){
                        buttonHolder = $(this).closest('.diagnose');
                } else if($(this).hasClass('detailTable')){
                    buttonHolder = $(this).closest('#alarmpage');
                } else {
                        buttonHolder = $(this).parent();
                }
                if($(this).is(':animated') || swipedir === 'up' && !buttonHolder.find('.scrollDown').hasClass('active')){
                    return false;
                }
                scrollButtonClicked = 1;
                $(this).stop().animate({
                    scrollTop: $(this).scrollTop() - distY
                }, {
                    step: function(){
                        setScrollbar($(this));
                    }, 
                    complete: function () {
                        showScroll($(this)); 
                        getTransparenz($(this));
                    }
                });
            }
        }
    });
    //todo ggf scroll-left/right zusammenfassen 
    $('#center').on("click", ".scrollLeft", function (e) {
        scrolled = 0;
        $(this).next('.scrollDown').addClass('active');
        $(this).nextAll('.scrollUp').removeClass('active');
        var prevVisibleElement = $(e.target).closest('.DiagnosisFooter').prev().find('.DiagnosisPageBlank:visible').find('.DiagnosisSubPageBlank:visible');
        var prevElement = $(prevVisibleElement).prev();
        if (prevVisibleElement.is(':animated'))
            return false;
        if (prevElement.length > 0 && prevElement.hasClass('DiagnosisSubPageBlank')) {
            scrollLeftRight('Left', 'Right', prevVisibleElement, prevElement, -500, this);
        }
    });
    $('#center').on("click", ".scrollRight", function (e) {
        scrolled = 0;
        $(this).prev('.scrollDown').addClass('active');
        $(this).nextAll('.scrollUp').removeClass('active');
        var nextVisibleElement = $(e.target).closest('.DiagnosisFooter').prev().find('.DiagnosisPageBlank:visible').find('.DiagnosisSubPageBlank:visible');
        var nextElement = $(nextVisibleElement).next();
        if (nextVisibleElement.is(':animated'))
            return false;
        if (nextElement.length > 0) {
            scrollLeftRight('Right', 'Left', nextVisibleElement, nextElement, 500, this);
        }
    });
    //todo: scroll-left/right zusammenfassen
    $('#alarmpage').on("mouseover", ".DiagnosisFooter.private .scrollRight", function (e) {
        if(e.buttons === 1){
            scrollPrivLeftRight(e, 'right');
        }
    });
    $('#alarmpage').on("mouseover", ".DiagnosisFooter.private .scrollLeft", function (e) {
        if(e.buttons === 1){
            scrollPrivLeftRight(e, 'left');
        }
    });
    $('#alarmpage').on("click", ".DiagnosisFooter.private .scrollRight", function (e) {
        scrollPrivLeftRight(e, 'right');
//        var element = $(e.target).closest('.DiagnosisFooter').prevAll('#alarmpage_content').find('.windowHolder');
//        if (element.is(':animated') || !$(this).hasClass('active'))
//            return false;
//        var waytofooter = $('#alarmpage').find('.DiagnosisFooter.private');
//        var waytofooterhead = waytofooter.children('.footerHead');        
//        element.animate({
//            'left': element.position().left -343 //-397            
//        }, function () {
//            waytofooterhead.children('.circle').removeClass('big');    
//            $.each($('#alarmpage .windowHolder .privateOverlay'), function(key, val){
//                if($(this).offset().left >= 182 && $(this).offset().left <= $(this).parent().offset().left + $(this).parent()[0].clientWidth - 110){
//                    waytofooterhead.children('.circle').eq(key).addClass('big');
//                }
//            });
//            if(waytofooterhead.find('.big').last().index() + 1 < waytofooterhead.children('.circle').length){
//                waytofooter.children('.scrollRight').addClass('active');
//            } else {
//                waytofooter.children('.scrollRight').removeClass('active');
//            }
//            if(waytofooterhead.children('.circle').index(waytofooterhead.find('.big:first-child')) <= 0) {
//                waytofooter.children('.scrollLeft').addClass('active');
//            } else {
//                waytofooter.children('.scrollLeft').removeClass('active');
//            }
//        });
        
    });
    $('#alarmpage').on("click", ".DiagnosisFooter.private .scrollLeft", function (e) {
        scrollPrivLeftRight(e, 'left');
//        var element = $(e.target).closest('.DiagnosisFooter').prevAll('#alarmpage_content').find('.windowHolder');       
//        if (element.is(':animated') || !$(this).hasClass('active'))
//            return false;
//        var waytofooter = $('#alarmpage').find('.DiagnosisFooter.private');
//        var waytofooterhead = waytofooter.children('.footerHead');
//        element.animate({
//            'left': element.position().left +343 //+397
//        }, function () {
//            waytofooterhead.children('.circle').removeClass('big'); 
//            $.each($('#alarmpage .windowHolder .privateOverlay'), function(key, val){
//                if($(this).offset().left >= 182 && $(this).offset().left <= $(this).parent().offset().left + $(this).parent()[0].clientWidth - 110){
//                    waytofooterhead.children('.circle').eq(key).addClass('big');
//                }
//                //i++;
//            });
//            if(waytofooterhead.find('.big').last().index() + 1 < waytofooterhead.children('.circle').length){
//                waytofooter.children('.scrollRight').addClass('active');
//            } else {
//                waytofooter.children('.scrollRight').removeClass('active');
//            }
//            if(waytofooterhead.find('.big').first().index() > 0) {
//                waytofooter.children('.scrollLeft').addClass('active');
//            } else {
//                waytofooter.children('.scrollLeft').removeClass('active');
//            }
//        });
    });
    $('#center').on("click", ".ui-tabs-anchor", function (e) {
        $(this).closest('.statusWelcome').removeClass('bigone');
        var pageId = $(e.target).attr('href');
        //buildHeader(pageId);
        var myMainPage = $(pageId);
        var contentElement = '';
        if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
            contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
        } else {
            contentElement = myMainPage;
        }
        if($(this).parent().hasClass('Duerr')){
            if($(this).closest('.diagnose').find('.Groupbox.ecodoku').length < 1){
                loadEcoDoku($(this).closest('.DiagnoseBody')[0].msg, $(this).closest('.diagnose').find('.DiagnosisSubPageBlank.dPage[data-pos="Summaries"]'));
            }
        }
        console.log(contentElement)
        setTimeout(function () {
            showScroll(contentElement);
            
        }, 1000);
        buildHeader(pageId);
    });
    
    $('#center').on("mouseenter", ".footerHead.sub", function () {
        if ($(this).find('.subTabMenu').hasClass('active'))
            return;
        $(this).find('.subTabMenu').show().addClass('active');
        $(this).find('.subTabMenu').animate({
            'height': $(this).find('.subTabMenu').prop("scrollHeight"),
            'margin-top': '-' + $(this).find('.subTabMenu').prop("scrollHeight")
        });
    });
    $('#center').on("mouseleave", ".footerHead.sub", function () {
        setTimeout(function () {
            if ($("#center").find(".subTabMenu:hover").length <= 0 && $("#center").find(".footerHead.sub:hover").length <= 0) {
                animateOff(".subTabMenu", ".subTabMenu");
                $('.subTabMenu').css({
                    'height': 0,
                    'margin-top': 0
                });
                $('.subTabMenu').removeClass('active');
            }
        }, 200);
    });
    $('#center').on("click", ".subtab", function (e) {
        var myTarget = Number(e.target.getAttribute('data-obj')) + 1;
        var visibleElement = $(e.target).closest('.diagnose').find('.DiagnosisPageBlank:visible').find('.DiagnosisSubPageBlank:visible');
        var tabNum = visibleElement[0].tabNum;
        var nextElement = $(e.target).closest('.diagnose').find('.DiagnosisPageBlank:visible').find('.DiagnosisSubPageBlank:nth-of-type(' + myTarget + ')');
        var direction, nonDirection, newPosition;
        if (myTarget > tabNum) {
            direction = 'Right';
            nonDirection = 'Left';
            newPosition = 500;
        } else if (tabNum > myTarget) {
            direction = 'Left';
            nonDirection = 'Right';
            newPosition = -500;
        } else {
            return false;
        }
        scrollLeftRight(direction, nonDirection, visibleElement, nextElement, newPosition, this);
        animateOff(".subTabMenu", ".subTabMenu");
        $('.subTabMenu').removeClass('active');
    });
    $("#language").unbind().click(function () {
        if ($(this).hasClass('active')) {
            animateOff("#language ul", "#language ul", "#language");
        } else {
            closeOther("#language");
            $("#language ul").show().animate({
                height: $("#language ul").prop("scrollHeight") + "px"
            });
            $(this).addClass('active');
        }
    });
    $("#language ul li").click(function (event) {
        animateOff("#language ul", "#language ul", "#language");
    });    
    
    $('#help').click(function(e){
        if ($(this).hasClass('active')) {
            $('.helpholder').remove();
            $(this).removeClass('active');
        } else {
            closeOther("#help");
            $(this).addClass('active');
            if($('.helpholder').length === 0){
                $("<div/>", {
                "class": 'helpholder'
                }).appendTo('main');
                  
                $("<div/>", {
                "class": 'boxHolder',
                "id": 'boxHolder'
                }).appendTo('.helpholder');                
                
                $("<div/>", {
                "class": 'docBox',
                "id": "docBox",
                "html": "<p>Online Dokumentation</p>"
                }).appendTo('.boxHolder');
                
                $("<div/>", {
                "class": 'aboutBox',
                "id": 'aboutBox',
                "html": "<p>About Dürr HMI</p>"
                }).appendTo('.boxHolder');
                
                emosWS.rest.framework.getFileInfo({
                    path: '/config/app/'+ myArr.app + '.json',
                    success: function(info){
                        var date = new Date(info.lastModified);
                        $('.appDate').text(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
                    }, 
                    error: function(){
                        console.log("request failed");
                    },
                    server: serverPool[0]
                });
                $("<div/>", {
                "class": 'Groupbox',
                "html": "<span>App</span>"
                }).appendTo('.aboutBox').append('<span>'+ myArr.app +'</span><br>').append('<span class="appDate"></span>'); 
                
                $("<div/>", {
                "class": 'Groupbox',
                "id": "serverlist",
                "html": "<span>Webserver</span>"
                }).appendTo('.aboutBox');
                var serverTable = $("<table/>", {
                    "class": "serverTable"
                });
                $('#serverlist').append(serverTable);
                servers.forEach(function(server){
                    var tmpTd = getId();
                   $('<tr><td class="servername">'+ server.name +'</td><td id="' + tmpTd + '" class="servername warn"></td></tr>').appendTo('.serverTable'); 
                   try {
                       server.getStatus(function(status){
                        if(status.reachable !== false){
                            $('#' + tmpTd).removeClass('.warn').addClass('fine');
                        }
                     });
                   } catch(e){}
                                              
                });                
                
                $("<div/>", {
                "class": 'Groupbox',
                "html": "<span>Framework</span>"
                }).appendTo('.aboutBox').append('<span>v1.0 473 673</span><br>').append('<span>2018/10/29</span>');                
                    emosWS.rest.framework.getFileInfo({
                    path: serverRoot + '/js/durr.emos.js',
                    success: function(info){
                        var date = new Date(info.lastModified);
                        $('.emosDate').text(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
                    }, 
                    error: function(){
                        console.log("request failed");
                    },
                    server: serverPool[0]
                });
                $("<div/>", {
                "class": 'Groupbox',
                "html": "<span>EMOS.js</span>"
                }).appendTo('.aboutBox').append('<span>'+ emosWS.version +'</span><br>').append('<span class="emosDate"></span>');                
            };
            $('.helpholder').addClass('full');
            getHelpObject();
//            buildHelp();
        }
    });
    
//    if ($("ul.alarm_solo li input:checked").length < 1) {
//        $('.details, .details_reset').addClass('disabled');
//    }
    
    $('#precenter').on("click", ".firsttile", function (e) {
//        $('.ball, .ball1').show(); falls noch benötigt
        alarmheaderReset();
        $(this)[0].target = {'innerText': $(this).text()}; 
        loadIframe(this, true);
    });
    $('#precenter').on("click", ".alarmDetails .box.number li", function (e) {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().prev().find('.languageButton').text($(this).attr('data-value'));
//        $('.ball, .ball1').show(); falls noch benötigt
        reloadTables();
    });
    $('#precenter').on("click", ".alarmDetails .box.time li", function (e) {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().prev().find('.languageButton').text($(this).attr('data-value'));
        reloadTables();
    });
    // Funktion auskommentiert weil auch alle anlagen genutzt werden sollen, wenn gar keine ausgewählt sind
    $('#precenter').on("click", ".plantcheckbox:not(.privatecheckbox)", function (e) {
//        if ($("ul.alarm_solo li input:checked").length > 0) {
//            $('.details').removeClass('disabled');
//        } else {
//            $('.details, .details_reset').addClass('disabled');
//        }
        e.stopPropagation();
    });
    $('#center, #precenter').on("change", ".privatecheckbox", function (e) {
//        var objKey = $(this).parent().prev().val();
        var objKey = $(this).val();
        if(emosWS.isAdmin()){
            if($(this).prop('checked') === true) {
                publicTabs[objKey] = privateResults.tabs[objKey];
                emosWS.writeData(writeConfig + "publictabs.json", JSON.stringify(publicTabs));
                $(this).next().text('published');
                $(this).closest('.DiagnosisContent').prev().find('.processname').text('Public');
            } else {
                delete publicTabs[objKey];
                emosWS.writeData(writeConfig + "publictabs.json", JSON.stringify(publicTabs));
                $(this).next().text('publish');
                $(this).closest('.DiagnosisContent').prev().find('.processname').text('Private');
            }
        } else {
            if($(this).prop('checked') === true) {
                var i = 1;
                var privKey = objKey;
                while(privKey in privateResults.tabs) {
                    privKey = objKey + '_copy_'+ i;
                    i++;
                }
                privateResults.tabs[privKey] = publicTabs[objKey];
                emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults));
                $(this).next().text('privatized');
                $(this).attr("disabled", true);
                $(this).closest('.DiagnosisContent').prev().find('.processname').text('Private');
                $(this).closest('.windowHolder').find('.radiobox').show();
                $(this).closest('.dPage.Private').prevAll('.pager').find('.radiobox').show();
            }
        }
    });
    $('#center, #precenter').on('click', '.showPrivate', function(){        
        togglePrivPub($(this).attr('data-value'), $(this).closest('.diatabs').attr('id'));
    });
    /* context menues */
    $('#precenter').on("contextmenu", ".firsttile", function (e) {
        if(userloggedin) {
            $('#contextMenu').empty();
            if(privateResults.plants.indexOf($(this).find('.tilename').text()) !== -1){
                $('#contextMenu').append('<li class="subContext removeFav" data-name="'+ $(this).find('.tilename').text() +'"><a href="#">Remove from favorites</a></li>');
            } else {
                $('#contextMenu').append('<li class="subContext addFav" data-name="'+ $(this).find('.tilename').text() +'"><a href="#">Add to favorites</a></li>');
            }
            
            
            e.preventDefault();
            x = e.clientX;
            y = e.clientY;
            $("#contextMenu").css("left", x + "px");
            $("#contextMenu").css("top", y + "px");
            $("#contextMenu").show();
        }
        
    });
    $('body').on("click", ".addFav", function (e) {
        $('.firsttile').find("span[data-name='" + $(this).attr('data-name') + "']").addClass('isFav');
        privateResults.plants.push($(this).attr('data-name'));
        emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
        $('#contextMenu').hide();
    });
    $('body').on("click", ".removeFav", function (e) {
        var toHide = $('.firsttile').find("span[data-name='" + $(this).attr('data-name') + "']");
        toHide.removeClass('isFav');
        if(toHide.closest('ul').css('float') === 'none') {
            toHide.closest('ul').hide();
        }
        privateResults.plants.splice( $.inArray($(this).attr('data-name'),privateResults.plants) ,1 );
        emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
        
        $('#contextMenu').hide();
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest("#contextMenu").length === 0) {
            $("#contextMenu").hide();
        }
    });
    $('#language').on("contextmenu", "#langdropdown li", function (e) {
        if(userloggedin) {
            $('#contextMenu').empty();            
            $('#contextMenu').append('<li class="subContext defaultLang" data-name="'+ $(this).find('.language').attr('id').replace('lang_', '') +'"><a href="#">Remember as my default</a></li>');
           
            e.preventDefault();
            x = e.clientX;
            y = e.clientY;
            $("#contextMenu").css("left", x + "px");
            $("#contextMenu").css("top", y + "px");
            $("#contextMenu").show();
        }        
    });
    $('body').on("click", ".defaultLang", function (e) {
        privateResults.language = $(this).attr('data-name');
        emosWS.setLanguage($(this).attr('data-name'));
        $('#langdropdown li').removeClass('active');
        $('#lang_' + $(this).attr('data-name')).parent().addClass('active');
        emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
        $('#contextMenu').hide();
    });
    
    var x, y;
    var o;
    var myKey;
    var myPLC;
    var actElement;
    var myPrivId;
    var myDataGroup;
    $('#center, #precenter').on("contextmenu", ".parentsbox", function (e) {
        if (userloggedin) {
            if ($(this).hasClass('priv')) {
                $('.elementdelete a').show();
                $('.context').hide();
            } else {
                $('.context').show();
                $('.elementdelete a').hide();
            }
            e.preventDefault();
            x = e.clientX;
            y = e.clientY;
            $("#contextMenu").css("left", x + "px");
            $("#contextMenu").css("top", y + "px");
            $("#contextMenu").show();
            $(this).css('border', '1px solid #000');
            actElement = $(this);
            myDataGroup = $(this).attr('data-group');
            if($(this).hasClass('subcompact')){
                o = $(this).prev()[0].myData;
                myKey = $(this).prev()[0].myKey;
                myPrivId = $(this).prev()[0].myPrivId;
            } else if($(this).closest('.dragbox').length < 1 && $(this).hasClass('Groupbox parentsbox priv')) {
                o = $(this).closest('tbody').find('tr.compact[data-group="'+ myDataGroup +'"]')[0].myData;
                myKey = $(this).closest('tbody').find('tr.compact[data-group="'+ myDataGroup +'"]')[0].myKey;
                myPrivId = $(this).closest('tbody').find('tr.compact[data-group="'+ myDataGroup +'"]')[0].myPrivId;
            } else if($(this).closest('.dragbox').length > 0) {
                o = $(this).closest('.dragbox')[0].myData;
                myKey = $(this).closest('.dragbox')[0].myKey;
                myPrivId = $(this).closest('.dragbox')[0].myPrivId;
            }else {
                o = $(this)[0].myData;
                myKey = $(this)[0].myKey;
                myPrivId = $(this)[0].myPrivId;
            }
            
            myPLC = $(this).closest('.DiagnoseBody')[0].msg.PLC + $(this).closest('.DiagnoseBody')[0].msg.Tag;
            o.DiagnosisLibID = $(this).closest('.DiagnoseBody')[0].msg.DiagnosisLibID;
        }
    });
    $('#center, #precenter').on("mousedown", ".parentsbox", function (e) {
        if ($('#contextMenu:visible').length > 0) {
            if (!(e.clientX >= x && e.clientX <= (x + $("#contextMenu").width()) && e.clientY >= y && e.clientY <= (y + $("#contextMenu").height()))) {
                $('#contextMenu').hide();
                $(this).attr('style', '');
            }
        }
    });
    $('body').on("click", ".subContext:not(.elementdelete, .addFav, .removeFav, .defaultLang)", function (e) {
        var pageId = $(e.target).attr('href');
        if (pageId === '#') {
            var tmp = new emosWS.AddSubTab($('.dPage.Private .diasubtabs'));
            var parentelementid = tmp.parent[0].id;
            pageId += $('#' + parentelementid).children().last().attr('id');
        }
        var parentType = $(pageId).attr('data-pos');
        var parents = $('.dPage.Private').find("[data-pos='" + parentType + "']").find('table');
        var parent = $(pageId).find('table');
        var writable = false;
        var objType = DiagnosisCommon.getObjectType(myKey);
        switch (objType) {
            case "AddStringInput":
            case "AddStringInputLong":
            case "AddTextDoubleTimerInputLongMin":
                o.writable = true;
                break;
            case "AddTextDoubleTimerLong":
                o.valueInSecond = true;
                break;
            case "AddTextDoubleTimerInputLong":
                o.writable = true;
                o.valueInSecond = true;
                break;
            case "AddTextIntegerInput":
            case "AddTextByteInput":
            case "AddTextRealInput":
            case "AddTextRealInputNiveau":
            case "AddTextIntegerInputLong":
            case "AddTextRealInputLong":
            case "AddLEDTextIntegerInputLong":
            case "AddTextLEDIntegerInputLong":
            case "AddLEDTextRealInputLong":
            case "AddTextIntegerIntegerInputLong":
            case "AddTextRealRealInputLong":
                o.writable = true;
                break;
            case "AddTextTimerInputLong":
            case "AddTextSiemensDateInputLong":
            case "AddTextSiemensTimeInputLong":
            case "AddTextSiemens_TIME_TimerInputLong":
            case "AddTextSiemens_S5TIME_TimerInputLong":
            case "AddTextSiemens_DATE_AND_TIME_TimerInputLong":
                o.writable = true;
                break;
        }
        var actId = 1;
        var myArray = [];
        if (!privateResults) {
            privateResults = {};
            privateResults.tabs = {};
            actId = 1;
        } else {
            $.each(Object.keys(privateResults.tabs), function (key, val) {
                $.each(Object.keys(privateResults.tabs[val]), function (key1, val1) {
                    myArray.push(parseInt(val1));
                });
            });
            actId = Math.max.apply(Math, myArray);
            if (actId === -Infinity) {
                actId = 0;
            }
            actId++;
        }
        $.each(parents, function (key, val) {
            new emosWS.AddDataToSubTab($(val), o, myPLC, myKey, writable, actId);
        });
        
        $('#contextMenu').hide();
        actElement.css('border', 'none');
        actElement = null;
        var tabNum = $(pageId).attr('data-pos');
        if (!privateResults.tabs[tabNum]) {
            privateResults.tabs[tabNum] = {};
        }
        privateResults.tabs[tabNum][actId] = {
            "data": o,
            "myPLC": myPLC,
            "myKey": myKey,
            "writable": writable
        };
//        console.log(privateResults)
        if (myName) {
            emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
        }
        o = null;
    });
    $('body').on("click", ".elementdelete", function (e) {
        var myResultList;
        if(actElement.closest('.windowHolder').find('.radiobox .showPrivate').attr('data-value') === 'private'){
            myResultList = publicTabs;
        } else {
            myResultList = privateResults.tabs;
        }
        var parent = actElement.closest('.dPage').attr("data-pos"); 
        delete myResultList[parent][myPrivId];
        if(jQuery.type(myResultList[parent]) === 'array'){
            myResultList[parent] = myResultList[parent].filter(function(val){ return val; });
        }        
        var tmp = myResultList[parent];
        if (jQuery.isEmptyObject(tmp)) {
            console.log('leer');
        }        
        emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));        
        actElement.closest('.dPage').find("[data-group='"+ myDataGroup +"']").remove();
        $('#contextMenu').hide();
    });
    $(window).scroll(function () {
        $('#contextMenu').hide();
    });
    $('#center, #precenter').on("change", ".pagerHeadLine", function (e) {
        saveHeadline(this);
    });
    // ende context menü 
    $.widget("ems.numpad", {
        _create: function () {
            var id = $('.numpad').length + 1;
            var elementId = this.options.myid;
            var myStep = ($(this.element).closest('div.parentsbox')[0].myData.Precision) ? '0.1' : '1';
            var max = ($(this.element).closest('div.parentsbox')[0].myData.InputMax) ? $(this.element).closest('div.parentsbox')[0].myData.InputMax : $(this.element).closest('div.parentsbox')[0].myData.RealInputMax;
            var min = ($(this.element).closest('div.parentsbox')[0].myData.InputMin) ? $(this.element).closest('div.parentsbox')[0].myData.InputMin : $(this.element).closest('div.parentsbox')[0].myData.RealInputMin;
            var placeholder = '';
            if (max - min < 500) {
                placeholder = '<tr><td colspan="4">' + min + ' <input id="slider' + id + '" value="' + $(this.element).prevAll('.textfeld').attr('data-value') + '" name="amountRange" type="range" oninput="this.form.preview.value=this.value" min="' + min + '" max="' + max + '" step="'+ myStep +'" /> ' + max + '<br><br></td></tr>';
            }
            this.body = $(
                    '<table class="numpad" id="np_' + elementId + '">' +
                    '<tr>' +
                    '<td colspan="4"><input type="text" step="any" min="' + min + '" max="' + max + '" value="' + $(this.element).prevAll('.textfeld').attr('data-value') + '" class="DiagnosisNumberLRTextNumberSVG preview" name="preview" id="preview' + id + '"><br><br></td>' +
                    '</tr>' +
                    placeholder +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">7</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">8</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">9</a></td>' +
                    '<td rowspan="4">' +
                    '<table>' +
                    '<tr>' +
                    '<td class="tableRight tdplus"><a data-role="button" data-theme="b" class="plus emosbutton"></a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="tableRight"><a data-role="button" data-theme="b" class="minus emosbutton"></a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="tableRight tdplusminus"><a data-role="button" data-theme="b" class="plusminus emosbutton">+/-</a></td>' +
                    '</tr>' +
                    '</table>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">4</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">5</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">6</a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">1</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">2</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">3</a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="e" class="clear emosbutton">C</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">0</a></td>' +
                    '<td><a data-role="button" data-theme="e" class="nummer emosbutton">.</a></td>' +
                    '</tr>' +
                    '</table>');

            $(this.element).append(this.body);
            var myPLC;
            if ($('#' + elementId).hasClass('second')) {
                myPLC = $(this.element).closest('.DiagnoseBody')[0].msg.PLC + $(this.element).closest('.DiagnoseBody')[0].msg.Tag + '.' + $(this.element).closest('div.parentsbox')[0].myData.OPCID2;
            } else {
                myPLC = $(this.element).closest('.DiagnoseBody')[0].msg.PLC + $(this.element).closest('.DiagnoseBody')[0].msg.Tag + '.' + $(this.element).closest('div.parentsbox')[0].myData.OPCID;
            }
            var timeout = null;
            this._on(this.document, {
                'mousedown.nummer': function (e) {
                    if (window.getSelection().toString() !== '') {
                        $('#preview' + id).val('');
                    }
                },
                'mouseup.nummer': function (e) {
                    if ($('#' + elementId).val() === 0) {
                        $('#' + elementId).val($(e.target).text());
                    } else {
                        $('#preview' + id).val($('#preview' + id).val() + $(e.target).text());
                        $('#slider' + id).val($('#preview' + id).val());
                    }
                },
                'click.done': function (e) {
                    $(e.target).closest(".DiagnosisStringButtons").animate({
                        'height': 0
                    });
                    emosWS.poke(myPLC, $('#preview' + id).val());
                },
                'click.clear': function (e) {
                    $('#preview' + id).val($('#preview' + id).val().substring(0, $('#preview' + id).val().length - 1));
                    $('#slider').val($('#preview' + id).val());
                },
                'mousedown.plus': function (e) {
                    timeout = setInterval(function () {
                        if ($('#preview' + id).val() < Number(max)) {
                            $('#preview' + id).val(Number($('#preview' + id).val()) + 1.0);
                            $('#slider' + id).val($('#preview' + id).val());
                        }
                    }, 100);
                    return false;
                },
                'mouseup.plus': function (e) {
                    clearInterval(timeout);
                    return false;
                },
                'mouseout.plus': function (e) {
                    clearInterval(timeout);
                    return false;
                },
                'mousedown.minus': function (e) {
                    timeout = setInterval(function () {
                        if ($('#preview' + id).val() > Number(min)) {
                            $('#preview' + id).val(Number($('#preview' + id).val()) - 1);
                            $('#slider' + id).val($('#preview' + id).val());
                        }
                    }, 100);
                    return false;
                },
                'mouseup.minus': function (e) {
                    clearInterval(timeout);
                    return false;
                },
                'mouseout.minus': function (e) {
                    clearInterval(timeout);
                    return false;
                },
                'mousedown.plusminus': function (e) {
                    $('#preview' + id).val(Number($('#preview' + id).val()) *(- 1));
                    $('#slider' + id).val($('#preview' + id).val()*(- 1));
                    return false;
                }
            });
        },
        destroy: function (e) {
            this.element.parent().css('padding-top', '4px');
            $('#' + this.body[0].id).remove();
            $.Widget.prototype.destroy.call(this);
        }
    });
    
    $.widget("ems.numpadMaintenance", {
        _create: function () {
            var id = $('.numpad').length + 1;
            var value = $(this.element).closest('.tdLimit').find('.maintenanceStatus').text();
            var elementId = this.options.myid;
            this.body = $(
                    '<table class="numpad" id="np_' + elementId + '">' +
                    '<tr>' +
                    '<td colspan="4"><input type="text" step="any" value="' + value + '" class="DiagnosisNumberLRTextNumberSVG preview" name="preview" id="preview' + id + '"><br><br></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">7</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">8</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">9</a></td>' +
                    '<td rowspan="4">' +
                    '<table>' +
                    '<tr>' +
                    '<td class="tableRight tdplus"><a data-role="button" data-theme="b" class="plus emosbutton"></a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="tableRight"><a data-role="button" data-theme="b" class="minus emosbutton"></a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="tableRight tddone"><!--<a data-role="button" data-theme="b" class="done emosbutton"></a> --></td>' +
                    '</tr>' +
                    '</table>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">4</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">5</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">6</a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">1</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">2</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">3</a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="e" class="clear emosbutton">C</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer emosbutton">0</a></td>' +
                    '<td><a data-role="button" data-theme="e" class="nummer emosbutton">.</a></td>' +
                    '</tr>' +
                    '</table>');

            $(this.element).append(this.body);
            this._on(this.document, {
                'mousedown.nummer': function (e) {
                    if (window.getSelection().toString() !== '') {
                        $('#preview' + id).val('');
                    }
                },
                'mouseup.nummer': function (e) {
                    if ($('#' + elementId).val() === 0) {
                        $('#' + elementId).val($(e.target).text());
                    } else {
                        $('#preview' + id).val($('#preview' + id).val() + $(e.target).text());
                        $('#slider' + id).val($('#preview' + id).val());
                    }
                },
                'click.clear': function (e) {
                    $('#preview' + id).val($('#preview' + id).val().substring(0, $('#preview' + id).val().length - 1));
                    $('#slider').val($('#preview' + id).val());
                }
            });
        }
    });
    
    $('#center').on("click", ".getpad", function (e) {
        if ($(this).nextAll().find('.numpad').length > 0) {
            var tmp = $(this).nextAll().find('.numpad').parent();
            var widget = tmp.data("ems-numpad");
            widget.destroy();
        }
        $(this).closest('.parentsbox').find('.DiagnosisStringButtons').numpad({
            'myid': this.id
        });
        $(this).closest('.parentsbox').find('.DiagnosisStringButtons').animate({
            'height': 270
        }, 400, function () {
            if(!$(this).hasClass('ledtext'))
                $(this).parent().css('padding-top', '40px');
            var myTop = $(this).position().top;
            var myScrollTop = $(this).closest('.dPage').scrollTop();
            $(this).closest('.dPage').animate({
                'scrollTop': myScrollTop + (myTop - 70)
            });
            showScroll($(this).closest('.dPage'));
        });
        $(this).closest('.parentsbox').find('.DiagnosisStringButtons').find('.preview').focus().select();
    });

    $('#center').on("click", ".diagnose .cancelbutton", actionForCancel);
    $('#center').on("click", ".diagnose .savebutton", actionForSave);
    
    $('#center').on("dblclick", ".diagnose.statusWelcome", function(e){
        
        if ($(e.target).hasClass('pin') || $(e.target).hasClass('scrollUp') || $(e.target).hasClass('scrollDown'))
            return;
        
        if($(this).hasClass('bigone')){
            $(this).removeClass('bigone');
        } else {
            $(this).addClass('bigone');
        }
        
        
    });
    //auskommentiert wegen config overlay - wird es noch woander benötigt?
    $('#center').on("click", ".text", function (e) {
//        $(this).val('');
    });
    var myOldName;
    $('#center, #precenter').on("click", ".getKeypad", function (e) {
        var myInput;
        var myPrev;
        if ($(this).hasClass('pagerHeadLine')) {
            if(!userloggedin){
                $(this).prop('disabled', true);
                return;
            } else {
                $(this).prop('disabled', false);
            }
            myOldName = this.value;
            myInput = this;
            myPrev = $(this);
        } else if($(this).prev().hasClass('text')) {
            myOldName = $(this).prev().value;
            $(this).prev().val('');
            myInput = this.previousSibling;
            myPrev = $(this).prev();
        } else {
            myInput = document.getElementById($(this).nextAll('.DiagnosisStringButtons').find('.preview').attr('id'));
            myPrev = $(this).nextAll('.DiagnosisStringButtons').find('.preview');
        }

        var myKeyboard = VKI_attach(myInput);
        setTimeout(function () {
            myPrev.focus();
        }, 200);
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            actionForCancel(e);
        } else if (e.keyCode === 13  && e.target.tagName.toUpperCase() !== 'TEXTAREA' && !$(e.target).hasClass('text')) {
            actionForSave(e);
        } else if (e.keyCode === 13  && $(e.target).hasClass('text') && !$(e.target).attr('name') === 'search') {
            actionForCancel(e);
        } else if(e.keyCode === 13  && $(e.target).attr('name') === 'search'){
            startJsonSearch($(e.target));
        }
    });
    $('#center').on("click", ".parentsbox.priv.compact, .parentsbox.priv.subcompact", function (e) {
        $(this).nextAll('.comfort').first().toggle();
        showScroll($(this).closest('.dPage'));
    });

    // breadcrumb -> show/hide Linklist, on click load page
    $('#breadcrump').on("contextmenu", ".bread_li", function (e) {
        e.preventDefault();
        var myClass = $(this).attr('id');
        if ($('.' + myClass).hasClass('active'))
            return;
        $('.' + myClass).show().addClass('active');
        $('.' + myClass).parent().show().height(560);
        $('.' + myClass).animate({
            'height': 490//animationHigh - 20 //
        }, function(){
            $('.' + myClass + ' .smallFooter').show();
            showScroll($('.' + myClass));
        });
    });
    $('#breadcrump').on("mouseleave", ".bread_li, .crumbOL", function () {
        var myClass = $(this).attr('id');
        setTimeout(function () {
            if ($('.' + myClass + ':hover').length <= 0 && $("#" + myClass + ":hover").length <= 0) {
                $('.' + myClass).animate({
                    'height': 0
                }, function(){
                    $('.' + myClass).parent().hide();
                });
                $('.' + myClass).removeClass('active');
                $('.' + myClass + ' .smallFooter').hide();
                
            }
        }, 400);
    });
    $('#breadcrump').on("click", ".breadoverlay_li", function (e) {
//        $('.ball, .ball1').show(); falls noch benötigt        
        loadIframe(e);
    });
    // end breadcrumb

    // if more than 3 Tab on DiagnoseWin, we got a scroll-Button to scroll to the not visible Tabs
    $('#center').on('click', ".scrollTabs", function (e) {
        scrolltabs(this);

//        var tmpObj = {};
//        tmpObj.numOfTabs = $(this).parent().children('li').length;
//        tmpObj.$obj = $(this);
//        var distance;
//        if ($(this).hasClass('scrollleft')) {
//            distance = 0;
//        } else {
//            distance = -272;//(tmpObj.numOfTabs - 3) * (-94);
//        }
//        $(this).parent().children().css('visibility', 'visible');
//        $(this).parent().animate({marginLeft: distance});
//        tmpObj.myTimer = setTimeout(function () {
//            for (var i = 0; i < tmpObj.numOfTabs; i++) {
//                if (tmpObj.$obj.parent().children().eq(i).position().left >= 278 || tmpObj.$obj.parent().children().eq(i).position().left <= 1) {
//                    tmpObj.$obj.parent().children().eq(i).css('visibility', 'hidden');
//                } else {
//                    tmpObj.$obj.parent().children().eq(i).css('visibility', 'visible');
//                }
//            }
//            if (tmpObj.$obj.parent().children().eq(0).position().left <= 1) {
//                tmpObj.$obj.addClass('scrollleft');
//            } else {
//                tmpObj.$obj.removeClass('scrollleft');
//            }
//            if (tmpObj.$obj.parent().children().eq(tmpObj.numOfTabs - 1).position().left >= 278) {
//                tmpObj.$obj.addClass('scrollright');
//            } else {
//                tmpObj.$obj.removeClass('scrollright');
//            }
//        },400);
    });
    $('#center').on('click', '#generateQR', function (e) {
        if($('#qrOverlay').length){
            return;
        }
        $("<div/>", {
            "id": "qrOverlay",
            "class": "overlay"
        }).appendTo('#center');
        $("<span/>", { 
            "class": "emosbutton cancelbutton",
            "click": function(){
                $('#qrOverlay').remove();
            }
        }).appendTo('#qrOverlay');
        $('#qrOverlay').qrcode({
            "render": "canvas",
            "width": 580,
            "height": 580,
            "text": "Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. "
        });
    });
    $('#center').on('click', ".emosbutton.subsubPage", function (e) {
        $('.emosbutton.subsubPage').removeClass('active');
        $(this).addClass('active');
        showScroll($(this).find('.overlayContentElements').first());
        if($(this).closest('.editor').length === 0){
            var position = $(document).width() - ($(this).closest('.diagnose').offset().left + $(this).closest('.diagnose').outerWidth()) + 377;
            $(this).find('.subsubpageOverlay').css('right', position);
        }
    });
    $('#center').on('click', ".emosbutton.subsubsubPage", function (e) {
        $('.emosbutton.subsubsubPage').removeClass('active');
        $(this).addClass('active');
        showScroll($(this).find('.overlayContentElements').first());
        if($(this).closest('.editor').length === 0){
            var position = $(document).width() - ($(this).closest('.subsubpageOverlay').offset().left + $(this).closest('.subsubpageOverlay').outerWidth()) + 376;
            $(this).find('.subsubsubpageOverlay').css('right', position);
        }
    });
    $('#center').on("click", ".closeSubTabs", function (e) {
        $(this).closest('.emosbutton.subPageOverlay').removeClass('active');
        e.stopPropagation();        
    });
    $('#center').on("click", ".showhideblockbutton", function (e) {
        if($(this).hasClass('closeBlock')){
            $(this).removeClass('closeBlock').addClass('openBlock');
            $(this).parent().removeClass('showBlock').addClass('hideBlock');
        } else {
            $(this).removeClass('openBlock').addClass('closeBlock');
            $(this).parent().removeClass('hideBlock').addClass('showBlock');
        }  
        showScroll($(this).closest('.dPage'));
    });
    
    $('#center').on("click", ".diagnose .DiagnosisPageControl .emosbutton", function (e) {
        
        var visiblePage = $('.diagnose.statusWelcome').find('.DiagnosisPageBlank:visible');
        if (visiblePage.hasClass('Chronology')){
            var parent = $(this).closest('.DiagnosisPageControl').find('.DiagnosisPageBlank.dPage.Chronology');
            $('.DiagnosisPageControl .placeholderBtn').removeClass('noAction');
            if ($(parent).find('.DiagnosisAlarmTable').length === 0)
                new ChronologyHistory($(parent));
        } else {
            $('.DiagnosisPageControl .placeholderBtn').addClass('noAction');
        }
    });
    
    $('#center').on("click", ".diagnose .emosbutton.diahead_left.pushbarOpen", function (e) {
        var statusWindow = $('.diagnose:visible');
        var actWidth = $(this).closest('.diagnose').width();
        
        var count = 0;
        $.each(statusWindow, function () {
            $(this).animate({
                'right': (actWidth * count) + 2
            });
            count++;
        });
            
        $(this).removeClass('pushbarOpen').addClass('pushbarClose');
    });
    
    $('#center').on("click", ".diagnose .emosbutton.diahead_left.pushbarClose", function (e) {
        
        $('.diagnose').animate({
            'right': 1
        }); 
        
        $(this).removeClass('pushbarClose').addClass('pushbarOpen');
    });
    $('#dialog-message').on("click", ".emosbutton.closeDialogMsg", function (e) {
        $('#dialog-message').hide();
        $('.frameWrapper').removeClass('border');
        
        $('.diagnose:not(.statusWelcome)').find('.diahead_left').removeClass('emosbutton pushbarOpen pushbarClose');
        if ($('.diagnose:visible').get().length > 1 && $('.diagnose:not(.statusWelcome)').last().css('right') !== "1px")
            $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarClose');
        else if ($('.diagnose:visible').get().length > 1)
            $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarOpen');
    });
    
    $('#zoom').on("click", ".emosbutton.noshadow", function (e) {
        var elem = $(e.target);
        
        if (elem.hasClass('active')){
            elem.removeClass('active');
            $('.zoompanel').remove();
        } else {
            elem.addClass('active');
            
            if($('.zoompanel').length === 0){
                $("<div/>", {
                    "class": 'zoompanel'
                }).appendTo('main'); 
                  
                $("<span/>", {
                    "class": 'emosbutton plusminus zminus',
                    "id": 'minus',
                    "click": function(e){
                        var value = document.body.style.zoom === "unset" ? "100%" : document.body.style.zoom;
                        var zoom = parseInt(value.split('%')[0]) - 5;
                        document.body.style.zoom = zoom + "%";
                    }
                    }).appendTo('.zoompanel');                
                
                $("<span/>", {
                    "class": 'emosbutton plusminus zplus',
                    "id": 'plus',
                    "click": function(e){
                        var value = document.body.style.zoom === "unset" ? "100%" : document.body.style.zoom;
                        var zoom = parseInt(value.split('%')[0]) + 5;
                        document.body.style.zoom = zoom + "%";
                    }
                }).appendTo('.zoompanel');  
            }        
        }
    });
    
    if (myArr.js){
        var jsData = myArr.js.split(",");
        for (var i=0; i<jsData.length; i++){
            $.getScript(configURL + '../lib/external/js/' + jsData[i] + ".js")
            .done(function() {
                console.log("Success: " + jsData[i] + ".js");
            })
            .fail(function(obj, error, exception) {
                console.log(error + ": " + jsData[i] + ".js " + exception);
            });
        }
    }
    
    if (myArr.css){
        var cssData = myArr.css.split(",");
        for (var i=0; i<cssData.length; i++){
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", configURL + '../lib/external/css/' + cssData[i] + ".css");
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    }
    $('#center').on("click", ".loadDialog", function (e) {
        if($('ul.filesDialog').length > 0){
            $('ul.filesDialog').remove();
            return;
        }
        var newMother = $('<ul class="dropdownlist filesDialog"></ul>');
        newMother.appendTo($(this).parent());
        var myPath = '../content';
        var getFileInfo = function(){
            emosWS.rest.framework.getFileInfo({
                path: serverRoot + myPath,
                success: function(info){
                    var fileResults = info.children;
                    $.each(fileResults, function (key, val) {
                        if(val.isDirectory){
                            $("<li/>", {
                                "class": "folder",
                                "data-path": myPath + '/' + val.name, 
                                "text": val.name,
                                "click": function(e){
                                    e.stopPropagation();
                                    if($(this).hasClass('active')){
                                        $(this).removeClass('active').find('.filesSubDialog').remove();
                                        return;
                                    } else {
                                        $(this).addClass('active');
                                        newMother = $("<ul/>", {
                                            "class": "dropdownlist filesSubDialog",
                                        });
                                        newMother.appendTo($(this));
                                        myPath = $(this).attr('data-path');
                                        getFileInfo();
                                    }                                    
                                }
                            }).appendTo(newMother);
                        } else if(val.isFile && val.name.match(/.htm/) || val.isFile && val.name.match(/.html/)) {
                            $("<li/>", {
                                "class": "file",
                                "text": val.name,
                                "click": function(){
                                    $(this).closest('.inputGroup').find('input').val(myPath + '/' + val.name).blur();
                                    $('.filesDialog').remove();
                                }
                            }).appendTo(newMother);
                        }
                    });
                }, 
                error: function(){
                    console.log("request failed");
                },
                server: serverPool[0]
           });
        };
        getFileInfo();
        
        
    });
    setTimeout(function(){
        emosWS.setDebugSymbolVisibility(globals.showBadQualities === "checked");
    }, 1000);
    
    
    
    
});

