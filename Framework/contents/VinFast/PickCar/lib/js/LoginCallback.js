"use strict";

var WS_SESSION_COOKIE_TEXT = "EMOS_WS_SESSION",
    CAS_ST_TICKET = "CASSTTICKET",
    CAS_USER_LOGGED_OFF = "CASUSERLOGGEDOFF",
    GET_USER_INFO = "GETUSERINFO",
    USER_INFO = "USERINFO",
    TRUST_DOMAIN = "*",
    infoCallback = null;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function logOut() {
    if (mywindow) {
        mywindow.postMessage(JSON.stringify({ type: CAS_USER_LOGGED_OFF }), TRUST_DOMAIN);
    }
}

function getInfo(callback) {
    infoCallback = callback;
    if (mywindow) {
        mywindow.postMessage(JSON.stringify({ type: GET_USER_INFO }), TRUST_DOMAIN);
    }
}


var ticket = getParameterByName('ticket');
var mywindow = window.opener || window.parent;
if (mywindow) {
    mywindow.postMessage(JSON.stringify({ type: CAS_ST_TICKET, ticket: ticket }), TRUST_DOMAIN);
}
if (window.opener) {
    window.close();
}

window.addEventListener("message", function(event) {
    /*if (event.origin !== window.TRUST_DOMAIN)
     return;*/

    var data = JSON.parse(event.data);    
    //console.log("receive postmessage from: " + event.origin + " / data" + event.data);
    switch (data.type) {
        case USER_INFO:            
            if (infoCallback)
                infoCallback(data);

            break;

        default:
            break;
    }
}, false);