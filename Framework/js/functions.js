/* 
 collection of functions
 */
var list;
var index = 0;
var items = [];
var servers;
var d_num = 0;
var aniData = {};
var alarmAnimations1 = [];
var alarmAnimations = [];
var filenames = [];
var breadparts = [];
var breadalarmgroup = [];
var breadurls = [];
var linklist = [];
var myCounter = 0;
var compareWin = false;
var myArr = [];
var globalInterval = [];
var activeAlarmClient = null;
var trendPage = null;
var myName;
var userRights;
var userRole;
var userloggedin = false;
var appToEdit;
var appResults = {};
var countryCode;
var almURight = '0';
var almGRight = '0';
var quitURight = '0';
var quitGRight = '0';
var quitSecurity;
var almSecurity;
var buildNewApp = false;
var buildNewServer = false;
var reloadFrom = {};
//get parameter from URL
var query = window.location.search.substring(1);
var vars = query.split("&");
var tmp;
var plcurl;
var onOffCounter = 0;
var scrollButtonClicked = 0;
var activeSidebutton;
var jsonFile;
var headcontrol;
var alarmingAPT;
var jsonString;
var maintenanceList;
var mappingList = false;
var statusWindowMappingList = {};
var sidebuttonSVGPath = "svg/Mainmenu";
var plantSVGPath = "svg/icons_start";
var alarmbuttonSVGPath = "svg/StatusAlarmLine";
var bShowSummary = false;
var reloadAlarmTable = true;
//var gesAlarmList = [];
//var gesOperationList = [];
$.each(vars, function (key, val) {
    tmp = val.split("=");
    myArr[tmp[0]] = tmp[1];
});
if(myArr.content) {
	myArr.content = decodeURIComponent(myArr.content);
}
if (!myArr.app) {
    myArr.app = '';
}
appToEdit = myArr.app;

// get configuration-data from json-file
jQuery.extend({
    getValues: function () {
        var result = null;
        $.ajax({
            url: configURL + 'app/' + appToEdit + '.json',
            type: 'get',
            dataType: 'json',
            async: false,
            cache: false,
            success: function (data) {
                result = data;
                localStorage.setItem('myApp', JSON.stringify(data));
            },
            beforeSend: function () {
                //$('.ball, .ball1').show();
            },
            complete: function () {
                //$('.ball, .ball1').hide();
            },
            error: function () {
                try{
                    result = JSON.parse(localStorage.getItem('myApp'));
                    $('.servererror').show();
                    $('html,body').addClass('offline');
                } catch(e){
                    console.log('error');
                }
                
//                $('.ball, .ball1').hide(); falls noch benötigt
                //$('.servererror').show();
            }
        });
        return result;
    },
    getMyName: function () {
        return myName;
    },
    getHelp: function() {
        var helpFiles = null;
        $.ajax({
            url: helpURL + 'help.json',
            type: 'get',
            contentType: "'application/x-www-form-urlencoded; charset=UTF-8'",
            dataType: 'json',
            async: false,
            success: function (data) {
                helpFiles = data;
            },
            error: function (d) {
                console.log(d);                    
            }
        });
        return helpFiles.help;
    },
    getGlobal: function() {
        var langus = null;
        $.ajax({
            url: configURL + "fw_global.json",
            type: 'get',
            dataType: 'json',
            async: false,
            cache: false,
            success: function (data) {
                if(!data.logoutTime)
                    data.logoutTime = "10";
                if(!data.hideTrendButton)
                    data.hideTrendButton = "checked";
                if(!data.resize)
                    data.resize = "unchecked";
                if(!data.showBadQualities)
                    data.showBadQualities = "checked";
                if(!data.showZoom)
                    data.showZoom = "unchecked";
                langus = data;
                localStorage.setItem('myGlobals', JSON.stringify(data));
            },
            error: function (d) {
                try{
                    langus = JSON.parse(localStorage.getItem('myGlobals'));
                } catch(e){
                    console.log(d); 
                }
                                   
            }
        });
        return langus;
    },
    getPlantList: function() {
        var plantlist = null;
        $.ajax({
            url: configURL + 'plants.json',
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                plantlist = data;
            },
            error: function (d) {
                console.log(d);                    
            }
        });
        return plantlist;
    },
    getPLCdata: function() {
        var plcList = null;
        $.ajax({
            url: configURL + 'plcsoftware/' + plcurl + 'json',
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                plcList = data;
            },
            error: function (d) {
                console.log(d);                    
            }
        });
        return plcList;
    },
    getPLCdataAPT: function() {
        var plcList = null;
        $.ajax({
            url: configURL + '../config/APT/APTPLC.json',
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                plcList = data;
            },
            error: function (d) {
                console.log(d);                    
            }
        });
        return plcList;
    },
    getPrivValues: function () {
        var result = null;
        $.ajax({
            url: configURL + "users/" + myName + ".json",
            type: 'get',
            dataType: 'json',
            async: false,
            cache: false,
            success: function (data) {
                result = data;
            }
        });
        return result;
    },
    getPublicTabs: function () {
        var publics = null;
        $.ajax({
            url: configURL + "publictabs.json",
            type: 'get',
            dataType: 'json',
            async: false,
            cache: false,
            success: function (data) {
                publics = data;
            }
        });
        return publics;
    },
    getLanguageCodeList: function() {
        var codelist = null;
        $.ajax({
            url:  configURL + 'languagecodes.json',
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) {
                codelist = data;
            },
            error: function (d) {
                console.log(d);                    
            }
        });
        return codelist;
    },
    getStatWin: function() {
        var statwin = null;
        var newJsonArr = null;
        var newStatWin = {};
        newStatWin.data = {};
        newStatWin.data.windowData = {};
        newStatWin.data.windowData.PageControl = {};
        $.ajax({
            //url:  'https://localhost/design/HMI_Frontend/config/StatWin/1/hugo.json', 
            url:  configURL + 'StatWin/' + department + '/' + jsonFile + '?nocache=' + (new Date()).getTime(),
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) { 
                newStatWin = data;
                newJsonArr = [];
                var newData = Object.keys(data.data.windowData.PageControl);
                newData.sort();
                delete data.HashCode;
                jsonString = JSON.stringify(data); 
                var mainData = JSON.parse(JSON.stringify(data.data.windowData.PageControl));
                $.each(newData, function (key, val) { 
                    var keyTemp = val.split('-');
                    var keyFirstLevel = keyTemp[1];
                    var level1temp = {};
                    var level2temp = {};
                    var newData1 = Object.keys(mainData[val]);
                    newData1.sort();
                    $.each(newData1, function(key1, val1){
                        if(val1.indexOf("100") !== -1 || val1.indexOf("199") !== -1){
                            var keyTemp2 = val1.split('-');
                            var keySecondLevel = keyTemp2[1];
                            level2temp[keySecondLevel] = [];
                            var newData2 = Object.keys(mainData[val][val1]);
                            newData2.sort();
                            $.each(newData2, function(key2, val2){ 
                                var level3temp = {};
                                if(val2.indexOf("100") !== -1 || val2.indexOf("199") !== -1) {                                    
                                    var keyTemp3 = val2.split('-');
                                    var keyThirdLevel = keyTemp3[1];                                    
                                    level3temp[keyThirdLevel] = [];                                     
                                    var newData3 = Object.keys(mainData[val][val1][val2]);
                                    newData3.sort();
                                    $.each(newData3, function(key3, val3){ 
                                        var level4temp = {};
                                        
                                        if(val3.indexOf("100") !== -1) {  
                                            var keyTemp4 = val3.split('-');
                                            var keyFourthLevel = keyTemp4[1];  
                                            if(val3.indexOf("AddPageControl") !== -1){                              
                                                level4temp[keyFourthLevel] = [];                                     
                                                var newData4 = Object.keys(mainData[val][val1][val2][val3]);
                                                newData4.sort();
                                                
                                                $.each(newData4, function(key4, val4){
                                                    var level5temp = {};
                                                    var keyTemp5 = val4.split('-');
                                                    var keyFifthLevel = keyTemp5[1];
                                                    if(val4.indexOf("100") !== -1){ 
                                                        level5temp[keyFifthLevel] =[];// mainData[val][val1][val2][val3][val4];
                                                        var newData5 = Object.keys(mainData[val][val1][val2][val3][val4]);                                                    
                                                        newData5.sort();
                                                        $.each(newData5, function(key5, val5){
                                                            var level6temp = {};
                                                            if(val5.indexOf("100") !== -1) {
                                                                var keyTemp6 = val5.split('-');
                                                                var keySixthLevel = keyTemp6[1]; 
                                                                
                                                                
                                                                // beginn 
                                                                if(val5.indexOf("AddPageControl") !== -1){  
                                                                    level6temp[keySixthLevel] = [];                                     
                                                                    var newData6 = Object.keys(mainData[val][val1][val2][val3][val4][val5]);
                                                                    
                                                                    newData6.sort();
                                                                    $.each(newData6, function(key6, val6){
                                                                        var level7temp = {};
                                                                        var keyTemp7 = val6.split('-');
                                                                        var keyseventhLevel = keyTemp7[1];
                                                                        if(val6.indexOf("100") !== -1){ 
                                                                            level7temp[keyseventhLevel] =[];// mainData[val][val1][val2][val3][val4];
                                                                            var newData7 = Object.keys(mainData[val][val1][val2][val3][val4][val5][val6]);                                                    
                                                                            newData7.sort();
                                                                            $.each(newData7, function(key7, val7){
                                                                                var level8temp = {};
                                                                                if(val7.indexOf("100") !== -1) {
                                                                                    var keyTemp8 = val7.split('-');
                                                                                    var keyeightLevel = keyTemp8[1]; 
                                                                                    level8temp[keyeightLevel] = mainData[val][val1][val2][val3][val4][val5][val6][val7];
                                                                                    level7temp[keyseventhLevel].push(level8temp);
                                                                                    
                                                                                } else {
                                                                                    level7temp[keyseventhLevel][val7] = mainData[val][val1][val2][val3][val4][val5][val6][val7];
                                                                                    var obj = {};
                                                                                    obj[val7] = mainData[val][val1][val2][val3][val4][val5][val6][val7];

                                                                                    level7temp[keyseventhLevel].push(obj);
                                                                                }

                                                                            });
                                                                        } else {
                                                                            level7temp[val6] = mainData[val][val1][val2][val3][val4][val5][val6];
                                                                        }
                                                                        level6temp[keySixthLevel].push(level7temp);
                                                                    }); 

                                                                } else {
                                                                    level6temp[keySixthLevel] = mainData[val][val1][val2][val3][val4][val5];
//                                                                    level5temp[keyFifthLevel].push(level6temp);
                                                                }
                                                                
                                                                // ende
                                                                
                                                                
                                                                
                                                                
                                                                //level6temp[keySixthLevel] = mainData[val][val1][val2][val3][val4][val5];
                                                                level5temp[keyFifthLevel].push(level6temp);
                                                            } else {
                                                                level5temp[keyFifthLevel][val5] = mainData[val][val1][val2][val3][val4][val5];
                                                                var obj = {};
                                                                obj[val5] = mainData[val][val1][val2][val3][val4][val5];

                                                                level5temp[keyFifthLevel].push(obj);
                                                            }

                                                        });
                                                    } else {
                                                        level5temp[val4] = mainData[val][val1][val2][val3][val4];
                                                    }
                                                    level4temp[keyFourthLevel].push(level5temp);
                                                }); 
                                                
                                            } else {      
                                                level4temp[keyFourthLevel] = mainData[val][val1][val2][val3];
//                                                level3temp[keyThirdLevel].push(level4temp);
                                            }
                                            level3temp[keyThirdLevel].push(level4temp);
                                        } else {
                                            level3temp[keyThirdLevel][val3] = mainData[val][val1][val2][val3];
                                            var obj = {};
                                            obj[val3] = mainData[val][val1][val2][val3];
                                            level3temp[keyThirdLevel].push(obj);
                                        }
                                    });
                                } else {
//                                    level3temp[val2] = mainData[val][val1][val2];
                                }
                                level2temp[keySecondLevel].push(level3temp);
                            });
                        } else {
                            level2temp[val1] = mainData[val][val1];
                        }  
                        level1temp[keyFirstLevel] = level2temp;
                    });
                    newJsonArr.push(level1temp);
                });
                delete newStatWin.data.windowData.PageControl; 
                newStatWin.data.windowData.PageControl = newJsonArr;
            },
            error: function (d) {
                console.log(d);                    
            }
        });
        return newStatWin;
    },
    getAPTAlarmList: function (){
        var alarmList = null;
        $.ajax({
            url: configURL  + "../contents/APT/AlarmingSPS_RPC_" + countryCode + ".json",
            type: 'get',
            dataType: 'json',
            async: false,
            cache: false, 
            success: function (data) {
                alarmList = data;
            },
            error: function (d) {
                console.log(d);
            }
        });
        return alarmList;
    }, 
    getMaintenanceList: function (){
        var maintenance = null;
        $.ajax({
            url: configURL + "Maintenance/P1B1T1_ZS01_E41_A02.json",
            type: 'get',
            dataType: 'json',
            async: false,
            cache: false, 
            success: function (data) {
                maintenance = data;
            },
            error: function (d) {
                console.log(d);
            }
        });
        return maintenance;
    }
//    ,
//    getStatWinJson: function() {
//        var jasonData = null;
//        $.ajax({
//            url:  configURL + 'StatWin/' + department + '/' + jsonFile,
//            type: 'get',
//            dataType: 'json',
//            async: false,
//            success: function (data) {
//                jasonData = data;
//            },
//            error: function (d) {
//                console.log(d);                    
//            }
//        });
//        return jasonData;
//    }
    
//    getElementList: function() {
//        var elements = null;
//        $.ajax({
//            url:  'https://localhost/design/HMI_Frontend/config/StatWin/element.json',
//            type: 'get',
//            dataType: 'json',
//            async: false,
//            success: function (data) {
//                elements = data;
//            },
//            error: function (d) {
//                console.log(d);                    
//            }
//        });
//        return elements;
//    }
});


var appObject;
var results = (myArr.app)? $.getValues() : false;
var globals = $.getGlobal();
var languageList = globals.language;
var publicTabs = $.getPublicTabs();
if(!publicTabs){
    publicTabs = {};
}
var measuringList = {0:'metrical', 1: 'imperial', 2:'none'};
var defaultLang = localStorage.emosLanguage = globals.defaultLanguage;
var myLanguage = defaultLang;
var customerLogo = globals.logo;
var chatoption = globals.chatoption;
//var ecodoku = globals.ecodoku;
var defaultMeasuring = globals.defaultMeasuring;
if (defaultMeasuring === 2)
    localStorage.emosUnit = 0;
else 
    localStorage.emosUnit = defaultMeasuring;
var myMeasuring = defaultMeasuring;
var myLocalTime = navigator.language;
var show12hTime = false;
//brauche ich das noch?
//var bg = $('.left .top').css('background-image').trim();
//var res = bg.substring(5, bg.length - 2);
//var logoname = res.substr(res.lastIndexOf("/") + 1);
// bis hier

if(globals.showZoom === "checked" && $(document.documentElement) && $(document.documentElement).hasClass("Chrome")){
    $('#zoom').removeClass('hidden');
}
var configLangList= $("<div/>");
var configLangList2= $("<div/>");
var optionList = $("<ul/>", {'class': 'dropdownlist noicon'});
var langCounter = 1;
getLanguageList();
var privateResults;
var frameworkcenter = $(
    '<div class="Groupbox framework"><span class="pagerHeadLine">Customer logo</span><span class="emosbutton buttonEdit" data-name="cLogo"></span>' +
    '</div>' +
    '<div class="Groupbox framework"><span class="pagerHeadLine">Languages</span><span class="emosbutton buttonEdit" data-name="languages"></span>' +
    '</div>' +
    '<div class="Groupbox framework"><span class="pagerHeadLine">Options</span><span class="emosbutton buttonEdit" data-name="options"></span>'+
    '</div>' +
    '<div class="Groupbox framework"><span class="pagerHeadLine">Default user settings</span><span class="emosbutton buttonEdit" data-name="settings"></span>' +
    '</div>' +
    '<div class="Groupbox framework"><span class="pagerHeadLine">Logout time</span><span class="emosbutton buttonEdit" data-name="logoutSetting"></span>' +
    '</div>'        
);
var frameworkcenterR = $(
    '<div class="Groupbox cLogo">' +
    '<span class="pagerHeadLine">Customer Logo</span><span class="emosbutton cancelbutton" onclick="hideElement(this);"></span><span class="emosbutton savebutton disabled"></span>' +
    '<div class="fileUpload"><label class="smallText">File (96 x 56)</label>' +
    '<span class="text">'+ customerLogo +'</span><span class="emosbutton buttonEdit"></span><input type="file" class="upload">' +
    '</div>' +
    '</div>' +
    '<div class="Groupbox languages">' +
    '<span class="pagerHeadLine">Languages</span><span class="emosbutton cancelbutton" onclick="hideElement(this);"></span><span class="emosbutton savebutton disabled"></span>' +
    '<div class="langHolder">' + configLangList[0].innerHTML + '</div>' +
    '<div class="langHolder"><span style="display:block; margin-left:27px;float:left;">Language</span><span style="display:block; margin-left:140px;">Country Code</span>' + configLangList2[0].innerHTML + '</div>' +
    '</div>' +
    '<div class="Groupbox options">'+
    '<span class="pagerHeadLine">Options</span><span class="emosbutton cancelbutton" onclick="hideElement(this);"></span><span class="emosbutton savebutton disabled"></span>' +
    /*'<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ chatoption +' value="chatoption">Chat</div>' +*/
//    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ ecodoku +' value="ecodoku">EcoDoku</div>' +
    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ globals.maintenance +' value="maintenance">Maintenance</div>' +
    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ globals.securityIcon +' value="securityIcon">Security icon</div>' +
    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ globals.showBadQualities +' value="showBadQualities">Show bad qualities hint in lower right corner</div>' +
    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ globals.resize +' value="resize">Resize automatically</div>' +
    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ globals.hideTrendButton +' value="hideTrendButton">Hide trend button</div>' +
    '<div class="firstList"><input class="plantcheckbox" type="checkbox" name="options" '+ globals.showZoom +' value="showZoom">Show zoom in/out (only in Chrome)</div>' +
    '</div>' +
    '<div class="Groupbox settings">' +
    '<div><span class="pagerHeadLine">Default user settings</span><span class="emosbutton cancelbutton" onclick="hideElement($(this).parent());"></span><span class="emosbutton savebutton disabled"></span></div>' +
    '<span class="box language"><span class="label">Language</span><span class="dropdown emosbutton noicon"><span>'+ languageList[defaultLang].long +'</span></span>' + optionList[0].outerHTML + '</span>' +
    '<span class="box measuring"><span class="label">Measuring</span><span class="dropdown emosbutton noicon"><span>'+ measuringList[defaultMeasuring] +'</span></span><ul class="dropdownlist noicon" data-name="measuring"><li data-value="0">metrical</li><li data-value="1">imperial</li><li data-value="2">none</li></ul></span>' +
    '</div>' +
    '<div class="Groupbox logoutSetting">' +
    '<div><span class="pagerHeadLine">Logout time</span><span class="emosbutton cancelbutton" onclick="hideElement($(this).parent());"></span><span class="emosbutton savebutton disabled"></span></div>' +
    '<span class="box logoutSet"><span class="label">Time</span><span class="dropdown emosbutton noicon"><span>'+ globals.logoutTime +' min</span></span><ul class="dropdownlist noicon" data-name="logoutSetting"><li data-value="5" class="' + (globals.logoutTime === "5" ? "active" : "") + '">5 min</li><li data-value="10" class="' + (globals.logoutTime === "10" ? "active" : "") + '">10 min</li><li data-value="15" class="' + (globals.logoutTime === "15" ? "active" : "") + '">15 min</li></ul></span>' +
    '</div>'       
);

//var servercenter = $('<div id="servercenter"></div>');
var usercenter = $(
    '<div id="noUser"><h1>No user session</h1></div>' +
    '<div id="usercenter">' +
    '<div class="Groupbox user"><span class="pagerHeadLine">Language and measuring sytem</span><span class="emosbutton buttonEdit" data-name="languagemeasuring"></span>' +
    '</div>' +
    '<div class="Groupbox user"><span class="pagerHeadLine">Private tabs</span><span class="emosbutton buttonEdit" data-name="privatetabs"></span>' +
    '</div>' +
    '<div class="Groupbox user"><span class="pagerHeadLine">App - Trending set favorites</span><span class="emosbutton buttonEdit" data-name="trendingfav"></span>'+
    '</div>' +
    '<div class="Groupbox user"><span class="pagerHeadLine">App - Plant favorites</span><span class="emosbutton buttonEdit" data-name="plantfav"></span>' +
    '</div>' +
    '</div>'
);

var usercenterR = $(    
    '<div class="Groupbox languagemeasuring">' +
    '<div><span class="pagerHeadLine">Language and measuring sytem</span><span class="emosbutton cancelbutton" onclick="hideElement($(this).parent());"></span><span class="emosbutton savebutton disabled"></span></div>' +
    '<span class="box language"><span class="label">Language</span><span class="dropdown emosbutton noicon"><span class="languageButton">'+ languageList[myLanguage].long +'</span></span>' + optionList[0].outerHTML + '</span>' +
    '<span class="box measuring"><span class="label">Measuring</span><span class="dropdown emosbutton noicon"><span class="measuringButton">'+ measuringList[myMeasuring] +'</span></span><ul class="dropdownlist noicon" data-name="measuring"><li data-value="0">metrical</li><li data-value="1">imperial</li><li data-value="2">none</li></ul></span>' +
    '<span class="box localtime"><span class="label">local Time</span><span class="dropdown emosbutton noicon"><span class="timeButton"></span></span><ul class="dropdownlist noicon crumbOL " id="languageCodedropdown" data-name="languageCode"></ul><input class="plantcheckbox" type="checkbox" name="options" value="12-h-option">show 12-hour time</span>' +
//    '<label for="measurdropdown">Measuring</label>' + optionList[0].outerHTML + '' +
    '</div>' +
    '<div class="Groupbox privatetabs">' +
    '<span class="pagerHeadLine">Private tabs</span><span class="emosbutton cancelbutton"></span><span class="emosbutton savebutton disabled"></span><span class="emosbutton delete"></span>' +
    
    '</div>' +
    '<div class="Groupbox trendingfav">'+
    '<span class="pagerHeadLine">App - Trending set favorites</span><span class="emosbutton cancelbutton" onclick="hideElement(this);"></span><span class="emosbutton savebutton disabled"></span>' +
   '</div>' +
    '<div class="Groupbox plantfav">' +
    '<span class="pagerHeadLine">App - Plant favorites</span><span class="emosbutton cancelbutton" onclick="hideElement(this);"></span><span class="emosbutton savebutton disabled"></span>' +
    
    '</div>'        
);
function getTimeCodes(parent){
    var languageCodeList = $.getLanguageCodeList();
    $.each(languageCodeList, function (key, val) {  
        var addClass = '';
        if(key === myLocalTime){
            addClass = 'active';
            $('#languageCodedropdown').prev().find('span').addClass(val).text(val);
        } 
        $('#languageCodedropdown').append('<li class="languageCode '+ addClass +'" data-value="'+ key +'">'+ val +'</li>');        
    });
    $('.configcenterRight .languagemeasuring .localtime').find('input').prop('checked', show12hTime);
//    var footer = $('<div class="smallFooter" style="width:292px"><span class="scrollUp"></span><span class="scrollDown active"></span></div>');
//    footer.appendTo($('#languageCodedropdown'));
}
function getServerList() {
    var isAdmin = emosWS.isServerAdmin() ? '' : 'disabled';
    $.each(servers, function (key, val) {
        var tmpTd = getId();
        var filename = val.name;//.substring(val.name.lastIndexOf('/') + 1);
        var enable = servers.length > 1 ? "" : 'disabled';
        $('<div class="Groupbox server"><span id="' + tmpTd + '" class="pagerHeadLine servername warn">'+ filename +'</span><span class="emosbutton admin '+ isAdmin +'" data-name="'+ val.name +'">A</span><span class="emosbutton delete ' + enable + ' ' + isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton buttonEdit '+ isAdmin +'" data-name="'+ val.name +'"></span></div>').appendTo('#servercenter');
        
		if(typeof val.getStatus === "function"){
            val.getStatus(function (status){
                if(status.reachable !== false){
                    $('#' + tmpTd).removeClass('.warn').addClass('fine');
                }
            });
        }
    });
    $('<div class="Groupbox server centralcasserver"><span class="pagerHeadLine">Central CAS Server</span><span class="emosbutton buttonEdit '+ isAdmin +'" data-name="Centralcasserver"></span></div>').appendTo('#servercenter');
    $('<div class="Groupbox server chatserver disabled"><span class="pagerHeadLine">Chat Server</span><span class="emosbutton buttonEdit '+ isAdmin +'" data-name="chatserver"></span></div>').appendTo('#servercenter');
    $(".preferences.full").append('<span class="emosbutton newButton newServer '+ isAdmin +'"></span>');
}
function newServer(){
    var serverBody = $('<div class="Groupbox newapp newserver"><span class="pagerHeadLine">Host name</span><span class="emosbutton cancelbutton" onclick="getCancel(this, true);"></span><span class="emosbutton savebutton disabled"></span>' + 
            '<div class="fileUpload">' +
            buildInputGroup('Host name', 'Host name', 'Host name', '', 'required') +
            '</div>' +            
            '</div>');
    return serverBody;
}
function newServerBody(){
    var serverBody = $('<div class="Groupbox inner webserver">' +
            '<span class="pagerHeadLine block">Uses EMOS.Web Services on</span>' +
            '<div class="setholder"><span class="smallText">IOManager</span><textarea class="serverbox iomanager"></textarea><span class="smallText">AlarmServer</span><textarea class="serverbox alarmserver"></textarea><span class="smallText">TrendServer</span><textarea class="serverbox trendserver"></textarea><span class="smallText">LogServer</span><textarea class="serverbox logserver"></textarea><br class="cl"></div>' +
            '</div>' +
            '<div class="Groupbox inner casserver">' +
            '<span class="pagerHeadLine block">Central CAS Server</span>' +
            buildInputGroup('Service URL', 'Service URL', 'service url', 'full', 'required') +
            '</div>');
    return serverBody;
    
}
function saveServerName(dataFile){
    serverPool.push(dataFile);    
    $.each(serverPool, function(key, val){    
        var textfile = '';  
        var fileURL = 'https://'+ val + '/config/site.configuration.js';
        $.ajax({
            url: fileURL,
            async: false,
            success: function (data){
                var tempData = data;
                var configfile = tempData.split('\n');
                var continueLoop = false
                $.each(configfile, function (key, val1){
                    var pattern = /serverPool/;
                    if(pattern.test(val1)){   
                        if(configfile[key].search(dataFile) === -1){
                            var position = configfile[key].indexOf(']');
                            configfile[key] = configfile[key].substr(0, position) + ',"' + dataFile + '"' + configfile[key].substr(position);                            
                            continueLoop = true;
                        }
                    }
                });
                
                if(continueLoop) {
                	$.each(configfile, function (key, val2){
                    	textfile += val2 + '\n';
                	});
                    var serverNew = dataFile
                	emosWS.writeData('/config/site.configuration.js', textfile, {
                        success: function (){
                            servers.push(new Server(serverNew));
                            console.log("Succesful!");
                            $('#servercenter').find('.savebutton').addClass('disabled');

                        },
                        error: function (msg){
                            console.log("Failed: " + msg);
                        },
                        server: val
                    });
				}
            }
        });            
    });
}

function Server(servername){
    this.name = servername;
    this.reachable = false;
    this.active = false;
}
function saveServer(dataFile, self){
    serverInfo.AlarmServer = self.nextAll('.webserver').find('.serverbox.alarmserver').val().trim().split('\n');    
    serverInfo.TrendServer = self.nextAll('.webserver').find('.serverbox.trendserver').val().trim().split('\n');
    serverInfo.IOManager = self.nextAll('.webserver').find('.serverbox.iomanager').val().trim().split('\n');
    serverInfo.LogServer = self.nextAll('.webserver').find('.serverbox.logserver').val().trim().split('\n');
    serverInfo.centralCAS.Service = self.nextAll('.casserver').find('input').val();
    console.log(serverInfo)
    emosWS.rest.configuration.updateConfiguration({
        configuration: serverInfo,
        success: function(info){
            console.log('success');
            $('#servercenter').find('.savebutton').addClass('disabled');
        }, 
        error: function(){
            console.log("request failed");
        },
        server: dataFile
   });
}
function deleteServerName(dataFile, parent){
    var regDataFile = new RegExp("\\b"+dataFile+"\\b");
    $.each(serverPool, function(key, val){    
        var fileURL = 'https://'+ val + '/config/site.configuration.js';
        var textfile = '';
        $.ajax({
            url: fileURL,
            async: false,
            success: function (data){
                var tempData = data;
                var configfile = tempData.split('\n');
                var continueLoop = false;
                $.each(configfile, function (key1, val1){
                    var pattern = /serverPool/;
                    if(pattern.test(val1)){  
                        if(configfile[key1].search(regDataFile) > -1){
                            var position = configfile[key1].match(regDataFile).index - 1;                            
                            var endPosition = position + dataFile.length + 2;
                            if(configfile[key1].charAt(position - 1) === ','){
                                position = position - 1;
                                continueLoop = true;
                            } else if(configfile[key1].charAt(position - 2) === ',') {
                                position = position - 2;
                                continueLoop = true;
                            } else if(configfile[key1].charAt(position - 1) === '[' && configfile[key1].charAt(endPosition) === ',') {
                                endPosition = endPosition + 1;
                                continueLoop = true;
                            }
                            var tmpString = configfile[key1].slice(position,endPosition);
                            var newLine = configfile[key1].replace(tmpString,''); 
                            configfile[key1] = newLine;
                        }
                    }
                });
                
                if (continueLoop) {
	                $.each(configfile, function (key, val2){
	                    textfile += val2 + '\n';
	                });
	                emosWS.writeData('/config/site.configuration.js', textfile, {
	                    success: function(){
	                        if(parent){
                                var text = parent.find('span.servername').text();
                                parent.remove();
                                $.each(servers, function (key, val) {
                                    if (text === val.name){
                                        servers.splice(key, 1);
                                    }
                                });
                            }
                            if (servers.length === 1)
                                $('#servercenter').find('.delete').addClass('disabled');
                            alert("Delete server successful!");
	                    }, 
	                    error: function(msg){
	                        console.log("Failed: " + msg);
	                    },
	                    server: val
	                });
                }
            }
        });            
    });
}
var serverInfo;
function editServer(dataFile, editserver, parent) {
    if(editserver) {
        var servernameBody = newServer();
        servernameBody.find("input[name='Host name']").val(dataFile);
        servernameBody.insertAfter(parent);
        parent.hide();
    }
    var serverBody = newServerBody();
    serverBody.appendTo($('#servercenter .newserver'));
    emosWS.rest.configuration.getConfiguration({
        success: function(info){
            console.log(info);
            serverInfo = info;
            var parentbox = $('#servercenter .newserver').find('.webserver');
            $.each(info.IOManager, function (key, val) {
                parentbox.find('.iomanager').append(val + '\n');
            });
            $.each(info.AlarmServer, function (key, val) {
                parentbox.find('.alarmserver').append(val + '\n');
            });
            $.each(info.TrendServer, function (key, val) {
                parentbox.find('.trendserver').append(val + '\n');
            });
            $.each(info.LogServer, function (key, val) {
                parentbox.find('.logserver').append(val + '\n');
            });
            parentbox.next('.casserver').find("input[name='service url']").val(info.centralCAS.Service);            
            parentbox.next('.casserver, .webserver').append('<br class="cl">');
            setTimeout(function () {         
                showScroll($('.configcenter.full'));
            }, 600);
        }, 
        error: function(){
            console.log("request failed");
        }, 
        server: dataFile
    });
}
function showAdminpage(dataFile, parent){
    var adminholder = $('<div id="adminholder"></div>');
    parent.prepend(adminholder);
    $('#adminholder').append('<span class="emosbutton cancelbutton" onclick="getCancel(this, true);"></span>');
    var fileURL = "https://" + dataFile + '/ws/administration/';
    $('<iframe>', {
        src: fileURL,
        id:  'adminFrame',
        frameborder: 0,
        scrolling: 'yes'
    }).appendTo('#adminholder');
    
//    $.ajax({
//        url: fileURL,
//        async: false,
//        success: function (data){
//            $( "#adminholder" ).append(data);
//        }
//    });
    //$( "#adminholder" ).load(fileURL);
    //parent.hide();
}
function editCentralCasServer(parent) {
    emosWS.rest.configuration.getConfiguration({
        success: function(info){
            console.log(info);
            var serverBody = $('<div class="Groupbox newapp"><span class="pagerHeadLine">Central CAS Server</span><span class="emosbutton cancelbutton" onclick="getCancel(this, true);"></span><span class="emosbutton savebutton disabled"></span>' + 
                '<div class="fileUpload">' +
                buildInputGroup(info.centralCAS.FrontEnd, 'Frontend URL', 'Frontend URL', 'full', 'required') +
                '</div>' +
                '<div class="fileUpload">' +
                buildInputGroup(info.centralCAS.BackEnd, 'Backend URL', 'Backend URL', 'full', 'required') +
                '</div>' +
                '</div>');
            serverBody.find("input[name='Frontend URL']").val(info.centralCAS.FrontEnd);
            serverBody.find("input[name='Backend URL']").val(info.centralCAS.BackEnd);
            parent.after(serverBody);
            parent.hide();
        }, 
        error: function(){
            console.log("request failed");
        }
    });
    
}
function getLanguageList(){
    $.each(languageList, function (key, val) {
        var tmpClass = 'firstList';
        if(langCounter <= 6){
            configLangList.append('<div class="'+ tmpClass +'"><input data-num="'+ key +'" class="plantcheckbox" type="checkbox" name="language" '+ val.selected +' value="'+ val.long +'">' + val.long + '</div>');
        } else {
            tmpClass = 'secondList';
            configLangList2.append('<div class="'+ tmpClass +'"><input data-num="'+ key +'" class="plantcheckbox" type="checkbox" name="language" '+ val.selected +' value="'+ val.long +'"><input class="normbox" type="text" value="'+ val.long +'"><input class="shortbox" type="text" value="'+ val.short +'"></div>');
        }
        var tmpSel = (key === defaultLang)? ' active' : ' ';
        optionList.append('<li data-value="'+ key +'" class="language'+ tmpSel +'">'+ val.long +'</li>');
        langCounter++;
    });
}
function saveLanguageList() {
    $("input[name='language']").each(function() {
        if($(this).attr('data-num') === '76' || $(this).attr('data-num') === '77'){
            languageList[$(this).attr('data-num')].short = $(this).nextAll('.shortbox').val();
            languageList[$(this).attr('data-num')].long = $(this).next('.normbox').val();
        }
        languageList[$(this).attr('data-num')].selected = ($(this).attr('checked') === 'checked') ? 'checked' : 'unchecked';
    });
    emosWS.writeData(writeConfig + "fw_global.json", JSON.stringify(globals, null, " "));
    buildLanguageDropDown();
    $('.languages .savebutton').addClass('disabled');
}
function saveLogo() {
    var fileToUpload = $('.upload')[0].files[0]; 
    emosWS.rest.framework.uploadFile({
        file: fileToUpload,
        path: uploadImage, 
        success: function(){
            console.log("The file is uploaded!");
            $('.upload').parent().prev('.savebutton').addClass('disabled');
        }, 
        error: function(msg){
            console.log("Upload failed due to: " + msg);
            $("<div/>", {
                "class": 'dialogoverlay',
                "id": 'dialog'
            }).appendTo('#precenter');
            $('#dialog').empty();
            $('#dialog').append("<h4>Image upload</h4>");
            $('#dialog').append("<span class='dialogtext'>Image upload failed due to: " + msg + "</span>");
            $('#dialog').dialog({
                resizable: false,
                dialogClass: "dialogCorpus ",
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "OK": function () {
                        $(this).dialog("destroy");
                        $('#dialog').remove();

                    }
                }
            });
        }
    }); 
}
function saveSettings() {
    globals.defaultLanguage = $('.settings .language li.active:first').attr('data-value');  
    defaultLang = $('.settings .language li.active:first').attr('data-value');
    globals.defaultMeasuring = parseInt($('.settings .measuring li.active:first').attr('data-value'));
    defaultMeasuring = parseInt($('.settings .measuring li.active:first').attr('data-value'));
    emosWS.setLanguage($('.settings li.active:first').attr('data-value'));
    
    if ($('.settings .measuring li.active:first').attr('data-value') === "2")
        emosWS.setUnit(0);
    else
        emosWS.setUnit(parseInt($('.settings .measuring li.active:first').attr('data-value')));
    
    emosWS.writeData(writeConfig + "fw_global.json", JSON.stringify(globals, null, " "));
    $('.settings .savebutton').addClass('disabled');
}

function saveLogoutTime() {
    globals.logoutTime = $('.logoutSetting .logoutSet li.active:first').attr('data-value');  
    emosWS.userIdleActionLogout.setDuration(parseInt(globals.logoutTime));
    emosWS.writeData(writeConfig + "fw_global.json", JSON.stringify(globals, null, " "));
    $('.logoutSetting .savebutton').addClass('disabled');
}

function saveOptions() {
    $("input[name='options']").each(function() {
        globals[$(this)[0].value] = ($(this).attr('checked') === 'checked') ? 'checked' : 'unchecked';
        if (this.value === "showBadQualities")
            emosWS.setDebugSymbolVisibility(this.checked);
    });
    emosWS.writeData(writeConfig + "fw_global.json", JSON.stringify(globals, null, " "));
    $('.options .savebutton').addClass('disabled');
    resize();
}

function saveUserLanguage() {
    privateResults.language = $('.configcenterRight .languagemeasuring .language').find('li.active').attr('data-value');
    privateResults.measuring = $('.configcenterRight .languagemeasuring .measuring').find('li.active').attr('data-value');
    privateResults.languageCode = $('.configcenterRight .languagemeasuring .localtime').find('li.active').attr('data-value');
    privateResults.language12h = $('.configcenterRight .languagemeasuring .localtime').find('input').prop('checked');
    emosWS.setLanguage($('.configcenterRight .languagemeasuring .language').find('li.active').attr('data-value'));
    emosWS.setUnit(parseInt($('.configcenterRight .languagemeasuring .measuring').attr('data-value')));
    emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
    $('.languagemeasuring .savebutton').addClass('disabled');
}
function getprivateTabList(){
    $('.tabholder').remove();
    $("<div/>", {
        "class": 'tabholder'
        }).appendTo('.configcenterRight .privatetabs');
    $.each(privateResults.tabs, function (key, val) {
        $("<span/>", {
            "class": "breadoverlay_li",
            "text": key,
            "click": function () {
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                } else {
                   $(this).addClass('active'); 
                }
                
            }
        }).appendTo('.tabholder');
    });
//    $('.configcenterRight .privatetabs').append('<span class="emosbutton delete"></span>');
}
function getTrendingSetList(){
    var trendingSets;
    emosWS.trendFileREST.getInfo(function(info){
        try {
            $('.setholderparent').remove();            
            var trendingsetBody = $('<div class="setholderparent">' +
                '<div class="Groupbox process"><span class="pagerHeadLine">Process</span><div class="setholder"></div></div>' +
                '<div class="Groupbox conveyor"><span class="pagerHeadLine">Conveyor</span><div class="setholder"></div></div>' +
                '<div class="Groupbox application"><span class="pagerHeadLine">Application</span><div class="setholder"></div></div>' +
                '<div class="Groupbox supervisory"><span class="pagerHeadLine">Supervisory</span><div class="setholder"></div></div>' +
                '</div>');
            
            trendingsetBody.appendTo('.configcenterRight .trendingfav');
            trendingSets = info.sets;
            $.each(trendingSets, function (key, val) {
                if(val.createdPerson === myName && val.isPublic === false || val.isPublic === true){
                    var tmpSpan = $("<span/>", {
                        "class": "breadoverlay_li",
                        "text": val.title,
                        "click": function () {
                            $(this).closest('.trendingfav').find('.savebutton').removeClass('disabled');
                            if($(this).hasClass('active')){
                                $(this).removeClass('active');
                            } else {
                                $(this).parent().find('.breadoverlay_li').removeClass('active');
                                $(this).addClass('active'); 
                            }
                        }
                    });                            
                    tmpSpan[0].myObj = val;
                    var tmpSpan1 = tmpSpan.clone(true, true);
                    tmpSpan1[0].myObj = val;
                    var tmpSpan2 = tmpSpan.clone(true, true);
                    tmpSpan2[0].myObj = val;
                    var tmpSpan3 = tmpSpan.clone(true, true);
                    tmpSpan3[0].myObj = val;
                    tmpSpan.appendTo('.Groupbox .process .setholder');
                    tmpSpan1.appendTo('.Groupbox .conveyor .setholder');
                    tmpSpan2.appendTo('.Groupbox .application .setholder');
                    tmpSpan3.appendTo('.Groupbox .supervisory .setholder');
                } 
            });
            if(privateResults.trendingsets && privateResults.trendingsets.process && privateResults.trendingsets.process.title){
                $('.trendingfav .process .breadoverlay_li:contains(' + privateResults.trendingsets.process.title + ')').addClass('active');
            }
            if(privateResults.trendingsets && privateResults.trendingsets.conveyor && privateResults.trendingsets.conveyor.title){
                $('.trendingfav .conveyor .breadoverlay_li:contains(' + privateResults.trendingsets.conveyor.title + ')').addClass('active');
            }
            if(privateResults.trendingsets && privateResults.trendingsets.application && privateResults.trendingsets.application.title){
                $('.trendingfav .application .breadoverlay_li:contains(' + privateResults.trendingsets.application.title + ')').addClass('active');
            }
            if(privateResults.trendingsets && privateResults.trendingsets.supervisory && privateResults.trendingsets.supervisory.title){
                $('.trendingfav .supervisory .breadoverlay_li:contains(' + privateResults.trendingsets.supervisory.title + ')').addClass('active');
            }
        } catch(e){
            console.log(e);
        }
    });
    scrollUpDownButton('.configcenterRight', '.preferences.full', '.Groupbox', 'scrollUp');
    scrollUpDownButton('.configcenterRight', '.preferences.full', '.Groupbox', 'scrollDown');
    setTimeout(function () {         
        showScroll($('.configcenterRight'));
    }, 600);
    
}
function saveTrendingSetFavorites(){
    var trendingFavs = {};   
    if($('.trendingfav .process').find('.breadoverlay_li.active').length > 0){
        trendingFavs.process = $('.trendingfav .process').find('.breadoverlay_li.active')[0].myObj;
    }
    if($('.trendingfav .conveyor').find('.breadoverlay_li.active').length > 0){
        trendingFavs.conveyor = $('.trendingfav .conveyor').find('.breadoverlay_li.active')[0].myObj;
    }
    if($('.trendingfav .application').find('.breadoverlay_li.active').length > 0){
        trendingFavs.application = $('.trendingfav .application').find('.breadoverlay_li.active')[0].myObj;
    }
    if($('.trendingfav .supervisory').find('.breadoverlay_li.active').length > 0){
        trendingFavs.supervisory = $('.trendingfav .supervisory').find('.breadoverlay_li.active')[0].myObj;
    }
    privateResults.trendingsets = trendingFavs;
    emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
    $('.trendingfav').find('.savebutton').addClass('disabled');
}
function setPlantFavorites(){
    $('.setholderparent').remove();
    var plantlist = $.getPlantList(); 
    var assigned = privateResults.plants;
    var plantfavBody = $('<div class="setholderparent">' +
            '<div class="Groupbox process"><span class="pagerHeadLine">Process</span><div class="setholder"><span class="smallText">Assigned plants</span><div class="assignedBox plantbox"></div><span class="smallText">Unassigned plants</span><div class="unassignedBox plantbox"></div><br class="cl"></div></div>' +
            '<div class="Groupbox conveyor"><span class="pagerHeadLine">Conveyor</span><div class="setholder"></div></div>' +
            '<div class="Groupbox application"><span class="pagerHeadLine">Application</span><div class="setholder"></div></div>' +
            '<div class="Groupbox supervisory"><span class="pagerHeadLine">Supervisory</span><div class="setholder"></div></div>' +
            '</div>');
    plantfavBody.appendTo('.configcenterRight .plantfav');
    var tmpArr = [];
    $.each(plantlist.tiles, function (key, val) {
        var plant = $("<span/>", {
            "class": "breadoverlay_li",
            "data-pos": key,
            "text": val.name,
            "dblclick": function() {
                $(this).closest('.plantfav').find('.savebutton').removeClass('disabled');
                if($(this).parent().hasClass('unassignedBox')){
                    $(this).appendTo($(this).parent().prevAll('.assignedBox'));
                    tmpArr.splice( $.inArray(Number($(this).attr('data-pos')), tmpArr), 1 );
                    showScroll($('.unassignedBox'));
                } else if($(this).parent().hasClass('assignedBox')){
                    if(Number($(this).attr('data-pos')) < Number($('.unassignedBox span:first').attr('data-pos'))) {
                        $(this).insertBefore($('.unassignedBox span:first'));
                    } else {
                        var temp_num = $(this).attr('data-pos') - 1;
                        var closest = tmpArr.push( Number($(this).attr('data-pos')) ) && tmpArr.sort()[ tmpArr.indexOf( Number($(this).attr('data-pos')) ) - 1 ];
                        $(this).insertAfter($('.unassignedBox').find("[data-pos='" + closest + "']"));
                        setTimeout(function () {         
                            showScroll($('.unassignedBox'));
                        }, 400); 
                    }  
                }
            }
        });
        
        if(jQuery.inArray( val.name, assigned ) !== -1){  
            plant.appendTo('.process .setholder .assignedBox');
        } else {
            plant.appendTo('.process .setholder .unassignedBox');
            tmpArr.push(key);
        }
    });
    scrollUpDownButton('.unassignedBox', '.preferences.full', '.Groupbox', 'scrollUp');
    scrollUpDownButton('.unassignedBox', '.preferences.full', '.Groupbox', 'scrollDown');
    setTimeout(function () {         
        showScroll($('.unassignedBox'));
    }, 600);    
}
function savePlantFavorites(){
    var favs = $('.plantfav .assignedBox span');
    var assignedFavs = [];
    $.each(favs, function (key, val) {
        assignedFavs.push(val.textContent);
    });
    privateResults.plants = assignedFavs;
    emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
    $('.plantfav').find('.savebutton').addClass('disabled');
}
function buildLanguageDropDown(){
    var langs = [];
    $('#langdropdown').remove();
    $.each(languageList, function (key, val) {
        if(val.selected === 'checked') {
            langs.push("<li class='languages'><span class='language' id='lang_" + key + "'>" + val.long + "</span></li>");
        }
    });
    
    if (defaultMeasuring !== 2){
        langs.push("<li class='languages'><span class='trenner'></span></li>");
        langs.push("<li class='metrics'><span class='language' id='metrical'>metrical</span></li>");
        langs.push("<li class='imperials'><span class='language' id='imperial'>imperial</span></li>");
    }
    ulMaker('langdropdown', langs, '#language');
}
function getFolder(path){  
    list = [];
    emosWS.rest.framework.getFileInfo({
        path: serverRoot + path,
        success: function(info){
            list = info.children;
        }, 
        error: function(){
            console.log("request failed");
        },
        server: serverPool[0]
   });
}
function buildAppList(parent){    
    list = [];
    var isAdmin = emosWS.isAdmin() ? '' : 'disabled';
    emosWS.rest.framework.getFileInfo({
        path: serverRoot + '/config/app',
        success: function(info){
            list = info.children;
            localStorage.setItem('myAppList', JSON.stringify(list));            
            $.each(list, function (key, val) {
                parent.append('<div class="Groupbox applist"><span class="pagerHeadLine">'+ val.name.slice(0, -5) +'</span><span class="emosbutton delete '+ isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton reload" data-name="'+ val.name.slice(0, -5) +'"></span><span class="emosbutton copyTab  '+ isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton buttonEdit  '+ isAdmin +'" data-name="'+ val.name +'"></span></div>');
            });
            showScroll($('.configcenter.full'));
        }, 
        error: function(){
            list = JSON.parse(localStorage.getItem('myAppList'));
            $.each(list, function (key, val) {
                parent.append('<div class="Groupbox applist"><span class="pagerHeadLine">'+ val.name.slice(0, -5) +'</span><span class="emosbutton delete '+ isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton reload" data-name="'+ val.name.slice(0, -5) +'"></span><span class="emosbutton copyTab  '+ isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton buttonEdit  '+ isAdmin +'" data-name="'+ val.name +'"></span></div>');
            });
            console.log("request failed");
        },
        server: serverPool[0]
   });
//    var isAdmin = emosWS.isAdmin() ? '' : 'disabled';
//    setTimeout(function () { 
//        $.each(list, function (key, val) {
//            parent.append('<div class="Groupbox applist"><span class="pagerHeadLine">'+ val.name.slice(0, -5) +'</span><span class="emosbutton delete '+ isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton reload" data-name="'+ val.name.slice(0, -5) +'"></span><span class="emosbutton copyTab  '+ isAdmin +'" data-name="'+ val.name +'"></span><span class="emosbutton buttonEdit  '+ isAdmin +'" data-name="'+ val.name +'"></span></div>');
//        });
//    }, 800);
//    showScroll($('.configcenter.full'));
}

function buildClassList(path, id, selector, noText) {
//    getFolder(path);
    var svgPath = configURL + '../' + serverRoot + path + '/';
    emosWS.rest.framework.getFileInfo({
        path: serverRoot + path,
        success: function(info){
            list = info.children;
            $.each(list, function (key, val) {  
            var tmp_sel = (val.name.slice(0, -4) === selector) ? 'active' : ''; 
            if(noText){
                $('#'+ id).append('<li class="centerIcon '+ tmp_sel + '" style="background-image:url(' + svgPath + val.name + ');" data-value="'+ val.name.slice(0, -4) +'"></li>');
            } else {
                $('#'+ id).append('<li class="'+ tmp_sel + '" style="background-image:url(' + svgPath + val.name + ');" data-value="'+ val.name.slice(0, -4) +'">'+ val.name.slice(0, -4).replace(/\_/g, " ") +'</li>');
            }
            
        });
        if(selector)
            $('#'+ id).prev().find('span').css('background-image', 'url(' + svgPath + selector + '.svg)').text(selector);
        }, 
        error: function(){
            console.log("request failed");
        },
        server: serverPool[0]
   });
    
    
    
//    setTimeout(function () { 
//        $.each(list, function (key, val) {  
//            var tmp_sel = (val.name.slice(0, -4) === selector) ? 'active' : ''; 
//            $('#'+ id).append('<li class="'+ tmp_sel + '" style="background-image:url(' + svgPath + val.name + ');" data-value="'+ val.name.slice(0, -4) +'">'+ val.name.slice(0, -4).replace(/\_/g, " ") +'</li>');
//        });
//        if(selector)
//            $('#'+ id).prev().find('span').css('background-image', 'url(' + svgPath + selector + '.svg)').text(selector);
//    }, 1800);
}
function buildButtonList(buttonList, parent, addClass, path, sidebuttonNum){
    try {
        var tmp_sidebuttonNum = (sidebuttonNum) ? 'data-sidebuttonnum="'+ sidebuttonNum +'"' : '';
        var svgPath = configURL + '../' + serverRoot + path + '/';
        $.each(buttonList, function (key, val) {
           parent.find('.Groupbox.' + addClass).append('<div class="Groupbox '+ addClass +'list"><span class="pagerHeadLineIcon ' + val.iconclass + '" style="background-image:url('+ svgPath + val.iconclass +'.svg);"></span><span class="pagerHeadLine">'+ val.name +'</span><span class="emosbutton delete" '+ tmp_sidebuttonNum +' data-num="'+ key +'" data-name="'+ val.name +'"></span><span class="emosbutton buttonEdit" '+ tmp_sidebuttonNum +' data-num="'+ key +'" data-name="'+ val.name +'"></span></div>');
        });
        //parent.find('.Groupbox.' + addClass).append('<div class="Groupbox '+ addClass +'list"><span class="pagerHeadLineIcon"></span><span class="pagerHeadLine">New '+ addClass +'</span><span class="emosbutton add'+ addClass.charAt(0).toUpperCase() + addClass.slice(1).toLowerCase() +'"></span></div>');
    } catch (e) {
        console.log(e);
    }
    
}
function newApp(editapp){
    if(editapp){
        appResults = $.getValues();
        if(!appResults.sidebuttons){
            appResults.sidebuttons = [];
        }
        if(!appResults.homestation){
            appResults.homestation = [];
        }
    } else {           
        appResults.sidebuttons = [];
        appResults.homestation = [];
    }
      
    
    var appBody = $('<div class="Groupbox newapp"><span class="pagerHeadLine">New App</span><span class="emosbutton cancelbutton" onclick="getCancel(this);"></span><span class="emosbutton savebutton disabled"></span>' + 
            '<div class="fileUpload">' +
            buildInputGroup('New App', 'App name', 'App name', '', 'required') +
            '</div>' +
            '<span class="pagerHeadLine block">Sidebuttons</span>' +
            '<div class="Groupbox inner sidebutton">' +
            
            '<span class="emosbutton addSidebutton"></span></div>' +
            
            '<span class="pagerHeadLine block">Station homes</span>' +
            '<div class="Groupbox inner homestation">' +
            
            '</div><span class="emosbutton addHome"></span>' +
            
            
            '</div>');
    return appBody;
}

function addSidebutton(addNew, selector, datanum ){
    if(addNew){
        var item = {};
        item.tiles = [];
        item.alarm_buttons = [];
        item.name = '';
        item.textId = '';
        item.iconclass = 'process';
        item.alarm = ''; 
        item.link = '';
        appResults.sidebuttons.push(item);
    }
    if(!datanum){
        datanum = appResults.sidebuttons.length - 1;
    }
    var id = getId();
    var sidebuttonBody = $('<div class="newapp newSidebutton" data-num="'+ datanum +'">' + 
            '<div class="partbox"><span class="pagerHeadLine">New Sidebutton</span>' +
            buildInputGroup('New Sidebutton', 'Sidebutton name', 'name', '', 'required') +
            buildInputGroup('New Text ID', 'Text ID', 'textId', 'fl', 'required') +    
            '<div class="inputGroup fl"><label class="smallText">Icon class</label><span class="dropdown emosbutton"><span class="process">process</span></span><ul class="dropdownlist act" data-name="iconclass" id="'+ id +'"></ul></div>' +
            buildInputGroup('New Alarm group', 'Alarm group', 'alarm', 'fl', 'required') +
            buildInputGroup('New URL', 'URL', 'link', 'cl full', '', '', 'dialog') +
            '<br class="cl"></div>' +
            '<div>' +
            '<span class="pagerHeadLine block">Plants</span>' +
            '<div class="Groupbox inner innerbox plants">' +            
            '<span class="emosbutton addPlant"></div></span>' +
            '<br class="cl"></div>' +
             '<div>' +
            '<span class="pagerHeadLine block">Alarmbuttons</span>' +
            '<div class="Groupbox inner innerbox alarmbuttons">' +            
            '<span class="emosbutton addAlarmbutton"></div></span>' +
            '<br class="cl"></div>' +
            '</div>');
    buildClassList(sidebuttonSVGPath, id, selector);
    sidebuttonBody[0].myObj = appResults.sidebuttons[datanum];
    return sidebuttonBody;
}
function addPlant(addNew, sidebuttonNum, selector, datanum){
    if(addNew){
        var item = {};
        item.name = '';
        item.textId = '';
        item.iconclass = 'dry';
        item.link = '';
        item.alarm = ''; 
        item.alarm_security = '';
        item.plcsoftware = 'DGOS_4.x_Process.';
        item.plc = '';
        item.cabinetname = '';
        appResults.sidebuttons[sidebuttonNum].tiles.push(item);
    }
    if(!datanum){
        datanum = appResults.sidebuttons[sidebuttonNum].tiles.length - 1;
    }
    var id = getId();
    var id2 = getId();
    var className = 'disabled';
    if (globals.securityIcon === "checked")
        className = '';
    
    var display = "";
    if ($('.newapp').find('.newSidebutton').prev().find('.pagerHeadLineIcon').hasClass('conveyor'))
        display = "display";
    
    var svgPath = configURL + '../' + serverRoot + plantSVGPath + '/';
    var plantBody = $('<div class="newapp newPlant">' + 
        '<div class="partbox"><span class="pagerHeadLine block">New Plant</span>' +
         buildInputGroup('New Plant', 'Plant name', 'name', 'fl', 'required') +
         buildInputGroup('New Security Group','Security group', 'alarm_security', '', 'required', className) +
         buildInputGroup('New Text ID', 'Text ID', 'textId', 'fl', 'required') +
          '<div class="inputGroup fl"><label class="smallText">Icon class</label><span class="dropdown emosbutton"><span style="background-image:url(' + svgPath + 'dry.svg);">dry</span></span><ul class="dropdownlist" data-name="iconclass" id="'+ id +'"></ul></div>' +
         buildInputGroup('New Alarm group', 'Alarm group', 'alarm', '', 'required') + 

         buildInputGroup('New Content link', 'Link', 'link', 'cl full', 'required', '', 'dialog') + 
         buildInputGroup('New PLC topic name', 'PLC topic name(CPU)', 'plc', 'fl ' + display, 'required') + 
         buildInputGroup('New Central Cabinet name', 'Central Cabinet name', 'cabinetname', 'fl ' + display, 'required') + 
         '<div class="inputGroup fl ' + display + '"><label class="smallText">PLC Software</label><span class="dropdown emosbutton noicon"><span>DGOS 4.x Process.</span></span><ul class="dropdownlist noicon" data-name="plcsoftware" id="'+ id2 +'"></ul></div>' +//<select class="plcsoftware classes" name="classes" id="'+ id2 +'"></select></div>' + 

        '<br class="cl"></div>' +
        '</div>');
    buildClassList(plantSVGPath, id, selector);
    setTimeout(function () {         
        buildClassList('../config/plcsoftware', id2, appResults.sidebuttons[sidebuttonNum].tiles[datanum].plcsoftware.replace(/\_/g, " "));
    }, 400);
    
    
    plantBody[0].myObj = appResults.sidebuttons[sidebuttonNum].tiles[datanum];
    return plantBody;
}
function addAlarmbutton(addNew, sidebuttonNum, selector, datanum) {
    
    var classNew = "";
    if(addNew){
        var item = {};
        item.name = '';
        item.buttontype = 'blockbutton';
        item.alarm_id = 'Auto_IsOn';
        item.iconclass = 'automatic';
        item.link = '';
        item.alarm_type = 'none';
        item.alarm = ''; 
        item.plc = '';
        item.alarm_id_rpc = '';
        item.rpc = '';
        item.alarm_rpc = '';
        
        if(!appResults.sidebuttons[sidebuttonNum].alarm_buttons){
            appResults.sidebuttons[sidebuttonNum].alarm_buttons = [];
        }
        appResults.sidebuttons[sidebuttonNum].alarm_buttons.push(item);
        classNew = 'automatic';
    }
    
    if(!datanum){
        datanum = appResults.sidebuttons[sidebuttonNum].alarm_buttons.length - 1;
    }
    var id = getId();
    var id2 = getId();
    var id3 = getId();
    var id4 = getId();
    
    var classNamePLC = "small disabled";
    if (appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_type === "aptanimation"){
        classNamePLC = "small";
    }
    
    var alarmbuttonBody = $('<div class="newapp newAlarmbutton"><span class="pagerHeadLine">New Alarmbutton</span>' + 
        '<div class="partbox">' +
        buildInputGroup('New Alarmbutton', 'Alarmbutton comment', 'name', 'fl', 'required') +
        '<div class="radiobox"><label><input type="radio" name="buttontype" value="blockbutton" checked="checked">BlockButton</label><label><input type="radio" name="buttontype" value="singlebutton">SingleButton</label></div>' +
        '<br class="cl">' +
        '<div class="inputGroup fl"><label class="smallText">Alarm animation</label><span class="dropdown emosbutton"><span>none</span></span><ul class="dropdownlist" data-name="alarm_type" id="'+ id3 +'">' + 
        '<li class=animation data-value="animation">animation</li><li class=APTanimation data-value="aptanimation">animation</li><li data-value="none">none</li></ul></div>' +
        '<div class="inputGroup fl"><label class="smallText">Icon class</label><span class="dropdown emosbutton"><span class="' + classNew + '">automatic</span></span><ul class="dropdownlist" data-name="iconclass" id="'+ id +'"></ul></div>' +
        '<div class="inputGroup fl"><label class="smallText">Alarm id</label><span class="dropdown emosbutton noicon"><span>Auto IsOn</span></span><ul class="dropdownlist noicon" data-name="alarm_id" id="'+ id2 +'"></ul></div>' +
        buildInputGroup('New PLC', 'PLC', 'plc', 'fl', 'required', classNamePLC) +
        '<div class="inputGroup fl" style="margin-left:340px;"><label class="smallText">Alarm id</label><span class="dropdown emosbutton noicon ' + classNamePLC + '"><span>Auto IsOn</span></span><ul class="dropdownlist noicon" data-name="alarm_id_rpc" id="'+ id4 +'"></ul></div>' +
        buildInputGroup('New RPC/PLC', 'RPC/PLC', 'rpc', 'fl', 'required', classNamePLC) +
        buildInputGroup('New URL', 'URL', 'link', 'cl full') +
        '<br class="cl"></div>' +
        '</div>');
        setTimeout(function () {   
            var plcList;
            if (appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_type === "aptanimation"){
                plcList = $.getPLCdataAPT();
            } else {
                plcurl = 'DGOS_4.x_Process.';
                plcList = $.getPLCdata();
            }
                
            $.each(plcList, function (key, val) { 
                var tmp_sel = (key === appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id) ? 'active' : '';
                var tmp_sel_rpc = (key === appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id_rpc) ? 'active' : '';
                $('#'+ id2).append('<li class="'+ tmp_sel +'" data-value="'+ key +'">'+ key.replace(/\_/g, " ") +'</li>');
                $('#'+ id4).append('<li class="'+ tmp_sel_rpc +'" data-value="'+ key +'">'+ key.replace(/\_/g, " ") +'</li>');
            });
            var tmp_sel1;
            var tmp_sel2;
            if(appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id === 'alarmsecurity'){
                tmp_sel1 = 'active';
            } else if(appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id === 'alarmgroup') {
                tmp_sel2 = 'active';
            }
            
            $('#' + id2).prev().find('span').text(appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id.replace(/\_/g, " "));
            $('#' + id3).find("[data-value='" + appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_type + "']").addClass('active');
            
            if (appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id_rpc)
                $('#' + id4).prev().find('span').text(appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_id_rpc.replace(/\_/g, " "));
            
            if (appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_type === "aptanimation"){
                $('#'+ id3).prev().find('span').text('animation');
                $('#'+ id3).prev().find('span').addClass('APTanimation');
            } else {
                $('#'+ id2).append('<li class="'+ tmp_sel1 +'" data-value="alarmsecurity">alarmsecurity</li>');
                $('#'+ id2).append('<li class="'+ tmp_sel2 +'" data-value="alarmgroup">alarmgroup</li>');
                $('#'+ id3).prev().find('span').text(appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_type);
                $('#'+ id3).prev().find('span').addClass(appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum].alarm_type);
            }
        
        }, 400);
    
    buildClassList(alarmbuttonSVGPath, id, selector);
    $('#'+ id).prev().text(selector);
    
    alarmbuttonBody[0].myObj = appResults.sidebuttons[sidebuttonNum].alarm_buttons[datanum];
    return alarmbuttonBody;
}
function addHome(addNew, datanum) {
    if(addNew){
        var item = {};
        item.sidebutton = '';
        item.iconclass = '';
        item.plant = '';
        item.link = '';    
        item.name = '';
        appResults.homestation.push(item);
    }
    
    if(!datanum){
        datanum = appResults.homestation.length - 1;
    }
    var homeBody = $('<div class="newapp newHome" data-num="'+ datanum +'">' + 
            '<div class="partbox"><span class="pagerHeadLine">Homestation</span>' +
            buildInputGroup('Stationname', 'Station name', 'name', '', 'required') +
            buildInputGroup('Sidebutton', 'Sidebutton name', 'sidebutton', '', 'required') +
            buildInputGroup('Plant', 'Plant name', 'plant', '', 'required') + 
            buildInputGroup('Contentlink',  'Content link', 'link', '', 'required') +
            '<br class="cl"></div>' +
            '</div>');
    homeBody[0].myObj = appResults.homestation[datanum];
    return homeBody;
}
function getCancel(e, server) {
    if(server){
        if($(e).parent().prev().length === 0){
            $(".configcenter").empty().removeClass('full').removeClass('editor');
            $('.newButton').remove();
            $(".configcenterRight").empty().hide();
            $(".configcenter").addClass('full');
            $(".configcenter").append('<div id="servercenter"></div>');
            getServerList();
        } else {
            $(e).parent().prev().show();
        }
        $(e).parent().remove();
    } else if($(e).parent().parent().hasClass('newjson')){
        var val = $(e).closest('.jsonlist').find('.pagerHeadLine:first').text();
        $(e).closest('.jsonlist').removeClass('active');
        $(".configcenter").empty();
        $('.filterbuttonholder').show();
        buildJsonList($(".configcenter"), val);
        
    } else {
        $(".configcenter").empty();
        buildAppList($(".configcenter"));
    }
    showScroll($('.configcenter.full'));
   
} 
function hideElement(e){
    $(e).parent().hide();
    $(e).closest('.configcenterRight').prev().find('.buttonEdit.active').removeClass('active');
}
function buildInputGroup(valueText, textLabel, textName, setFloat, isRequired, smallInput, dialog) {
    dialog = (dialog) ? dialog : "";
    smallInput = (smallInput) ? smallInput : "";
    var myButton = '<div class="inputGroup '+ setFloat +'"><label class="smallText">'+ textLabel +'</label><input name="'+ textName +'" class="text '+ smallInput + dialog + '" placeholder="'+ valueText +'" '+ isRequired +'  pattern=".{3,}"><span class="emosbutton buttonEdit getKeypad keyboardInputInitiator '+ smallInput +'"></span>';
    if(dialog){
        myButton += '<span class="emosbutton loadDialog">...</span>';
    }
    myButton += '</div>';
    return myButton;
}

var oldAppName;
function editApp(parent, dataFile, duplicateFile) {
    appToEdit = dataFile.slice(0, -5);
    var appBody = newApp(true);       
//    appResults = $.getValues();
    if(duplicateFile){
        appBody.find('.pagerHeadLine').first().text('Duplicate of ' + dataFile.slice(0, -5));
        appBody.find("input[name='App name']").val('');
    } else {
        appBody.find('.pagerHeadLine').first().text('Edit ' + dataFile.slice(0, -5));
        appBody.find("input[name='App name']").val(dataFile.slice(0, -5));
        oldAppName = dataFile;
    }
    
    buildButtonList(appResults.sidebuttons, appBody, 'sidebutton', sidebuttonSVGPath);
    buildButtonList(appResults.homestation, appBody, 'homestation', sidebuttonSVGPath);
    parent.after(appBody);
    parent.hide();
    showScroll($('.configcenter.full'));
    
}
function editSidebutton(parent, dataFile, dataNum) {
    var siedeButtonBody = addSidebutton(false, appResults.sidebuttons[dataNum].iconclass, dataNum);      
    siedeButtonBody.find('.pagerHeadLine').first().text('Edit ' + dataFile);
    siedeButtonBody.find("input[name='name']").val(appResults.sidebuttons[dataNum].name);
    siedeButtonBody.find("input[name='textId']").val(appResults.sidebuttons[dataNum].textId);
    siedeButtonBody.find("input[name='alarm']").val(appResults.sidebuttons[dataNum].alarm);
    siedeButtonBody.find("input[name='link']").val(appResults.sidebuttons[dataNum].link);
    buildButtonList(appResults.sidebuttons[dataNum].tiles, siedeButtonBody, 'plants', plantSVGPath, dataNum);
    buildButtonList(appResults.sidebuttons[dataNum].alarm_buttons, siedeButtonBody, 'alarmbuttons', alarmbuttonSVGPath, dataNum);
    parent.after(siedeButtonBody);
    showScroll($('.configcenter.full'));
}
function editPlant(parent, dataSidebuttonNum, dataFile, dataNum) {
    var plantBody = addPlant(false, dataSidebuttonNum, appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].iconclass, dataNum);   
    plantBody.find('.pagerHeadLine').first().text('Edit ' + dataFile);
    plantBody.find("input[name='name']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].name);
    plantBody.find("input[name='alarm_security']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].alarm_security);
    plantBody.find("input[name='textId']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].textId);
    plantBody.find("input[name='alarm']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].alarm);
    plantBody.find("input[name='link']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].link);
    plantBody.find("input[name='plc']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].plc);
    plantBody.find("input[name='cabinetname']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].cabinetname);
//    plantBody.find("input[name='cabinetname']").val(appResults.sidebuttons[dataSidebuttonNum].tiles[dataNum].cabinetname);
    parent.after(plantBody);
    showScroll($('.configcenter.full'));
}
function editAlarmbutton(parent, dataFile, dataNum, dataSidebuttonNum) {
    var alarmbuttonBody = addAlarmbutton(false, dataSidebuttonNum, appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].iconclass, dataNum);      
    alarmbuttonBody.find('.pagerHeadLine').first().text('Edit ' + dataFile);
    alarmbuttonBody.find("input[name='name']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].name);
    alarmbuttonBody.find("input[name='alarm_id']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].alarm_id);
    alarmbuttonBody.find("input[name='alarm']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].alarm);
    alarmbuttonBody.find("input[name='link']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].link);
    alarmbuttonBody.find("input[name='plc']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].plc);
    alarmbuttonBody.find("input[name='rpc']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].rpc);
    alarmbuttonBody.find("input[name='buttontype'][value="+ appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].buttontype +"]").prop( "checked", true );
//    alarmbuttonBody.find("[name='types']").val(appResults.sidebuttons[dataSidebuttonNum].alarm_buttons[dataNum].alarm_type).attr('selected', true);
    parent.after(alarmbuttonBody);
    showScroll($('.configcenter.full'));
} 
function editHome(parent, dataFile, dataNum) {
    var homeButtonBody = addHome(false, dataNum);      
    homeButtonBody.find('.pagerHeadLine').first().text('Edit ' + dataFile);
    homeButtonBody.find("input[name='name']").val(appResults.homestation[dataNum].name);
    homeButtonBody.find("input[name='sidebutton']").val(appResults.homestation[dataNum].sidebutton);
    homeButtonBody.find("input[name='plant']").val(appResults.homestation[dataNum].plant);
    homeButtonBody.find("input[name='link']").val(appResults.homestation[dataNum].link);
    parent.after(homeButtonBody);
    showScroll($('.configcenter.full'));
}
function saveApp(parent){
    var appName;
    $('.preferences.full .Groupbox .text').blur();
    if(parent.find('input:required:invalid').length > 0 && !parent.find('input:required:invalid').hasClass('disabled') && parent.find('input:required:invalid').attr('name') !== "rpc"){
        parent.find('input:required:invalid').addClass('error');
        var scrollTo = parent.find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        return;
    } else {
        parent.find('.savebutton').addClass('disabled');
        appName = $("[name='App name']")[0].value;
        
//        emosWS.writeData(writeJSONAPP + appName + ".json", JSON.stringify(appResults, null, " "));
        var oldname = (oldAppName) ? oldAppName.slice(0, -5) : ''; 
        if(oldname !== '' && appName !== oldname){
            emosWS.rest.framework.deleteFile({
                path: writeConfig + 'app/' + oldAppName, 
                success: function(){
                    console.log("The file is deleted!");
                    emosWS.writeData(writeConfig + 'app/'  +  appName + ".json", JSON.stringify(appResults, null, " "));
                    setTimeout(function () {
                        editApp(parent, appName + '.json');
                        parent.remove();
                        $('#servercenter').find('.savebutton').addClass('disabled');
                    }, 400);

                }, 
                error: function(msg){
                    console.log("Deleted failed due to: " + msg);
                    $("<div/>", {
                        "class": 'dialogoverlay',
                        "id": 'dialog'
                    }).appendTo('#precenter');
                    $('#dialog').empty();

                    $('#dialog').empty();
                    $('#dialog').append("<h4>Renaming File</h4>");
                    $('#dialog').append("<span class='dialogtext'>Renaming failed due to: " + msg + "</span>");
                    $('#dialog').dialog({
                        resizable: false,
                        dialogClass: "dialogCorpus ",
                        height: "auto",
                        width: 400,
                        modal: true,
                        buttons: {
                            "OK": function () {
                                $(this).dialog("destroy");
                                $('#dialog').remove();

                            }
                        }
                    });
                }
           });
        } else {
            console.log(appResults);
            $.each(appResults.homestation, function (key, val) {
                var buttonname = appResults.homestation[key].sidebutton;
                appResults.homestation[key].iconclass = buttonname.toLowerCase();
            });
            emosWS.writeData(writeConfig + 'app/' +  appName + ".json", JSON.stringify(appResults, null, " "));
            $(parent).find('.savebutton').addClass('disabled');
        }
        
    }
}
function activateConfig(){
    closeOther('#config');
    $('#config').addClass('active');
    $('body').css('overflow', 'hidden');
    $('#center').css('overflow', 'visible');
    $('#center .preferences.full .configcenterRight').find('.Groupbox').css('display', 'none');
    var display = emosWS.isAdmin() ? 'block' : 'none';
    if (!$('#center').has('.preferences').length > 0) {
        var cItems = [];
        $('<div class="preferences"><div id="configleft" class="left"></div></div>').appendTo('#center');
        cItems.push("<li class='cats servercenter'><span class='emosbutton server'><p class='buttontext'>Server</p></span></li><span class='trenner'></span>");
        cItems.push("<li class='cats frameworkcenter'><span class='emosbutton framework'><p class='buttontext'>Framework</p></span></li><span class='trenner'></span>");
        cItems.push("<li class='cats appcenter'><span class='emosbutton app'><p class='buttontext'>App</p></span></li><span class='trenner'></span>");
        cItems.push("<li class='cats usercenter'><span class='emosbutton user'><p class='buttontext'>User</p></span></li><span class='trenner'></span>");
        cItems.push("<li class='cats editorcenter'><span class='emosbutton editor'><p class='buttontext'>Editor</p></span></li><span class='trenner'></span>");
        ulMaker('configcats', cItems, '#configleft');
        $('.preferences').append('<div class="configcenter"></div>');
        $('.preferences').append('<div class="configcenterRight"></div>');
//        $(".configcenter").append(frameworkcenter);
        $(".configcenterRight").append(frameworkcenterR);
    }
    if(emosWS.isAdmin()) {
        $('#configcats .editorcenter').show();
    } else {
        $('#configcats .editorcenter').hide();
    }
    $(".preferences").addClass('full').show().animate({
        height: "100%"
    }, 400, function(){
        $(".preferences").css('height', 'calc(100% + 64px)');
        $('#configcats li').removeClass('active');
        if(emosWS.isAdmin()) {
            $(".configcenter").addClass('full');
            $('#configcats .servercenter').addClass('active');
            $('#configcats .editorcenter').show();
            $(".configcenter").append('<div id="servercenter"></div>');
            getServerList();
        } else {
            $(".configcenter").addClass('full');
            buildAppList($(".configcenter"));            
            $(".preferences.full").append('<span class="emosbutton newButton newApp disabled"></span>');
            $('#configcats .appcenter').addClass('active');
            $('#configcats .editorcenter').hide();
            $(".configcenterRight").empty().hide();
            showScroll($('.configcenter.full')); 
        }
         
    });
}

function onOpenDiagnosisWindow(msg) {
    onMessage(msg, false);
    
    
    setTimeout(function () {
        if (bShowSummary){
            var counter = $('.diagnose:not(.statusWelcome)').get().length;
            var actPos = $('.diagnose').css('right');
            var actWidth = $('.diagnose').width();
            $('.diagnose.' + myCounter + ':not(.statusWelcome)').css('right', actPos);
            $('.diagnose.' + myCounter + ':not(.statusWelcome)').animate({
                'right': (actWidth * counter)
            });
        }
        $('.diagnose:not(.statusWelcome)').find('.diahead_left').removeClass('emosbutton pushbarOpen pushbarClose');
    
        if ($('.diagnose:visible').get().length > 1)
            $('.diagnose:not(.statusWelcome)').last().find('.diahead_left').addClass('emosbutton pushbarClose');
    }, 200);    
}

function getDialog(mode, element, num) {
    var classLeft;
    var classRight;
    var textPrefix;
    var headlineText;
    if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Process'){
        textPrefix = 'T01_';
    } else if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Conveyor'){
        textPrefix = 'T03_';
    }    
    if(mode === 'LOCAL'){
        classLeft = 'off';
        classRight = 'localRemote';
        headlineText = 'Remote';
    } else {
        classLeft = 'handMode';
        classRight = 'automatic';
        headlineText = 'Automatic';
    }
    
    var button = $("<div class='DiagnosisTextLed'></div>");
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4 id='dialogHeadline'>"+ headlineText +"</h4>");
    $('#dialog').append(button);
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        buttons: [{
            "class": "emosbutton links " + classLeft,
            "id": "buttonlinks",
            "click": function () {
                emosWS.poke(element[1], '-1');
                $(this).dialog("destroy");
                $('#dialog').remove();

            }
        },{
            "class": "emosbutton rechts " + classRight,
            "id": "buttonrechts",
            "click": function () {
                emosWS.poke(element[3], '-1');
                $(this).dialog("destroy");
                $('#dialog').remove();

            }
            },{
            "click": function () {
                $('.emosbutton').removeClass('wantSwitch');
                $(this).dialog("destroy");
                $('#dialog').remove();
                
            }
        }],
        create: function () {
            $('.ui-dialog-buttonset').children('button').
                removeClass("ui-button ui-widget ui-state-default ui-state-active ui-state-focus ui-corner-all").
                mouseover(function() { $(this).removeClass('ui-state-hover'); }).
                mousedown(function() { $(this).removeClass('ui-state-active'); }).
                focus(function() { $(this).removeClass('ui-state-focus'); });
        }
    }).siblings('div.ui-dialog-titlebar').remove();
    $($('.dialogCorpus button')[0]).appendTo(button);
    $($('.dialogCorpus button')[1]).appendTo(button);
    $($('.dialogCorpus button')[2]).attr('class', "emosbutton cancelbutton").parent().css('top', '10px');
    
    emosWS.sendAdviseText(textPrefix + headlineText, "name", function (msg) {
        $('#dialogHeadline').text(msg.value);
    });
    
    emosWS.advise(element[0], function (msg) {
        try {
            var fillClass = (GetAsBoolean(msg.value)) ? 'onMode' : 'offMode';
            var removeclass = (GetAsBoolean(msg.value)) ? 'offMode' : 'onMode';
            $('#buttonlinks').addClass(fillClass).removeClass(removeclass);
            $('#buttonrechts').addClass(removeclass).removeClass(fillClass);
        } catch (e){
            console.log(e);
        };
    }, "", emosWS.tagType.IO);
    emosWS.advise(element[2], function (msg) {
        try {
            var fillClass = (GetAsBoolean(msg.value)) ? 'onMode' : 'offMode';
            var removeclass = (GetAsBoolean(msg.value)) ? 'offMode' : 'onMode';
            $('#buttonrechts').addClass(fillClass).removeClass(removeclass);
            $('#buttonlinks').addClass(removeclass).removeClass(fillClass);
        } catch (e){
            console.log(e);
        };
    }, "", emosWS.tagType.IO);           
}
function getCentralStartDialog(mode, element, num) {
    var textPrefix;
    var headlineText;
    if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Process'){
        textPrefix = 'T01_';
    } else if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Conveyor'){
        textPrefix = 'T03_';
    }
    headlineText = 'CentralStart';
    var button = $("<div class='DiagnosisTextLed'></div>");
    var LEDValue;
    var LEDValue1;
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4 id='dialogHeadline'>"+ headlineText +"</h4>");
    $('#dialog').append(button);
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus " + mode,
        height: "auto",
        width: 400,
        modal: true,
        buttons: [{
            "class": "emosbutton off halblinks",
            "id": "buttonlinks",
            "click": function () {
                emosWS.poke(element[4], '-1');
                $(this).dialog("destroy");
                $('#dialog').remove();

            }
        },{
            "class": "emosbutton mitte off_time",
            "id": "buttonmitte",
            "click": function () {
                emosWS.poke(element[3], '-1');
                $(this).dialog("destroy");
                $('#dialog').remove();

            }
            },{
            "class": "emosbutton halbrechts plantStartStop",
            "id": "buttonrechts",
            "click": function () {
                emosWS.poke(element[1], '-1');
                $(this).dialog("destroy");
                $('#dialog').remove();

            }
            },{
            "click": function () {
                $('.emosbutton').removeClass('wantSwitch');
                $(this).dialog("destroy");
                $('#dialog').remove();
                
            }
        }],
        create: function () {
            $('.ui-dialog-buttonset').children('button').
                removeClass("ui-button ui-widget ui-state-default ui-state-active ui-state-focus ui-corner-all").
                mouseover(function() { $(this).removeClass('ui-state-hover'); }).
                mousedown(function() { $(this).removeClass('ui-state-active'); }).
                focus(function() { $(this).removeClass('ui-state-focus'); });
        }
    }).siblings('div.ui-dialog-titlebar').remove();
    $($('.dialogCorpus button')[0]).appendTo(button);
    $($('.dialogCorpus button')[1]).appendTo(button);
    $($('.dialogCorpus button')[2]).appendTo(button);
    $($('.dialogCorpus button')[3]).attr('class', "emosbutton cancelbutton").parent().css('top', '10px');
    emosWS.sendAdviseText(textPrefix + headlineText, "name", function (msg) {
        $('#dialogHeadline').text(msg.value);
    });
    emosWS.advise(element[0], function (msg) {
        try {
            LEDValue = GetAsBoolean(msg.value);
            if(LEDValue){
                $('#buttonrechts').addClass('onMode').removeClass('offMode').removeClass('switchmode');
                $('#buttonmitte').removeClass('onMode').addClass('offMode');
                $('#buttonlinks').removeClass('onMode').addClass('offMode');
            } else if(LEDValue === false && LEDValue1 === false) {
                $('#buttonlinks').addClass('onMode').removeClass('offMode').removeClass('switchmode');
                $('#buttonmitte').removeClass('onMode').addClass('offMode');
                $('#buttonrechts').removeClass('onMode').addClass('offMode');
            }
        } catch (e){
            console.log(e);
        };
    }, "", emosWS.tagType.IO);
    emosWS.advise(element[2], function (msg) {
        try {
            LEDValue1 = GetAsBoolean(msg.value);
            if(LEDValue1){
                $('#buttonmitte').addClass('onMode').removeClass('offMode').removeClass('switchmode');
                $('#buttonlinks').removeClass('onMode').addClass('offMode');
                $('#buttonrechts').removeClass('onMode').addClass('offMode');
            } else if(LEDValue === false && LEDValue1 === false) {
                $('#buttonlinks').addClass('onMode').removeClass('offMode').removeClass('switchmode');
                $('#buttonmitte').removeClass('onMode').addClass('offMode');
                $('#buttonrechts').removeClass('onMode').addClass('offMode');
            }
        } catch (e){
            console.log(e);
        };
    }, "", emosWS.tagType.IO);
           
}
function getDeleteDialog(filename, path) {
    var toDelete;
    if(path){
        toDelete = writeConfig + 'StatWin/'  + department + '/' + filename;
    } else {
        toDelete = writeConfig + 'app/'  + filename;
    }
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Delete</h4>");
    $('#dialog').append("<span class='dialogtext'>Do you want to delete " + filename + "? </span>");
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Delete1",
        buttons: {
            "": function () {
                emosWS.rest.framework.deleteFile({
                    path: toDelete, //writeJSONAPP + filename, 
                    success: function(){
                        console.log("The file is deleted!");
                        $(".configcenter").empty();
                        if(path){
                            buildJsonList($(".configcenter"));
                        } else {
                            buildAppList($(".configcenter"));
                        }
                           
                        $('#dialog').dialog("destroy");
                        $('#dialog').remove();
                    }, 
                    error: function(msg){
                        console.log("Deleted failed due to: " + msg);
                        $('#dialog h4').text("Error");
                        $('#dialog .dialogtext').text("Deleted failed due to: " + msg);
                        $( "#dialog" ).dialog({
                            buttons: [
                              {
                                text: "OK",
                                click: function() {
                                  $(this).dialog("destroy");
                                  $('#dialog').remove();
                                }
                              }
                            ]
                        });
                    }
               });
               
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
                
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); //
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton savebutton");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
}
function scrollfunc(e){
    if(scrollButtonClicked === 1){
        return;
    }
    var contentElement = $(e.target);
    setScrollbar(contentElement);
    showScroll($(contentElement));
    getTransparenz($(contentElement));
}
function scrollUpDown(updown, myMainPage, myTarget) {
    scrollButtonClicked = 1;
    var contentElement = '';
    if (myMainPage.hasClass('diagnose') && myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
        contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
    } else if(myMainPage.hasClass('diagnose') &&  myMainPage.find('.DiagnosisSubPageBlank:visible').length === 0 && myMainPage.find('.DiagnosisPageBlank:visible').length > 0){
        contentElement = myMainPage.find('.DiagnosisPageBlank:visible');
    } else if(myMainPage.hasClass('alarmpage')) {
        contentElement = myMainPage.find('#alarmpage_content');
    } else if(myMainPage.hasClass('detailTable') || myMainPage.hasClass('crumbOL')) {
        contentElement = myMainPage;
    } else if(myMainPage.hasClass('preferences full')) {
        contentElement = myMainPage.find('.configcenter.full');
        if(contentElement.length === 0){
            if(myTarget && myTarget.hasClass('unassignedBox')){
                contentElement = myTarget;
            } else if(myTarget && myTarget.parent().hasClass('unassignedBox')){
                contentElement = myTarget.parent();
            } else {
                contentElement = myMainPage.find('.configcenterRight');
            }            
        }
    } else if(myMainPage.hasClass('unassignedBox')) {
        contentElement = myMainPage;
    } else if(myMainPage.hasClass('overlayContent')){
        contentElement = myMainPage.find('.overlayContentElements').first();
    } else if (myMainPage.hasClass('plantTableOverflow') || myMainPage.hasClass('plcTableOverflow')){
        contentElement = myMainPage;
    } else {
        contentElement = myMainPage.find('#cars');
    }
    if (!contentElement.is(':animated')){
        var scrollheight = contentElement.prop("scrollHeight");
        var scrollRest = scrollheight - contentElement.height();
        var teiler = scrollRest / contentElement.height();
        var tmpScroll = scrollRest / Math.ceil(teiler * 4); // je größer der teiler desto kleinerer scroll
        var toScroll = (updown === 'up') ? -tmpScroll : tmpScroll;
        
        contentElement.stop().animate({
            scrollTop: contentElement.scrollTop() + toScroll
        }, {            
            step: function(){                
                setScrollbar(contentElement);
                if($('.newjson .buttonholder').length > 0 && $('.newjson').offset().top <= 114) {
                    $('.newjson .buttonholder').addClass('fixed');
                } else if($('.newjson .buttonholder').length > 0 && $('.newjson').offset().top >= 114) {
                    $('.newjson .buttonholder').removeClass('fixed');
                } else if($('.filterbuttonholder').length > 0 && $('.configcenter.full.editor').scrollTop() > 20) {
                    $('.filterbuttonholder').addClass('fixed');
                } else if($('.filterbuttonholder').length > 0 && $('.configcenter.full.editor').scrollTop() <= 100) {
                    $('.filterbuttonholder').removeClass('fixed');
                }
            }, 
            complete: function () {
                showScroll($(contentElement));
                getTransparenz(contentElement);
            }
        });   
    } 
}
function getTransparenz(contentElement){
    if(contentElement.attr('id') === 'cars' || contentElement.attr('id') === 'alarmpage_content') {
        var specHight = (contentElement.attr('id') === 'cars') ? 150 : 10;   //war : 85
        var specTop = (contentElement.attr('id') === 'cars') ? 0 : 16; 
        var elements = (contentElement.attr('id') === 'cars') ? $('#cars .tile') : $('#alarmpage_content .alarm_solo');
        $.each(elements, function () {
            if ($(this).position().top + specTop < contentElement.position().top || $(this).position().top >= contentElement.position().top + contentElement.height() - specHight ) {
                $(this).css('opacity', 0.5);
            } else {
                $(this).css('opacity', 1);
            }
        });
    }
}
function setScrollbar(contentElement){
    var H   = contentElement.outerHeight(true),
    sH  = contentElement.prop("scrollHeight"),
    sbH = H*H/sH;

    contentElement.find('.scrollbar:first').css({top: contentElement.scrollTop() + (contentElement.scrollTop() / H * sbH) });  
    
}
function scrollLeftRight(direction, nonDirection, nextVisibleElement, nextElement, newPosition, self) {
    $(self).closest('.DiagnosisFooter').find('.circle').removeClass('big');
    $(self).closest('.DiagnosisFooter').find('.subTabMenu').children('li').removeClass('active');
    nextElement.show();
    nextElement.animate({
        'right': -15
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
    var io_handmode = [];
    var io_ssen = [];
    var io_local = [];
    var io_cson = [];
    var io_turnoffpe = [];
    var alarmgroup = [];

    $.each(tile, function (key, val) {
        try {
            plcurl = val.plcsoftware;
            var plcList = $.getPLCdata();
            io_auto.push(val.plc + val.cabinetname + plcList.Auto_IsOn);
            io_handmode.push(val.plc + val.cabinetname + plcList.Manual_IsOn);
            alarmsecurity.push(val.alarm_security);
            io_ssen.push(val.plc + val.cabinetname + plcList.Remote_IsOn);
            io_local.push(val.plc + val.cabinetname + plcList.Local_IsOn);
            io_cson.push(val.plc + val.cabinetname + plcList.CentralStart_IsOn);
            io_turnoffpe.push(val.plc + val.cabinetname + plcList.CentralStart_TurnOffPE);
            alarmgroup.push(val.alarm);
        } catch (e) {
            console.log(e);
        }        
    });
    
    aniData[name] = {
        'alarmsecurity': alarmsecurity,
        'io_auto': io_auto,
        'io_handmode': io_handmode,
        'io_ssen': io_ssen,
        'io_local': io_local,
        'io_cson': io_cson,
        'io_turnoffpe': io_turnoffpe,
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
function scrolltabs(self){
    var tmpObj = {};
    tmpObj.numOfTabs = $(self).parent().children('li').length;
    tmpObj.$obj = $(self);
    var distance;
    if ($(self).hasClass('scrollleft')) {
        distance = 0;
    } else {
        distance = -272;//(tmpObj.numOfTabs - 3) * (-94);
    }
    $(self).parent().children().css('visibility', 'visible');
    $(self).parent().animate({marginLeft: distance});
    tmpObj.myTimer = setTimeout(function () {
        for (var i = 0; i < tmpObj.numOfTabs; i++) {
            if (tmpObj.$obj.parent().children().eq(i).position().left >= 278 || tmpObj.$obj.parent().children().eq(i).position().left <= 1) {
                tmpObj.$obj.parent().children().eq(i).css('visibility', 'hidden');
            } else {
                tmpObj.$obj.parent().children().eq(i).css('visibility', 'visible');
            }
        }
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
    },400);
}

/**
 * Get an status window json file 
 * @param {Number} department - The department id of status window
 * @param {String} jsonFileName - filename of json file
 * @param {Function} onsuccess - a callback function which is fired when the file is received
 * @param {Function} onerror - a callback function which is fired when there's error 
 */
function getStatusWindowJSON(department, jsonFileName, onsuccess, onerror) {
    $.ajax({
        url: configURL + 'StatWin/' + department + '/' + jsonFileName + '.json',
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (msg) {
            if (onsuccess)
                onsuccess(msg);
        },
        error: function (d) {
            if (onerror)
                onerror(d);
        }
    });
}

/**
 * Get the data object of a status window from the server
 * 
 * @param {Number} diagnosisLibID - The department id of status window
 * @param {String} diagnosisControl - The status window id
 * @param {String} plc - plc to use in status window
 * @param {String} tag - tag to use in status window
 * @param {Function} onsuccess - a callback function which is fired when the data object is received
 * @param {Function} [onerror] - a callback function which is fired when there's error 
 * @param {Boolean} ignoreDEFAULT - if true, the DEFAULT is not loaded
 */
function getStatusWindowData(diagnosisLibID, diagnosisControl, plc, tag, onsuccess, onerror, ignoreDEFAULT) {
    var
            data = {
                plcVersion: null,
                windowData: null,
                winName: null,
                rootVersion: null,
                PLCType: null
            },
            successFired = false,
            success = function () {
                //fire the onsuccess only one time
                if (onsuccess && !successFired) {
                    successFired = true;
                    onsuccess(data);
                }
            },
            error = function (d) {
                if (ignoreDEFAULT) {
                    if (onerror)
                        onerror(d);
                    return;
                }
                
                //load 0/DEFAULT.json
                getStatusWindowData(0, "DEFAULT", plc, tag, onsuccess, onerror, true);
            },
            timeout = 0;

    // 1. First get the lastest version of the status window
    getStatusWindowJSON(
            diagnosisLibID,
            diagnosisControl,
            function (msg) {
                //success
                data.windowData = msg.data.windowData;
                data.winName = data.windowData.Name;
                data.rootVersion = data.windowData.Version;

                // 2. then get the working version which is configured in the PLC
                if (data.windowData.OPCVersionID && data.windowData.OPCVersionID !== "") {
                    emosWS.advise(plc + tag + "." + data.windowData.OPCVersionID, function (msg) {
                        var
                                version = msg.value,
                                matched = false;
                        data.plcVersion = version;
						data.PLCType = version.replace(/(.)..../, "$1");
                        version.replace(/.(\d\d)../, function (m, v) {
                            //2a. then get the working version of the status window
                            timeout = 2000;
                            matched = true;
                            getStatusWindowJSON(
                                    diagnosisLibID,
                                    diagnosisControl,
                                    function (msg) {
                                        //when configured json available
                                        data.windowData = msg.data.windowData;
                                        data.winName = data.windowData.Name;
                                        data.rootVersion = data.windowData.Version;
                                        success();
                                    },
                                    function () {
                                        //when configured json not available, fire success anyway
                                        success();
                                    }

                            );
                        });
                        if (!matched)
                            success();
                    }, "");
                    /*
                     * 3. in case the working version which is not configured in the
                     * PLC, fire the success after 100 ms
                     */
                    setTimeout(function () {
                        setTimeout(function () {
                            success();
                        }, timeout);
                    }, 100);
                } else {
                    success();
                }
            },
            function (d) {
                //error                
                error(d);
            }
    );
}

/**
 * Get status window ids (Hashmap) from child ids (Array)
 * 
 * @param {Number} department - The department id of status window
 * @param {String} diagnosisControl - id of status window
 * @param {Array} childIds - Array of child ids
 * @param {String} tag - tag to use in status window
 * @param {Function} onsuccess - a callback function which is fired when the map is ready
 * @param {Function} [onerror] - a callback function which is fired when there's error 
 */
function getChildrenWindowId(department, diagnosisControl, childIds, plc, tag, onsuccess, onerror) {
	var
	DGOS4X = "_4X",
	isDGOS4X = diagnosisControl.indexOf("_") !== -1,
	departmentId = department + (isDGOS4X ? DGOS4X : ""),        
	mappingId = "mapping" + (isDGOS4X ? DGOS4X : ""),
	mapping = statusWindowMappingList[departmentId],
	childWindowsData = {},
	doMapping = function () {
		childIds.forEach(function (childId) {
			var
			code = childId,
                        codeFull = code,
			forceFU = null,
			isMultiInstance = false,
			opcId = childId.replace(/([.])?(([a-zA-Z]+)(\d*))(=(.+))?/g, function (s1, sep, c, _childId, n, d, _childId2) {
					forceFU = _childId2;
					code = _childId2 ? _childId2 : _childId;
                                        codeFull = _childId + (n ? n : "");
					isMultiInstance = sep ? true : false;
					return (sep ? sep : "") + c;
				}),
			textID = isMultiInstance ? null : (tag.substr(1) + opcId),
			getTextIdFromWindowName = function (windowName) {
				if (!isMultiInstance)
					return;
				
				if (isDGOS4X) {
					emosWS.advise(plc + tag + "." + codeFull + ".GP." + windowName, function (msg) {
						if(msg.value !== "null")
							childWindowsData[childId].TextID = "G" + msg.value;
					}, "", emosWS.tagType.IO);
				} else {
					var
					mapping = {
						"1": "3",
						"3": "6",
						"5": "7"
					},
					prefix = mapping[department] || "7";
					windowName.replace(/FU(\d+)/i, function (m, fuID) {
						emosWS.advise(plc + tag + "." + codeFull + ".GP.E" + prefix + fuID + "_FB", function (msg) {
							if(msg.value !== "null")
								childWindowsData[childId].TextID = "E" + msg.value;
						}, "", emosWS.tagType.IO);
					});
				}
			},
			child = mapping[code];
			if (child) {
				childWindowsData[childId] = {
					Comment: child.Description,
					Name: child.WinName,
					OPCID: opcId,
					TextID: textID
				};
                                if (isMultiInstance)
                                    getTextIdFromWindowName(child.WinName);
			} else if (forceFU) {
				childWindowsData[childId] = {
					OPCID: opcId,
					Name: forceFU,
					Comment: childId,
					TextID: textID
				};
                                if (isMultiInstance)
                                    getTextIdFromWindowName(forceFU);
			}
		});
		if (onsuccess)
			onsuccess(childWindowsData);
	};

	// Loading the mapping.json if not available, then do mapping.
	if (!mapping) {
		getStatusWindowJSON(
			department,
			mappingId,
			function (msg) {
			statusWindowMappingList[departmentId] = mapping = msg;
			doMapping();
		},
			function () {
			console.info(mappingId + ".json for department " + department + " does not exist in server!");
			if (onerror)
				onerror();
		});
	} else {
		doMapping();
	}
}

function onMessage(msg, anotherWin) {
//    $('.ball, .ball1').show(); falls noch benötigt
    var counter = $('.diagnose:not(.statusWelcome)').get().length;
    counter += bShowSummary ? 1 : 0;
    if (counter === 4){ // || (window.screen.width < 1900 && counter === 3)) {
        return;
    }
//    console.log(msg);
    msg.myCounter = myCounter;
    if (compareWin) {
        msg.additionalClass = 'fixedPart' + (bShowSummary ? ' second' : '');
        anotherWin = true;
    }
    if ($('.diagnose') && anotherWin !== true) {
        $('.diagnose:not(.statusWelcome)').remove();
        
        if (!bShowSummary)
            $('.diagnose.statusWelcome').hide();
        clearMyInterval();
        terminateActiveAlarmClient();
    }
    var onReady = function () {
        var pageId = $('.diagnose:not(.statusWelcome).' + myCounter).find('.DiagnosisPageBlank:visible');
        //buildHeader(pageId);
        var myMainPage = pageId;
        var contentElement = '';
        if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
            contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
        } else {
            contentElement = myMainPage;
        }
        showScroll(contentElement);
        console.log(msg);
        $('.keyboardInput').attr('lang', myLanguage);
        var preparent = $('#' + this.myid).find('.DiagnosisPageBlank.Private'); //hier stand noch .append() hatte das Sinn?
        if(msg.DiagnosisControl.match(/.htm/)){
            $('.diagnose.' + myCounter + ':not(.statusWelcome)').find('.DiagnoseBody').append('<iframe id="statusWinIframe" name="statusWinIframe" src="../config/StatWin/html/' + msg.DiagnosisControl + '?PLC='+ msg.PLC +'&Tag='+ msg.Tag +'">');
            
        } else {
            getPrivateTabs(preparent);
        }
        if($('.aptDropdownlabel').length > 0){
            var aptDropdownlabel = $('.aptDropdownlabel');
            aptDropdownlabel.hide();
            $(aptDropdownlabel[0]).show();
            $(aptDropdownlabel[1]).show();
            $(aptDropdownlabel[2]).show();
            $(aptDropdownlabel[3]).show();
        }
        //buildHeader(pageId);
        listen_again();
        
        
        if($('.diagnose.statusWelcome').length > 0){
            $('.diagnose.statusWelcome').next('.diagnose').addClass('first');
        } else {
            $('.diagnose:first').addClass('first');
        }

        var actWidth = $('.diagnose.' + myCounter).width();
        if (compareWin) {
            var tmpo = $('#center .diagnose:not(.statusWelcome)');
            $.each(tmpo, function (key, val) {
                var count = bShowSummary ? key + 1 : key;
                $(val).animate({
                    'right': (actWidth * count) + 1
                });
            });
            $('.diagnose.' + myCounter).animate({
                'right': (actWidth * counter) + 1
            });
            $('#dialog-message').hide();
            $('.frameWrapper').removeClass('border');
        }
        compareWin = false;
        if (counter === 3) { // || (window.screen.width < 1900 && counter === 2)
            $('.copyTab').addClass('inactive');
            $('.arrangeTabs').addClass('inactive');
            $('.diagnose:not(.statusWelcome).' + myCounter).find('.subPageOverlay').addClass('disabled');
        }
        $("<div/>", {
            "class": "scrollTabs emosbutton"
        }).append('<div class="scrollTabAlert"></div>').appendTo($('.diagnose:not(.statusWelcome).' + myCounter).find('.ui-tabs-nav'));

        var numOfTabs = $('.diagnose:not(.statusWelcome).' + myCounter).find('.diatabs ul.ui-tabs-nav li').length;
        for (var i = 1; i < numOfTabs + 1; i++) {
            if ($('.diagnose:not(.statusWelcome).' + myCounter).find('.diatabs ul.ui-tabs-nav li:nth-of-type(' + i + ')').position().left >= 278) {
                $('.diagnose:not(.statusWelcome).' + myCounter).find('.diatabs ul.ui-tabs-nav li:nth-of-type(' + i + ')').css('visibility', 'hidden');
            }
        };
//        if($(".DiagnosisPageBlank.Operation .DiagnosisSubPageBlank:first").length > 0){
//            var realeases = $('<div class="Groupbox topleds hideBlock"><span class="emosbutton showhideblockbutton openBlock"></span></div>');
//            realeases.append(this.topLed);
//            $(".addMess1").children().appendTo(realeases);
//            realeases.prependTo(".diagnose:not(.statusWelcome)." + myCounter +" .DiagnosisPageBlank.Operation .DiagnosisSubPageBlank:first");
//        }
//        
//        $(".addMess1").remove();
//        setTimeout(function () {
//            $('.ball, .ball1').hide();
//        }, 5000); falls noch benötigt
    };
   

    var onAlarmReady = function () {  
        if($('.diagnose:not(.statusWelcome) .DiagnosisPageBlank.dPage.Messages')[0].actMessages === true){
            //var myIndex = $('.diagnose:not(.statusWelcome) .DiagnosisPageControl.diatabs ul li.Messages').index();
            $('.diagnose:not(.statusWelcome) .DiagnosisPageControl.diatabs').tabs();
            //$('.diagnose:not(.statusWelcome) .DiagnosisPageControl.diatabs').tabs({active: myIndex});  
            $('.diagnose:not(.statusWelcome) .DiagnosisPageBlank.Messages .DiagnosisAlarmClient .quit').css('display','inline-block');
            $('.diagnose:not(.statusWelcome).' + myCounter + ' .diatabs .scrollTabs').addClass('activeAlarms');
        }
        var pageId = $('.diagnose:not(.statusWelcome).' + myCounter).find('.DiagnosisPageBlank:visible'); 
        showScroll(pageId);
        buildHeader(pageId);
//        $('.ball, .ball1').hide(); falls noch benötigt
    };
    console.log(msg);
    if (msg.data && jsonFile && !msg.DiagnosisControl.match(/.htm/)) {
        var
                windowDataIsReady = false,
                childWindowsDataIsReady = false,
                onData = function () {
                    if (windowDataIsReady && childWindowsDataIsReady) {
                        msg.myCounter = myCounter;
                        if (compareWin) {
                            msg.additionalClass = 'fixedPart' + (bShowSummary ? ' second' : '');
                            anotherWin = true;
                        }
                        new emosWS.HTMLDiagnosisWindow(msg, onReady, onAlarmReady);
                    }
                },
                onWindowDataIsReady = function () {
                    windowDataIsReady = true;
                    onData();
                },
                onChildWindowsDataReady = function () {
                    childWindowsDataIsReady = true;
                    onData();
                };

        //get status window data object
        getStatusWindowData(msg.DiagnosisLibID, msg.DiagnosisControl, msg.PLC, msg.Tag,
                function (data) {
                    //success
                    msg.data.windowData = data.windowData;
                    msg.data.winName = data.windowData.Name;
					msg.PLCType = data.PLCType;
                    onWindowDataIsReady();
                },
                function (d) {
                    //error
                    console.log(d);
                    onWindowDataIsReady();
                }
        );

        //Get status window ids (Hashmap) from child ids (Array) if exists
        if (msg.data.childWindows) {
            getChildrenWindowId(msg.DiagnosisLibID, msg.DiagnosisControl, msg.data.childWindows, msg.PLC, msg.Tag,
                    function (childWindowsData) {
                        //success
                        msg.data.childWindowsData = childWindowsData;
                        onChildWindowsDataReady();
                    },
                    function (d) {
                        //error
                        console.log(d);
                        onChildWindowsDataReady();
                    }
            );
        } else {
            onChildWindowsDataReady();
        }
    } else {
        new emosWS.HTMLDiagnosisWindow(msg, onReady, onAlarmReady);
    }
    
    
    
    
//    var tmp = new emosWS.HTMLDiagnosisWindow(msg, onReady, onAlarmReady);
//    if($('.diagnose.statusWelcome').length > 0){
//        $('.diagnose.statusWelcome').next('.diagnose').addClass('first');
//    } else {
//        $('.diagnose:first').addClass('first');
//    }
//    
//    var actWidth = $('.diagnose.' + myCounter).width();
//    if (compareWin) {
//        var tmpo = $('#center .diagnose.first').nextAll();
//        $.each(tmpo, function (key, val) {
//            $(val).animate({
//                'right': (actWidth * (key + 1))
//            });
//        });
//        $('.diagnose.' + myCounter).animate({
//            'right': (actWidth * counter)
//        });
//        $('#dialog-message').hide();
//    }
//    compareWin = false;
//    if (counter === 3) { // || (window.screen.width < 1900 && counter === 2)
//        $('.copyTab').addClass('inactive');
//        $('.arrangeTabs').addClass('inactive');
//    }
//    $("<div/>", {
//        "class": "scrollTabs emosbutton"
//    }).append('<div class="scrollTabAlert"></div>').appendTo($('.diagnose:not(.statusWelcome).' + myCounter).find('.ui-tabs-nav'));
//    
//    var numOfTabs = $('.diagnose:not(.statusWelcome).' + myCounter).find('.diatabs ul.ui-tabs-nav li').length;
//    for (var i = 1; i < numOfTabs + 1; i++) {
//        if ($('.diagnose:not(.statusWelcome).' + myCounter).find('.diatabs ul.ui-tabs-nav li:nth-of-type(' + i + ')').position().left >= 278) {
//            $('.diagnose:not(.statusWelcome).' + myCounter).find('.diatabs ul.ui-tabs-nav li:nth-of-type(' + i + ')').css('visibility', 'hidden');
//        }
//    };
}


function showScroll(pageElement) {
    var page;
    var mother;
    var scrollExtraHight;
    if ($(pageElement).hasClass('dPage')) {
        //page = $(this);
        mother = $(pageElement).closest('.diagnose').find('.DiagnosisFooter');
        scrollExtraHight = 5;
    } else if($(pageElement).hasClass('cars')) {
        mother = $(pageElement).parent('#center');
        scrollExtraHight = 5;
    }  else if($(pageElement).attr('id') === 'alarmpage_content') {
        mother = $(pageElement).closest('#alarmpage');
        scrollExtraHight = 5;
    } else if($(pageElement).hasClass('detailTable')) {
        mother = $(pageElement).closest('#alarmpage');
        scrollExtraHight = 5;
    } else if(pageElement.hasClass('configcenter full') || pageElement.hasClass('configcenter editor full') || pageElement.hasClass('configcenterRight')){
        mother = pageElement.parent('.preferences.full');
        scrollExtraHight = 15;
    }else if(pageElement.hasClass('unassignedBox')){
        mother = pageElement.parent();
        scrollExtraHight = 15;
    } else if(pageElement.hasClass('overlayContentElements')){
        mother = pageElement.next();
        scrollExtraHight = 5;
    } else if(pageElement.parent().hasClass('transLeft')){
        mother = pageElement.parent();
        pageElement = $('.plantTableOverflow #plantTable').parent();
        scrollExtraHight = 15;
    } else if(pageElement.parent().hasClass('transRight')){
        mother = pageElement.parent();
        pageElement = $('.plcTableOverflow #plcTable').parent();
        scrollExtraHight = 15;
    } else if (pageElement.hasClass('plantTableOverflow')){
        mother = pageElement.closest('#overlayNewGraph').find('.transLeft');
        scrollExtraHight = 15;
    } else if (pageElement.hasClass('plcTableOverflow')){
        mother = pageElement.closest('#overlayNewGraph').find('.transRight');
        scrollExtraHight = 5;
    } else if (pageElement.hasClass('crumbOL')){
        mother = pageElement;
        scrollExtraHight = 50;
    } else {
        mother = pageElement; //$(this)
        scrollExtraHight = 60;
    }
    var extraheight = 25;
    if ($('html').hasClass('Firefox')) {
        extraheight = 25;
    }
    
    var bottomParent = pageElement.height(); //page.position().top + 
    var elemTop = pageElement.scrollTop();
    var elemHight = pageElement.prop("scrollHeight") - extraheight;
    if (elemTop === 0 && elemHight > bottomParent + 1) {
        mother.find('.scrollUp').removeClass('active');
        mother.find('.scrollDown').addClass('active');
    } else if (elemTop === 0 && elemHight <= pageElement.prop("clientHeight")) {
        mother.find('.scrollUp').removeClass('active');
        mother.find('.scrollDown').removeClass('active');
    } else if (elemTop > 0 && elemHight - elemTop <= bottomParent + scrollExtraHight) {
        mother.find('.scrollDown').removeClass('active');
        mother.find('.scrollUp').addClass('active');
    } else {
        mother.find('.scrollUp').addClass('active');
        mother.find('.scrollDown').addClass('active');
    }
   
    if (pageElement.hasClass('plantTableOverflow') || pageElement.hasClass('plcTableOverflow'))
        return;
        
    var scrollbarMultiplicator = bottomParent / elemHight;
    var scrollbarHight = bottomParent * scrollbarMultiplicator;
    if (pageElement.find('.scrollbar:first').length === 0 && elemHight > pageElement.prop("clientHeight")) { 
        $("<div/>", {
            "class": "scrollbar"
        }).appendTo(pageElement).height(scrollbarHight);
    } 
    if(scrollbarHight === bottomParent)
            scrollbarHight = 0;
    pageElement.find('.scrollbar:first').height(scrollbarHight);
//    $('.ball, .ball1').hide();
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

var tmp_countryCode;
function getHelpObject(cCode){ 
    var helpResults;
    $('#pdfHolder').remove();
    $('#docBox .breadoverlay_li').remove();
    if(cCode) {
        tmp_countryCode = cCode;
    } else {
        tmp_countryCode = countryCode;
    }    
    emosWS.rest.framework.getFileInfo({
        path: '/help/'+ tmp_countryCode,
        success: function(info){
            helpResults = info.children;
            if (helpResults.length <= 0 && tmp_countryCode !== 'en') {
                tmp_countryCode = 'en';
                $("<span/>", {
                    "class": "breadoverlay_li noFileText",
                    "text": "Es wurden keine Hilfedateien in Ihrer Sprache gefunden. Klicken Sie hier, um Hilfedateien in englischer Sprache anzuzeigen...",
                    "click": function () {
                        getHelpObject('en');
                        setTimeout(function () { 
                            $('.noFileText').remove();
                            buildHelpLinks(helpResults);
                        }, 4000);
                    }
                }).appendTo('#docBox');
            } else if(helpResults.length <= 0 && tmp_countryCode === 'en'){
                $("<span/>", {
                    "class": "breadoverlay_li noFileText",
                    "text": "No help file found. Please ask your Administrator."
                }).appendTo('#docBox');
            } else {
                buildHelpLinks(helpResults);
            }
        }, 
        error: function(){
            console.log("request failed");
        },
        server: serverPool[0]
   });
}

function buildHelpLinks(helpResults){
    $.each(helpResults, function (key, val) {
        $("<span/>", {
            "class": "breadoverlay_li",
            "id": getId(),
            "text": val.name.substring(val.name.indexOf("_") + 1).slice(0, -4).replace(/\_/g, " "),
            "data-link": encodeURIComponent(val.name),
            "click": function () {
                $('#docBox span').removeClass('active');
                $(this).addClass('active');
                $('#pdfHolder').remove();
                // muss das PDF per ajax laden, damit ein spinner gezeigt werden kann
//                $('.ball, .ball1').show(); falls noch benötigt
                $.ajax({
                    url: helpURL + tmp_countryCode + "/" + val.name,
                    cache: true,
                    mimeType: 'application/pdf',
                    success: function () {
                        $("<object/>", {
                            'id': "pdfHolder",
                            "width": 900,
                            "height": "100%",
                            "type": "application/pdf"
                        }).attr("data", helpURL + tmp_countryCode + "/" + encodeURIComponent(val.name)).prependTo('.helpholder');
//                        $('.ball, .ball1').hide(); falls noch benötigt
                    },
                    error: function () {
//                        $('.ball, .ball1').hide(); falls noch benötigt
                        $('.servererror').show();
                    }
                });
            }
        }).appendTo('#docBox');
    });
}
function closeOther(me) {
    if ($('#alarms').hasClass('active')) {
        animateOff(".alarmpage", ".alarmpage", "#alarms");        
        setTimeout(function () {     
            $('#precenter').hide();
        }, 400);
        alarmheaderReset();
        clearMyInterval();
        terminateActiveAlarmClient();
    }
    
    var myTarget;
    if (me === '#alarms') {
        myTarget = $(me).parent().prev().find('.active').attr('id');
        
    } else if(me !== '#alarms' && $('#alarms').find('.emosbutton.active').length > 0 ) {
        animateOff(".alarmpage", ".alarmpage", "#alarms");
        setTimeout(function () {     
            $('#alarms').find('.emosbutton.active').removeClass('active');
            $('#precenter').hide();
        }, 400);        
    } else if (me === "#maincats"){
        myTarget = $('#configheader').find('.active').attr('id');
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
        case 'help':
            $('.helpholder').removeClass('full');
            $('.helpholder').remove();
            $('#help').removeClass('active');
            break;
        case 'language':
            animateOff("#language ul", "#language ul", "#language");
            break;
    }
    $(".configcenter").empty().removeClass('editor');
    
}

function buildHeader(pageId) { 
//    if(userloggedin && $.isEmptyObject(privateResults.tabs)){
//    ich kann mich zwar erinnern, dass nachfolgende Zeile einen Sinn machte, weiß aber nicht mehr welchen
//    wenn es also mal wieder zu schwierigkeiten bzgl der ersten Contentpage kommt, muss hier angesetzt werden
        //$(pageId).find('.dPage:first-child').attr('style', '');
//    }
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
    if ($(pageId).find('.DiagnosisSubPageBlank:visible').length === 0 || $(pageId).children('.diasubtabs')[0].tabNumbers <= 1) {
        pagerHeadlineTextId = ($(pageId).children().find('.DiagnosisSubPageBlank:visible').length === 1) ? $(pageId).children().find('.DiagnosisSubPageBlank:visible')[0].headId : $(pageId)[0].headId;
        PagerHeadlinetext = ($(pageId).children().find('.DiagnosisSubPageBlank:visible').length === 1) ? $(pageId).children().find('.DiagnosisSubPageBlank:visible')[0].head : $(pageId)[0].head;
    } else {
        var menulines = [];
        pagerHeadlineTextId = $(pageId).children().find('.DiagnosisSubPageBlank:visible')[0].headId;
        PagerHeadlinetext = $(pageId).children().find('.DiagnosisSubPageBlank:visible')[0].head;
//        for (var i = 0; i < $(pageId).children('.diasubtabs')[0].tabNumbers; i++) {
        for (var i = 0; i < $(pageId).children('.diasubtabs').find('.DiagnosisSubPageBlank').length; i++) {    
            waytofooterhead.append('<span class="circle c' + i + '"><span class="circlenum">' + (i + 1) + '</span></span>');
            menulines.push("<li class='subtab breadoverlay_li' data-obj='" + i + "'>" + $(pageId).children().find('.DiagnosisSubPageBlank')[i].head + "</li>");
        }
        ulMaker('subTabMenu', menulines, waytofooterhead);
        waytofooterhead.addClass('sub');
        waytofooterhead.children('.circle').eq($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum - 1).addClass('big');
        waytofooterhead.children('.subTabMenu').children('li').eq($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum - 1).addClass('active');
        if ($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum < $(pageId).children('.diasubtabs').find('.DiagnosisSubPageBlank').length) {
            waytofooter.children('.scrollRight').addClass('active');
        }
        if ($(pageId).find('.DiagnosisSubPageBlank:visible')[0].tabNum > 1) {
            waytofooter.children('.scrollLeft').addClass('active');
        }
    }
    var text = document.getElementById(pagerHeadlineId);
    text.value = PagerHeadlinetext;
    emosWS.sendAdviseText(pagerHeadlineTextId, "name", function (msg) {
        var visibleTextID = $('.DiagnosisPageBlank:visible')[0].headId + ".name";
        if (msg && visibleTextID === msg.tag) {
            text.value = msg.value;
        } 
    });    
    
    if ($(pageId).hasClass('Private')) {
        $(text).prop('disabled', false);  
        if(userloggedin && $.isEmptyObject(privateResults.tabs)){
            $(pageId).prevAll('.pager').find('.radiobox').hide();
            $(pageId).prevAll('.pager').find("input:radio[value='public']").prop('checked', true);
            $(pageId).find('.dPage:first-child').attr('style', '');
            $(pageId).closest('.windowHolder').find('.radiobox').hide();
        } else if(!userloggedin) {
            $(pageId).prevAll('.pager').find('.radiobox').hide();
        } else {
            $(pageId).prevAll('.pager').find('.radiobox').show();
        }
//        $(pageId).prevAll('.pager').find('.publishcheck').find('.privatecheckbox').show();
//        var checked = $('input', $(pageId).prevAll('.pager').find('.publishcheck').find('.privatecheckbox')).is(':checked');
//        $('span', $(pageId).prevAll('.pager').find('.publishcheck')).text(checked ? 'published' : 'publish');
    } else {
        $(text).prop('disabled', true);
        $(pageId).prevAll('.pager').find('.radiobox').hide();
    }
}
function scrollUpDownButton(where, parent, line, updown) {    
    $("<span/>", {
        "class": updown
    }).insertAfter(where);
    showScroll($(where));
}
function buildTiles(appNum, appName) {
    var cars = [];
    var alarmTiles = [];
    var addAnimationsJobs = [];
    var addTextChange = {};
//    var station = "<span>Eco</span>Screen";//results.sidebuttons[appNum].stationname.replace('Eco', "<span>Eco</span>");
//    if (!myArr.sn) {
//        myArr.sn = 'Station';
//    }
//    
//    $('#stationname').html('<span class="myStation">' + myArr.sn + "&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;" + station + "<span class='appicon'></span></span>");

    var activeSB = $('.cats').find("[data-num='" + appNum + "']").closest('li');
    activeSB.addClass('active').find('.emosbutton').css('background-image', activeSB.find('.emosbutton').css('background-image').split(",")[0]);
    var appToLoad = "results.sidebuttons[" + appNum + "].tiles";
    
    if (results.sidebuttons[appNum].link !== ""){
        if (appName === 'Diagnosis')
            $('#center').addClass('diagnosis');

        var tmpElem = $('<div/>', {
            "data-link": results.sidebuttons[appNum].link,
            "target": {'innerText': results.sidebuttons[appNum].name}
        });
        tmpElem[0].target = {'innerText': results.sidebuttons[appNum].name};

        loadIframe(tmpElem[0], true);
    } else {
        $.each(eval(appToLoad), function (key, val) {
            var id = getId();
            var id2 = getId();
            var apageId = getId();
            var svgPath = configURL  + '../' + serverRoot + plantSVGPath + '/';
            cars.push("<li id='" + id2 + "' title='" + val.name + "' data-link='" + val.link + "' class='tile' textId='" + val.textId + "' plc='" + val.plc + "' style='background-image:url(" + svgPath + val.iconclass + ".svg), linear-gradient(#fff, #d1d7e0);'><span class='tilename'>" + val.name + "</span><span class='' id='" + id + "'><span class='warn_image'></span></span></li>");
            alarmTiles.push("<li id='" + val.name + "_" + id + "' data-link='" + val.link + "' class='firsttile emosbutton'><input class='plantcheckbox' type='checkbox' name='plants' value='"+ val.plc +"'><span class='tilename' style='background-image:url(" + svgPath + val.iconclass + ".svg);' data-name='" + val.name + "'>" + val.name + "</span><span class='' id='" + apageId + "'><span class='warn_image'></span></span></li>");

            buildAlarmHeader(appNum, appName, addAnimationsJobs, alarmTiles, true, val, key);

            if (results.sidebuttons[appNum].iconclass !== "conveyor")
                ulMaker('alarm_solo', alarmTiles, '#alarmpage_content', 'alarm_solo_' + id);

            addTextChange[val.textId] = id2;

            plcurl = val.plcsoftware;
            var plcList = $.getPLCdata();   
            emosWS.advise(val.plc + val.cabinetname + plcList.Manual_IsOn, function (msg) {
                if (msg.value === "1" || msg.value === "-1") {
                    $('#alarm_solo_' + id).find('.handMode').removeClass('offMode').addClass('onMode');
                } else {
                    $('#alarm_solo_' + id).find('.handMode').removeClass('onMode');
                }
            }, "", emosWS.tagType.IO);
            emosWS.advise(val.plc + val.cabinetname + plcList.Manual_TurnOn, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.handMode').removeClass('wantSwitch');
                }
            }, "", emosWS.tagType.IO);
            emosWS.advise(val.plc + val.cabinetname + plcList.Auto_IsOn, function (msg) {
                if (msg.value === "1" || msg.value === "-1") {
                    $('#alarm_solo_' + id).find('.automatic').removeClass('offMode').addClass('onMode');
                } else {
                    $('#alarm_solo_' + id).find('.automatic').removeClass('onMode');
                }
            }, "", emosWS.tagType.IO);
            emosWS.advise(val.plc + val.cabinetname + plcList.Auto_TurnOn, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.automatic').removeClass('wantSwitch');
                }
            }, "", emosWS.tagType.IO);
            /*emosWS.advise(val.plc + val.cabinetname + plcList.Remote_IsOn, function (msg) {
                if (msg.value === "1" || msg.value === "-1") {
                    $('#alarm_solo_' + id).find('.localRemote').removeClass('offMode').addClass('onMode');                
                } else {
                    $('#alarm_solo_' + id).find('.localRemote').removeClass('onMode').addClass('offMode');  
                }
            }, "", emosWS.tagType.IO);*/
            emosWS.advise(val.plc + val.cabinetname + plcList.Remote_TurnOn, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.localRemote').removeClass('wantSwitch');
                }
            }, "", emosWS.tagType.IO);
            /*emosWS.advise(val.plc + val.cabinetname + plcList.Local_IsOn, function (msg) {
               if (msg.value === "1" || msg.value === "-1") {
                    $('#alarm_solo_' + id).find('.localRemote').removeClass('onMode').addClass('offMode');                
                } else {
                    $('#alarm_solo_' + id).find('.localRemote').removeClass('offMode').addClass('onMode');  
                }   
            }, emosWS.tagType.IO);*/
            emosWS.advise(val.plc + val.cabinetname + plcList.Local_TurnOn, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.localRemote').removeClass('wantSwitch');
                }
            }, emosWS.tagType.IO);
            /*emosWS.advise(val.plc + val.cabinetname + plcList.CentralStart_IsOn, function (msg) {
                if (msg.value === "1" || msg.value === "-1") {
                    $('#alarm_solo_' + id).find('.plantStartStop').removeClass('offMode').addClass('onMode').removeClass('wantSwitch');                
                } else {
                    $('#alarm_solo_' + id).find('.plantStartStop').removeClass('onMode').addClass('offMode');  
                }           
            }, emosWS.tagType.IO);*/
            emosWS.advise(val.plc + val.cabinetname + plcList.CentralStart_TurnOn, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.plantStartStop').removeClass('wantSwitch');
                }
            }, emosWS.tagType.IO);
            emosWS.advise(val.plc + val.cabinetname + plcList.CentralStart_IsStripeOut, function (msg) {
                if (msg.value === "1" || msg.value === "-1") {
                    $('#alarm_solo_' + id).find('.plantStartStop').removeClass('onMode').addClass('offMode').removeClass('wantSwitch');                
                } 
            }, emosWS.tagType.IO);
            emosWS.advise(val.plc + val.cabinetname + plcList.CentralStart_TurnOffPE, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.plantStartStop').removeClass('wantSwitch');
                }
            }, emosWS.tagType.IO);
            emosWS.advise(val.plc + val.cabinetname + plcList.CentralStart_TurnOffDirect, function (msg) {
                if (msg.value === "0") {
                    $('#alarm_solo_' + id).find('.plantStartStop').removeClass('wantSwitch');
                }
            }, emosWS.tagType.IO);
            alarmTiles = [];

            //add job for creating the animation (in future)
            addAnimationsJobs.push(function () {
                alarmAnimations.push(new emosWS.HTMLFaultWarning({
                    "id": id,
                    "alarmGroup": val.alarm
                }));
            });

        });
    }
    cars.push("<br style='clear:both;'>");
    $("<ul/>", {
        "class": 'cars',
        "id": 'cars',
        html: cars.join("")
    }).prependTo('#center');

    scrollUpDownButton('#cars', '#center', '#cars li', 'scrollUp');
    scrollUpDownButton('#cars', '#center', '#cars li', 'scrollDown');

    $.each($('#cars li'), function () {
        if ($(this).position().top >= $('#center').height() - 170) {
            $(this).css('opacity', 0.5);
            $('#cars ~ .scrollUp, #cars ~ .scrollDown').show();
            $('#cars ~ .scrollDown').addClass('active');
        }
    });
    
    $.each(eval(addTextChange), function (key, val) {
        var callbackText;
        emosWS.sendAdviseText(key, "name", callbackText = function (msg) {
            $('#' + val + ' .tilename').text(msg.value);
        });
        
        $('#' + val + ' .tilename').on("remove", function () {
            emosWS.unadvise(key + ".name.Text", callbackText);
        });
    });
    //build alarm-buttons on top
    buildAlarmHeader(appNum, appName, addAnimationsJobs);
    if($('#alarmheaderDetails').length === 0){
        scrollUpDownButton('#alarmpage_content', '#alarmpage', '#alarmpage_content ul', 'scrollDown');
        $("<span/>", {
            "class": "emosbutton details",
            "id": "alarmheaderDetails",
            "click": function () {
                if ($('.emosbutton.details').hasClass('disabled')) {
                    return;
                }
                $(this).addClass('disabled');
                $('ul.alarm_solo').css('float', 'none');
                getDetailsOverlay();

            }
        }).insertAfter('#alarmpage_content');

        $("<span/>", {
            "class": "emosbutton details_reset",
            "click": function () {
                if ($(this).hasClass('disabled')) {
                    return;
                }
                alarmheaderReset();
            }
        }).insertAfter('#alarmpage_content');
        scrollUpDownButton('#alarmpage_content', '#alarmpage', '#alarmpage_content ul', 'scrollUp');
    }
    activeSidebutton = appName.toLowerCase();
}
function alarmheaderReset() {
    $('.details_reset').addClass('disabled');
    $('.details').removeClass('disabled');
    $('ul.alarm_solo').show().css('float', 'left');
    $('.detailOverlay').remove();
//    $('#precenter .plantcheckbox').prop("checked", false);
    $('#alarmpage_content_footer .scrollright').css('visibility', 'hidden');
    $('#alarmpage').find('.windowHolder').empty();
    $('#alarmpage').find('.DiagnosisFooter.private').remove();
    getTransparenz($('#alarmpage_content'));
    showScroll($('#alarmpage_content'));
}
function buildAlarmHeader(appNum, appName, addAnimationsJobs, alarmTiles, neededforAlarmPage, tile, num) {
    try {
        var alarms = [];
        var alarmsOnoverlay = [];
        alarmToLoad = "results.sidebuttons[" + appNum + "].alarm_buttons";
        var alarmToLoadObj = eval(alarmToLoad);
        var i = 0;
        var m = 1;
        
        $.each(alarmToLoadObj, function (key, val) {
            
            if (val.iconclass === "safety" && globals.securityIcon === "unchecked")
                return;
                
            var id = getId();
            var alarmpage_id = getId();
            var handsId = getId();
            var autoId = getId();
            var addClass = '';
            var tmpButton;  
            var buttonURL = '';
            var addAttr = '';
             
            if(!val.buttontype || val.buttontype === 'undefined'){
                tmpButton = 'blockbutton';
            } else {
                tmpButton = val.buttontype;
            }
            if(tmpButton === 'blockbutton'){
               addAttr = 'data-num=block' + m;
            }
            if(i > 0 && tmpButton === 'blockbutton' && alarmToLoadObj[i -1].buttontype === 'singlebutton' || i === 0 && tmpButton === 'blockbutton') {
                addClass = 'startBlock';
            } else if(alarmToLoadObj[i + 1] && val.buttontype === 'blockbutton' && alarmToLoadObj[i + 1].buttontype === 'singlebutton' || i + 1 === alarmToLoadObj.length) {
                addClass = 'endBlock';
                m = m + 1;
            } 
            if(val.link && val.link !== ""){
                buttonURL = 'data-url='+ val.link;
            }
            var svgPath = configURL  + '../' + serverRoot + alarmbuttonSVGPath + '/';
            alarms.push("<li "+ addAttr +" data-name='" + val.iconclass + "' class='emosbutton " + (val.iconclass === "statusTag" ? "statusTag " : "") + tmpButton + " " + addClass + "' style='background-image:url(" + svgPath + val.iconclass + ".svg), linear-gradient(#fff, #d1d7e0);'" + buttonURL +"><span class='' id='" + id + "'></span></li>");
            if (alarmTiles) {
                if (alarmToLoadObj[i].iconclass === 'automatic') {
                    alarmTiles.push("<li id='" + handsId + "' data-name='" + num + "' class='emosbutton handMode'></li>");
                    alarmTiles.push("<li id='" + autoId + "' data-name='" + num + "' class='emosbutton " + val.iconclass + "'></li>");                    
                } else {
                    alarmTiles.push("<li data-name='" + num + "' class='emosbutton " + val.iconclass + "'><span class='' id='" + alarmpage_id + "'></span></li>");
                }
                plcurl = tile.plcsoftware;
                var plcList = $.getPLCdata();   
            }

            var tmpalarm;
            switch (val.alarm_id) {
                case 'Remote_IsOn':
                    tmpalarm = tile ? tile.plc + tile.cabinetname + plcList.Remote_IsOn : aniData[appName].io_ssen;
                    break;
                case 'Auto_IsOn':
                    tmpalarm = tile ? tile.plc + tile.cabinetname + plcList.Auto_IsOn : aniData[appName].io_auto;
                    break;
                case 'alarmsecurity':
                    tmpalarm = tile ? tile.alarm_security : aniData[appName].alarmsecurity;
                    break;
                case 'CentralStart_IsOn':
                    tmpalarm = tile ? tile.plc + tile.cabinetname + plcList.CentralStart_IsOn : aniData[appName].io_cson;
                    break;
                case 'alarmgroup':
                    tmpalarm = tile ? tile.alarm : aniData[appName].alarmgroup;
                    break;
            }
            
            var isAPTio = false;
            if (Array.isArray(val.alarm)){
                tmpalarm = {};
                for (var j = 0; j < val.alarm.length; j++){
                    tmpalarm[val.plc + val.alarm[j]] = 0;
                }
                isAPTio = true;
            } else if (val.alarm){
                tmpalarm = {};
                tmpalarm[val.plc + val.alarm] = 0;
        
                if (val.rpc && val.rpc !== ""){
                    var splitRPC = val.rpc.split(";");
                    for (var j = 0; j < splitRPC.length; j++){
                        tmpalarm[splitRPC[j] + val.alarm_rpc] = 0;
                    }   
                }
                isAPTio = true;
            }
            var tmp_id;
            if (neededforAlarmPage) {
                tmp_id = alarmpage_id;
            } else {
                tmp_id = id;
            }
           
            addAnimationsJobs.push(function () {
                if (isAPTio){
                    changeStatusTag(tmpalarm, id, val.iconclass === "statusTag");
                } else if (val.alarm_type === "none") {
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
            i++;
        });
        // end each
        if (!neededforAlarmPage) {
            if (appName === 'Conveyor' || appName === 'Process') {
                $('#alarmheader').removeClass('bigger');
                ulMaker('alarms', alarms, '#alarmheader');
            } else {
                if(alarms.length > 8){
                    $('#alarmheader').addClass('bigger');
                }
                ulMaker('alarms', alarms, '#alarmheader');
//                ulMaker('alarm_solo', alarms, '#alarmheader');
            }
        } else {
            //ulMaker('alarm_solo', alarmsOnoverlay, '#alarmpage');

        }

        //now start to create the animation
        addAnimationsJobs.forEach(function (job) {
            job();
        });
        listen_again();
        return alarmsOnoverlay;
    } catch(e) {
        console.log(e);
    }
    
}
var filters = [];
filters.Alarming = [];
filters.AlarmingTopten = [];
filters.Operating = [];
filters.Parametrizing = [];
var myPLCs = [];
// build and get the DetailOverlay
function getDetailsOverlay(PLC) {
    $('#alarmpage_content').scrollTop(0);
    $('.details_reset').removeClass('disabled');
    if($('input[name=plants]:checked').length * 80 < $('#alarmpage_content').height()){
        $('#alarmpage_content').next('.scrollDown').removeClass('active');
    }
    myPLCs = [];
    var allChecked = $("ul.alarm_solo li input:checked");
    
    $.each($("ul.alarm_solo li input"), function (key, val) {
        if(allChecked.length === 0 || $(val).is(':checked') === true){
            myPLCs.push(val.value);
        } else {
            $(val).closest('ul.alarm_solo').hide();
            $('ul.alarm_solo').css('float', 'none');
        }
        
//        if ($(val).is(':checked') === false) {
//            
//        } else {
//            
//        }
    });
    
    if (myPLCs.length === 0 && PLC)
        myPLCs.push(PLC);
    
    var spaceLeft = (results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Conveyor') ? 0 : 50;
    //mainbox
    $('<div/>', {
        "class": "detailOverlay"
    }).appendTo('#alarmpage_content').css("left", $('.alarm_solo').width() + spaceLeft);

    // Tabellen Head
    var tableHead = "<span class='headline'><span class='textFilter'>Filter (<span class='anzahl'></span> / <span class='gesanzahl'></span>): </span></span>" +
            "<table style='width: 100%;' class='DiagnosisRestAlarmTableHead'>" +
            "<tr>" +
                "<th class='tdBegin'> Begin</th>" +
                "<th class='tdEnd'> End  ▼</th>" +
                "<th class='tdShift'> Shift</th>" +
                "<th class='tdText'> Text</th>" +
                "<th class='tdArea'> Alarmgroup  ▼</th>" +
                "<th class='tdTagname'> Tagname</th>" +
                "<th class='tdPriority'> Priority  ▼</th>" +
                "<th class='tdClass'> Class  ▼</th>" +
                "<th class='tdDuration'> Duration</th>" +
                "<th class='tdComment'> Comment</th>" +
                "<th class='tdEditor'> Last Editor</th>" +
                "<th class='tdCount'> Amount</th>" +
                "</tr></table>";
        
    var hasMaintenance = globals.maintenance === "checked" ? "detailExtra" : "";
    var bActualAlarms = (results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Conveyor');
    var liveData =  bActualAlarms ? "liveData" : "";
     
    var alarmText = bActualAlarms ? "Actual alarms" : "Alarm history";
    // Alarmin-Box    
    $('<div/>', {
        "class": "alarmDetails detailAlarming norm " + hasMaintenance + " " + liveData,
        "id": "detailAlarming",
        "click": function () {
            resizeDetail($(this));
        }
    }).appendTo('.detailOverlay');
    $('<div/>', {
        "id": "alarmBox",
        "class": "detailHead",
        "text": alarmText,
        "data-name": "Alarming"
    }).appendTo('.detailAlarming');
    
    $('.detailAlarming').append(tableHead);
    
    if (bActualAlarms) {
        $('<div/>', {
            "class": "detailTable detailAlarmingLiveDataTable bigTable"
        }).appendTo('.detailAlarming');

        var tableId = $('.detailAlarmingLiveDataTable').find('.DiagnosisAlarmClient').find('table').attr('id');
        new emosWS.AlarmClient($('.detailAlarmingLiveDataTable'), null, myPLCs /*"$System"*/, "", null, true, null, tableId);
        //$(this).find('.detailAlarmingLiveDataTable').css('visibility', 'hidden');
        
        emosWS.sendAdviseText("T04_ActualAlarms", "name", $('.detailAlarming')[0].callback = function (msg) {
            $('.detailAlarming').find('.detailHead').text(msg.value);
        });
    } else {

        $('<div/>', {
            "class": "detailTable detailAlarmingTable"
        }).appendTo('.detailAlarming');
        $('.detailAlarming')[0].orgHeight = $('.detailAlarming').height();
//    emosWS.rest.alarm.top('$System', 100, function (data) {//$System myPLCs
//        new emosWS.RestAlarmClient($('.detailAlarmingTable'), data, onRestAlarmReady);
//    }); 

        emosWS.sendAdviseText("T04_AlarmHistory", "name", $('.detailAlarming')[0].callback = function (msg) {
            $('.detailAlarming').find('.detailHead').text(msg.value);
        });

        emosWS.rest.alarm.topOfType({
            type: "alarming",
            alarmGroup: myPLCs, //['$System'],
            success: function (alarmArray) {
                new emosWS.RestAlarmClient($('.detailAlarmingTable'), alarmArray, onRestAlarmReady, 'Alarming');
            },
            error: function () {
                console.log("request failed");
            }
        });
    }
    
    //Operating-Box    
    $('<div/>', {
        "class": "alarmDetails detailOperating norm " + hasMaintenance,
        "id": "detailOperating",
        "click": function () {
            resizeDetail($(this));
        }
    }).appendTo('.detailOverlay');
    $('<div/>', {
        "id": "operatingBox",
        "class": "detailHead",
        "text": "Operating",
        "data-name": "Operating"
    }).appendTo('.detailOperating');
    $('.detailOperating').append(tableHead);
    $('<div/>', {
        "class": "detailTable detailOperatingTable"
    }).appendTo('.detailOperating');
//    $('.detailOperatingTable').append("<div class='DiagnosisRestAlarmClient'><table style='width: 100%' class='DiagnosisRestAlarmTable Groupbox'></tr></table></div>");
    $('.detailOperating')[0].orgHeight = $('.detailOperating').height();
    emosWS.rest.alarm.topOfType({
        type: "operating",
        alarmGroup: myPLCs, //['$System'],
        success: function(alarmArray){     
            new emosWS.RestAlarmClient($('.detailOperatingTable'), alarmArray, onRestAlarmReady, 'Operating');
        }, 
        error: function(){
            console.log("request failed");
        }
   });

    // Parametrizing Tabellen Head
    var ParamTableHead = "<span class='headline'><span class='textFilter'>Filter (<span class='anzahl'></span> / <span class='gesanzahl'></span>): </span></span>" +
            "<table style='width: 100%;' class='DiagnosisRestAlarmTableHead'>" +
            "<tr>" +
                "<th class='tdDTOriginal'> D&&T Origina</th>" +
                "<th class='tdDTLogged'> D&&T Logged </th>" +
                "<th class='tdApplication'> Application</th>" +
                "<th class='tdIONode'> I/O Node  ▼</th>" +
                "<th class='tdIOItem'> I/O Item  ▼</th>" +
                "<th class='tdOldValue'> Old value </th>" +
                "<th class='tdNewValue'> New value </th>" +
                "<th class='tdComment'> Comment</th>" +
                "<th class='tdUser'> Username</th>" +
                "</tr></table>";
    //Parametrizing-Box
    $('<div/>', {
        "class": "alarmDetails detailParametrizing norm " + hasMaintenance,
        "id": "detailParametrizing",
        "click": function () {
            resizeDetail($(this));
        }
    }).appendTo('.detailOverlay');
    $('<div/>', {
        "id": "parametrizingBox",
        "class": "detailHead",
        "text": "Parametrizing",
        "data-name": "Parametrizing"
    }).appendTo('.detailParametrizing');
    $('.detailParametrizing').append(ParamTableHead);
    $('<div/>', {
        "class": "detailTable detailParametrizingTable"
    }).appendTo('.detailParametrizing');
    $('.detailParametrizing')[0].orgHeight = $('.detailParametrizing').height();
//    emosWS.rest.alarm.top('$System', 20, function (data) {
//        new emosWS.RestAlarmClient($('.detailParameterTable'), data);
//    });
    emosWS.rest.eventParam.top({
        alarmGroup: myPLCs, //['$System'],
        success: function(alarmArray){  
            new emosWS.RestParametrizingClient($('.detailParametrizingTable'), alarmArray, onRestAlarmReady, 'Parametrizing');
        }, 
        error: function(){
            console.log("request failed");
        }
    });

    //Trending-Box
    $('<div/>', {
        "class": "alarmDetails detailTrending norm",
        "id": "detailTrending",
        "click": function () {
            resizeDetail($(this));
        }
    }).appendTo('.detailOverlay');
    $('<div/>', {
        "id": "trendingBox",
        "class": "detailHead",
        "text": "Trending",
        "data-name": "Trending"
    }).appendTo('.detailTrending');
    $('<div/>', {
        "class": "detailTrendingTable"
    }).appendTo('.detailTrending');
    $('.detailTrending')[0].orgHeight = $('.detailTrending').height();
//    addTrendPage($('.detailTrendingTable'), '', false);


    //Maintenance
    if (globals.maintenance === "checked"){
        $('<div/>', {
            "class": "alarmDetails detailMaintenance norm",
            "id": "detailMaintenance",
            "click": function () {
                resizeDetail($(this));
            }
        }).appendTo('.detailOverlay');
        $('<div/>', {
            "id": "maintenanceBox",
            "class": "detailHead",
            "text": "Maintenance",
            "data-name": "Maintenance"
        }).appendTo('.detailMaintenance');
        $('<div/>', {
            "class": "detailMaintenanceTable"
        }).appendTo('.detailMaintenance');
        $('.detailMaintenance')[0].orgHeight = $('.detailMaintenance').height();
    }

    //Private-Box
    $('<div/>', {
        "class": "alarmDetails detailPrivate norm",
        "id": "detailPrivate",
        "click": function () {
            resizeDetail($(this));
        }
    }).appendTo('.detailOverlay');
    $('<div/>', {
        "id": "privateBox",
        "class": "detailHead",
        "text": "Private",
        "data-name": "Private"
    }).appendTo('.detailPrivate');
    $('<div/>', {
        "class": "windowHolder" //dPage Private
    }).appendTo('.detailPrivate');
    if(userloggedin)
//        $('.detailPrivate .windowHolder').append('<div class="radiobox"><label><input type="radio" name="privTabs" value="privat" onchange="togglePrivPub(\'privat\');" checked="checked">show private</label><label><input type="radio" name="privTabs" value="public" onchange="togglePrivPub(\'public\');">show public</label>');
        $('.detailPrivate .windowHolder').append('<div class="radiobox hideme"><span class="emosbutton showPrivate">show Private</span></div>');
    $('.detailPrivate')[0].orgHeight = $('.detailPrivate').height();
    if ($('#column_1')) {
        $('#alarmpage_content_footer .scrollright').css('visibility', 'visible');
    }
    
    $('<div/>', {
        "class": "closeTabs emosbutton",
        "click": function () {
            closeDetail($(this));
            $('#alarmpage_content').nextAll('.scrollUp, .scrollDown').hide();
        }
    }).appendTo('.detailOverlay');
    listen_again();
    
    var tmpIds = {};
    tmpIds["operatingBox"] = 'Operating';
    tmpIds["parametrizingBox"] = 'Parametrizing';
    tmpIds["trendingBox"] = 'Trending';
    tmpIds["maintenanceBox"] = 'Maintenance';
    tmpIds["privateBox"] = 'Private';
    
    $.each(tmpIds, function (key, val) {
        var text = document.getElementById(key);
        if (!text)
            return;
        emosWS.sendAdviseText("T04_" + val, "name", function (msg) {
            if (msg && msg.value !== '' && text) {
                text.innerHTML = msg.value;
            }
        }, this);
    });     
}

function onRestAlarmReady(motherTable) { 
    toFilter = false;
    //var elem = $('.detailHead:contains('+ motherTable +')');
    var elem = $('.detailHead').filter('[data-name=' + motherTable + ']');
    doFilter(filters[motherTable], elem.nextAll('.DiagnosisRestAlarmTableHead'), motherTable);
    if($('.alarmDetails.detailAlarming.liveData').length > 0)
        $('.alarmDetails .reload').addClass('disabled');
    else 
        $('.alarmDetails .reload').removeClass('disabled');
    elem.next('.headline').find('.gesanzahl').text($('.detail'+ motherTable +'Table').find('tr').length - 1);
    if($('.detail'+ motherTable +'Table').find('tr.filtered').length === 0){
        elem.next('.headline').find('.anzahl').text($('.detail'+ motherTable +'Table').find('tr').length - 1);
    } else {
        elem.next('.headline').find('.anzahl').text($('.detail'+ motherTable +'Table').find('tr.filtered').length);
    }
    if($('.detailOverlay.full .detailHead:contains('+ motherTable +')').is(':visible')){
        showScroll(elem.nextAll('.detailTable'));
//        $('.ball, .ball1').hide(); falls noch benötigt
    } 
}

var filterList = [];

function doFilter(filters, listelement, motherTable){
    if(filters.length > 0){
        var actBox = motherTable; //listelement.prevAll('.detailHead').text();
        var temp = filters[0];
        oldTabClass[actBox] = $(temp).attr('data-name');
        $.each(filters, function(key, val){
            if($(val).attr('data-name') && $(val).attr('data-value')){
//                var listelement = $('.detailAlarming .DiagnosisRestAlarmTableHead');                    
                filterMyList(listelement, $(val).attr('data-name'), $(val).attr('data-value'), motherTable);
                if (motherTable === 'Alarming'){
                    filterMyList(listelement, $(val).attr('data-name'), $(val).attr('data-value'), 'AlarmingTopten');
                }
                listelement.find('th.' + $(val).attr('data-name')).find('li:contains('+ $(val).attr('data-value') +')').addClass('active');
            } 
        });
    }     
}
function resizeDetail(self) {
    if (!self.parent().hasClass('full')) {
        if(self.hasClass('detailTrending')){
            var id = "TrendPageContainer";
            var body = $("<div class='TrendPageElement' id='" + id + "'></div>");
            body.appendTo($('.detailTrendingTable'));
            if(userloggedin && privateResults.trendingsets && privateResults.trendingsets[activeSidebutton]){
                var trendPage = new emosWS.TrendPage({
                    'uiID': id,
                    'data': [[]]
                });
            trendPage.loadPrivateSet(privateResults.trendingsets[activeSidebutton]);
            } else {
                var emptyTrendpage = addTrendPage($('.detailTrendingTable'), '', true);                
            }
        } else if(self.hasClass('detailPrivate')) {  
            if(!userloggedin || userloggedin && $.isEmptyObject(privateResults.tabs)){
                togglePrivPub('public');
            } else {
                togglePrivPub('privat');
            }
//            getPrivateTabs(null, true);
            //getPrivateTabFooter(self);
        } else if(self.hasClass('detailMaintenance')) {
            getMaintenanceTable(self.find('.detailMaintenanceTable'));
        } else {
            var numberDropDown = '<span class="box number"><span class="label">Number</span><span class="dropdown emosbutton noicon"><span class="languageButton">'+ 
                    '100</span></span>' + 
                    '<ul class="dropdownlist noicon">' + 
                    '<li data-value="100" class="language active">100</li>' +
                    '<li data-value="200" class="language">200</li>' +
                    '<li data-value="300" class="language">300</li>' +
                    '<li data-value="500" class="language">500</li>' +
                    '<li data-value="1000" class="language">1000</li>' +
                    '</ul>' +
                    '</span>';
            /*var timeDropDown = '<span class="box time" style="display:none"><span class="label">Time</span><span class="dropdown emosbutton noicon"><span class="languageButton">'+ 
                    '24 hours</span></span>' + 
                    '<ul class="dropdownlist noicon">' + 
                    '<li data-value="24" class="language active">24 hours</li>' +
                    '<li data-value="48" class="language">48 hours</li>' +
                    '<li data-value="168" class="language">1 week</li>' +
                    '</ul>' +
                    '</span>';*/
            if(self.find('.reload').length === 0){
                $('<div/>', {
                    "class": "reload emosbutton",
                    "click": function () {
                        $(this).addClass('disabled');
//                        $('.ball, .ball1').show(); falls noch benötigt
                        reloadFrom = self; 
                        reloadTables();
                    }
                }).appendTo(self);                
            }
            
            $('#alarmpage_content').nextAll('.scrollUp, .scrollDown').show();
            if(self.hasClass('detailAlarming') && self.find('.alarmHistoryChange').length === 0){
                var alarmUl = $('<ul/>', {
                    "class": "alarmHistoryChange"
                }).appendTo(self);    
                
                $('<li/>', {
                    "class": "alarmHistory emosbutton act",
                    "click": function () {
                        if (!$(this).hasClass('act')){
                            changeTableView(this, self, alarmUl, false, 'detailAlarmingToptenTable', 'detailAlarmingLiveDataTable', 'detailAlarmingTable', 'alarmTopTen', 'alarmLiveData', "Alarming");
                        }
                    }
                }).appendTo(alarmUl);  
                
                $('<li/>', {
                    "class": "alarmTopTen emosbutton",
                    "click": function () {
                        if (!$(this).hasClass('act')){
                            changeTableView(this, self, alarmUl, false, 'detailAlarmingTable', 'detailAlarmingLiveDataTable', 'detailAlarmingToptenTable', 'alarmHistory', 'alarmLiveData', "AlarmingTopten");
                        }
                    }
                }).appendTo(alarmUl); 
                
                $('<li/>', {
                    "class": "alarmLiveData emosbutton",
                    "click": function () {
                        if (!$(this).hasClass('act')){
                            changeTableView(this, self, alarmUl, true, 'detailAlarmingTable', 'detailAlarmingToptenTable', 'detailAlarmingLiveDataTable', 'alarmHistory', 'alarmTopTen', "ActualAlarms");
                        }
                    }
                }).appendTo(alarmUl); 
                
                if (self.find('.detailTable.detailAlarmingTable').length === 0) {
                    $('<div/>', {
                        "class": "detailTable detailAlarmingTable"
                    }).appendTo('.detailAlarming');
                    $('.detailAlarming')[0].orgHeight = $('.detailAlarming').height();

                    emosWS.rest.alarm.topOfType({
                        type: "alarming",
                        alarmGroup: myPLCs, //['$System'],
                        success: function (alarmArray) {
                            new emosWS.RestAlarmClient($('.detailAlarmingTable'), alarmArray, onRestAlarmReady, 'Alarming');
                        },
                        error: function () {
                            console.log("request failed");
                        }
                    });
                }
                
                if (self.find('.detailTable.detailAlarmingToptenTable').length === 0){
                    $('<div/>', {
                        "class": "detailTable detailAlarmingToptenTable"
                    }).appendTo('.detailAlarming');
                                
                    //var startData = getDateForAlarmTop10();            
                    emosWS.rest.alarm.topXOfType({
                        type: "alarming",
                        alarmGroup: myPLCs, //['$System'],
                        //startDate: startData,
                        max: 100,
                        success: function(alarmArray){
                            new emosWS.RestAlarmClient($('.detailAlarmingToptenTable'), alarmArray, onRestAlarmReady, 'Alarming');
                            self.find('.detailAlarmingToptenTable').css('visibility', 'hidden');
                        },
                        error: function(){
                            console.log("request failed");
                         }
                    });
                }
                
                if (self.find('.detailTable.detailAlarmingLiveDataTable').length === 0){
                    $('<div/>', {
                        "class": "detailTable detailAlarmingLiveDataTable"
                    }).appendTo('.detailAlarming');
                    
                    var onAlarmReady = function (){
                        showScroll(self.find('.detailTable.act'));
                    }
                    
                    var tableId = $('.detailAlarmingLiveDataTable').find('.DiagnosisAlarmClient').find('table').attr('id');
                    new emosWS.AlarmClient($('.detailAlarmingLiveDataTable'), null, myPLCs /*"$System"*/, "", null, true, onAlarmReady, tableId);
                    
                    self.find('.detailAlarmingLiveDataTable').css('visibility', 'hidden');
                }
            }
            
            if(self.find('.box.number').length === 0){
                self.append(numberDropDown);
                //self.append(timeDropDown);
            }
        }
        self.parent().prev().find('table').show();
        self.parent().addClass('full');
        self.find('.detailTable').addClass('act');
        
        if (self.find('.alarmHistory').hasClass('act')){
            self.find('.detailAlarmingToptenTable').removeClass('act');
            self.find('.detailAlarmingLiveDataTable').removeClass('act');
            self.find('.box.number').show();
            //self.find('.box.time').hide();
            changeTableView(self.find('.alarmLiveData'), self, self.find('.alarmHistoryChange'), true, 'detailAlarmingTable', 'detailAlarmingToptenTable', 'detailAlarmingLiveDataTable', 'alarmHistory', 'alarmTopTen', "ActualAlarms", true);
        } else if (self.find('.alarmTopTen').hasClass('act')){
            self.find('.detailAlarmingTable').removeClass('act');
            self.find('.detailAlarmingLiveDataTable').removeClass('act');
            self.find('.box.number').hide();
            //self.find('.box.time').show();
            changeTableView(self.find('.alarmLiveData'), self, self.find('.alarmHistoryChange'), true, 'detailAlarmingTable', 'detailAlarmingToptenTable', 'detailAlarmingLiveDataTable', 'alarmHistory', 'alarmTopTen', "ActualAlarms", true);
        } else if (self.find('.alarmLiveData').hasClass('act')){
            self.find('.detailAlarmingToptenTable').removeClass('act');
            self.find('.detailAlarmingTable').removeClass('act');
            self.find('.box.number').hide();
            //self.find('.box.time').hide();
            changeTableView(self.find('.alarmLiveData'), self, self.find('.alarmHistoryChange'), true, 'detailAlarmingTable', 'detailAlarmingToptenTable', 'detailAlarmingLiveDataTable', 'alarmHistory', 'alarmTopTen', "ActualAlarms", true);
        } 
        
        $('.alarmDetails:not(#' + self.attr('id') + ')').hide();
        $('#alarmpage_content .alarm_solo').hide();
        
        if(self.find('.DiagnosisRestAlarmTableHead ul').length === 0 && self.hasClass('detailOperating')){
            setTimeout(function (){
                showScroll(self.find('.detailTable'));            
                getFilterDropDown(self, 'Operating');
            }, 1000);
        } else if(self.find('.DiagnosisRestAlarmTableHead ul').length === 0 && self.hasClass('detailParametrizing')){
            setTimeout(function (){
                showScroll(self.find('.detailTable'));
                var actHead = "Parametrizing";
                $('#alarmpage_content').nextAll('.scrollUp, .scrollDown').show();
                // context for filter IONode
                $('<ul/>', {
                    "class": "overlay sortIoNode"
                }).appendTo('.detail' + actHead + ' .DiagnosisRestAlarmTableHead .tdIONode');
                var filterElements = unique(self.find('.detailTable')[0][actHead + 'tdIONode']).sort();
                buildFilterOverlay(filterElements, 'tdIONode', '.sortIoNode', self);

                // context for filter IOItem
                $('<ul/>', {
                    "class": "overlay sortIoItem"
                }).appendTo('.detail' + actHead + ' .DiagnosisRestAlarmTableHead .tdIOItem');
                var filterElements = unique(self.find('.detailTable')[0][actHead + 'tdIOItem']).sort();
                buildFilterOverlay(filterElements, 'tdIOItem', '.sortIoItem', self);
            }, 1000);
        }
    } 
}

function getDateForAlarmTop10(){
    var hours = ($('.detailAlarming').find('.box.time').length > 0) ? $('.detailAlarming').find('.box.time .dropdownlist li.active').attr('data-value') : 24;
    var seconds = hours * 60 * 60 * 1000;
    return (new Date() - seconds);
}

function getFilterDropDown(self, actHead){
    try {
        $('#alarmpage_content').nextAll('.scrollUp, .scrollDown').show();
        // context for filtering Enddate
        $('<ul/>', {
            "class": "overlay sortEndDate"
        }).appendTo('.detail' + actHead + ' .DiagnosisRestAlarmTableHead .tdEnd');
        var filterElements = ['open', 'closed'];
        buildFilterOverlay(filterElements, 'tdEnd', '.sortEndDate', self);

        // context for filter priority
        $('<ul/>', {
            "class": "overlay sortPriority"
        }).appendTo('.detail' + actHead + ' .DiagnosisRestAlarmTableHead .tdPriority');
        var filterElements = unique(self.find('.detailTable')[0][actHead + 'tdPriority']).sort();
        buildFilterOverlay(filterElements, 'tdPriority', '.sortPriority', self);

        // context for filter area
        $('<ul/>', {
            "class": "overlay sortArea"
        }).appendTo('.detail' + actHead + ' .DiagnosisRestAlarmTableHead .tdArea');
        var filterElements = unique(self.find('.detailTable')[0][actHead + 'tdArea']).sort();
        buildFilterOverlay(filterElements, 'tdArea', '.sortArea', self);

        // context for filter class
        $('<ul/>', {
            "class": "overlay sortClass"
        }).appendTo('.detail' + actHead + ' .DiagnosisRestAlarmTableHead .tdClass');
        var filterElements = unique(self.find('.detailTable')[0][actHead + 'tdClass']).sort();
        buildFilterOverlay(filterElements, 'tdClass', '.sortClass', self);
    } catch (e) {
        console.log("Error filter: " + e);
    }
}

function changeTableView(target, self, alarmUl, bLiveData, tableHidden, tableHidden2, tableVisible, btnView, btnView2, header, noFilter){
       
    var visibleTableNow = self.find('.detailHead').attr('data-name');
    
    var oldTextID;
    switch (visibleTableNow) {
        case "Alarming":
            oldTextID = "AlarmHistory";
            break;
        case "AlarmTop":
            oldTextID = "AlarmTop";
            break;
        case "ActualAlarms":
            oldTextID = "ActualAlarms";
            break;
    }
    emosWS.unadvise("T04_" + oldTextID + ".name.Text", $('.detailAlarming')[0].callback);
    
    alarmUl.find('.' + btnView).removeClass('act');
    alarmUl.find('.' + btnView2).removeClass('act');
    $(target).addClass('act');
    self.find('.' + tableHidden).css('visibility', 'hidden').removeClass('act');
    self.find('.' + tableHidden2).css('visibility', 'hidden').removeClass('act');
    self.find('.' + tableVisible).css('visibility', 'visible').addClass('act');
    self.find('.DiagnosisRestAlarmTableHead').removeClass('act');
    $('.detailAlarming').removeClass('topten');
    
    if (bLiveData){
        alarmUl.parent().find('.reload').addClass('disabled');
        self.find('.box.number').hide();
        //self.find('.box.time').hide();
        $('.detailAlarming').addClass('liveData');
        $('.detailAlarming').find('.headline').hide();
        self.find('.DiagnosisRestAlarmTableHead').addClass('act');
    } else {
        alarmUl.parent().find('.reload').removeClass('disabled');
        $('.detailAlarming').removeClass('liveData');
        $('.detailAlarming').find('.headline').show();
        $('.detailAlarming').find('.headline').find('.anzahl').text($('.' + tableVisible).find('tr:visible').length);
        $('.detailAlarming').find('.headline').find('.gesanzahl').text($('.' + tableVisible).find('tr').length - 1);
        if (header === "AlarmingTopten"){
            $('.detailAlarming').addClass('topten');
            self.find('.box.number').hide();
            //self.find('.box.time').show();
        } else {
            //self.find('.box.time').hide();
            self.find('.box.number').show();
        }
    }

    if (visibleTableNow === "Alarming" && header === "ActualAlarms" ||  visibleTableNow === "AlarmingTopten" && header === "ActualAlarms"){
        renameTableHeaderAlarmning(self, '.tdClass', 'Class', '  ', '  ▼');
        renameTableHeaderAlarmning(self, '.tdPriority', 'Priority', '  ', '  ▼');
        renameTableHeaderAlarmning(self, '.tdArea', 'Alarmgroup', '  ', '  ▼');
    } else if (visibleTableNow === "ActualAlarms" && header === "Alarming" ||  visibleTableNow === "ActualAlarms" && header === "AlarmingTopten") {
        renameTableHeaderAlarmning(self, '.tdClass', 'Class', '  ▼', '  ');
        renameTableHeaderAlarmning(self, '.tdPriority', 'Priority', '  ▼', '  ');
        renameTableHeaderAlarmning(self, '.tdArea', 'Alarmgroup', '  ▼', '  ');
    }
    
    var targetHeader;
    var textIDHeader;
    switch(header){
        case "Alarming":
            targetHeader = "Alarm history";
            textIDHeader = "AlarmHistory";
            break;
        case "AlarmingTopten":
            targetHeader = "Alarm top 10";
            textIDHeader = "AlarmTop";
            break;
        case "ActualAlarms":
            targetHeader = "Actual alarms";
            textIDHeader = "ActualAlarms";
            break;
    }
    self.find('.detailHead').attr('data-name', header);
    self.find('.detailHead').text(targetHeader);
    emosWS.sendAdviseText("T04_" + textIDHeader, "name", $('.detailAlarming')[0].callback = function (msg) {
        self.find('.detailHead').text(msg.value);
    });
    
    showScroll(self.find('.detailTable.act'));
    
    if (noFilter || $('.detailOverlay.full .DiagnosisRestAlarmTableHead').find('ul.overlay').length > 0)
        return;
    
    getFilterDropDown(self, "Alarming");
}

function renameTableHeaderAlarmning (self, tdName, headerName, addDropdown, removeDropdown){
    
    var innerHtml = self.find('.DiagnosisRestAlarmTableHead').find(tdName)[0].innerHTML.replace(headerName + removeDropdown, headerName + addDropdown);
    self.find('.DiagnosisRestAlarmTableHead').find(tdName)[0].innerHTML = innerHtml;
}

function addToAlarmTable(tableID){
    
    var numberFrom = $('.detailAlarming').find('.box.number .dropdownlist li.active').attr('data-value');
    
    emosWS.rest.alarm.topOfType({
        type: "alarming",
        first: parseInt(numberFrom),
        max: 50,
        alarmGroup: myPLCs, //['$System'],
        success: function(alarmArray){     
            new emosWS.RestAlarmClient($('.detailAlarmingTable'), alarmArray, onRestAlarmReady, 'Alarming', tableID);
        }, 
        error: function(){
            console.log("request failed");
        }
   });
}

function reloadTables(){
    filters['Alarming'] = $('.detailAlarming').find('.filtertext').get();
    filters['AlarmingTopten'] = $('.detailAlarming').find('.filtertext').get();
    filters['Operating'] = $('.detailOperating').find('.filtertext').get();
    filters['Parametrizing'] = $('.detailParametrizing').find('.filtertext').get();
    $('.headline').find('.filtertext').remove();
    toFilter = false;
    linesToShow = []; 
    linesToShow['Alarming'] = [];
    linesToShow['AlarmingTopten'] = [];
    linesToShow['Operating'] = [];
    linesToShow['Parametrizing'] = [];
    
    if ($('.detailAlarmingTable').hasClass('act') || $('.detailAlarmingToptenTable').hasClass('act') || $('.detailAlarmingLiveDataTable').hasClass('act')){
        $('.detailAlarmingTable').css('visibility', 'visible');
        $('.detailAlarmingTable').empty();
        var alarmingNum = ($('.detailAlarming').find('.box.number').length > 0) ? $('.detailAlarming').find('.box.number .dropdownlist li.active').attr('data-value') : 100;
        emosWS.rest.alarm.topOfType({
            type: "alarming",
            max: alarmingNum,
            alarmGroup: myPLCs, //['$System'],
            success: function(alarmArray){     
                new emosWS.RestAlarmClient($('.detailAlarmingTable'), alarmArray, onRestAlarmReady, 'Alarming');
                if (!$('.detailAlarmingTable').hasClass('act'))
                    $('.detailAlarmingTable').css('visibility', 'hidden');
            }, 
            error: function(){
                console.log("request failed");
            }
        });
        $('.detailAlarmingToptenTable').css('visibility', 'visible');
        $('.detailAlarmingToptenTable').empty();
        //var timestamp = getDateForAlarmTop10();
        emosWS.rest.alarm.topXOfType({
            type: "alarming",
            alarmGroup: myPLCs, //['$System'],
            //startDate: timestamp,
            max: 100,
            success: function(alarmArray){
                new emosWS.RestAlarmClient($('.detailAlarmingToptenTable'), alarmArray, onRestAlarmReady, 'Alarming');
                if (!$('.detailAlarmingToptenTable').hasClass('act'))
                    $('.detailAlarmingToptenTable').css('visibility', 'hidden');
            },
            error: function(){
                console.log("request failed");
            }
        });
    } else if($('.detailOperatingTable').hasClass('act')){
        var operatingNum = ($('.detailOperating').find('.box.number').length > 0) ? $('.detailOperating').find('.box.number .dropdownlist li.active').attr('data-value') : 100;
        $('.detailOperatingTable').empty();
        emosWS.rest.alarm.topOfType({
            type: "operating",
            max: operatingNum,
            alarmGroup: myPLCs, //['$System'],
            success: function(alarmArray){     
                new emosWS.RestAlarmClient($('.detailOperatingTable'), alarmArray, onRestAlarmReady, 'Operating');
            }, 
            error: function(){
                console.log("request failed");
            }
        });
    } else if($('.detailParametrizingTable').hasClass('act')){
        var parametrizingNum = ($('.detailParametrizing').find('.box.number').length > 0) ? $('.detailParametrizing').find('.box.number .dropdownlist li.active').attr('data-value') : 100;
        $('.detailParametrizingTable').empty();
        emosWS.rest.eventParam.top({
            alarmGroup: myPLCs, //['$System']
            max: parametrizingNum,
            success: function(alarmArray){  
                new emosWS.RestParametrizingClient($('.detailParametrizingTable'), alarmArray, onRestAlarmReady, 'Parametrizing');
            }, 
            error: function(){
                console.log("request failed");
            }
        });
    }
}
function preparePrivateTabs(myval, mykey, toggleme, myText){
    var switcher = false;
    
    var myMsg = {
        type: "OpenDiagnosisWindow",
        "DiagnosisLibID": "1",
        "PLC": '0',
        "Tag": "",
        "DiagnosisControl": '',
        "GroupRightIndex": "0",
        "id": ""
    };
    myMsg.additionalClass = 'privateOverlay';
    myMsg.myCounter = myval;
    myMsg.myText = myText;
    myMsg.data = {
        'windowData': {
            "PageControl": {
                "1999990-AddPageTab": {
                    "1999991-AddPageControl": {
                       "1999992-AddPageTab": {
                           "Text": myval,
                           "TextID": myval,
                           "MyPlace": "privateOverlay",
                           "PosCounter": mykey
                       }
                   },
                   "Text": "Private",
                   "TextID": "Private"
                }
            }
        }
    };
    new emosWS.HTMLDiagnosisWindow(myMsg, onPrivateReady, null, '.windowHolder', switcher); 
    return($('.windowHolder .' + myval + ' .dPage.Private'));
}
function onPrivateReady(switcher){
    var posCounter = $('.windowHolder').find('.privateOverlay').length - 1;
    $('.privateOverlay.' + this.Counter).css('left', 344 * posCounter);
    $('.detailOverlay').addClass('full');
    $('.alarmDetails:not(#detailPrivate)').hide();
    $('#alarmpage_content .alarm_solo').hide();
    var pageId = $('.windowHolder .' + this.Counter).find('.DiagnosisPageBlank:visible');
//    if(switcher === true) {
//        $('.privateOverlay.' + this.Counter).find('.publishcheck span').text('privatized');
//        $('.privateOverlay.' + this.Counter).find('.publishcheck .privatecheckbox').prop('checked', true);
//        $('.privateOverlay.' + this.Counter).find('.publishcheck .privatecheckbox').attr("disabled", true);
//    }
    showScroll(pageId);
    buildHeader(pageId);
    
};
function buildFilterOverlay(filterElements, tdName, parent, self) {
    self.find('.DiagnosisRestAlarmTableHead ' + parent + ' li').remove();
    $.each(filterElements, function(key, val){ 
        var className = tdName === 'tdClass' ? " alarmingIcon C" + val : "";
        $('<li/>', {
            "class": "breadoverlay_li" + className,
            "text": val,
            "click": function(){
                if($(this).hasClass('active')){
                    removeFilter($(this).closest('.DiagnosisRestAlarmTableHead').prev().find('.filtertext[data-value="'+ val +'"]'));
                    
                } else {

                    if ($(this).closest('.DiagnosisRestAlarmTableHead').prevAll('.detailHead').attr('data-name') === "Alarming")
                        filterMyList($(this).closest('.DiagnosisRestAlarmTableHead'), tdName, val, "AlarmingTopten");
                    else if ($(this).closest('.DiagnosisRestAlarmTableHead').prevAll('.detailHead').attr('data-name') === "AlarmingTopten")
                        filterMyList($(this).closest('.DiagnosisRestAlarmTableHead'), tdName, val, "Alarming"); 
                    filterMyList($(this).closest('.DiagnosisRestAlarmTableHead'), tdName, val, $(this).closest('.DiagnosisRestAlarmTableHead').prevAll('.detailHead').attr('data-name'));
                    $(this).addClass('active');
                }                
            }
        }).appendTo(self.find('.DiagnosisRestAlarmTableHead .'+ tdName + ' ' + parent));                
    });
    resetter(tdName.replace('td', '').toLowerCase() + 'All', '.' + tdName, ' ' + parent, self);
}
function resetter(addClass, tab, parent, self){
    $('<li/>', {
        "class": "breadoverlay_li " + addClass,
        "text": 'RESET ALL',
        "click": function(){
            $(this).closest('.DiagnosisRestAlarmTableHead').next().find('tr').show();
            $(this).closest('.DiagnosisRestAlarmTableHead').prev('.headline').find('.filtertext').remove();
            $(this).closest('.DiagnosisRestAlarmTableHead').find('li').removeClass('active');
            var actTable = $(this).closest('.DiagnosisRestAlarmTableHead').next('.detailTable'); 
            var actHead = self.find('.detailHead').attr('data-name');
            
            if (actHead === 'Alarming')
                $(this).closest('.DiagnosisRestAlarmTableHead').nextAll('.detailAlarmingToptenTable').find('tr').show();
            var mother = $(this).closest('.alarmDetails');
            $.each(tableElements, function(key, val){
                if(actTable.find('.' + key).length > 0) {
                    var filterElements = unique(actTable[0][actHead + key]).sort();
                    buildFilterOverlay(filterElements, key, val, mother);
                }                
            });
            
            if ($('.detailAlarmingToptenTable').hasClass('act'))
                self.find('.headline').find('.anzahl').text($('.detailAlarmingToptenTable').find('tr:visible').length - 1);
            else 
                self.find('.headline').find('.anzahl').text($('.detail' + actHead + 'Table').find('tr:visible').length - 1);
            linesToShow = [];
            linesToShow['Alarming'] = [];
            linesToShow['AlarmingTopten'] = [];
            linesToShow['Operating'] = [];
            linesToShow['Parametrizing'] = [];
            toFilter = false;
            oldTabClass[actHead] = '';
            self.find('.DiagnosisRestAlarmTableHead').removeClass('deeper');
            self.find('.DiagnosisRestAlarmTableHead').parent().find('.detailTable').removeClass('deeper');
        }
    }).appendTo(self.find('.DiagnosisRestAlarmTableHead ' + tab + parent));
    emosWS.sendAdviseText('RESET ALL', "name", function (msg) {
        if (msg) {
            $('.' + addClass).text(msg.value);
        }
    });
}

var oldTabClass = [];
oldTabClass['Alarming'] = '';
oldTabClass['AlarmingTopten'] = '';
oldTabClass['Operating'] = '';
oldTabClass['Parametrizing'] = '';
var toFilter = false;
var linesToShow = [];
linesToShow['Alarming'] = [];
linesToShow['AlarmingTopten'] = [];
linesToShow['Operating'] = [];
linesToShow['Parametrizing'] = [];
var oldAlarmList = [];
var oldOperationList;
var tableElements = {'tdClass':' .sortClass','tdArea':' .sortArea','tdPriority':' .sortPriority', 'tdIONode': '.sortIoNode', 'tdIOItem': '.sortIoItem'};
function filterMyList(self, tabClass, filterval, motherTable) {
    var gesList;
    var actBox = motherTable; 
    gesList = $('.detail'+ motherTable +'Table').find('tr').get();
    var alarmList = [];  
    if(!oldTabClass[actBox] || tabClass === oldTabClass[actBox] && !toFilter){
        alarmList = gesList;
    } else if(oldTabClass[actBox] && tabClass === oldTabClass[actBox] && toFilter) {
        alarmList = oldAlarmList[actBox];
    } else {
        oldAlarmList[actBox] = self.next().find('tr.filtered').get();
        alarmList = oldAlarmList[actBox];
        toFilter = true;
        linesToShow[actBox] = [];
    }
     
    if (motherTable === 'AlarmingTopten'){
        self.nextAll('.detailAlarmingToptenTable').find('tr').removeClass('filtered').hide();
    } else {
        self.next().find('tr').removeClass('filtered').hide();
    }
    $.each(alarmList, function(){
        var trLine = $(this);
        var key = tabClass;
        var val = filterval;
        
        if(val === 'open' && trLine.find('td.tdEnd:empty').closest('tr').index() > -1){
            linesToShow[actBox].push(trLine.find('td.tdEnd:empty').closest('tr').index());            
        } else if (val === 'closed' && trLine.find('td.tdEnd:not(:empty)').closest('tr').index() > -1) {
            linesToShow[actBox].push(trLine.find('td.tdEnd:not(:empty)').closest('tr').index());
        } else {   
            if(trLine.find('td.'+ key +':contains('+ val +')').closest('tr').index() > -1){
                linesToShow[actBox].push(trLine.find('td.'+ key +':contains('+ val +')').closest('tr').index());
            }
        }
    });
    
    if(self.prev('.headline').find('[data-value="' + filterval + '"]').length === 0) {
        $('<span/>', {
            'class': 'emosbutton filtertext deleteFilter closeTabs ' + filterval,
            'data-name': tabClass,
            'data-value':filterval,
            'text':tabClass.replace('td', '') + ': ' + filterval,
            'click': function(){
                removeFilter($(this));
            }
        }).appendTo(self.prev('.headline'));
    }
    
    var length = 0;
    $.each(self.prev('.headline').find('.deleteFilter'), function(){
        length += $(this).width() + 70;
    });
    
    if (length > 1300){
        self.addClass('deeper');
        self.parent().find('.detailTable').addClass('deeper');
    } else {
        self.removeClass('deeper');
        self.parent().find('.detailTable').removeClass('deeper');
    }
        
    linesToShow[actBox] = unique( linesToShow[actBox] );
    var tmpTableElements = JSON.parse(JSON.stringify(tableElements));
    delete tmpTableElements[tabClass];
    var tmpFilterElements = {};
    tmpFilterElements.tdArea = [];
    tmpFilterElements.tdPriority = [];
    tmpFilterElements.tdClass = [];
    tmpFilterElements.tdIONode = [];
    tmpFilterElements.tdIOItem = [];
    $.each(gesList, function(key, val){
        if(jQuery.inArray(key, linesToShow[actBox]) > -1){
            $(val).show().addClass('filtered');
            $.each(tmpTableElements, function(key1, val1){
                tmpFilterElements[key1].push($(val).find('td.' + key1).text());
            });
        }
    });
    oldTabClass[actBox] = tabClass; 
    delete tmpFilterElements[tabClass];
    $.each(tmpFilterElements, function(key, val){
        var filterElements = unique(val).sort();
        buildFilterOverlay(filterElements, key, tmpTableElements[key], self.parent());
    });
    
    if ($('.detailAlarmingToptenTable').hasClass('act'))
        self.prev('.headline').find('.anzahl').text($('.detailAlarmingToptenTable').find('tr:visible').length);
    else 
        self.prev('.headline').find('.anzahl').text($('.detail'+ motherTable +'Table').find('tr:visible').length);
    
    showScroll(self.next('.detailTable'));
}
function removeFilter(self){
    toFilter = false;
    var mother = self.closest('.alarmDetails');
    var actHeadLine = self.closest('.headline');
    var actAlarmTable = actHeadLine.nextAll('.detailTable');
    var tabCols = actHeadLine.next('.DiagnosisRestAlarmTableHead').nextUntil('.detailAlarmingLiveDataTable').find('tr:not(:first)');
    var actHead = actHeadLine.prev('.detailHead').attr('data-name');
    linesToShow[actHead] = [];
    if (actHead === 'Alarming')
        linesToShow['AlarmingTopten'] = [];
    else if (actHead === 'AlarmingTopten')
        linesToShow['Alarming'] = [];
    filters[actHead] = actHeadLine.find('.filtertext').get();
    actHeadLine.next('.DiagnosisRestAlarmTableHead').find('th.' + self.attr('data-name')).find('li').removeClass('active');
    var obj = filters[actHead].filter(function ( obj ) {
        return obj.className === self.closest('.filtertext')[0].className;
    })[0];
    filters[actHead].splice($(obj).index() -1, 1);
    actHeadLine.find('.filtertext').remove();

    if(filters[actHead].length > 0){
        doFilter(filters[actHead], actHeadLine.next('.DiagnosisRestAlarmTableHead'), actHead);
    } else {
        tabCols.show().removeClass('filtered');
        actHeadLine.next('.DiagnosisRestAlarmTableHead').find('th').find('li').removeClass('active');            
        $.each(tableElements, function(key, val){
            if(actAlarmTable[0][actHead + key]) {
                var filterElements = unique(actAlarmTable[0][actHead + key]).sort();
                buildFilterOverlay(filterElements, key, val, mother);
            }            
        });
    }
    
    if ($('.detailAlarmingToptenTable').hasClass('act'))
        actHeadLine.find('.anzahl').text($('.detailAlarmingToptenTable').find('tr:visible').length);
    else 
        actHeadLine.find('.anzahl').text($('.detail'+ actHead +'Table').find('tr:visible').length);
}
function unique(array){
    
    if (!array)
        return;
    
    return array.filter(function(el, index, arr) {
        return index === arr.indexOf(el);
    });
}
function closeDetail(self) {
    $('.detailOverlay').removeClass('full');
    $('.alarmDetails').show();
    var allChecked = $("ul.alarm_solo li input:checked");
    
    $.each($("ul.alarm_solo li input"), function (key, val) {
        if(allChecked.length === 0 || $(val).is(':checked') === true){
            $(val).closest('ul.alarm_solo').show();
        } 
    });

    $('.alarmDetails:visible').find('.detailTable').removeClass('act').find('.scrollbar').remove();
//    $('.alarmDetails').find('.box.number').remove();
    $('.alarmDetails').find('.box.number').hide();
    //$('.alarmDetails').find('.box.time').hide();
    $('#alarmpage').removeClass('special');
    $('#alarmpage').find('.windowHolder').empty();
    $('#alarmpage').find('.DiagnosisFooter.private').remove();
    $('#alarmpage_content .TrendPageElement').remove();
    $('#alarmpage_content .detailMaintenanceTable').empty();
}
function saveHeadline(self) {
    var parent = $(self).closest('.diatabs ').find('.DiagnosisSubPageBlank:visible');
    var myVal = self.value.replace(' ','_');
    var oldAttr = parent.attr("data-pos");
    parent.attr("data-pos", myVal);
    parent[0].head = myVal;
    var tmp_privateResults = JSON.stringify(privateResults);
    tmp_privateResults = tmp_privateResults.replace(new RegExp("\\b" + oldAttr + "\\b"), myVal);
    emosWS.writeData(writeConfig + 'users/' + myName + ".json", tmp_privateResults);
    $('#contextMenu .context a:contains(' + oldAttr + ')').text('Copy to Tab ' + myVal);
    privateResults = JSON.parse(tmp_privateResults);
}
function togglePrivPub(self, myid){
    $('#alarmpage').find('.windowHolder .privateOverlay ').remove();
    $('#alarmpage').find('.DiagnosisFooter.private').remove();
    var parent = (myid) ? $('#' + myid).find('.dPage.Private') : null;
    console.log(myid)
    
    
    if(myid){
        parent.find('.diasubtabs').empty();
        if(self === 'public'){
            getPrivateTabs(parent, false, true);
            $('.detailPrivate .radiobox').find("input:radio[value='public']").prop('checked', true);
        } else {
            getPrivateTabs(parent, false, null, 'private');
        }  
    } else {
        $('.windowHolder').position().left = 0;
        if(self === 'public'){
            getPrivateTabs(parent, true, true);
            $('.detailPrivate .radiobox').find("input:radio[value='public']").prop('checked', true);
            if(!emosWS.isAdmin()){
                $('.diagnose.privateOverlay .privTable .tBody').sortable('disable');
            }
        } else {
            getPrivateTabs(parent, true, null, 'private');
        }  
        getPrivateTabFooter();
    }
}
function getPrivateTabs(preparent, forOverlay, toggleme, private) {
    var tabsToLoad;
    var buttonText;
    if (!toggleme && userloggedin && $.isEmptyObject(privateResults.tabs) === false) { 
        tabsToLoad = privateResults.tabs;
        buttonText = 'show public';
    } else if(!toggleme && userloggedin && !privateResults.tabs || !toggleme && userloggedin && $.isEmptyObject(privateResults.tabs)){
        if(private){
            $('.diagnose.privateOverlay').remove();
            $('.footerHead.sub').empty();
            $('.DiagnosisFooter .scrollLeft').removeClass('active');
            $('.DiagnosisFooter .scrollRight').removeClass('active');
            privateResults.tabs = {};
            return;
        } else {            
            tabsToLoad = publicTabs;
            privateResults.tabs = {};            
        }
        buttonText = 'show private';
//        $('.windowHolder ')
    } else if(toggleme && userloggedin && $.isEmptyObject(privateResults.tabs)) {
        tabsToLoad = publicTabs;  
        buttonText = 'show private';
        privateResults.tabs = {};
    } else {
        tabsToLoad = publicTabs;  
        buttonText = 'show private';        
    } 
    $.each(Object.keys(tabsToLoad), function (key, val) {
        var tempText;
        var checkMe = '';
        if (emosWS.isAdmin() && val in publicTabs) {
            tempText = 'Public';
            if(JSON.stringify(privateResults.tabs[val]) === JSON.stringify(publicTabs[val])){
                checkMe = 'checked';
            }
        } else if(userloggedin && $.isEmptyObject(privateResults.tabs) === false && toggleme){
            tempText = 'Public';
            if(val in privateResults.tabs){
                switcher = true;
            }
        } else {
            tempText = (userloggedin && $.isEmptyObject(privateResults.tabs) === false) ? 'Private' : 'Public';
        }
        
        if(forOverlay){
            preparent = preparePrivateTabs(val, key, toggleme, tempText);
        }
        
        var mother = preparent.find("[data-pos='" + val + "']");
        if (key === 0 && mother.length === 0) {
            mother = preparent.find(".dPage");
        }
        if (mother.length === 1) {
            mother[0].head = val;
            $(mother).attr("data-pos", val);
            $('#contextMenu .context a.first').text('Copy to Tab ' + val);
        }
        var parent = preparent.find("[data-pos='" + val + "']").children('table');
        
        if (parent.length === 0) {
            var tmp = new emosWS.AddSubTab(preparent.children('.diasubtabs'), val, tempText);
            parent = preparent.find("[data-pos='" + val + "']").children('table');

        }
        
        if(tempText !== ''){  
            var myChecked = '';
            var myText = '';
            var visiClass = (userloggedin) ? 'showme' : 'hideme';
            if(tempText === 'Public'){
                myText = emosWS.isAdmin() ? 'published' : 'privatize';
                myChecked = emosWS.isAdmin();          
            } else {
                visiClass = !emosWS.isAdmin() ? 'hideme' : 'showme';
                myText = emosWS.isAdmin() ? 'publish' : 'privatized';
                myChecked = !emosWS.isAdmin();
            }
            
            preparent.find("[data-pos='" + val + "']").find('.publishcheck').removeClass('hideme').addClass(visiClass);
            preparent.find("[data-pos='" + val + "']").find('.publishcheck input').prop('checked', checkMe);//myChecked
            preparent.find("[data-pos='" + val + "']").find('.publishcheck input').val(val);
            preparent.find("[data-pos='" + val + "']").find('.publishcheck span').text(myText);
            
        }
        var myPrivOverlay = false;
        if(preparent.closest('.diagnose').hasClass('privateOverlay')){
            myPrivOverlay = true;
        }
        $.each(Object.keys(tabsToLoad[val]), function (key1, val1) {  
            new emosWS.AddDataToSubTab(parent, tabsToLoad[val][val1].data, tabsToLoad[val][val1].myPLC, tabsToLoad[val][val1].myKey, tabsToLoad[val][val1].writable, val1, myPrivOverlay, key1);
        });
    });
    
    setTimeout(function () {
        if($(preparent).closest('.diagnose').find('.DiagnoseBody')[0].msg && $(preparent).closest('.diagnose').find('.DiagnoseBody')[0].msg.actTab){  
            $(preparent).closest('.diagnose').find('.DiagnosisPageControl.diatabs').tabs({active: $(preparent).closest('.diagnose').find('.DiagnoseBody')[0].msg.actTab});
            
            if($(preparent).closest('.diagnose').find('.DiagnoseBody')[0].msg.actTab > 2){
                scrolltabs(document.querySelector('.scrollTabs'));
            }
        }
        buildHeader($(preparent).closest('.diagnose').find('.DiagnosisPageBlank:visible'));
        
    },800);
    preparent.closest('.windowHolder').find('.showPrivate').attr('data-value', buttonText.replace('show ', '')).text(buttonText);
    preparent.prevAll('.pager').find('.showPrivate').attr('data-value', buttonText.replace('show ', '')).text(buttonText);
    $('.diagnose.privateOverlay .privTable .tBody').sortable({ 
        items: 'tr.dragbox',
        delay: 200,
        sort: function(e) {
            if(e.originalEvent.pageX <= 230){
                if($('#alarmpage .DiagnosisFooter.private .scrollLeft.active').length === 0){
                    return;
                } else {
                    scrollPrivLeftRight(e, 'left');
                }
            } else if(e.originalEvent.pageX >= 1850) {
                if($('#alarmpage .DiagnosisFooter.private .scrollRight.active').length === 0){
                    return;
                } else {
                    scrollPrivLeftRight(e, 'right');
                }
            }
        },
        change: function(event, ui) {
            ui.placeholder.css({border : '4px solid red'});
          },
        connectWith: '.diagnose.privateOverlay .privTable .tBody',
        start: function(e, ui){
            ui.item.data('start_node', ui.item[0].parentNode);
            ui.item.data('start_pos', ui.item.index());
            $('.DiagnosisContent').css('overflow', 'unset');
            $('.dPage').css('overflow', 'unset');
        },
        stop: function( e, ui ) {
            var startNode = ui.item.data('start_node');
            var endNode = ui.item[0].parentNode;
            var startPos = ui.item.data('start_pos');
            var endPos = ui.item.index();
            if(endNode !== startNode || endPos !== startPos){
                $(startNode).closest('.dPage').find('input.privatecheckbox').prop('checked', false);
                $(endNode).closest('.dPage').find('input.privatecheckbox').prop('checked', false);
                savePrivateTabs();
            } 
            $('.DiagnosisContent').css('overflow', 'hidden');
            $('.dPage').css('overflow', 'hidden');
//            $('.detailPrivate .radiobox').find("input:radio[value='public']").prop('checked', true);
//            savePrivateTabs();
        }
    });
    if(!userloggedin){
        $('.diagnose.privateOverlay .privTable .tBody').sortable('disable');
    } 
    $('.diagnose.privateOverlay .privTable .tBody').disableSelection();
}
function savePrivateTabs(){
    var myTabs = {};
    $.each($('.diagnose.privateOverlay .DiagnoseBody'), function(key, val){
        myTabs[$(val)[0].msg.myCounter] = [];        
        var elements = $(val).find('.dragbox');
        $.each(elements, function(key1, val1){           
            var obj = {};
            obj['data'] = $(val1)[0].myData;
            obj['myKey'] = $(val1)[0].myKey;
            obj['myPLC'] = $(val1)[0].myPLC;
            myTabs[$(val)[0].msg.myCounter].push(obj);
        });
    });
    
    privateResults.tabs = myTabs;
    emosWS.writeData(writeConfig + 'users/' + myName + ".json", JSON.stringify(privateResults, null, " "));
}
function getPrivateTabFooter(){
    var privateFooter = '<div class="DiagnosisFooter private"><span class="footerHead"></span><span id="EMOSUI297" class="scrollLeft"></span><span class="scrollRight"></span></div>';
    $('#alarmpage').addClass('special').append(privateFooter);
    var waytofooter = $('#alarmpage').find('.DiagnosisFooter.private');
    var waytofooterhead = waytofooter.children('.footerHead');
    waytofooterhead.children('.circle').remove();
    waytofooterhead.removeClass('sub');
    waytofooter.children('.scrollLeft').removeClass('active');
    waytofooter.children('.scrollRight').removeClass('active');
    waytofooter.find('#subTabMenu').remove();
    setTimeout(function () {
        $.each($('#alarmpage .windowHolder .privateOverlay'), function(key, val){
            waytofooterhead.append('<span class="circle c' + key + '"><span class="circlenum">' + (key + 1) + '</span></span>');
            if($(this).offset().left >= 182 && $(this).offset().left <= $(this).parent().offset().left + $(this).parent()[0].clientWidth - 410){
                waytofooterhead.children('.circle').eq(key).addClass('big');
            }
            i++;
        });
        if(waytofooterhead.find('.big').last().index() + 1 < waytofooterhead.children('.circle').length){
            waytofooter.children('.scrollRight').addClass('active');
        }         
    }, 400);
}
function scrollPrivLeftRight(e, direction){  
    var element;
    if($(e.target).hasClass('tBody')){
        element = $(e.target).closest('.windowHolder');
        if (element.is(':animated'))
            return false;
    } else {
        element = $(e.target).closest('.DiagnosisFooter').prevAll('#alarmpage_content').find('.windowHolder');
        if (element.is(':animated') || !$(e.target).hasClass('active'))
            return false;
    }
    
    var distance = element.position().left -343;
    if(direction === 'left'){
        distance = element.position().left +343;
    }
    var waytofooter = $('#alarmpage').find('.DiagnosisFooter.private');
    var waytofooterhead = waytofooter.children('.footerHead');        
    element.animate({
        'left': distance //-397            
    }, function () {
        waytofooterhead.children('.circle').removeClass('big');    
        $.each($('#alarmpage .windowHolder .privateOverlay'), function(key, val){
            if($(this).offset().left >= 182 && $(this).offset().left <= $(this).parent().offset().left + $(this).parent()[0].clientWidth - 110){
                waytofooterhead.children('.circle').eq(key).addClass('big');
            }
        });
        if(waytofooterhead.find('.big').last().index() + 1 < waytofooterhead.children('.circle').length){
            waytofooter.children('.scrollRight').addClass('active');
        } else {
            waytofooter.children('.scrollRight').removeClass('active');
        }
        if(direction === 'right' && waytofooterhead.children('.circle').index(waytofooterhead.find('.big:first-child')) <= 0 || direction === 'left' && waytofooterhead.find('.big').first().index() > 0) {
            waytofooter.children('.scrollLeft').addClass('active');
        } else {
            waytofooter.children('.scrollLeft').removeClass('active');
        }
        $('.diagnose.privateOverlay .privTable .tBody').sortable('refresh');
    });
}
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
        if($(e.target).hasClass('pagerHeadLine')){
            return;
        } else {
            self = $('.savebutton:visible');
        }
        
    } else {
        self = $(this);
    }
    var myPLC;
    if (self.hasClass('second')) {
        myPLC = self.closest('.DiagnoseBody')[0].msg.PLC + self.closest('.DiagnoseBody')[0].msg.Tag + '.' + self.closest('div.parentsbox')[0].myData.OPCID2;
    } else {
        myPLC = self.closest('.DiagnoseBody')[0].msg.PLC + self.closest('.DiagnoseBody')[0].msg.Tag + '.' + self.closest('div.parentsbox')[0].myData.OPCID;
    }
    
    //Get poke function (onpoke) from element
    var onpoke = self.closest('div.parentsbox')[0].poke;
    var value = self.closest('.parentsbox').find('.preview').val().replace(',', '.');
    
    //If element has poke (onpoke), use it, otherwise use emos poke instead
    if (onpoke) {
	onpoke(value);
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
function loadIframe(e, alarmheader) { 
//    $('.ball, .ball1').show(); falls noch benötigt
    var appNumx = $('.cats.active p').attr("data-num");
    $('.diagnose').remove();
    clearMyInterval();
    terminateActiveAlarmClient();
    var iframelink;
    var tmpText;
    var myUrl;
    var addAnimationsJobs = [];
    if (alarmheader) {
        $('#center').empty();
        $('#center').append('<div class="frameWrapper"></div>');
        $('#quickcontrol').empty();
        animateOff(".alarmpage", ".alarmpage", "#alarms");
        setTimeout(function () {
            $('#precenter').hide();
        }, 400);

        filenames = [];
        breadparts = [];
        breadurls = [];
        breadalarmgroup = [];
        linklist = [];

        var myRoot = window.location.href.match(/^.*\//);
        var iframelink = myRoot + e.getAttribute('data-link');
        var splitFile = iframelink.split("/");
        var filename = splitFile[splitFile.length - 1];
        var idname = filename.slice(0, -4);
        filename = idname.replace(/\_/g, " ");
        filenames.push(filename);
        
        breadurls.push(iframelink);
        breadparts.push("<li id='" + idname + "' class='bread_li' data-link='" + filename + "'>" + filename + "</li>");
        linklist[idname] = [];
        $('<iframe id="plants" name="plants" src="' + e.getAttribute('data-link') + '">').appendTo('.frameWrapper');
        emosWS.addEventListener("OpenDiagnosisWindow", onOpenDiagnosisWindow);
        if(!results || results.sidebuttons[appNumx].name !== 'Diagnosis'){
            $('#plants').load(function () { 
                emosWS.addEventListener("SiteProperties", onSiteProperties);
                setTimeout(function () {
                    $('#breadcrump li.bread_li:first-child').text($(e)[0].target.innerText);
                }, 800);
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
            $('.frameWrapper').addClass('diagnosiscontainer');
        }
        
        
//        $('#alarmheader').empty();
//        buildAlarmHeader(appNumx, $('.cats.active p').text(), addAnimationsJobs);
    } else {
        iframelink = $('#plants').contents().get(0).URL;
        var filename = iframelink.substring(iframelink.lastIndexOf('/') + 1);
        myUrl = iframelink.replace(filename, '');
        tmpText = e.target.getAttribute('data-link').replace('./', '');
        var myText = myUrl + tmpText;
        $('#plants').attr('src', myText);
    }
}


function onSiteProperties(msg, e) {  
//    $('.ball, .ball1').show(); falls noch benötigt
    $('.diagnose').remove();
    var myMsg = {
        type: "OpenDiagnosisWindow",
        "DiagnosisLibID": "1",
        "PLC": (msg.AckALM && msg.AckALM.AlarmGroups && msg.AckALM.AlarmGroups.length > 0) ? msg.AckALM.AlarmGroups : '0',
        "Tag": "",
        "DiagnosisControl": '',
        "GroupRightIndex": "0",
        "id": ""
    };
    myMsg.additionalClass = 'statusWelcome' + (bShowSummary ? ' act' : '');
    myMsg.myCounter = 0;
    myMsg.data = {
        'windowData': {
            "PageControl": {
                "1000004-AddPageTab": {
                    "Text": "Chronology",
                    "TextID": "T04_Chronology",
                    "1000003-ChronologyHistory": {
                    }
                },
                "1000006-Messages": {
                    "1000005-AlarmClient": {
                        "TextID": "Messages"
                    }
                }
            }
        }

    };

    var onReady = function () {
        $('.DiagnosisPageControl .placeholderBtn').addClass('noAction');
        $('.DiagnosisPageBlank.dPage.Chronology').css('display', 'none');
        $('.DiagnosisPageBlank.dPage.Messages').css('display', 'block');
        $('.DiagnosisPageControl.diatabs').tabs({active: 1}); 
        var pageId = $('.diagnose.statusWelcome').find('.DiagnosisPageBlank:visible');
//        showScroll(pageId);
        getPrivateTabs($('#' + this.myid).find('.DiagnosisPageBlank.Private'));
        //getPrivateTabs($('.diagnose.statusWelcome').find('.DiagnosisPageBlank.Private'));
        buildHeader(pageId);
        listen_again();
//        setTimeout(function () {
//            $('.ball, .ball1').hide();
//        }, 5000); falls noch benötigt
        
    };
   

    var onAlarmReady = function () {  
        if($('.DiagnosisPageBlank.dPage.Messages:visible').length > 0){
            $('.DiagnosisPageControl .placeholderBtn').addClass('noAction');
            $('.DiagnosisPageControl.diatabs').tabs({active: 1});  
            $('.DiagnosisPageBlank.Messages .DiagnosisAlarmClient .quit').css('display','inline-block');
        }
        var pageId = $('.diagnose.statusWelcome').find('.DiagnosisPageBlank:visible');
        showScroll(pageId);
        buildHeader(pageId);
//        $('.ball, .ball1').hide(); falls noch benötigt
    };
    
    
    clearMyInterval();
    terminateActiveAlarmClient();
    if (msg) {
        new emosWS.HTMLDiagnosisWindow(myMsg, onReady, onAlarmReady);
        var iframelink = $('#plants').contents().get(0).URL;
        var textID = $('#plants')[0].getAttribute('textid');
        var plc = $('#plants')[0].getAttribute('plc');
        var text = $('#plants')[0].getAttribute('title') ? $('#plants')[0].getAttribute('title') : "";
        var filename = iframelink.substring(iframelink.lastIndexOf('/') + 1);
        var idname = filename.split('.htm')[0];
        filename = (filename.slice(0, -4)).replace(/\_/g, " ");
        if (msg.BreadcrumbLevel === breadparts.length - 1) {
            var delLinklist = filenames[msg.BreadcrumbLevel].replace(/\ /g, '_');
            breadparts.splice(msg.BreadcrumbLevel);
            breadurls.splice(msg.BreadcrumbLevel);
            filenames.splice(msg.BreadcrumbLevel);
            breadalarmgroup.splice(msg.BreadcrumbLevel);
//            if(msg.BreadcrumbLevel === 0){
//                var tmp = linklist[delLinklist];
//                linklist = [];
//                linklist = tmp;
//            }
//            delete linklist[delLinklist];
//            $('.breadoverlayParent').remove();
        }
        
        if (jQuery.inArray(filename, filenames) === -1) {
            filenames.push(filename);
            breadurls.push(iframelink);
            breadalarmgroup.push(msg.AckALM.AlarmGroups);
            if(breadparts.length === 0){
                var callbackText;
                var breadcrumpName = msg.BreadcrumbText ? msg.BreadcrumbText : text;
                breadparts.push("<li id='" + idname + "' class='bread_li' data-link='" + filename + "'>" + breadcrumpName + "</li>");
                if(textID){
                    emosWS.sendAdviseText(textID, "name", callbackText = function (msg) {
                        $('#' + idname).text(msg.value);
                    });
                    $('#' + idname).on("remove", function () {
                        emosWS.unadvise(textID + ".name.Text", callbackText);
                    });
                }
            } else {
                var breadcrumpName = msg.BreadcrumbText ? msg.BreadcrumbText : filename.split('.htm')[0];
                breadparts.push("<li id='" + idname + "' class='bread_li' data-link='" + filename + "'>" + breadcrumpName + "</li>");
                
                if (msg.BreadcrumbTextID){
                    var callbackText;
                    emosWS.sendAdviseText(msg.BreadcrumbTextID, "name", callbackText = function (msg) {
                        $('#' + idname).text(msg.value);
                    });
                    
                    $('#' + idname).on("remove", function () {
                        emosWS.unadvise(msg.BreadcrumbTextID + ".name.Text", callbackText);
                    });
                }            
            }
            
        }
        
    
        $('#breadcrump').empty();
        $('#quickcontrol').empty();
        ulMaker('bread', breadparts, '#breadcrump');
        if ($('#bread li').length === 1) {
            $('#bread li').addClass('firstLast');
        }
        linklist[idname] = [];
        $.each(msg.Links, function (key, val) {
            var val1 = val.substring(val.lastIndexOf('/') + 1);
            val1 = (val1.slice(0, -4)).replace(/\_/g, " ");
            linklist[idname].push("<li class='breadoverlay_li' data-link='" + val + "'>" + val1 + "</li>");
        });      
        
        $.each(breadparts, function(key, val){
            new emosWS.HTMLFaultWarning({
                "id": $(val).attr('id'),
                "alarmGroup": breadalarmgroup[key]
            });
        });
        var i = 0;
        setTimeout(function () {
            for (var key in linklist) {
                if (jQuery.inArray(key.replace(/\_/g, " "), filenames) > -1 && linklist[key].length > 0) {
                    console.log(key)
                    console.log($('#' + key))
                    $("<div/>",{
                        "id": "breadoverlayParent" + i,
                        "class": "breadoverlayParent"
                    }).appendTo('#' + key);
                    ulMaker('breadoverlay' + i, linklist[key], '#breadoverlayParent' + i);
                    $('#breadoverlay' + i).addClass(key + ' crumbOL');
                    var parentWidth = $('#breadoverlay' + i).width() - 15;
                    $('#breadoverlayParent' + i).width(parentWidth + 30);
                    var footer = $('<div class="smallFooter" style="width:'+ parentWidth +'px"><span class="scrollUp"></span><span class="scrollDown active"></span></div>');
                    footer.appendTo($('#breadoverlay' + i));
                    i++;
                }            
            }           
        }, 800);
//        for (var key in linklist) {
//            if (jQuery.inArray(key.replace(/\_/g, " "), filenames) > -1 && linklist[key].length > 0) {
//                console.log(key)
//                console.log($('#' + key))
//                $("<div/>",{
//                    "id": "breadoverlayParent" + i,
//                    "class": "breadoverlayParent"
//                }).appendTo('#' + key);
//                ulMaker('breadoverlay' + i, linklist[key], '#breadoverlayParent' + i);
//                $('#breadoverlay' + i).addClass(key + ' crumbOL');
//                var parentWidth = $('#breadoverlay' + i).width() - 15;
//                $('#breadoverlayParent' + i).width(parentWidth + 30);
//                var footer = $('<div class="smallFooter" style="width:'+ parentWidth +'px"><span class="scrollUp"></span><span class="scrollDown active"></span></div>');
//                footer.appendTo($('#breadoverlay' + i));
//                i++;
//            }            
//        }
        if(msg.Trends !== '' && msg.Trends.length > 0 || globals.hideTrendButton === "unchecked"){     
            var trendplcs = msg.Trends;
            $("<span/>", {
                "class": "emosbutton trends",
                "id": "trends",
                click: function () {                    
                    $('.modal').show();
                    if (!$(this).hasClass('active')) {
                        $("<div/>", {
                            "class": "trendOverlay",
                            "id": "trendOverlay"
                        }).appendTo('#quickcontrol');
                        addTrendPage($('#trendOverlay'), trendplcs, true, (trendplcs === "" || trendplcs.length === 0) ? plc : null);
                        setTimeout(function () {
                            $('.trendOverlay').addClass('full');
                        }, 10);
                        $(this).addClass('active');
                        $(this).removeClass('emosbutton');
                    } else {
                        $('.modal').hide();
                        $('.trendOverlay').removeClass('full');                            
                        setTimeout(function () {
                            $('.trendOverlay').remove();
                            $('#trends').addClass('emosbutton').removeClass('active');
                        }, 400);
                    }

                }
            }).appendTo('#quickcontrol');
        }
        if (msg.QuitALM && msg.QuitALM.PlcTag.length > 0) {
            quitSecurity = msg.QuitALM.Security;
            var plctags = msg.QuitALM.PlcTag;
            var plcName;
            if(msg.QuitALM.PlcName) {
                plcName = msg.QuitALM.PlcName;
            } else {
                plcName = msg.QuitALM.PlcTag;
            }

            var quitId = getId();
            $("<span/>", {
                "class": "emosbutton reset ",
                "id": "reset",
                click: function () {
                    if (!$(this).hasClass('noAction') && plctags.length === 1) {
                        emosWS.poke(plctags[0], -1); //ändern
                    }
                }
            }).appendTo('#quickcontrol');
            $("<span/>", {
                "class": '',
                "id": quitId
            }).appendTo('#reset');

            if(plctags.length > 1){
                $('#reset').addClass('multi');
                $('<ul/>', {
                    "class": "overlay",
                    "id": "quitAlmOverlay"
                }).appendTo('#quickcontrol');
                $.each(plctags, function (key, val) {
                    var quitId1 = getId();
                    var liElement = $('<li/>', {
                        "class": "overlayElement breadoverlay_li",
                        "id": quitId1,
                        "text": (plcName[key]) ? plcName[key] : val,
                        click: function () {
                            emosWS.poke(val, -1);
                        } 
                    }).appendTo('#quitAlmOverlay');
                    emosWS.advise(val, function () {
                        new emosWS.HTMLSwap({
                            "id": quitId1,
                            "plctag": val,
                            "falseBlinking": false
                        });
                    }, "", emosWS.tagType.IO);
                    getText(plcName[key], liElement);
                });
            } else {
                emosWS.advise(plctags[0], function () {
                    new emosWS.HTMLSwap({
                        "id": quitId,
                        "plctag": plctags[0],
                        "falseBlinking": false
                    });
                }, "", emosWS.tagType.IO);
            }
        }

        if (msg.AckALM && msg.AckALM.AlarmGroups.length > 0) {
            almSecurity = msg.AckALM.Security;
            var alarmgroups = msg.AckALM.AlarmGroups;
            var alarmname;
            if(msg.AckALM.AlarmName) {
                alarmname = msg.AckALM.AlarmName;
            } else {
                alarmname = msg.AckALM.AlarmGroups;
            }
            
            var alarmId2 = getId();
            $("<span/>", {
                "class": "emosbutton quit ",
                "id": "quit",
                click: function () {
                    if (!$(this).hasClass('noAction') && alarmgroups.length === 1) {
                        emosWS.poke(alarmgroups[0] + '.Alarm', -1);
                    }
                }
            }).appendTo('#quickcontrol');

            $("<span/>", {
                "class": "",
                "id": "quit_alarm"
            }).appendTo('#quit');

            if(alarmgroups.length > 1){
                $('#quit').addClass('multi');
                $('<ul/>', {
                    "class": "overlay",
                    "id": "ackAlmOverlay"
                }).appendTo('#quickcontrol');
                $.each(alarmgroups, function (key, val) {
                    var quitId21 = getId();
                    var liElement = $('<li/>', {
                        "class": "overlayElement breadoverlay_li",
                        "id": quitId21,
                        "text": (alarmname[key]) ? alarmname[key] : val,
                        click: function () {
                            emosWS.poke(val + '.Alarm', -1);
                        } 
                    }).appendTo('#ackAlmOverlay');
                    emosWS.advise(val, function () {
                        new emosWS.HTMLFaultWarning({
                            "id": quitId21,
                            "alarmGroup": val
                        });
                    }, "", emosWS.tagType.Alarm);
                    getText(alarmname[key], liElement);
                });  

                new emosWS.HTMLFaultWarning({
                    "id": 'quit_alarm',
                    "alarmGroup": alarmgroups
                });
            } 
        }
        activateButton();
        var pageId;
        pageId = $('.diagnose.statusWelcome').find('.DiagnosisPageBlank:visible');
        msg = "";
    }
    
}
function activateButton(){
    if(userRights){
        quitURight = userRights[quitSecurity.Plant + '_ur'].charAt(parseInt(quitSecurity.UserRF));
        quitGRight = userRights[quitSecurity.Plant + '_gr'].charAt(parseInt(quitSecurity.GroupRF));
        almURight = userRights[almSecurity.Plant + '_ur'].charAt(parseInt(almSecurity.UserRF));
        almGRight = userRights[almSecurity.Plant + '_gr'].charAt(parseInt(almSecurity.GroupRF));
    } else {
        quitURight = quitGRight = almURight =  almGRight = "0";
    }
    if (quitURight !== '1' && quitGRight !== '1') {
        $('#quickcontrol .reset').addClass('noAction');
    } else {
        $('#quickcontrol .reset').removeClass('noAction');
    }

    if (almURight !== '1' && almGRight !== '1') {
        $('#quickcontrol .quit').addClass('noAction');
        $('.DiagnosisAlarmClient .quit').addClass('noAction');
    } else {
        $('#quickcontrol .quit').removeClass('noAction');
        $('.DiagnosisAlarmClient .quit').removeClass('noAction');
    }      
}
function terminateActiveAlarmClient() {
    if (activeAlarmClient) {
        try {
            activeAlarmClient.terminate();
        } catch (e) {
        }
    }
}

function addTrendPage(parent, myPlc, showControl, loadSetPlc) {
    try {
        var id = "TrendPageContainer";
        var body = $("<div class='TrendPageElement' id='" + id + "'></div>");
        body.appendTo(parent);
        trendPage = new emosWS.TrendPage({
            'uiID': id,
            'data': [
                //[
                    myPlc
                //]
            ],
            'setting': {
                'showControl': showControl
            }
        });
        
        var dateInterval = new Date() - new Date(localStorage.getItem('TimeRangeLastDate'));
        
        if (loadSetPlc && loadSetPlc !== null){
            emosWS.trendFileREST.getInfo(function (data) {
                try {
                    var set;
                    for (var i = 0; i < data.sets.length; i++){
                        if (loadSetPlc === data.sets[i].title){
                            set = data.sets[i];
                            break;
                        }
                    }
                    
                    if (set) {
                        trendPage.selectedSetFromDialog = set;
                        trendPage.loadFiles();
                    } else if (dateInterval > 600000 || (!localStorage.getItem('TimeRangeFrom') || !localStorage.getItem('TimeRangeTo'))) {
                        trendPage.generalOptionsOpen();
                        $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
                        $("#GeneralOptions").addClass("ui-tabs-active");
                        $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');

                        $('.fromToButton').addClass('active');
                        trendPage.createOverlaySetDateTime();
                        $(".modalBg").fadeIn();
                        $("#setTime").show();
                        trendPage.hideBridges();
                        $(".overlayBridgeGraphs.set1").show();
                    } else {
                        trendPage.createOverlayLoad();
                        $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
                        $('.fileManager .emosbutton.load').addClass('active');
                        $(".modalBg").fadeIn();
                        $("#loadOverlay").show();
                        trendPage.prepareOverlayOpenSets();
                    }
                    
                } catch (e) {
                    console.error('getInfo failed: ' + e);
                }
            }.bind(this));
        } else if(dateInterval > 600000 || (!localStorage.getItem('TimeRangeFrom') || !localStorage.getItem('TimeRangeTo'))){
            trendPage.generalOptionsOpen();
            $(".operationHeader ul li.ui-tabs-active").removeClass("ui-tabs-active");
            $("#GeneralOptions").addClass("ui-tabs-active");
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
   
            $('.fromToButton').addClass('active');
            trendPage.createOverlaySetDateTime();
            $(".modalBg").fadeIn();
            $("#setTime").show();
            trendPage.hideBridges();
            $(".overlayBridgeGraphs.set1").show();
        } else if(parent.attr('id') !== 'trendOverlay'){
            trendPage.createOverlayLoad();
            $('#quickcontrol .diagnose .emosbutton, .alarmDetails .diagnose .emosbutton').removeClass('active');
            $('.fileManager .emosbutton.load').addClass('active');
            $(".modalBg").fadeIn();
            $("#loadOverlay").show();
            trendPage.prepareOverlayOpenSets();
        }
        
    } catch (e) {
        console.error(e);
    }

}
var myAlarmList;
// to build the Filterlist of the alarmgroups   //wird nicht mehr benötigt
/*function buildAlarmList() {
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
    };
    myList.appendTo(s);
    s.appendTo('#alarmpage_content');

}*/
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
    $('#alarmpage_content').removeClass('alarmList');
    $(self).parent().addClass('active');
}

function listen_again() {
    var all = document.querySelectorAll(".dPage, .crumbOL, #cars, .detailTable, #alarmpage_content");
    for (i = 0; i < all.length; i++) {
        all[i].onscroll = scrollfunc;
    }
}
function showReportOverlay () {
    if(privateResults && privateResults.plants){
        var mylist = privateResults.plants;
    }
    var operationRights;
    if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Process'){
        operationRights = CheckUserRight( "psa_ur", 9 );
    } else if(results.sidebuttons[$('.cats.active p').attr('data-num')].name === 'Conveyor'){
        operationRights = CheckUserRight( "act_ur", 9 );
    }     
    if(!operationRights) {
        $('.alarm_solo .emosbutton:not(.firsttile)').addClass('disabled');
    } else {
        $('.alarm_solo .emosbutton:not(.firsttile)').removeClass('disabled');
    }
    var boxchecked = false;
    $('#precenter').show();
    $(".alarmpage").addClass('block').show().animate({
        height: "100%"
    }, 600, function () {
        $.each($('#alarmpage_content ul'), function () {
            $(this).find("li input").prop('checked', false);
            if ($(this).position().top >= $('#alarmpage').height() - 170) {
                $(this).css('opacity', 0.5);
                $('#alarmpage .scrollUp, #alarmpage .scrollDown').show();
                $('#alarmpage .scrollDown').addClass('active');                
            }
            
            if(mylist) {
                if(jQuery.inArray( $(this).find('.tilename').attr('data-name'), mylist) !== -1){
                    $(this).find('.tilename').addClass('isFav');
                    $(this).find("li input").prop('checked', true);
                    boxchecked = true;
                }                          
            } else {
                $(this).find("li input").prop('checked', false); // alle Anlagen auf unchecked, vorher true
            }

        });
        $('#alarmheaderDetails').removeClass('disabled');
        if (results.sidebuttons[$('.cats.active p').attr('data-num')].iconclass === "conveyor"){
            $('ul.alarm_solo').css('float', 'none');
            getDetailsOverlay(results.sidebuttons[$('.cats.active p').attr('data-num')].alarm);
        } else if (!privateResults && $('#alarmpage_content ul').length <= 3) {
            $('ul.alarm_solo').css('float', 'none');
            $("ul.alarm_solo li input").prop('checked', true);
            getDetailsOverlay();
        } else if(privateResults && privateResults.plants && boxchecked === true){
            $('ul.alarm_solo').css('float', 'none');
            getDetailsOverlay();
        } 
        showScroll($('#alarmpage_content'));
    });
    myAlarmList = emosWS.getAlarmList();
    event.stopPropagation();
}
function showSingleOverlay(dataname, dataurl){
    var myHigh;
    if(dataname === 'conveyor' || dataname === 'stationVisionSys' || dataname === 'safety' ){
        myHigh = '300';
    } else if(dataname === 'connection') {
        myHigh = '700';
    } else {
        myHigh = '100%';
    }
    $('#alarmpage_content iframe').remove();
    $('<iframe class="plants" name="plants" src="' + dataurl + '">').appendTo('#alarmpage_content');
    $('#precenter').show();
    $(".alarmpage").addClass(dataname).show().animate({
        height: myHigh
    }, 600);
   
}

function checkAPTPattern (text){
    
    var bMusterSPS = text.indexOf("DB") !== -1 ? true : false;
    var bMusterRPC = text.indexOf("R") !== -1 ? true : false;
    
    if (bMusterSPS){
        var start = text.indexOf("DB") + 2;
        var second = text.indexOf(".DBX");
        var space = text.indexOf(" ", second);
  
        var subtext = isNumber(text.substring(start, second));
    
        if ((second - start) === 3 & subtext & space !== -1)
            return text.substring(start - 2, space);
    } else if (bMusterRPC){
        var start = text.indexOf("R");
        var firstNo = start - 4;
        var secondNo = start + 7;
    
        var first = isNumber(text.substring(firstNo, start));
        var second = isNumber(text.substring(start + 1, secondNo));
    
        if (start !== -1 && first && second)
            return text.substring(firstNo, secondNo);
    }
    return;     
}

function isNumber(num) {
    
  return (typeof num === 'string' || typeof num === 'number') && !isNaN(num - 0) && num !== '';
};

function showAlarmIDinConfig (target, motherObj){
    
    var bAPTanimation = $(target).hasClass('APTanimation active');
    var textToSave = $(target).attr('data-value');
                
    var textToShow = $(target).text();
    var classNameText = $(target).text();
    var plcList;
    var showDropdownName = "Auto_IsOn";
    var dropdownNameRPC = "";
        
    if (bAPTanimation){
        textToSave = "aptanimation";
        textToShow = "animation";
        classNameText = "APTanimation";
        plcList = $.getPLCdataAPT();
        showDropdownName = Object.keys(plcList)[0];
        dropdownNameRPC = Object.keys(plcList)[0];
        var plcdropdown = $(target).closest('.inputGroup').nextAll().find('[name=plc]');
        plcdropdown.removeClass('disabled');
        plcdropdown.next('.buttonEdit').removeClass('disabled');
        var rpcdropdown = $(target).closest('.inputGroup').nextAll().find('[name=rpc]');
        rpcdropdown.removeClass('disabled');
        rpcdropdown.next('.buttonEdit').removeClass('disabled');
        $(target).closest('.inputGroup').nextAll().find('[data-name=alarm_id_rpc]').prev().removeClass('disabled');
    } else {
        plcurl = 'DGOS_4.x_Process.';
        plcList = $.getPLCdata();
        var plcdropdown = $(target).closest('.inputGroup').nextAll().find('[name=plc]');
        plcdropdown.addClass('disabled');
        plcdropdown.next('.buttonEdit').addClass('disabled');
        var rpcdropdown = $(target).closest('.inputGroup').nextAll().find('[name=rpc]');
        rpcdropdown.addClass('disabled');
        rpcdropdown.next('.buttonEdit').addClass('disabled');
        $(target).closest('.inputGroup').nextAll().find('[data-name=alarm_id_rpc]').prev().addClass('disabled');
    }
        
    $(target).parent().prev().find('span').addClass(classNameText).text(textToShow);
    motherObj[0].myObj[$(target).parent().attr('data-name')] = textToSave;
    motherObj[0].myObj["alarm_id"] = showDropdownName;
    motherObj[0].myObj["alarm_id_rpc"] = dropdownNameRPC;
    var dropdown = $(target).closest('.inputGroup').nextAll().find('[data-name=alarm_id]');
    dropdown.prev('.dropdown').removeClass('disabled');
    dropdown.empty();
    var sideno = $(target).closest('.newSidebutton').attr('data-num');
    var datnr = $(target).closest('.newAlarmbutton').prev().find('.buttonEdit').attr('data-num');
                
    if (!datnr)
        datnr = 0;
                
    $.each(plcList, function (key) { 
        var tmp_sel = (key === appResults.sidebuttons[sideno].alarm_buttons[datnr].alarm_id) ? 'active' : '';
        if (tmp_sel !== "")
            dropdown.prev('.dropdown').find('span').text(key);
        $(dropdown).append('<li class="'+ tmp_sel +'" data-value="'+ key +'">'+ key.replace(/\_/g, " ") +'</li>');
    });
                
    if (!bAPTanimation){
        var tmp_sel1;
        var tmp_sel2;
        if(appResults.sidebuttons[sideno].alarm_buttons[datnr].alarm_id === 'alarmsecurity'){
            tmp_sel1 = 'active';
        } else if(appResults.sidebuttons[sideno].alarm_buttons[datnr].alarm_id === 'alarmgroup') {
            tmp_sel2 = 'active';
        }
        $(dropdown).append('<li class="'+ tmp_sel1 +'" data-value="alarmsecurity">alarmsecurity</li>');
        $(dropdown).append('<li class="'+ tmp_sel2 +'" data-value="alarmgroup">alarmgroup</li>');
    }
}

function changeStatusTag (tmpalarm, id, isStatusTag, rpcalarm, alarm){
    
    if (isStatusTag){
        
        emosWS.advise(rpcalarm + alarm, function (msg){
            
            if (parseInt(msg.value) !== 0){
                $('#' + id).parent().removeClass().addClass('emosbutton ghost singlebutton statusTag');
            } else {
                emosWS.advise(tmpalarm, function (msg){
                    var classIcon = "";
                    switch(parseInt(msg.value)){
                        case 4: 
                            classIcon = "automatic";
                            break;
                        case 8:
                            classIcon = "handMode";
                            break;
                        case 32:
                            classIcon = "cleaning";
                            break;
                        case 64:
                            classIcon = "maintenance";
                            break;
                    }
                        
                    $('#' + id).parent().removeClass().addClass('emosbutton ' + classIcon + ' singlebutton statusTag');
                        
                }, "", emosWS.tagType.IO);
            }
        }, "", emosWS.tagType.IO);
    } else {       
        for (var key in tmpalarm){
            emosWS.advise(key, function (msg){
                
                tmpalarm[msg.tag] = parseInt(msg.value);
                var classIcon = updateAlarmState(tmpalarm);
                $('#' + id).removeClass().addClass(classIcon);
                        
            }, "", emosWS.tagType.IO);
        }
    }
}

function updateAlarmState (alarmList){
    
    var value = 0;
    for (var key in alarmList){
        if (alarmList[key] === 4){
            value = 4;
            break
        } else if (alarmList[key] === 8){
            value = 8;
        } else if (alarmList[key] === 2 && value < 4){
            value = 2;
        }
    }
    
    var classIcon = "";
    switch(parseInt(value)){
        case 2: 
            classIcon = "fine";
            break;
        case 4:
            classIcon = "alert";
            break;
        case 8:
            classIcon = "warn";
            break;
    }
    return classIcon;
}

function getMaintenanceTable(self){
    
    var tableHead = "<table style='width: 100%; top: 0;' class='DiagnosisRestAlarmTableHead'>" +
                "<tr>" +
                "<th class='thTask'>Task</th>" +
                "<th class='thIcon'> </th>" + 
                "<th class='thIcon'> </th>" +
                "<th class='thLimit'>Limit</th>" +
                "<th class='thStatus'>Actual</th>" +
                "<th class='thProgress'>Status</th>" +
                "<th class='thStatus'>Rest</th>" +
                "<th class='thStatus'>Personnel</th>" +
                "<th class='thStatus'>Maintenance</th>" +
                "<th class='thStatus'>Acknowledge</th>" +
                "</tr></table>";
    $(tableHead).appendTo(self);
    
    var table = "<div class='detailTable' style='top:24px;'>" +
                "<div class='DiagnosisRestAlarmClient'>" +
                "<table id='maintenanceTable' style='width: 100%; top: 0;' class='DiagnosisRestAlarmTable Groupbox'>" +
                "<tr style='display:none;'>" +
                "<th class='thTask'>Task</th>" +
                "<th class='thIcon'> </th>" +
                "<th class='thIcon'> </th>" +
                "<th class='thLimit'>Limit</th>" +
                "<th class='thStatus'>Actual</th>" +
                "<th class='thProgress'>Status</th>" +
                "<th class='thStatus'>Rest</th>" +
                "<th class='thStatus'></th>" +
                "<th class='thStatus'></th>" +
                "<th class='thStatus'>Acknowledge</th>" +
                "</tr></table></div>" + 
                "</div>";
    $(table).appendTo(self); 
    
    if(!maintenanceList)
        maintenanceList = $.getMaintenanceList();
    
    $.each(maintenanceList.item, function (index, val) {
        
        var idRow;
        var tagEnding;
        var tagEndingLim;
        var index;
        
        switch (val.type){
            case "numerator":
                idRow = "row" + index;
                tagEnding = ".AA.I2000_OpCyc";
                tagEndingLim = ".AA.I2010_LimOpCyc";
                index = "counter";
                break;
            case "hours":
                idRow = "row" + index + "1";
                tagEnding = ".AA.I2001_OperTime";
                tagEndingLim = ".AA.I2011_LimOperTime";
                index = "clock";
                break;
            case "interval":
                idRow = "row" + index + "2";
                tagEnding = ".AA.I2020_PerMaint";
                tagEndingLim = ".AA.I2032_ResPerMaint";
                index = "interval";
                break;
        }
        
        emosWS.advise(val.tag + tagEnding, function (msg){
            if (msg.quality === 0)
                return;
            
            emosWS.advise(val.tag + tagEndingLim, function (msgLim){
                if (msgLim.quality === 0)
                    return;
                
                createMaintenanceRow(parseFloat(msgLim.value), parseFloat(msg.value), val, idRow, index);
            }, "", emosWS.tagType.IO);
        }, "", emosWS.tagType.IO);
    });
}

function createMaintenanceRow(msgASValue, msgAAValue, val, idRow, className){
    
    var valueProzent = (msgASValue === 0) ? 0 : Math.round(((100 * msgAAValue)/msgASValue) * 10) / 10;
    var backgroundClass = "Green";
    var backgroundColor = "";
    var difference = (msgASValue - msgAAValue) < 0 ? 0 : (msgASValue - msgAAValue);
    
    var unitAS = msgASValue;
    var unitAA = msgAAValue;
    var differenceValue = difference;
    if (className === "clock"){
        var dayAS = parseInt(msgASValue/168);
        var dayAA = parseInt(msgAAValue/168);
        var dayDif = parseInt(difference/168);
        unitAS = dayAS + "w " + parseInt((msgASValue - (dayAS*168))/24) + "d " + msgASValue%24 + "h";
        unitAA = dayAA + "w " + parseInt((msgAAValue - (dayAA*168))/24) + "d " + msgAAValue%24 + "h";
        differenceValue = dayDif + "w " + parseInt((difference - (dayDif*168))/24) + "d " + difference%24 + "h";
    } else if (className === "interval"){
        var limit = msgASValue + (msgAAValue * 3600000);
        var difNowToLim = parseInt((limit - Date.parse(new Date()))/3600000);
        var difStartToNow = parseInt(msgAAValue - difNowToLim);
        valueProzent = Math.round(((100 * difStartToNow) / msgAAValue) * 10) / 10;
        unitAA = (new Date(msgASValue)).toLocaleDateString();
        unitAS = (new Date(limit)).toLocaleDateString();
        var dayDif = parseInt(difNowToLim/168);
        differenceValue = dayDif + "w " + parseInt((difNowToLim - (dayDif*168))/24) + "d " + difNowToLim%24 + "h";
    }
    
    if (valueProzent > 100)
        valueProzent = 100;
    
    var color = "#FFFFFF";      
    if(valueProzent === 100){
        backgroundClass = "Red";
        backgroundColor = "#eccbcb";
    } else if (valueProzent >= 80){
        backgroundClass = "Yellow";
    } else if (valueProzent < 20){
        color = "#000000";
    }
    
    //var isAdmin = "";
    var isAdmin = emosWS.isAdmin() ? '' : 'disabled';
    var display = emosWS.isAdmin() ? 'block' : 'none';
    
    var tableTD = "<tr id='" + idRow + "' style='background:" + backgroundColor + ";'><td class='tdTask'><div class='maintenanceStatus'>" + 
                "<p style='padding-bottom:5px;'>"+ val.tag + "</p>" +
                "<p>"+ val.name + ": " + val.task + "</p>" +
                "</div></td>" + 
                "<td class='tdIcon'><div class='emosbutton maintenanceQRCode'></div>" + 
                "<td class='tdIcon icon' data='" + className + "'><div class='maintenanceStatus icon " + className + "'></div></td>" + 
                "<td class='tdLimit'><div class='maintenanceStatus align' style='width:auto;'>" + unitAS + "</div>" +
                "<span class='savemebutton emosbutton' style='margin-right:20px;'></span><span class='cancelbutton emosbutton'></span><span class='writebutton emosbutton' style='display:" + display + "; margin-right:20px;'>" + 
                "</span><div class='numpadMaintenance' style='display:none;'></div></td>" +
                "<td class='tdStatus actualValue' data='" + msgASValue + "'><div class='maintenanceStatus align'>" + unitAA + "</div></td>" +
                "<td class='tdProgress'><div class='maintenanceStatus' style='position: absolute; margin-top:4px;'>" +
                "<div class='maintenanceProgress'>" +
                "<div class='maintenanceBar maintenance" + backgroundClass + "' style='width:" + valueProzent + "%; color:" + color + "'>" +
                "<div class='maintenanceMarker'></div>" + 
                + valueProzent + "%</div></div></div></td>" + 
                "<td class='tdStatus'><div class='maintenanceStatus align'>" + differenceValue + "</div></td>" + 
                "<td class='tdStatus'><div class='maintenanceStatus align'>" + val.pindex + "</div>" + 
                "<td class='tdStatus'><div class='maintenanceStatus align'>" + val.mindex + "</div>" + 
                "<td class='tdStatus'><div class='emosbutton acknowledge " + isAdmin + "'></div></td></tr>";
    
    if ($('#' + idRow).length !== 0){
        $('#' + idRow).empty();
        $('#' + idRow).replaceWith(tableTD);
    } else {
        $(tableTD).appendTo($('#maintenanceTable').find('tbody'));
    }
}

function getResetDialog(tagname, tag, writeValue, tagRes) {
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Reset</h4>");
    $('#dialog').append("<span style='line-height:22px;' class='dialogtext'>Do you really want to reset the tag " + tagname + "? </span>");
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                emosWS.poke(tag, writeValue);
                if (tagRes)
                    emosWS.poke(tagRes, Date.parse(new Date()));
                $(this).dialog("destroy");
                $('#dialog').remove();
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); 
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton savebutton");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
}
function loadEcoDoku(self, parent){
    var ecodocuconfig = null;
    $.ajax({
        url: configURL + 'ecoDokuConfig.json',
        type: 'get',
        dataType: 'json',
        async: false,
        cache: false,
        success: function (data) {
            ecodocuconfig = data;
            var tmpmachine = self.Tag.split('_');   
            var anlage_part2 = (tmpmachine[tmpmachine.length - 2] ? tmpmachine[tmpmachine.length - 2] : "");
            var device = (tmpmachine[tmpmachine.length - 3] ? (tmpmachine[tmpmachine.length - 3]) : "").replace('.', '');
            var machine = tmpmachine[tmpmachine.length - 1] ? tmpmachine[tmpmachine.length - 1] : "";
            var myPLC = self.PLC;
            var anlagenpart = machine.replace(machine.charAt(0), '*');
            var Region;
            var FactoryNumber;
            var OrderNumber;
            var PlantName;
            if(ecodocuconfig[myPLC]){
                Region = ecodocuconfig[myPLC].Region;
                FactoryNumber = ecodocuconfig[myPLC].FactoryNumber;
                OrderNumber = ecodocuconfig[myPLC].OrderNumber;
                PlantName = ecodocuconfig[myPLC].PlantName;
            } else {
                Region = ecodocuconfig['Default'].Region;
                FactoryNumber = ecodocuconfig['Default'].FactoryNumber;
                OrderNumber = ecodocuconfig['Default'].OrderNumber;
                PlantName = self.PLC;
            }
            var docuRequest1 = '{ "function": "FCN_parts_getInfo","catalogSearchRootNode": ["'+ FactoryNumber +'-'+ PlantName +'","'+ OrderNumber +'"],"searchParams": [{"field": "KATALOG.K_Z_KD_IDENT", "value": "'+ PlantName +'"},{"field": "KATALOG.K_Z_BAUGR", "value": "*'+ anlage_part2 +'"},{"field": "KATALOG.K_POS", "value": "?'+ machine.replace(machine.charAt(0), '') +'"}]}';
            var docuRequest2 = '{ "function": "FCN_parts_getInfo","catalogSearchRootNode": ["'+ FactoryNumber +'-'+ PlantName +'","'+ OrderNumber +'"],"searchParams": [{"field": "KATALOG.K_Z_KD_IDENT", "value": "'+ PlantName +'"},{"field": "KATALOG.K_Z_BAUGR", "value": "*'+ anlage_part2 + anlagenpart +'"}]}';

            $.ajax({
                url: ecoDocuURL,
                type: 'post',
                data: docuRequest1,
                async: true,
                cache: false,
                success: function (data) {
                    console.log(docuRequest1)
                    console.log(data)
                    var tmpData = data.split('\n');
                    $.each(tmpData, function (key, val){
                        var pattern = /RESPONSE/;
                        if(pattern.test(val)){  
                            var temp = val.replace('RESPONSE=', '');
                            temp = JSON.parse(temp);
                            if(temp['documentsList']){
                                buildDokuList(self, temp['documentsList'], parent, Region, FactoryNumber, PlantName, OrderNumber, tmpmachine);                            
                            } else if(temp['error'] === 'No results found.'){
                                $.ajax({
                                    url: ecoDocuURL,
                                    type: 'post',
                                    data: docuRequest2,
                                    async: true,
                                    cache: false,
                                    success: function (data) {
                                        console.log(docuRequest2)
                                        console.log(data)
                                        var tmpData = data.split('\n');
                                        $.each(tmpData, function (key, val){
                                            var pattern = /RESPONSE/;
                                            if(pattern.test(val)){  
                                                var temp = val.replace('RESPONSE=', '');
                                                temp = JSON.parse(temp);
                                                if(temp['documentsList']){
                                                    buildDokuList(self, temp['documentsList'], parent, Region, FactoryNumber, PlantName, OrderNumber, tmpmachine);                            
                                                } else if(temp['error'] === 'No results found.'){
                                                    $('.Groupbox.ecodoku').remove();
        //                                            $("<span/>", {
        //                                                "class": "breadoverlay_li",
        //                                                "text": temp['error']
        //                                            }).appendTo(parent);
                                                }
                                            }
                                        });
                                    },
                                    error: function(e){
                                        console.log(e);
                                    }
                                });
                            }
                        }
                    });
                },
                error: function(e){
                    console.log(e);
                }
            });
        },
        error: function(e){
            console.log(e);
        }
    });    
}
function buildDokuList(self, doclist, parent, Region, FactoryNumber, PlantName, OrderNumber, machine){ 
    var tmpContainer = $("<div/>", {
        "class": "Groupbox ecodoku"
    });
    tmpContainer.append('<div class="DiagnosisText">EcoDocu</div>');
    tmpContainer.appendTo(parent);
    $.each(doclist, function(key1, val1){
        var tmpfile = val1['filePath'].split("\\");
        var file = tmpfile[tmpfile.length -1];
        var listelement = $("<span/>", {
            "class": "breadoverlay_li",
            "style": "position: relative;",
            "text": val1['documentTitle'],
            "click": function () {
                var mySelf = $(this);
                if($('#center .pdfHolder').length < 1){
                    $("<div/>", {
                        'class': 'pdfHolder'
                    }).appendTo('#center');
                    $("<span/>", {
                        'class': 'emosbutton cancelbutton',
                        'click': function(){
                            $('#center .pdfHolder').remove();
                            mySelf.removeClass('active');
                        }
                    }).appendTo('#center .pdfHolder');
                }
                $(this).parent().find('.breadoverlay_li').removeClass('active');
                $(this).addClass('active');  
                $.get('https://' + serverPool[0] + '/files/' + file).
                    done(function(data) {
                        if($('#center .pdfSubHolder').length > 0){
                            $('#center .pdfSubHolder').attr("data", 'https://' + serverPool[0] + '/files/' + file);
                        } else {
                            $("<object/>", {
                                'class': "pdfSubHolder",
                                "width": 900,
                                "async": true,
                                "height": "100%",
                                "type": "application/pdf"
                            }).attr("data", 'https://' + serverPool[0] + '/files/' + file).appendTo('#center .pdfHolder');
                        }              
                    }).
                    fail(function() {
                        $('#center .pdfHolder').append('<div class="errortext">file not found</div>');
                    });                                                            
            }
        }).appendTo(tmpContainer);
        $("<span/>", {
            "class": "emosbutton qrBlock",
            "click": function (e) {
                if($('#qrOverlay').length < 1){
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
                } else {
                    $('#qrOverlay canvas').remove();
                }
                
                $('#qrOverlay').qrcode({
                    "render": "canvas",
                    "width": 580,
                    "height": 580,
                    "text": "http://www.durr.com?R="+ Region +"&F="+ FactoryNumber +"&O="+ OrderNumber +"&D="+ PlantName +"_"+ machine[0].replace('.','') +"_"+ machine[1] + "_" + machine[2]
                });
                e.stopPropagation();
            }
        }).appendTo(listelement);;
    });
}
function resize(){
    if (globals.resize === "checked" && screen.width !== 1920){
        var zoom = (100/1920) * screen.width;
        document.body.style.zoom = zoom + "%";
        if (document.body.clientWidth !== 1920)
            document.body.style.zoom = ((zoom/document.body.clientWidth) * 1920) + "%";
    } else {
        document.body.style.zoom = "unset";
    }
}

function getText(textTag, element) {

    var isTextID = textTag[0] === "T" && Number.isInteger(parseInt(textTag[1])) && Number.isInteger(parseInt(textTag[2])) && textTag[3] === "_";
    
    if (isTextID){
        emosWS.sendAdviseText(textTag, "name", function (msg) {
            if (msg.value !== "" && element[0])
                element[0].textContent = msg.value;
        });
    }
}

    function ChronologyHistory (parent) {
        
        if ($('.diagnose.statusWelcome').find('.DiagnosisPageBlank.dPage.Chronology:visible').length > 0)
            $('.DiagnosisPageControl .placeholderBtn').removeClass('noAction');
        $('.DiagnosisPageControl .quitChrono').addClass('disabled');
        var onAlarmReady = function () {
            var pageId = $('.diagnose.statusWelcome').find('.DiagnosisPageBlank:visible');
            showScroll(pageId);
            buildHeader(pageId);
        };
        this.onAlarmReady = onAlarmReady;
        this.parent = $(parent);
        this.alarmGroup = $(parent).attr("PLC");
        this.table = null;
        this.init();
    }
    
    ChronologyHistory.prototype.init = function () {
        try {
            var self = this;
            var id = getElementGlobalID();
            var tableId = getElementGlobalID();
            var beginId = getElementGlobalID();
            var textId = getElementGlobalID();
            var tagnameId = getElementGlobalID();
            var durationId = getElementGlobalID();
            var priorityId = getElementGlobalID();
            var oldValueId = getElementGlobalID();
            var newValueId = getElementGlobalID();
            this.alarmId = getElementGlobalID();
            
            var preTable = "<table style='width: 329px;' class='DiagnosisAlarmTableHead'>" +
                        "<tr>" +
                            "<th id='" + beginId + "' class='thBegin'>Begin</th>" +
                            "<th id='" + textId + "' class='thArea'>Text</th>" +
                            "<th id='" + tagnameId + "' class='thTagname'>Tagname</th>" +
                            "<th id='" + priorityId + "' class='thPriority'>Priority</th>" +
                            "<th id='" + oldValueId + "' class='thOldValue'>Old Value</th>" +
                            "<th id='" + newValueId + "' class='thNewValue'>New Value</th>" +
                            "<th id='" + durationId + "' class='thDuration'>Time from now</th>" +
                        "</tr></table>";
            var placeholder = "<tr>" +
                                    "<th class='thBegin'>Begin</th>" +
                                    "<th class='thArea'>Text</th>" +
                                    "<th class='thTagname'>Tagname</th>" +
                                    "<th class='thPriority'>Priority</th>" +
                                    "<th class='thOldValue'>Old Value</th>" +
                                    "<th class='thNewValue'>Old Value</th>" +
                                    "<th class='thDuration'>Time from now</th>";

            var body = $(
                    "<div class='DiagnosisAlarmClient' id='" + id + "'>" +
                    preTable +
                    "<table style='width: calc(100% + 4px)' class='DiagnosisAlarmTable Groupbox' id='" + tableId + "'>" +
                    placeholder +
                    "</tr>" +
                    "</table>" +
                    "</div>");
 
            body.appendTo(this.parent);
            this.table = document.getElementById(tableId);
            this.table.id = tableId;
            var begin = document.getElementById(beginId);
            var text = document.getElementById(textId);
            var duration = document.getElementById(durationId);
            var tagname = document.getElementById(tagnameId);
            var oldValue = document.getElementById(oldValueId);
            var newValue = document.getElementById(newValueId);
            var priority = document.getElementById(priorityId);
            this.getHeaderText("T04_Text", text);
            this.getHeaderText("T04_TimeFromNow", duration);
            this.getHeaderText("T04_Begin", begin);
            this.getHeaderText("T04_OldValue", oldValue);
            this.getHeaderText("T04_NewValue", newValue);
            this.getHeaderText("T04_Tagname", tagname);
            this.getHeaderText("T04_Priority", priority);
            emosWS.addEventListener("language", this.onLanguage.bind(this));
            
            var self = this;
            emosWS.rest.alarm.chronology({
                alarmGroup: this.alarmGroup,    
                success: function(data){     
                    self.addTable(data);
                }, 
                error: function(){
                    console.log("request failed");
                }
            });
          
        } catch (err) {
            console.log("AlarmClient init failed: " + err);
        }
    };
    
     ChronologyHistory.prototype.onLanguage = function () {
        this.parent.find('.DiagnosisAlarmClient').remove();
        new ChronologyHistory(this.parent);
    };
    
    ChronologyHistory.prototype.getHeaderText = function (textID, header) {
        emosWS.sendAdviseText(textID, "name", function (msg) {
            if (msg.value !== "")
                header.textContent = msg.value;
        });
    };
    
    ChronologyHistory.prototype.getText = function (textTag, text, cell) {
        
        var identifier = $('.cats.active .emosbutton').attr('class').replace('emosbutton ', '');
        var textID = "T04_" + textTag;
        switch (identifier){
            case "process": 
                textID = "T01_" + textTag;
                break;
            case "application", "boothOverview", "OnSite", "operatingMonitoring", "reports", "stationOverview": 
                textID = "T02_" + textTag;
                break;
            case "conveyor": 
                textID = "T03_" + textTag;
                break;
            case "supervisory": 
                textID = "T05_" + textTag;
                break;
        }
        
        emosWS.sendAdviseText(textID, "name", function (msg) {
            if (msg.value !== "")
                cell.textContent = msg.value + text;
        });
    };
    
    ChronologyHistory.prototype.convertDateUTCToLocal = function (date) {
        
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    };
    
    ChronologyHistory.prototype.addTable = function (data) {
        
        var i = 1;
        var self = this;
        $.each(data, function (key, val) {
            var row = self.table.insertRow(i);
            row.className = 'alarmTable '+ self.getClassName(val.state, val.klass);
            var date;
            if (val.utc_dts)
                date = self.convertDateUTCToLocal(new Date(val.utc_dts));
                
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            
            cell1.className = 'tdBegin';
            cell2.className = 'tdArea';
            cell3.className = 'tdTagname';
            cell4.className = 'tdPriority';
            cell5.className = 'tdOldValue';
            cell6.className = 'tdNewValue';
            cell7.className = 'tdDuration';
            
            var text = val.message === 'N/A' ? "" : (val.message + "\n");
            var ioItem = val.ioitem.split(".");
            cell1.textContent = date.toLocaleDateString(myLocalTime) + ', \n' + date.toLocaleTimeString(myLocalTime);
            cell2.textContent = text + val.ionode + "." + ioItem[1];
            cell3.textContent = val.ionode + val.ioitem;
            cell4.textContent = val.priority;
            cell5.textContent = val.oldvalue;
            cell6.textContent = val.newvalue;
            cell7.textContent = self.convertToDate(date);
            
            if (val.message === 'N/A' && (val.state === 4 || val.state === 5)){
                self.getText(ioItem[ioItem.length - 1].split("_")[0], "\n" + val.ionode + "." + ioItem[1], cell2);
            }

            if(self.onAlarmReady){
                try {
                    self.onAlarmReady();
                } catch(e){}
            }
            i++;
        });
        $('.DiagnosisPageControl .quitChrono').removeClass('disabled');
    };
    
    ChronologyHistory.prototype.convertToDate = function (time, withoutDays) {
        try {
            if (time === "") {
                return "";
            }
            var current = new Date().getTime();
            var totalSec = parseInt((current - time) / 1000);
            var days = parseInt(totalSec / 86400);
            var hours = parseInt(totalSec / 3600) % 24;
            var minutes = parseInt(totalSec / 60) % 60;
            var seconds = totalSec % 60;
            //return days + ":" + hours + ":" + minutes + ":" + seconds;
            if (withoutDays) {
                return (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
            } else {
                return days + ":" + (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
            }
        } catch (err) {
            console.log("convertToDate() failed: " + err);
        }
    };
    
    ChronologyHistory.prototype.getClassName = function (status, number) {
         
         if (parseInt(status) === 5)
             return "parametrizing";
         else if (parseInt(status) === 4)
             return "operating";
         
        var className = "gone";
        
        switch(parseInt(number)){
            case 1: 
                className = "new";
                break;
            case 2: 
                className = "ackn";
                break;
            case 3: 
                className = "new";
                break;
        }
        
        switch (parseInt(status)){
            case 1:
                className += " on";
                break;
            case 2:
                className += " acknowledge";
                break;
            case 3:
                className += " off";
                break;
        }
        className += " C" + number;
        return className;
    };
