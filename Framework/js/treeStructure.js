var grayColorList = ["#FFFFFF", "#F2F2F2", "#E6E6E6", "#DADADA", "#CECECE", "#C2C2C2", "#B6B6B6", "#AAAAAA", "#9E9E9E", "#989898"];
var childWindows = [];
var jsonResult = [];
emosWS.connect();
function loadJsonFile() {

  for (var j = 0; j < jsonResult.length; j++) {
    var eleTarget = $('<ul data-role="listview" data-inset="true" class="treeList ui-listview ui-listview-inset ui-corner-all ui-shadow"></ul>');
    eleTarget[0].id = jsonResult[j].FileName;
    eleTarget[0].level = j;
    eleTarget.appendTo($("#contentTree").find(".widget"));
    for (var i = jsonResult[j].Data.tree.length - 1; i >= 0; i--) {
      generateTree(jsonResult[j].Data.tree[i], eleTarget[0], j);
    }
    drawBorderOnFirstLastElement(getLastElementOnTree(eleTarget[0]), eleTarget[0]);
  }
}

function generateTree(obj_, eleBefore_, iIndex_) {

  var eleItem = document.createElement('li');
  eleItem.id = iIndex_ + "_" + obj_.ID;
 
  if (obj_.DataPoint != "")
    eleItem.dataPoint = obj_.DataPoint;

  eleItem.addEventListener("click", onClickTreeItem, false);

  var counter = obj_.ID.split(".");
  var eleItemLink = document.createElement('a');
  eleItemLink.arrow = "down";
  eleItemLink.innerText = obj_.ShortName;
  eleItemLink.className = "ui-btn";
  eleItemLink.style.backgroundColor = grayColorList[(counter.length - 1) % 10];

  var eleAlarmCircle = document.createElement('div');
  eleAlarmCircle.id = iIndex_ + "_" + obj_.ID + "_Alarm";
  eleAlarmCircle.style.height = "14px";
  eleAlarmCircle.style.width = "18px";
  eleAlarmCircle.style.float = "left";
  eleAlarmCircle.style.marginRight = "4px";
  eleItemLink.appendChild(eleAlarmCircle);

  eleItemLink.style.paddingLeft = ( 5 + (counter.length - 1) * 14).toString() + "px";
  eleItemLink.style.lineHeight = "16px";
  eleItem.appendChild(eleItemLink);
	if(counter == 0)            
		eleBefore_.appendChild(eleItem);
	else 
//    insertAfter(eleItem, eleBefore_);
          $(eleItem).insertAfter(eleBefore_);  

	if (obj_.Name == "AnalogValueElement")
	  emosWS.advise(obj_.Value, ActValueCallback, "", emosWS.tagType.IOObject, "", 1, "", 1, "", 1, "", "");
	else
	  emosWS.advise(obj_.Value, adviseCallback, "", emosWS.tagType.Alarm);
	
	if (obj_.DataPoint != "") {
	  eleItemLink.className = "ui-btn ui-btn-icon-right ui-icon-carat-r";
		eleItemLink.style.paddingTop = "9.4px";
		eleItemLink.style.paddingBottom = "9.4px";
	}
}

function ActValueCallback(msg_) {
    
  if (msg_.quality == 0)
    return;

  for (var i = 0; i < jsonResult.length; i++) {
    var ele = document.getElementById(getTreeElement(msg_.tag, jsonResult[i].Data.tree, i) + "_Alarm");

    if (!ele)
      continue;

    ele.innerText = msg_.value.valueWithSymbol;
    ele.style.width = (msg_.value.valueWithSymbol.length * 7) + "px";
    ele.className = "actValue";
  }
}

function checkNodeName(items_) {

  for (var i = 0; i < items_.length; i++) {
    if (items_[i].Name != "ELEMENT")
      return true;
  }

  return false;
}

function onClickTreeItem(event_) {

  var ele = event_.target.id == "" ? event_.target : event_.target.parentElement;
  if (!ele.parentElement)
    return;

  var eleParent = ele.parentElement;
  var strArrow = ele.arrow;
  var eleParentParent = eleParent.parentElement;
  var eleLastElement = getLastElementOnTree(eleParentParent);
  var bShowDiagnosisWindow = event_.layerX > (window.innerWidth - 40) ? true : false;
  var strID = eleParent.id.substring(eleParentParent.level.toString().length + 1);
  var subItem = getSubObject(jsonResult[parseInt(eleParentParent.level)].Data.tree, strID);

  if (ele.className == "ui-btn ui-btn-icon-right ui-icon-carat-r" && (bShowDiagnosisWindow || subItem.length == 0)) {
    
    var strLongName = getTreeObjectNameByID(strID, jsonResult[parseInt(eleParentParent.level)].Data.tree);
    childWindows = getChildren(jsonResult[parseInt(eleParentParent.level)].Data.tree, strID, strLongName);
    showDiagnosisWindow(strLongName, eleParent.dataPoint);
  } else if (strArrow == "down") {

    for (var i = subItem.length - 1; i >= 0; i--) {
      if (subItem[i].Name != "ELEMENT")
        generateTree(subItem[i], eleParent, eleParentParent.level);
    }

    ele.arrow = "up";
  } else if (strArrow == "up") {

    for (var i = subItem.length - 1; i >= 0; i--) {
      removeTreeElement(eleParentParent.level, subItem[i]);
    }

    ele.arrow = "down";
  }

  drawBorderOnFirstLastElement(eleLastElement, eleParentParent);
}

function getSubObject(obj_, objID_) {

  var objSub;
  for (var i = 0; i < obj_.length; i++) {
    var item = obj_[i];
    if (item.ID == objID_) {
      return item.Items;
      break;
    } else {
      objSub = getSubObject(item.Items, objID_);
      if (objSub)
        return objSub;
    }
  }
  return objSub;
}

function removeTreeElement(strLevel_, obj_) {

  var ele = document.getElementById(strLevel_ + "_" + obj_.ID);

	if (!ele)
		return;

	ele.remove();
	emosWS.unadvise(obj_.Value + ".Alarm", adviseCallback);
	emosWS.unadvise(obj_.Value + "__1__1__1___.Object", ActValueCallback);

	if (obj_.Items.length > 0) {
		for (var i = 0; i < obj_.Items.length; i++) {
		  removeTreeElement(strLevel_, obj_.Items[i]);
		}
	}
}

function getLastElementOnTree(eleTarget_) {

	if (eleTarget_.children)
	  return eleTarget_.children[eleTarget_.children.length - 1];
}

function drawBorderOnFirstLastElement(eleLastElement_, eleTarget_) {

	if (!eleTarget_.children)
		return;
	
	eleLastElement_.className = "";

	var eleFirstChildren = eleTarget_.children[0];
	eleFirstChildren.className = "ui-first-child";
	var eleLastChildren = eleTarget_.children[eleTarget_.children.length - 1];
	eleLastChildren.className += " ui-last-child";
}

function adviseCallback(msg_) {
  if (msg_.value === "" || msg_.quality == 0)
	  return;

  var strTag = msg_.tag.substr(0, msg_.tag.length - 6);

  for (var i = 0; i < jsonResult.length; i++) {
    var ele = document.getElementById(getTreeElement(strTag, jsonResult[i].Data.tree, i) + "_Alarm");
    if (!ele)
      continue;
	  if (msg_.value === "0")
		  ele.className = "error";
	  else if (msg_.value === "1")
		  ele.className = "warn";
	  else if (msg_.value === "2") 
	    ele.className = "fine";
  }
}

function getTreeElement(strName_, obj_, strLevel_) {

	var eldTree;
	for (var i = 0; i < obj_.length; i++) {
		var item = obj_[i];
		if (item.Value == strName_) {
		  return strLevel_ + "_" + item.ID;
		} else {
			eldTree = getTreeElement(strName_, item.Items, strLevel_);
			if (eldTree)
				return eldTree;
		}
	}
	return eldTree;
}

function getTreeObjectNameByID(strID_, obj_) {

  var strTreeName;
  for (var i = 0; i < obj_.length; i++) {
    var item = obj_[i];
    if (item.ID == strID_) {
      return item.Value;
    } else {
      strTreeName = getTreeObjectNameByID(strID_, item.Items);
      if (strTreeName)
        return strTreeName;
      }
  }
  return strTreeName;
}

function getChildren(obj_, objID_, strValue_) {

  var subItem = getSubObject(obj_, objID_);
  if (!subItem)
    return;

  var strValue = strValue_.replace("\n", "");

  var objChildren = [];
  for (var i = 0; i < subItem.length; i++) {
    if (subItem[i].Name == "DeviceGroup") {
      var strComment = subItem[i].DataPoint.split("_");
      var objItem = { Parent: strValue, ID: subItem[i].ID, Name: subItem[i].Name, Value: subItem[i].Value, DataPoint: subItem[i].DataPoint, Comment: strComment[strComment.length - 1] };
        objChildren.push(objItem);
     }
  }
  return objChildren;
}