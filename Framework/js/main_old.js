var myCounter = 0;
var compareWin = false;
var myArr = [];
var globalInterval = [];
//var alarmTextId;
var activeAlarmClient = null;
var trendPage = null;
var myName;
$(function () {
    var userloggedin = false;
    window.addEventListener("load", function () {
        emosWS.connect();
    }, false);
    var myLanguage;
    emosWS.addEventListener("language", function (e) {
        $('#act_lang').text(results.language[e].short);
        myLanguage = e;
    }, false);

    emosWS.addEventListener("authentication", function (e) {
        if (e.status === 'PASSED') {
            $('.username').html(e.username);
            myName = e.username;
            userloggedin = true;
            animateOff(".logmein", ".logmein", "#login");
            if ($('.diagnose').length > 0) {
                getPrivateTabs();
            }
        } else {
            $('.username').html('Guest');
            userloggedin = false;
            myName = 'Guest';
        }
    }, false);

    emosWS.addEventListener("UserRight", function (e) {

    }, false);

    //get parameter from URL
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var tmp;
    $.each(vars, function (key, val) {
        tmp = val.split("=");
        myArr[tmp[0]] = tmp[1];
    });
    if (!myArr.app) {
        myArr.app = 'config';
    }
    // get configuration-data from json-file
    jQuery.extend({
        getValues: function () {
            var result = null;
            $.ajax({
                url: 'https://hmi.durr.com/emostestrd/framework/config/app/' + myArr.app + '.json', // https://localhost/design/HMI_Frontend/public_html/config/
                type: 'get',
                dataType: 'json',
                async: false,
                success: function (data) {
                    result = data;
                }
            });
            return result;
        },
        getMyName: function () {
            return myName;
        }
    });
    var results = $.getValues();
    var index = 0;
    var items = [];
    var langs = [];
    var d_num = 0;

    var aniData = {};
    //list of created animations
    var alarmAnimations1 = [];
    var alarmAnimations = [];

    var filenames = [];
    var breadparts = [];
    var breadurls = [];
    var linklist = [];

    // loop to build the Sidebuttons
    $.each(results.sidebuttons, function (key, val) {
        var id = getId();
        items.push("<li class='cats'><span class='emosbutton " + val.iconclass + "'><span class='' id='" + id + "'></span><p data-num='" + d_num + "' class='buttontext' id='" + val.textId + "'>" + val.name + "</p></span></li><span class='trenner'></span>");
        d_num++;
        getAnimationData(val.name, val.tiles);
        setTimeout(function () {
            alarmAnimations1.push(new emosWS.HTMLFaultWarning({
                "id": id,
                "alarmGroup": aniData[val.name].alarmgroup
            }));
        }, 200);
    });
    ulMaker('maincats', items, '#left');

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

    // Build Language
    $.each(results.language, function (key, val) {
        langs.push("<li class='languages'><span class='language' id='lang_" + key + "'>" + val.long + "</span></li>");
    });
    ulMaker('langdropdown', langs, '#language');

    //  Build Tiles for Startpage    
    buildTiles(0, results.sidebuttons[0].name);

    $('.cats').click(function (event) {
        $('#configheader ul li').removeClass('active');
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
        $('li.cats').removeClass('active');
        var appName = event.target.appName;
        var appNum = event.target.getAttribute("data-num");
        $('#center, #alarmheader').empty();
        animateOff(".alarmpage", ".alarmpage", "#alarms");
        setTimeout(function () {
            $('#precenter').hide();
            $('.alarmtabwrapper').removeClass('active');
            $('.alarmtabwrapper:first').addClass('active');
        }, 400);
        //terminate all created animations before creating the new ones
        alarmAnimations.forEach(function (animation) {
            animation.terminate();
        });
        alarmAnimations = [];
        buildTiles(appNum, appName);
    });
    var myAlarmList;
    $('main').on("click", "#alarms", function (event) {
        if ($('#alarms').hasClass('active')) {
            animateOff(".alarmpage", ".alarmpage", "#alarms");
            setTimeout(function () {
                $('#precenter').hide();
                $('.alarmtabwrapper').removeClass('active');
                $('#alarmpage_content .DiagnosisAlarmClient').remove();
                $('#alarmpage_content .DiagnosisRestAlarmClient').remove();
                $('#alarmpage_content .TrendPageElement').remove();
                $('#selectId').remove();
                $('.alarmtabwrapper:first').addClass('active');
            }, 400);
            clearMyInterval();
            terminateActiveAlarmClient();

        } else {
            closeOther("#alarms");
            $(this).addClass('active');
            $('body').css('overflow', 'hidden');
            $('#precenter').show();
            $(".alarmpage").show().animate({
                height: "100%"
            }, 600);
            myAlarmList = emosWS.getAlarmList();
            $('.alarm_solo').show();
            event.stopPropagation();
        }
    });
    $('.languages').click(function (e) {
        var langId = Number($(this).children().attr('id').replace('lang_', ""));
        emosWS.setLanguage(langId);
    });
    $('#config').click(function (event) {
        clearMyInterval();
        terminateActiveAlarmClient();
        if ($('#config').hasClass('active')) {
            animateOff(".preferences", ".preferences", "#config");
        } else {
            closeOther("#config");
            $(this).addClass('active');
            $('body').css('overflow', 'hidden');
            if (!$('#center').has('.preferences').length) {
                $('<div class="preferences"></div>').appendTo('#center');
                $('.preferences').load('config/config.html');
            }
            $(".preferences").show().animate({
                height: "100%"
            }, 600);
            event.stopPropagation();
        }
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
                height: "490px"
            }, 600);
        }

    });
    $('.right .top').click(function () {
        location.reload();
    });
    // todo: einiges hiervon als function auslagern. da an anderer stelle nochmals benötigt
    $('.left .top').click(function () {
        var app = results.start.application;
        var plant = results.start.plant;
        var pic = results.start.picture;
        var addAnimationsJobs = [];
        if (app && plant && pic) {
            $('#center').empty();
            $('#breadcrump').empty();
            filenames = [];
            breadparts = [];
            breadurls = [];
            linklist = [];
            $('#center').append('<div class="frameWrapper"></div>');
            $('<iframe id="plants" name="plants" src="contents/' + app + '/' + pic + '">').appendTo('.frameWrapper');
            var myRoot = window.location.href.match(/^.*\//);
            var iframelink = myRoot + "contents/" + app + "/General_Plant_Overview.htm";
            var filename = "General_Plant_Overview.htm";
            var idname = filename.slice(0, -4);
            filename = idname.replace(/\_/g, " ");
            filenames.push(filename);
            breadurls.push(iframelink);
            breadparts.push("<li id='" + idname + "' class='bread_li' data-link='" + filename + "'>" + filename + "</li>");
            linklist[idname] = [];
            emosWS.addEventListener("OpenDiagnosisWindow", onOpenDiagnosisWindow);
            $('#plants').load(function (ev) {
                emosWS.addEventListener("SiteProperties", onSiteProperties);
                setTimeout(function () {
                    $('#breadcrump li.bread_li:first-child').text(plant);
                }, 200);
                var myMsg = {
                    'type': "DiagnosisWindowMode",
                    'mode': 1
                };
                var myElem = document.getElementById('plants').contentWindow;
                myElem.postMessage(JSON.stringify(myMsg), '*');

            });
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

    function onOpenDiagnosisWindow(msg) {
        onMessage(msg, false);
    }
    var clickedTile;
    $('#center').click(function (e) {
        if (e.target.getAttribute('class') === 'diagnose') {

        } else if ($(e.target).hasClass('tile')) { //e.target.closest('ul').hasAttribute('id') !== '' && 
            $('#center').empty();
            $('#center').append('<div class="frameWrapper"></div>');
            $('<iframe id="plants" name="plants" src="' + e.target.getAttribute('data-link') + '">').appendTo('.frameWrapper');
            emosWS.addEventListener("OpenDiagnosisWindow", onOpenDiagnosisWindow);
            $('#plants').load(function (ev) {
                emosWS.addEventListener("SiteProperties", onSiteProperties);
                setTimeout(function () {
                    clickedTile = $(e.target)[0].innerText;
                    $('#breadcrump li.bread_li:first-child').text(clickedTile);
                }, 200);
                var myMsg = {
                    'type': "DiagnosisWindowMode",
                    'mode': 1
                };
                var myElem = document.getElementById('plants').contentWindow;
                myElem.postMessage(JSON.stringify(myMsg), '*');

            });

        }
    });

    $('#breadcrump').click(function (e) {

        $('.diagnose').remove();
        clearMyInterval();
        terminateActiveAlarmClient();
        var myText = e.target.getAttribute('data-link');
        var breadtext = jQuery.inArray(myText, filenames);
        if (breadtext !== -1) {
            var delLinklist = filenames[breadtext + 1].replace(/\ /g, '_');
            breadparts.splice(breadtext + 1);
            breadurls.splice(breadtext + 1);
            filenames.splice(breadtext + 1);
            delete linklist[delLinklist];
            $('#plants').attr('src', breadurls[breadurls.length - 1]);
        }
    });
    // copyTab means open a new window of another process
    $('#center').on("click", ".copyTab", function (e) {
        var counter = $(".diagnose").get().length;
        if (counter === 4 || (window.screen.width < 1900 && counter === 3)) {
            return;
        }
        $('#dialog-message').show();
        if (counter >= 2) {
            $('#center .diagnose:first').nextAll().animate({
                'right': 1
            });
            $('.DiagnosisFooter').animate({
                'right': 1
            });
        }
        compareWin = true;
        myCounter++;
    });
    // arrangeTabs means open a new window of the same process
    $('#center').on("click", ".arrangeTabs", function (e) {
        var msg = {};
        var newMsg = [];
        var counter = $(".diagnose").get().length;
        if (counter === 4 || (window.screen.width < 1900 && counter === 3)) {
            return;
        }
        myCounter++;
        newMsg = $(this).closest('.diagnose').find('.DiagnoseBody')[0].msg;
        newMsg.additionalClass = 'fixedPart';
        newMsg.myCounter = myCounter;
        onMessage(newMsg, true);
        var actWidth = $(this).closest('.diagnose').width();
        var actPos = $(this).closest('.diagnose').css('right');
        setTimeout(function () {
            $('.diagnose.' + myCounter).css('right', actPos);
            $('.diagnose.' + myCounter).animate({
                'right': (actWidth * counter)
            });
            $('.diagnose.' + myCounter).find('.DiagnosisFooter').animate({
                'right': (actWidth * counter)
            });
        }, 200);
    });
    $('#center').on("mouseover", ".arrangeTabs.childWin, .subMenu", function (e) {
        $(this).closest('.diahead_right').siblings('.subMenu').show();
        $(this).closest('.diahead_right').siblings('.subMenu').animate({
            'height': $(this).closest('.diahead_right').siblings('.subMenu').prop("scrollHeight")
        });
    });
    $('#center').on("mouseout", ".arrangeTabs.childWin, .subMenu", function (e) {
        setTimeout(function () {
            if ($("#center").find(".subMenu:hover").length <= 0 && $("#center").find(".arrangeTabs.childWin:hover").length <= 0) {
                animateOff(".subMenu", ".subMenu");
            }
        }, 200);
    });

    $('#center').on("click", ".subMenu .sub", function (e) {
        var newMsg = [];
        var counter = $(".diagnose").get().length;
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
                "Tag": "." + newMsg.data.childWindowsData[newWin].TextID,
                "DiagnosisControl": newMsg.data.childWindowsData[newWin].Name,
                "GroupRightIndex": newMsg.GroupRightIndex,
                "Enabled": true
            };
            myMsg.additionalClass = 'fixedPart';
            myMsg.myCounter = myCounter;
            onMessage(myMsg, true);
        } else {
            newMsg = $(this).closest('.diagnose').find('.DiagnoseBody')[0].msg;
            newMsg.additionalClass = 'fixedPart';
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
            $('.diagnose.' + myCounter).find('.DiagnosisFooter').animate({
                'right': (actWidth * counter)
            });
            $('.diagnose.' + myCounter).find('.DiagnosisPageBlank:visible').prevAll('.pager').children('.pagerHead').children('.pagerHeadLine').text($('.diagnose.' + myCounter).find('.DiagnosisPageBlank:visible')[0].head);
        }, 200);
        animateOff(".subMenu", ".subMenu");
    });
    $('#center').on("click", ".radio", function (e) {
        setTimeout(function () {
            showScroll();
        }, 100);
    });
    $('#center').on("click", ".closeTabs", function (e) {
        $.each($(this).closest('.diagnose').nextAll(), function () {
            $(this).animate({
                'right': (parseInt($(this).css('right')) - $(this).closest('.diagnose').width())
            });
            $(this).find('.DiagnosisFooter').animate({
                'right': (parseInt($(this).css('right')) - $(this).closest('.diagnose').width())
            });
        });
        $(this).closest('.diagnose').remove();
        clearMyInterval(this);
        terminateActiveAlarmClient();
        $('.copyTab').removeClass('inactive');
        $('.arrangeTabs').removeClass('inactive');
    });
    var scrolled = 0;
    $('#center').on("click", ".scrollDown", function (e) {
        var contentElement = '';
        var myTarget = $(e.target);
        var myMainPage = myTarget.parent().prev().find('.DiagnosisPageBlank:visible');
        if (!myTarget.hasClass('active')) {
            return false;
        }
        if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
            contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
        } else {
            contentElement = myMainPage;
        }
        var scrollnumber = contentElement.height() - 42;
        contentElement.animate({
            scrollTop: contentElement.scrollTop() + scrollnumber
        }, 1000, function () {
            showScroll($(contentElement));
        });
    });
    $('#center').on("click", ".scrollUp", function (e) {

        var myTarget = $(e.target);
        var myMainPage = myTarget.parent().prev().find('.DiagnosisPageBlank:visible');
        var contentElement = '';
        if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
            contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
        } else {
            contentElement = myMainPage;
        }
        var scrollnumber = contentElement.height() + 42;
        contentElement.animate({
            scrollTop: contentElement.scrollTop() - scrollnumber
        }, 1000, function () {
            showScroll($(contentElement));
        });
    });
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

    $('#center').on("click", ".ui-tabs-anchor", function (e) {
        var pageId = $(e.target).attr('href');

        buildHeader(pageId);
        var myMainPage = $(pageId);
        var contentElement = '';
        if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
            contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
        } else {
            contentElement = myMainPage;
        }
        setTimeout(function () {
            showScroll(contentElement);
        }, 1000);
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

    function scrollLeftRight(direction, nonDirection, nextVisibleElement, nextElement, newPosition, self) {
        $(self).closest('.DiagnosisFooter').find('.circle').removeClass('big');
        $(self).closest('.DiagnosisFooter').find('.subTabMenu').children('li').removeClass('active');
        nextElement.show();
        nextElement.animate({
            'right': 0
        });
        nextVisibleElement.animate({
            'right': newPosition
        }, function () {
            nextVisibleElement.scrollTop(0);
            nextVisibleElement.hide();
            showScroll(nextElement);
            $(self).closest('.DiagnosisFooter').children('.scroll' + nonDirection).addClass('active');
        });
        if (direction === 'Right' && nextElement.next().length === 0 || direction === 'Left' && nextElement.prev().length === 0) {
            $(self).closest('.DiagnosisFooter').children('.scroll' + direction).removeClass('active');
        }
        var pagerHeadlineId = $(self).closest('.DiagnosisFooter').prev().find('.pager').children('.pagerHead').children('.pagerHeadLine').attr('id');
        var text = document.getElementById(pagerHeadlineId);
        var tmpAdviceText = emosWS.sendAdviseText(nextElement[0].headId, "name", function (msg) {
            if (msg) {
                text.value = msg.value;
            }
        });
        if (!tmpAdviceText) {
            text.value = nextElement[0].head;
        }

        $(self).closest('.DiagnosisFooter').find('.circle').eq(nextElement[0].tabNum - 1).addClass('big');
        $(self).closest('.DiagnosisFooter').find('.subTabMenu').children('li').eq(nextElement[0].tabNum - 1).addClass('active');
        if ($('.circle').last().hasClass('big')) {
            $('.circle.big').prev().addClass('prevbig');
        } else {
            $('.circle').removeClass('prevbig');
        }
    }

    function getId() {
        return "item" + index++;
    }

    function clearMyInterval(self) {
        if (self) {
            var myInterval = $(self).closest('.diagnose').find('.dPage.Messages')[0].intervalID;
            if (myInterval && myInterval.length > 0) {
                $.each(myInterval, function (key, val) {
                    window.clearInterval(val);
                    var index = $.inArray(val, globalInterval);
                    if (index >= 0)
                        globalInterval.splice(index, 1);
                });
            }
        } else {
            $.each(globalInterval, function (key, val) {
                window.clearInterval(val);
                globalInterval = [];
            });
        }
    }

    function getAnimationData(name, tile) {
        var alarmsecurity = [];
        var io_auto = [];
        var io_ssen = [];
        var io_cson = [];
        var alarmgroup = [];

        $.each(tile, function (key, val) {
            io_auto.push(val.IO_Auto);
            alarmsecurity.push(val.alarm_security);
            io_ssen.push(val.IO_SSEN);
            io_cson.push(val.IO_CSOn);
            alarmgroup.push(val.alarm);
        });
        aniData[name] = {
            'alarmsecurity': alarmsecurity,
            'io_auto': io_auto,
            'io_ssen': io_ssen,
            'io_cson': io_cson,
            'alarmgroup': alarmgroup
        };
    }

    function ulMaker(myClass, myHtml, toId, myID) {
        try {
            var hasID = (myID) ? myID : myClass;
            $("<ul/>", {
                "class": myClass,
                "id": hasID,
                html: myHtml
            }).appendTo(toId);
        } catch (e) {
            console.log(e);
        }

    }

    function onMessage(msg, anotherWin) {
        var counter = $(".diagnose").get().length;
        if (counter === 4 || (window.screen.width < 1900 && counter === 3)) {
            return;
        }
        msg.myCounter = myCounter;
        if (compareWin) {
            msg.additionalClass = 'fixedPart';
            anotherWin = true;
        }
        if ($('.diagnose') && anotherWin !== true) {
            $('.diagnose').remove();
            clearMyInterval();
            terminateActiveAlarmClient();
        }
        var tmp = new emosWS.HTMLDiagnosisWindow(msg);
        var actWidth = $('.diagnose.' + myCounter).width();
        if (compareWin) {
            var tmpo = $('#center .diagnose:first').nextAll();
            $.each(tmpo, function (key, val) {
                $(val).animate({
                    'right': (actWidth * (key + 1))
                });
                $(val).find('.DiagnosisFooter').animate({
                    'right': (actWidth * (key + 1))
                });
            });
            $('.diagnose.' + myCounter).animate({
                'right': (actWidth * counter)
            });
            $('.diagnose.' + myCounter).find('.DiagnosisFooter').animate({
                'right': (actWidth * counter)
            });
            $('#dialog-message').hide();
        }
        compareWin = false;
        if (counter === 3 || (window.screen.width < 1900 && counter === 2)) {
            $('.copyTab').addClass('inactive');
            $('.arrangeTabs').addClass('inactive');
        }
        $("<div/>", {
            "id": "scrollTabs",
            "class": "emosbutton"
        }).appendTo($('.diagnose.' + myCounter).find('.ui-tabs-nav'));
        var numOfTabs = $('.diagnose.' + myCounter).find('.diatabs ul.ui-tabs-nav li').length;
        for (var i = 1; i < numOfTabs + 1; i++) {
            if ($('.diagnose.' + myCounter).find('.diatabs ul.ui-tabs-nav li:nth-of-type(' + i + ')').position().left >= 278) {
                $('.diagnose.' + myCounter).find('.diatabs ul.ui-tabs-nav li:nth-of-type(' + i + ')').css('visibility', 'hidden');
            }
        }
        ;
        var pageId;
        setTimeout(function () {
            pageId = $('.diagnose.' + myCounter).find('.DiagnosisPageBlank:visible');

            var myMainPage = pageId;
            var contentElement = '';
            if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
                contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
            } else {
                contentElement = myMainPage;
            }
            showScroll(contentElement);
            buildHeader(pageId);
            $('.keyboardInput').attr('lang', myLanguage);
            if (userloggedin) {
                var preparent = $('.diagnose.' + myCounter).find('.DiagnosisPageBlank.Private');
                getPrivateTabs(preparent);
            }
        }, 800);
        return tmp;
    }

    function showScroll(pageElement) {
        $.each($('.DiagnosisPageBlank:visible'), function () {
            var page;
            if ($(pageElement).hasClass('DiagnosisPageBlank')) {
                page = $(this);
            } else {
                page = $(this).find('.DiagnosisSubPageBlank:visible');
            }
            var extraheight = 25;
            if ($('html').hasClass('Firefox')) {
                extraheight = 25;
            }

            var contentelement = $(this).closest('.DiagnosisContent');
            var bottomParent = page.height(); //page.position().top + 
            var elemTop = page.scrollTop();
            var elemHight = page.prop("scrollHeight") - extraheight;
            if (elemTop === 0 && elemHight > bottomParent + 1) {
                contentelement.next().find('.scrollUp').removeClass('active');
                contentelement.next().find('.scrollDown').addClass('active');
            } else if (elemTop === 0 && elemHight <= bottomParent + 1) {
                contentelement.next().find('.scrollUp').removeClass('active');
                contentelement.next().find('.scrollDown').removeClass('active');
            } else if (elemTop > 0 && elemHight - elemTop <= bottomParent + 1) {
                contentelement.next().find('.scrollDown').removeClass('active');
                contentelement.next().find('.scrollUp').addClass('active');
            } else {
                contentelement.next().find('.scrollUp').addClass('active');
                contentelement.next().find('.scrollDown').addClass('active');
            }
        });
    }

    function animateOff(layer, toHide, activeParent, notclose) {
        if (!notclose) {
            clearMyInterval();
            terminateActiveAlarmClient();
        }
        $(layer).animate({
            height: "0px"
        }, 300, function () {
            $(toHide).hide();
            $(activeParent).removeClass('active');
        });
    }
    $("#language").unbind().click(function () {
        if ($(this).hasClass('active')) {
            animateOff("#language ul", "#language ul", "#language");
        } else {
            closeOther("#language");
            $("#language ul").show().animate({
                height: "320px"
            });
            $(this).addClass('active');
        }
    });
    $("#language ul li").click(function (event) {
        animateOff("#language ul", "#language ul", "#language");
    });

    function closeOther(me) {
        if ($('#alarms').hasClass('active')) {
            animateOff(".alarmpage", ".alarmpage", "#alarms");
            setTimeout(function () {
                $('#precenter').hide();
            }, 400);
            //emosWS.unadviseById(alarmTextId);
            clearMyInterval();
            terminateActiveAlarmClient();
        }
        var myTarget;
        if (me === '#alarms') {
            myTarget = $(me).parent().prev().find('.active').attr('id');
        } else {
            myTarget = $(me).siblings('.active').attr('id');
        }
        switch (myTarget) {
            case 'login':
                animateOff(".logmein", ".logmein", "#login");
                break;
            case 'config':
                animateOff(".preferences", ".preferences", "#config");
                break;
            case 'language':
                animateOff("#language ul", "#language ul", "#language");
                break;
        }
    }

    function buildHeader(pageId) {
        var waytofooter = $(pageId).closest('.DiagnosisContent').next('.DiagnosisFooter');
        var waytofooterhead = waytofooter.children('.footerHead');
        waytofooterhead.children('.circle').remove();
        waytofooterhead.removeClass('sub');
        waytofooter.children('.scrollLeft').removeClass('active');
        waytofooter.children('.scrollRight').removeClass('active');
        waytofooter.find('#subTabMenu').remove();
        var pagerHeadlineId = $(pageId).prevAll('.pager').children('.pagerHead').children('.pagerHeadLine').attr('id');
        var pagerHeadlineTextId;
        var PagerHeadlinetext;
        if ($(pageId).find('.DiagnosisSubPageBlank:visible').length === 0) {
            pagerHeadlineTextId = $(pageId)[0].headId;
            PagerHeadlinetext = $(pageId)[0].head;
        } else {
            var menulines = [];
            pagerHeadlineTextId = $(pageId).children().find('.DiagnosisSubPageBlank:visible')[0].headId;
            PagerHeadlinetext = $(pageId).children().find('.DiagnosisSubPageBlank:visible')[0].head;
            for (var i = 0; i < $(pageId).children('.diasubtabs')[0].tabNumbers; i++) {
                waytofooterhead.append('<span class="circle c' + i + '"><span class="circlenum">' + (i + 1) + '</span></span>');
                menulines.push("<li class='subtab' data-obj='" + i + "'>" + $(pageId).children().find('.DiagnosisSubPageBlank')[i].head + "</li>");
            }
            ulMaker('subTabMenu', menulines, waytofooterhead);
            waytofooterhead.addClass('sub');
            waytofooterhead.children('.circle').eq($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum - 1).addClass('big');
            waytofooterhead.children('.subTabMenu').children('li').eq($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum - 1).addClass('active');
            if ($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum < $(pageId).children('.diasubtabs')[0].tabNumbers) {
                waytofooter.children('.scrollRight').addClass('active');
            }
            if ($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum > 1) {
                waytofooter.children('.scrollLeft').addClass('active');
            }
        }
        /*var tmpId = $(pageId).closest('.DiagnosisContent').find('li.Messages').attr('id');
         alarmAnimations.push(new emosWS.HTMLFaultWarning({
         "id": tmpId,
         "alarmGroup": 'Benchmark_PLC1.Boolean.0401'
         }));*/
        var text = document.getElementById(pagerHeadlineId);
        var tmpAdviceText = emosWS.sendAdviseText(pagerHeadlineTextId, "name", function (msg) {
            if (msg) {
                text.value = msg.value;
            }
        });
        if (!tmpAdviceText) {
            text.value = PagerHeadlinetext;
        }
        if ($(pageId).hasClass('Private')) {
            $(text).prop('disabled', false);
        } else {
            $(text).prop('disabled', true);
        }
    }

    function buildTiles(appNum, appName) {
        var cars = [];
        var alarmTiles = [];
        var addAnimationsJobs = [];
        var station = results.sidebuttons[appNum].stationname.replace('Eco', "<span>Eco</span>");
        if (!myArr.sn) {
            myArr.sn = 'Station';
        }
        $('#stationname').html('<span class="myStation">' + myArr.sn + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + station + "<span class='icon'></span></span>");

        $('.cats').children('.' + appName.toLowerCase()).parent().addClass('active');
        var appToLoad = "results.sidebuttons[" + appNum + "].tiles";
        $.each(eval(appToLoad), function (key, val) {
            var id = getId();
            var apageId = getId();
            cars.push("<li data-link='" + val.link + "' class='tile " + val.iconclass + "'><span class='tilename'>" + val.name + "</span><span class='' id='" + id + "'><span class='warn_image'></span></span></li>");
            alarmTiles.push("<li id='" + val.name + "_" + id + "' data-link='" + val.link + "' class='firsttile emosbutton " + val.iconclass + "'><span class='tilename'>" + val.textId + "<br>" + val.name + "</span><span class='' id='" + apageId + "'><span class='warn_image'></span></span></li>");
            buildAlarmHeader(appNum, appName, addAnimationsJobs, alarmTiles, true, val);
            //add job for creating the animation (in future)
            addAnimationsJobs.push(function () {
                alarmAnimations.push(new emosWS.HTMLFaultWarning({
                    "id": id,
                    "alarmGroup": val.alarm
                }));
            });
            ulMaker('alarm_solo', alarmTiles, '#alarmpage_content', 'alarm_solo_' + id);
            alarmTiles = [];
        });
        cars.push("<br style='clear:both;'>");
        //ulMaker('cars', cars, '#center', 'cars');
        $("<ul/>", {
            "class": 'cars',
            "id": 'cars',
            html: cars.join("")
        }).prependTo('#center');

        //build alarm-buttons on top
        buildAlarmHeader(appNum, appName, addAnimationsJobs);
    }

    function buildAlarmHeader(appNum, appName, addAnimationsJobs, alarmTiles, neededforAlarmPage, tile) {
        var alarms = [];
        var alarmsOnoverlay = [];
        alarmToLoad = "results.sidebuttons[" + appNum + "].alarm_buttons";
        $.each(eval(alarmToLoad), function (key, val) {
            var id = getId();
            var alarmpage_id = getId();
            alarms.push("<li class='emosbutton " + val.iconclass + "'><span class='' id='" + id + "'></span></li>");
            if (alarmTiles)
                alarmTiles.push("<li class='emosbutton " + val.iconclass + "'><span class='' id='" + alarmpage_id + "'></span></li>");
            var tmpalarm;
            switch (val.alarm_id) {
                case 'IO_SSEN':
                    tmpalarm = tile ? tile.IO_SSEN : aniData[appName].io_ssen;
                    break;
                case 'IO_Auto':
                    tmpalarm = tile ? tile.IO_Auto : aniData[appName].io_auto;
                    break;
                case 'alarmsecurity':
                    tmpalarm = tile ? tile.alarm_security : aniData[appName].alarmsecurity;
                    break;
                case 'IO_CSOn':
                    tmpalarm = tile ? tile.IO_CSOn : aniData[appName].io_cson;
                    break;
                case 'alarmgroup':
                    tmpalarm = tile ? tile.alarm : aniData[appName].alarmgroup;
                    break;
            }

            var tmp_id;
            if (neededforAlarmPage) {
                tmp_id = alarmpage_id;
            } else {
                tmp_id = id;
            }
            addAnimationsJobs.push(function () {
                if (val.alarm_type === "IO") {
                    alarmAnimations.push(new emosWS.HTMLSwap({
                        "id": tmp_id,
                        "plctag": tmpalarm,
                        "falseBlinking": false
                    }));
                } else {
                    alarmAnimations.push(new emosWS.HTMLFaultWarning({
                        "id": tmp_id,
                        "alarmGroup": tmpalarm
                    }));
                }
            });
        });
        if (!neededforAlarmPage) {
            if (appName === 'Conveyor' || appName === 'Process') {
                ulMaker('alarms', alarms, '#alarmheader');
            } else {
                ulMaker('alarm_solo', alarms, '#alarmheader');
            }
        } else {
            //ulMaker('alarm_solo', alarmsOnoverlay, '#alarmpage');

        }

        //now start to create the animation
        addAnimationsJobs.forEach(function (job) {
            job();
        });
        return alarmsOnoverlay;
    }
    /* context menu */
    var x, y;
    var o;
    var myKey;
    var myPLC;
    var actElement;
    var myPrivId;
    $('#center').on("contextmenu", ".parentsbox", function (e) {
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
            o = $(this)[0].myData;
            myKey = $(this)[0].myKey;
            myPrivId = $(this)[0].myPrivId;
            myPLC = $(this).closest('.DiagnoseBody')[0].msg.PLC + $(this).closest('.DiagnoseBody')[0].msg.Tag;
            o.DiagnosisLibID = $(this).closest('.DiagnoseBody')[0].msg.DiagnosisLibID;
        }
    });
    $('#center').on("mousedown", ".parentsbox", function (e) {
        if ($('#contextMenu:visible').length > 0) {
            if (!(e.clientX >= x && e.clientX <= (x + $("#contextMenu").width()) && e.clientY >= y && e.clientY <= (y + $("#contextMenu").height()))) {
                $('#contextMenu').hide();
                $(this).attr('style', '');
            }
        }
    });
    $('body').on("click", ".subContext:not(.elementdelete)", function (e) {
        var pageId = $(e.target).attr('href');
        if (pageId === '#') {
            var tmp = new emosWS.AddSubTab($('.dPage.Private .diasubtabs'));
            var parentelementid = tmp.parent[0].id;
            pageId += $('#' + parentelementid).children().last().attr('id');
        }
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
        var privateResults = $.getPrivValues();

        if (!privateResults) {
            privateResults = {};
            actId = 1;
        } else {
            privateResults = $.getPrivValues();
            $.each(Object.keys(privateResults), function (key, val) {
                $.each(Object.keys(privateResults[val]), function (key1, val1) {
                    myArray.push(parseInt(val1));
                });
            });
            actId = Math.max.apply(Math, myArray);
            if (actId === -Infinity) {
                actId = 0;
            }
            actId++;
        }
        new emosWS.AddDataToSubTab(parent, o, myPLC, myKey, writable, actId);
        $('#contextMenu').hide();
        actElement.css('border', 'none');
        actElement = null;
        var tabNum = $(pageId).attr('data-pos');
        if (!privateResults[tabNum]) {
            privateResults[tabNum] = {};
        }
        privateResults[tabNum][actId] = {
            "data": o,
            "myPLC": myPLC,
            "myKey": myKey,
            "writable": writable
        };

        if (myName) {
            emosWS.writeData("/framework/config/users/" + myName + ".json", JSON.stringify(privateResults, null, " "));
        }
        o = null;
    });
    $('body').on("click", ".elementdelete", function (e) {
        var parent = actElement.closest('.dPage').attr("data-pos");
        var privateResults = $.getPrivValues();
        delete privateResults[parent][myPrivId];
        var tmp = privateResults[parent];
        if (jQuery.isEmptyObject(tmp)) {
            console.log('leer');
            //delete privateResults[parent];
        }
        emosWS.writeData("/framework/config/users/" + myName + ".json", JSON.stringify(privateResults, null, " "));
        actElement.remove();
        $('#contextMenu').hide();
    });
    $(window).scroll(function () {
        $('#contextMenu').hide();
    });
    $('#center').on("change", ".pagerHeadLine", function (e) {
        saveHeadline(this)
    });
    // ende context menü 
    function saveHeadline(self) {
        var parent = $(self).closest('.diatabs ').find('.DiagnosisSubPageBlank:visible');
        var oldAttr = parent.attr("data-pos");
        parent.attr("data-pos", self.value);
        parent[0].head = self.value;
        var privateResults = JSON.stringify($.getPrivValues());
        privateResults = privateResults.replace(new RegExp("\\b" + oldAttr + "\\b"), self.value);
        emosWS.writeData("/framework/config/users/" + myName + ".json", privateResults);
        $('#contextMenu .context a:contains(' + oldAttr + ')').text('Copy to Tab ' + self.value);
    }
    function getPrivateTabs(preparent) {
        var privateResults = $.getPrivValues();
        if (privateResults) {
            $.each(Object.keys(privateResults), function (key, val) {
                var mother = preparent.find("[data-pos='" + val + "']");
                if (key === 0 && mother.length === 0) {
                    mother = preparent.find(".dPage");
                }
                if (mother.length === 1) {
                    mother[0].head = val;
                    $(mother).attr("data-pos", val);
                    $('#contextMenu .context a.first').text('Copy to Tab ' + val);
                }
                var parent = preparent.find("[data-pos='" + val + "']").children('table'); //$('.diagnose').find('.dPage.Private .diasubtabs');

                if (parent.length === 0) {
                    var tmp = new emosWS.AddSubTab(preparent.children('.diasubtabs'), val);
                    parent = preparent.find("[data-pos='" + val + "']").children('table');
                }
                $.each(Object.keys(privateResults[val]), function (key1, val1) { //parent, o, myPLC, myKey, writable
                    new emosWS.AddDataToSubTab(parent, privateResults[val][val1].data, privateResults[val][val1].myPLC, privateResults[val][val1].myKey, privateResults[val][val1].writable, val1);
                });
            });
        }
    }
    // get private-Tab-data from json-file
    jQuery.extend({
        getPrivValues: function () {
            var result = null;
            $.ajax({
                url: "https://hmi.durr.com/emostestrd/framework/config/users/" + myName + ".json",
                type: 'get',
                dataType: 'json',
                async: false,
                cache: false,
                success: function (data) {
                    result = data;
                }
            });
            return result;
        }
    });
    $.widget("ems.numpad", {
        _create: function () {
            var id = $('.numpad').length + 1;
            var elementId = this.options.myid;
            var max = $(this.element).closest('div.parentsbox')[0].myData.IntInputMax;
            var min = $(this.element).closest('div.parentsbox')[0].myData.IntInputMin;
            var pokeFunction = $(this.element).closest('div.parentsbox')[0].poke;
            var placeholder = '';
            if (max - min < 500) {
                placeholder = '<tr><td colspan="4">' + min + ' <input id="slider' + id + '" value="' + $(this.element).prevAll('.textfeld').attr('data-value') + '" name="amountRange" type="range" oninput="this.form.preview.value=this.value" min="' + min + '" max="' + max + '" step="0.1" /> ' + max + '<br><br></td></tr>';
            }
            this.body = $(
                    '<table class="numpad" id="np_' + elementId + '">' +
                    '<tr>' +
                    '<td colspan="4"><input type="text" step="any" min="-20" max="200" value="' + $(this.element).prevAll('.textfeld').attr('data-value') + '" class="DiagnosisNumberLRTextNumberSVG preview" name="preview" id="preview' + id + '"><br><br></td>' +
                    '</tr>' +
                    placeholder +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">7</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">8</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">9</a></td>' +
                    '<td rowspan="4">' +
                    '<table>' +
                    '<tr>' +
                    '<td class="tableRight tdplus"><a data-role="button" data-theme="b" class="plus"></a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="tableRight"><a data-role="button" data-theme="b" class="minus"></a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td class="tableRight tddone"><!--<a data-role="button" data-theme="b" class="done"></a> --></td>' +
                    '</tr>' +
                    '</table>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">4</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">5</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">6</a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">1</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">2</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">3</a></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td><a data-role="button" data-theme="e" class="clear">C</a></td>' +
                    '<td><a data-role="button" data-theme="b" class="nummer">0</a></td>' +
                    '<td><a data-role="button" data-theme="e" class="nummer">.</a></td>' +
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
                    if (pokeFunction) {
                        pokeFunction($('#preview' + id).val());
                    } else {
                        emosWS.poke(myPLC, $('#preview' + id).val());
                    }
                },
                'click.clear': function (e) {
                    $('#preview' + id).val($('#preview' + id).val().substring(0, $('#preview' + id).val().length - 1));
                    $('#slider').val($('#preview' + id).val());
                },
                'mousedown.plus': function (e) {
                    timeout = setInterval(function () {
                        $('#preview' + id).val(Number($('#preview' + id).val()) + 1.0);
                        $('#slider' + id).val($('#preview' + id).val());
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
                        if ($('#preview' + id).val() > 0) {
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
                }
            });
        },
        destroy: function () {
            $('#' + this.body[0].id).remove();
            $.Widget.prototype.destroy.call(this);
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
            'height': 300
        }, 400, function () {
            var myTop = $(this).position().top;
            var myScrollTop = $(this).closest('.dPage').scrollTop();
            $(this).closest('.dPage').animate({
                'scrollTop': myScrollTop + (myTop - 70)
            });
            showScroll($(this).closest('.dPage'));
        });
        $(this).closest('.parentsbox').find('.DiagnosisStringButtons').find('.preview').focus().select();
    });

    $('#center').on("click", ".cancelbutton", actionForCancel);
    $('#center').on("click", ".savebutton", actionForSave);

    var myOldName;
    $('#center').on("click", ".getKeypad", function (e) {
        var myInput;
        var myPrev;
        if ($(this).hasClass('pagerHeadLine')) {
            myOldName = this.value;
            myInput = this;
            myPrev = $(this);
        } else {
            myInput = document.getElementById($(this).nextAll('.DiagnosisStringButtons').find('.preview').attr('id'));
            myPrev = $(this).nextAll('.DiagnosisStringButtons').find('.preview');
        }

        VKI_attach(myInput);
        setTimeout(function () {
            myPrev.focus();
        }, 200);
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            actionForCancel(e);
        } else if (e.keyCode === 13) {
            actionForSave(e);
        }
    });
    $('#center').on("click", ".parentsbox.priv.compact", function (e) {
        $(this).next().toggle();
        showScroll($(this).closest('.dPage'));
    });
    // saving input for numpad and keypad 
    function actionForSave(e) {
        if ($('.savemebutton:visible').length) {
            var myObject = $('.savemebutton:visible').parent();
            if (myObject.hasClass('DiagnosisTextDoubleTimer')) {
                emosWS.DiagnosisTextDoubleTimer.prototype.onButtonSave(myObject);
            } else if (myObject.hasClass('DiagnosisTextTimer')) {
                emosWS.DiagnosisTextTimer.prototype.onButtonSave(myObject);
            }
            return;
        }

        var self;
        if (e.type === 'keydown') {
            self = $('.savebutton:visible');
        } else {
            self = $(this);
        }

        var myPLC;
        if (self.hasClass('second')) {
            myPLC = self.closest('.DiagnoseBody')[0].msg.PLC + self.closest('.DiagnoseBody')[0].msg.Tag + '.' + self.closest('div.parentsbox')[0].myData.OPCID2;
        } else {
            myPLC = self.closest('.DiagnoseBody')[0].msg.PLC + self.closest('.DiagnoseBody')[0].msg.Tag + '.' + self.closest('div.parentsbox')[0].myData.OPCID;
        }
        var
                pokeFunction = self.closest('div.parentsbox')[0].poke,
                value = self.closest('.parentsbox').find('.preview').val();
        if (pokeFunction) {
            pokeFunction(value);
        } else {
            emosWS.poke(myPLC, value);
        }
        self.closest('.parentsbox').find('.DiagnosisStringButtons').animate({
            'height': 0
        });
        actionForCancel(e);
    }
    // cancel the input with numpad and keypad
    function actionForCancel(e) {
        if ($('.savemebutton:visible').length) {
            var myObject = $('.savemebutton:visible').parent();
            myObject.find('.myPicker').mobiscroll('destroy');
        }
        var self;
        if (e.type === 'keydown') {
            self = $('.cancelbutton:visible');
        } else {
            self = $(e.target);
        }
        if (self.closest('.parentsbox').find('.numpad').length > 0) {
            self.closest('.parentsbox').find('.numpad').parent().data("ems-numpad").destroy();
        }
        var myInput = document.getElementById($('.preview.keyboardInput:visible').attr('id'));
        VKI_close(myInput);
        self.closest('.parentsbox').find('.DiagnosisStringButtons').animate({
            'height': 0
        });
        self.closest('.parentsbox').find('.cancelbutton').hide();
        self.closest('.parentsbox').find('.savebutton, .savemebutton').hide();
        self.closest('.parentsbox').find('.writebutton').show();
    }
    function onSiteProperties(msg) {
        $('.diagnose').remove();
        clearMyInterval();
        terminateActiveAlarmClient();
        if (msg) {
            var iframelink = $('#plants').contents().get(0).URL;
            var filename = iframelink.substring(iframelink.lastIndexOf('/') + 1);
            var idname = filename.slice(0, -4);
            filename = (filename.slice(0, -4)).replace(/\_/g, " ");
            if (msg.BreadcrumbLevel === breadparts.length - 1) {
                var delLinklist = filenames[msg.BreadcrumbLevel].replace(/\ /g, '_');
                breadparts.splice(msg.BreadcrumbLevel);
                breadurls.splice(msg.BreadcrumbLevel);
                filenames.splice(msg.BreadcrumbLevel);
                delete linklist[delLinklist];
            }
            if (jQuery.inArray(filename, filenames) === -1) {
                filenames.push(filename);
                breadurls.push(iframelink);
                breadparts.push("<li id='" + idname + "' class='bread_li' data-link='" + filename + "'>" + filename + "</li>");
            }
            $('#breadcrump').empty();
            $('#quickcontrol').empty();
            ulMaker('bread', breadparts, '#breadcrump');
            $('#breadcrump li:first-child').text('');
            linklist[idname] = [];
            $.each(msg.Links, function (key, val) {
                linklist[idname].push("<li class='breadoverlay_li' data-link='" + val + "'>" + val + "</li>");
            });
            var i = 0;
            for (var key in linklist) {
                if (linklist[key].length > 0) {
                    ulMaker('breadoverlay' + i, linklist[key], '#breadcrump');
                    $('#breadoverlay' + i).addClass(key + ' crumbOL');
                }
                i++;
            }
            //console.log(msg)
            if (msg.QuitALM) {
                $("<span/>", {
                    "class": "emosbutton reset",
                    "id": "reset"
                }).appendTo('#quickcontrol');
                $('#reset')[0].myPlc = msg.QuitALM.PlcTag;
            }

            if (msg.AckALM) {
                $("<span/>", {
                    "class": "emosbutton quit",
                    "id": "quit"
                }).appendTo('#quickcontrol');
                $("<span/>", {
                    "class": "",
                    "id": "quit_alarm"
                }).appendTo('#quit');
                new emosWS.HTMLFaultWarning({
                    "id": 'quit_alarm',
                    "alarmGroup": msg.AckALM.AlarmGroups
                });
                $('#quit')[0].myPlc = msg.AckALM.AlarmGroups;
            }
        }
    }
    $('#quickcontrol').on("click", "#quit", function () {
        $.each($('#quit')[0].myPlc, function (key, val) {
            emosWS.poke(val + '.Alarm', 1);
        });
    });
    $('#quickcontrol').on("click", "#reset", function () {
        emosWS.poke($('#reset')[0].myPlc + '.Alarm', 1);
    });

    // breadcrumb -> show/hide Linklist, on click load page
    $('#breadcrump').on("mouseenter", ".bread_li", function () {
        var myClass = $(this).attr('id');
        if ($('.' + myClass).hasClass('active'))
            return;
        $('.' + myClass).show().addClass('active');
        $('.' + myClass).animate({
            'height': 560 //$('.' + myClass).prop("scrollHeight"),
        });
    });
    $('#breadcrump').on("mouseleave", ".bread_li, .crumbOL", function () {
        var myClass = $(this).attr('id');
        setTimeout(function () {
            if ($('.' + myClass + ':hover').length <= 0 && $("#" + myClass + ":hover").length <= 0) {
                animateOff("." + myClass, "." + myClass);
                $('.' + myClass).css({
                    'height': 0
                });
                $('.' + myClass).removeClass('active');
            }
        }, 400);
    });
    $('#breadcrump').on("click", ".breadoverlay_li", function (e) {
        $('.diagnose').remove();
        clearMyInterval();
        terminateActiveAlarmClient();
        var iframelink = $('#plants').contents().get(0).URL;
        var filename = iframelink.substring(iframelink.lastIndexOf('/') + 1);
        var myUrl = iframelink.replace(filename, '');
        var tmpText = e.target.getAttribute('data-link').replace('./', '');
        var myText = myUrl + tmpText;
        $('#plants').attr('src', myText);
    });
    // end breadcrumb
    function terminateActiveAlarmClient() {
        if (activeAlarmClient) {
            try {
                activeAlarmClient.terminate();
            } catch (e) {
            }
        }
    }
    // 4 buttons in alarmpage-overlay
    $('.alarmtab.icon2').click(function (e) {
        if ($(this).parent().hasClass('active')) {
            return;
        }
        $('#alarmpage_content .DiagnosisRestAlarmClient').remove();
        $('#selectId').remove();
        $('#alarmpage_content').addClass('alarmList');
        $('.alarm_solo').hide();
        $('.alarmtabwrapper').removeClass('active');
        $(this).parent().addClass('active');
        var data = [];
        //var myAlarmList = emosWS.getAlarmList();
        buildAlarmList();
        terminateActiveAlarmClient();
        activeAlarmClient = new emosWS.AlarmClient($('#alarmpage_content'), data, "$System", null, true); //110_02F


    });
    $('.alarmtab.icon1').click(function (e) {
        changeActive(this, true);
    });
    $('.alarmtab.icon3').click(function (e) {
        if ($(this).parent().hasClass('active')) {
            return;
        }
        changeActive(this);
        $('#alarmpage_content').addClass('alarmList');
        buildAlarmList();
        emosWS.rest.alarm.top('$System', 100, function (data) {
            var AlarmHistory = new emosWS.RestAlarmClient($('#alarmpage_content'), data);
        });

    });
    $('.alarmtab.icon4').click(function (e) {
        changeActive(this);
        addTrendPage($('#alarmpage_content'));
    });
    // end alarmpage-overlay icons
    function addTrendPage(parent) {
        var id = "TrendPageContainer";
        body = $("<div class='TrendPageElement' id='" + id + "'></div>");
        body.appendTo(parent);
        trendPage = new emosWS.TrendPage({
            'uiID': id,
            'data': [
                [
                    'Plot.Integer.P2283_Square1',
                    'Plot.Real.V2264_Sinus1',
                    'Plot.uInt.P2287_SawTooth1'
                ]
            ]
        });
    }
    // to build the Filterlist of the alarmgroups
    function buildAlarmList() {
        //var s = $("<div class=\"emosbutton\" id=\"selectId\" name=\"alarmFilter\" />");
        var s = $("<div />", {
            id: "selectId",
            class: "emosbutton",
            click: function () {
                if ($(this).hasClass('active')) {
                    animateOff("#selectId ul", "#selectId ul", "#selectId", true);
                } else {
                    $("#selectId ul").show().animate({
                        height: "450px"
                    });
                    $(this).addClass('active');
                }
            }
        }).append("<span class='filterText'>Filter</span>");
        var myList = $("<ul class=\"listOverlay\" />");
        for (var val in myAlarmList) {
            $("<li />", {
                text: myAlarmList[val].text,
                "data-val": myAlarmList[val].alg,
                click: function (e) {
                    $('.filterText').text(this.innerHTML);
                    animateOff("#selectId ul", "#selectId ul", "#selectId");
                    if ($('.alarmtab.icon2').parent().hasClass('active')) {
                        clearMyInterval();
                        terminateActiveAlarmClient();
                        var data = [];
                        $('#alarmpage_content .DiagnosisAlarmClient').remove();
                        var activeAlarmClient = new emosWS.AlarmClient($('#alarmpage_content'), data, e.target.getAttribute("data-val"), null, true); //110_02F
                        myOldAlarm = e.target.getAttribute("data-val");
                    } else if ($('.alarmtab.icon3').parent().hasClass('active')) {
                        $('#alarmpage_content .DiagnosisRestAlarmClient').remove();
                        emosWS.rest.alarm.top(e.target.getAttribute("data-val"), 100, function (data) {
                            var AlarmHistory = new emosWS.RestAlarmClient($('#alarmpage_content'), data);
                        });
                    }
                }
            }).appendTo(myList);
        }
        myList.appendTo(s);
        s.appendTo('#alarmpage_content');

    }
    // a function to change the active status of the button in alarm-overlay
    function changeActive(self, showme) {
        if (showme) {
            $('.alarm_solo').show();
        } else {
            $('.alarm_solo').hide();
        }

        clearMyInterval();
        terminateActiveAlarmClient();
        $('#alarmpage_content .DiagnosisAlarmClient').remove();
        $('#alarmpage_content .DiagnosisRestAlarmClient').remove();
        $('#alarmpage_content .TrendPageElement').remove();
        $('#selectId').remove();
        $('.alarmtabwrapper').removeClass('active');
        $('#alarmpage_content').removeClass('alarmList');
        $(self).parent().addClass('active');
    }

    // if more than 3 Tab on DiagnoseWin, we got a scroll-Button to scroll to the not visible Tabs
    $('#center').on('click', "#scrollTabs", function (e) {

        var tmpObj = {};
        tmpObj.numOfTabs = $(this).parent().children('li').length;
        tmpObj.$obj = $(this);
        var distance;
        if ($(this).hasClass('scrollleft')) {
            distance = 0;
        } else {
            distance = (tmpObj.numOfTabs - 3) * (-94);
        }
        $(this).parent().children().css('visibility', 'visible');
        $(this).parent().animate({marginLeft: distance});
        tmpObj.myTimer = setTimeout(
                function () {
                    for (var i = 0; i < tmpObj.numOfTabs; i++) {
                        if (tmpObj.$obj.parent().children().eq(i).position().left >= 278 || tmpObj.$obj.parent().children().eq(i).position().left <= 1) {
                            tmpObj.$obj.parent().children().eq(i).css('visibility', 'hidden');
                        } else {
                            tmpObj.$obj.parent().children().eq(i).css('visibility', 'visible');
                        }
                    }
                    ;
                    //console.log($(this).parent().children().eq(0))
                    if (tmpObj.$obj.parent().children().eq(0).position().left <= 1) {
                        tmpObj.$obj.addClass('scrollleft');
                    } else {
                        tmpObj.$obj.removeClass('scrollleft');
                    }
                    if (tmpObj.$obj.parent().children().eq(tmpObj.numOfTabs - 1).position().left >= 278) {
                        tmpObj.$obj.addClass('scrollright');
                    } else {
                        tmpObj.$obj.removeClass('scrollright');
                    }
                },
                400
                );

    });

    // tests for QR-Code; A big problem ist the Windows Phone 
    $('#center').on('click', '#generateQR', function (e) {
        if ($('#qrOverlay').length) {
            return;
        }
        $("<div/>", {
            "id": "qrOverlay",
            "class": "overlay"
        }).appendTo('#center');

        $('#qrOverlay').qrcode({
            "render": "canvas",
            "width": 580,
            "height": 580,
            "text": "Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben. Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte. »Es ist ein eigentümlicher Apparat«, sagte der Offizier zu dem Forschungsreisenden und "
        });

        var addTable = $("<div/>", {
            "id": "scanQR",
            "class": "emosbutton",
            "text": "Scan QR-Code"
        });
        addTable.appendTo('.Scanner .dPage');
    });
    $('#center').on('click', '#scanQR', function (e) {
        $("<canvas/>", {
            "id": "qrScanOverlay",
            "class": "overlay",
            "width": 300,
            "height": 300

        }).appendTo('#qrOverlay');
        var arg = {
            resultFunction: function (result) {
                $('#qrOverlay').append($('<span class="result">' + result.format + ': ' + result.code + '</span>'));
            }
        };
        var xxx = $("<select/>", {
            "id": "heinz",
            "class": "emosbutton",
            "margin": 20
        });
        xxx.appendTo('#qrOverlay');
        var decoder = $("#qrScanOverlay").WebCodeCamJQuery(arg).data().plugin_WebCodeCamJQuery;
        decoder.buildSelectMenu(xxx);
        decoder.play();
        /*  Without visible select menu
         decoder.buildSelectMenu(document.createElement('select'), 'environment|back').init(arg).play();
         */
        $('select').on('change', function () {
            decoder.stop().play();
        });

    });
});