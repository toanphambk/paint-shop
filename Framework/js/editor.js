var jsonindex = 1000004;
var department = 1;
var jsonsOnServer;
/**
* Opens a new StatusWindow in Editor
* 
* @param {object} data - An Object containing the blueprint-data for StatusWindow.
*/
function openstatwin(data) {
    var msg = data;
    var onReady = function () {
        var pageId = $('.configcenter.editor .diagnose:not(.statusWelcome)').find('.DiagnosisPageBlank:visible');
        var myMainPage = pageId;
        var contentElement = '';
        if (myMainPage.find('.DiagnosisSubPageBlank:visible').length > 0) {
            contentElement = myMainPage.find('.DiagnosisSubPageBlank:visible');
        } else {
            contentElement = myMainPage;
        }        
        
        $('.keyboardInput').attr('lang', myLanguage);
        var preparent = $('.configcenter.editor .diagnose').find('.DiagnosisPageBlank.Private'); 
        if(msg.DiagnosisControl.match(/.htm/)){
            $('.configcenter.editor .diagnose').find('.DiagnoseBody').append('<iframe id="statusWinIframe" name="statusWinIframe" src="../config/StatWin/html/' + msg.DiagnosisControl + '?PLC='+ msg.PLC +'&Tag='+ msg.Tag +'">');
            
        } else {
            if(msg.Private === 'true') {
                getPrivateTabs(preparent);
                $("<div/>", {
                    "class": "scrollTabs emosbutton"
                }).append('<div class="scrollTabAlert"></div>').appendTo($('.configcenter.editor .diagnose:not(.statusWelcome)').find('.ui-tabs-nav'));
            }            
            buildHeader(pageId);
        }
        
        if($('.aptDropdownlabel').length > 0){
            var aptDropdownlabel = $('.aptDropdownlabel');
            aptDropdownlabel.hide();
            $(aptDropdownlabel[0]).show();
            $(aptDropdownlabel[1]).show();
            $(aptDropdownlabel[2]).show();
            $(aptDropdownlabel[3]).show();
        }
        
//        if($(".DiagnosisPageBlank.Operation .DiagnosisSubPageBlank:first").length > 0){
//            var realeases = $('<div class="Groupbox topleds hideBlock"><span class="emosbutton showhideblockbutton openBlock"></span></div>');
//            realeases.append(this.topLed);
//            $(".addMess1").children().appendTo(realeases);
//            realeases.prependTo(".DiagnosisPageBlank.Operation .DiagnosisSubPageBlank:first");
//        }
//        
//        $(".addMess1").remove();
        listen_again();
        showScroll(contentElement);
        
    };
    var onAlarmReady = function () {  
        if($('.diagnose:not(.statusWelcome) .DiagnosisPageBlank.dPage.Messages')[0].actMessages === true){
            $('.diagnose:not(.statusWelcome) .DiagnosisPageControl.diatabs').tabs();
            $('.diagnose:not(.statusWelcome) .DiagnosisPageControl.diatabs').tabs({active: 1});  
            $('.diagnose:not(.statusWelcome) .DiagnosisPageBlank.Messages .DiagnosisAlarmClient .quit').css('display','inline-block');
            $('.configcenter.editor .diagnose:not(.statusWelcome) .diatabs .scrollTabs').addClass('activeAlarms');
        }
        var pageId = $('.configcenter.editor .diagnose:not(.statusWelcome)').find('.DiagnosisPageBlank:visible'); 
        showScroll(pageId);
        buildHeader(pageId);
    };
    var temp = new emosWS.HTMLDiagnosisWindow(msg, onReady, onAlarmReady, '.configcenter');   
}
/**
* Builds a list with all JSON files(FU's)
* 
* @param {Object} parent - the DOM-Object where the list should be added.
* @param {Boolean} scroll - after closing an edited JSON-File, the list should scroll to this JSON.  
*/
function buildJsonList(parent, scroll){  
    
    $(parent).append('<div class="filterbuttonholder"><span class="dropdown emosbutton noicon jump">jump to...</span></div>');
    var radio = '<div class="departmentselection"><span>Select your Library: </span><label><input type="radio" name="department" value="1">1-PT</label>' +
    '<label><input type="radio" name="department" value="2">2-AT</label>' +
    '<label><input type="radio" name="department" value="3">3-CT</label>' +
    '<label><input type="radio" name="department" value="4">4-Ex</label>' +
    '<label><input type="radio" name="department" value="5">5-SV</label></div>';
//    $('.departmentselection').append(radio);
    $('.filterbuttonholder').append(radio);
    parent.find("input[name='department'][value="+ department +"]").prop( "checked", true );
    emosWS.rest.framework.getFileInfo({
        path: serverRoot + '../config/StatWin/' + department,
        success: function(info){
            var list = jsonsOnServer = info.children;
            var isAdmin = emosWS.isAdmin() ? '' : '';  //disabled
            var oldName = '';
            var oldElement = '';
            var dropDownList = [];
            var filterFuList = [];
            $.each(list, function (key, val) {
                if(val.name.indexOf(".json") !== -1 && val.name.indexOf("mapping") === -1){
                    filterFuList.push(val.name);
                    var nameArr = val.name.split(".");
                    
                    if(dropDownList.length === 0 || nameArr[0] === oldName){ 
                        dropDownList.push(val.name);                        
                    } else {
                        if(dropDownList.length > 1) {
                            var newName = dropDownList[0].split(".");
                            var listelement = $('<div class="Groupbox jsonlist"><span class="pagerHeadLine">'+ newName[0] +' Versions</span><span title="download" class="emosbutton editjsonlist download '+ isAdmin +'"></span><span title="delete" class="emosbutton editjsonlist delete '+ isAdmin +'"></span><span title="copy" class="emosbutton editjsonlist copyTab  '+ isAdmin +'"></span><span title="edit" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'"></span></div>');
                            var dropdown = $('<ul class="dropdownlist noicon versions" data-name="versionlist"></ul>');
                            $.each(dropDownList, function (key1, val1) {
                                dropdown.append('<li class="Groupbox jsonlist" data-name="'+ val1.slice(0, -5) +'"><span class="pagerHeadLine">'+ val1.slice(0, -5) +'</span><span title="download '+  val1 +'" class="emosbutton editjsonlist download '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="delete '+  val1 +'" class="emosbutton editjsonlist delete '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="copy '+  val1 +'" class="emosbutton editjsonlist copyTab  '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="edit '+  val1 +'" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'" data-name="'+ val1 +'"></span></li>');
                            });
                            dropdown[0].versionlist = dropDownList;
                            listelement.append(dropdown);
                            parent.append(listelement);
                        } else if(dropDownList.length === 1) {
                            parent.append('<div class="Groupbox jsonlist"><span class="pagerHeadLine">'+ dropDownList[0].slice(0, -5) +'</span><span title="download '+  dropDownList[0] +'" class="emosbutton editjsonlist download '+ isAdmin +'" data-name="'+ dropDownList[0] +'"></span><span title="delete '+  dropDownList[0] +'" class="emosbutton editjsonlist delete '+ isAdmin +'" data-name="'+ dropDownList[0] +'"></span><span title="copy '+  dropDownList[0] +'" class="emosbutton editjsonlist copyTab  '+ isAdmin +'" data-name="'+ dropDownList[0] +'"></span><span title="edit '+  dropDownList[0] +'" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'" data-name="'+ dropDownList[0] +'"></span></div>'); 
                            if(key === list.length - 1 && nameArr[0] !== oldName) {
                                parent.append('<div class="Groupbox jsonlist" data-name="'+ val.name.slice(0, -5) +'"><span class="pagerHeadLine">'+ val.name.slice(0, -5) +'</span><span title="download '+  val.name +'" class="emosbutton editjsonlist download '+ isAdmin +'" data-name="'+ val.name +'"></span><span title="delete '+  val.name +'" class="emosbutton editjsonlist delete '+ isAdmin +'" data-name="'+ val.name +'"></span><span title="copy '+  val.name +'" class="emosbutton editjsonlist copyTab  '+ isAdmin +'" data-name="'+ val.name +'"></span><span title="edit '+  val.name +'" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'" data-name="'+ val.name +'"></span></div>');
                            } else if(key === list.length - 1 && nameArr[0] === oldName) {
                                dropDownList.push(val.name); 
                                var newName = dropDownList[0].split(".");
                                var listelement = $('<div class="Groupbox jsonlist"><span class="pagerHeadLine">'+ newName[0] +' Versions</span><span title="download" class="emosbutton editjsonlist download '+ isAdmin +'"></span><span title="delete" class="emosbutton editjsonlist delete '+ isAdmin +'"></span><span title="copy" class="emosbutton editjsonlist copyTab  '+ isAdmin +'"></span><span title="edit" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'"></span></div>');
                                var dropdown = $('<ul class="dropdownlist noicon versions" data-name="versionlist"></ul>');
                                $.each(dropDownList, function (key1, val1) {
                                    dropdown.append('<li class="Groupbox jsonlist" data-name="'+ val1.slice(0, -5) +'"><span class="pagerHeadLine">'+ val1.slice(0, -5) +'</span><span title="download '+  val1 +'" class="emosbutton editjsonlist download '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="delete '+  val1 +'" class="emosbutton editjsonlist delete '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="copy '+  val1 +'" class="emosbutton editjsonlist copyTab  '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="edit '+  val1 +'" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'" data-name="'+ val1 +'"></span></li>');
                                });
                                dropdown[0].versionlist = dropDownList;
                                listelement.append(dropdown);
                                parent.append(listelement);
                            }                          
                        } 
                        dropDownList = [];
                        dropDownList.push(val.name);    
                    }
                    if(key === list.length - 1 ){
                        if(dropDownList.length > 1) {
                            var newName = dropDownList[0].split(".");
                            var listelement = $('<div class="Groupbox jsonlist"><span class="pagerHeadLine">'+ newName[0] +' Versions</span><span title="download" class="emosbutton editjsonlist download '+ isAdmin +'"></span><span title="delete" class="emosbutton editjsonlist delete '+ isAdmin +'"></span><span title="copy" class="emosbutton editjsonlist copyTab  '+ isAdmin +'"></span><span title="edit" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'"></span></div>');
                            var dropdown = $('<ul class="dropdownlist noicon versions" data-name="versionlist"></ul>');
                            $.each(dropDownList, function (key1, val1) {
                                dropdown.append('<li class="Groupbox jsonlist"><span class="pagerHeadLine">'+ val1.slice(0, -5) +'</span><span title="download '+  val1 +'" class="emosbutton editjsonlist download '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="delete '+  val1 +'" class="emosbutton editjsonlist delete '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="copy '+  val1 +'" class="emosbutton editjsonlist copyTab  '+ isAdmin +'" data-name="'+ val1 +'"></span><span title="edit '+  val1 +'" class="emosbutton editjsonlist buttonEdit  '+ isAdmin +'" data-name="'+ val1 +'"></span></li>');
                            });
                            dropdown[0].versionlist = dropDownList;
                            listelement.append(dropdown);
                            parent.append(listelement);
                        } 
                    }
                    oldName = nameArr[0];
                }   
                
            });
            $.each($('.dropdownlist[data-name="versionlist"]'), function(keyX, valX){
                var mykeys = [];
                var myElements = [];
                var elements = $(valX).find('.jsonlist');
                $.each($(valX).find('.jsonlist'), function(a,b){
                    mykeys.push(b.dataset.name);
                });
                mykeys.sort().reverse();
                $(valX).empty();                
                $.each(mykeys, function(a,b){
                    var temp = $.grep(elements, function(e){ 
                        return $(e).attr('data-name') === b; 
                    });
                    $(valX).append(temp);
                });
//                
//                console.log(elements)
//                console.log(myElements)
//                myElements.appendTo($(this));
            });
            
            $.each(filterFuList, function (key, val) {
                switch (true) {
                    case (val.startsWith("FU1")) :
                    case (val.startsWith("FU2")):    
                    case (val.startsWith("FU3")):    
                    case (val.startsWith("FU4")):    
                    case (val.startsWith("FU5")):    
                    case (val.startsWith("FU6")):
                    case (val.startsWith("FU7")):
                    case (val.startsWith("FU8")):
                    case (val.startsWith("FU9")):
                        filterFuList[key] = filterFuList[key].substr(0, 3);
                        break;
                    case (val.startsWith("FU_")): 
                        filterFuList[key] = filterFuList[key].substr(0, 6);
                        break;
                    default: 
                        filterFuList[key] = filterFuList[key].replace('.json', '');
               };   
            });
            var filtertList = unique(filterFuList).sort();
            var filterDropdown = $('<ul class="dropdownlist noicon filter" data-name="filterlist"></ul>');
            $.each(filtertList, function (key, val) {
                $('<li/>', {
                    "class": "overlayElement breadoverlay_li jumpfilter",
                    "text": val,
                    click: function () {
                        var scrollTo = $(".configcenter.full").find('.jsonlist .pagerHeadLine:contains('+ val +'):first').offset().top - 100 - $('.configcenter.full').offset().top;
                        $('.configcenter.full').stop().animate({
                            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                        },{                                
                            complete: function () {
                                if($('.configcenter.full').scrollTop() >= 50){
                                    $('.filterbuttonholder').addClass('fixed');
                                } else {
                                    $('.filterbuttonholder').removeClass('fixed');
                                }                                    
                                setScrollbar($('.configcenter.full'));              
                            }
                        }); 
                    } 
                }).appendTo(filterDropdown);
            });
            if(scroll){
                var scrollTo = $(".configcenter.full").find('.jsonlist .pagerHeadLine:contains('+ scroll.split(".")[0] +'):first').offset().top - 100 - $('.configcenter.full').offset().top;                
                $('.configcenter.full').stop().animate({
                    scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                },{                                
                    complete: function () {
                        if($('.configcenter.full').scrollTop() >= 50){
                            $('.filterbuttonholder').addClass('fixed');
                        } else {
                            $('.filterbuttonholder').removeClass('fixed');
                        }                                    
                        setScrollbar($('.configcenter.full'));    
                        showScroll($('.configcenter.full'));
                    }
                }); 
            }
            $('.filterbuttonholder').append(filterDropdown);
            $(".preferences.full").append('<span title="create a new Status-Window" class="emosbutton newButton newJson"></span>'); // disabled
            showScroll($('.configcenter.full'));
        }, 
        error: function(){
            console.log("request failed");
        },
        server: serverPool[0]
   });
}
var jsonResults;
/**
* Transforms the actual dataobject into the JSONformat which is needes by emos
* 
*/
function rebuildJson(){
    jsonindex = 1000004;
    var newObj = {};
    var jsonClone = JSON.parse(JSON.stringify(jsonResults));
    console.log(jsonResults)
    $.each(jsonClone.data.windowData.PageControl, function (key, val){
        $.each(val, function(key1, val1){
            if(key1 === 'AddPageTab' || key1 === 'Messages'){
                var newKey = getJsonId() + '-' + key1;
                newObj[newKey] = {};                
                $.each(val1, function(key2, val2){
                    if(jQuery.type(val2) !== 'string'){
                        var newKey2 = getJsonId() + '-' + key2;
                        newObj[newKey][newKey2] = {};
                        $.each(val2, function(key3, val3){
                            $.each(val3, function(key4, val4){
                                if(jQuery.type(val4) !== 'string'){
                                    var newKey4 = getJsonId() + '-' + key4;
                                    newObj[newKey][newKey2][newKey4] = {};
                                    newObj[newKey][newKey2][newKey4]['Text'] = val4['Text'];
                                    newObj[newKey][newKey2][newKey4]['TextID'] = val4['TextID'];
                                    newObj[newKey][newKey2][newKey4]['VisibleAtRight'] = val4['VisibleAtRight'];
                                    $.each(val4, function(key5, val5){
                                        $.each(val5, function(key6, val6){
                                            if(key6.indexOf("Add") !== -1){
//                                            if(jQuery.type(val6) === 'object'){
                                                var newKey6 = getJsonId() + '-' + key6;
                                                newObj[newKey][newKey2][newKey4][newKey6] = {};
                                                if(jQuery.type(val6) === 'array') {
                                                    $.each(val6, function(key7, val7){
                                                        if(jQuery.type(val7) === 'object'){ 
                                                            $.each(val7, function(key8, val8){
                                                                if(key8.indexOf("Add") !== -1){
                                                                    var newKey8 = getJsonId() + '-' + key8;
                                                                    
                                                                   
                                                                    newObj[newKey][newKey2][newKey4][newKey6][newKey8] = {};
                                                                    
                                                                    if(jQuery.type(val8) === 'array') {
                                                                        $.each(val8, function(key9, val9){
                                                                            
                                                                            $.each(val9, function(key10, val10){
                                                                                if(key10.indexOf("Add") !== -1){
                                                                                    var newKey10 = getJsonId() + '-' + key10; 
                                                                                    if(key10.indexOf("AddPageControl") !== -1) { //pagecontrol
                                                                                        newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10] = {};
                                                                                        $.each(val10, function(key11, val11){
                                                                                            $.each(val11, function(key12, val12){ //pageTab     
                                                                                                if(key12.indexOf("Add") !== -1){    //AddPageTab                                                                                                    
                                                                                                    var newKey12 = getJsonId() + '-' + key12;
                                                                                                    newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10][newKey12] = {};
                                                                                                    $.each(val12, function(key13, val13){
                                                                                                        $.each(val13, function(key14, val14){
                                                                                                            if(key14.indexOf("Add") !== -1){
                                                                                                                var newKey14 = getJsonId() + '-' + key14;
                                                                                                                newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10][newKey12][newKey14] = val14;
                                                                                                                //kommt
                                                                                                            } else {
                                                                                                                newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10][newKey12][key14] = val14;
                                                                                                            }                                                                                                            
                                                                                                        });
                                                                                                        
//                                                                                                        newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10][newKey12] = val12;
                                                                                                    });
//                                                                                                } else {
//                                                                                                    newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10][newKey11][key12] = val12;
                                                                                                }
                                                                                                
                                                                                                
//                                                                                                newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10][newKey12] = val12;
                                                                                            });
                                                                                            //newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10]
                                                                                        });
                                                                                    } else {     
                                                                                        newObj[newKey][newKey2][newKey4][newKey6][newKey8][newKey10] = val10;
                                                                                    }
                                                                                } else {
                                                                                    if(key10 === 'Text')
                                                                                        newObj[newKey][newKey2][newKey4][newKey6][newKey8]['Text'] = val10;
                                                                                    if(key10 === 'TextID')
                                                                                        newObj[newKey][newKey2][newKey4][newKey6][newKey8]['TextID'] = val10;
                                                                                    if(key10 === 'VisibleAtRight')
                                                                                        newObj[newKey][newKey2][newKey4][newKey6][newKey8]['VisibleAtRight'] = (val10) ? val10: 0;  
                                                                                    
                                                                                }
                                                                            });
                                                                        });
                                                                    }
                                                                    
//                                                                    newObj[newKey][newKey2][newKey4][newKey6][newKey8] = val8;
                                                                } else {
                                                                    newObj[newKey][newKey2][newKey4][newKey6][key8] = val8;
                                                                }
                                                            });
                                                        } else {
                                                            newObj[newKey][newKey2][newKey4][newKey6][key7] = val7;
                                                        }
                                                    });
                                                } else {
                                                    newObj[newKey][newKey2][newKey4][newKey6] = val6;
                                                }
                                                
                                            } else {
                                                newObj[newKey][newKey2][newKey4][key6] = val6;
                                            }
                                        });
                                    });
                                    
                                } else {
                                    newObj[newKey][key2][key4] = val4;
                                }
                            });
                        });
                    } else {
                        newObj[newKey][key2] = val2;
                    }
                });
            }
        });
        
    });
    jsonClone.data.windowData.PageControl = newObj;
    return jsonClone;
}
/**
* For a new JSON file(FU) or to edit an existing JSON file. It creates the datastructure and the HTML
* 
* @param {Boolean} editjson - true, if editing an existing file.  
* @param {Boolean} reload - true, after deleting a Tab 
* @param {Boolean} duplicateFile - true after cloning a JSON-File
*/
function newJson(editjson, reload, duplicateFile){    
    if(editjson && !reload){
        jsonResults = $.getStatWin();
    } else if(reload) {
        jsonResults = jsonResults; // ich weiß, das ist unfug
    } else {           
        jsonResults = {};
        jsonResults.data = {};
        jsonResults.childWindows = null;
        jsonResults.childWindowsData = {}; 
        jsonResults.data.windowData = {};
        jsonResults.data.windowData.OPCVersionID = 'GP.G2003_Vari';
        jsonResults.data.windowData.Version = '01_00';
        jsonResults.data.windowData.PageControl = [];
    }
//    if(!jsonResults.data.windowData.Head){
//        jsonResults.data.windowData.Head = {            
//            "1000001-TopTextLED": {
//             "OnLED": "G",
//             "OPCID": "SB.S1252_Enbl",
//             "Position": "L",
//             "TextID": "S1252",
//             "OffLED": "O",
//             "Text": "Enable Device",
//             "Bold": "1",
//             "Border": "B",
//             "VisibleAtRight": "0"
//            },
//            "1000002-TopTextLED": {
//             "OnLED": "G",
//             "OPCID": "SB.S1255_EnFV",
//             "Position": "M",
//             "TextID": "S1255",
//             "OffLED": "O",
//             "Text": "Enable Faults",
//             "Bold": "1",
//             "Border": "B",
//             "VisibleAtRight": "0"
//            },
//            "1000003-TopTextLED": {
//             "OnLED": "G",
//             "OPCID": "SB.S1254_EnMV",
//             "Position": "R",
//             "TextID": "S1254",
//             "OffLED": "O",
//             "Text": "Enable Manual Operation",
//             "Bold": "1",
//             "Border": "B",
//             "VisibleAtRight": "0"
//            }
//        };
//    }
    
    var head = '';
    var foot = '';
    if(!editjson || duplicateFile){
        head = '<div class="Groupbox jsonlist active"><span class="pagerHeadLine"> New  </span><span title="delete" class="emosbutton editjsonlist delete"></span><span title="copy" class="emosbutton editjsonlist copyTab"></span><span title="edit" class="emosbutton editjsonlist buttonEdit"></span>';
        foot = '</div>';
    }
    var hash = (jsonString) ? jsonString.hashCode() : '';
    var jsonBody = $(head +
        '<div class="Groupbox newjson"><span class="pagerHeadLine hashcode">File-Hashcode: '+ hash +'<span class="newhashcode"></span></span><div class="buttonholder"><span title="cancel" class="emosbutton cancelbutton" onclick="getCancel(this);"></span><span title="save" class="emosbutton savebutton disabled"></span></div>' + 
        '<span class="pagerHeadLine block">Head Controls</span>' +
        '<div class="Groupbox inner ">' +
        '<div class="usehead"><input class="plantcheckbox" type="checkbox" name="headcontrols" value="headcontrol">use Head Controls</div>' +
        '<div class="useprivate"><input class="plantcheckbox" type="checkbox" name="privatetab" value="privatetab" checked>use Private Tab</div>' +
        '<div class="usesummary"><input class="plantcheckbox" type="checkbox" name="summarytab" value="summarytab" checked>use Summary Tab</div>' +
        '<br class="cl"></div>' +

        '<span class="pagerHeadLine block">Head Data</span>' +
        '<div class="Groupbox inner ">' +
        buildInputGroup('New StatWin', 'DiagnosisControl', 'DiagnosisControl', 'fl', 'required') +
        buildInputGroup('Version', 'Version', 'Version', 'fl smallbox', 'required') +
        buildInputGroup('Build', 'Build', 'Build', 'fl smallbox', 'required') +
        '<div class="inputGroup fl"><label class="smallText">DiagnosisLibID</label><span class="dropdown emosbutton noicon"><span>'+ department +'</span></span><ul class="dropdownlist noicon" data-name="diadnosislibid"><li data-value="1">1</li><li data-value="2">2</li><li data-value="3">3</li><li data-value="4">4</li><li data-value="5">5</li></ul></div>' +
        buildInputGroup('GroupRightIndex', 'GroupRightIndex', 'GroupRightIndex', 'fl smallbox', 'required') +
        buildInputGroup('PLC', 'PLC', 'PLC', 'fl', 'required') +
        buildInputGroup('Tag', 'Tag', 'Tag', 'fl', 'required') +
        '<br class="cl"></div>' +  
//        '<span class="pagerHeadLine block">Releases</span>' +
//        '<div class="Groupbox inner headLED">' +
//        '<span title="add a new Release" class="emosbutton addButton addLedElement" style="text-align: center;font-size: 20px;font-weight: bold;color: #3b4654">+</span>' +
//        '</div>' + 
        
        '<span class="pagerHeadLine block tabs">Tabs</span>' +
        '<div class="Groupbox inner tabs"></div>' +
        '<span title="add a new Tab" class="emosbutton addButton addTab"></span>' +   
        '<br class="cl"></div>' +
        foot);        
    jsonBody.find("input[name='GroupRightIndex']").removeAttr('pattern');
    jsonBody.find("input[name='Version']").attr('pattern', '.{2,}');
    jsonBody.find("input[name='Build']").attr('pattern', '.{2,}');
    jsonBody.find("li[data-value='"+ department +"']").addClass('active');
    jsonBody.find("input[name='Version']").val('01');
    jsonBody.find("input[name='Build']").val('00');
//    $.each(jsonResults.data.windowData.Head, function (key, val) {
//        var id = getId();
//        var headLEDBody = $('<div class="Groupbox ledlist draggablelist" id="'+ id +'" data-name="'+ val.Text +'"><span class="pagerHeadLineIcon '+ val.Text +'"></span><span class="pagerHeadLine">'+ val.Text +'</span><span title="delete headLED '+  val.Text +'" class="emosbutton editheadLED delete" data-num="'+ key +'" data-name="'+ val.Text +'"></span><span title="edit headLED '+  val.Text +'" class="emosbutton editheadLED buttonEdit" data-num="'+ key +'" data-name="'+ val.Text +'"></span></div>');
//        jsonBody.find('.Groupbox.headLED').append(headLEDBody);
//    });
    return jsonBody;
}
/**
* When editing or duplicating an JSON file or after deleting a TAB
* 
* @param {object} parent - the DOM-Object where the list should be added.
* @param {Boolean} reload - true, after deleting a Tab 
* @param {Boolean} duplicateFile - true after cloning a JSON-File
*/
function editJson(parent, reload, duplicateFile) {
    var jsonBody = newJson(true, reload, duplicateFile); 
      
    var searchButton = $("<span/>", {
        "class": 'emosbutton search',
        "click": function(){
            if($('.searchOverlay').length > 0 && $('.searchOverlay').css('display') !== 'none'){
                $('.searchOverlay').hide();
            } else {
                getSearchOverlay($(this));
            }
        }
    });
    jsonBody.find('.buttonholder').append(searchButton);
    
    var version = jsonResults.data.windowData.Version.split("-");
    jsonBody.find("input[name='DiagnosisControl']").val(jsonResults.DiagnosisControl);
    jsonBody.find("input[name='Version']").val(version[0]);
    jsonBody.find("input[name='Build']").val(version[1]);
    jsonBody.find("input[name='GroupRightIndex']").val(jsonResults.GroupRightIndex);
    jsonBody.find("input[name='PLC']").val(jsonResults.PLC);
    jsonBody.find("input[name='Tag']").val(jsonResults.Tag);
    jsonBody.find("ul[data-name='diadnosislibid']").prev().find('span').text(jsonResults.DiagnosisLibID);
    jsonBody.find("ul[data-name='diadnosislibid'] li[data-value='"+ jsonResults.DiagnosisLibID +"']").addClass('active');
    jsonBody.find("input[name='headcontrols']").prop("checked", (parseInt(jsonResults.HeadControls)) ? parseInt(jsonResults.HeadControls) : true);
    jsonBody.find("input[name='privatetab']").prop("checked", (parseInt(jsonResults.Private)) ? parseInt(jsonResults.Private) : true);
    jsonBody.find("input[name='summarytab']").prop("checked", (parseInt(jsonResults.Summary)) ? parseInt(jsonResults.Summary) : true);
    
    $.each(jsonResults.data.windowData.PageControl, function (key, val) {
        
        $.each(val, function(key1, val1){
            var activity = '';
            var id = getId();
            if(key1.indexOf('Messages') !== -1){    
                activity = 'disabled';
                if(!val1.Text) {
                    val1.Text = 'Messages';
                }                
            }
            var tablistBody = $('<div class="Groupbox tabslist draggablelist" id="'+ id +'" data-name="'+ val1.Text +'"><span style="background-image:url(svg/tabicons/' + val1.Text + '.svg);" class="pagerHeadLineIcon '+ val1.Text +'"></span><span class="pagerHeadLine">'+ val1.Text +'</span><span title="delete Tab '+  val1.Text +'" class="emosbutton edittabslist delete" data-num="'+ key1 +'" data-name="'+ val1.Text +'"></span><span title="edit Tab '+  val1.Text +'" class="emosbutton edittabslist buttonEdit '+ activity +'" data-num="'+ key1 +'" data-name="'+ val1.Text +'"></span></div>');
            tablistBody[0]['myChilds'] = val1;
            tablistBody[0]['myObjId'] = key;
            jsonBody.find('.Groupbox.tabs').append(tablistBody);
        });
            
        
    });
    if(jsonBody.find('.tabslist').length >= 4){
        jsonBody.find('.emosbutton.addTab').addClass('disabled');
    } else {
        jsonBody.find('.emosbutton.addTab').removeClass('disabled');
    }
         
    if(duplicateFile){
        parent.prepend(jsonBody);
    } else {
        parent.append(jsonBody);
    }
    $('.Groupbox.inner.tabs').sortable({
        items: '.tabslist',
        delay: 200,
        update: function( e, ui ) {
            var array = jsonResults.data.windowData.PageControl;
            var gesList = $('.tabslist');
            array.move(ui.item[0].myObjId, gesList.index(ui.item));
            $.each(gesList, function(key, val){                
                $(val)[0].myObjId = key;
            });
            validatePreviewJson(true);
        }
    });
    $('.Groupbox.inner.tabs').disableSelection();
    showScroll($('.configcenter.full'));
    $('.configcenter.full.editor .diagnose').remove();
    validatePreviewJson();
}
/**
* Build data- and HTML-Structure for Release-LEDs
* 
* @param {Boolean} addNew - after closing an edited JSON-File, the list should scroll to this JSON.  
* @return {object} The Mask for the LED-data.
*/
//function newHeadLED(addNew){
//    var tabHead = '';
//    var tabFoot = '';
//    var id = getId();
//    var actNumber = Object.keys(jsonResults.data.windowData.Head);
//    var newNum;
//    if(actNumber.length === 0) {
//        newNum = '1000001-TopTextLED';
//    } else {
//        actNumber.sort();
//        newNum = Number($(actNumber).get(-1).replace('-TopTextLED', '')) + 1 + '-TopTextLED';
//    }
//    
//    if(addNew){        
//        var obj = {
//            "OnLED": "",
//            "OPCID": "",
//            "Position": "L",
//            "TextID": "",
//            "OffLED": "",
//            "Text": "",
//            "Bold": "1",
//            "Border": "B",
//            "VisibleAtRight": "0"            
//        }; 
//        jsonResults.data.windowData.Head[newNum] = obj;
//        tabHead = '<div class="Groupbox ledlist draggablelist"><span class="pagerHeadLineIcon"></span><span class="pagerHeadLine">Top Text LED</span><span title="delete" data-num="'+ newNum +'" class="emosbutton editheadLED delete"></span><span title="edit" data-num="'+ newNum +'" class="emosbutton editheadLED buttonClose"></span>';
//        tabFoot = '</div>';
//    }  
//    
//    var headLEDBody = $(tabHead +
//        '<div class="newapp newHeadLED">' + 
//        '<div class="partbox ledholder">' + 
//        '<br class="cl"></div>' +        
//        '</div>' +
//        tabFoot);
//    headLEDBody.find('.ledholder').append(getHeadLED());
//    return headLEDBody;
//}
/**
* When editing a Release 
* 
* @param {Object} parent - the DOM-Object where the LED/Release Mask should be added.
* @param {Number} datanum - the ID of the release in data-object 
*/
//function editHeadLED(parent, datanum ) {
//    var headledBody = newHeadLED(false);
//    var data = jsonResults.data.windowData.Head[datanum];
//    headledBody.find("input[name='elementtext']").val(data.Text);
//    headledBody.find("input[name='elementtextId']").val(data.TextID);
//    headledBody.find("input[name='opcId']").val(data.OPCID);
//    headledBody.find("div[data-led='On'] span.kreis[data-color='"+ data.OnLED +"']").addClass('active'); 
//    headledBody.find("div[data-led='Off'] span.kreis[data-color='"+ data.OffLED +"']").addClass('active');
//    headledBody.find(".uservisiblepanel .selectRights li[data-right='"+ data.VisibleAtRight +"']").addClass('active'); 
//    headledBody.find(".uservisiblepanel .dropdown span").addClass(headledBody.find(".uservisiblepanel .selectRights li[data-right='"+ data.VisibleAtRight +"']").text()).text(headledBody.find(".uservisiblepanel .selectRights li[data-right='"+ data.VisibleAtRight +"']").text());
//    parent.append(headledBody);
//    showScroll($('.configcenter.full'));
//}
/**
* When adding a new Tab 
* 
* @param {Boolean} addNew - true for a new Tab, false for editing.
* @param {String} selector - Name of the Tab 
* @param {Boolean} afterDelete - used after deleting of a contetpage
* @return {object} The Mask for the Tab-data.
*/
function newTab(addNew, selector, afterDelete ){
    var tabHead = '';
    var tabFoot = '';
    var tabSelect = '';
    var id = getId();
    tabSelect = '<div class="inputGroup"><label class="smallText">Tab class</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Tab</span></span></span><ul class="dropdownlist chooseTab" data-name="iconclass" id="'+ id +'"></ul></div>';
    if(addNew){
        var obj = {
            'AddPageTab':{
                'AddPageControl':[],
                'Text': '',
                'TextID': '',
                'VisibleAtRight': '',
                'VisibleOPCID': ''
            }
        }; 
        var tmpIndex = jsonResults.data.windowData.PageControl.push(obj) - 1;
        tabHead = '<div class="Groupbox tabslist draggablelist"><span class="pagerHeadLineIcon"></span><span class="pagerHeadLine"></span><span title="delete" class="emosbutton edittabslist delete"></span><span title="edit" class="emosbutton edittabslist buttonClose"></span>';
        tabSelect = '<div class="inputGroup"><label class="smallText">Tab class</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Tab</span></span></span><ul class="dropdownlist chooseTab" data-name="iconclass" id="'+ id +'"></ul></div>';
        tabFoot = '</div>';
    }  else if(afterDelete) {
        tabHead = '<span style="background-image:url(svg/tabicons/' + selector + '.svg), linear-gradient(#fff, #d1d7e0);" class="pagerHeadLineIcon '+ selector +'"></span><span class="pagerHeadLine">'+ selector +'</span><span title="delete Tab '+  selector +'" class="emosbutton edittabslist delete" data-name="'+ selector +'"></span><span title="edit Tab '+  selector +'" class="emosbutton edittabslist buttonEdit" data-name="'+ selector +'"></span>';
        
    }
    
    var tabBody = $(tabHead +
        '<div class="newapp newTab">' + 
        '<div class="partbox">' + 
        buildInputGroup('Visibility OPC ID panel', 'Visibility OPC ID Panel', 'visibleopcIdTab', '', '') + 
        '<div class="inputGroup uservisiblepanelTab"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +   
        tabSelect +
        '<br class="cl"></div>' +
        '<div>' +
        '<span class="pagerHeadLine block">Contentpage</span>' +
        '<div class="Groupbox inner innerbox contentpage"></div>' +  
        '<span title="add a new Contentpage" class="emosbutton addButton addContentpage"></span>' +
        '<br class="cl"></div>' +
        '</div>' +
        tabFoot);
    buildClassList('svg/tabicons', id, selector);
    if(addNew){
        tabBody[0].myObjId = tmpIndex;
        tabBody[0].myChilds = obj.AddPageTab;
    }
    tabBody.find('.uservisiblepanelTab').append(getAuthDropDown());
    
    $('.Groupbox.inner.tabs').sortable({
        items: '.tabslist',
        delay: 200,
        update: function( e, ui ) {
            var array = jsonResults.data.windowData.PageControl;
            var gesList = $('.tabslist');
            array.move(ui.item[0].myObjId, gesList.index(ui.item));
            $.each(gesList, function(key, val){                
                $(val)[0].myObjId = key;
            });
            validatePreviewJson(true);
        }
    });
    $('.Groupbox.inner.tabs').disableSelection();
    
    return tabBody;
}
/**
* When edit a Tab 
* 
* @param {Object} parent - true for a new Tab, false for editing.
* @param {String} dataFile - Name of the Tab. 
* @param {Boolean} afterDelete - used after deleting of a contetpage.
*/
function editTab(parent, dataFile, afterDelete) {
    $('.Groupbox.inner.tabs').sortable("disable").css('overflow', 'initial');
    var tabBody = newTab(false, dataFile, afterDelete); 
    parent.addClass('editTab');
    var myChilds = parent[0].myChilds.AddPageControl;
    $.each(myChilds, function(key, val){
        $.each(val, function(key1, val1){
            var myText;
            $.each(val1, function(key2, val2){
                 $.each(val2, function(key3, val3){
                    if(key3 === 'Text'){
                        myText = val3;
                    }
                });
            });
            var contentpagelistBody = $('<div class="Groupbox contentpagelist draggablelist" data-name="'+ myText +'"><span style="background-image:url(svg/tabicons/' + dataFile + '.svg);" class="pagerHeadLineIcon '+ dataFile +'"></span><span class="pagerHeadLine">'+ myText +'</span><span title="delete Contentpage '+  myText +'" class="emosbutton editcontentpagelist delete" data-name="'+ myText +'"></span><span title="edit Contentpage '+  myText +'" class="emosbutton editcontentpagelist buttonEdit" data-name="'+ myText +'"></span></div>');
            contentpagelistBody[0]['myChilds'] = val1;
            contentpagelistBody[0]['myParent'] = val;
            contentpagelistBody[0]['myObjId'] = key;
            tabBody.find('.Groupbox.contentpage').append(contentpagelistBody);
        });
    });
    tabBody.find('input[name=visibleopcIdTab]').val(parent[0].myChilds.VisibleOPCID);
    tabBody.find(".uservisiblepanelTab .selectRights li").removeClass('active'); 
    tabBody.find(".uservisiblepanelTab .selectRights li[data-right='"+ parent[0].myChilds.VisibleAtRight +"']").addClass('active'); 
    tabBody.find(".uservisiblepanelTab .dropdown span").text(tabBody.find(".uservisiblepanelTab .selectRights li[data-right='"+ parent[0].myChilds.VisibleAtRight +"']").text());
    parent.append(tabBody);
    $('.Groupbox.inner.contentpage').sortable({ 
        items: '.contentpagelist',
        delay: 200,
        stop: function( e, ui ) {
            var parentID = ui.item.closest('.tabslist')[0].myObjId;
            var myId = ui.item[0].myObjId;
            var array = jsonResults.data.windowData.PageControl[parentID].AddPageTab.AddPageControl;
            var gesList = $('.contentpagelist');
            array.move(ui.item[0].myObjId, gesList.index(ui.item));
            $.each($('.contentpagelist'), function(key, val){
                $(val)[0].myObjId = key;
            });            
            validatePreviewJson(true);
        }
    });
    $('.Groupbox.inner.contentpage').disableSelection();
    showScroll($('.configcenter.full'));
}
/**
* When adding a new Contentpage 
* 
* @param {Boolean} addNew - true for a new Tab, false for editing.
* @param {String} datanum - maybe obsolete.  
* @param {String} myText - Name of a contetpage
* @param {String} parent - Parentelement
* @param {Boolean} afterDelete - used after deleting of a block
* @return {object} The Mask for the ContentPage-data.
*/
function newContentPage(addNew, datanum, myText, afterDelete, parent ){
    $('.Groupbox.inner.contentpage').css('overflow', 'initial');
//    if($('.Groupbox.inner.contentpage .contentpagelist').length > 0){
//        $('.Groupbox.inner.contentpage').sortable("disable").css('overflow', 'initial');
//    } 
    
    var tabHead = '';
    var tabFoot = '';
    var iconName = parent.closest('.tabslist').attr('data-name');
    if(addNew){
        var addNewNum = Number(addNew);
        var tmpId2 = getJsonId() + '-AddPageTab';
        var position = ($('.newjson').find('.contentpagelist').length === 0) ? $('.newjson').find('.contentpagelist').length : $('.newjson').find('.contentpagelist').length;
        var iconclass = myText;
        var obj = {
            'AddPageTab': [
                {'Text': myText},
                {'TextID':myText},
                {'VisibleAtRight': "0"},  
                {'VisibleOPCID': ""}
            ]
        };
        var testIndex = jsonResults.data.windowData.PageControl[addNewNum]['AddPageTab']['AddPageControl'].push(obj) -1;
        var tempData = jsonResults.data.windowData.PageControl[addNewNum]['AddPageTab']['AddPageControl'][testIndex]['AddPageTab'];
        tabHead = '<div class="Groupbox contentpagelist draggablelist" draggable="true"><span style="background-image:url(svg/tabicons/' + iconName + '.svg);" class="pagerHeadLineIcon '+ myText +'"></span><span class="pagerHeadLine">Contentpage </span><span title="delete Contentpage" class="emosbutton editcontentpagelist delete"></span><span title="edit Contentpage" class="emosbutton editcontentpagelist buttonClose"></span>';
        tabFoot = '</div>';
    } else if(afterDelete) {
        tabHead = '<span class="pagerHeadLineIcon '+ iconName +'"></span><span class="pagerHeadLine">'+ myText +' </span><span title="delete Contentpage '+  myText +'" class="emosbutton editcontentpagelist delete" data-name="'+ myText +'"></span><span title="edit Contentpage '+  myText +'" class="emosbutton editcontentpagelist buttonEdit" data-name="'+ myText +'"></span>';
    }
    var contentBody = $(tabHead + 
        '<div class="newapp newContentpage">' + 
        '<div class="partbox">' +   
        buildInputGroup('New Contentpage', 'contentpage name', 'contentpagename', 'fl', 'required') +
        buildInputGroup('New Text ID', 'Text ID', 'contentpagetextId', '', 'required') +    '<br class="cl"></div>' +
        buildInputGroup('Visibility OPC ID panel', 'Visibility OPC ID Panel', 'visibleopcIdCp', '', '') + 
        '<div class="inputGroup uservisiblepanelCP"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +            
        '<div class="">' +
        '<span class="pagerHeadLine block">Block</span>' +
        '<div class="Groupbox inner innerbox block"></div>' +            
        '<span title="add a new Block" class="emosbutton addButton addBlock"></span><span title="add a new Block from Toolbox" class="emosbutton addButton insertblock fromClipboard"></span>' +
        '<br class="cl"></div>' +
        '</div>' +
        tabFoot);
    if(addNew){
        contentBody.find("input[name='contentpagename']")[0].Textvalue = [];
        contentBody.find("input[name='contentpagename']")[0].Textvalue.push(tempData[0]);
        contentBody.find("input[name='contentpagetextId']")[0].TextIDvalue = [];
        contentBody.find("input[name='contentpagetextId']")[0].TextIDvalue.push(tempData[1]);
        contentBody.find(".uservisiblepanelCP")[0].VisibleAtRight = tempData.VisibleAtRight;
        contentBody.find('input[name=visibleopcIdCp]')[0].VisibleOPCID = '';
        contentBody[0]['myObjId'] = testIndex;
        contentBody[0]['myChilds'] = '';
        contentBody[0]['myParent'] = jsonResults.data.windowData.PageControl[addNewNum]['AddPageTab']['AddPageControl'][testIndex];
        contentBody[0]['myObjId'] = position;
    }    
        contentBody.find('.uservisiblepanelCP').append(getAuthDropDown());
        
    $('.Groupbox.inner.contentpage').sortable({ 
        items: '.contentpagelist',
        delay: 200,
        stop: function( e, ui ) {
            var parentID = ui.item.closest('.tabslist')[0].myObjId;
            var myId = ui.item[0].myObjId;
            var array = jsonResults.data.windowData.PageControl[parentID].AddPageTab.AddPageControl;
            var gesList = $('.contentpagelist');
            array.move(ui.item[0].myObjId, gesList.index(ui.item));
            $.each($('.contentpagelist'), function(key, val){
                $(val)[0].myObjId = key;
            });            
            validatePreviewJson(true);
        }
    });
    $('.Groupbox.inner.contentpage').disableSelection();
    return contentBody;
}
function editContentPage(parent, pageName, afterDelete) {
    $('.Groupbox.inner.contentpage').sortable("disable").css('overflow', 'initial');
    
    var contentBody = newContentPage(false,false, pageName, afterDelete, parent); 
    var myChilds;    
    $.each(parent[0].myParent, function(key, val){
        myChilds = val;
    });   
    var blockArr = {};
    var blockChildsArr = {};
    var elemCount = 0;
    $.each(myChilds, function (key, val) {
        $.each(val, function(key1, val1){ 
            if(key1 === 'Text'){
                contentBody.find("input[name='contentpagename']").val(val1); 
                contentBody.find("input[name='contentpagename']")[0].Textvalue = [];
                contentBody.find("input[name='contentpagename']")[0].Textvalue.push(val);
            } else if(key1 === 'TextID') {
                contentBody.find("input[name='contentpagetextId']").val(val1);
                contentBody.find("input[name='contentpagetextId']")[0].TextIDvalue = [];
                contentBody.find("input[name='contentpagetextId']")[0].TextIDvalue.push(val);
            } else if (key1 === 'VisibleAtRight') {
                contentBody.find(".uservisiblepanelCP .selectRights li").removeClass('active'); 
                contentBody.find(".uservisiblepanelCP .selectRights li[data-right='"+ val1 +"']").addClass('active'); 
                contentBody.find(".uservisiblepanelCP .dropdown span").text(contentBody.find(".uservisiblepanelCP .selectRights li[data-right='"+ val1 +"']").text());
//                contentBody.find(".uservisiblepanelCP")[0].heinz[0].VisibleAtRight = val1;
                contentBody.find(".uservisiblepanelCP")[0].visipanel = [];
                contentBody.find(".uservisiblepanelCP")[0].visipanel.push(val);
            }  else if(key1 === 'VisibleOPCID') {
                contentBody.find('input[name=visibleopcIdCp]').val(val1);
                contentBody.find('input[name=visibleopcIdCp]')[0].VisibleOPCID = val1;
            } else if (key1 === 'RegAutoHide') {
                
            } else if(key1 === 'AddText' || key1 === 'AddHeadLine'){ 
                elemCount++;
                blockArr[elemCount] = [];
                blockChildsArr[elemCount] = [];
            } else {    
                var obj = {};
                obj[key] = val;
                blockArr[elemCount].push(obj);
                blockChildsArr[elemCount].push(key);
            }
        });                   
    });    
    
    var xCount = 1;
    $.each(myChilds, function (key, val) {
        $.each(val, function(key1, val1){            
            if(key1 === 'AddText' || key1 === 'AddHeadLine'){ 
                //delete val1['VisibleOPCID']; 
                var blockBody = $('<div class="Groupbox blocklist draggablelist" draggable="true" data-name="'+ val1.Text +'"><span class="pagerHeadLine">'+ val1.Text +'</span><span title="copy Block '+  val1.Text +' to Toolbox" class="emosbutton editblocklist toClipboard"></span><span title="copy Block '+  val1.Text +'" class="emosbutton editblocklist copyTab"></span><span title="delete Block '+  val1.Text +'" class="emosbutton editblocklist delete"></span><span title="edit Block '+  val1.Text +'" class="emosbutton editblocklist buttonEdit"></span></div>');
                blockBody[0]['myChilds'] = blockArr[xCount];
                blockBody[0]['myChildsIDs'] = blockChildsArr[xCount];
                blockBody[0]['self'] = val1;
                blockBody[0]['selfObjNum'] = key;
                contentBody.find('.Groupbox.block').append(blockBody);
                xCount++;
            }
        });                   
    });
    parent.append(contentBody);
    $('.Groupbox.inner.block').sortable({ 
        items: '.blocklist',
        delay: 200,
        connectWith: '.Groupbox.inner.block',
        start: function(e,ui){
            ui.item.data('start_pos', ui.item.index());
        },
        stop: function( e, ui ) {
            var tabID = ui.item.closest('.tabslist')[0].myObjId;
            var parentID = ui.item.closest('.contentpagelist')[0].myObjId;
            var array = jsonResults.data.windowData.PageControl[tabID].AddPageTab.AddPageControl[parentID].AddPageTab;
            var myId = ui.item[0].selfObjNum;
            var myChildsNum = ui.item[0].myChilds.length + 1;
            var gesList = $('.blocklist');
            var newPos = gesList.index(ui.item);
            var tempArr = [];
            for (var i = 0; i < myChildsNum; i++) {
                tempArr.push(array[myId + i]);
            };
            var newObjPos;
            var start_pos = ui.item.data('start_pos'); 
            if(start_pos !== ui.item.index()){
                if(ui.originalPosition.top < ui.position.top && ui.position.top - ui.originalPosition.top > 70){  
                    newObjPos = $(gesList[newPos - 1])[0].selfObjNum + $(gesList[newPos - 1])[0].myChilds.length + 1;
                    $.each(tempArr.reverse(), function(key, val){
                        array.splice(newObjPos, 0, val);
                    });
                    array.splice(myId, myChildsNum);
                } else if (ui.originalPosition.top > ui.position.top &&  ui.originalPosition.top - ui.position.top > 70) {
                    newObjPos = $(gesList[newPos + 1])[0].selfObjNum;
                    array.splice(myId, myChildsNum);
                    $.each(tempArr.reverse(), function(key, val){
                        array.splice(newObjPos, 0, val);
                    });
                }            
                setBlockParameter();
                validatePreviewJson(true);
            }
            
        }
    });
    $('.Groupbox.inner.block').disableSelection();
    showScroll($('.configcenter.full'));
}

function newBlock(addNew, secondLevel){
    if(secondLevel === 'secondLevel' && $('.Groupbox.inner.blocksecondLevel .blocklist.secondLevel').length > 0){
        $('.Groupbox.inner.blocksecondLevel').sortable("disable").css('overflow', 'initial');
    } else if(secondLevel === 'thirdLevel' && $('.Groupbox.inner.blockthirdLevel .blocklist.thirdLevel').length > 0){
        $('.Groupbox.inner.blockthirdLevel').sortable("disable").css('overflow', 'initial');
    } else if(!secondLevel && $('.Groupbox.inner.block .blocklist').length > 0){
        $('.Groupbox.inner.block').sortable("disable").css('overflow', 'initial');
    } else if(!secondLevel && $('.Groupbox.inner.block .blocklist').length === 0){
        $('.Groupbox.inner.block').css('overflow', 'initial');
    }
    
    var tabHead = '';
    var tabFoot = '';
    if(!secondLevel){
        secondLevel = '';
    }
    if(addNew){  
        var obj = {
            'AddText': {
                'Bold': "2",
                'Position': "L",
                'Text': "",
                'TextID' : "",
                'VisibleAtRight': "0"
            }
            
        };
        var tempIndex;
        var tempData;
        if(secondLevel === ''){
            tempIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'].push(obj) - 1;
            tempData = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][tempIndex].AddText;
        
        } else if(secondLevel === 'secondLevel') {
            tempIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.subTab]['AddPageControl'][addNew.subcontentpage]['AddPageTab'].push(obj) - 1;
            tempData = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.subTab]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][tempIndex].AddText;
        
        } else {
            tempIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.subTab]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.subsubTab]['AddPageControl'][addNew.subsubcontentpage]['AddPageTab'].push(obj) - 1;
            tempData = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.subTab]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.subsubTab]['AddPageControl'][addNew.subsubcontentpage]['AddPageTab'][tempIndex].AddText;
        
        }
        
        
        tabHead = '<div class="Groupbox blocklist '+ secondLevel +' draggablelist" draggable="true"><span class="pagerHeadLine">Block </span><span title="copy Block" class="emosbutton editblocklist copyTab"></span><span title="delete Block" class="emosbutton editblocklist delete"></span><span title="edit Block" class="emosbutton editblocklist buttonClose"></span>';
        tabFoot = '</div>';
    }
    var id = getId();
    var blockBody = $(tabHead + 
        '<div class="newapp newBlock'+ secondLevel +'">' + 
        '<div class="partbox"><span class="pagerHeadLine" style="display: block;"></span>' +
        buildInputGroup('New Block', 'block name', 'blockname'+ secondLevel, 'fl', '') +
        buildInputGroup('New Text ID', 'Text ID', 'blocktextId'+ secondLevel, '', '') +   
        buildInputGroup('Visibility OPC ID panel', 'Visibility OPC ID Panel', 'visibleopcIdBl' + secondLevel, '', '') + 
        '<div class="inputGroup uservisiblepanelBL'+ secondLevel +' fl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +    
        '<div class="showhide fl"><input class="plantcheckbox" type="checkbox" name="showhide'+ secondLevel +'" value="true">show on load</div>' +
        '<br class="cl"></div>' +
        '<div>' +
        '<span class="pagerHeadLine element">Element</span>' +
        '<div class="Groupbox inner innerbox element '+ secondLevel +'"></div>' +            
        '<span title="add a new Element" class="emosbutton addButton addElement '+ secondLevel +'" style="text-align: center;font-size: 20px;font-weight: bold;color: #3b4654">+</span><span title="add a new Element from Toolbox" class="emosbutton addButton insertelement fromClipboard '+ secondLevel +'"></span>' +
        '<br class="cl"></div>' +
        '</div>' +
        tabFoot);
    if(addNew){
        blockBody.find("input[name='blockname"+ secondLevel +"']").val(tempData.Text);
        blockBody.find("input[name='blocktextId"+ secondLevel +"']").val(tempData.TextID);
        blockBody[0]['selfObjNum'] = tempIndex;
        blockBody[0]['self'] = tempData;
        blockBody[0].myChilds = [];
        blockBody[0].myChildsIDs  = [];
    }
    blockBody.find('.uservisiblepanelBL'+ secondLevel).append(getAuthDropDown());
    
    return blockBody;
}
function editBlock(parent,secondLevel, childs, myChildsIDs, data, selfObjNum ) {
//    $('.Groupbox.inner.block').sortable("disable").css('overflow', 'initial');
    $('.Groupbox.inner.block').sortable("disable").css('overflow', 'initial');
    var classLevel;
    if(!secondLevel){
        secondLevel = '';
        classLevel = '';
    } else {
        classLevel = '.' + secondLevel;
    }
//    $('.Groupbox.inner.block').sortable("disable");
    var blockBody = newBlock(false, secondLevel);
    var self;
    var myChilds;
    if(data){
        blockBody[0]['myChilds'] = childs;
        blockBody[0]['myChildsIDs'] = myChildsIDs;
        blockBody[0]['self'] = data;
        blockBody[0]['selfObjNum'] = selfObjNum;
        self = data;
        myChilds = childs;
    } else {
        self = parent[0].self;
        myChilds = parent[0].myChilds;
    }
    
    blockBody.find("input[name='blockname"+ secondLevel +"']").val(self.Text);
    blockBody.find("input[name='blocktextId"+ secondLevel +"']").val(self.TextID);
    blockBody.find("input[name='showhide"+ secondLevel +"']").prop("checked", self.showHide);
    blockBody.find(".uservisiblepanelBL"+ secondLevel +" .selectRights li").removeClass('active'); 
    blockBody.find(".uservisiblepanelBL"+ secondLevel +" .selectRights li[data-right='"+ self.VisibleAtRight +"']").addClass('active'); 
    blockBody.find(".uservisiblepanelBL"+ secondLevel +" .dropdown span").text(blockBody.find(".uservisiblepanelBL"+ secondLevel +" .selectRights li[data-right='"+ self.VisibleAtRight +"']").text());
    blockBody.find("input[name='visibleopcIdBl"+ secondLevel +"']").val(self.VisibleOPCID);
    $.each(myChilds, function (key, val) {
        $.each(val, function(key1, val1){
            $.each(val1, function(key2, val2) {
                if(!val2.Text){
                    val2.Text = key2.replace('Add','');
                }
                var elementBody = $('<div class="Groupbox elementlist '+ secondLevel +'"><span class="pagerHeadLine '+ key2 +'">'+ val2.Text +'</span><span title="copy Element '+  val2.Text +' to Toolbox" class="emosbutton editelementlist '+ secondLevel +' toClipboard"></span><span title="copy Element '+  val2.Text +'" class="emosbutton editelementlist '+ secondLevel +' copyTab"></span><span title="delete Element '+  val2.Text +'" class="emosbutton editelementlist '+ secondLevel +' delete"></span><span title="edit Element '+  val2.Text +'" class="emosbutton editelementlist '+ secondLevel +' buttonEdit"></span></div>');
                elementBody[0]['self'] = val2;
                elementBody[0]['selfObjNum'] = key1;
                elementBody[0]['selftype'] = key2;
                elementBody[0]['selfParent'] = val1;
                if(val2.Text === 'PageControl'){
                    elementBody.find('.copyTab').remove();
                    elementBody.find('.toClipboard').remove();
                }
                blockBody.find('.Groupbox.element').append(elementBody);
            });
            
        });                   
    });   
    parent.append(blockBody);
    if(secondLevel !== ''){
        parent.find('.inputGroup').removeClass('fl');
    }
    
    dragElements(classLevel, secondLevel);
    
    showScroll($('.configcenter.full'));
}
// drag and drop funktion. aufgeschlüsselt für die einzelnen ebenen
function dragElements(classLevel, secondLevel){
    $('.Groupbox.inner.element' + classLevel).sortable({
        items: '.elementlist' + classLevel,
        scroll: true,
        delay: 200,
        connectWith: '.Groupbox.inner.element' + classLevel,
        start: function(e, ui){
            ui.item.data('start_pos', ui.item.index());
        },
        stop: function( e, ui ) {
            var tabID = ui.item.closest('.tabslist')[0].myObjId;
            var parentID = ui.item.closest('.contentpagelist')[0].myObjId;            
            var array;
            var subtabID;
            var subcontentpageID;
            if(secondLevel === 'secondLevel'){
                subtabID = ui.item.closest('.blocklist.secondLevel').closest('.elementlist')[0].selfObjNum;
                subcontentpageID = ui.item.closest('.subcontentpagelist')[0].myObjId;
                array = jsonResults.data.windowData.PageControl[tabID]['AddPageTab']['AddPageControl'][parentID]['AddPageTab'][subtabID]['AddPageControl'][subcontentpageID]['AddPageTab'];
            } else if(secondLevel === 'thirdLevel') {
                subtabID = ui.item.closest('.elementlist:not(.thirdLevel):not(.secondLevel)')[0].selfObjNum;
                subcontentpageID = ui.item.closest('.subcontentpagelist:not(.thirdLevel)')[0].myObjId;
                var subsubTab = ui.item.closest('.elementlist.secondLevel')[0].selfObjNum;
                var subsubcontentpage = ui.item.closest('.subcontentpagelist.thirdLevel')[0].myObjId;
                array = jsonResults.data.windowData.PageControl[tabID]['AddPageTab']['AddPageControl'][parentID]['AddPageTab'][subtabID]['AddPageControl'][subcontentpageID]['AddPageTab'][subsubTab]['AddPageControl'][subsubcontentpage]['AddPageTab'];
            } else {
                array = jsonResults.data.windowData.PageControl[tabID].AddPageTab.AddPageControl[parentID].AddPageTab;
            }
            var myId = ui.item[0].selfObjNum;
            var gesList = $('.elementlist' + classLevel);   
            var newPos = gesList.index(ui.item);
            var newObjPos;
            var start_pos = ui.item.data('start_pos'); 
            if(start_pos !== ui.item.index()){
                if(ui.originalPosition.top < ui.position.top){  
                    newObjPos = $(gesList[newPos - 1])[0].selfObjNum;                
                } else {
                    newObjPos = $(gesList[newPos + 1])[0].selfObjNum;                
                }
                array.move(myId, newObjPos); 
                setBlockParameter(secondLevel);
                validatePreviewJson(true);
                var newNumbers = ui.item.closest('.blocklist' + classLevel)[0].myChilds;
                var actElements = ui.item.closest('.blocklist' + classLevel).find('.elementlist' + classLevel);
                
                $.each(newNumbers, function (key, val) {
                    var elem = actElements[key];
                    $.each(val, function(key1, val1){
                        $.each(val1, function(key2, val2) {                    
                            $(elem)[0]['self'] = val2;
                            $(elem)[0]['selfObjNum'] = key1;
                            $(elem)[0]['selftype'] = key2;
                        });
                    });                   
                });
            }
        }
    });
    $('.Groupbox.inner.element.secondLevel').disableSelection();
}
function newElement(whatElement, parents, val, structure, newChildID, secondLevel ){ 
    var parent = $(this).closest('.blocklist');
    if(parent.hasClass('secondLevel')){
        $('.Groupbox.inner.element.secondLevel').sortable("disable").css('overflow', 'initial');
    } else if(parent.hasClass('thirdLevel')){
        $('.Groupbox.inner.element.thirdLevel').sortable("disable").css('overflow', 'initial');
    } else {
        $('.Groupbox.inner.element:not(.secondLevel):not(.thirdLevel)').sortable("disable").css('overflow', 'initial');
    }
    var tabHead = '';
    var listIcon = '';
    if(!secondLevel){
        secondLevel = '';
    }
    if(parents){  
        var obj = {};
        if(whatElement === 'AddPageControl') {
            listIcon = '<span class="pagerHeadLineIcon subsubPage"></span>';
            obj = {
                'AddPageControl':[]                
            }; 
        } else {
            obj[whatElement] = {};
        }
        
        var tempIndex;
        var tempData;
        if(secondLevel === 'thirdLevel'){
            if(newChildID) {
                tempIndex = newChildID;
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][parents.subsubTab]['AddPageControl'][parents.subsubcontentpage]['AddPageTab'].splice(tempIndex, 0, obj);
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][parents.subsubTab]['AddPageControl'][parents.subsubcontentpage]['AddPageTab'][tempIndex][whatElement] = structure;

            } else {
                tempIndex = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][parents.subsubTab]['AddPageControl'][parents.subsubcontentpage]['AddPageTab'].push(obj) - 1;
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][parents.subsubTab]['AddPageControl'][parents.subsubcontentpage]['AddPageTab'][tempIndex][whatElement] = structure;
            }
            if(whatElement !== 'AddPageControl') {
//                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][tempIndex][whatElement] = structure;
            }        
            tempData = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][parents.subsubTab]['AddPageControl'][parents.subsubcontentpage]['AddPageTab'][tempIndex][whatElement];

        } else if(secondLevel === 'secondLevel'){
            if(newChildID) {
                tempIndex = newChildID;
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'].splice(tempIndex, 0, obj);
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][tempIndex][whatElement] = structure;

            } else {
                tempIndex = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'].push(obj) - 1;
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][tempIndex][whatElement] = structure;
                
            }
            if(whatElement !== 'AddPageControl') {
//                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][tempIndex][whatElement] = structure;
            }        
            tempData = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][tempIndex][whatElement];
            tabHead[0].selfParent = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][tempIndex];
        } else {
            if(newChildID) {
                tempIndex = newChildID;
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'].splice(tempIndex, 0, obj);
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][tempIndex][whatElement] = structure;

            } else {
                tempIndex = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'].push(obj) - 1;
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][tempIndex][whatElement] = structure;
            }
            if(whatElement !== 'AddPageControl') {
                jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][tempIndex][whatElement] = structure;
            }        
            tempData = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][tempIndex][whatElement];

        }
        tabHead = $('<div class="Groupbox elementlist '+ secondLevel +'">'+ listIcon +'<span class="pagerHeadLine">'+ val +' </span><span title="copy Element '+  val +' to Toolbox" class="emosbutton editelementlist '+ secondLevel +' toClipboard"></span><span title="copy Element" class="emosbutton editelementlist '+ secondLevel +' copyTab"></span><span title="delete Element" class="emosbutton editelementlist '+ secondLevel +' delete"></span><span title="edit Element" class="emosbutton editelementlist '+ secondLevel +' buttonClose"></span></div>');
        tabHead[0].self = tempData;
        tabHead[0].selfObjNum = tempIndex;
        tabHead[0].selftype = whatElement;
    } 
    var parentPosition;
    if(secondLevel === 'thirdLevel'){
        parentPosition = $('.newSubContentpage.thirdLevel').parent()[0].myObjId;
        $('.newSubContentpage.thirdLevel').parent()[0].myParent = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parents.subcontentpage]['AddPageTab'][parents.subsubTab]['AddPageControl'][parentPosition];
    } else if(secondLevel === 'secondLevel'){
        parentPosition = $('.newSubContentpage').parent()[0].myObjId;
        $('.newSubContentpage').parent()[0].myParent = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parents.contentpage]['AddPageTab'][parents.subTab]['AddPageControl'][parentPosition];
    } else {
        parentPosition = $('.newContentpage').parent()[0].myObjId;
        $('.newContentpage').parent()[0].myParent = jsonResults.data.windowData.PageControl[parents.tabID]['AddPageTab']['AddPageControl'][parentPosition];
    }
    setBlockParameter(secondLevel);
    if(whatElement === 'AddLine'){
        tabHead.find('.buttonClose').remove();
    }
    return tabHead;
}
function setBlockParameter(secondLevel){
    var newChilds;
//    $.each($('.newContentpage').parent()[0].myParent, function(key, val){
//        newChilds = val;
//    });
    if(secondLevel === 'thirdLevel'){
        newChilds = $('.newSubContentpage.thirdLevel').parent()[0].myParent;
    } else if(secondLevel === 'secondLevel'){
        newChilds = $('.newSubContentpage').parent()[0].myParent;
    } else{
        secondLevel = '';
        newChilds = $('.newContentpage').parent()[0].myParent;
    }
    if(secondLevel !== ''){
        secondLevel = '.' + secondLevel;
    }
    var blockArr = {};
    var blockChildsArr = {};
    var blocks = $('.blocklist'+ secondLevel);
    var elemCount = 0;
    $.each(newChilds['AddPageTab'], function (key, val) {
        $.each(val, function(key1, val1){  
            if(key1 === 'Text'){                        
            } else if(key1 === 'TextID') {
            } else if (key1 === 'VisibleAtRight') {

            } else if (key1 === 'VisibleOPCID') {

            } else if (key1 === 'RegAutoHide') {

            } else if(key1 === 'AddText' || key1 === 'AddHeadLine'){ 
                $(blocks[elemCount])[0]['selfObjNum'] = key;
                elemCount++;
                
                blockArr[elemCount] = [];
                blockChildsArr[elemCount] = [];
            } else {    
                
                var obj = {};
                obj[key] = val;
                blockArr[elemCount].push(obj);
                blockChildsArr[elemCount].push(key);
            }
        });                   
    }); 
    
//    var blocks = $('.blocklist'+ secondLevel);
    $.each(blocks, function(key, val){
        $(val)[0]['myChilds'] = blockArr[key +1];
        $(val)[0]['myChildsIDs'] = blockChildsArr[key +1];
    });
}
function editElement(parent){
    if(parent.hasClass('secondLevel')){
        $('.Groupbox.inner.element.secondLevel').sortable("disable").css('overflow', 'initial');
    } else if(parent.hasClass('thirdLevel')){
        $('.Groupbox.inner.element.thirdLevel').sortable("disable").css('overflow', 'initial');
    } else {
        $('.Groupbox.inner.element:not(.secondLevel):not(.thirdLevel)').sortable("disable").css('overflow', 'initial');
    }
//    $('.Groupbox.inner.element').sortable("disable").css('overflow', 'initial');
    $('.Groupbox.inner.block,.Groupbox.inner.blocksecondLevel,.Groupbox.inner.blockthirdLevel').css('overflow', 'initial');
    var self = parent[0].self;
    getElementEditMask(parent[0].selftype, parent);
    setElementData(parent, self);
}
function newPageControl(addNew){
    var tabHead = '';
    var tabFoot = '';
    var id = getId();
    if(addNew){
        var obj = {
            //'AddPageControl':{
                'AddPageTab': [
                    {'Text': ''},
                    {'TextID':''},
                    {'VisibleAtRight': "0"}
                ]
            //}
        };
        var tmpIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'].push(obj) -1;
//        var tmpIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber].push(obj) -1;
        tabHead = '<div class="Groupbox pagecontrollist draggablelist"><span class="pagerHeadLineIcon"></span><span class="pagerHeadLine"></span><span title="delete" class="emosbutton editpagecontrollist delete"></span><span title="edit" class="emosbutton editpagecontrollist buttonClose"></span>';
        tabFoot = '</div>';
    } 
//    else if(afterDelete) {
//        tabHead = '<span class="pagerHeadLineIcon '+ selector +'"></span><span class="pagerHeadLine">'+ selector +'</span><span title="delete Tab '+  selector +'" class="emosbutton edittabslist delete" data-name="'+ selector +'"></span><span title="edit Tab '+  selector +'" class="emosbutton edittabslist buttonEdit" data-name="'+ selector +'"></span>';
//    }
    
    var tabBody = $(tabHead +
        '<div class="newapp newElement">' + 
        '<div class="partbox">' + 
        '<br class="cl"></div>' +
        '<div>' +
        '<span class="pagerHeadLine block">SubContentpage</span>' +
        '<div class="Groupbox inner innerbox subcontentpage"></div>' +            
        '<span title="add a new SubContentpage" class="emosbutton addButton addSubContentpage"></span>' +
        '<br class="cl"></div>' +
        '</div>' +
        tabFoot);
    
    if(addNew){
        tabBody[0].myObjId = tmpIndex;
        tabBody[0].myChilds = obj.AddPageTab;
    }
    return tabBody;
}
function editPageControl(parent, dataFile, afterDelete) {
    var newLevel = '';
    var classLevel = '';
    if(parent.hasClass('secondLevel')){
        newLevel = 'thirdLevel';
        classLevel = '.thirdLevel';
    }
    $('.Groupbox.inner.element').sortable("disable").css('overflow', 'initial');
    var tabBody = newPageControl(false);  
    var myChilds = parent[0].self;
    $.each(myChilds, function(key, val){
        $.each(val, function(key1, val1){
            var myText;
            $.each(val1, function(key2, val2){
                 $.each(val2, function(key3, val3){
                    if(key3 === 'Text'){
                        myText = val3;
                    }
                });
            });
            var contentpagelistBody = $('<div class="Groupbox subcontentpagelist '+ newLevel +' draggablelist" data-name="'+ myText +'"><span class="pagerHeadLineIcon subsubPage"></span><span class="pagerHeadLine">'+ myText +'</span><span title="delete SubContentpage '+  myText +'" class="emosbutton editsubcontentpagelist delete" data-name="'+ myText +'"></span><span title="edit SubContentpage '+  myText +'" class="emosbutton editsubcontentpagelist buttonEdit" data-name="'+ myText +'"></span></div>');
            contentpagelistBody[0]['myChilds'] = val1;
            contentpagelistBody[0]['myParent'] = val;
            contentpagelistBody[0]['myObjId'] = key;
            tabBody.find('.Groupbox.subcontentpage').append(contentpagelistBody);
        });
    });
    
    parent.append(tabBody);
    $('.Groupbox.inner.subcontentpage').sortable({ 
        items: '.subcontentpagelist' + classLevel,
        delay: 200,
        stop: function( e, ui ) {
            var tabID = ui.item.closest('.tabslist')[0].myObjId;
            var contentpageID = ui.item.closest('.contentpagelist')[0].myObjId;
            var array;
            if(classLevel === '.thirdLevel') {                
                var parentID = ui.item.closest('.elementlist.secondLevel')[0].selfObjNum;
                var parentElement = ui.item.closest('.blocklist.secondLevel').closest('.elementlist')[0].selfObjNum;
                var subcontentpageID = ui.item.parent().closest('.subcontentpagelist')[0].myObjId;
                array = jsonResults.data.windowData.PageControl[tabID]['AddPageTab']['AddPageControl'][contentpageID]['AddPageTab'][parentElement]['AddPageControl'][subcontentpageID]['AddPageTab'][parentID]['AddPageControl'];
            } else {
                var parentID = ui.item.closest('.elementlist')[0].selfObjNum;
                array = jsonResults.data.windowData.PageControl[tabID]['AddPageTab']['AddPageControl'][contentpageID]['AddPageTab'][parentID]['AddPageControl'];
            
            }
            
            
            var gesList = $('.subcontentpagelist' + classLevel);
            array.move(ui.item[0].myObjId, gesList.index(ui.item));
            $.each(gesList, function(key, val){
                $(val)[0].myObjId = key;
            });            
            validatePreviewJson(true);
        }
    });
    $('.Groupbox.inner.subcontentpage').disableSelection();
    showScroll($('.configcenter.full'));
}
function getSubContenpage(addNew, secondLevelPageControl, pagename, afterDelete){ 
    var blockPart = '<div class="Groupbox inner innerbox blockthirdLevel"></div>' +            
        '<span title="add a new Block" class="emosbutton addButton addBlock subPage thirdLevel"></span><span title="add a new Block from Toolbox" class="emosbutton addButton thirdLevel insertblock fromClipboard"></span>';
    if(!secondLevelPageControl) {
        secondLevelPageControl = '';
        blockPart = '<div class="Groupbox inner innerbox blocksecondLevel"></div>' +            
                '<span title="add a new Block" class="emosbutton addButton addBlock subPage secondLevel"></span><span title="add a new Block from Toolbox" class="emosbutton secondLevel addButton insertblock fromClipboard"></span>';
    }
    var tabHead = '';
    var tabFoot = '';
    if(addNew){
        var obj = {
            'AddPageTab': [
                {'Text': ''},
                {'TextID':''},
                {'VisibleAtRight': "0"}
            ]
        };
        if(!secondLevelPageControl){
            var testIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'].push(obj) -1;
            var tempData = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][testIndex]['AddPageTab'];
        } else {
            var testIndex = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.elementnumbersecondLevel]['AddPageControl'].push(obj) -1;
            var tempData = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.elementnumbersecondLevel]['AddPageControl'][testIndex]['AddPageTab'];
            
        }
        tabHead = '<div class="Groupbox subcontentpagelist '+ secondLevelPageControl +' draggablelist"><span class="pagerHeadLineIcon subsubPage"></span><span class="pagerHeadLine">SubContentpage </span><span title="delete SubContentpage" class="emosbutton editsubcontentpagelist '+ secondLevelPageControl +' delete"></span><span title="edit SubContentpage" class="emosbutton editsubcontentpagelist '+ secondLevelPageControl +' buttonClose"></span>';
        tabFoot = '</div>';
    } else if(afterDelete) {
        tabHead = '<div class="Groupbox subcontentpagelist '+ secondLevelPageControl +' draggablelist"><span class="pagerHeadLineIcon subsubPage"></span><span class="pagerHeadLine">'+ pagename +' </span><span title="delete Contentpage '+  pagename +'" class="emosbutton editsubcontentpagelist delete" data-name="'+ pagename +'"></span><span title="edit Contentpage '+  pagename +'" class="emosbutton editsubcontentpagelist buttonEdit" data-name="'+ pagename +'"></span></div>';
    }
    var contentBody = $(tabHead + 
        '<div class="newapp newElement newSubContentpage '+ secondLevelPageControl +'">' + 
        '<div class="partbox">' +   
        buildInputGroup('New SubContentpage', 'subcontentpage name', 'subcontentpagename'+ secondLevelPageControl, '', 'required') +
        buildInputGroup('New Text ID', 'Text ID', 'subcontentpagetextId'+ secondLevelPageControl, '', 'required') +    '<br class="cl"></div>' +
        '<div class="inputGroup uservisiblepanelSubCP'+ secondLevelPageControl +'"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +            
        '<div class="contentOverflow">' +
        '<span class="pagerHeadLine block">Block</span>' +
        blockPart +
        '<br class="cl"></div>' +
        '</div>' +
        tabFoot);
    if(addNew){
        contentBody.find("input[name='subcontentpagename"+ secondLevelPageControl +"']")[0].Textvalue = [];
        contentBody.find("input[name='subcontentpagename"+ secondLevelPageControl +"']")[0].Textvalue.push(tempData[0]);
        contentBody.find("input[name='subcontentpagetextId"+ secondLevelPageControl +"']")[0].TextIDvalue = [];
        contentBody.find("input[name='subcontentpagetextId"+ secondLevelPageControl +"']")[0].TextIDvalue.push(tempData[1]);
        contentBody[0]['myObjId'] = testIndex;
        contentBody[0]['myChilds'] = '';
        if(secondLevelPageControl){
            contentBody[0]['myChilds'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.elementnumbersecondLevel]['AddPageControl'][testIndex];
            contentBody[0]['myParent'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.elementnumbersecondLevel]['AddPageControl'][testIndex];
            contentBody[0]['self'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][addNew.subcontentpage]['AddPageTab'][addNew.elementnumbersecondLevel]['AddPageControl'][testIndex];
        } else {
            contentBody[0]['myChilds'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][testIndex];
            contentBody[0]['myParent'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][testIndex];        
            contentBody[0]['self'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][testIndex];
        }
        
//        contentpageList.find('.newSubContentpage')[0]['self'] = jsonResults.data.windowData.PageControl[addNew.tabID]['AddPageTab']['AddPageControl'][addNew.contentpage]['AddPageTab'][addNew.elementnumber]['AddPageControl'][testIndex];
//        contentBody[0]['myObjId'] = position;
    }
    contentBody.find('.uservisiblepanelSubCP'+ secondLevelPageControl).append(getAuthDropDown());
    return contentBody;
}
function editSubContentpage(parent, pageName, afterDelete) {
    var nextLevel = '';
    var nextBlockLevel = 'secondLevel';
    if(parent.closest('.elementlist').hasClass('secondLevel')){
        nextLevel = 'thirdLevel';
        nextBlockLevel = 'thirdLevel';
    }
    $('.Groupbox.inner.subcontentpage').sortable("disable").css('overflow', 'initial');
    var contentBody = getSubContenpage(false, nextLevel, pageName, afterDelete); 
//    var myChilds;
//    $.each(parent[0].self, function(key, val){
//        if(val.AddPageTab){
//            myChilds = val.AddPageTab;
//        }        
//    }); 
    var myChilds = parent[0].myChilds;
    var blockArr = {};
    var blockChildsArr = {};
    var elemCount = 0;
    $.each(myChilds, function (key, val) {
        $.each(val, function(key1, val1){ 
            if(key1 === 'Text'){
                contentBody.find("input[name='subcontentpagename"+ nextLevel +"']").val(val1); 
                contentBody.find("input[name='subcontentpagename"+ nextLevel +"']")[0].Textvalue = [];
                contentBody.find("input[name='subcontentpagename"+ nextLevel +"']")[0].Textvalue.push(val);
            } else if(key1 === 'TextID') {
                contentBody.find("input[name='subcontentpagetextId"+ nextLevel +"']").val(val1);
                contentBody.find("input[name='subcontentpagetextId"+ nextLevel +"']")[0].TextIDvalue = [];
                contentBody.find("input[name='subcontentpagetextId"+ nextLevel +"']")[0].TextIDvalue.push(val); 
            } else if (key1 === 'VisibleAtRight') {
                contentBody.find(".uservisiblepanelSubCP"+ nextLevel +" .selectRights li").removeClass('active'); 
                contentBody.find(".uservisiblepanelSubCP"+ nextLevel +" .selectRights li[data-right='"+ val1 +"']").addClass('active'); 
                contentBody.find(".uservisiblepanelSubCP"+ nextLevel +" .dropdown span").text(contentBody.find(".uservisiblepanelSubCP"+ nextLevel +" .selectRights li[data-right='"+ val1 +"']").text());
                contentBody.find(".uservisiblepanelSubCP"+ nextLevel)[0].visipanel = [];
                contentBody.find(".uservisiblepanelSubCP"+ nextLevel)[0].visipanel.push(val);
            }  else if (key1 === 'RegAutoHide') {
                
            } else if(key1 === 'AddText' || key1 === 'AddHeadLine'){ 
                elemCount++;
                blockArr[elemCount] = [];
                blockChildsArr[elemCount] = [];
            } else {    
                var obj = {};
                obj[key] = val;
                blockArr[elemCount].push(obj);
                blockChildsArr[elemCount].push(key);
            }
        });                   
    });    
    var xCount = 1;
    var blocklevel = 'blocksecondLevel';
    if(nextLevel === 'thirdLevel'){
        blocklevel = 'blockthirdLevel';
    }
    $.each(myChilds, function (key, val) {
        $.each(val, function(key1, val1){            
            if(key1 === 'AddText' || key1 === 'AddHeadLine'){ 
                delete val1['VisibleOPCID']; 
                var blockBody = $('<div class="Groupbox blocklist '+ nextBlockLevel +' draggablelist" draggable="true" data-name="'+ val1.Text +'"><span class="pagerHeadLine">'+ val1.Text +'</span><span title="copy Block '+  val1.Text +' to Toolbox" class="emosbutton editblocklist '+ nextBlockLevel +' toClipboard"></span><span title="copy Block '+  val1.Text +'" class="emosbutton editblocklist '+ nextBlockLevel +' copyTab"></span><span title="delete Block '+  val1.Text +'" class="emosbutton editblocklist '+ nextBlockLevel +' delete"></span><span title="edit Block '+  val1.Text +'" class="emosbutton editblocklist '+ nextBlockLevel +' buttonEdit"></span></div>');
                blockBody[0]['myChilds'] = blockArr[xCount];
                blockBody[0]['myChildsIDs'] = blockChildsArr[xCount];
                blockBody[0]['self'] = val1;
                blockBody[0]['selfObjNum'] = key;
                contentBody.find('.Groupbox.' + blocklevel).append(blockBody);
                xCount++;
            }
        });                   
    });
    parent.append(contentBody);
    $('.Groupbox.inner.' + blocklevel).sortable({ 
        items: '.blocklist.' + nextBlockLevel,
        delay: 200,
        start: function(e, ui){
            ui.item.data('start_pos', ui.item.index());
        },
        stop: function( e, ui ) {
            var tabID = ui.item.closest('.tabslist')[0].myObjId;
            var parentID = ui.item.closest('.contentpagelist')[0].myObjId;
            var array;
            var subtabID;
            var subcontentpageID;
            if(nextBlockLevel === 'secondLevel') {
                subtabID = ui.item.closest('.blocklist.secondLevel').closest('.elementlist')[0].selfObjNum;
                subcontentpageID = ui.item.closest('.subcontentpagelist')[0].myObjId;
                array = jsonResults.data.windowData.PageControl[tabID]['AddPageTab']['AddPageControl'][parentID]['AddPageTab'][subtabID]['AddPageControl'][subcontentpageID]['AddPageTab'];
            } else if(nextBlockLevel === 'thirdLevel'){
                subtabID = ui.item.closest('.elementlist:not(.thirdLevel):not(.secondLevel)')[0].selfObjNum;
                subcontentpageID = ui.item.closest('.subcontentpagelist:not(.thirdLevel)')[0].myObjId;
                var subsubTab = ui.item.closest('.elementlist.secondLevel')[0].selfObjNum;
                var subsubcontentpage = ui.item.closest('.subcontentpagelist.thirdLevel')[0].myObjId;
                array = jsonResults.data.windowData.PageControl[tabID]['AddPageTab']['AddPageControl'][parentID]['AddPageTab'][subtabID]['AddPageControl'][subcontentpageID]['AddPageTab'][subsubTab]['AddPageControl'][subsubcontentpage]['AddPageTab'];
            }
            
            
            var myId = ui.item[0].selfObjNum;
            var myChildsNum = ui.item[0].myChilds.length + 1;
            var gesList = $('.blocklist.' + nextBlockLevel);
            var newPos = gesList.index(ui.item);
            var tempArr = [];
            for (var i = 0; i < myChildsNum; i++) {
                tempArr.push(array[myId + i]);
            };
            
            var newObjPos;
            var start_pos = ui.item.data('start_pos'); 
            if(start_pos !== ui.item.index()){
                if(ui.originalPosition.top < ui.position.top){  
                    newObjPos = $(gesList[newPos - 1])[0].selfObjNum + $(gesList[newPos - 1])[0].myChilds.length + 1;
                    $.each(tempArr.reverse(), function(key, val){
                        array.splice(newObjPos, 0, val);
                    });
                    array.splice(myId, myChildsNum);
                } else {
                    newObjPos = $(gesList[newPos + 1])[0].selfObjNum;
                    array.splice(myId, myChildsNum);
                    $.each(tempArr.reverse(), function(key, val){
                        array.splice(newObjPos, 0, val);
                    });
                }
            }
            setBlockParameter(nextBlockLevel);
            validatePreviewJson(true);
        }
    });
    $('.Groupbox.inner.' +  + blocklevel).disableSelection();
    if(parent.closest('.elementlist').hasClass('secondLevel')){
        parent.find('.inputGroup').removeClass('fl');
    }
    showScroll($('.configcenter.full'));
}
function getCopyBlock(self, data){
    self = $(self);
    var secondLevel = '';
    if(self.hasClass('secondLevel')){
        secondLevel = 'secondLevel';
    } else if(self.hasClass('thirdLevel')){
        secondLevel = 'thirdLevel';
    }
    
    if(self.hasClass('thirdLevel') && self.closest('.newSubContentpage').length > 0){
        if(self.closest('.newSubContentpage').find('.newBlockthirdLevel').length > 0){
            self.closest('.newSubContentpage').find('.newBlockthirdLevel').remove();
        }
    } else if(self.hasClass('secondLevel') && self.closest('.newSubContentpage').length > 0){
        if(self.closest('.newSubContentpage').find('.newBlocksecondLevel').length > 0){
            self.closest('.newSubContentpage').find('.newBlocksecondLevel').remove();
        }
    } else {
        if(self.closest('.Groupbox.newjson').find('.newBlock').length > 0){
            self.closest('.Groupbox.newjson').find('.newBlock').remove();
        }
    }
    var contentpagedata;
    var content;
    if(self.hasClass('secondLevel')){
        contentpagedata = self.closest('.subcontentpagelist')[0].myParent.AddPageTab;
        if(data){
            $.each(data, function(key, val){
                contentpagedata.push(JSON.parse(JSON.stringify(val)));
            }); 
        } else {   
            contentpagedata.push(JSON.parse(JSON.stringify(contentpagedata[self.parent()[0].selfObjNum])));
            $.each(self.parent()[0].myChildsIDs, function(key, val){
                contentpagedata.push(JSON.parse(JSON.stringify(contentpagedata[val])));
            }); 
        }        
        content = self.closest('.subcontentpagelist');
        self.closest('.subcontentpagelist').empty();
        editSubContentpage(content, content.attr('data-name'), true); 
        if(!data){
            editBlock($('.blocklist.secondLevel:last'), secondLevel);  
            setTimeout(function () {
                var scrollTo = $('.blocklist.secondLevel:last').find('.newBlocksecondLevel').offset().top -60 - $('.configcenter.full').offset().top;
                $('.configcenter.full').stop().animate({
                    scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                });
            }, 100);
            var tempVal = 'copy of ' + $('.blocklist:not(.thirdLevel):last').find("input[name='blockname"+ secondLevel +"']").val();
            $('.blocklist:not(.thirdLevel):last').find("input[name='blockname"+ secondLevel +"']").val(tempVal);
            $('.blocklist:not(.thirdLevel):last').find(".pagerHeadLine:first").text(tempVal);
        }
        validatePreviewJson(true);
    } else if(self.hasClass('thirdLevel')){
        contentpagedata = self.closest('.subcontentpagelist.thirdLevel')[0].myParent.AddPageTab;  
        if(data){
            $.each(data, function(key, val){
                contentpagedata.push(JSON.parse(JSON.stringify(val)));
            });
        } else{
            contentpagedata.push(JSON.parse(JSON.stringify(contentpagedata[self.parent()[0].selfObjNum])));
            $.each(self.parent()[0].myChildsIDs, function(key, val){
                contentpagedata.push(JSON.parse(JSON.stringify(contentpagedata[val])));
            }); 
        }          
        content = self.closest('.subcontentpagelist.thirdLevel');
        self.closest('.subcontentpagelist.thirdLevel').empty();
        editSubContentpage(content, content.attr('data-name'), true); 
        if(!data){
            editBlock($('.blocklist.thirdLevel:last'), secondLevel);  
            setTimeout(function () {
                var scrollTo = $('.blocklist.thirdLevel:last').find('.newBlockthirdLevel').offset().top -60 - $('.configcenter.full').offset().top;
                $('.configcenter.full').stop().animate({
                    scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                });                
            }, 100);
            var tempVal = 'copy of ' + $('.blocklist.thirdLevel:last').find("input[name='blockname"+ secondLevel +"']").val();
            $('.blocklist.thirdLevel:last').find("input[name='blockname"+ secondLevel +"']").val(tempVal);
            $('.blocklist.thirdLevel:last').find(".pagerHeadLine:first").text(tempVal);
        }
        validatePreviewJson(true);
    } else {
        contentpagedata = self.closest('.contentpagelist')[0].myParent.AddPageTab;
        if(data){
            $.each(data, function(key, val){
                contentpagedata.push(JSON.parse(JSON.stringify(val)));
            });
        } else {
            
            contentpagedata.push(JSON.parse(JSON.stringify(contentpagedata[self.parent()[0].selfObjNum])));
            $.each(self.parent()[0].myChildsIDs, function(key, val){
                contentpagedata.push(JSON.parse(JSON.stringify(contentpagedata[val])));
            }); 
        }
              
        content = self.closest('.contentpagelist');
        self.closest('.contentpagelist').empty();
        editContentPage(content, content.attr('data-name'), true);    
        if(!data){
            editBlock($('.blocklist:last'));  
            setTimeout(function () {
                var scrollTo = $('.blocklist:last').find('.newBlock').offset().top -60 - $('.configcenter.full').offset().top;
                $('.configcenter.full').stop().animate({
                    scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                });
            }, 100);
            
            var tempVal = 'copy of ' + $('.blocklist:not(.secondLevel):not(.thirdLevel):last').find("input[name='blockname"+ secondLevel +"']").val();
            $('.blocklist:not(.secondLevel):not(.thirdLevel):last').find("input[name='blockname"+ secondLevel +"']").val(tempVal);
            $('.blocklist:not(.secondLevel):not(.thirdLevel):last').find(".pagerHeadLine:first").text(tempVal);
        }
        
        validatePreviewJson(true);
    }
}
function getCopyElement(self, data, tool){
    var self = $(self);
    var secondLevel = '';
    if(self.hasClass('secondLevel')){
        secondLevel = 'secondLevel';
    } else if(self.hasClass('thirdLevel')){
        secondLevel = 'thirdLevel';
    }
    var elementType;
    var copyTitle;
    if(!data){
        data = JSON.parse(JSON.stringify(self.parent()[0].self));
        data.Text = 'copy of ' + data.Text;
        elementType = self.parent()[0].selftype;
        copyTitle = self.attr('title').replace('copy Element ', 'copy of ');
    } else {
        elementType = Object.keys(data)[0];
        data = data[Object.keys(data)[0]];
        copyTitle = data.Text;
    }
    if(self.closest('.newBlock').find('.newSubContentpage.thirdLevel').length > 0){
        if(self.closest('.newBlockthirdLevel').find('.newElement').length > 0){
            self.closest('.newBlockthirdLevel').find('.newElement').remove();
        }
    } else if(self.closest('.newBlock').find('.newSubContentpage').length > 0){
        if(self.closest('.newBlock').find('.newSubContentpage').find('.newElement').length > 0){
            self.closest('.newBlock').find('.newSubContentpage').find('.newElement').remove();
        }
    } else {
        if(self.closest('.Groupbox.newjson').find('.newElement').length > 0){
            self.closest('.Groupbox.newjson').find('.newElement').remove();            
        }
    }
    $('.prevImage').remove();
    var placeIDs = {};
    placeIDs.tabID = self.closest('.tabslist')[0].myObjId;
    placeIDs.contentpage = self.closest('.contentpagelist')[0].myObjId;
    placeIDs.block = self.closest('.blocklist')[0].selfObjNum;
    var scrollTo;
    var blockchilds;
    var newChildID;
    var temp;
    if(self.hasClass('secondLevel') || self.parent().hasClass('secondLevel')){
        var parent = self.closest('.newBlock').find('.newBlocksecondLevel').find('.innerbox.element');
        placeIDs.subTab = parent.closest('.elementlist')[0].selfObjNum;
        placeIDs.subcontentpage = parent.closest('.subcontentpagelist')[0].myObjId;
        placeIDs.blocksecondLevel = parent.closest('.blocklist.secondLevel')[0].selfObjNum;
        blockchilds = parent.closest('.blocklist.secondLevel')[0].myChildsIDs;
        newChildID = (blockchilds.length > 0) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : Number(placeIDs.blocksecondLevel) + 1;
    } else if(self.hasClass('thirdLevel') || self.parent().hasClass('thirdLevel')){
        var preparent = self.closest('.newBlock').find('.newBlocksecondLevel').find('.innerbox.element');
        parent = self.closest('.newBlock').find('.newBlockthirdLevel').find('.innerbox.element');
        placeIDs.subTab = preparent.closest('.elementlist')[0].selfObjNum;
        placeIDs.subcontentpage = preparent.closest('.subcontentpagelist')[0].myObjId;
        placeIDs.blocksecondLevel = preparent.closest('.blocklist.secondLevel')[0].selfObjNum;

        placeIDs.subsubTab = parent.closest('.elementlist')[0].selfObjNum;
        placeIDs.subsubcontentpage = parent.closest('.subcontentpagelist')[0].myObjId;
        placeIDs.blockthirdLevel = parent.closest('.blocklist.thirdLevel')[0].selfObjNum;

        blockchilds = parent.closest('.blocklist.thirdLevel')[0].myChildsIDs;
        newChildID = (blockchilds.length > 0) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : Number(placeIDs.blockthirdLevel) + 1;
    } else {
        blockchilds = self.closest('.blocklist')[0].myChildsIDs;
        if(!blockchilds || blockchilds.length === 0)
            blockchilds = false;
        newChildID = (blockchilds) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : placeIDs.block + 1;
    }
    temp = newElement(elementType, placeIDs, copyTitle, data, newChildID, secondLevel);
    if(!tool){        
        getElementEditMask(elementType, temp);
        self.closest('.innerbox.element').append(temp); 
        setElementData(temp, data);
        setTimeout(function () {
            scrollTo = self.closest('.newBlock' + secondLevel).find('.newElement').last().offset().top -120 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
        }, 100);        
    } else {
        self.prev().prev('.innerbox.element').append(temp);
        $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    }
    validatePreviewJson(true);
}
function setElementData(parent, data){
    var secondLevel = '';
    if(parent.hasClass('secondLevel')) {
        secondLevel = 'secondLevel';
    } else if(parent.hasClass('thirdLevel')) {
        secondLevel = 'thirdLevel';
    }
    if(parent.find("input[name='elementtext"+ secondLevel +"']").length > 0)
        parent.find("input[name='elementtext"+ secondLevel +"']").val(data.Text);
    if(parent.find("input[name='elementtextId"+ secondLevel +"']").length > 0)
        parent.find("input[name='elementtextId"+ secondLevel +"']").val(data.TextID);
    if(parent.find("input[name='opcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='opcId"+ secondLevel +"']").val(data.OPCID);
    if(parent.find("input[name='visibleopcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='visibleopcId"+ secondLevel +"']").val(data.VisibleOPCID);
    if(parent.find("div[data-led='On'] span.kreis").length > 0){
         parent.find("div[data-led='On'] span.kreis").removeClass('active');
        parent.find("div[data-led='On'] span.kreis[data-color='"+ data.OnLED +"']").addClass('active'); 
    }
    if(parent.find("div[data-led='Off'] span.kreis").length > 0){
        parent.find("div[data-led='Off'] span.kreis").removeClass('active');
        parent.find("div[data-led='Off'] span.kreis[data-color='"+ data.OffLED +"']").addClass('active');
    }
    if(parent.find(".uservisiblepanel"+ secondLevel +" .selectRights li").length > 0){
        if(data.VisibleAtRight)
            parent.find(".uservisiblepanel"+ secondLevel +" .selectRights li").removeClass('active'); 
        parent.find(".uservisiblepanel"+ secondLevel +" .selectRights li[data-right='"+ data.VisibleAtRight +"']").addClass('active'); 
        parent.find(".uservisiblepanel"+ secondLevel +" .dropdown span").text(parent.find(".uservisiblepanel"+ secondLevel +" .selectRights li[data-right='"+ data.VisibleAtRight +"']").text());
    }
    if(parent.find($('input[name=init'+ secondLevel +']')).length > 0) 
        parent.find($("input[name=init"+ secondLevel +"][value='"+ data.UnitInit +"']")).prop("checked",true);
    if(parent.find($('input[name=local'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=local'+ secondLevel +']')).val(data.UnitLocale);
    if(parent.find($('input[name=imperial'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=imperial'+ secondLevel +']')).val(data.UnitImperial);
    if(parent.find($('input[name=metric'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=metric'+ secondLevel +']')).val(data.UnitMetric);
    if(parent.find($('input[name=maxValue'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=maxValue'+ secondLevel +']')).val(data.InputMax);
    if(parent.find($('input[name=minValue'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=minValue'+ secondLevel +']')).val(data.InputMin);
    if(parent.find(".authpanel"+ secondLevel +" .selectRights li").length > 0){
        if(data.UserRight)
            parent.find(".authpanel"+ secondLevel +" .selectRights li").removeClass('active'); 
        parent.find(".authpanel"+ secondLevel +" .selectRights li[data-right='"+ data.UserRight +"']").addClass('active'); 
        parent.find(".authpanel"+ secondLevel +" .dropdown span").text(parent.find(".authpanel"+ secondLevel +" .selectRights li.active[data-right='"+ data.UserRight +"']").text());
    }
    if(parent.find($('input[name=strStart'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=strStart'+ secondLevel +']')).val(data.StrStart);
    if(parent.find($('input[name=strLength'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=strLength'+ secondLevel +']')).val(data.StrLen);
    if(parent.find($('input[name=digits'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=digits'+ secondLevel +']')).val(data.Precision);
    if(parent.find("input[name='elementtext2"+ secondLevel +"']").length > 0)
        parent.find("input[name='elementtext2"+ secondLevel +"']").val(data.Text2);
    if(parent.find("input[name='elementtextId2"+ secondLevel +"']").length > 0)
        parent.find("input[name='elementtextId2"+ secondLevel +"']").val(data.TextID2);
    if(parent.find("input[name='opcId2"+ secondLevel +"']").length > 0)
        parent.find("input[name='opcId2"+ secondLevel +"']").val(data.OPCID2);
    if(parent.find("input[name='ledopcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='ledopcId"+ secondLevel +"']").val(data.LEDOPCID);
    if(parent.find($('input[name=visuvalueBase'+ secondLevel +']')).length > 0) 
        parent.find($("input[name=visuvalueBase"+ secondLevel +"][value='"+ data.VisuBase +"']")).prop("checked",true);
//        parent.find($('input[name=visuvalueBase'+ secondLevel +']')).prop('checked', data.VisuBase);         
    if(parent.find($('input[name=plcvalueBase'+ secondLevel +']')).length > 0) 
        parent.find($("input[name=plcvalueBase"+ secondLevel +"][value='"+ data.Base +"']")).prop("checked",true);
//        parent.find($('input[name=plcvalueBase'+ secondLevel +']')).prop('checked', data.Base);
    if(parent.find($('input[name=maxTime'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=maxTime'+ secondLevel +']')).val(data.IntTimeMax);
    if(parent.find($('input[name=minTime'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=minTime'+ secondLevel +']')).val(data.IntTimeMin);
    if(parent.find($('input[name=visibleopcrampId'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=visibleopcrampId'+ secondLevel +']')).val(data.OPCRampVisibleID);
    if(parent.find($('input[name=opcrampId'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=opcrampId'+ secondLevel +']')).val(data.OPCRampID);
    if(parent.find($('input[name=url'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=url'+ secondLevel +']')).val(data.URL);
    if(parent.find($('input[name=writeTagWR1'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=writeTagWR1'+ secondLevel +']')).val(data.writeTagWR1);
    if(parent.find($('input[name=writeTagWR2'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=writeTagWR2'+ secondLevel +']')).val(data.writeTagWR2);
    if(parent.find($('input[name=writeTagWR3'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=writeTagWR3'+ secondLevel +']')).val(data.writeTagWR3);
    if(parent.find($('input[name=readTagRD1'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=readTagRD1'+ secondLevel +']')).val(data.readTagRD1);
    if(parent.find($('input[name=readTagRD2'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=readTagRD2'+ secondLevel +']')).val(data.readTagRD2);
    if(parent.find($('input[name=readTagRD3'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=readTagRD3'+ secondLevel +']')).val(data.readTagRD3);
    if(parent.find($('input[name=readTagRD4'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=readTagRD4'+ secondLevel +']')).val(data.readTagRD4);
    if(parent.find($('input[name=visibilityStop'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=visibilityStop'+ secondLevel +']')).val(data.visibilityStop);
    if(parent.find($('input[name=func'+ secondLevel +']')).length > 0) 
        parent.find($("input[name=func"+ secondLevel +"][value='"+ data.func +"']")).prop("checked",true);
    if(parent.find($('input[name=function'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=function'+ secondLevel +']')).val(data.funcField);
    if(parent.find($('input[name=numberofchain'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=numberofchain'+ secondLevel +']')).val(data.NumberOfChain);
    if(parent.find($('input[name=unit'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=unit'+ secondLevel +']')).val(data.Unit);
    if(parent.find($('input[name=useLED'+ secondLevel +']')).length > 0) 
        parent.find('input[name=useLED'+ secondLevel +']').prop("checked", data.showLED);
    if(parent.find($('input[name=step'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=step'+ secondLevel +']')).val(data.step);
    
    setTimeout(function () { 
        if(parent.find(".buttonclass"+ secondLevel +" li").length > 0){
            parent.find(".buttonclass"+ secondLevel +" li[data-value='"+ data.leftIcon +"']").addClass('active'); 
            parent.find(".buttonclass"+ secondLevel +" .dropdown span").addClass(data.leftIcon).text(data.leftIcon);
        }
        if(parent.find(".buttonclass1"+ secondLevel +" li").length > 0){
            parent.find(".buttonclass1"+ secondLevel +" li[data-value='"+ data.rightIcon +"']").addClass('active');
            parent.find(".buttonclass1"+ secondLevel +" .dropdown span").addClass(data.rightIcon).text(data.rightIcon);
        }
        if(parent.find(".buttonclass2"+ secondLevel +" li").length > 0){
            parent.find(".buttonclass2"+ secondLevel +" li[data-value='"+ data.middleIcon +"']").addClass('active');
            parent.find(".buttonclass2"+ secondLevel +" .dropdown span").addClass(data.middleIcon).text(data.middleIcon);
        }
    }, 1900);
    if(parent.find($('textarea[name=urlname'+ secondLevel +']')).length > 0)
        parent.find($('textarea[name=urlname'+ secondLevel +']')).val(data.Text.join('\n'));           
    if(parent.find($('textarea[name=urlnameid'+ secondLevel +']')).length > 0)
        parent.find($('textarea[name=urlnameid'+ secondLevel +']')).val(data.TextID.join('\n'));            
    if(parent.find($('textarea[name=url'+ secondLevel +']')).length > 0)
        parent.find($('textarea[name=url'+ secondLevel +']')).val(data.URLarray.join('\n'));
    if(parent.find($('textarea[name=comment'+ secondLevel +']')).length > 0)
        parent.find($('textarea[name=comment'+ secondLevel +']')).val(data.Comment);
    if(parent.find("input[name='actualtext"+ secondLevel +"']").length > 0)
        parent.find("input[name='actualtext"+ secondLevel +"']").val(data.actualText);
    if(parent.find("input[name='actualtextId"+ secondLevel +"']").length > 0)
        parent.find("input[name='actualtextId"+ secondLevel +"']").val(data.actualTextID);
    if(parent.find("input[name='actualopcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='actualopcId"+ secondLevel +"']").val(data.actualValueTag);
     if(parent.find($('input[name=actuallocal'+ secondLevel +']')).length > 0) 
        parent.find('input[name=actuallocal'+ secondLevel +']').val(data.actualLocalUnit);
    if(parent.find($('input[name=actualimperial'+ secondLevel +']')).length > 0) 
        parent.find('input[name=actualimperial'+ secondLevel +']').val(data.actualImperialUnit);
    if(parent.find($('input[name=actualmetric'+ secondLevel +']')).length > 0) 
        parent.find('input[name=actualmetric'+ secondLevel +']').val(data.actualMetricalUnit);
    if(parent.find($('input[name=actualdigits'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=actualdigits'+ secondLevel +']')).val(data.actualDecimalDigits);

    if(parent.find("input[name='setpointtext"+ secondLevel +"']").length > 0)
        parent.find("input[name='setpointtext"+ secondLevel +"']").val(data.setpointText);
    if(parent.find("input[name='setpointtextId"+ secondLevel +"']").length > 0)
        parent.find("input[name='setpointtextId"+ secondLevel +"']").val(data.setpointTextID);
    if(parent.find("input[name='setpointopcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='setpointopcId"+ secondLevel +"']").val(data.setpointActualValueTag);
    if(parent.find("input[name='setpointrampopcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='setpointrampopcId"+ secondLevel +"']").val(data.setpointRampValueTag);
     if(parent.find($('input[name=setpointlocal'+ secondLevel +']')).length > 0) 
        parent.find('input[name=setpointlocal'+ secondLevel +']').val(data.setpointLocalUnit);
    if(parent.find($('input[name=setpointimperial'+ secondLevel +']')).length > 0) 
        parent.find('input[name=setpointimperial'+ secondLevel +']').val(data.setpointImperialUnit);
    if(parent.find($('input[name=setpointmetric'+ secondLevel +']')).length > 0) 
        parent.find('input[name=setpointmetric'+ secondLevel +']').val(data.setpointMetricalUnit);
    if(parent.find($('input[name=setpointdigits'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=setpointdigits'+ secondLevel +']')).val(data.setpointDecimalDigits);
    if(parent.find($('input[name=setpointvisibleopcId'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=setpointvisibleopcId'+ secondLevel +']')).val(data.visibilityOPCIDPanel);

    if(parent.find("input[name='outputtext"+ secondLevel +"']").length > 0)
        parent.find("input[name='outputtext"+ secondLevel +"']").val(data.outputText);
    if(parent.find("input[name='outputtextId"+ secondLevel +"']").length > 0)
        parent.find("input[name='outputtextId"+ secondLevel +"']").val(data.outputTextID);
    if(parent.find("input[name='outputopcId"+ secondLevel +"']").length > 0)
        parent.find("input[name='outputopcId"+ secondLevel +"']").val(data.outputValueTag);
     if(parent.find($('input[name=outputlocal'+ secondLevel +']')).length > 0) 
        parent.find('input[name=outputlocal'+ secondLevel +']').val(data.outputLocalUnit);
    if(parent.find($('input[name=outputimperial'+ secondLevel +']')).length > 0) 
        parent.find('input[name=outputimperial'+ secondLevel +']').val(data.outputImperialUnit);
    if(parent.find($('input[name=outputmetric'+ secondLevel +']')).length > 0) 
        parent.find('input[name=outputmetric'+ secondLevel +']').val(data.outputMetricalUnit);
    if(parent.find($('input[name=outputdigits'+ secondLevel +']')).length > 0) 
        parent.find($('input[name=outputdigits'+ secondLevel +']')).val(data.outputDecimalDigits);
    
}
function getJsonId() {
    return jsonindex++;
}

function validatePreviewJson(changed){
    var parent = $('.newjson');
    var sameNum;
    var textarea1;
    var textarea2;
    var textarea3;
    if(parent.find($('textarea[name=urlname]')).length > 0){
        textarea1 = parent.find($('textarea[name=urlname]')).val().split('\n').length;
        textarea2 = parent.find($('textarea[name=urlnameid]')).val().split('\n').length;
        textarea3 = parent.find($('textarea[name=url]')).val().split('\n').length;
        if(textarea1 === textarea2 && textarea1 === textarea3){
            sameNum = true;
        } else {
            sameNum = false;            
        }
    }
    if(parent.find('input:required:invalid').length > 0 || parent.find('textarea:required:invalid').length > 0 
            || sameNum === false || parent.find('.ledPanelOn').length > 0 && $('.ledPanelOn').find('.kreis.active').length < 1 
            || parent.find('.ledPanelOff').length > 0 && $('.ledPanelOff').find('.kreis.active').length < 1 
            || parent.find(".authpanel .selectRights").length > 0 && parent.find(".authpanel .selectRights li.active").length === 0
            || parent.find(".uservisiblepanel .selectRights").length > 0 && parent.find(".uservisiblepanel .selectRights li.active").length === 0){
        parent.find('input:required:invalid').addClass('error');
        parent.find($('textarea[name=urlname]')).addClass('error');
        parent.find($('textarea[name=urlnameid]')).addClass('error');
        parent.find($('textarea[name=url]')).addClass('error');
        if($('.ledPanelOn').find('.kreis.active').length < 1){
            $('.ledPanelOn').addClass('error');
        }
        if($('.ledPanelOff').find('.kreis.active').length < 1){
            $('.ledPanelOff').addClass('error');
        }
        if(parent.find(".uservisiblepanel .selectRights li.active").length < 1){
           parent.find(".uservisiblepanel .dropdown").addClass('error');
        }
        if(parent.find(".authpanel .selectRights li.active").length < 1){
           parent.find(".authpanel .dropdown").addClass('error');
        }
        $('.Groupbox.newjson').find('.savebutton').addClass('disabled');
        if(parent.find("input[name='DiagnosisControl']").length > 0 && parent.find("input[name='DiagnosisControl']").val() !== '')
            parent.closest('.jsonlist').find('.pagerHeadLine:first').text(parent.find("input[name='DiagnosisControl']").val());
    } else if(parent.find("input[name='privatetab']").prop("checked") === false && parent.find("input[name='summarytab']").prop("checked") === false && parent.find("input[name='contentpagename']").length === 0 && jsonResults.data.windowData.PageControl.length === 0) {
        $("<div/>", {
            "class": 'dialogoverlay',
            "id": 'dialog'
        }).appendTo('#precenter');
        $('#dialog').empty();
        $('#dialog').append("<h4>one Tab needed!</h4>");    
        $('#dialog').append("<span style='line-height:22px;' class='dialogtext'>Attention! For Preview you need at last one Tab</span>");
        $('#dialog').dialog({
            resizable: false,
            dialogClass: "dialogCorpus ",
            height: "auto",
            width: 400,
            modal: true,
            title: "Attention",
            buttons: {
                "": function () {                        
                        $(this).dialog("destroy");
                        $('#dialog').remove();
                    }
                }
            }).siblings('div.ui-dialog-titlebar').remove(); 
            $($('.dialogCorpus button')[0]).attr('class', "emosbutton savebutton");
    } else {
        if(changed)
            $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
        jsonResults.type = 'OpenDiagnosisWindow';
        jsonResults.PLC = parent.find("input[name='PLC']").val();
        jsonResults.Tag = parent.find("input[name='Tag']").val();
        jsonResults.DiagnosisLibID = parent.find("ul[data-name='diadnosislibid'] li.active").text();
        jsonResults.DiagnosisControl = parent.find("input[name='DiagnosisControl']").val();
        jsonResults.GroupRightIndex = parent.find("input[name='GroupRightIndex']").val();
        jsonResults.data.windowData.Version = parent.find("input[name='Version']").val() + '-' + parent.find("input[name='Build']").val();
        jsonResults.data.windowData.Name = parent.find("input[name='DiagnosisControl']").val();
        parent.closest('.jsonlist').find('.pagerHeadLine:first').text(parent.find("input[name='DiagnosisControl']").val());
        if(parent.find("input[name='headcontrols']").length > 0){
            jsonResults.HeadControls = parent.find("input[name='headcontrols']").prop("checked").toString();
            jsonResults.Private = parent.find("input[name='privatetab']").prop("checked").toString();
            jsonResults.Summary = parent.find("input[name='summarytab']").prop("checked").toString();
        }
//        if($('.newHeadLED').length > 0) {
//            var datanum = $('.newHeadLED').prev().attr('data-num');
//            var headdata = jsonResults.data.windowData.Head[datanum];
//            parent.find('.newHeadLED').find('.ledPanelOn, .ledPanelOff').removeClass('error');
//            headdata.Text = parent.find('.newHeadLED').find("input[name='elementtext']").val();
//            headdata.TextID = parent.find('.newHeadLED').find("input[name='elementtextId']").val();
//            headdata.OPCID = parent.find('.newHeadLED').find("input[name='opcId']").val();
//            headdata.OnLED = parent.find('.newHeadLED').find("div[data-led='On'] span.kreis.active").attr('data-color');
//            headdata.OffLED = parent.find('.newHeadLED').find("div[data-led='Off'] span.kreis.active").attr('data-color');
//            headdata.VisibleAtRight = $('.newHeadLED').find(".uservisiblepanel .selectRights li.active").attr('data-right');
//        }
        
        if($('.newTab').length > 0){
            parent.find('.newTab').parent()[0].myChilds.VisibleOPCID = parent.find('.newTab').find("input[name='visibleopcIdTab']").val();
            parent.find('.newTab').parent()[0].myChilds.VisibleAtRight = parent.find('.newTab').find('.uservisiblepanelTab .breadoverlay_li.active').attr('data-right');
        }
        
        if($('.newContentpage').length > 0){  
            $('.newContentpage').parent().find('.editcontentpagelist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
            parent.find("input[name='contentpagename']")[0].Textvalue[0].Text = parent.find("input[name='contentpagename']").val();
            parent.find("input[name='contentpagetextId']")[0].TextIDvalue[0].TextID = parent.find("input[name='contentpagetextId']").val();            
            if(parent.find(".uservisiblepanelCP .selectRights li.active").length > -1){                
                $('.newContentpage').closest('.contentpagelist')[0].myParent['AddPageTab'].VisibleAtRight = parent.find(".uservisiblepanelCP .selectRights li.active").attr('data-right');
                $('.newContentpage').closest('.contentpagelist')[0].myParent['AddPageTab'].push({'VisibleAtRight': parent.find(".uservisiblepanelCP .selectRights li.active").attr('data-right')});
            } else {
                $('.newContentpage').closest('.contentpagelist')[0].myParent.AddPageTab.VisibleAtRight = 0;
            } 
            $('.newContentpage').closest('.contentpagelist')[0].myParent['AddPageTab'].VisibleOPCID = parent.find('input[name=visibleopcIdCp]').val();
            $('.newContentpage').closest('.contentpagelist')[0].myParent['AddPageTab'].push({'VisibleOPCID': parent.find('input[name=visibleopcIdCp]').val()});
        }
        if($('.newBlock').length > 0){
            $('.newBlock').parent().find('.editblocklist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
            var blockData = parent.find('.newBlock').closest('.blocklist')[0].self;
            blockData.Text = parent.find("input[name='blockname']").val();
            blockData.TextID = parent.find("input[name='blocktextId']").val();
            blockData.Position = 'L';
            blockData.showHide = parent.find("input[name='showhide']").prop("checked");
            blockData.VisibleOPCID = parent.find("input[name='visibleopcIdBl']").val();
            if(parent.find(".uservisiblepanelBL .selectRights li.active").length > -1){
                blockData.VisibleAtRight = parent.find(".uservisiblepanelBL .selectRights li.active").attr('data-right');
            } else {
                blockData.VisibleAtRight = 0;
            }
        }
        if($('.newElement').length > 0){
            $('.newElement').parent().find('.editelementlist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
            $('.ledPanelOn').removeClass('error');
            $('.ledPanelOff').removeClass('error');
            $('.uservisiblepanel .dropdown').removeClass('error');
            $('.authpanel .dropdown').removeClass('error');
            $('textarea').removeClass('error');
            var elementData = parent.find('.newElement').closest('.elementlist')[0].self;
            if(parent.find("input[name='elementtext']").length > 0)
                elementData.Text = parent.find("input[name='elementtext']").val();
            if(parent.find("input[name='elementtextId']").length > 0)
                elementData.TextID = parent.find("input[name='elementtextId']").val();
            if(parent.find("input[name='opcId']").length > 0)
                elementData.OPCID = parent.find("input[name='opcId']").val();
            if(parent.find("input[name='visibleopcId']").length > 0)
                elementData.VisibleOPCID = parent.find("input[name='visibleopcId']").val();
            if(parent.find("div[data-led='On'] span.kreis.active").length > 0)
                elementData.OnLED = parent.find("div[data-led='On'] span.kreis.active").attr('data-color');
            if(parent.find("div[data-led='Off'] span.kreis.active").length > 0)
                elementData.OffLED = parent.find("div[data-led='Off'] span.kreis.active").attr('data-color');
            if(parent.find(".uservisiblepanel .selectRights li.active").length > -1){
                elementData.VisibleAtRight = parent.find(".uservisiblepanel .selectRights li.active").attr('data-right');
            }
            if(parent.find($('input[name=init]')).length > 0) 
                elementData.UnitInit = parent.find($('input[name=init]:checked')).val();
            if(parent.find($('input[name=local]')).length > 0) 
                elementData.UnitLocale = parent.find($('input[name=local]')).val();
            if(parent.find($('input[name=imperial]')).length > 0) 
                elementData.UnitImperial = parent.find($('input[name=imperial]')).val();
            if(parent.find($('input[name=strStart]')).length > 0) 
                elementData.StrStart = (parent.find($('input[name=strStart]')).val()) ? parent.find($('input[name=strStart]')).val() : '0';
            if(parent.find($('input[name=strLength]')).length > 0) 
                elementData.StrLen = (parent.find($('input[name=strLength]')).val()) ? parent.find($('input[name=strLength]')).val() : '10000';
            if(parent.find($('input[name=metric]')).length > 0) 
                elementData.UnitMetric = parent.find($('input[name=metric]')).val();
            if(parent.find($('input[name=maxValue]')).length > 0) 
                var myMax;
                if(parent.find($('input[name=maxValue]')).val() === '' ){
                    myMax = 100;
                } else {
                    myMax = parent.find($('input[name=maxValue]')).val();
                }
                elementData.InputMax = myMax;
            if(parent.find($('input[name=minValue]')).length > 0) 
                var myMin;
                if(parent.find($('input[name=minValue]')).val() === '' ){
                    myMin = -100;
                } else {
                    myMin = parent.find($('input[name=minValue]')).val();
                }
                elementData.InputMin = myMin;
            if(parent.find(".authpanel .selectRights li.active").length > -1){
                elementData.UserRight = parent.find(".authpanel .selectRights li.active").attr('data-right');
            }
            if(parent.find($('input[name=digits]')).length > 0) 
                elementData.Precision = parent.find($('input[name=digits]')).val();
            if(parent.find("input[name='elementtext2']").length > 0)
                elementData.Text2 = parent.find("input[name='elementtext2']").val();
            if(parent.find("input[name='elementtextId2']").length > 0)
                elementData.TextID2 = parent.find("input[name='elementtextId2']").val();
            if(parent.find("input[name='opcId2']").length > 0)
                elementData.OPCID2 = parent.find("input[name='opcId2']").val();
            if(parent.find("input[name='ledopcId']").length > 0)
                elementData.LEDOPCID = parent.find("input[name='ledopcId']").val();
            if(parent.find($('input[name=visuvalueBase]')).length > 0) 
                elementData.VisuBase = parent.find($('input[name=visuvalueBase]:checked')).val();
            if(parent.find($('input[name=plcvalueBase]')).length > 0) 
                elementData.Base = parent.find($('input[name=plcvalueBase]:checked')).val();
            if(parent.find($('input[name=maxTime]')).length > 0) 
                elementData.IntTimeMax = parent.find($('input[name=maxTime]')).val();
            if(parent.find($('input[name=minTime]')).length > 0) 
                elementData.IntTimeMin = parent.find($('input[name=minTime]')).val();
            if(parent.find($('input[name=visibleopcrampId]')).length > 0) 
                elementData.OPCRampVisibleID = parent.find($('input[name=visibleopcrampId]')).val();
            if(parent.find($('input[name=opcrampId]')).length > 0) 
                elementData.OPCRampID = parent.find($('input[name=opcrampId]')).val();
            if(parent.find($('input[name=url]')).length > 0) {
                var myUrl = parent.find($('input[name=url]')).val() + '?PLC=' + parent.find("input[name='PLC']").val() + '&Tag=' + parent.find("input[name='Tag']").val();
                elementData.URL = myUrl;
            }
            if(parent.find($('input[name=writeTagWR1]')).length > 0) 
                elementData.writeTagWR1 = parent.find($('input[name=writeTagWR1]')).val();
            if(parent.find($('input[name=writeTagWR2]')).length > 0) 
                elementData.writeTagWR2 = parent.find($('input[name=writeTagWR2]')).val();
            if(parent.find($('input[name=writeTagWR3]')).length > 0) 
                elementData.writeTagWR3 = parent.find($('input[name=writeTagWR3]')).val();
            if(parent.find($('input[name=readTagRD1]')).length > 0) 
                elementData.readTagRD1 = parent.find($('input[name=readTagRD1]')).val();
            if(parent.find($('input[name=readTagRD2]')).length > 0) 
                elementData.readTagRD2 = parent.find($('input[name=readTagRD2]')).val();
            if(parent.find($('input[name=readTagRD3]')).length > 0) 
                elementData.readTagRD3 = parent.find($('input[name=readTagRD3]')).val();
            if(parent.find($('input[name=readTagRD4]')).length > 0) 
                elementData.readTagRD4 = parent.find($('input[name=readTagRD4]')).val();
            if(parent.find(".buttonclass li.active").length > 0)
                elementData.leftIcon = parent.find(".buttonclass li.active").attr('data-value');
            if(parent.find(".buttonclass2 li.active").length > 0)
                elementData.middleIcon = parent.find(".buttonclass2 li.active").attr('data-value');
            if(parent.find(".buttonclass1 li.active").length > 0)
                elementData.rightIcon = parent.find(".buttonclass1 li.active").attr('data-value');
            if(parent.find($('input[name=visibilityStop]')).length > 0)
                elementData.visibilityStop = parent.find($('input[name=visibilityStop]')).val();
            if(parent.find($('input[name=func]')).length > 0) 
                elementData.func = parent.find($('input[name=func]:checked')).val();
            if(parent.find($('input[name=function]')).length > 0) 
                elementData.funcField = parent.find($('input[name=function]')).val();
            if(parent.find($('input[name=unit]')).length > 0) 
                elementData.Unit = parent.find($('input[name=unit]')).val();
            if(parent.find($('input[name=useLED]')).length > 0) 
                elementData.showLED = parent.find("input[name='useLED']").prop("checked");
            if(parent.find($('input[name=step]')).length > 0) 
                elementData.step = parent.find($('input[name=step]')).val();
            if(parent.find($('input[name=numberofchain]')).length > 0) 
                elementData.NumberOfChain = parent.find($('input[name=numberofchain]')).val();
            
            if(parent.find($('textarea[name=urlname]')).length > 0)
                elementData.Text = parent.find($('textarea[name=urlname]')).val().split('\n');           
            if(parent.find($('textarea[name=urlnameid]')).length > 0)
                elementData.TextID = parent.find($('textarea[name=urlnameid]')).val().split('\n');            
            if(parent.find($('textarea[name=url]')).length > 0)
                elementData.URLarray = parent.find($('textarea[name=url]')).val().split('\n');
            if(parent.find($('textarea[name=comment]')).length > 0)
                elementData.Comment = parent.find($('textarea[name=comment]')).val();
            if(parent.find("input[name='actualtext']").length > 0)
                elementData.actualText = parent.find("input[name='actualtext']").val();
            if(parent.find("input[name='actualtextId']").length > 0)
                elementData.actualTextID = parent.find("input[name='actualtextId']").val();
            if(parent.find("input[name='actualopcId']").length > 0)
                elementData.actualValueTag = parent.find("input[name='actualopcId']").val();
             if(parent.find($('input[name=actuallocal]')).length > 0) 
                elementData.actualLocalUnit = parent.find('input[name=actuallocal]').val();
            if(parent.find($('input[name=actualimperial]')).length > 0) 
                elementData.actualImperialUnit = parent.find('input[name=actualimperial]').val();
            if(parent.find($('input[name=actualmetric]')).length > 0) 
                elementData.actualMetricalUnit = parent.find('input[name=actualmetric]').val();
            if(parent.find($('input[name=actualdigits]')).length > 0) 
                elementData.actualDecimalDigits = parent.find($('input[name=actualdigits]')).val();
            
            if(parent.find("input[name='setpointtext']").length > 0)
                elementData.setpointText = parent.find("input[name='setpointtext']").val();
            if(parent.find("input[name='setpointtextId']").length > 0)
                elementData.setpointTextID = parent.find("input[name='setpointtextId']").val();
            if(parent.find("input[name='setpointopcId']").length > 0)
                elementData.setpointActualValueTag = parent.find("input[name='setpointopcId']").val();
            if(parent.find("input[name='setpointrampopcId']").length > 0)
                elementData.setpointRampValueTag = parent.find("input[name='setpointrampopcId']").val();
             if(parent.find($('input[name=setpointlocal]')).length > 0) 
                elementData.setpointLocalUnit = parent.find('input[name=setpointlocal]').val();
            if(parent.find($('input[name=setpointimperial]')).length > 0) 
                elementData.setpointImperialUnit = parent.find('input[name=setpointimperial]').val();
            if(parent.find($('input[name=setpointmetric]')).length > 0) 
                elementData.setpointMetricalUnit = parent.find('input[name=setpointmetric]').val();
            if(parent.find($('input[name=setpointdigits]')).length > 0) 
                elementData.setpointDecimalDigits = parent.find($('input[name=setpointdigits]')).val();
            if(parent.find($('input[name=setpointvisibleopcId]')).length > 0) 
                elementData.visibilityOPCIDPanel = parent.find($('input[name=setpointvisibleopcId]')).val();
            
            if(parent.find("input[name='outputtext']").length > 0)
                elementData.outputText = parent.find("input[name='outputtext']").val();
            if(parent.find("input[name='outputtextId']").length > 0)
                elementData.outputTextID = parent.find("input[name='outputtextId']").val();
            if(parent.find("input[name='outputopcId']").length > 0)
                elementData.outputValueTag = parent.find("input[name='outputopcId']").val();
             if(parent.find($('input[name=outputlocal]')).length > 0) 
                elementData.outputLocalUnit = parent.find('input[name=outputlocal]').val();
            if(parent.find($('input[name=outputimperial]')).length > 0) 
                elementData.outputImperialUnit = parent.find('input[name=outputimperial]').val();
            if(parent.find($('input[name=outputmetric]')).length > 0) 
                elementData.outputMetricalUnit = parent.find('input[name=outputmetric]').val();
            if(parent.find($('input[name=outputdigits]')).length > 0) 
                elementData.outputDecimalDigits = parent.find($('input[name=outputdigits]')).val();
            
            
            elementData.Position = 'L';
        }  
        if($('.newSubContentpage').length > 0){
            if(parent.find($('input[name=subcontentpagename]')).length > 0) {
                parent.find("input[name='subcontentpagename']")[0].Textvalue[0].Text = parent.find("input[name='subcontentpagename']").val();
                
            }
            if(parent.find($('input[name=subcontentpagetextId]')).length > 0){ 
                parent.find("input[name='subcontentpagetextId']")[0].TextIDvalue[0].TextID = parent.find("input[name='subcontentpagetextId']").val();
            }
            if(parent.find(".uservisiblepanelSubCP .selectRights li.active").length > -1){                
                $('.newSubContentpage').closest('.subcontentpagelist')[0].myParent['AddPageTab'].VisibleAtRight = parent.find(".uservisiblepanelSubCP .selectRights li.active").attr('data-right');
                $('.newSubContentpage').closest('.subcontentpagelist')[0].myParent['AddPageTab'].push({'VisibleAtRight': parent.find(".uservisiblepanelSubCP .selectRights li.active").attr('data-right')});
            } else {
                $('.newSubContentpage').closest('.subcontentpagelist')[0].myParent.AddPageTab.VisibleAtRight = 0;
            }
        }
        if($('.newBlocksecondLevel').length > 0){
            var blockDataSecondLevel = parent.find('.newBlocksecondLevel').closest('.blocklist')[0].self;
            blockDataSecondLevel.Text = parent.find("input[name='blocknamesecondLevel']").val();
            blockDataSecondLevel.TextID = parent.find("input[name='blocktextIdsecondLevel']").val();
            blockDataSecondLevel.Position = 'L';
            blockDataSecondLevel.showHide = parent.find("input[name='showhidesecondLevel']").prop("checked");
            blockDataSecondLevel.VisibleOPCID = parent.find("input[name='visibleopcIdBlsecondLevel']").val();
            if(parent.find(".uservisiblepanelBLsecondLevel .selectRights li.active").length > -1){
                blockDataSecondLevel.VisibleAtRight = parent.find(".uservisiblepanelBLsecondLevel .selectRights li.active").attr('data-right');
            } else {
                blockDataSecondLevel.VisibleAtRight = 0;
            }
        }
        if($('.newBlocksecondLevel .newElement').length > 0){
            var mother = $('.newBlocksecondLevel');
            $('.ledPanelOn, .ledPanelOff').removeClass('error');
            var elementDataSecondLevel = mother.find('.newElement').closest('.elementlist')[0].self;
            if(mother.find("input[name='elementtextsecondLevel']").length > 0)
                elementDataSecondLevel.Text = mother.find("input[name='elementtextsecondLevel']").val();
            if(mother.find("input[name='elementtextIdsecondLevel']").length > 0)
                elementDataSecondLevel.TextID = mother.find("input[name='elementtextIdsecondLevel']").val();
            if(mother.find("input[name='opcIdsecondLevel']").length > 0)
                elementDataSecondLevel.OPCID = mother.find("input[name='opcIdsecondLevel']").val();
            if(mother.find("input[name='visibleopcIdsecondLevel']").length > 0)
                elementDataSecondLevel.VisibleOPCID = mother.find("input[name='visibleopcIdsecondLevel']").val();
            if(mother.find("div[data-led='On'] span.kreis.active").length > 0)
                elementDataSecondLevel.OnLED = mother.find("div[data-led='On'] span.kreis.active").attr('data-color');
            if(mother.find("div[data-led='Off'] span.kreis.active").length > 0)
                elementDataSecondLevel.OffLED = mother.find("div[data-led='Off'] span.kreis.active").attr('data-color');
            if(mother.find(".uservisiblepanelsecondLevel .selectRights li.active").length > 0)
                elementDataSecondLevel.VisibleAtRight = mother.find(".uservisiblepanelsecondLevel .selectRights li.active").attr('data-right');
            if(mother.find($('input[name=initsecondLevel]')).length > 0) 
                elementDataSecondLevel.UnitInit = mother.find($('input[name=initsecondLevel]:checked')).val();
            if(mother.find($('input[name=localsecondLevel]')).length > 0) 
                elementDataSecondLevel.UnitLocale = mother.find($('input[name=localsecondLevel]')).val();
            if(mother.find($('input[name=imperialsecondLevel]')).length > 0) 
                elementDataSecondLevel.UnitImperial = mother.find($('input[name=imperialsecondLevel]')).val();
            if(mother.find($('input[name=strStartsecondLevel]')).length > 0) 
                elementDataSecondLevel.StrStart = (mother.find($('input[name=strStartsecondLevel]')).val()) ? mother.find($('input[name=strStartsecondLevel]')).val() : '0';
            if(mother.find($('input[name=strLengthsecondLevel]')).length > 0) 
                elementDataSecondLevel.StrLen = (mother.find($('input[name=strLengthsecondLevel]')).val()) ? mother.find($('input[name=strLengthsecondLevel]')).val() : '10000';
            if(mother.find($('input[name=metricsecondLevel]')).length > 0) 
                elementDataSecondLevel.UnitMetric = mother.find($('input[name=metricsecondLevel]')).val();
            if(mother.find($('input[name=maxValuesecondLevel]')).length > 0) 
                var myMax;
                if(mother.find($('input[name=maxValuesecondLevel]')).val() === '' ){
                    myMax = 100;
                } else {
                    myMax = mother.find($('input[name=maxValuesecondLevel]')).val();
                }
                elementDataSecondLevel.InputMax = myMax;
            if(mother.find($('input[name=minValuesecondLevel]')).length > 0) 
                var myMin;
                if(mother.find($('input[name=minValuesecondLevel]')).val() === '' ){
                    myMin = -100;
                } else {
                    myMin = mother.find($('input[name=minValuesecondLevel]')).val();
                }
                elementDataSecondLevel.InputMin = myMin;
            if(mother.find(".authpanelsecondLevel .selectRights li.active").length > 0)
                elementDataSecondLevel.UserRight = mother.find(".authpanelsecondLevel .selectRights li.active").attr('data-right');
            if(mother.find($('input[name=digitssecondLevel]')).length > 0) 
                elementDataSecondLevel.Precision = mother.find($('input[name=digitssecondLevel]')).val();
            if(mother.find("input[name='elementtext2secondLevel']").length > 0)
                elementDataSecondLevel.Text2 = mother.find("input[name='elementtext2secondLevel']").val();
            if(mother.find("input[name='elementtextId2secondLevel']").length > 0)
                elementDataSecondLevel.TextID2 = mother.find("input[name='elementtextId2secondLevel']").val();
            if(mother.find("input[name='opcId2secondLevel']").length > 0)
                elementDataSecondLevel.OPCID2 = mother.find("input[name='opcId2secondLevel']").val();
            if(mother.find("input[name='ledopcIdsecondLevel']").length > 0)
                elementDataSecondLevel.LEDOPCID = mother.find("input[name='ledopcIdsecondLevel']").val();
            if(mother.find($('input[name=visuvalueBasesecondLevel]')).length > 0) 
                elementDataSecondLevel.VisuBase = mother.find($('input[name=visuvalueBasesecondLevel]:checked')).val();
            if(mother.find($('input[name=plcvalueBasesecondLevel]')).length > 0) 
                elementDataSecondLevel.Base = mother.find($('input[name=plcvalueBasesecondLevel]:checked')).val();
            if(mother.find($('input[name=maxTimesecondLevel]')).length > 0) 
                elementDataSecondLevel.IntTimeMax = mother.find($('input[name=maxTimesecondLevel]')).val();
            if(mother.find($('input[name=minTimesecondLevel]')).length > 0) 
                elementDataSecondLevel.IntTimeMin = parent.find($('input[name=minTimesecondLevel]')).val();
            if(mother.find($('input[name=visibleopcrampIdsecondLevel]')).length > 0) 
                elementDataSecondLevel.OPCRampVisibleID = mother.find($('input[name=visibleopcrampIdsecondLevel]')).val();
            if(mother.find($('input[name=opcrampIdsecondLevel]')).length > 0) 
                elementDataSecondLevel.OPCRampID = mother.find($('input[name=opcrampIdsecondLevel]')).val();
            if(mother.find($('input[name=urlsecondLevel]')).length > 0) {
                var myUrl = mother.find($('input[name=urlsecondLevel]')).val() + '?PLC=' + mother.find("input[name='PLC']").val() + '&Tag=' + mother.find("input[name='Tag']").val();
                elementDataSecondLevel.URL = myUrl;
            }
            if(mother.find($('input[name=unitsecondLevel]')).length > 0) 
                elementDataSecondLevel.Unit = mother.find($('input[name=unitsecondLevel]')).val();
            if(mother.find($('input[name=useLEDsecondLevel]')).length > 0) 
                elementDataSecondLevel.showLED = mother.find("input[name='useLEDsecondLevel']").prop("checked");
            if(mother.find($('input[name=stepsecondLevel]')).length > 0) 
                elementDataSecondLevel.step = mother.find($('input[name=stepsecondLevel]')).val();
            
            if(mother.find($('input[name=writeTagWR1secondLevel]')).length > 0) 
                elementDataSecondLevel.writeTagWR1 = mother.find($('input[name=writeTagWR1secondLevel]')).val();
            if(mother.find($('input[name=writeTagWR2secondLevel]')).length > 0) 
                elementDataSecondLevel.writeTagWR2 = mother.find($('input[name=writeTagWR2secondLevel]')).val();
            if(mother.find($('input[name=writeTagWR3secondLevel]')).length > 0) 
                elementDataSecondLevel.writeTagWR3 = mother.find($('input[name=writeTagWR3secondLevel]')).val();
            if(mother.find($('input[name=readTagRD1secondLevel]')).length > 0) 
                elementDataSecondLevel.readTagRD1 = mother.find($('input[name=readTagRD1secondLevel]')).val();
            if(mother.find($('input[name=readTagRD2secondLevel]')).length > 0) 
                elementDataSecondLevel.readTagRD2 = mother.find($('input[name=readTagRD2secondLevel]')).val();
            if(mother.find($('input[name=readTagRD3secondLevel]')).length > 0) 
                elementDataSecondLevel.readTagRD3 = mother.find($('input[name=readTagRD3secondLevel]')).val();
            if(mother.find($('input[name=readTagRD4secondLevel]')).length > 0) 
                elementDataSecondLevel.readTagRD4 = mother.find($('input[name=readTagRD4secondLevel]')).val();
            if(mother.find(".buttonclasssecondLevel li.active").length > 0)
                elementDataSecondLevel.leftIcon = mother.find(".buttonclasssecondLevel li.active").attr('data-value');
            if(mother.find(".buttonclass2secondLevel li.active").length > 0)
                elementDataSecondLevel.middleIcon = mother.find(".buttonclass2secondLevel li.active").attr('data-value');
            if(mother.find(".buttonclass1secondLevel li.active").length > 0)
                elementDataSecondLevel.rightIcon = mother.find(".buttonclass1secondLevel li.active").attr('data-value');
            if(mother.find($('input[name=visibilityStopsecondLevel]')).length > 0)
                elementDataSecondLevel.visibilityStop = mother.find($('input[name=visibilityStopsecondLevel]')).val();
            if(mother.find($('input[name=funcsecondLevel]')).length > 0) 
                elementDataSecondLevel.func = mother.find($('input[name=funcsecondLevel]:checked')).val();
            if(mother.find($('input[name=functionsecondLevel]')).length > 0) 
                elementDataSecondLevel.funcField = mother.find($('input[name=functionsecondLevel]')).val();
            if(mother.find($('input[name=numberofchainsecondLevel]')).length > 0) 
                elementDataSecondLevel.NumberOfChain = mother.find($('input[name=numberofchainsecondLevel]')).val();
            
            if(mother.find($('textarea[name=urlnamesecondLevel]')).length > 0)
                elementDataSecondLevel.Text = mother.find($('textarea[name=urlnamesecondLevel]')).val().split('\n');           
            if(mother.find($('textarea[name=urlnameidsecondLevel]')).length > 0)
                elementDataSecondLevel.TextID = mother.find($('textarea[name=urlnameidsecondLevel]')).val().split('\n');            
            if(mother.find($('textarea[name=urlsecondLevel]')).length > 0)
                elementDataSecondLevel.URLarray = mother.find($('textarea[name=urlsecondLevel]')).val().split('\n');
            if(mother.find($('textarea[name=commentsecondLevel]')).length > 0)
                elementDataSecondLevel.Comment = mother.find($('textarea[name=commentsecondLevel]')).val();
            
            
            if(mother.find("input[name='actualtextsecondLevel']").length > 0)
                elementDataSecondLevel.actualText = mother.find("input[name='actualtextsecondLevel']").val();
            if(mother.find("input[name='actualtextIdsecondLevel']").length > 0)
                elementDataSecondLevel.actualTextID = mother.find("input[name='actualtextIdsecondLevel']").val();
            if(mother.find("input[name='actualopcIdsecondLevel']").length > 0)
                elementDataSecondLevel.actualValueTag = mother.find("input[name='actualopcIdsecondLevel']").val();
             if(mother.find($('input[name=actuallocalsecondLevel]')).length > 0) 
                elementDataSecondLevel.actualLocalUnit = mother.find('input[name=actuallocalsecondLevel]').val();
            if(mother.find($('input[name=actualimperialsecondLevel]')).length > 0) 
                elementDataSecondLevel.actualImperialUnit = mother.find('input[name=actualimperialsecondLevel]').val();
            if(mother.find($('input[name=actualmetricsecondLevel]')).length > 0) 
                elementDataSecondLevel.actualMetricalUnit = mother.find('input[name=actualmetricsecondLevel]').val();
            if(mother.find($('input[name=actualdigitssecondLevel]')).length > 0) 
                elementDataSecondLevel.actualDecimalDigits = mother.find($('input[name=actualdigitssecondLevel]')).val();
            
            if(mother.find("input[name='setpointtextsecondLevel']").length > 0)
                elementDataSecondLevel.setpointText = mother.find("input[name='setpointtextsecondLevel']").val();
            if(mother.find("input[name='setpointtextIdsecondLevel']").length > 0)
                elementDataSecondLevel.setpointTextID = mother.find("input[name='setpointtextIdsecondLevel']").val();
            if(mother.find("input[name='setpointopcIdsecondLevel']").length > 0)
                elementDataSecondLevel.setpointActualValueTag = mother.find("input[name='setpointopcIdsecondLevel']").val();
            if(mother.find("input[name='setpointrampopcIdsecondLevel']").length > 0)
                elementDataSecondLevel.setpointRampValueTag = mother.find("input[name='setpointrampopcIdsecondLevel']").val();
             if(mother.find($('input[name=setpointlocalsecondLevel]')).length > 0) 
                elementDataSecondLevel.setpointLocalUnit = mother.find('input[name=setpointlocalsecondLevel]').val();
            if(mother.find($('input[name=setpointimperialsecondLevel]')).length > 0) 
                elementDataSecondLevel.setpointImperialUnit = mother.find('input[name=setpointimperialsecondLevel]').val();
            if(mother.find($('input[name=setpointmetricsecondLevel]')).length > 0) 
                elementDataSecondLevel.setpointMetricalUnit = mother.find('input[name=setpointmetricsecondLevel]').val();
            if(mother.find($('input[name=setpointdigitssecondLevel]')).length > 0) 
                elementDataSecondLevel.setpointDecimalDigits = mother.find($('input[name=setpointdigitssecondLevel]')).val();
            if(mother.find($('input[name=setpointvisibleopcIdsecondLevel]')).length > 0) 
                elementDataSecondLevel.visibilityOPCIDPanel = mother.find($('input[name=setpointvisibleopcIdsecondLevel]')).val();
            
            if(mother.find("input[name='outputtextsecondLevel']").length > 0)
                elementDataSecondLevel.outputText = mother.find("input[name='outputtextsecondLevel']").val();
            if(mother.find("input[name='outputtextIdsecondLevel']").length > 0)
                elementDataSecondLevel.outputTextID = mother.find("input[name='outputtextIdsecondLevel']").val();
            if(mother.find("input[name='outputopcIdsecondLevel']").length > 0)
                elementDataSecondLevel.outputValueTag = mother.find("input[name='outputopcIdsecondLevel']").val();
             if(mother.find($('input[name=outputlocalsecondLevel]')).length > 0) 
                elementDataSecondLevel.outputLocalUnit = mother.find('input[name=outputlocalsecondLevel]').val();
            if(mother.find($('input[name=outputimperialsecondLevel]')).length > 0) 
                elementDataSecondLevel.outputImperialUnit = mother.find('input[name=outputimperialsecondLevel]').val();
            if(mother.find($('input[name=outputmetricsecondLevel]')).length > 0) 
                elementDataSecondLevel.outputMetricalUnit = mother.find('input[name=outputmetricsecondLevel]').val();
            if(mother.find($('input[name=outputdigitssecondLevel]')).length > 0) 
                elementDataSecondLevel.outputDecimalDigits = mother.find($('input[name=outputdigitssecondLevel]')).val();
            
            elementDataSecondLevel.Position = 'L';
        }
        // dritte ebene
        if($('.newSubContentpage.thirdLevel').length > 0){
            if(parent.find($('input[name=subcontentpagenamethirdLevel]')).length > 0) {
                parent.find("input[name='subcontentpagenamethirdLevel']")[0].Textvalue[0].Text = parent.find("input[name='subcontentpagenamethirdLevel']").val();
                
            }
            if(parent.find($('input[name=subcontentpagetextIdthirdLevel]')).length > 0){ 
                parent.find("input[name='subcontentpagetextIdthirdLevel']")[0].TextIDvalue[0].TextID = parent.find("input[name='subcontentpagetextIdthirdLevel']").val();
            }
            if(parent.find(".uservisiblepanelSubCPthirdLevel .selectRights li.active").length > -1){                
                $('.newSubContentpage.thirdLevel').closest('.subcontentpagelist.thirdLevel')[0].myParent['AddPageTab'].VisibleAtRight = parent.find(".uservisiblepanelSubCPthirdLevel .selectRights li.active").attr('data-right');
                $('.newSubContentpage.thirdLevel').closest('.subcontentpagelist.thirdLevel')[0].myParent['AddPageTab'].push({'VisibleAtRight': parent.find(".uservisiblepanelSubCPthirdLevel .selectRights li.active").attr('data-right')});
            } else {
                $('.newSubContentpage.thirdLevel').closest('.subcontentpagelist.thirdLevel')[0].myParent.AddPageTab.VisibleAtRight = 0;
            }
        }
        if($('.newBlockthirdLevel').length > 0){
            var blockDatathirdLevel = parent.find('.newBlockthirdLevel').closest('.blocklist.thirdLevel')[0].self;
            blockDatathirdLevel.Text = parent.find("input[name='blocknamethirdLevel']").val();
            blockDatathirdLevel.TextID = parent.find("input[name='blocktextIdthirdLevel']").val();
            blockDatathirdLevel.Position = 'L';
            blockDatathirdLevel.showHide = parent.find("input[name='showhidethirdLevel']").prop("checked");
            blockDatathirdLevel.VisibleOPCID = parent.find("input[name='visibleopcIdBlthirdLevel']").val();
            if(parent.find(".uservisiblepanelBLthirdLevel .selectRights li.active").length > -1){
                blockDatathirdLevel.VisibleAtRight = parent.find(".uservisiblepanelBLthirdLevel .selectRights li.active").attr('data-right');
            } else {
                blockDatathirdLevel.VisibleAtRight = 0;
            }
        }
        if($('.newBlockthirdLevel .newElement').length > 0){
            var mother1 = $('.newBlockthirdLevel');
            $('.ledPanelOn, .ledPanelOff').removeClass('error');
            var elementDatathirdLevel = mother1.find('.newElement').closest('.elementlist')[0].self;
            if(mother1.find("input[name='elementtextthirdLevel']").length > 0)
                elementDatathirdLevel.Text = mother1.find("input[name='elementtextthirdLevel']").val();
            if(mother1.find("input[name='elementtextIdthirdLevel']").length > 0)
                elementDatathirdLevel.TextID = mother1.find("input[name='elementtextIdthirdLevel']").val();
            if(mother1.find("input[name='opcIdthirdLevel']").length > 0)
                elementDatathirdLevel.OPCID = mother1.find("input[name='opcIdthirdLevel']").val();
            if(mother1.find("input[name='visibleopcIdthirdLevel']").length > 0)
                elementDatathirdLevel.VisibleOPCID = mother1.find("input[name='visibleopcIdthirdLevel']").val();
            if(mother1.find("div[data-led='On'] span.kreis.active").length > 0)
                elementDatathirdLevel.OnLED = mother1.find("div[data-led='On'] span.kreis.active").attr('data-color');
            if(mother1.find("div[data-led='Off'] span.kreis.active").length > 0)
                elementDatathirdLevel.OffLED = mother1.find("div[data-led='Off'] span.kreis.active").attr('data-color');
            if(mother1.find(".uservisiblepanelthirdLevel .selectRights li.active").length > 0)
                elementDatathirdLevel.VisibleAtRight = mother1.find(".uservisiblepanelthirdLevel .selectRights li.active").attr('data-right');
            if(mother1.find($('input[name=initthirdLevel]')).length > 0) 
                elementDatathirdLevel.UnitInit = mother1.find($('input[name=initthirdLevel]:checked')).val();
            if(mother1.find($('input[name=localthirdLevel]')).length > 0) 
                elementDatathirdLevel.UnitLocale = mother1.find($('input[name=localthirdLevel]')).val();
            if(mother1.find($('input[name=imperialthirdLevel]')).length > 0) 
                elementDatathirdLevel.UnitImperial = mother1.find($('input[name=imperialthirdLevel]')).val();
            if(mother1.find($('input[name=strStartthirdLevel]')).length > 0) 
                elementDatathirdLevel.StrStart = (mother1.find($('input[name=strStartthirdLevel]')).val()) ? mother1.find($('input[name=strStartthirdLevel]')).val() : '0';
            if(mother1.find($('input[name=strLengththirdLevel]')).length > 0) 
                elementDatathirdLevel.StrLen = (mother1.find($('input[name=strLengththirdLevel]')).val()) ? mother1.find($('input[name=strLengththirdLevel]')).val() : '10000';
            if(mother1.find($('input[name=metricthirdLevel]')).length > 0) 
                elementDatathirdLevel.UnitMetric = mother1.find($('input[name=metricthirdLevel]')).val();
            if(mother1.find($('input[name=maxValuethirdLevel]')).length > 0) 
                var myMax;
                if(mother1.find($('input[name=maxValuethirdLevel]')).val() === '' ){
                    myMax = 100;
                } else {
                    myMax = mother1.find($('input[name=maxValuethirdLevel]')).val();
                }
                elementDatathirdLevel.InputMax = myMax;
            if(mother1.find($('input[name=minValuethirdLevel]')).length > 0) 
                var myMin;
                if(mother1.find($('input[name=minValuethirdLevel]')).val() === '' ){
                    myMin = -100;
                } else {
                    myMin = mother1.find($('input[name=minValuethirdLevel]')).val();
                }
                elementDatathirdLevel.InputMin = myMin;
            if(mother1.find(".authpanelthirdLevel .selectRights li.active").length > 0)
                elementDatathirdLevel.UserRight = mother1.find(".authpanelthirdLevel .selectRights li.active").attr('data-right');
            if(mother1.find($('input[name=digitsthirdLevel]')).length > 0) 
                elementDatathirdLevel.Precision = mother1.find($('input[name=digitsthirdLevel]')).val();
            if(mother1.find("input[name='elementtext2thirdLevel']").length > 0)
                elementDatathirdLevel.Text2 = mother1.find("input[name='elementtext2thirdLevel']").val();
            if(mother1.find("input[name='elementtextId2thirdLevel']").length > 0)
                elementDatathirdLevel.TextID2 = mother1.find("input[name='elementtextId2thirdLevel']").val();
            if(mother1.find("input[name='opcId2thirdLevel']").length > 0)
                elementDatathirdLevel.OPCID2 = mother1.find("input[name='opcId2thirdLevel']").val();
            if(mother1.find("input[name='ledopcIdthirdLevel']").length > 0)
                elementDatathirdLevel.LEDOPCID = mother1.find("input[name='ledopcIdthirdLevel']").val();
            if(mother1.find($('input[name=visuvalueBasethirdLevel]')).length > 0) 
                elementDatathirdLevel.VisuBase = mother1.find($('input[name=visuvalueBasethirdLevel]:checked')).val();
            if(mother1.find($('input[name=plcvalueBasethirdLevel]')).length > 0) 
                elementDatathirdLevel.Base = mother1.find($('input[name=plcvalueBasethirdLevel]:checked')).val();
            if(mother1.find($('input[name=maxTimethirdLevel]')).length > 0) 
                elementDatathirdLevel.IntTimeMax = mother1.find($('input[name=maxTimethirdLevel]')).val();
            if(mother1.find($('input[name=minTimethirdLevel]')).length > 0) 
                elementDatathirdLevel.IntTimeMin = mother1.find($('input[name=minTimethirdLevel]')).val();
            if(mother1.find($('input[name=visibleopcrampIdthirdLevel]')).length > 0) 
                elementDatathirdLevel.OPCRampVisibleID = mother1.find($('input[name=visibleopcrampIdthirdLevel]')).val();
            if(mother1.find($('input[name=opcrampIdthirdLevel]')).length > 0) 
                elementDatathirdLevel.OPCRampID = mother1.find($('input[name=opcrampIdthirdLevel]')).val();
            if(mother1.find($('input[name=urlthirdLevel]')).length > 0) {
                var myUrl = mother1.find($('input[name=urlthirdLevel]')).val() + '?PLC=' + mother1.find("input[name='PLC']").val() + '&Tag=' + mother1.find("input[name='Tag']").val();
                elementDatathirdLevel.URL = myUrl;
            }
            if(mother1.find($('input[name=unitthirdLevel]')).length > 0) 
                elementDatathirdLevel.Unit = mother1.find($('input[name=unitthirdLevel]')).val();
            if(mother1.find($('input[name=useLEDthirdLevel]')).length > 0) 
                elementDatathirdLevel.showLED = mother1.find("input[name='useLEDthirdLevel']").prop("checked");
            if(mother1.find($('input[name=stepthirdLevel]')).length > 0) 
                elementDatathirdLevel.step = mother1.find($('input[name=stepthirdLevel]')).val();
            
            if(mother1.find($('input[name=writeTagWR1thirdLevel]')).length > 0) 
                elementDatathirdLevel.writeTagWR1 = mother1.find($('input[name=writeTagWR1thirdLevel]')).val();
            if(mother1.find($('input[name=writeTagWR2thirdLevel]')).length > 0) 
                elementDatathirdLevel.writeTagWR2 = mother1.find($('input[name=writeTagWR2thirdLevel]')).val();
            if(mother1.find($('input[name=writeTagWR3thirdLevel]')).length > 0) 
                elementDatathirdLevel.writeTagWR3 = mother1.find($('input[name=writeTagWR3thirdLevel]')).val();
            if(mother1.find($('input[name=readTagRD1thirdLevel]')).length > 0) 
                elementDatathirdLevel.readTagRD1 = mother1.find($('input[name=readTagRD1thirdLevel]')).val();
            if(mother1.find($('input[name=readTagRD2thirdLevel]')).length > 0) 
                elementDatathirdLevel.readTagRD2 = mother1.find($('input[name=readTagRD2thirdLevel]')).val();
            if(mother1.find($('input[name=readTagRD3thirdLevel]')).length > 0) 
                elementDatathirdLevel.readTagRD3 = mother1.find($('input[name=readTagRD3thirdLevel]')).val();
            if(mother1.find($('input[name=readTagRD4thirdLevel]')).length > 0) 
                elementDatathirdLevel.readTagRD4 = mother1.find($('input[name=readTagRD4thirdLevel]')).val();
            if(mother1.find(".buttonclassthirdLevel li.active").length > 0)
                elementDatathirdLevel.leftIcon = mother1.find(".buttonclassthirdLevel li.active").attr('data-value');
            if(mother1.find(".buttonclass2thirdLevel li.active").length > 0)
                elementDatathirdLevel.middleIcon = mother1.find(".buttonclass2thirdLevel li.active").attr('data-value');
            if(mother1.find(".buttonclass1thirdLevel li.active").length > 0)
                elementDatathirdLevel.rightIcon = mother1.find(".buttonclass1thirdLevel li.active").attr('data-value');
            if(mother1.find($('input[name=visibilityStopthirdLevel]')).length > 0)
                elementDatathirdLevel.visibilityStop = mother1.find($('input[name=visibilityStopthirdLevel]')).val();
            if(mother1.find($('input[name=functhirdLevel]')).length > 0) 
                elementDatathirdLevel.func = mother1.find($('input[name=functhirdLevel]:checked')).val();
            if(mother1.find($('input[name=functionthirdLevel]')).length > 0) 
                elementDatathirdLevel.funcField = mother1.find($('input[name=functionthirdLevel]')).val();
            if(mother1.find($('textarea[name=urlnamethirdLevel]')).length > 0)
                elementDatathirdLevel.Text = mother1.find($('textarea[name=urlnamethirdLevel]')).val().split('\n');           
            if(mother1.find($('textarea[name=urlnameidthirdLevel]')).length > 0)
                elementDatathirdLevel.TextID = mother1.find($('textarea[name=urlnameidthirdLevel]')).val().split('\n');            
            if(mother1.find($('textarea[name=urlthirdLevel]')).length > 0)
                elementDatathirdLevel.URLarray = mother1.find($('textarea[name=urlthirdLevel]')).val().split('\n');
            if(mother1.find($('textarea[name=commentthirdLevel]')).length > 0)
                elementDatathirdLevel.Comment = mother1.find($('textarea[name=commentthirdLevel]')).val();
            if(mother1.find($('input[name=numberofchainthirdLevel]')).length > 0) 
                elementDatathirdLevel.NumberOfChain = mother1.find($('input[name=numberofchainthirdLevel]')).val();
            
            if(mother1.find("input[name='actualtextthirdLevel']").length > 0)
                elementDatathirdLevel.actualText = mother1.find("input[name='actualtextthirdLevel']").val();
            if(mother1.find("input[name='actualtextIdthirdLevel']").length > 0)
                elementDatathirdLevel.actualTextID = mother1.find("input[name='actualtextIdthirdLevel']").val();
            if(mother1.find("input[name='actualopcIdthirdLevel']").length > 0)
                elementDatathirdLevel.actualValueTag = mother1.find("input[name='actualopcIdthirdLevel']").val();
             if(mother1.find($('input[name=actuallocalthirdLevel]')).length > 0) 
                elementDatathirdLevel.actualLocalUnit = mother1.find('input[name=actuallocalthirdLevel]').val();
            if(mother1.find($('input[name=actualimperialthirdLevel]')).length > 0) 
                elementDatathirdLevel.actualImperialUnit = mother1.find('input[name=actualimperialthirdLevel]').val();
            if(mother1.find($('input[name=actualmetricthirdLevel]')).length > 0) 
                elementDatathirdLevel.actualMetricalUnit = mother1.find('input[name=actualmetricthirdLevel]').val();
            if(mother1.find($('input[name=actualdigitsthirdLevel]')).length > 0) 
                elementDatathirdLevel.actualDecimalDigits = mother1.find($('input[name=actualdigitsthirdLevel]')).val();
            
            if(mother1.find("input[name='setpointtextthirdLevel']").length > 0)
                elementDatathirdLevel.setpointText = mother1.find("input[name='setpointtextthirdLevel']").val();
            if(mother1.find("input[name='setpointtextIdthirdLevel']").length > 0)
                elementDatathirdLevel.setpointTextID = mother1.find("input[name='setpointtextIdthirdLevel']").val();
            if(mother1.find("input[name='setpointopcIdthirdLevel']").length > 0)
                elementDatathirdLevel.setpointActualValueTag = mother1.find("input[name='setpointopcIdthirdLevel']").val();
            if(mother1.find("input[name='setpointrampopcIdthirdLevel']").length > 0)
                elementDatathirdLevel.setpointRampValueTag = mother1.find("input[name='setpointrampopcIdthirdLevel']").val();
             if(mother1.find($('input[name=setpointlocalthirdLevel]')).length > 0) 
                elementDatathirdLevel.setpointLocalUnit = mother1.find('input[name=setpointlocalthirdLevel]').val();
            if(mother1.find($('input[name=setpointimperialthirdLevel]')).length > 0) 
                elementDatathirdLevel.setpointImperialUnit = mother1.find('input[name=setpointimperialthirdLevel]').val();
            if(mother1.find($('input[name=setpointmetricthirdLevel]')).length > 0) 
                elementDatathirdLevel.setpointMetricalUnit = mother1.find('input[name=setpointmetricthirdLevel]').val();
            if(mother1.find($('input[name=setpointdigitsthirdLevel]')).length > 0) 
                elementDatathirdLevel.setpointDecimalDigits = mother1.find($('input[name=setpointdigitsthirdLevel]')).val();
            if(mother1.find($('input[name=setpointvisibleopcIdthirdLevel]')).length > 0) 
                elementDatathirdLevel.visibilityOPCIDPanel = mother1.find($('input[name=setpointvisibleopcIdthirdLevel]')).val();
            
            if(mother1.find("input[name='outputtextthirdLevel']").length > 0)
                elementDatathirdLevel.outputText = mother1.find("input[name='outputtextthirdLevel']").val();
            if(mother1.find("input[name='outputtextIdthirdLevel']").length > 0)
                elementDatathirdLevel.outputTextID = mother1.find("input[name='outputtextIdthirdLevel']").val();
            if(mother1.find("input[name='outputopcIdthirdLevel']").length > 0)
                elementDatathirdLevel.outputValueTag = mother1.find("input[name='outputopcIdthirdLevel']").val();
             if(mother1.find($('input[name=outputlocalthirdLevel]')).length > 0) 
                elementDatathirdLevel.outputLocalUnit = mother1.find('input[name=outputlocalthirdLevel]').val();
            if(mother1.find($('input[name=outputimperialthirdLevel]')).length > 0) 
                elementDatathirdLevel.outputImperialUnit = mother1.find('input[name=outputimperialthirdLevel]').val();
            if(mother1.find($('input[name=outputmetricthirdLevel]')).length > 0) 
                elementDatathirdLevel.outputMetricalUnit = mother1.find('input[name=outputmetricthirdLevel]').val();
            if(mother1.find($('input[name=outputdigitsthirdLevel]')).length > 0) 
                elementDatathirdLevel.outputDecimalDigits = mother1.find($('input[name=outputdigitsthirdLevel]')).val();
            
            elementDatathirdLevel.Position = 'L';
        }        
        
        var jsonClone = rebuildJson();
        var jsonCloneString = JSON.stringify(jsonClone);
        $('.newjson .hashcode .newhashcode').text(', new Hashcode: ' + jsonCloneString.hashCode());
        $('.configcenter.full.editor .diagnose').remove();
        
        
        
        openstatwin(jsonClone);
//        $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
    }  
}
function buildLEDPanel(status){
    var panel = '<div data-led="' + status + '" class="cl ledPanel' + status + '"><span class="pagerHeadLine fl">LED '+ status +' Panel</span>' +
        '<span class="kreis green" data-color="G"></span><span class="kreis red" data-color="R"></span><span class="kreis black" data-color="X"></span><span class="kreis blue" data-color="B"></span>' +
        '<span class="kreis lightgrey" data-color="O"></span><span class="kreis pink" data-color="P"></span><span class="kreis yellow" data-color="Y"></span>' +
        '</div><br class="cl">';
    return panel;
}
function getAuthDropDown(){
    var elements = '';// = ['none', 'Commissioning', 'Driving in setup mode', 'Alarm handling', 'Modify control bits', 'Modify counters', 'Modify limit points', 'Modify set points', 'Modify speeds', 'Operating drives', 'Operating modes', 'Reset counters', 'Selector switches', 'Superordinate functions', 'System design', 'Type operating'];
    if(department === 1 || department === 3 || department === '1' || department === '3'){
        elements = ['none', 'Commissioning', 'Driving in setup mode', 'Alarm handling', 'Modify control bits', 'Modify counters', 'Modify limit points', 'Modify set points', 'Modify speeds', 'Operating drives', 'Operating modes', 'Reset counters', 'Selector switches', 'Superordinate functions', 'System design', 'Type operating', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Paint / PVC Supply'];
    } else if(department === 5 || department === '5' || department === 2 || department === '2' || department === 4 || department === '4') {
        elements = ['none', 'Commissioning', 'Driving in setup mode', 'Alarm handling', 'Modify control bits', 'Modify counters', 'Modify limit points', 'Modify set points', 'Modify speeds', 'Operating drives', 'Operating modes', 'Reset counters', 'Selector switches', 'Superordinate functions', 'System design', 'Type operating', 'Control CSS', 'Administration', 'Emergency Input', 'Skidmanagement', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve', 'Reserve'];
    }
    var myList = $('<ul/>', {
        "class": "dropdownlist noicon selectRights"
    });//.appendTo(parent);
    $.each(elements, function (key, val) {
        $("<li/>", {
            "class": (val === 'none')? "breadoverlay_li active" : "breadoverlay_li",
            "text": val,
            "data-right": key,
            "click": function () {
                console.log('hallo');
            }
        }).appendTo(myList);
    });    
    return myList;
}
//Erstellen der einzelnen Elemente
function getElementHead(){
    var head = '<div class="newapp newElement">' + 
        '<div class="partbox"><span class="pagerHeadLine" style="display:block;"></span>'; // New Element
    return head;
}
function getMainInput(withoutText, withoutOPCID, secondLevel){
    var text = '';
    var noopcid = '';
    if(!withoutText) {
       text =  buildInputGroup('New Element', 'Text', 'elementtext' + secondLevel, '', 'required') +
            buildInputGroup('New Text ID', 'Text ID', 'elementtextId' + secondLevel, '', 'required');
    } 
    if(!withoutOPCID) {
       noopcid =  buildInputGroup('New OPC ID', 'OPC ID', 'opcId' + secondLevel, '', 'required');
    } 
    var temp =  text +    
    noopcid + 
    buildInputGroup('Visibility OPC ID panel', 'Visibility OPC ID Panel', 'visibleopcId' + secondLevel, '', '') +  
    '<div class="inputGroup uservisiblepanel'+ secondLevel +' fixfl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span>' +    
    '</div>';
    return temp;
}
function getAuthMinMAx(minmax, intTime, secondLevel){
    var id = getId();
    var authorisation = '<div class="inputGroup authpanel'+ secondLevel +' fl" id="'+ id +'"><label class="smallText">Authorization Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +
        '<br class="cl">';
    if(minmax){
        authorisation += buildInputGroup('Input Min. Value', 'Input Min. Value', 'minValue' + secondLevel, 'fl', '') +    
        buildInputGroup('Input Max. Value', 'Input Max. Value', 'maxValue' + secondLevel, '', '');
    }   
    if(intTime){
        authorisation += buildInputGroup('Input Min. Time', 'Input Min. Time', 'minTime' + secondLevel, 'fl', '') +    
        buildInputGroup('Input Max. Time', 'Input Max. Time', 'maxTime' + secondLevel, '', '');
    }
    return authorisation;
}
function getUnitInput(secondLevel){
    var temp = '<span style="display:block;">Unit: </span>' +
        buildInputGroup('Locale', 'Local', 'local' + secondLevel, 'fl', '', 'smallInput') +    
        buildInputGroup('Imperial', 'Imperial', 'imperial' + secondLevel, 'fl', '', 'smallInput') + 
        buildInputGroup('Metric', 'Metric', 'metric' + secondLevel, '', '', 'smallInput') +  
        
        '<span class="spaninput"><input type="radio" name="init'+ secondLevel +'" value="0"> Locale</span>' +
        '<span class="spaninput"><input type="radio" name="init'+ secondLevel +'" value="1"> Imperial</span>' +
        '<span class="spaninput"><input type="radio" name="init'+ secondLevel +'" value="2" checked> Metric</span>' +
        '<br class="cl"><br>';
        return temp;
}
function getValueBase(secondLevel){
    var element = '<div class="fl"><span style="display:block;line-height: 20px;">Visu Value Base</span><span class="spaninput"><input type="radio" name="visuvalueBase'+ secondLevel +'" value="s" checked> Second</span>' +
        '<span class="spaninput"><input type="radio" name="visuvalueBase'+ secondLevel +'" value="ms"> Milli-Second</span></div>' +
        '<div class="fl"><span style="display:block;line-height: 20px;">PLC Value Base</span><span class="spaninput"><input type="radio" name="plcvalueBase'+ secondLevel +'" value="s" checked> Second</span>' +
        '<span class="spaninput"><input type="radio" name="plcvalueBase'+ secondLevel +'" value="ms"> Milli-Second</span></div>' +
        '<br class="cl"><br>';
    return element;
}
function getHeadLED(){
    var id = getId();
    var elementBody = $('<div class="newapp newLED">' + 
        '<div class="partbox"><span class="pagerHeadLine" style="display:block;"></span>' + 
//        getElementHead() +
        buildInputGroup('New Element', 'Text', 'elementtext', 'fl', 'required') +
        buildInputGroup('New Text ID', 'Text ID', 'elementtextId', '', 'required') +
        buildInputGroup('New OPC ID', 'OPC ID', 'opcId', 'fl', 'required') +
//        buildInputGroup('Visibility OPC ID panel', 'Visibility OPC ID Panel', 'visibleopcId', '', '') +  
        '<div class="inputGroup uservisiblepanel fl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +    
    
        buildLEDPanel('On') +
        buildLEDPanel('Off') +        
        '</div>' +
        '</div>');
    elementBody.find('.uservisiblepanel').append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId']").removeAttr('pattern');
    return elementBody;
}
function getAddTextLED(auth, secondLevel, myButton){
    var authorisation = '';
    var id = getId();
    var ledpanel = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
        if(myButton)
            authorisation += '<div class="inputGroup buttonclass"><label class="smallText">Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass" id="'+ id +'"></ul></div>';
    } 
    if(!myButton) {
        ledpanel = buildLEDPanel('On') +
                   buildLEDPanel('Off');
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
        authorisation +
        ledpanel +
        
        '</div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown()); 
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    buildClassList('svg/StatWinButtons', id, false, true);
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getSliderElement(auth, secondLevel){
    var authorisation = '';
    var id = getId();
    if(auth){
        authorisation = getAuthMinMAx(true, false, secondLevel);
    } 
    
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
        authorisation +
        buildInputGroup('Step', 'Step', 'step' + secondLevel, 'fl', '', 'smallInput') + 
        buildInputGroup('Unit', 'Unit', 'unit' + secondLevel, '', '', 'smallInput') + 
        '</div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown()); 
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddGhostModus(auth, secondLevel){
    var authorisation = '';
    var id = getId();
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    } 
    
    var elementBody = $(getElementHead() +
        '<div class="inputGroup uservisiblepanel fl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +    
            
        authorisation +
        buildInputGroup('New OPC ID', 'OPC ID', 'opcId' + secondLevel, '', 'required') + 
        '</div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown()); 
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    return elementBody;
}
function getSercosChain(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    } 
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
//        '<div class="inputGroup uservisiblepanel fl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +    
            
        authorisation +
        buildInputGroup('Number of Chain', 'Number of Chain', 'numberofchain' + secondLevel, '', '', 'smallInput') + 
        '</div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown()); 
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    return elementBody;
}
function buildInputLinkList(secondLevel){
    var body = buildInputGroup('URL name', 'URL name', 'urlname' + secondLevel, 'fl', 'required');
    body += buildInputGroup('URL name ID', 'URL name ID', 'urlnameid' + secondLevel, 'fl', 'required');
    body += buildInputGroup('URL', 'URL', 'url' + secondLevel, '', 'required'); 
    return body;
}
function getCommandFeedback1B1WR1RD(auth, secondLevel){
    var id = getId();
    var id1 = getId();
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, true, secondLevel) +
        authorisation +
        '<div class="inputGroup buttonclass'+ secondLevel +' fl"><label class="smallText">left Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass" id="'+ id +'"></ul></div>' +
        buildInputGroup('write Tag ', 'write Tag ', 'writeTagWR1' + secondLevel, 'marL169', 'required', 'middlesize') +  
        buildInputGroup('read Tag ', 'read Tag ', 'readTagRD1' + secondLevel, 'marL169', 'required', 'middlesize') + 
        '<br class="cl"></div>' +
        '</div>');
    buildClassList('svg/StatWinButtons', id, false, true);
    elementBody.find('.uservisiblepanel' + secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel' + secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getCommandFeedback2WR2RD(auth, writeNum, readNum, secondLevel){
    var id = getId();
    var id1 = getId();
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    
    var wr2 = '';
    var wr3 = '';
    var rd2 = '';
    var textL = '';
    var textR = '';
    if(writeNum === '2wr'){
        textL = 'left';
        wr2 = buildInputGroup('write Tag right', 'write Tag right', 'writeTagWR2' + secondLevel, 'marL169', 'required', 'middlesize'); 
    }
        
    if(readNum === '2rd'){
        textR = 'left';
        rd2 = buildInputGroup('read Tag right', 'read Tag right', 'readTagRD2' + secondLevel, 'marL169', 'required', 'middlesize');
    }    
    var wr1 = buildInputGroup('write Tag ' + textL, 'write Tag ' + textL, 'writeTagWR1' + secondLevel, 'marL169', 'required', 'middlesize');
    if(writeNum === '1wr'){
        wr3 = buildInputGroup('write Tag right', 'write Tag right', 'writeTagWR1' + secondLevel, 'marL169', 'required', 'middlesize'); 
        wr1 = '';
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, true, secondLevel) +
        authorisation +
        '<div class="inputGroup buttonclass'+ secondLevel +' fixfl"><label class="smallText">left Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass" id="'+ id +'"></ul></div>' +
        wr1 +  
        buildInputGroup('read Tag ' + textR, 'read Tag ' + textR, 'readTagRD1' + secondLevel, 'marL169', 'required', 'middlesize') + 
        '<div class="inputGroup buttonclass1'+ secondLevel +' fixfl"><label class="smallText">right Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass1" id="'+ id1 +'"></ul></div>' +
        wr3 +
        wr2 +
        rd2 +
        
        '<br class="cl"></div>' +
        '</div>');
    buildClassList('svg/StatWinButtons', id, false, true);
    buildClassList('svg/StatWinButtons', id1, false, true);
    elementBody.find('.uservisiblepanel' + secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel' + secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getCommandFeedback3WR4RD(auth, secondLevel){
    var id = getId();
    var id1 = getId();
    var id2 = getId();
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }        
    var elementBody = $(getElementHead() +
        getMainInput(false, true, secondLevel) +
        authorisation +
         
        '<div class="inputGroup buttonclass'+ secondLevel +' fixfl"><label class="smallText">left Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass" id="'+ id +'"></ul></div>' + 
        buildInputGroup('write Tag left', 'write Tag left', 'writeTagWR3'+ secondLevel, '', 'required') +
        buildInputGroup('read Tag left done', 'read Tag left done', 'readTagRD4'+ secondLevel, 'marL169', 'required') + 
        buildInputGroup('read Tag left doing', 'read Tag left doing', 'readTagRD3'+ secondLevel, 'marL169', 'required') + 
        '<div class="inputGroup buttonclass2'+ secondLevel +' fixfl"><label class="smallText">middle Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass2" id="'+ id2 +'"></ul></div>' +
        buildInputGroup('write Tag Middle', 'write Tag Middle', 'writeTagWR2'+ secondLevel, '', 'required') +          
        buildInputGroup('visibility Middle', 'visibility Middle', 'visibilityStop'+ secondLevel, 'marL169', '') + 
        '<div class="inputGroup buttonclass1'+ secondLevel +' fixfl"><label class="smallText">right Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass1" id="'+ id1 +'"></ul></div>' +
        buildInputGroup('write Tag right', 'write Tag right', 'writeTagWR1'+ secondLevel, '', 'required') + 
        buildInputGroup('read Tag right done', 'read Tag right done', 'readTagRD1'+ secondLevel, 'marL169', 'required') + 
        buildInputGroup('read Tag right doing', 'read Tag right doing', 'readTagRD2'+ secondLevel, 'marL169', 'required') + 
        '<br class="cl"></div>' +
        '</div>');
    buildClassList('svg/StatWinButtons', id, false, true);
    buildClassList('svg/StatWinButtons', id1, false, true);
    buildClassList('svg/StatWinButtons', id2, false, true);
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    elementBody.find("input[name='visibilityStop']").removeAttr('pattern');
    return elementBody;
}
function getCommandFeedback3WR3RD(auth, secondLevel){
    var id = getId();
    var id1 = getId();
    var id2 = getId();
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }        
    var elementBody = $(getElementHead() +
        getMainInput(false, true, secondLevel) +
        authorisation +
         
        '<div class="inputGroup buttonclass'+ secondLevel +' fixfl"><label class="smallText">left Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass" id="'+ id +'"></ul></div>' + 
        buildInputGroup('write Tag left', 'write Tag left', 'writeTagWR3'+ secondLevel, '', 'required') +
        buildInputGroup('read Tag left done', 'read Tag left done', 'readTagRD4'+ secondLevel, 'marL169', 'required') + 
        buildInputGroup('read Tag left doing', 'read Tag left doing', 'readTagRD3'+ secondLevel, 'marL169', 'required') + 
        '<div class="inputGroup buttonclass2'+ secondLevel +' fixfl"><label class="smallText">middle Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass2" id="'+ id2 +'"></ul></div>' +
        buildInputGroup('write Tag Middle', 'write Tag Middle', 'writeTagWR2'+ secondLevel, '', 'required') +          
        buildInputGroup('visibility Middle', 'visibility Middle', 'visibilityStop'+ secondLevel, 'marL169', '') + 
        '<div class="inputGroup buttonclass1'+ secondLevel +' fixfl"><label class="smallText">right Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass1" id="'+ id1 +'"></ul></div>' +
        buildInputGroup('write Tag right', 'write Tag right', 'writeTagWR1'+ secondLevel, '', 'required') + 
        buildInputGroup('read Tag right done', 'read Tag right done', 'readTagRD1'+ secondLevel, 'marL169', 'required') + 
        buildInputGroup('read Tag right doing', 'read Tag right doing', 'readTagRD2'+ secondLevel, 'marL169', 'required') +  
        '<br class="cl"></div>' +
        '</div>');
    buildClassList('svg/StatWinButtons', id, false, true);
    buildClassList('svg/StatWinButtons', id1, false, true);
    buildClassList('svg/StatWinButtons', id2, false, true);
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    elementBody.find("input[name='visibilityStop']").removeAttr('pattern');
    return elementBody;
}
function getShowExternalContent(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    var elementBody = $(getElementHead() +
        '<div class="inputGroup uservisiblepanel'+ secondLevel +' fixfl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' + 
        authorisation +  
        '<div class="textholder"><span class="smallText">URL name</span><textarea name="urlname'+ secondLevel +'" class="textbox urlname" required></textarea></div>' +
        '<div class="textholder"><span class="smallText">URL name ID</span><textarea name="urlnameid'+ secondLevel +'" class="textbox urlnameid" required></textarea></div>' +
        '<div class="textholder"><span class="smallText">URL</span><textarea name="url'+ secondLevel +'" class="textbox url" required></textarea></div><br class="cl">' +
//        buildInputLinkList() +
        
        '<br class="cl"></div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    return elementBody;
}
function getControllerElement(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    var elementBody = $(getElementHead() +
        '<div class="inputGroup uservisiblepanel'+ secondLevel +' fixfl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' + 
        authorisation + 
        '<span style="display:block;">Actual: </span>' +
        buildInputGroup('New Text', 'Text', 'actualtext'+ secondLevel, 'fl', 'required') +
        buildInputGroup('New Text ID', 'Text ID', 'actualtextId'+ secondLevel, '', 'required') +
        buildInputGroup('New Tag', 'Tag', 'actualopcId'+ secondLevel, '', 'required') +
        '<span style="display:block;">Unit: </span>' +
        buildInputGroup('Locale', 'Local', 'actuallocal'+ secondLevel, 'fl', '', 'smallInput') +    
        buildInputGroup('Imperial', 'Imperial', 'actualimperial'+ secondLevel, 'fl', '', 'smallInput') + 
        buildInputGroup('Metric', 'Metric', 'actualmetric'+ secondLevel, '', '', 'smallInput') +  
        '<div class="inputGroup"><label class="smallText">Precision Panel for actual</label><input name="actualdigits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>' +
        '<div class="trennlinie"></div>' +
        '<span style="display:block;">Setpoint: </span>' +
        buildInputGroup('New Text', 'Text', 'setpointtext'+ secondLevel, 'fl', 'required') +
        buildInputGroup('New Text ID', 'Text ID', 'setpointtextId'+ secondLevel, '', 'required') +
        buildInputGroup('New Tag', 'Tag', 'setpointopcId'+ secondLevel, 'fl', 'required') +
        buildInputGroup('New Ramp Tag', 'Ramp Tag', 'setpointrampopcId'+ secondLevel, '', 'required') +
        buildInputGroup('Visibility Ramp', 'Visibility Ramp', 'setpointvisibleopcId'+ secondLevel, '', '') +  
        '<span style="display:block;">Unit: </span>' +
        buildInputGroup('Locale', 'Local', 'setpointlocal'+ secondLevel, 'fl', '', 'smallInput') +    
        buildInputGroup('Imperial', 'Imperial', 'setpointimperial'+ secondLevel, 'fl', '', 'smallInput') + 
        buildInputGroup('Metric', 'Metric', 'setpointmetric'+ secondLevel, '', '', 'smallInput') +  
        '<div class="inputGroup"><label class="smallText">Precision Panel for setpoint</label><input name="setpointdigits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>' +
        '<div class="trennlinie"></div>' +
        '<span style="display:block;">Outout: </span>' +
        buildInputGroup('New Text', 'Text', 'outputtext'+ secondLevel, 'fl', 'required') +
        buildInputGroup('New Text ID', 'Text ID', 'outputtextId'+ secondLevel, '', 'required') +
        buildInputGroup('New Tag', 'Tag', 'outputopcId'+ secondLevel, '', 'required') +
        '<span style="display:block;">Unit: </span>' +
        buildInputGroup('Locale', 'Local', 'outputlocal'+ secondLevel, 'fl', '', 'smallInput') +    
        buildInputGroup('Imperial', 'Imperial', 'outputimperial'+ secondLevel, 'fl', '', 'smallInput') + 
        buildInputGroup('Metric', 'Metric', 'outputmetric'+ secondLevel, '', '', 'smallInput') +  
        '<div class="inputGroup"><label class="smallText">Precision Panel for output</label><input name="outputdigits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>' +
        
//        '<span style="display:block;">Trending: </span>' +
//        '<div class="textholder"><span class="smallText">Trending Tags</span><textarea name="trendingtags" class="textbox trendingtags" required></textarea></div>' +
//        '<div class="textholder"><span class="smallText">Trending Filter</span><textarea name="trendingfilter" class="textbox trendingfilter" required></textarea></div>' +
        
        '<br class="cl"></div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    return elementBody;
}
function getSpecialPurposeCentralStart(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    
    var elementBody = $(getElementHead() +
        getMainInput(false, true, secondLevel) +
        authorisation +        
        buildInputGroup('write Tag direct off', 'write Tag direct off', 'writeTagWR1'+ secondLevel, 'fl', 'required') +  
        buildInputGroup('write Tag stripe out', 'write Tag stripe out', 'writeTagWR2'+ secondLevel, '', 'required') +  
        buildInputGroup('write Tag on', 'write Tag on', 'writeTagWR3'+ secondLevel, 'fl', 'required') +  
        buildInputGroup('read Tag on', 'read Tag on', 'readTagRD1'+ secondLevel, '', 'required') + 
        buildInputGroup('read Tag stripe out', 'read Tag stripe out', 'readTagRD2'+ secondLevel, '', 'required') + 
        '<br class="cl"></div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}

function getAddMultibutton(auth, secondLevel){

    var authorisation = '';
    var id = getId();
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }  
    
    var buttonBody = $(getElementHead() +
        getMainInput(false, true, secondLevel) +
        authorisation +   
        '<div class="inputGroup buttonclass'+ secondLevel +' fl"><label class="smallText">left Icon</label><span class="dropdown emosbutton"><span class=""><span style="margin-left: -55px;margin-top: -5px;">Choose Icon</span></span></span><ul class="dropdownlist" data-name="buttonclass" id="'+ id +'"></ul></div>' +
        buildInputGroup('write Tag ', 'write Tag ', 'writeTagWR1' + secondLevel, 'marL169', '', 'middlesize') +  
        buildInputGroup('read Tag ', 'read Tag ', 'readTagRD1' + secondLevel, 'marL169', '', 'middlesize') + 
        '<br class="cl">' +
        '<div class="useIO"><input type="radio" name="func'+ secondLevel +'" value="0">use IO</div>' +
        '<div class="useToggle"><input type="radio" name="func'+ secondLevel +'" value="1">use Toggle</div>' +
        '<div class="useFunction"><input type="radio" name="func'+ secondLevel +'" value="2">use Function' + 
        buildInputGroup('New Function', 'Function', 'function' + secondLevel, '', '') +
        '</div>' +
        '</div>' +
        '</div>');
    buttonBody.find('.uservisiblepanel' + secondLevel).append(getAuthDropDown()); 
    buttonBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    buildClassList('svg/StatWinButtons', id, false, true);
    buttonBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    buttonBody.find("input[name='elementtext"+ secondLevel +"']").removeAttr('required');
    buttonBody.find("input[name='elementtextId"+ secondLevel +"']").removeAttr('required');
    
    return buttonBody;
}
function getAddLED_Text_Value_Unit(auth, secondLevel){
    var authorisation = '';
    var id = getId();
    var ledpanel = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    } 
    ledpanel = buildLEDPanel('On') +
               buildLEDPanel('Off');
    var elementBody = $(getElementHead() +
        '<div class="useLed"><input class="plantcheckbox" type="checkbox" name="useLED" value="LED">use LED</div>' +
        ledpanel +   
        buildInputGroup('New LEDOPC ID', 'LEDOPC ID', 'ledopcId'+ secondLevel, '', '') +
        getMainInput(false, false, secondLevel) +
        authorisation +
        buildInputGroup('Unit', 'Unit', 'unit' + secondLevel, '', '', 'smallInput') +    
        
        
        '</div>' +
        '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown()); 
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
//    buildClassList('svg/StatWinButtons', id, false, true);
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    elementBody.find(".ledPanelOn .kreis.green").addClass('active');
    elementBody.find(".ledPanelOff .kreis.lightgrey").addClass('active');
    return elementBody;
}
function getAddTextInteger(auth, real, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(true, false, secondLevel);
    }
    var realInput;
    if(real){
        realInput = '<div class="inputGroup"><label class="smallText">Precision Panel</label><input name="digits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>';
    } else {
        realInput = '';
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
        authorisation +  
        '<br class="cl">' +
        getUnitInput(secondLevel) +
        '<br class="cl"><br>' +
        realInput +
        '</div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    elementBody.find("input[name='minValue"+ secondLevel +"']").removeAttr('pattern');
    elementBody.find("input[name='maxValue"+ secondLevel +"']").removeAttr('pattern');
    
    return elementBody;
}
function getAddString(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +        
        authorisation +
        '<div class="inputGroup fixfl"><label class="smallText">String Start</label><input name="strStart'+ secondLevel +'" class="text smallInput" placeholder="0" type="number" max="255" min="0"></div>' +
        '<div class="inputGroup"><label class="smallText">String Length</label><input name="strLength'+ secondLevel +'" class="text smallInput" placeholder="255" type="number" max="255" min="1"></div>' +
        '<br class="cl"></div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    elementBody.find("input[name='elementtext"+ secondLevel +"']").removeAttr('required');
    elementBody.find("input[name='elementtextId"+ secondLevel +"']").removeAttr('required');
    return elementBody;
}
function getAddTextByte(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(true, false, secondLevel);
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
        authorisation +   
        '<br class="cl"></div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddDoubleText(secondLevel){    
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
        '<br class="cl">' +
        buildInputGroup('New Element', 'Text 2', 'elementtext2'+ secondLevel, 'fl', 'required') +
        buildInputGroup('New Text ID', 'Text ID 2', 'elementtextId2'+ secondLevel, '', 'required') +
        '<br class="cl"></div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddTextLEDInteger(auth, secondLevel){
    var elementBody = getAddTextLED(auth, secondLevel);
    elementBody.append(buildInputGroup('New LEDOPC ID', 'LEDOPC ID', 'ledopcId'+ secondLevel, '', 'required'));
    elementBody.find('.ledPanelOn').before('<br class="cl">' + getUnitInput(secondLevel));
    if(auth){
        elementBody.append(buildInputGroup('Input Min. Value', 'Input Min. Value', 'minValue'+ secondLevel, 'fl', ''));
        elementBody.append(buildInputGroup('Input Max. Value', 'Input Max. Value', 'maxValue'+ secondLevel, '', ''));
    }
    
    return elementBody;
}
function getAddTextIntegerInteger(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(true, false, secondLevel);
    }
    var elementBody =$(getElementHead() +
        getMainInput(false, false, secondLevel) +
        buildInputGroup('New OPC ID 2', 'OPC ID 2', 'opcId2'+ secondLevel, 'fl', 'required') +
        '<br class="cl">' +
        getUnitInput(secondLevel) +
        authorisation +   
        '<br class="cl"></div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}

function getAddTextRealRealLong(auth, secondLevel){    
    var element = getAddTextIntegerInteger(auth, secondLevel);
    element.append('<div class="inputGroup"><label class="smallText">Precision Panel</label><input name="digits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>');
    
    return element;
}
function getAddLEDTextReal(auth, secondLevel){
    var element = getAddTextLEDInteger(auth, secondLevel);  
    element.find('.uservisiblepanel').before('<div class="inputGroup"><label class="smallText">Precision Panel</label><input name="digits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>');

    return element;
    
}
function getAddLEDTextRealReal(auth, secondLevel){
    var element = getAddLEDTextReal(auth, secondLevel);
    element.append('<br class="cl">');
    element.find("input[name='opcId"+ secondLevel +"']").parent().after(buildInputGroup('New OPC ID 2', 'OPC ID 2', 'opcId2'+ secondLevel, '', 'required'));
    return element;
}
function getAddTextTimer(auth, valuebase, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, true, secondLevel);
    }
    var valBase = '';
    if(!valuebase){
        valBase = '<br class="cl">' + getValueBase(secondLevel);
    }
    var elementBody =$(getElementHead() +
        getMainInput(false, false, secondLevel) +
        
        valBase +
        authorisation +   
        '<br class="cl"></div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddDoubleTextTimer(auth, secondLevel){
    var element = getAddTextTimer(auth, false, secondLevel);
    element.append(buildInputGroup('New OPC ID 2', 'OPC ID 2', 'opcId2'+ secondLevel, '', 'required'));
    return element;
}
function getAddDoubleTextTimerMin(auth, secondLevel){
    var element = getAddTextTimer(auth, true, secondLevel);
    element.append(buildInputGroup('New OPC ID 2', 'OPC ID 2', 'opcId2'+ secondLevel, '', 'required'));
    return element;
}
function getAddTextSiemensDate(auth, secondLevel){
    var authorisation = '';
    if(auth){
        authorisation = getAuthMinMAx(false, false, secondLevel);
    }
    var elementBody = $(getElementHead() +
        getMainInput(false, false, secondLevel) +
        authorisation +   
        '<br class="cl"></div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find('.authpanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddStringField(secondLevel){
    var elementBody = $(getElementHead() +
        getMainInput(true, false, secondLevel) +
        '<br class="cl"><br>' +
        '</div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddStringFieldComment(secondLevel){
    var elementBody = $(getElementHead() +
    buildInputGroup('New Text ID', 'Text ID', 'elementtextId' + secondLevel, '', 'required') +  
    buildInputGroup('Visibility OPC ID panel', 'Visibility OPC ID Panel', 'visibleopcId' + secondLevel, '', '') +  
    '<div class="inputGroup uservisiblepanel'+ secondLevel +' fixfl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span></div>' +    
    '<textarea class="StringFieldComment" name="comment' + secondLevel +'"></textarea>' +
    '<br class="cl"><br>' +
    '</div>' +
    '</div>');
    elementBody.find('.uservisiblepanel'+ secondLevel).append(getAuthDropDown());
    elementBody.find("input[name='visibleopcId"+ secondLevel +"']").removeAttr('pattern');
    return elementBody;
}
function getAddBrowserPage(secondLevel){
    var elementBody = $(getElementHead() +
        buildInputGroup('New OPC ID', 'OPC ID', 'opcId'+ secondLevel, 'fl', 'required') +
        buildInputGroup('about:Blank', 'New URL', 'url'+ secondLevel, '', 'required') +
        '<br class="cl"><br>' +
        '</div>' +
    '</div>');
    return elementBody;
}
function getAddBitBar(secondLevel){
    var elementBody = $(getElementHead() +
            buildInputGroup('New OPC ID', 'OPC ID', 'opcId'+ secondLevel, 'fl', 'required') +
            '<div class="inputGroup uservisiblepanel'+ secondLevel +' fixfl"><label class="smallText">User Visible Panel</label><span class="dropdown emosbutton noicon"><span class="">User Right</span></span>' + 
        '</div>' +
    '<br class="cl"></div>');
    elementBody.find('.uservisiblepanel').append(getAuthDropDown());
    return elementBody;
}
function getAddBar(secondLevel){
    var element = getAddBitBar(secondLevel);
    element.append(getUnitInput(secondLevel));
    element.append('<div class="inputGroup"><label class="smallText">Precision Panel</label><input name="digits'+ secondLevel +'" class="text " placeholder="Digits after Comma" type="number" max="10" min="0"></div>');
    return element;
}
function getAddSetpointBar(secondLevel){  
    var element = getAddBar(secondLevel);
    element.append(buildInputGroup('New OPC Ramp ID', 'OPC Ramp ID', 'opcrampId'+ secondLevel, 'fl', 'required'));
    element.append(buildInputGroup('Visibility OPCRamp ID panel', 'Visibility OPCRamp ID Panel', 'visibleopcrampId'+ secondLevel, '', ''));
    return element;
}
//Ende Elemente
function saveJson(parent){
    var jsonName = parent.find("input[name='DiagnosisControl']").val();
//    var num = Number(parent.find("input[name='Build']").val());
    var num = parent.find("input[name='Build']").val();
//    num ++;
//    var buildNum = (num > 9) ? num : '0' + num;
//    parent.find("input[name='Build']").val(buildNum);
    jsonResults.data.windowData.Version = parent.find("input[name='Version']").val() + '-' + num;
    var jsonClone = rebuildJson(); 
    var jsonCloneString = JSON.stringify(jsonClone);
    jsonClone.HashCode = jsonCloneString.hashCode();
    $('.newjson .hashcode .newhashcode').text(', new Hashcode: ' + jsonCloneString.hashCode());
    emosWS.writeData(writeConfig + 'StatWin/' + department +'/' + jsonName + ".json", JSON.stringify(jsonClone, null, " "));
    if(Number(parent.find("input[name='Version']").val()) > 0){
        var mother = jsonName.replace('.' + parent.find("input[name='Version']").val(), '');
        jsonClone.DiagnosisControl = mother;        
        emosWS.writeData(writeConfig + 'StatWin/' + department +'/' + mother + ".json", JSON.stringify(jsonClone, null, " "));
    }
    $(parent).find('.savebutton').addClass('disabled');
}
function getElementMask(val, parents, parent, newChildID, img){
    var secondLevel = '';
    var secondLevelPageControl;
    if(parent.hasClass('secondLevel')){
        secondLevel = 'secondLevel';
        secondLevelPageControl = 'thirdLevel';
    } else if(parent.hasClass('thirdLevel')){
        secondLevel = 'thirdLevel';
    } 
     switch (val) {
         case 'Add a Line':
            var structure = {
                "Position": "L"
            };
            var temp = newElement('AddLine', parents, val, structure, newChildID, secondLevel); 
            parent.append(temp);
            if($('.Groupbox.inner.element').hasClass('ui-sortable')){
                $('.Groupbox.inner.element').sortable("enable").css('overflow', 'hidden');
            }
            $('.Groupbox.inner.element').css('overflow', 'hidden');
            validatePreviewJson();
            break;
        case 'Text and LED read':
            var structure = {
                "OnLED": "",
                "OPCID": "",
                "Position": "L",
                "TextID": "",
                "OffLED": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextLED', parents, val, structure, newChildID, secondLevel);             
            temp.append(getAddTextLED(false, secondLevel));            
            parent.append(temp);
            break;
        case 'Text and LED read/write':
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextInputLED', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextLED(true, secondLevel, true)); //
            parent.append(temp);
            break;
        case 'AddMultibuttons':
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OPCID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0",
                "writeTagWR1": "",
                "readTagRD1": "",
                "leftIcon": "",
                "func": "",
                "funcField": ""
            };
            var temp = newElement('AddMultibutton', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddMultibutton(true, secondLevel, true));
            parent.append(temp);
            
            break;
        case 'AddLED_Text_Value_Unit':
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OPCID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0",
                "showLED": "",
                "Unit": ""
            };
            var temp = newElement('AddLED_Text_Value_Unit', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddLED_Text_Value_Unit(true, secondLevel, true));  //  
            parent.append(temp);
            
            break;
        case 'AddSliderElement':
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OPCID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0",
                "Unit": "",
                "InputMin": "",
                "InputMax": "",
                "sliderValue": "",
                "step": ""
            };
            var temp = newElement('AddSliderElement', parents, val, structure, newChildID, secondLevel);
            temp.append(getSliderElement(true, secondLevel, true));
            parent.append(temp);
            
            break;  
        case 'AddGhostModus':
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OPCID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddGhostModus', parents, val, structure, newChildID, secondLevel); //AddGhostModus
            temp.append(getAddGhostModus(true, secondLevel, true)); //getAddGhostModus
            parent.append(temp);
            
            break;
        case 'AddSercosChain':
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OPCID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0",
                "NumberOfChain": ""
            };
            var temp = newElement('AddSercosChain', parents, val, structure, newChildID, secondLevel);
            temp.append(getSercosChain(true, secondLevel, true));
            parent.append(temp);
            
            break;
        
        case 'Command_Feedback_1B_1WR_1RD': 
            var structure = {
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "readTagRD1": "",
                "leftIcon": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback1B1WR1RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback1B1WR1RD(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_1WR_2RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "readTagRD1": "",
                "readTagRD2": "",
                "leftIcon": "",
                "rightIcon": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback1WR2RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback2WR2RD(true, '1wr', '2rd', secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_2WR_2RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "writeTagWR2": "",
                "readTagRD1": "",
                "readTagRD2": "",
                "leftIcon": "",
                "rightIcon": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback2WR2RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback2WR2RD(true, '2wr', '2rd', secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_3WR_4RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "writeTagWR2": "",
                "writeTagWR3": "",
                "readTagRD1": "",
                "readTagRD2": "",
                "readTagRD3": "",
                "readTagRD4": "",
                "leftIcon": "",
                "middleIcon": "",
                "rightIcon": "",
                "visibilityStop": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback3WR4RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback3WR4RD(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_3WR_2RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "writeTagWR2": "",
                "writeTagWR3": "",
                "readTagRD1": "",
                "readTagRD2": "",
                "leftIcon": "",
                "middleIcon": "",
                "rightIcon": "",
                "visibilityStop": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback3WR2RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback3WR3RD(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_3WR_3RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "writeTagWR2": "",
                "writeTagWR3": "",
                "readTagRD1": "",
                "readTagRD2": "",
                "readTagRD3": "",
                "leftIcon": "",
                "middleIcon": "",
                "rightIcon": "",
                "visibilityStop": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback3WR3RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback3WR3RD(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'SpecialPurpose_CentralStart': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "writeTagWR2": "",
                "writeTagWR3": "",
                "readTagRD1": "",
                "readTagRD2": "",
                "visibilityVisuCSOffPE": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddSpecialPurposeCentralStart', parents, val, structure, newChildID, secondLevel);
            temp.append(getSpecialPurposeCentralStart(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_2WR_1RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "writeTagWR2": "",
                "readTagRD1": "",
                "leftIcon": "",
                "rightIcon": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback2WR1RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback2WR2RD(true, '2wr', '1rd', secondLevel));
            parent.append(temp);
            
            break;
        case 'Command_Feedback_1WR_1RD': 
            var structure = {
                "OnLED": "G",
                "OPCID": "",
                "Position": "L",
                "UserRight": "0",
                "TextID": "",
                "OffLED": "O",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "writeTagWR1": "",
                "readTagRD1": "",
                "leftIcon": "",
                "rightIcon": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddCommandFeedback1WR1RD', parents, val, structure, newChildID, secondLevel);
            temp.append(getCommandFeedback2WR2RD(true, '1wr', '1rd', secondLevel));
            parent.append(temp);
            
            break;
        case 'Show_External_Content': 
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "TextID": [],
                "Text":[],
                "URLarray": [],
                "Bold": "1",
                "Border": "B",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddShowExternalContent', parents, val, structure, newChildID, secondLevel);
            temp.append(getShowExternalContent(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Controller_Element': 
            var structure = {
                "Position": "L",
                "UserRight": "0",
                "Bold": "1",
                "Border": "B",
                "VisibleAtRight": "0",
                "actualText": "",
                "actualTextID": "",
                "actualMetricalUnit": "",
                "actualImperialUnit": "",
                "actualLocalUnit": "",
                "actualDecimalDigits": "",
                "actualValueTag": "",
                "setpointText": "",
                "setpointTextID": "",
                "setpointMetricalUnit": "",
                "setpointImperialUnit": "",
                "setpointLocalUnit": "",
                "setpointDecimalDigits": "",
                "setpointRampValueTag": "",
                "visibilityOPCIDPanel": "",
                "setpointActualValueTag": "",
                "outputText": "",
                "outputTextID": "",
                "outputMetricalUnit": "",
                "outputImperialUnit": "",
                "outputLocalUnit": "",
                "outputDecimalDigits": "",
                "outputValueTag": "",
                "trendingTagArray": [],
                "trendingSetFilter": [],
                "userVisiblePanel": ""                
            };
            var temp = newElement('AddControllerElement', parents, val, structure, newChildID, secondLevel);
            temp.append(getControllerElement(true, secondLevel));
            parent.append(temp);
            
            break;    
        case 'Text Integer read':
            var structure = {
                "OPCID": "",
                "Position": "L",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "UnitLocale": "",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextInteger', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextInteger(false, false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Text Integer read/write':
            var structure = {
                "OPCID": "",
                "UserRight": "0",
                "Position": "L",
                "IntInputMin": "",
                "Text": "",
                "UnitLocale": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "IntInputMax": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextIntegerInput', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextInteger(true, false, secondLevel));
            parent.append(temp);
            
            break;   
        case 'Text Real read':
            var structure = {
                "OPCID": "",
                "Position": "L",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextReal', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextInteger(null, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Text Real read/write':
            var structure = {
                "OPCID": "",
                "UserRight": "0",
                "RealInputMax": "",
                "Position": "L",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "RealInputMin": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextRealInput', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextInteger(true, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'String read':
            var structure = {
                "OPCID": "",
                "Position": "R",
                "StrStart": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "StrLen": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddString', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddString(false, secondLevel));
            parent.append(temp);
            
            break;
        case 'String read/write':
            var structure = {
                "OPCID": "",
                "UserRight": "0",
                "Position": "R",
                "StrStart": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "StrLen": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddStringInput', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddString(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Text Byte read': 
            var structure = {
                "OPCID": "",
                "Position": "R",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextByte', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextByte(false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Text Byte read/write':
            var structure = {
                "OPCID": "",
                "UserRight": "0",
                "ByteInputMin": "0",
                "Position": "R",
                "ByteInputMax": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextByteInput', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextByte(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Double Text':
            var structure = {
                "TextID": "",
                "Text": "",
                "Text2": "",
                "Bold": "2",
                "Bold2": "2",
                "VisibleOPCID": "",
                "TextID2": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddDoubleTextLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddDoubleText(secondLevel));
            parent.append(temp);
            
            break; 
        case 'Long Text LED integer read':
            var structure = {
                "OnLED": "",
                "OPCID": "",
                "OffLED": "",
                "Text": "",
                "UnitLocale": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Bold": "1",
                "Border": "B",
                "LEDOPCID": "",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextLEDIntegerLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextLEDInteger(false, secondLevel));
            parent.append(temp);
            
            break; 
        case 'Long Text LED integer read/write':
            var structure = {
                "OnLED": "",
                "OPCID": "",
                "UserRight": "0",
                "OffLED": "",
                "IntInputMin": "",
                "Text": "",
                "UnitLocale": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "IntInputMax": "",
                "Bold": "1",
                "Border": "B",
                "LEDOPCID": "",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextLEDIntegerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextLEDInteger(true, secondLevel));
            parent.append(temp);
            
            break;  
        case 'Long Text Integer read - Integer read':
            var structure = {
                "OPCID2": "",
                "OPCID": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "UnitLocale": "",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextIntegerIntegerLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextIntegerInteger(false, secondLevel));
            parent.append(temp);
            
            break; 
        case 'Long Text Integer read - Integer read/write':
            var structure = {
                "OPCID2": "",
                "OPCID": "",
                "UserRight": "0",
                "IntInputMin": "",
                "Text": "",
                "UnitLocale": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "IntInputMax": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextIntegerIntegerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextIntegerInteger(true, secondLevel));
            parent.append(temp);
            
            break; 
        case 'Long Text Real read - Real read':
            var structure = {
                "OPCID2": "",
                "OPCID": "",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextRealRealLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextRealRealLong(false, secondLevel));
            parent.append(temp);
            
            break; 
        case 'Long Text Real read - Real read/write':
            var structure = {
                "OPCID2": "",
                "OPCID": "",
                "UserRight": "0",
                "RealInputMax": "",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "RealInputMin": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextRealRealInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextRealRealLong(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long LED Text Real read':
            var structure = {
                "OnLED": "",
                "OPCID": "",
                "OffLED": "",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Bold": "1",
                "Border": "B",
                "LEDOPCID": "",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddLEDTextRealLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddLEDTextReal(false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long LED Text Real read/write':
            var structure = {
                "OnLED": "",
                "OPCID": "",
                "UserRight": "0",
                "RealInputMax": "",
                "OffLED": "",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "RealInputMin": "",
                "Bold": "1",
                "Border": "B",
                "LEDOPCID": "",
                "UnitImperial": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddLEDTextRealInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddLEDTextReal(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long LED Text Real read - Real read':
            var structure = {
                "OnLED": "",
                "OPCID2": "",
                "OPCID": "",
                "OffLED": "",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "LEDOPCID": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddLEDTextRealRealLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddLEDTextRealReal(false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long LED Text Real read - Real read/write':
            var structure = {
                "OnLED": "",
                "OPCID2": "",
                "OPCID": "",
                "UserRight": "0",
                "RealInputMax": "",
                "OffLED": "",
                "Text": "",
                "UnitLocale": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "RealInputMin": "",
                "Bold": "1",
                "Border": "B",
                "UnitImperial": "",
                "LEDOPCID": "",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddLEDTextRealRealInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddLEDTextRealReal(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Time read(PLC Value in ...)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextTimerLong', parents, val, structure, newChildID, secondLevel);            
            temp.append(getAddTextTimer(false, false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Time read/write(PLC Value in ...)':
            var structure = {
                "IntTimeMax": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextTimerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(true, false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Double Timer read read(PLC Value in ...)':
            var structure = {
                "OPCID2": "",
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextDoubleTimerLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddDoubleTextTimer(false, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Double Timer read read/write(PLC Value in ...)':
            var structure = {
                "IntTimeMax": "",
                "OPCID2": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextDoubleTimerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddDoubleTextTimer(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Double Timer read read/write(PLC Value in [min])':
            var structure = {
                "IntTimeMax": "",
                "OPCID2": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextDoubleTimerInputLongMin', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddDoubleTextTimerMin(true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Text Siemens Date read(Siemens Type: DATE)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemensDateLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextSiemensDate(false, secondLevel));
            parent.append(temp);
            
            break;  
        case 'Long Text Siemens Date read write(Siemens Type: DATE)':
            var structure = {
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemensDateInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextSiemensDate(true, secondLevel));
            parent.append(temp);
            
            break; 
        case 'Longe Text Operating Counter read(PLC: Integer in sec.)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextOperatingCounterLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(false, true, secondLevel));
            parent.append(temp);
            
            break;  
        case 'Longe Text Operating Counter read write(PLC: Integer in sec.)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0",
                "UserRight": "0",
                "IntTimeMin": "",
                "IntTimeMax": ""
            };
            var temp = newElement('AddTextOperatingCounterInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(true, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Text Siemens Time read(Siemens Type: TIME_OF_DAY)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemensTimeLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(false, true, secondLevel));
            parent.append(temp);
            
            break;    
        case 'Long Text Siemens Time read write(Siemens Type: TIME_OF_DAY)':
            var structure = {
                "IntTimeMax": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemensTimeInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(true, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Text Siemens Time read(Siemens Type: TIME)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemens_Time_TimerLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(false, true, secondLevel));
            parent.append(temp);
            
            break;    
        case 'Long Text Siemens Time read write(Siemens Type: TIME)':
            var structure = {
                "IntTimeMax": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemens_Time_TimerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(true, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Text Siemens Time read(Siemens Type: S5TIME)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemens_S5Time_TimerLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(false, true, secondLevel));
            parent.append(temp);
            
            break;    
        case 'Long Text Siemens Time read write(Siemens Type: S5TIME)':
            var structure = {
                "IntTimeMax": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemens_S5Time_TimerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer(true, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long Text Siemens Time read(Siemens Type: DATE_AND_TIME)':
            var structure = {
                "OPCID": "",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemens_DATE_AND_TIME_TimerLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer( false, true, secondLevel));
            parent.append(temp);
            
            break;  
        case 'Long Text Siemens Time read write(Siemens Type: DATE_AND_TIME)':
            var structure = {
                "IntTimeMax": "",
                "OPCID": "",
                "UserRight": "0",
                "TextID": "",
                "Text": "",
                "Bold": "1",
                "Border": "B",
                "VisibleOPCID": "",
                "IntTimeMin": "0",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddTextSiemens_DATE_AND_TIME_TimerInputLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddTextTimer( true, true, secondLevel));
            parent.append(temp);
            
            break;
        case 'Long String Field read':
            var structure = {
                "OPCID": "",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            
            var temp = newElement('AddStringFieldLong', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddStringField(secondLevel));
            parent.append(temp);
            
            break;    
        case 'Long String Field Comment':
            var structure = {
                "OPCID": "",
                "Border": "B",
                "VisibleOPCID": "",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddStringFieldComment', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddStringFieldComment(secondLevel));
            parent.append(temp);
            
            break;
        case 'BrowserPage':
            var structure = {
                "OPCID": "001.993",
                "URL": "https://owa.durr.com"
            };
            var temp = newElement('AddBrowserPage', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddBrowserPage(secondLevel));
            parent.append(temp);
            
            break;
        case 'BitBar':
            var structure = {
                "OPCID": "",
                "Position": "L",
                "VisibleAtRight": "0"
            };
            var temp = newElement('AddBitBar', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddBitBar(secondLevel));
            parent.append(temp);
            
            break;
        case 'Bar':
            var structure = {
                "OPCID": "",
                "Position": "R",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Text": "",
                "Bold": "1",
                "UnitLocale": "",
                "UnitImperial": ""
            };
            var temp = newElement('AddBar', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddBar(secondLevel));
            parent.append(temp);
            
            break;  
        case 'Setpoint Bar with Ramp':
            var structure = {
                "OPCID": "",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "OPCRampID": "",
                "OPCRampVisibleID": "",
                "Text": "",
                "Bold": "2",
                "UnitLocale": "",
                "UnitImperial": ""
            };
            var temp = newElement('AddSetpointRampBar', parents, val, false, newChildID, secondLevel);
            temp.append(getAddSetpointBar(secondLevel));
            parent.append(temp);
            
            break;
        case 'Setpoint Bar':
            var structure = {
                "OPCID": "",
                "Position": "L",
                "Precision": "",
                "TextID": "",
                "UnitInit": "",
                "UnitMetric": "",
                "Text": "",
                "Bold": "2",
                "UnitLocale": "",
                "UnitImperial": ""
            };
            var temp = newElement('AddSetpointBar', parents, val, structure, newChildID, secondLevel);
            temp.append(getAddBar(secondLevel));
            parent.append(temp);
            
            break; 
        case 'Add a new Tab':
            var structure = [];
            var temp = newElement('AddPageControl', parents, val, structure, newChildID, secondLevel); 
            
            if(parent.hasClass('secondLevel')){
                parents.elementnumbersecondLevel = temp[0].selfObjNum;
            } else {
                parents.elementnumber = temp[0].selfObjNum;
            }
            temp.append(getSubContenpage(parents, secondLevelPageControl));
            parent.append(temp);
            break;
    }   
    parent.find('.newElement').closest('.elementlist').prepend('<div class="prevImage"><img src="images/elements/'+ img +'.png"/></div>');
    if(parents.blocksecondLevel >= 0 || parents.blockthirdLevel >= 0){
        parent.find('.newElement').find('.inputGroup').removeClass('fl');
    }
}

function getElementEditMask(val, parent){
    var secondLevel = '';
    if(parent.hasClass('secondLevel')){
        secondLevel = 'secondLevel';
    } else if(parent.hasClass('thirdLevel')){
        secondLevel = 'thirdLevel';
    }
     switch (val) {
        case 'AddTextLED':
            parent.prepend('<div class="prevImage"><img src="images/elements/textLedRead.png"/></div>');
            parent.append(getAddTextLED(false, secondLevel));
            break;
        case 'AddTextInputLED':
            parent.prepend('<div class="prevImage"><img src="images/elements/textLedReadWrite.png"/></div>');
            parent.append(getAddTextLED(true, secondLevel, true));
            break;
        case 'AddMultibutton':
            parent.prepend('<div class="prevImage"><img src="images/elements/multibutton.png"/></div>');
            parent.append(getAddMultibutton(true, secondLevel, true));
            break;  
        case 'AddLED_Text_Value_Unit':
            parent.prepend('<div class="prevImage"><img src="images/elements/AddLED_Text_Value_Unit.png"/></div>');
            parent.append(getAddLED_Text_Value_Unit(true, secondLevel, true));
            break;
        case 'AddSliderElement': 
            parent.prepend('<div class="prevImage"><img src="images/elements/sliderElement.png"/></div>');
            parent.append(getSliderElement(true, secondLevel, true));
            break;    
        case 'AddGhostModus': 
            parent.prepend('<div class="prevImage"><img src="images/elements/AddGhostModus.png"/></div>');
            parent.append(getAddGhostModus(true, secondLevel, true));
            break;    
        case 'AddCommandFeedback1B1WR1RD':
            parent.prepend('<div class="prevImage"><img src="images/elements/Command_Feedback_1B_1WR_1RD.png"/></div>');
            parent.append(getCommandFeedback1B1WR1RD(true, secondLevel));
            break;
        case 'AddCommandFeedback1WR2RD':
            parent.prepend('<div class="prevImage"><img src="images/elements/Command_Feedback_1WR_2RD.png"/></div>');
            parent.append(getCommandFeedback2WR2RD(true, '1wr', '2rd', secondLevel));
            break;
        case 'AddCommandFeedback2WR2RD': 
            parent.prepend('<div class="prevImage"><img src="images/elements/Command_Feedback_2WR_2RD.png"/></div>');
            parent.append(getCommandFeedback2WR2RD(true, '2wr', '2rd', secondLevel));
            break;
        case 'AddCommandFeedback2WR1RD': 
            parent.prepend('<div class="prevImage"><img src="images/elements/Command_Feedback_2WR_1RD.png"/></div>');
            parent.append(getCommandFeedback2WR2RD(true, '2wr', '1rd', secondLevel));
            break;
        case 'AddCommandFeedback1WR1RD': 
            parent.prepend('<div class="prevImage"><img src="images/elements/Command_Feedback_1WR_1RD.png"/></div>');
            parent.append(getCommandFeedback2WR2RD(true, '1wr', '1rd', secondLevel));
            break; 
        case 'AddCommandFeedback3WR4RD': 
            parent.prepend('<div class="prevImage"><img src="images/elements/Command_Feedback_3WR_4RD.png"/></div>');
            parent.append(getCommandFeedback3WR4RD(true, secondLevel));
            break; 
        case 'AddSpecialPurposeCentralStart': 
            parent.prepend('<div class="prevImage"><img src="images/elements/SpecialPurpose_CentralStart.png"/></div>');
            parent.append(getSpecialPurposeCentralStart(true, secondLevel));
            break; 
        case 'AddShowExternalContent': 
            parent.prepend('<div class="prevImage"><img src="images/elements/ShowExternalContent.png"/></div>');
            parent.append(getShowExternalContent(true, secondLevel));
            break;  
        case 'AddControllerElement': 
            parent.prepend('<div class="prevImage"><img src="images/elements/ControllerElement.png"/></div>');
            parent.append(getControllerElement(true, secondLevel));
            break; 
        case 'AddTextInteger':
            parent.prepend('<div class="prevImage"><img src="images/elements/textIntegerRead.png"/></div>');
            parent.append(getAddTextInteger(false, false, secondLevel));
            break;
        case 'AddTextIntegerInput':
            parent.prepend('<div class="prevImage"><img src="images/elements/textIntegerReadWrite.png"/></div>');
            parent.append(getAddTextInteger(true, false, secondLevel));
            break;   
        case 'AddTextReal':
            parent.prepend('<div class="prevImage"><img src="images/elements/textRealRead.png"/></div>');
            parent.append(getAddTextInteger(null, true, secondLevel));
            break;
        case 'AddTextRealInput':
            parent.prepend('<div class="prevImage"><img src="images/elements/textRealReadWrite.png"/></div>');
            parent.append(getAddTextInteger(true, true, secondLevel));
            break;
        case 'AddString':
            parent.prepend('<div class="prevImage"><img src="images/elements/stringRead.png"/></div>');
            parent.append(getAddString(false, secondLevel));
            break;
        case 'AddStringInput':
            parent.prepend('<div class="prevImage"><img src="images/elements/stringReadWrite.png"/></div>');
            parent.append(getAddString(true, secondLevel));
            break;
        case 'AddTextByte':
            parent.prepend('<div class="prevImage"><img src="images/elements/textIntegerRead.png"/></div>');
            parent.append(getAddTextByte(false, secondLevel));
            break;
        case 'AddTextByteInput':
            parent.prepend('<div class="prevImage"><img src="images/elements/textIntegerReadWrite.png"/></div>');
            parent.append(getAddTextByte(true, secondLevel));
            break;
        case 'AddDoubleTextLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/textIntegerRead.png"/></div>');
            parent.append(getAddDoubleText(secondLevel));
            break; 
        case 'AddTextLEDIntegerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextLedIntergerRead.png"/></div>');
            parent.append(getAddTextLEDInteger(false, secondLevel));
            break; 
        case 'AddTextLEDIntegerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextLedIntergerReadWrite.png"/></div>');
            parent.append(getAddTextLEDInteger(true, secondLevel));
            break;  
        case 'AddTextIntegerIntegerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextIntReadIntRead.png"/></div>');
            parent.append(getAddTextIntegerInteger(false, secondLevel));
            break; 
        case 'AddTextIntegerIntegerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextIntReadIntReadWrite.png"/></div>');
            parent.append(getAddTextIntegerInteger(true, secondLevel));
            break; 
        case 'AddTextRealRealLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextRealReadRealRead.png"/></div>');
            parent.append(getAddTextRealRealLong(false, secondLevel));
            break; 
        case 'AddTextRealRealInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextRealReadRealReadWrite.png"/></div>');
            parent.append(getAddTextRealRealLong(true, secondLevel));
            break;
        case 'AddLEDTextRealLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longLedTextRealRead.png"/></div>');
            parent.append(getAddLEDTextReal(false, secondLevel));
            break;
        case 'AddLEDTextRealInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longLedTextRealReadWrite.png"/></div>');
            parent.append(getAddLEDTextReal(true, secondLevel));
            break;
        case 'AddLEDTextRealRealLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longLedTextRealReadRealRead.png"/></div>');
            parent.append(getAddLEDTextRealReal(false, secondLevel));
            break;
        case 'AddLEDTextRealRealInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longLedTextRealReadRealReadWrite.png"/></div>');
            parent.append(getAddLEDTextRealReal(true, secondLevel));
            break;
        case 'AddTextTimerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTimeRead.png"/></div>');
            parent.append(getAddTextTimer(false, false, secondLevel));
            break;
        case 'AddTextTimerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTimeReadWrite.png"/></div>');
            parent.append(getAddTextTimer(true, false, secondLevel));
            break;
        case 'AddTextDoubleTimerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longDoubleTimeReadRead.png"/></div>');
            parent.append(getAddDoubleTextTimer(false, secondLevel));
            break;
        case 'AddTextDoubleTimerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longDoubleTimeReadReadWrite.png"/></div>');
            parent.append(getAddDoubleTextTimer(true, secondLevel));
            break;
        case 'AddTextDoubleTimerInputLongMin':
            parent.prepend('<div class="prevImage"><img src="images/elements/longDoubleTimeReadReadWriteMin.png"/></div>');
            parent.append(getAddDoubleTextTimerMin(true, secondLevel));
            break;
        case 'AddTextSiemensDateLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensDateRead.png"/></div>');
            parent.append(getAddTextSiemensDate(false, secondLevel));
            break;  
        case 'AddTextSiemensDateInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensDateReadWrite.png"/></div>');
            parent.append(getAddTextSiemensDate(true, secondLevel));
            break; 
        case 'AddTextOperatingCounterLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextOperatingCounterRead.png"/></div>');
            parent.append(getAddTextTimer(false, true, secondLevel));
            break;  
        case 'AddTextOperatingCounterInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextOperatingCounterReadWrite.png"/></div>');
            parent.append(getAddTextTimer(true, true, secondLevel));
            break;
        case 'AddTextSiemensTimeLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeRead.png"/></div>');
            parent.append(getAddTextTimer(false, true, secondLevel));
            break;    
        case 'AddTextSiemensTimeInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadWrite.png"/></div>');
            parent.append(getAddTextTimer(true, true, secondLevel));
            break;
        case 'AddTextSiemens_Time_TimerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadTime.png"/></div>');
            parent.append(getAddTextTimer(false, true, secondLevel));
            break;    
        case 'AddTextSiemens_Time_TimerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadWriteTime.png"/></div>');
            parent.append(getAddTextTimer(true, true, secondLevel));
            break;
        case 'AddTextSiemens_S5Time_TimerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadS5Time.png"/></div>');
            parent.append(getAddTextTimer(false, true, secondLevel));
            break;    
        case 'AddTextSiemens_S5Time_TimerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadWriteS5Time.png"/></div>');
            parent.append(getAddTextTimer(true, true, secondLevel));
            break;
        case 'AddTextSiemens_DATE_AND_TIME_TimerLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadDateTime.png"/></div>');
            parent.append(getAddTextTimer(false, true, secondLevel));
            break;  
        case 'AddTextSiemens_DATE_AND_TIME_TimerInputLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longTextSiemensTimeReadWriteDateTime.png"/></div>');
            parent.append(getAddTextTimer(true, true, secondLevel));
            break;
        case 'AddStringFieldLong':
            parent.prepend('<div class="prevImage"><img src="images/elements/longStringFieldRead.png"/></div>');
            parent.append(getAddStringField(secondLevel));
            break;  
        case 'AddStringFieldComment':
            parent.prepend('<div class="prevImage"><img src="images/elements/longStringFieldComment.png"/></div>');
            parent.append(getAddStringFieldComment(secondLevel));
            break;
        case 'AddBrowserPage':
            parent.prepend('<div class="prevImage"><img src="images/elements/browserPage.png"/></div>');
            parent.append(getAddBrowserPage(secondLevel));
            break;   
        case 'AddBitBar':
            parent.prepend('<div class="prevImage"><img src="images/elements/bitBar.png"/></div>');
            parent.append(getAddBitBar(secondLevel));
            break;
        case 'AddBar':
            parent.prepend('<div class="prevImage"><img src="images/elements/bar.png"/></div>');
            parent.append(getAddBar(secondLevel));
            break;  
        case 'AddSetpointRampBar':
            parent.prepend('<div class="prevImage"><img src="images/elements/setPointBarRamp.png"/></div>');
            parent.append(getAddSetpointBar(secondLevel));
            break;
        case 'AddSetpointBar':
            parent.prepend('<div class="prevImage"><img src="images/elements/setPointBar.png"/></div>');
            parent.append(getAddBar(secondLevel));
            break;  
        case 'AddPageControl':
            parent.prepend('<div class="prevImage"><img src="images/elements/tabinsubtab.png"/></div>');
            parent.append(editPageControl(parent, 'PageControl'));
//            parent.append(getSubContenpage());
            break;
    }
    if(parent.hasClass('secondLevel') || parent.hasClass('thirdLevel')){
        parent.find('.inputGroup').removeClass('fl');
    }
    
}
function downloadJson(filename){
    var newData = null;
    var blob = null;
    $.ajax({ 
        url:  configURL + 'StatWin/' + department + '/' + filename,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data) {
            newData = JSON.stringify(data);
            var tmp = data.data.windowData.Version.split('-');
            var newFilename = filename + '.' + tmp[1];
            var saveFile = function(name, type, data) {
                if (data !== null && window.navigator.msSaveBlob){
                    return window.navigator.msSaveBlob(new Blob([newData], {type: type}), name);
                }
                var a = $("<a style='display: none;'/>");
                var url = window.URL.createObjectURL(new Blob([data], {type: type}));
                a.attr("href", url);
                a.attr("download", name);
                $("body").append(a);
                a[0].click();
                window.URL.revokeObjectURL(url);
                a.remove();
            };
            saveFile(newFilename, 'data:attachment/text', newData);
        },
        error: function (d) {
            console.log(d);                    
        }
    });
    
}

function getToolbox(blockOrElement, self){
    $.ajax({
        url: configURL + 'toolbox.json?nocache=' + (new Date()).getTime(),
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data) {
            var toolbox = data;
            $('<ul/>', {
                "class": "overlay toolbox",
                "mouseleave": function(){
                    $('.toolbox').remove();
                }
            }).appendTo($(self)).show();
            $.each(data, function (key, val) {
                $.each(val, function (key1, val1) {
                    var newVal = JSON.parse(JSON.stringify(val1));
                    if(key1 === blockOrElement){
                        var myText = '<span class="toolboxtext">' + val1[0].comment + '</span>';
                        var closeButton = $("<span/>", {
                            "class": "emosbutton smalldelete",
                            "data-num": key,
                            "click": function(event){
                                delete data[$(this).attr('data-num')];
                                $(this).parent().remove();
                                var i = 0;
                                var newData = {};
                                $.each(data, function(key, val){
                                    newData[i] = val;
                                    i++;
                                });
                                emosWS.writeData(writeConfig + "toolbox.json", JSON.stringify(newData));
                                event.stopPropagation();
                            }
                        });
                        $("<li/>", {
                            "class": "breadoverlay_li",
                            "html": myText,
                            "click": function () {
                                delete newVal[0];
                                newVal = newVal.filter(function(valx){ return valx; });
                                if(blockOrElement === 'block'){
                                    getCopyBlock(self, newVal);
                                } else {
                                    getCopyElement(self, newVal[0], true);
                                }
                                
                            }
                        }).append(closeButton).appendTo($('.toolbox'));
                    }
                });
            });
            
        },
        error: function (e) {
            console.log(e);
        }
    });
    
}
function getDialogComment(blockOrElement){
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Description</h4>");
    $('#dialog').append("<span style='line-height:22px;' class='dialogtext'>Please descripe this Tool </span>");
    $('#dialog').append('<input name="ToolComment" class="text" placeholder="Tool description" maxlength="40" size="40" required="" pattern=".{3,}">');
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                var toolcomment = $("input[name='ToolComment']").val();
                $.ajax({
                url: configURL + 'toolbox.json?nocache=' + (new Date()).getTime(),
                type: 'get',
                dataType: 'json',
                async: false,
                success: function (data) {
                    var toolbox = {};
                    var i = 0;
                    $.each(data, function(key, val){
                        toolbox[i] = val;
                        i++;
                    });
                    var myObj = {}; 
                    if(blockOrElement.hasClass('blocklist')){
                        myObj.block = [];
                        myObj.block.push({'comment': toolcomment});
                        myObj.block.push({'AddText': blockOrElement[0].self});
                        $.each(blockOrElement[0].myChilds, function(key, val){
                            $.each(val, function(key1, val1){
                                myObj.block.push(val1);
                            });
                        });                        
                    } else{
                        myObj.element = [];
                        myObj.element.push({'comment': toolcomment});
                        var selftype = {};
                        selftype [blockOrElement[0].selftype] = blockOrElement[0].self;
                        myObj.element.push(selftype);
                    }
                    toolbox[Object.keys(toolbox).length] = myObj;
                    emosWS.writeData(writeConfig + "toolbox.json", JSON.stringify(toolbox, null, " "));                    
                },
                error: function (e) {
                    var toolbox = {};                    
                    var myObj = {}; 
                    if(blockOrElement.hasClass('blocklist')){
                        myObj.block = [];
                        myObj.block.push({'comment': toolcomment});
                        myObj.block.push({'AddText': blockOrElement[0].self});
                        $.each(blockOrElement[0].myChilds, function(key, val){
                            $.each(val, function(key1, val1){
                                myObj.block.push(val1);
                            });
                        });                        
                    } else{
                        myObj.element = [];
                        myObj.element.push({'comment': toolcomment});
                        var selftype = {};
                        selftype [blockOrElement[0].selftype] = blockOrElement[0].self;
                        myObj.element.push(selftype);
                    }
                    toolbox[Object.keys(toolbox).length] = myObj;
                    emosWS.writeData(writeConfig + "toolbox.json", JSON.stringify(toolbox, null, " ")); 
                }
            });
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
function getSearchOverlay(self){
    if($('.searchOverlay').length === 0){
        $("<div/>", {
            "class": "searchOverlay"
        }).insertAfter(self);
        $('.searchOverlay').append('<span class="pagerHead">JSON GOOGOO</span>');
        $('.searchOverlay').append(buildInputGroup('Search for....then hit ENTER to start search', 'Search', 'search', '', ''));
    } else {
        $('.searchOverlay').show();
    }
}
function startJsonSearch(searchfield){
    $('.searchResult').remove();
    var phrase = searchfield.val();    
    var jsonPath = [];
    var traverse = function(jsonKey, jsonObj) {
        var i = 0;
        if( typeof jsonObj === 'object' || typeof jsonObj === 'array') {
            $.each(jsonObj, function (key, val){
                i++;
                if( typeof val === 'object' || typeof val === 'array') {
                    jsonPath.push(key);
                    traverse(key, val);
                } else {
//                    if(val.toString().indexOf(phrase) !== -1){
                    var re = new RegExp(phrase,"gi");
                    if(val.toString().match(re)){    
                        $("<div/>", {
                            "class": "searchResult",
                            "click": function(){
                                var myJsonPath = JSON.parse($(this)[0].jsonpath);
                                var dataName = jsonResults.data.windowData.PageControl[myJsonPath[0]][myJsonPath[1]].Text;
                                var myParent = $(this).closest('.newjson').find('.tabslist[data-name='+ dataName +']');
                                if($('.newapp.newTab').length > 0){
                                    $('.newapp.newTab').remove();
                                }
                                editTab(myParent, dataName);
                                
                                var dataName = jsonResults.data.windowData.PageControl[myJsonPath[0]][myJsonPath[1]][myJsonPath[2]][myJsonPath[3]][myJsonPath[4]].Text;
                                var myParent = $(this).closest('.newjson').find('.contentpagelist[data-name='+ dataName +']');
                                editContentPage(myParent, dataName);
                                var actBlock;
                                var childID;
                                var myElementlist = myParent;
                                if(myJsonPath.length > 6){
                                    $.each(myParent.find('.blocklist'), function (key, val){
                                        if(jQuery.inArray(myJsonPath[5], $(val)[0].myChildsIDs) !== -1){ 
                                            editBlock($(this), '');
                                            actBlock = $(this);
                                            childID = jQuery.inArray(myJsonPath[5], $(val)[0].myChildsIDs);
                                            myElementlist = myParent.find('.blocklist .elementlist')[childID];
                                        } else if(myJsonPath[5] === $(val)[0].selfObjNum){
                                            editBlock($(this), '');
                                            actBlock = $(this);
                                            childID = jQuery.inArray(myJsonPath[5], $(val)[0].myChildsIDs);
                                            myElementlist = actBlock;
                                        }
                                    });
                                }
                                
                                var scrollTo = $(myElementlist).offset().top - 50 - $('.configcenter.full').offset().top;
                                $('.configcenter.full').stop().animate({
                                    scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                                }, {
                                    complete: function () {
                                            showScroll($('.configcenter.full'));                
                                        }
                                });
                                editElement($(myElementlist));
                                if(myJsonPath.length > 7){
                                    var dataNameSCP = jsonResults.data.windowData.PageControl[myJsonPath[0]][myJsonPath[1]][myJsonPath[2]][myJsonPath[3]][myJsonPath[4]][myJsonPath[5]][myJsonPath[6]][myJsonPath[7]][myJsonPath[8]].Text;
                                    var myParentSCP = actBlock.find('.subcontentpagelist[data-name='+ dataNameSCP +']');
                                    editSubContentpage(myParentSCP, dataNameSCP);                                    
                                    var actBlockSL;
                                    var childIDSL;
                                    var myElementlistSL = myParentSCP;
                                    if(myJsonPath.length > 10){
                                        $.each(myParent.find('.blocklist.secondLevel'), function (key, val){
                                            if(jQuery.inArray(myJsonPath[9], $(val)[0].myChildsIDs) !== -1){ 
                                                editBlock($(this), 'secondLevel');
                                                actBlockSL = $(this);
                                                childIDSL = jQuery.inArray(myJsonPath[9], $(val)[0].myChildsIDs);
                                                myElementlistSL = myParent.find('.blocklist.secondLevel .elementlist')[childIDSL];
                                            } else if(myJsonPath[9] === $(val)[0].selfObjNum){
                                                editBlock($(this), 'secondLevel');
                                                actBlockSL = $(this);
                                                childIDSL = jQuery.inArray(myJsonPath[9], $(val)[0].myChildsIDs);
                                                myElementlistSL = actBlockSL;
                                            }
                                        });
                                    }
                                    var scrollTo = $(myElementlistSL).offset().top - 50 - $('.configcenter.full').offset().top;
                                    $('.configcenter.full').stop().animate({
                                        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                                    }, {
                                        complete: function () {
                                                showScroll($('.configcenter.full'));                
                                            }
                                    });
                                    editElement($(myElementlistSL));
                                } 
                                if(myJsonPath.length > 11) {
                                    var dataNameTHCP = jsonResults.data.windowData.PageControl[myJsonPath[0]][myJsonPath[1]][myJsonPath[2]][myJsonPath[3]][myJsonPath[4]][myJsonPath[5]][myJsonPath[6]][myJsonPath[7]][myJsonPath[8]][myJsonPath[9]][myJsonPath[10]][myJsonPath[11]][myJsonPath[12]].Text;
                                    var myParentTHCP = actBlockSL.find('.subcontentpagelist.thirdLevel[data-name='+ dataNameTHCP +']');
                                    editSubContentpage(myParentTHCP, dataNameTHCP);
                                    var actBlockTHL;
                                    var childIDTHL;
                                    var myElementlistTHL = myParentTHCP;
                                    if(myJsonPath.length > 14){
                                        $.each(myParent.find('.blocklist.thirdLevel'), function (key, val){
                                            if(jQuery.inArray(myJsonPath[13], $(val)[0].myChildsIDs) !== -1){ 
                                                editBlock($(this), 'thirdLevel');
                                                actBlockTHL = $(this);
                                                childIDTHL = jQuery.inArray(myJsonPath[13], $(val)[0].myChildsIDs);
                                                myElementlistTHL = myParent.find('.blocklist.thirdLevel .elementlist.thirdLevel')[childIDTHL];
                                            } else if(myJsonPath[13] === $(val)[0].selfObjNum){
                                                editBlock($(this), 'thirdLevel');
                                                actBlockTHL = $(this);
                                                childID = jQuery.inArray(myJsonPath[13], $(val)[0].myChildsIDs);
                                                myElementlistTHL = actBlockTHL;
                                            }
                                        });
                                    }
                                    var scrollTo = $(myElementlistTHL).offset().top - 50 - $('.configcenter.full').offset().top;
                                    $('.configcenter.full').stop().animate({
                                        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                                    }, {
                                        complete: function () {
                                                showScroll($('.configcenter.full'));                
                                            }
                                    });
                                    editElement($(myElementlistTHL));
                                } 
                                $('.searchOverlay').hide();
                            }
                        }).appendTo($('.searchOverlay')).append(jsonKey + ': <span>' + key + ': ' + jsonObj[key] + '</span>')[0]['jsonpath'] = JSON.stringify(jsonPath);                        
                    }                    
                } 
            });
            jsonPath.pop();
        } else {
            console.log('was ist hier?')
        }
    }; 

    $.each(jsonResults.data.windowData.PageControl, function (key, val) {
        jsonPath = [];
        jsonPath.push(key);
        traverse(key, val);
    });
    if($('.linktext').length === 0){
         $("<div/>", {
            "class": "linktext",
            "text": "clear results",
            "click": function(){
                $('.searchResult').remove();
                searchfield.val('');
                $(this).remove();
            }
        }).appendTo($('.searchOverlay'));
    }    
}
Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};
String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; 
  }
  return hash;
};

//click Anweisungen
$('#center').on('click', '.preferences.full .newJson', function(){
    $(".configcenter").prepend(newJson());
    $('.filterbuttonholder').hide();
//    if($('#editorhelp').length === 0) {
//        $(".configcenter").append('<div id="editorhelp"></div>');
//        $('#center .configcenter #editorhelp').load('../config/StatWin/html/editorHelp.htm');
//    }    
    $('.configcenter.full').stop().animate({
        scrollTop: 0
    }, {
        complete: function () {
            showScroll($('.configcenter.full'));    
            $('.Groupbox.applist').hide();
        }
    });
//    showScroll($('.configcenter.full'));
//    $('.Groupbox.applist').hide();
    $('.jsonlist:not(.active)').remove();
});
$('#center').on('click', '.configcenter .Groupbox.jsonlist .editjsonlist.download', function(){
    if($(this).parent().find('.versions').length > 0) {
        $(this).parent().find('.versions').show();
        return;
    }     
     
    if($(this).parent().parent().hasClass('versions')){
        $(this).parent().parent().hide();
    }
    var filename = $(this).attr('data-name');
    downloadJson(filename);
});
$('#center').on('click', '.configcenter .Groupbox.jsonlist .dropdownlist.versions li .emosbutton', function(){
    setTimeout(function () {         
        $('.Groupbox.jsonlist .dropdownlist.versions li').removeClass('active');
    }, 400);
    
});
$('#center').on('click', '.configcenter .Groupbox.jsonlist .editjsonlist.buttonEdit, .configcenter .Groupbox.jsonlist .editjsonlist.copyTab', function(){
    if($(this).parent().find('.versions').length > 0) {
        $(this).parent().find('.versions').show();
        return;
    }  
    $('.filterbuttonholder').hide();
    var parent = $(this).closest('div.jsonlist');
    parent.addClass('active');
    if($(this).parent().parent().hasClass('versions')){
        $(this).parent().parent().hide();
    }
    if($(this).closest('.configcenter.full').find('.Groupbox.newjson').length > 0){
        $('.Groupbox.newjson').remove();
        $('.Groupbox.jsonlist').show();
    }
    $(this).addClass('disabled');
    jsonFile = $(this).attr('data-name');
    

    if($(this).hasClass('copyTab')){
        $('.configcenter.full').stop().animate({
            scrollTop: 10
        }, {
            complete: function () {
                    showScroll($('.configcenter.full'));                
                }
        });
        editJson(parent.parent(), false, true);
        var jsonName = parent.parent().find("input[name='DiagnosisControl']").val();
        var versionNum;
        
        var newVersion;
        
        if ($(this).closest('.dropdownlist.versions').length > 0 && $(this).closest('.dropdownlist')[0].versionlist.length > 0) {
            var tempArr = [];
            $.each($(this).closest('.dropdownlist')[0].versionlist, function(key, val){
                var tmp = val.split(".");
                if(!isNaN(tmp[1])){
                    tempArr.push(tmp[1]);
                }                
            });
            tempArr.sort();
            var highest = tempArr.pop();
            versionNum = Number(highest) + 1;
        } else {
            versionNum = 0;
        }
        var newNum = (versionNum > 9) ? versionNum : '0' + versionNum;
        if(jsonName.indexOf(parent.parent().find("input[name='Version']").val()) !== -1){
            newVersion = jsonName.replace('.' + parent.parent().find("input[name='Version']").val(), '.' + newNum);
        } else {
            newVersion = jsonName + '.' + newNum;
        }
        
        
        parent.parent().find("input[name='DiagnosisControl']").val(newVersion);
        parent.parent().find("input[name='Version']").val(newNum);
        parent.parent().find("input[name='Build']").val('00');
        parent.parent().find('.buttonEdit').addClass('disabled');
    } else {
        var scrollTo = $(this).closest('div.Groupbox.jsonlist').offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: 10
        }, {
            complete: function () {
                    showScroll($('.configcenter.full'));                
                }
        });
        editJson(parent, false);
    }
    $('.jsonlist:not(.active)').remove();
//    if($('#editorhelp').length === 0) {
//        $(".configcenter").append('<div id="editorhelp"></div>');
//        $('#center .configcenter #editorhelp').load('../config/StatWin/html/editorHelp.htm');
//    }
    
   
    
});
//$('#center').on('click', '.preferences.full .addLedElement', function(){
//    if($(this).closest('.Groupbox.newjson').find('.newHeadLED').length > 0){
//        $(this).closest('.Groupbox.newjson').find('.newHeadLED').remove();
//    }
//    if($(this).closest('.newjson').find('input:required:invalid').length > 0){ 
//        $(this).closest('.newjson').find('input:required:invalid').addClass('error');
//        var scrollTo = $(this).closest('.newjson').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
//        $('.configcenter.full').stop().animate({
//            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//        });
//        return;
//    } else {
//        $('.editheadLED.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
//        var scrollTo = $(this).closest('.newjson').find('.inner.headLED').offset().top - 20 - $('.configcenter.full').offset().top;
//        $('.configcenter.full').stop().animate({
//            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//        });
//        $(this).parent().append(newHeadLED(true));
//        showScroll($('.configcenter.full'));
////        location.href = '#tabHelp';
//    }
//});
$('#center').on('click', '.preferences.full .addTab', function(){
    if($(this).closest('.Groupbox.newjson').find('.newTab').length > 0){
        $(this).closest('.Groupbox.newjson').find('.newTab').remove();
    }
    
    if($(this).closest('.Groupbox.newjson').find('.newHeadLED').length > 0){
        $(this).closest('.Groupbox.newjson').find('.newHeadLED').remove();
        $('.editheadLED.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    }
    if($(this).closest('.newjson').find('input:required:invalid').length > 0){ 
        $(this).closest('.newjson').find('input:required:invalid').addClass('error');
        var scrollTo = $(this).closest('.newjson').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        return;
    } else {
        if($(this).closest('.newjson').find('.tabslist').length >= 4)
            return;
        $('.edittabslist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
        var scrollTo = $(this).closest('.newjson').find('.inner.tabs').offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        $(this).parent().find('.inner.tabs').append(newTab(true));
        showScroll($('.configcenter.full'));
        $('.tabslist').attr('draggable', 'False');
//        location.href = '#tabHelp';
    }
});
$('#center').on('click', '.preferences.full .addContentpage', function(){
    if($(this).closest('.Groupbox.newjson').find('.newContentpage').length > 0){
        $(this).closest('.Groupbox.newjson').find('.newContentpage').remove();
    }
    if($(this).closest('.newjson').find('input:required:invalid').length > 0){ 
        $(this).closest('.newjson').find('input:required:invalid').addClass('error');
        var scrollTo = $(this).closest('.newjson').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        return;
    } else {
        $('.editcontentpagelist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
        var scrollTo = $(this).closest('.newjson').find('.inner.contentpage').offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });  
        var myObjPosition = $(this).closest('.tabslist')[0].myObjId;
        $(this).parent().find('.inner.contentpage').append(newContentPage(myObjPosition.toString(), false, $(this).closest('.tabslist').attr('data-name'), false, $(this)));
        $('.contentpagelist').attr('draggable', 'False');
        showScroll($('.configcenter.full'));
//        location.href = '#contentpageHelp';
    }
});

$('#center').on('click', '.preferences.full .addBlock', function(){    
    if($(this).hasClass('thirdLevel') && $(this).closest('.newSubContentpage').length > 0){
        if($(this).closest('.newSubContentpage').find('.newBlockthirdLevel').length > 0){
            $(this).closest('.newSubContentpage').find('.newBlockthirdLevel').remove();
        }
    } else if($(this).hasClass('secondLevel') && $(this).closest('.newSubContentpage').length > 0){
        if($(this).closest('.newSubContentpage').find('.newBlocksecondLevel').length > 0){
            $(this).closest('.newSubContentpage').find('.newBlocksecondLevel').remove();
        }
    } else {
        if($(this).closest('.Groupbox.newjson').find('.newBlock').length > 0){
            $(this).closest('.Groupbox.newjson').find('.newBlock').remove();
        }
    }
    if($(this).closest('.newjson').find('input:required:invalid').length > 0){
        $(this).closest('.newjson').find('input:required:invalid').addClass('error');
        var scrollTo = $(this).closest('.newjson').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        return;
    } else {
        var scrollTo;
        var placeIDs = {};
        var secondLevel = '';
        placeIDs.tabID = $(this).closest('.tabslist')[0].myObjId;
        placeIDs.contentpage = $(this).closest('.contentpagelist')[0].myObjId;
        if($(this).hasClass('secondLevel')){
            secondLevel = 'secondLevel';
            scrollTo = $(this).closest('.elementlist').find('.innerbox.blocksecondLevel').offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
            placeIDs.subTab = $(this).closest('.elementlist')[0].selfObjNum;
            placeIDs.subcontentpage = $(this).closest('.subcontentpagelist')[0].myObjId;
            $(this).parent().find('.inner.blocksecondLevel').append(newBlock(placeIDs, 'secondLevel'));
        } else if($(this).hasClass('thirdLevel')){
            secondLevel = 'thirdLevel';
            scrollTo = $(this).closest('.elementlist').find('.innerbox.blockthirdLevel').offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
            placeIDs.subTab = $(this).closest('.elementlist:not(.secondLevel)')[0].selfObjNum;
            placeIDs.subcontentpage = $(this).closest('.subcontentpagelist:not(.thirdLevel)')[0].myObjId;
            placeIDs.subsubTab = $(this).closest('.elementlist.secondLevel ')[0].selfObjNum;
            placeIDs.subsubcontentpage = $(this).closest('.subcontentpagelist.thirdLevel')[0].myObjId;
            $(this).parent().find('.inner.blockthirdLevel').append(newBlock(placeIDs, 'thirdLevel'));
        } else {
            scrollTo = $(this).closest('.newjson').find('.innerbox.block').offset().top - 20 - $('.configcenter.full').offset().top;
            $('.configcenter.full').stop().animate({
                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
            });
            $(this).parent().find('.inner.block').append(newBlock(placeIDs));
        }
        var classLevel;
        if(!secondLevel){
            secondLevel = '';
            classLevel = '';
        } else {
            classLevel = '.' + secondLevel;
        }
        dragElements(classLevel, secondLevel);
        showScroll($('.configcenter.full'));
        $('.blocklist').attr('draggable', 'False');
//        location.href = '#blockHelp';
    }
});
$('#center').on('click', '.preferences.full .addSubContentpage', function(){
    if($(this).closest('.elementlist.secondLevel').find('.newSubContentpage').length > 0){
        $(this).closest('.elementlist.secondLevel').find('.newSubContentpage').remove();
    } else if($(this).closest('.elementlist').find('.newSubContentpage').length > 0 && !$(this).closest('.elementlist.secondLevel')){
        $(this).closest('.elementlist').find('.newSubContentpage').remove();
    }
   
    if($(this).closest('.newjson').find('input:required:invalid').length > 0){ 
        $(this).closest('.newjson').find('input:required:invalid').addClass('error');
        var scrollTo = $(this).closest('.newjson').find('input:required:invalid').first().offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        return;
    } else {
        $('.editsubcontentpagelist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
        var scrollTo = $(this).closest('.elementlist').find('.inner.subcontentpage').offset().top - 20 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });  
        
        var parents = {};
        parents.tabID = $(this).closest('.tabslist')[0].myObjId;
        parents.contentpage = $(this).closest('.contentpagelist')[0].myObjId;
        parents.block = $(this).closest('.newBlock').closest('.blocklist')[0].selfObjNum;
        parents.elementnumber = $(this).closest('.elementlist:not(.secondLevel)')[0].selfObjNum;
        var actLevel = false;
        if($(this).next().hasClass('thirdLevel')){
            actLevel = 'thirdLevel';
            parents.subTab = $(this).closest('.elementlist.secondLevel')[0].selfObjNum;
            parents.subcontentpage = $(this).closest('.subcontentpagelist')[0].myObjId;
            parents.elementnumbersecondLevel = $(this).closest('.elementlist.secondLevel')[0].selfObjNum;
        }
        
        $(this).parent().find('.inner.subcontentpage').append(getSubContenpage(parents, actLevel));
        $('.contentpagelist').attr('draggable', 'False');
        showScroll($('.configcenter.full'));
//        location.href = '#contentpageHelp';
    }
});
//$('#center').on('click', '.configcenter .Groupbox.ledlist .editheadLED.buttonEdit', function(){
//    $('.editheadLED.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
//    $(this).removeClass('buttonEdit').addClass('buttonClose');
//    if($(this).closest('.Groupbox.newjson').find('.newHeadLED').length > 0){
//        $(this).closest('.Groupbox.newjson').find('.newHeadLED').remove();
//    }
//    var scrollTo = $(this).closest('.Groupbox.ledlist').offset().top - 50 - $('.configcenter.full').offset().top;
//    var dataFile = $(this).attr('data-num');
//    
//    $('.configcenter.full').stop().animate({
//        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//    }, {
//        complete: function () {
//                showScroll($('.configcenter.full'));                
//            }
//    });
//    editHeadLED($(this).parent(), dataFile);
////    location.href = '#tabHelp';
//});
//$('#center').on('click', '.configcenter .Groupbox.ledlist .editheadLED.delete', function(){
//    var dataNum = $(this).attr('data-num');
//    var me = $(this);
//    $("<div/>", {
//        "class": 'dialogoverlay',
//        "id": 'dialog'
//    }).appendTo('#precenter');
//    $('#dialog').empty();
//    $('#dialog').append("<h4>Delete</h4>");    
//    $('#dialog').dialog({
//        resizable: false,
//        dialogClass: "dialogCorpus ",
//        height: "auto",
//        width: 400,
//        modal: true,
//        title: "Reset1",
//        buttons: {
//            "": function () {
//                delete jsonResults.data.windowData.Head[dataNum];
//                me.closest('.ledlist').remove(); 
//                $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
//                $(this).dialog("destroy");
//                $('#dialog').remove();
//                validatePreviewJson(true);
//            },
//            " ": function () {
//                $(this).dialog("destroy");
//                $('#dialog').remove();
//            }
//        }
//    }).siblings('div.ui-dialog-titlebar').remove(); 
//    $($('.dialogCorpus button')[0]).attr('class', "emosbutton delete");
//    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
//});
$('#center').on('click', '.configcenter .Groupbox.tabslist .edittabslist.buttonEdit', function(){
    $('.edittabslist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    $(this).removeClass('buttonEdit').addClass('buttonClose');
    if($(this).closest('.Groupbox.newjson').find('.newTab').length > 0){
        $(this).closest('.Groupbox.newjson').find('.newTab').remove();
    }
    
    if($(this).closest('.Groupbox.newjson').find('.newHeadLED').length > 0){
        validatePreviewJson(true);
        $(this).closest('.Groupbox.newjson').find('.newHeadLED').remove();
        $('.editheadLED.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    }
    var scrollTo = $(this).closest('.Groupbox.tabslist').offset().top - 50 - $('.configcenter.full').offset().top;
    var dataFile = $(this).attr('data-name');
    
    $('.configcenter.full').stop().animate({
        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
    }, {
        complete: function () {
                showScroll($('.configcenter.full'));                
            }
    });
    editTab($(this).parent(), dataFile);
//    location.href = '#tabHelp';
});
$('#center').on('click', '.configcenter .Groupbox.contentpagelist .editcontentpagelist.buttonEdit', function(){
    $('.editcontentpagelist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    $(this).removeClass('buttonEdit').addClass('buttonClose');
    if($(this).closest('.Groupbox.newjson').find('.newContentpage').length > 0){
        $(this).closest('.Groupbox.newjson').find('.newContentpage').remove();
    }
    $('.contentpagelist').attr('draggable', 'False');
    
    var scrollTo = $(this).closest('.Groupbox.contentpagelist').offset().top - 50 - $('.configcenter.full').offset().top;
    var dataNum = $(this).attr('data-name');    
    $('.configcenter.full').stop().animate({
        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
    }, {
        complete: function () {
                showScroll($('.configcenter.full'));                
            }
    });    
    editContentPage($(this).parent(), dataNum);
//    location.href = '#contentpageHelp';
});
$('#center').on('click', '.preferences.full .blocklist .editblocklist.copyTab', function(){
    getCopyBlock(this);
});
$('#center').on('click', '.configcenter .Groupbox.blocklist .editblocklist.buttonEdit', function(){    
    $('.editblocklist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    $(this).removeClass('buttonEdit').addClass('buttonClose');
    if($(this).hasClass('thirdLevel') && $(this).closest('.newSubContentpage').length > 0){
        if($(this).closest('.newSubContentpage').find('.newBlockthirdLevel').length > 0){
            $(this).closest('.newSubContentpage').find('.newBlockthirdLevel').remove();
        }
    } else if($(this).hasClass('secondLevel') && $(this).closest('.newSubContentpage').length > 0){
        if($(this).closest('.newSubContentpage').find('.newBlocksecondLevel').length > 0){
            $(this).closest('.newSubContentpage').find('.newBlocksecondLevel').remove();
        }
    } else {
        if($(this).closest('.Groupbox.newjson').find('.newBlock').length > 0){
            $(this).closest('.Groupbox.newjson').find('.newBlock').remove();
        }
    }
    $('.blocklist').attr('draggable', 'False');
    var scrollTo = $(this).parent().offset().top - 50 - $('.configcenter.full').offset().top;
    $('.configcenter.full').stop().animate({
        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
    }, {
        complete: function () {
            showScroll($('.configcenter.full'));                
        }
    });
    var secondLevel = '';
    if($(this).hasClass('secondLevel')){
        secondLevel = 'secondLevel';
    } else if($(this).hasClass('thirdLevel')){
        secondLevel = 'thirdLevel';
    }
    editBlock($(this).parent(), secondLevel);
//    location.href = '#blockHelp';
});
$('#center').on('click', '.preferences.full .addElement', function(){
    var elements = null;
    var self = $(this);
    if($(this).closest('.Groupbox.newjson').find('.newHeadLED').length > 0){
        validatePreviewJson(true);
        $(this).closest('.Groupbox.newjson').find('.newHeadLED').remove();
        $('.editheadLED.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    }
    $('.elementlist').attr('draggable', 'False');
    if(self.closest('.newjson').find('input:required:invalid').length > 0){ 
        $(this).closest('.newjson').find('input:required:invalid').addClass('error');
        var scrollTo = self.closest('.newjson').find('input:required:invalid').first().offset().top - 50 - $('.configcenter.full').offset().top;
        $('.configcenter.full').stop().animate({
            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
        });
        return;
    }
    $.ajax({
        url:  configURL + 'StatWin/element.json',
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data) {
            elements = data;
            var parent = self.parent().find('.inner.element');
            if($('.selectElements').length === 0){
                $('<ul/>', {
                    "class": "overlay selectElements",
                    "mouseleave": function(){
                        $('.selectElements').hide();
                    }
                }).appendTo(self).show();
                var i= 1;
                $.each(elements, function (key, val) {
                    $("<li/>", {
                        "class": "breadoverlay_li",
                        "text": key,
                        "click": function () {
                            if($(this).closest('.newBlock').find('.newSubContentpage.thirdLevel').length > 0){
                                if($(this).closest('.newBlockthirdLevel').find('.newElement').length > 0){
                                    $(this).closest('.newBlockthirdLevel').find('.newElement').remove();
                                    $('.prevImage').remove();
                                }
                            } else if($(this).closest('.newBlock').find('.newSubContentpage').length > 0){
                                if($(this).closest('.newBlock').find('.newSubContentpage').find('.newElement').length > 0){
                                    $(this).closest('.newBlock').find('.newSubContentpage').find('.newElement').remove();
                                    $('.prevImage').remove();
                                }
                            } else {
                                if($(this).closest('.Groupbox.newjson').find('.newElement').length > 0){
                                    $(this).closest('.Groupbox.newjson').find('.newElement').remove();
                                    $('.prevImage').remove();
                                }
                            }
                            
                            var placeIDs = {};
                            placeIDs.tabID = self.closest('.tabslist')[0].myObjId;
                            placeIDs.contentpage = self.closest('.contentpagelist')[0].myObjId;
                            placeIDs.block = self.closest('.newBlock').closest('.blocklist')[0].selfObjNum;
                            var blockchilds;
                            var newChildID;
                            console.log($(this).parent())
                            if($(this).parent().hasClass('secondLevel')){
                                $('.Groupbox.inner.block.secondLevel, .Groupbox.inner.element.secondLevel').sortable("disable").css('overflow', 'initial');
                                parent = $(this).closest('.newBlock').find('.newBlocksecondLevel').find('.innerbox.element');
                                placeIDs.subTab = parent.closest('.elementlist')[0].selfObjNum;
                                placeIDs.subcontentpage = parent.closest('.subcontentpagelist')[0].myObjId;
                                placeIDs.blocksecondLevel = parent.closest('.blocklist.secondLevel')[0].selfObjNum;
                                placeIDs.elementnumber = parent.closest('.elementlist:not(.secondLevel)')[0].selfObjNum;
                                blockchilds = parent.closest('.blocklist.secondLevel')[0].myChildsIDs;
                                newChildID = (blockchilds.length > 0) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : Number(placeIDs.blocksecondLevel) + 1;
                                $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
                                getElementMask(key, placeIDs, parent, newChildID, val);                            
                                setTimeout(function () {
                                    var scrollTo = self.closest('.newBlock').find('.newBlocksecondLevel').find('.newElement').closest('.elementlist').offset().top -60 - $('.configcenter.full').offset().top;
                                    $('.configcenter.full').stop().animate({
                                        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                                    });
                                }, 100);
                                
                            } else if($(this).parent().hasClass('thirdLevel')){
                                $('.Groupbox.inner.block.thirdLevel, .Groupbox.inner.element.thirdLevel').sortable("disable").css('overflow', 'initial');
                                var preparent = $(this).closest('.newBlock').find('.newBlocksecondLevel').find('.innerbox.element');
                                parent = $(this).closest('.newBlock').find('.newBlockthirdLevel').find('.innerbox.element');
                                placeIDs.subTab = preparent.closest('.elementlist')[0].selfObjNum;
                                placeIDs.subcontentpage = preparent.closest('.subcontentpagelist')[0].myObjId;
                                placeIDs.blocksecondLevel = preparent.closest('.blocklist.secondLevel')[0].selfObjNum;
                                
                                placeIDs.subsubTab = parent.closest('.elementlist')[0].selfObjNum;
                                placeIDs.subsubcontentpage = parent.closest('.subcontentpagelist')[0].myObjId;
                                placeIDs.blockthirdLevel = parent.closest('.blocklist.thirdLevel')[0].selfObjNum;
                                
                                blockchilds = parent.closest('.blocklist.thirdLevel')[0].myChildsIDs;
                                newChildID = (blockchilds.length > 0) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : Number(placeIDs.blockthirdLevel) + 1;
                                $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
                                getElementMask(key, placeIDs, parent, newChildID, val);                            
                                setTimeout(function () {
                                    var scrollTo = self.closest('.newBlock').find('.newBlockthirdLevel').find('.newElement').closest('.elementlist').offset().top -60 - $('.configcenter.full').offset().top;
                                    $('.configcenter.full').stop().animate({
                                        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                                    });
                                }, 100);
                            } else {
                                $('.Groupbox.inner.element:not(.secondLevel):not(.thirdLevel)').sortable("disable").css('overflow', 'initial');
                                blockchilds = $(this).closest('.blocklist')[0].myChildsIDs;
                                if(!blockchilds || blockchilds.length === 0)
                                    blockchilds = false;
                                newChildID = (blockchilds) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : placeIDs.block + 1;
                                
                                $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
                                getElementMask(key, placeIDs, parent, newChildID, val);    
                                if(val !== 'Add_Line'){
                                    setTimeout(function () {
                                        var scrollTo = self.closest('.newBlock').find('.newElement').offset().top -160 - $('.configcenter.full').offset().top;
                                        $('.configcenter.full').stop().animate({
                                            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
                                        });
                                    }, 100);
                                }
                            }
                            $(this).parent().removeClass('secondLevel').hide();                            
                        }
                    }).appendTo('.selectElements').html('<span class="tempkey">'+ i +'</span><img src="images/elements/'+ val +'.png"/>');//
                    i++;
                });
            } else {
                $('.selectElements').show();
            }
            
            if(self.hasClass('secondLevel')){
                $('.selectElements').removeClass('thirdLevel').addClass('secondLevel');
            } else if(self.hasClass('thirdLevel')){
                $('.selectElements').removeClass('secondLevel').addClass('thirdLevel');
            } else {
                $('.selectElements').removeClass('secondLevel').removeClass('thirdLevel');
            }
            
        },
        error: function (d) {
            console.log(d);                    
        }
    });
//    location.href = '#elementHelp';
});
$('#center').on('click', '.preferences.full .elementlist .copyTab:not(.editblocklist)', function(){
    getCopyElement(this);
//    var secondLevel = '';
//    if($(this).hasClass('secondLevel')){
//        secondLevel = 'secondLevel';
//    } else if($(this).hasClass('thirdLevel')){
//        secondLevel = 'thirdLevel';
//    }
//    
//    var self = $(this);
//    var data = JSON.parse(JSON.stringify($(this).parent()[0].self));
//    var elementType = $(this).parent()[0].selftype;
//    var copyTitle = $(this).attr('title').replace('copy Element ', 'copy of ');
//    if($(this).closest('.newBlock').find('.newSubContentpage.thirdLevel').length > 0){
//        if($(this).closest('.newBlockthirdLevel').find('.newElement').length > 0){
//            $(this).closest('.newBlockthirdLevel').find('.newElement').remove();
//            $('.prevImage').remove();
//        }
//    } else if($(this).closest('.newBlock').find('.newSubContentpage').length > 0){
//        if($(this).closest('.newBlock').find('.newSubContentpage').find('.newElement').length > 0){
//            $(this).closest('.newBlock').find('.newSubContentpage').find('.newElement').remove();
//            $('.prevImage').remove();
//        }
//    } else {
//        if($(this).closest('.Groupbox.newjson').find('.newElement').length > 0){
//            $(this).closest('.Groupbox.newjson').find('.newElement').remove();
//            $('.prevImage').remove();
//        }
//    }
//    var placeIDs = {};
//    placeIDs.tabID = $(this).closest('.tabslist')[0].myObjId;
//    placeIDs.contentpage = $(this).closest('.contentpagelist')[0].myObjId;
//    placeIDs.block = $(this).closest('.blocklist')[0].selfObjNum;
//    
//    var blockchilds = $(this).closest('.blocklist')[0].myChildsIDs;
//    var newChildID = (blockchilds) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : false;
//    
//    var blockchilds;
//    var newChildID;
//    var temp;
//    if($(this).parent().hasClass('secondLevel')){
//        var parent = $(this).closest('.newBlock').find('.newBlocksecondLevel').find('.innerbox.element');
//        placeIDs.subTab = parent.closest('.elementlist')[0].selfObjNum;
//        placeIDs.subcontentpage = parent.closest('.subcontentpagelist')[0].myObjId;
//        placeIDs.blocksecondLevel = parent.closest('.blocklist.secondLevel')[0].selfObjNum;
//        blockchilds = parent.closest('.blocklist.secondLevel')[0].myChildsIDs;
//        newChildID = (blockchilds.length > 0) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : Number(placeIDs.blocksecondLevel) + 1;
//        $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
//        temp = newElement(elementType, placeIDs, copyTitle, data, newChildID, secondLevel);
//        getElementEditMask(elementType, temp);                     
//        setTimeout(function () {
//            var scrollTo = self.closest('.newBlock').find('.newBlocksecondLevel').find('.newElement').closest('.elementlist').offset().top -60 - $('.configcenter.full').offset().top;
//            $('.configcenter.full').stop().animate({
//                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//            });
//        }, 100);
//
//    } else if($(this).parent().hasClass('thirdLevel')){
//        var preparent = $(this).closest('.newBlock').find('.newBlocksecondLevel').find('.innerbox.element');
//        parent = $(this).closest('.newBlock').find('.newBlockthirdLevel').find('.innerbox.element');
//        placeIDs.subTab = preparent.closest('.elementlist')[0].selfObjNum;
//        placeIDs.subcontentpage = preparent.closest('.subcontentpagelist')[0].myObjId;
//        placeIDs.blocksecondLevel = preparent.closest('.blocklist.secondLevel')[0].selfObjNum;
//
//        placeIDs.subsubTab = parent.closest('.elementlist')[0].selfObjNum;
//        placeIDs.subsubcontentpage = parent.closest('.subcontentpagelist')[0].myObjId;
//        placeIDs.blockthirdLevel = parent.closest('.blocklist.thirdLevel')[0].selfObjNum;
//
//        blockchilds = parent.closest('.blocklist.thirdLevel')[0].myChildsIDs;
//        newChildID = (blockchilds.length > 0) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : Number(placeIDs.blockthirdLevel) + 1;
//        $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
//        temp = newElement(elementType, placeIDs, copyTitle, data, newChildID, secondLevel);
//        getElementEditMask(elementType, temp);
//                                   
//        setTimeout(function () {
//            var scrollTo = self.closest('.newBlock').find('.newBlockthirdLevel').find('.newElement').closest('.elementlist').offset().top -60 - $('.configcenter.full').offset().top;
//            $('.configcenter.full').stop().animate({
//                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//            });
//        }, 100);
//    } else {
//        blockchilds = $(this).closest('.blocklist')[0].myChildsIDs;
//        if(!blockchilds || blockchilds.length === 0)
//            blockchilds = false;
//        newChildID = (blockchilds) ? blockchilds[blockchilds.lastIndexOf(blockchilds.slice(-1)[0])] + 1 : placeIDs.block + 1;
//
//        $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
//        temp = newElement(elementType, placeIDs, copyTitle, data, newChildID, secondLevel);
//        getElementEditMask(elementType, temp);                            
//        setTimeout(function () {
//            var scrollTo = self.closest('.newBlock').find('.newElement').last().offset().top -60 - $('.configcenter.full').offset().top;
//            $('.configcenter.full').stop().animate({
//                scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//            });
//        }, 100);
//    }
//    $(this).closest('.innerbox.element').append(temp);    
//    setElementData(temp, data);
//    setTimeout(function () {
//        var scrollTo = self.closest('.newBlock').find('.newElement').last().offset().top -60 - $('.configcenter.full').offset().top;
//        $('.configcenter.full').stop().animate({
//            scrollTop: $('.configcenter.full').scrollTop() + scrollTo
//        });
//        validatePreviewJson(true);
//    }, 100);
});
$('#center').on('click', '.configcenter .Groupbox.elementlist .buttonEdit:not(.editblocklist):not(.editsubcontentpagelist):not(.getKeypad)', function(){
    $('.editelementlist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');    
    $(this).removeClass('buttonEdit').addClass('buttonClose');
    if($(this).closest('.newSubContentpage').length > 0){
        if($(this).closest('.newSubContentpage').find('.newElement').length > 0){
            $(this).closest('.newSubContentpage').find('.newElement').remove();
            $('.prevImage').remove();
        }
    } else {
        if($(this).closest('.Groupbox.newjson').find('.newElement').length > 0){
            $(this).closest('.Groupbox.newjson').find('.newElement').remove();
            $('.prevImage').remove();
        }
    }
    if($(this).closest('.Groupbox.newjson').find('.newHeadLED').length > 0){
        validatePreviewJson(true);
        $(this).closest('.Groupbox.newjson').find('.newHeadLED').remove();
        $('.editheadLED.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    }
    $('.elementlist').attr('draggable', 'False');
    var scrollTo = $(this).closest('.Groupbox.elementlist').offset().top - 50 - $('.configcenter.full').offset().top;
    var self = $(this).attr('data-self');
    var parent = $(this).parent();    
    $('.configcenter.full').stop().animate({
        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
    }, {
        complete: function () {
            showScroll($('.configcenter.full'));                
        }
    });
    editElement(parent);
//    location.href = '#elementHelp';
});
$('#center').on('click', '.configcenter .Groupbox.subcontentpagelist .editsubcontentpagelist.buttonEdit', function(){
    $('.editsubcontentpagelist.buttonClose').removeClass('buttonClose').addClass('buttonEdit');
    $(this).removeClass('buttonEdit').addClass('buttonClose');
    var self = $(this);
    var dataNum = $(this).attr('data-name');  
    if($(this).closest('.elementlist').find('.newSubContentpage').length > 0){
        $(this).closest('.elementlist').find('.newSubContentpage').remove();
    }
    $('.subcontentpagelist').attr('draggable', 'False');
    editSubContentpage($(this).parent(), dataNum);
    var scrollTo = self.parent().offset().top - 50 - $('.configcenter.full').offset().top;
    $('.configcenter.full').stop().animate({
        scrollTop: $('.configcenter.full').scrollTop() + scrollTo
    });
//    location.href = '#contentpageHelp';
});
$('#center').on('click', '.preferences.full .fromClipboard', function(){
    var blockOrElement = ($(this).hasClass('insertblock')) ? 'block' : 'element';
    if($(this).hasClass('secondLevel')){
        $('.Groupbox.inner.blocksecondLevel').sortable("disable").css('overflow', 'initial');
    } else if($(this).hasClass('thirdLevel')){
        $('.Groupbox.inner.blockthirdLevel').sortable("disable").css('overflow', 'initial');
    } else {
        $('.Groupbox.inner.contentpage').css('overflow', 'initial');
    }
    getToolbox(blockOrElement, this);
});
$('#center').on('click', '.preferences.full .toClipboard', function(){
    var blockOrElement = $(this).parent();
    getDialogComment(blockOrElement);
});

$('#center').on('blur', '.preferences.full .configcenter.editor .Groupbox .text', function(){
    var parent = $(this).closest('.newjson');
    parent.find('.savebutton').removeClass('disabled');
    if($(this)[0].name === 'blockname'){
        $(this).closest('.blocklist').find(".pagerHeadLine:first").text($(this).val());
        $(this).closest('.blocklist').attr('data-name', $(this).val());
    } else if($(this)[0].name === 'contentpagename'){
        $(this).closest(".contentpagelist").find(".pagerHeadLine:first").text($(this).val());
    } else if($(this)[0].name === 'Version') {        
        var jsonname = $("input[name='DiagnosisControl']").val();
        var tempName = jsonname.split(".");
        var tempVersion = tempName[tempName.length - 1];
        var mother = jsonname.replace('.' + tempVersion, '');
        $(this).parent().prev().find("input[name='DiagnosisControl']").val(mother + '.' + $(this).val());
    }
    validatePreviewJson(true);    
});
$('#center').on('blur', '.preferences.full .configcenter.editor .Groupbox .textholder textarea', function(){
    var parent = $(this).closest('.newjson');
    parent.find('.savebutton').removeClass('disabled');    
    validatePreviewJson(true);    
});
$('#center').on('click', '.preferences.full .configcenter.editor .dropdownlist li:not(.jumpfilter):not(.folder), .dropdownlist.selectUrl li', function(){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    $(this).parent().prev().find('span').attr('class', '');
    var jsonParent = $(this).closest('.newjson');
    if($(this).parent().attr('data-name') === 'iconclass'){
//        $(this).closest('.tabslist').find('.pagerHeadLineIcon:first').attr('class','pagerHeadLineIcon').addClass($(this).text());
        $(this).closest('.tabslist').find('.pagerHeadLineIcon:first').css('background-image', 'url(svg/tabicons/' + $(this).text() + '.svg)');
        $(this).closest('.tabslist').find('.pagerHeadLine:first').text($(this).text());
        $(this).closest('.tabslist').attr('data-name', $(this).text());
        
//        $(this).parent().prev().find('span').addClass($(this).text()).text($(this).text());
        $(this).parent().prev().find('span').css('background-image', 'url(svg/tabicons/' + $(this).text() + '.svg)').text($(this).text());
        //var tabnum = jsonParent.find('.tabslist').length - 1;//$(this).closest('.newTab').attr('data-num');
        var tabs = jsonParent.find('.tabslist');
        var tabnum = jQuery.inArray( $(this).closest('.tabslist')[0], tabs );
        if($(this).text() === 'Messages'){
            jsonResults.data.windowData.PageControl[tabnum] = {};
            jsonResults.data.windowData.PageControl[tabnum]['Messages'] = {};
            jsonResults.data.windowData.PageControl[tabnum]['Messages']['AlarmClient'] = {};
            $(this).closest('.newTab').remove();
        } else {
            jsonResults.data.windowData.PageControl[tabnum]['AddPageTab'].Text = $(this).text();
            jsonResults.data.windowData.PageControl[tabnum]['AddPageTab'].TextID = $(this).text();
            jsonResults.data.windowData.PageControl[tabnum]['AddPageTab'].VisibleAtRight = '0';
            $(this).closest('.tabslist').find('.emosbutton.delete, .emosbutton.buttonClose').attr('data-name', $(this).text());
        } 
        validatePreviewJson(true);
    } else if($(this).parent().attr('data-name') === 'diadnosislibid') {
        var me = $(this);
        $("<div/>", {
            "class": 'dialogoverlay',
            "id": 'dialog'
        }).appendTo('#precenter');
        $('#dialog').empty();
        $('#dialog').append("<h4>Library</h4>");    
        $('#dialog').append("<span style='line-height:22px;' class='dialogtext'>Attention! You changed the Library. This JSON-File will be saved in the selected Library</span>");
        $('#dialog').dialog({
            resizable: false,
            dialogClass: "dialogCorpus ",
            height: "auto",
            width: 400,
            modal: true,
            title: "Reset1",
            buttons: {
                "": function () {
                        department = me.text();
                        validatePreviewJson(true);
                        me.parent().prev().find('span').addClass(me.text()).text(me.text());
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
        
        
    } else if($(this).parent().hasClass('selectUrl')) {
        $(this).parent().prev().find('span').text($(this).text());
    } else {
        $(this).parent().prev().find('span').addClass($(this).attr('data-value')).text($(this).text());
        //validatePreviewJson(true);
    }  
    
    showScroll($('.configcenter.full'));
});
$('#center').on('click', '.preferences.full .kreis', function(){
    $(this).parent().find('.kreis').removeClass('active');
    $(this).addClass('active');
    validatePreviewJson(true);
});
$('#center').on('click', '.configcenter.editor .Groupbox.jsonlist .editjsonlist.delete', function(){
    if($(this).parent().find('.versions').length > 0) {
        $(this).parent().find('.versions').show();
        return;
    }  
    if($(this).parent().parent().hasClass('versions')){
        $(this).parent().parent().hide();
    }
    var dataFile = $(this).attr('data-name');
    getDeleteDialog(dataFile, true);
});
$('#center').on('click', '.configcenter.editor .Groupbox.tabslist .edittabslist.delete', function(){
    var self = $(this).parent()[0].myObjId;
    var parent = $(this).closest('.jsonlist');
    var me = $(this);
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Delete</h4>");    
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                delete jsonResults.data.windowData.PageControl[self];
                jsonResults.data.windowData.PageControl = jsonResults.data.windowData.PageControl.filter(function(val){ return val; });
                me.closest('.newjson').remove();    
                editJson(parent, true);
                $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
                $(this).dialog("destroy");
                $('#dialog').remove();
                if(me.closest('.newjson').find('.tabslist').length >= 4){
                    me.closest('.newjson').find('.emosbutton.addTab').addClass('disabled');
                } else {
                    me.closest('.newjson').find('.emosbutton.addTab').removeClass('disabled');
                }
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); 
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton delete");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
});
$('#center').on('click', '.configcenter.editor .Groupbox.contentpagelist .editcontentpagelist.delete', function(){
    var myGrand = $(this).closest('.tabslist')[0].myChilds;
    var dataFile = $(this).closest('.tabslist').attr('data-name');
    var myObjId = $(this).parent()[0].myObjId;
    var me = $(this);
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Delete</h4>");    
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                delete myGrand['AddPageControl'][myObjId];
                myGrand['AddPageControl'] = myGrand['AddPageControl'].filter(function(val){ return val; }); 
                me.closest('.tabslist')[0].myChilds = myGrand;
                me.closest('.tabslist').empty();
                editTab($('.tabslist[data-name="'+ dataFile +'"]'), dataFile, true);    
                validatePreviewJson(true);
                $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
                $(this).dialog("destroy");
                $('#dialog').remove();
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); 
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton delete");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
    
});
$('#center').on('click', '.configcenter.editor .Groupbox.blocklist .editblocklist.delete', function(){
    var myGrand;
    var actLevel = '';
    if($(this).hasClass('thirdLevel')){
        myGrand = $(this).closest('.subcontentpagelist.thirdLevel')[0].myParent;
        actLevel = '.thirdLevel';
    } else if($(this).hasClass('secondLevel')){
        myGrand = $(this).closest('.subcontentpagelist')[0].myParent;
        actLevel = '.secondLevel';
    } else{
        myGrand = $(this).closest('.contentpagelist')[0].myParent;
    }
    
    var data = $(this).closest('.blocklist' + actLevel)[0].myChildsIDs;
    var myId = $(this).closest('.blocklist' + actLevel)[0].selfObjNum;
    var me = $(this);
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Delete</h4>");    
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                if(data){
                    $.each(data, function(key, val){
                        delete myGrand['AddPageTab'][val];
                    });
                }
                delete myGrand['AddPageTab'][myId];
                myGrand['AddPageTab'] = myGrand['AddPageTab'].filter(function(val){ return val; });
                var content;
                if(me.hasClass('thirdLevel')){
                    me.closest('.subcontentpagelist.thirdLevel')[0].myParent = myGrand['AddPageTab'];
                    me.closest('.subcontentpagelist.thirdLevel')[0].myChilds = myGrand['AddPageTab'];
                    content = me.closest('.subcontentpagelist.thirdLevel');
                    content.empty();
                    editSubContentpage(content, content.attr('data-name'), true); 
                } else if(me.hasClass('secondLevel')){
                    me.closest('.subcontentpagelist')[0].myParent = myGrand['AddPageTab'];
                    me.closest('.subcontentpagelist')[0].myChilds = myGrand['AddPageTab'];
                    content = me.closest('.subcontentpagelist');
                    content.empty();
                    editSubContentpage(content, content.attr('data-name'), true); 
                } else{
                    me.closest('.contentpagelist')[0].myParent = myGrand;
                    me.closest('.contentpagelist')[0].myChilds = myGrand;
                    content = me.closest('.contentpagelist');
                    content.empty();
                    editContentPage(content, content.attr('data-name'), true); 
                }
                me.parent().remove();
                validatePreviewJson(true);
                $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
                $(this).dialog("destroy");
                $('#dialog').remove();                
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); 
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton delete");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
});
$('#center').on('click', '.configcenter.editor .Groupbox.elementlist .editelementlist.delete', function(){
    var myGrand;
    if($(this).hasClass('thirdLevel')){
        myGrand = $(this).closest('.subcontentpagelist.thirdLevel')[0].myParent;
    } else if($(this).hasClass('secondLevel')){
        myGrand = $(this).closest('.subcontentpagelist')[0].myParent;
    } else{
        myGrand = $(this).closest('.contentpagelist')[0].myParent;
    }
    var delNum = $(this).parent()[0]['selfObjNum'];
    var me = $(this);
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Delete</h4>");    
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                delete myGrand['AddPageTab'][delNum];
                myGrand['AddPageTab'] = myGrand['AddPageTab'].filter(function(val){ return val; });
                var content;
                var block 
                if(me.hasClass('thirdLevel')){
                    me.closest('.subcontentpagelist.thirdLevel')[0].myParent = myGrand;
                    me.closest('.subcontentpagelist.thirdLevel')[0].myChilds = myGrand['AddPageTab'];
                    content = me.closest('.subcontentpagelist.thirdLevel');
                    block = me.closest('.blocklist.thirdLevel').attr('data-name');
                    content.empty();
                    editSubContentpage(content, content.attr('data-name'), true);    
                    editBlock(content.find('.blocklist.thirdLevel[data-name="'+ block +'"]'), 'thirdLevel');    
                    validatePreviewJson(true);
                    content.find('.editsubcontentpagelist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
                    content.find('.editblocklist.thirdLevel.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');

                } else if(me.hasClass('secondLevel')){
                    me.closest('.subcontentpagelist')[0].myParent = myGrand;
                    me.closest('.subcontentpagelist')[0].myChilds = myGrand['AddPageTab'];
                    content = me.closest('.subcontentpagelist');
                    block = me.closest('.blocklist.secondLevel').attr('data-name');
                    content.empty();
                    editSubContentpage(content, content.attr('data-name'), true);    
                    editBlock($('.blocklist[data-name="'+ block +'"].secondLevel'));    
                    validatePreviewJson(true);
                    content.find('.editsubcontentpagelist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
                    content.find('.editblocklist.secondLevel.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
                    
                } else{
                    me.closest('.contentpagelist')[0].myParent = myGrand;
                    content = me.closest('.contentpagelist');
                    block = me.closest('.blocklist').attr('data-name');
                    me.closest('.contentpagelist').empty();
                    editContentPage(content, content.attr('data-name'), true);    
                    editBlock($('.blocklist[data-name="'+ block +'"]'));    
                    validatePreviewJson(true);
                    $('.newContentpage').closest('.contentpagelist').find('.editcontentpagelist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
                    $('.newBlock').closest('.blocklist').find('.editblocklist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');

                }
                
                $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
                $(this).dialog("destroy");
                $('#dialog').remove();
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); 
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton delete");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
    
//    console.log($(this).closest('.contentpagelist'))
});
$('#center').on('click', '.configcenter.editor .editsubcontentpagelist.delete', function(){
    var myGrand;
    var elemNum;
    var delNum = $(this).parent()[0].myObjId;
    if($(this).parent().hasClass('thirdLevel')){
        //myGrand = $(this).closest('subcontentpagelist.thirdLevel')[0].self[delNum];
        myGrand = $(this).closest('.elementlist.secondLevel')[0].selfParent;
        elemNum = $(this).closest('.elementlist.secondLevel')[0].selfObjNum;
    } else{
        myGrand = $(this).closest('.contentpagelist')[0].myParent;
    }
    var me = $(this);
    var parent = $(this).closest('.elementlist');
    
    console.log($(this).closest('.subcontentpagelist.thirdLevel'))
    
    $("<div/>", {
        "class": 'dialogoverlay',
        "id": 'dialog'
    }).appendTo('#precenter');
    $('#dialog').empty();
    $('#dialog').append("<h4>Delete</h4>");    
    $('#dialog').dialog({
        resizable: false,
        dialogClass: "dialogCorpus ",
        height: "auto",
        width: 400,
        modal: true,
        title: "Reset1",
        buttons: {
            "": function () {
                
                
//                delete myGrand['AddPageTab'][elemNum]['AddPageControl'][delNum];
//                myGrand['AddPageTab'][elemNum]['AddPageControl'] = myGrand['AddPageTab'][elemNum]['AddPageControl'].filter(function(val){ return val; });
                var content;
                var block; 
                if(me.parent().hasClass('thirdLevel')){
                    delete myGrand['AddPageControl'][delNum];
                    myGrand['AddPageControl'] = myGrand['AddPageControl'].filter(function(val){ return val; });
                    me.closest('.elementlist.secondLevel')[0].selfParent = myGrand;
                    content = me.closest('.subcontentpagelist.thirdLevel');
                    block = me.closest('.blocklist.thirdLevel').attr('data-name');
                    content.remove();
//                    editSubContentpage(content, content.attr('data-name'), true);    
//                    editBlock(content.find('.blocklist.thirdLevel[data-name="'+ block +'"]'), 'thirdLevel');    
                    validatePreviewJson(true);
                    content.find('.editsubcontentpagelist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
                    content.find('.editblocklist.thirdLevel.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');

                } else{
                    elemNum = $(this).closest('.elementlist')[0].selfObjNum;
                    delete myGrand['AddPageTab'][elemNum]['AddPageControl'][delNum];
                    myGrand['AddPageTab'][elemNum]['AddPageControl'] = myGrand['AddPageTab'][elemNum]['AddPageControl'].filter(function(val){ return val; });
                    me.closest('.contentpagelist')[0].myParent = myGrand;
                    content = me.closest('.contentpagelist');
                    block = me.closest('.blocklist').attr('data-name');
                    me.closest('.contentpagelist').empty();
                    editContentPage(content, content.attr('data-name'), true);    
                    editBlock($('.blocklist[data-name="'+ block +'"]')); 
//                    parent[0].self = myGrand['AddPageTab'][elemNum]['AddPageControl'];
//                    editElement(parent);
                    validatePreviewJson(true);
                    $('.newContentpage').closest('.contentpagelist').find('.editcontentpagelist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');
                    $('.newBlock').closest('.blocklist').find('.editblocklist.buttonEdit').removeClass('buttonEdit').addClass('buttonClose');

                }
                
                $('.Groupbox.newjson').find('.savebutton').removeClass('disabled');
                $(this).dialog("destroy");
                $('#dialog').remove();
            },
            " ": function () {
                $(this).dialog("destroy");
                $('#dialog').remove();
            }
        }
    }).siblings('div.ui-dialog-titlebar').remove(); 
    $($('.dialogCorpus button')[0]).attr('class', "emosbutton delete");
    $($('.dialogCorpus button')[1]).attr('class', "emosbutton cancelbutton");
    
//    console.log($(this).closest('.contentpagelist'))
});
$('#center').on('click', '.configcenter .Groupbox.newjson .buttonClose', function(){
    validatePreviewJson();
    if($(this).parent().find('input:required:invalid').length > 0 || $(this).parent().find('.ledPanelOn').length > 0 && $('.ledPanelOn').find('.kreis.active').length < 1 || $(this).parent().find('.ledPanelOff').length > 0 && $('.ledPanelOff').find('.kreis.active').length < 1){
        console.log('error');
        return;
    }
      
    if($(this).hasClass('edittabslist')){
        $('.tabslist').attr('draggable', 'True');
        if($('.Groupbox.inner.tabs').hasClass('ui-sortable')){
            $('.Groupbox.inner.tabs').sortable("enable");
        }
        $('.Groupbox.inner.tabs').css('overflow', 'hidden');
    } else if($(this).hasClass('editcontentpagelist')) {
        $('.contentpagelist').attr('draggable', 'True');
//        if($('.Groupbox.inner.contentpage').hasClass('ui-sortable')){
            $('.Groupbox.inner.contentpage').sortable("enable");
//        }
        $('.Groupbox.inner.contentpage').css('overflow', 'hidden');
    } else if($(this).hasClass('editblocklist')){
        $('.blocklist').attr('draggable', 'True');
        if($('.Groupbox.inner.block').hasClass('ui-sortable')){
            $('.Groupbox.inner.block').sortable("enable");
        }
        $('.Groupbox.inner.block').css('overflow', 'hidden');
    } else if($(this).hasClass('editelementlist')) {
        $('.prevImage').remove();
        $('.elementlist').attr('draggable', 'True');
        if($('.Groupbox.inner.element').hasClass('ui-sortable')){
            $('.Groupbox.inner.element').sortable("enable").css('overflow', 'hidden');
        }
        $('.Groupbox.inner.element').css('overflow', 'hidden');
    }
    $(this).next('.newapp').remove();
    $(this).removeClass('buttonClose').addClass('buttonEdit');
    
});
$('#center').on('click', '.configcenter.editor .Groupbox.newjson .savebutton', function(){
    validatePreviewJson();
    saveJson($(this).closest('.newjson'));
});
$('#center').on('mouseleave', '.dropdownlist.versions', function(){
    $(this).hide();
});
$('#center').on('change', '.configcenter input[name="department"]', function(){
    department = $(this)[0].value;
    $('.configcenter').empty();
    buildJsonList($(".configcenter"));
});
$('#center').on('change', '.configcenter input[name="visuvalueBase"], .configcenter input[name="plcvalueBase"], .configcenter input[name="showhide"]', function(){
    validatePreviewJson(true);
});
$('#center').on('change', '.configcenter input[name="headcontrols"], .configcenter input[name="privatetab"], .configcenter input[name="summarytab"]', function(){
    validatePreviewJson(true);
});
$('#center').on('hover', ".ui-sortable .draggablelist", function(){
    if($(this).parent().hasClass('ui-sortable-disabled')){
        $(this).removeClass("draggablelistMouse");
    } else {
        $(this).toggleClass("draggablelistMouse");
    }  
});