var mainsvg = "mainsvg";
var g_ManualMode = new GlobalVariable( false );
var g_SetupMode = new GlobalVariable( false );
var g_ManualModeHosts = new GlobalVariable( false );
var g_CDKName = new GlobalVariable( 'P1Y2C3_2C3CD04_CDK' );
var gHostName = new GlobalVariable();
var iVis_115 = new GlobalVariable( 3 );
var iVis_170 = new GlobalVariable( 1 );
 emosWS.setSiteProperties(
{
"QuitALM": {
"PlcTag": [
"PT_ABCDEF.AAA_BBB_DESK1.CB.C1234_Reset"
],
"PlcName": [
"P1Y2C3"
],
"Security": {
"Plant": "psa",
"UserRF": "2",
"GroupRF": "3"
}
},
"AckALM": {
"AlarmGroups": [
"P1Y2C3.P1Y2C3_2C3CD04"
],
"AlarmName": [
"Desk 1"
],
"Security": {
"Plant": "psa",
"UserRF": "2",
"GroupRF": "3"
}
},
"BreadcrumbLevel": 1,
}
);
emosWS.getClientInfo(function(info){
 DS_HMI.SetVariable("gIP", info.ip, true);
 DS_HMI.SetVariable("gHostName", info.hostname, true);
 DS_HMI.SetVariable("gCanonicalHostName", info.canonicalHostname, true);
})
function initialize() {
 emosWS.connect({onopen: onOpen});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'alarmiconCVUKNWY_4ABW2S63FW'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'auto_4ABW2S689I'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background_919J2UP'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background0033_4AAH2PZQKR'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background0033_4AAH2PZV1I'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background0033_4AAH2PZV1I1'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background0033_4AAH2PZZI10'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background0033_4AAH2PZZI11'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'Background0033_4AAH2PZZI9'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected_919J3K8'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected0034_4AAH2PZVHL'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected0034_4AAH2PZVHL1'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected0034_4AAH2PZZYC'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected0034_4AAH2PZZYC1'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected0034_4AAH2PZZYC2'});
new ALink({'page' : '2C5CD06.htm', 'shape' : 'BackgroundSelected0034_FFG3VEDI3'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'manu_4ABW2S65XX'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'Picture_4ABW2S6CN1'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'Picture_4ABW2S6EYM'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'RightTriangle_4ABW2S5Y9F'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'StraightConnector_4ABW2S6H70'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'StraightConnector_4ABW2S6JLT'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'StraightConnector_4ABW2S6QHD'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'StraightConnector_FFL7H7UZF'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'StraightConnector_FFL7H7V7S'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'TextBox_4ABW2S6AHV'});
new ALink({'page' : './NazwaSlajdu.htm?P1Y2C3.IS010_Logic+', 'shape' : 'warningiconCVUKNTQ_FFL7H7SV8'});
}
function onOpen() {
 animationInitialize();
}
function animationInitialize() {
new EScriptGlobal (function(){
 new emosWS.GLC(function(){
g_ManualMode.value = true;
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu')) && (iVis_115.value == 1), 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu')) && (iVis_115.value == 1), 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu')) && (iVis_115.value == 2), 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu')) && (iVis_115.value == 2), 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu')) && (iVis_115.value == 3), 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu')) && (iVis_115.value == 3), 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu')) && (iVis_170.value == 1), 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu')) && (iVis_170.value == 1), 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu')) && (iVis_170.value == 2), 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu')) && (iVis_170.value == 2), 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu')) && (iVis_170.value == 3), 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1280_DeselDrives', -1);
});
new emosWS.GLC(function(){
SetTagValue((GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu')) && (iVis_170.value == 3), 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1280_DeselDrives', -1);
});
});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD01', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD01', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm_919J6NO'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm0039_4AAH2PZT97'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD04', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD04', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm0039_4AAH2Q026P'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm0039_4AAH2Q026P1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD07', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD07', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm0039_4AAH2Q026P2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD03', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD03', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm0039_FFG3VEE67'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05', 'PrioMin3') > 0);
 var condition = myFlt1 || myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Alarm0039_FFG3VEE68'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myNH, myFlt, myWrn;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin2') > 0);
myNH = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin3') > 0);
;
 Condition1 = myFlt || myNH;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrame_919JEDV'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_CDK';
 DiagnosisControl = 'Gp_CDK.FM1FM2FM3FM4MM1OB1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrame_919JEDV'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_49NEF28G3D0959'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_49NEF28G3D960'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_49NEF28G3D961'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_49XDJ40SWV'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_49XDJ40SWV1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_49XDJ40SWV2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.IL_P1Y1C7_LO030', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.IL_P1Y1C7_LO030', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH_4A69GI6142'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10220_4AAH2PZ14H'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10220_4AAH2PZ14H1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10280_4AAH2PZAI2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10280_4AAH2PZAI3'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10348_4AAH2PT2SF'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10683'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10684'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10685'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10686'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10687'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10688'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10690'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmFrameH10691'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1268_CFV');
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'alarmiconCVUKNWY_4ABW2S63FW'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49NEF28ENY0958'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49NEF28ENY0958'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49NEF28ENY959'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49NEF28ENY959'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49NEF28ENY960'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49NEF28ENY960'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49XDJ40RHF'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49XDJ40RHF'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49XDJ40RHF1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49XDJ40RHF1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49XDJ40RHF2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_49XDJ40RHF2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH_4A69GI69IA'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10219_4AAH2PZ0OE'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10219_4AAH2PZ0OE'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10219_4AAH2PZ0OE1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10219_4AAH2PZ0OE1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10279_4AAH2PZA1Z'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10279_4AAH2PZA1Z'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10279_4AAH2PZA1Z1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10279_4AAH2PZA1Z1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10346_FFG3VDPE1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10346_FFG3VDPE1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10684'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10684'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10685'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10685'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10686'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10688'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10688'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10689'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmIconH10689'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_49XDJ40HR0'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_49XDJ40HR0'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_49XDJ40HR1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_49XDJ40HR1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_49XDJ40HR2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_49XDJ40HR2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1268_CFV');
myWrn = false;
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_4A69GI5RDN'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_FD51I80HR0951'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_FD51I80HR0951'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_FD51I80HR952'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_FD51I80HR952'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_FD51I80HR953'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH_FD51I80HR953'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10212_4AAH2PYXJV'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10212_4AAH2PYXJV'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10212_4AAH2PYXJV1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10212_4AAH2PYXJV1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10272_4AAH2PZ6XG'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10272_4AAH2PZ6XG'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10272_4AAH2PZ6XG1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10272_4AAH2PZ6XG1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10338_1JJLZJDAX'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10338_1JJLZJDAX'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10673'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10673'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10674'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10674'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10675'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10675'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10676'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10676'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10677'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10677'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10678'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10678'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10680'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10680'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'AlarmTriangleH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PRev;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = !(Pos && PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28KAH0962'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49NEF28KAH0962'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28KAH0962'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PRev;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = !(Pos && PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28KAH963'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49NEF28KAH963'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28KAH963'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PRev;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = !(Pos && PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28KAH964'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49NEF28KAH964'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28KAH964'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PFwd;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = !(Pos && PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28N250964'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49NEF28N250964'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28N250964'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PFwd;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = !(Pos && PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28N250965'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49NEF28N250965'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28N250965'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PFwd;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = !(Pos && PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28N250966'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49NEF28N250966'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49NEF28N250966'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1068_PFwd')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40X0R'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49XDJ40X0R'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40X0R'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1068_PFwd')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40X0R1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49XDJ40X0R1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40X0R1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1068_PFwd')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40X0R2'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49XDJ40X0R2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40X0R2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1069_PRev')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40ZVN'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49XDJ40ZVN'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40ZVN'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1069_PRev')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40ZVN1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49XDJ40ZVN1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40ZVN1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1069_PRev')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40ZVN2'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_49XDJ40ZVN2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_49XDJ40ZVN2'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4A69GI65B6'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4A69GI65B6'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PT3OK'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PT3OK'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PT44N'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PT44N'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCAC'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1132_Opening')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZCAC'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCAC'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCAC1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1132_Opening')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZCAC1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCAC1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCQF'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1132_Opening')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZCQF'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCQF'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCQF1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1132_Opening')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZCQF1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZCQF1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1131_PClosed')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZDML'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1133_Closing')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZDML'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZDML'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1131_PClosed')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZDML1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1133_Closing')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZDML1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZDML1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1131_PClosed')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZE2N'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1133_Closing')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZE2N'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZE2N'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1131_PClosed')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZE2N1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1133_Closing')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_4AAH2PZE2N1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_4AAH2PZE2N1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_FF0Y1TESP'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_FF0Y1TESP'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L685'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L685'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L686'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L686'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L687'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L687'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L688'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L688'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L689'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L689'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L690'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L690'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L692'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L692'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_L693'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_L693'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R686'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R686'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R687'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R687'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R688'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R688'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R689'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R689'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R690'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R690'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R691'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R691'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R693'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R693'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#C0C0C0',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : false,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : false,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow_R694'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow_R694'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == lastPos))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow1_4AAH2PZ2GP'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow1_4AAH2PZ2GP'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow1_4AAH2PZ2GP'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == lastPos))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow1_4AAH2PZ2GP1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1062_Fwd')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow1_4AAH2PZ2GP1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow1_4AAH2PZ2GP1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == 1))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow2_4AAH2PZ3CU'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow2_4AAH2PZ3CU'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow2_4AAH2PZ3CU'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == 1))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow2_4AAH2PZ3CU1'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1063_Rev')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : false,
"PLACEHOLDER_SWAP_USEFALSE" : false,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#A5B200',
"PLACEHOLDER_FILLCOLOROFF" : '#B4B4B4',
"PLACEHOLDER_FILLCOLORFALSE" : '#00FF00',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Arrow2_4AAH2PZ3CU1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Arrow2_4AAH2PZ3CU1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'auto_4ABW2S689I'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD01_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto_919J4OW'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'auto_919JI0U'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto0036_4AAH2PZRWZ'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD03_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto0036_4AAH2PZWDQ'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto0036_4AAH2PZWDQ1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD04_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto0036_4AAH2Q00UH'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto0036_4AAH2Q00UH1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD07_CDK.SB.S1251_Auto')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Auto0036_4AAH2Q00UH2'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_TC170';
 DiagnosisControl = 'TC16P2SEnc.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_49NEF2825U0949'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_TC170';
 DiagnosisControl = 'TC16P2SEnc.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_49NEF2825U950'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_TC170';
 DiagnosisControl = 'TC16P2SEnc.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_49NEF2825U951'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_MU170';
 DiagnosisControl = 'TF3P2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_49XDJ40EZC'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_MU170';
 DiagnosisControl = 'TF3P2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_49XDJ40EZC1'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_MU170';
 DiagnosisControl = 'TF3P2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_49XDJ40EZC2'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.IL_P1Y1C7_LO030';
 DiagnosisControl = 'IL_NextIO';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH_4A69GI5OLZ'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_EL115';
 DiagnosisControl = 'EL16P2SEnc.CV1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10210_4AAH2PYWNQ'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_EL115';
 DiagnosisControl = 'EL16P2SEnc.CV1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10210_4AAH2PYWNQ1'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_FX115';
 DiagnosisControl = 'FX2P2D1S.FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10270_4AAH2PZ61B'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_FX115';
 DiagnosisControl = 'FX2P2D1S.FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10270_4AAH2PZ61B1'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD05_LO120_LO120';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10336_4AAH2PSXFJ'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_LO170';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10671'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_LO170';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10672'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_LO170';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10673'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_LO160_LO160';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10674'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_LO165_LO165';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10675'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_LO175_LO175';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10676'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_LO115';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10678'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_LO115';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundH10679'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD01_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected_919J3K8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD03_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected0034_4AAH2PZVHL'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD05_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected0034_4AAH2PZVHL1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD04_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected0034_4AAH2PZZYC'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD06_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected0034_4AAH2PZZYC1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD07_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected0034_4AAH2PZZYC2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = g_CDKName.value == "P1Y2C5_2C5CD02_CDK"
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'BackgroundSelected0034_FFG3VEDI3'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28OED0965'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28OED0965'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28OED966'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28OED966'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28OED967'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28OED967'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28PTT0966'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28PTT0966'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28PTT967'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28PTT967'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28PTT968'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49NEF28PTT968'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ4117V'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ4117V'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ4117V1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ4117V1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ4117V2'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ4117V2'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ412NB'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ412NB'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ412NB1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ412NB1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ412NB2'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_49XDJ412NB2'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.IL_P1Y1C7_LO030.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.IL_P1Y1C7_LO030.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_4A69GI66QM'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.IL_P1Y1C7_LO030.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_4A69GI66QM'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.IL_P1Y1C7_LO030.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.IL_P1Y1C7_LO030.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_4A69GI682U'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.IL_P1Y1C7_LO030.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button_4A69GI682U'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CB.C1123_UpwSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10226_4AAH2PZ3SX'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10226_4AAH2PZ3SX'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CB.C1123_UpwSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10226_4AAH2PZ3SX1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10226_4AAH2PZ3SX1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.CB.C1125_OpSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10289_4AAH2PZEIQ'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10289_4AAH2PZEIQ'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.CB.C1125_OpSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10289_4AAH2PZEIQ1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10289_4AAH2PZEIQ1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10352_4AAH2PT4KQ'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10352_4AAH2PT4KQ'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10687'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10687'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10688'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10688'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10689'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10689'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10690'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10690'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10691'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10691'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10692'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10692'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10694'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10694'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition2;
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
Condition2=(Select2&&(CDK2==DEV2)) || !Select2
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition2;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10695'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button1H10695'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CB.C1124_DownSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10227_4AAH2PZ490'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10227_4AAH2PZ490'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CB.C1124_DownSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10227_4AAH2PZ491'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10227_4AAH2PZ491'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.CB.C1126_CloSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10290_4AAH2PZEYT'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10290_4AAH2PZEYT'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.CB.C1126_CloSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10290_4AAH2PZEYT1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10290_4AAH2PZEYT1'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.CB.C1121_FwdSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10353_4AAH2PT50T'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10353_4AAH2PT50T'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10688'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10688'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10689'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10689'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10690'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10690'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10691'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10691'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10692'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10692'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10693'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10693'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10695'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10695'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
 var Condition1;
var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
Condition1=(Select1&&(CDK1==DEV1)) || !Select1
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.CB.C1122_RevSelVisu';
 Value = '-1';
 Enabled = g_ManualMode.value && Condition1;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10696'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = 'P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr';
 Value = GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');;
 Enabled = g_ManualMode.value;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Button2H10696'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = (iVis_115.value == 1) && (GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos') >= 2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EL115'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = (iVis_115.value == 1) && (GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos') <=1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EL116'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_49NEF28BWA0956'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_49NEF28BWA957'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_49NEF28BWA958'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_49XDJ40OPS'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_49XDJ40OPS1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_49XDJ40OPS2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH_FF0Y1TEDL'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10217_4AAH2PYZS10'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10217_4AAH2PYZS9'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10277_4AAH2PZ95U'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10277_4AAH2PZ95U1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10344_4AAH2PT104'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10679'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10680'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10684'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10686'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1252_Enbl')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EnableH10687'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'Val: '+ GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1004_ActPos');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'EncoderValueShape_919IWPR'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myInPos = false;
myInPos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
;
 Condition1 = myInPos;
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#A5B300',
 'PLACEHOLDER_STROKECOLOR2' : '#808080',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#808080',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EncoderValueShape_919IWPR'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myNH;
myNH = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin3') > 0)
 var condition = myNH
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#B53030',
 'PLACEHOLDER_FILLCOLORFALSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Estop_919JGX2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_EcoScreen.ES.P1Y2C5_2C5DP05_LO160_OF_S101F.S1819_EStopStat')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EstopOn0050'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_EcoScreen.ES.P1Y2C5_2C5DP05_LO165_OF_S101F.S1819_EStopStat')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EstopOn51'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_EcoScreen.ES.P1Y2C5_2C5DP04_LO120_OF_S101F.S1819_EStopStat')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'EstopOn52'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5DC02_EL115_FX115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault_4AAH2PYK5M'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault_4AAH2PYK5M'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault_4AAH2PYUVF'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault_4AAH2PYUVF'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5DC02_EL115_EL115', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault_919I91V'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault_919I91V'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C1.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Fault2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring_4AAH2PYJ9H'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring_4AAH2PYJ9H'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring_4AAH2PYTZA'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring_4AAH2PYTZA'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5DC02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C3_2C5DC02_EL115_EL115', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring_919I7Y2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring_919I7Y2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1268_CFV');
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FaultAndWaring2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = (iVis_115.value == 2) && (GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos') >= 2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FX115'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = (iVis_115.value == 2) && (GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos') <= 1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'FX116'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_CDK';
 DiagnosisControl = 'Gp_CDK.FM1FM2FM3FM4MM1OB1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'label_919JO23'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_TC170';
 DiagnosisControl = 'TC16P2SEnc.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_49NEF28HFL0960'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_TC170';
 DiagnosisControl = 'TC16P2SEnc.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_49NEF28HFL961'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_TC170';
 DiagnosisControl = 'TC16P2SEnc.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_49NEF28HFL962'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_MU170';
 DiagnosisControl = 'TF3P2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_49XDJ40U93'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_MU170';
 DiagnosisControl = 'TF3P2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_49XDJ40U94'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_MU170';
 DiagnosisControl = 'TF3P2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_49XDJ40U95'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.IL_P1Y1C7_LO030';
 DiagnosisControl = 'IL_NextIO';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH_4A69GI62JI'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_EL115';
 DiagnosisControl = 'EL16P2SEnc.CV1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10221_4AAH2PZ1KK'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_EL115';
 DiagnosisControl = 'EL16P2SEnc.CV1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10221_4AAH2PZ1KK1'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_FX115';
 DiagnosisControl = 'FX2P2D1S.FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10281_4AAH2PZAY4'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_FX115';
 DiagnosisControl = 'FX2P2D1S.FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10281_4AAH2PZAY5'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD05_LO120_LO120';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10349_4AAH2PT38I'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_LO170';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10684'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_LO170';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10685'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_TC170_LO170';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10686'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_LO160_LO160';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10687'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_LO165_LO165';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10688'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD06_LO175_LO175';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10689'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_LO115';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10691'});
new emosWS.ESDiagnosisWindow({'conditionFunction' : function() {
;
 DiagnosisLibID = 3;
 PLC = 'P1Y2C5';
 ID = '.P1Y2C5_2C5CD02_EL115_LO115';
 DiagnosisControl = 'CRB2D2S2S.CM1FM1';
 GroupRightIndex = 0;
 Enabled = true;
 return {"DiagnosisLibID": DiagnosisLibID, "PLC": PLC, 
 "ID": ID, "DiagnosisControl": DiagnosisControl, 
 "GroupRightIndex": GroupRightIndex, "Enabled": Enabled}; 
 }, 
 'PLACEHOLDER_USEHAND' : true,
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LabelH10692'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var gLifeSB, gLifeQ;
gLifeSB = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1299_LifeBitCD');
SetTagValue(gLifeSB,'P1Y2C5.P1Y2C5_2C5CD06_CDK.CB.C1281_LifeBitHMI','-1');
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.WV.W1020_RtLifeBitHMI');
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LifeBit_919JP96'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PRev;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = (Pos && PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28IV10961'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28IV10961'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PRev;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = (Pos && PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28IV10962'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28IV10962'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PRev;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = (Pos && PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28IV10963'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28IV10963'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PFwd;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = (Pos && PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28LMP0963'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28LMP0963'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PFwd;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = (Pos && PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28LMP964'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28LMP964'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos, PFwd;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1027_Pos');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.CO.I1044_LastPos');
 var condition = (Pos && PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28LMP965'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49NEF28LMP965'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1068_PFwd') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1127_PosMid')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40VOJ'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40VOJ'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1068_PFwd') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1127_PosMid')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40VOJ1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40VOJ1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1068_PFwd') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1127_PosMid')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40VOJ2'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40VOJ2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1069_PRev') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1127_PosMid')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40YG7'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40YG7'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1069_PRev') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1127_PosMid')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40YG8'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40YG8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1069_PRev') || GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1127_PosMid')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40YG9'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos_49XDJ40YG9'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == 1))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos1_4AAH2PZ20M'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos1_4AAH2PZ20M'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == 1))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos1_4AAH2PZ20M1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos1_4AAH2PZ20M1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == lastPos))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos2_FFG3VEB3A'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos2_FFG3VEB3A'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Pos;
var actPos, lastPos;
Pos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
actPos = GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');
lastPos= GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.CO.I1044_LastPos');
 var condition = !(Pos && (actPos == lastPos))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos2_FFG3VEB3A1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LiftPos2_FFG3VEB3A1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myNH, myFlt, myWrn;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin2') > 0);
myNH = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin3') > 0);
;
 Condition1 = myFlt || myNH;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'line_919JF1A'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myNH, myFlt, myWrn;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin2') > 0);
myNH = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin3') > 0);
;
 Condition1 = myFlt || myNH;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'line_919JFMQ'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myNH, myFlt, myWrn;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin2') > 0);
myNH = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin3') > 0);
;
 Condition1 = myFlt || myNH;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'line_919JG9Z'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = (iVis_115.value == 3) && (GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos') >= 2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LO115'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = (iVis_115.value == 3) && (GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos') <= 1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LO116'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 2) && (PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LO170'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 2) && !(PFwd || PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LO171'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 2) && (PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LO172'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10347_4AAH2PT2CC'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10684'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10685'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10686'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10687'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10689'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1389_EnDataChangeVisu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'LockH10690'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1254_EnMV')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'manu_4ABW2S65XX'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD01_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu_919J455'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'manu_919JHH1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu0035_4AAH2PZRGW'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD03_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu0035_4AAH2PZVXN'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu0035_4AAH2PZVXN1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD04_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu0035_4AAH2Q00EE'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu0035_4AAH2Q00EE1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD07_CDK.SB.S1257_Manu')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Manu0035_4AAH2Q00EE2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_49NEF286CY0952'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_49NEF286CY953'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_49NEF286CY954'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_49XDJ40J38'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_49XDJ40J39'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_49XDJ40J40'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.IL_P1Y1C7_LO030.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH_4A69GI5ST3'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10213_4AAH2PYXZY'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10213_4AAH2PYXZY1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10273_4AAH2PZ7DJ'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10273_4AAH2PZ7DJ1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10339_4AAH2PSYRR'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10674'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10675'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10676'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10677'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10678'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10679'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
 var condition = Select2 && (CDK2==DEV2)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedLH10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_49NEF283I20950'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_49NEF283I20951'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_49NEF283I20952'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_49XDJ40GBK'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_49XDJ40GBK1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_49XDJ40GBK2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.IL_P1Y1C7_LO030.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH_4A69GI5Q1F'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10211_4AAH2PYX3S'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10211_4AAH2PYX3S1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10271_4AAH2PZ6HD'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10271_4AAH2PZ6HD1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10337_4AAH2PSXVL'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10672'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10673'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10674'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10675'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10676'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10677'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10679'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
 var condition = Select1 && (CDK1==DEV1)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'ManuSelectedRH10680'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 3) && (PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'MU170'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 3) && !(PFwd || PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'MU171'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 3) && (PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'MU172'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_49XDJ40LY4'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_49XDJ40LY5'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_49XDJ40LY6'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.IL_P1Y1C7_LO030.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_4A69GI5X06'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_FD51I80WV0954'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_FD51I80WV955'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied_FD51I80WV956'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115_LO115.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10215_4AAH2PYYW3'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115_LO115.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10215_4AAH2PYYW4'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10275_4AAH2PZ89O'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10275_4AAH2PZ89O1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10342_4AAH2PT03Z'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10677'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10678'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10679'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10680'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10684'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1071_Occ')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Occupied1H10685'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5DP05_DIMMM1.SB.S7271_ExtOM1')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'OvalABCVGJBX_104NK5I7'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5DP05_DIMMM1.SB.S7272_ExtOM1')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'OvalABCVGJBX_104NK5I8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5DP04_DIMMM1.SB.S7271_ExtOM1')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'OvalABCVGJBX_104NK5I9'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_CDK.SB.S1299_LifeBitCD')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#F2F2F2',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'OvalLifeSB_919JOO3'});
new emosWS.ESColorBlink({"conditionFunction" : function(){
var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1027_Pos')
return condition;
},
"PLACEHOLDER_SWAP_FILLCOLOR" : true,
"PLACEHOLDER_SWAP_STROKECOLOR" : false,
"PLACEHOLDER_SWAP_VISIBILITY" : true,
"PLACEHOLDER_SWAP_USEFALSE" : true,
"PLACEHOLDER_SWAP_USEQUALITY" : false,
"PLACEHOLDER_FILLCOLORON" : '#000000',
"PLACEHOLDER_FILLCOLOROFF" : '#FFFF00',
"PLACEHOLDER_FILLCOLORFALSE" : '#808080',
"PLACEHOLDER_STROKECOLORQUALITYGOOD" : '#000000',
"PLACEHOLDER_STROKECOLORQUALITYBAD" : '#FF8000',
"PLACEHOLDER_STROKECOLORON" : '#FF0000',
"PLACEHOLDER_STROKECOLOROFF" : '#FFFF00',
"PLACEHOLDER_STROKECOLORFALSE" : '#00FF00',
"PLACEHOLDER_VISIBILITYON" : true,
"PLACEHOLDER_VISIBILITYOFF" : false,
"PLACEHOLDER_VISIBILITYFALSE" : true,
"STDPLACEHOLDER_SHAPENAME" : 'Picture_4ABW2S6CN1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1100_RunRelease');
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#000000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#9F9F9F',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Picture_4ABW2S6EYM'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBE7'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBE7'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBE8'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBE8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBUA'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBUA'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1130_POpened')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBUA1'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_4AAH2PZBUA1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1131_PClosed')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_FFG3VEC49'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_FFG3VEC49'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1131_PClosed')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#A5B200',
 'PLACEHOLDER_FILLCOLORFALSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_FFG3VEC50'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
;
 Condition1 = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1257_Manu');
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#3B4654',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#B4B4B4',
 'PLACEHOLDER_STROKECOLOR1' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR2' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR3' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR4' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR5' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR6' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR7' : '#FF0000',
 'PLACEHOLDER_STROKECOLOR8' : '#FF0000',
 'PLACEHOLDER_STROKECOLORELSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Pos_FFG3VEC50'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'Pos '+ GetTagValueAsString('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I1006_ActPos');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'PositionNr_919IXBG'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myInPos = false;
myInPos = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1027_Pos');
;
 Condition1 = myInPos;
 Condition2 = false;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR2' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLOR1' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR2' : '#808080',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#808080',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : true,
 'PLACEHOLDER_VISIBILITY4' : true,
 'PLACEHOLDER_VISIBILITY5' : true,
 'PLACEHOLDER_VISIBILITY6' : true,
 'PLACEHOLDER_VISIBILITY7' : true,
 'PLACEHOLDER_VISIBILITY8' : true,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'PositionNr_919IXBG'});
new LanguageText({'textID' : 'T03_JigsCheck', 'target': 'Rectangle_306.Text'});
new LanguageText({'textID' : 'T03_JigsCheck', 'target': 'Rectangle_307.Text'});
new emosWS.ESColorSwapMulti({'conditionFunction' : function() {
 var myFlt = false;
var myWrn = false;
myFlt = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1268_CFV');
myWrn = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1269_CWV');
;
 Condition1 = myFlt;
 Condition2 = myWrn;
 Condition3 = false;
 Condition4 = false;
 Condition5 = false;
 Condition6 = false;
 Condition7 = false;
 Condition8 = false;
return {Condition1:Condition1, Condition2:Condition2, Condition3:Condition3, Condition4:Condition4, Condition5:Condition5, Condition6:Condition6, Condition7:Condition7, Condition8:Condition8}
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_SWAP_USEELSE' : true,
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_FILLCOLOR1' : '#B53030',
 'PLACEHOLDER_FILLCOLOR2' : '#F27019',
 'PLACEHOLDER_FILLCOLOR3' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR4' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR5' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR6' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR7' : '#FF0000',
 'PLACEHOLDER_FILLCOLOR8' : '#FF0000',
 'PLACEHOLDER_FILLCOLORELSE' : '#A5B200',
 'PLACEHOLDER_STROKECOLOR1' : '#B53030',
 'PLACEHOLDER_STROKECOLOR2' : '#F27019',
 'PLACEHOLDER_STROKECOLOR3' : '#000000',
 'PLACEHOLDER_STROKECOLOR4' : '#000000',
 'PLACEHOLDER_STROKECOLOR5' : '#000000',
 'PLACEHOLDER_STROKECOLOR6' : '#000000',
 'PLACEHOLDER_STROKECOLOR7' : '#000000',
 'PLACEHOLDER_STROKECOLOR8' : '#000000',
 'PLACEHOLDER_STROKECOLORELSE' : '#A5B200',
 'PLACEHOLDER_VISIBILITY1' : true,
 'PLACEHOLDER_VISIBILITY2' : true,
 'PLACEHOLDER_VISIBILITY3' : false,
 'PLACEHOLDER_VISIBILITY4' : false,
 'PLACEHOLDER_VISIBILITY5' : false,
 'PLACEHOLDER_VISIBILITY6' : false,
 'PLACEHOLDER_VISIBILITY7' : false,
 'PLACEHOLDER_VISIBILITY8' : false,
 'PLACEHOLDER_VISIBILITYELSE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'RightTriangle_4ABW2S5Y9F'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myFlt;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK', 'PrioMin1') > 0)
 var condition = myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Shield_919JILA'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.IL_P1Y1C7_LO030.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr_4A69GI5U5B'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.IL_P1Y1C7_LO030.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr_4A69GI5U5B'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10340_4AAH2PSZ7T'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10340_4AAH2PSZ7T'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10675'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10675'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10676'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10676'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10677'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10677'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10678'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10678'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10679'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10679'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10680'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10680'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10682'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.IL.SD.I1030_RBDataSkidNo');
; 
 Text = GetAsString(iSkidNr);
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var iSkidNr = 0;
iSkidNr = GetTagValueAsDouble('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.IL.SD.I1030_RBDataSkidNo');
 var condition = iSkidNr > 0
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SkidNr1H10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1815_Bypass');
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'StraightConnector_4ABW2S6H70'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 2;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_115.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_4AAH2PYITE'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1112_CloSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C3CD02_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.SB.S1111_OpSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C3CD02_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115.AA.I8011_AreaNr');
 var condition = (Select1 && (CDK1==DEV1)) || (Select2 && (CDK2==DEV2))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#89BAD3',
 'PLACEHOLDER_FILLCOLORFALSE' : '#D0D8E0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_4AAH2PYITE'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 3;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_115.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_4AAH2PYTJ7'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C3CD02_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C3CD02_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115.AA.I8011_AreaNr');
 var condition = (Select1 && (CDK1==DEV1)) || (Select2 && (CDK2==DEV2))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#89BAD3',
 'PLACEHOLDER_FILLCOLORFALSE' : '#D0D8E0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_4AAH2PYTJ7'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 1;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_115.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_EL115'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 2;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_115.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_FX115'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 1;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_170.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_Label'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.AA.I8011_AreaNr');
 var condition = (Select1 && (CDK1==DEV1)) || (Select2 && (CDK2==DEV2))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#89BAD3',
 'PLACEHOLDER_FILLCOLORFALSE' : '#D0D8E0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_Label'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 2;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_170.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_Label1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1108_RevSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.SB.S1107_FwdSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170.AA.I8011_AreaNr');
 var condition = (Select1 && (CDK1==DEV1)) || (Select2 && (CDK2==DEV2))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#89BAD3',
 'PLACEHOLDER_FILLCOLORFALSE' : '#D0D8E0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_Label1'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 3;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_170.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_Label2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.SB.S1107_FwdSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170.AA.I8011_AreaNr');
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y1C1.P1Y1C1_1C1CD01_TC015_MU015.SB.S1108_RevSelVisu');
CDK2=GetTagValueAsInteger('P1Y1C1.P1Y1C1_1C1CD01_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y1C1.P1Y1C1_1C1CD01_TC015_MU015.AA.I8011_AreaNr');
 var condition = (Select1 && (CDK1==DEV1)) || (Select2 && (CDK2==DEV2))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#89BAD3',
 'PLACEHOLDER_FILLCOLORFALSE' : '#D0D8E0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_Label2'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 3;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_115.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_LO115'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 2;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_170.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_LO170'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 3;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_170.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_MU170'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 1;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_170.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWB_TC170'});
new emosWS.ESClickSetESVariable({'conditionFunction' : function() {
;
 Value = 1;
 Enabled = true;
return {Value:Value, Enabled:Enabled};
 }, 
 'PLACEHOLDER_VARIABLE' : 'iVis_115.value',
 'PLACEHOLDER_TYPE' : 'Integer',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USEHAND' : true,        
 'PLACEHOLDER_USEHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWBLabel_919I7B8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var Select1;
var CDK1,DEV1;
Select1=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1110_DownSelVisu');
CDK1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C3CD02_CDK.AA.I8011_AreaNr');
DEV1=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
var Select2;
var CDK2,DEV2;
Select2=GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.SB.S1109_UpwSelVisu');
CDK2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C3CD02_CDK.AA.I8011_AreaNr');
DEV2=GetTagValueAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115.AA.I8011_AreaNr');
 var condition = (Select1 && (CDK1==DEV1)) || (Select2 && (CDK2==DEV2))
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : false,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#89BAD3',
 'PLACEHOLDER_FILLCOLORFALSE' : '#D0D8E0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'SWBLabel_919I7B8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 1) && (PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'TC170'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 1) && !(PFwd || PRev)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'TC171'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var PRev, PFwd, Rev, Fwd;
PRev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1069_PRev');
PFwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1068_PFwd');
Rev = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1063_Rev');
Fwd = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170.SB.S1062_Fwd');
 var condition = (iVis_170.value == 1) && (PFwd)
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'TC172'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y1C1.P1Y1C1_1C1CD01_TC015_TC015', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y1C1.P1Y1C1_1C1CD01_TC015_TC015', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C3.P1Y2C3_2C3CD04_2C3DC01_EL080_FX080', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C3.P1Y2C3_2C3CD04_2C3DC01_EL080_FX080', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning_4AAH2PYJPJ'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C3.P1Y2C3_2C3CD04_2C3DC01_EL080_LO080', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C3.P1Y2C3_2C3CD04_2C3DC01_EL080_LO080', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning_4AAH2PYUFC'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C3.P1Y2C3_2C3CD04_2C3DC01_EL080_EL080', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C3.P1Y2C3_2C3CD04_2C3DC01_EL080_EL080', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning_919I8IC'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD01', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD01', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD01', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning_919J5UK'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning0038_4AAH2PZST4'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD03', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD03', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD03', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning0038_4AAH2PZX9V'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning0038_4AAH2PZX9V1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD04', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD04', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD04', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning0038_4AAH2Q01QN'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning0038_4AAH2Q01QN1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt1, myFlt3 = false;
myFlt1 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD07', 'PrioMin1') > 0);
myFlt3 = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD07', 'PrioMin3') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD07', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt1 && !myFlt3
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning0038_4AAH2Q01QN2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y1C1.P1Y1C1_1C1CD01_TC015_LO015', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y1C1.P1Y1C1_1C1CD01_TC015_LO015', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C1.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C1.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'Warning2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1269_CWV') && !GetTagValueAsBoolean('P1Y2C5.P1Y2C5_2C5CD06_IS165.SB.S1268_CFV');
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'warningiconCVUKNTQ_FFL7H7SV8'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH_49NEF28DBP0957'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH_49NEF28DBP958'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_TC170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH_49NEF28DBP959'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH_FE4YB79T0'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH_FE4YB79T1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_MU170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH_FE4YB79T2'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10218_4AAH2PZ08B'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_EL115', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10218_4AAH2PZ08B1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10278_FFG3VEBRE'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_FX115', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10278_FFG3VEBRE1'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD05_LO120_LO120', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10345_4AAH2PT1G7'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10680'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10681'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_TC170_LO170', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10682'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO160_LO160', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10683'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO165_LO165', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10684'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD06_LO175_LO175', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10685'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10687'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var myWrn, myFlt = false;
myFlt = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin1') > 0);
myWrn = (GetAlarmGroupPropertyAsInteger('P1Y2C5.P1Y2C5_2C5CD02_EL115_LO115', 'PrioMin2') > 0);
 var condition = myWrn && !myFlt
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : false,
 'PLACEHOLDER_SWAP_STROKECOLOR' : false,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#FF0000',
 'PLACEHOLDER_FILLCOLORFALSE' : '#00FF00',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#FF0000',
 'PLACEHOLDER_STROKECOLORFALSE' : '#00FF00',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'WarningIconH10688'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD02.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GP_4AAH2PZP8J'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD03.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GP_4AAH2PZTPA'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD03.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GP_4AAH2PZTPA1'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD04.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GP_4AAH2PZY61'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD04.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GP_4AAH2PZY62'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD04.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GP_4AAH2PZY63'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.location.href = '2C3CD01.htm';;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'GPCDKSmallCDK_919J0YQ'});
new emosWS.JSMouseClick({'PLACEHOLDER_MOUSECLICK' : function(object, objects){
 document.cookie = "RFID_PLC=P1Y2C3";document.cookie = "RFID_DBName=.P1Y2C3_2C3CD03_IS070";document.location.href = "RFID.htm";;
 }, 
 'PLACEHOLDER_ENABLECONDITION' : function(object, objects){
 return true;
 },
 'PLACEHOLDER_USEENABLECONDITION' : false, 
 'PLACEHOLDER_RESOLVEGROUP' : '', 
 'shape': 'Rectangle15_4ABW2S6SPQ'});
}
window.addEventListener("load", initialize, false);
