"use strict";

var WS_AUTH_STATUS_TEXT = "EMOS_AUTH";

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var action = getParameterByName("action");

try {
	switch(action){
		case "add":			
			localStorage.setItem(WS_AUTH_STATUS_TEXT, "1");
			break;
			
		case "delete":
			localStorage.removeItem(WS_AUTH_STATUS_TEXT);
			break;

		default:
			break;
	}
} catch(e){	
}

window.close();