var mainsvg = "mainsvg";
var gPLC = new GlobalVariable( 'P1Y2C5' );
var gDB = new GlobalVariable( '.zFlags_Logic005' );
var gModel_1 = new GlobalVariable( '[0]' );
var gModel_2 = new GlobalVariable( '[1]' );
var gModel_3 = new GlobalVariable( '[2]' );
var gModel_4 = new GlobalVariable( '[3]' );
var gModel_5 = new GlobalVariable( '[4]' );
var gModel_6 = new GlobalVariable( '[5]' );
var gModel_7 = new GlobalVariable( '[6]' );
var gModel_8 = new GlobalVariable( '[7]' );
var gModel_9 = new GlobalVariable( '[8]' );
var gModel_10 = new GlobalVariable( '[9]' );
var gDBMix = new GlobalVariable( '.Model' );
 emosWS.setSiteProperties(
{
 "BreadcrumbLevel": 0,
 "BreadcrumbText": "Mix Car",
}
);
function initialize() {
 emosWS.connect({onopen: onOpen});
}
function onOpen() {
 animationInitialize(); 
}
function animationInitialize() {
new EScriptGlobal (function(){
});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_1 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O15'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_1 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O15'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_1.value + '.SelectBody[1]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O16'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_1.value + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O16'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_2 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O17'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_2 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O17'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O18'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O18'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[1]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O19'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O19'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[1]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O20'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O20'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_4 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O21'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_4 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O21'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_4 + '.SelectBody[1]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O22'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_4 + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O22'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix + gModel_5 + '.SelectBody[0]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O23'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix + gModel_5 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O23'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_6 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O24'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_6 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O24'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_6 + '.SelectBody[1]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O25'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix+ gModel_6 + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O25'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_4.value + '.SelectBody[2]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O26'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_4.value + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O26'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix + gModel_7 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O27'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix + gModel_7 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O27'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_7 + '.SelectBody[1]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O28'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_7 + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O28'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix + gModel_7 + '.SelectBody[2]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O29'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix + gModel_7 + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O29'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_6.value + '.SelectBody[1]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O30'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_6.value + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O30'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_6.value + '.SelectBody[2]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O31'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_6.value + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O31'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_7.value + '.SelectBody[1]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O32'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_7.value + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O32'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_7.value + '.SelectBody[2]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O33'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_7.value + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O33'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_7.value + '.SelectBody[3]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O34'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_7.value + '.SelectBody[3]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O34'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[2]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O35'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O35'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[2]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O36'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O36'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[3]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O37'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[3]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O37'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[3]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O38'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_3 + '.SelectBody[3]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O38'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[4]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O39'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_3.value + '.SelectBody[4]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O39'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_2.value + '.SelectBody[1]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O40'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_2.value + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O40'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_5 + '.SelectBody[0]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O42'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_5 + '.SelectBody[0]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O42'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB + gDBMix + gModel_5 + '.SelectBody[1]';
 Value = '-1';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O43'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB + gDBMix + gModel_5 + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : false,
 'PLACEHOLDER_VISIBILITYFALSE' : true,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O43'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_5.value + '.SelectBody[1]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O44'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_5.value + '.SelectBody[1]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O44'});
new emosWS.ESClickWrite({'conditionFunction' : function() {
; 
 Tag = gPLC.value + gDB.value + gDBMix +gModel_5.value + '.SelectBody[2]';
 Value = '0';
 Enabled = true;
return {Tag:Tag, Value:Value, Enabled:Enabled};
 },
 'PLACEHOLDER_FUNCTION' : '',
 'PLACEHOLDER_USESTROKE' : false,
 'PLACEHOLDER_USESHAND' : true,
 'PLACEHOLDER_USESHIDE' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O45'});
new emosWS.ESColorSwap({'conditionFunction' : function() {
 var condition = GetTagValueAsBoolean(gPLC.value + gDB.value + gDBMix +gModel_5.value + '.SelectBody[2]')
 return condition;
 },
 'PLACEHOLDER_SWAP_FILLCOLOR' : true,
 'PLACEHOLDER_SWAP_STROKECOLOR' : true,
 'PLACEHOLDER_SWAP_VISIBILITY' : true,
 'PLACEHOLDER_SWAP_USETRUE' : true,
 'PLACEHOLDER_SWAP_USEFALSE' : true,
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_FILLCOLOR' : '#80FF80',
 'PLACEHOLDER_FILLCOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'PLACEHOLDER_STROKECOLOR' : '#80FF80',
 'PLACEHOLDER_STROKECOLORFALSE' : '#C0C0C0',
 'PLACEHOLDER_VISIBILITY' : true,
 'PLACEHOLDER_VISIBILITYFALSE' : false,
 'PLACEHOLDER_SWAP_HIDEIFQUALITYBAD' : false,
 'STDPLACEHOLDER_SHAPENAME' : 'IYYTBJKHHQQX_49POU759O45'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle14'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle15'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[2].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[2].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle16'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[2].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[2].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle17'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[3].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[3].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle18'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[3].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[3].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle19'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix + gModel_1.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle20'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix+ gModel_3.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle21'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix+ gModel_4.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle22'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[6].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[6].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle23'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix+ gModel_6.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle24'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix+ gModel_7.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle25'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix+ gModel_5.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle26'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[6].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[6].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle27'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[4].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[4].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle28'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[4].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[4].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle29'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[5].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[5].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle30'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[5].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[5].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle31'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = GetTagValueAsString(gPLC.value + gDB.value+ gDBMix+ gModel_2.value + '.CurQuant');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle32'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'CE' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[4]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[5]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle33'});
new emosWS.ESDynamicText({'conditionFunction' : function() {
; 
 Text = 'D0' + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[2]') + GetTagValueAsString(gPLC.value + gDBMix+ '.AS.Data[1].M1005_Modell[3]');;
 Enabled = true;
return {'Text' : Text, 'Enabled' : Enabled};
 },
 'PLACEHOLDER_SWAP_USEQUALITY' : false,
 'PLACEHOLDER_STROKECOLORQUALITYGOOD' : '#000000',
 'PLACEHOLDER_STROKECOLORQUALITYBAD' : '#FF8000',
 'STDPLACEHOLDER_SHAPENAME' : 'Rectangle34'});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV10', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_6+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV11', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_7+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV12', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_5+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV6', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_1+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV7', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_3+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV8', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_4+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.InputText({'uiID': 'AAA_49POU75KQV9', 'text': '' , 'maxlength': '1', 'pattern': '', 'font-size' : '16', 'onchange': function(text, object){
var myText;
myText = text;
SetTagValue(true,gPLC.value + gDB + gDBMix + gModel_2+ '.SetQuant', myText)
},'onkeypress': function(e, object){}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE12', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){

emosWS.poke(gPLC.value + gDB.value + gDBMix + gModel_1 + '.TopCoatColorMain',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE13', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_1 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE14', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_3 + '.TopCoatColorMain',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE15', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_3 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE16', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_4 + '.TopCoatColorMain',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE17', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_4 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE18', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_5 + '.TopCoatColorMain',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE19', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_5 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE20', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_6 + '.TopCoatColorMain',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE21', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_6 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE22', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_7 + '.TopCoatColorMain',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE23', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_7 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE24', 'options': ['____','_ALL','D01B','D01C','D01D','D01E','D016','D020','D011','D012','D013','D014','D015','D017','D019'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB + gDBMix + gModel_2 + '.Country',selectedText);
}});
new emosWS.ComboBox({'uiID': 'Group_4F7SRT5DVE25', 'options': ['____','_ALL','CE11','CE12','CE13','CE14','CE15','CE16','CE17','CE1H','CE1K','CE1A','CE1M','CE18','CE1N','CE1Q','CE1P','CE1O','CE1R'], 'onchange': function(selectedText, selectedValue, object){
emosWS.poke(gPLC.value + gDB.value + gDBMix + gModel_2 + '.TopCoatColorMain',selectedText);
}});
}
window.addEventListener("load", initialize, false);
