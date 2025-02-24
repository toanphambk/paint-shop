/* 
 * Copyright (c) 2014-2017 Duerr Systems AG. All rights reserved.
 * 
 */
var 	
	serverPool = [location.hostname],
	configURL = `http://${location.hostname}:3000/Framework/config/`,
	serverRoot = "../",	
	helpURL = "../help/",
	writeConfig = "/config/",
	writeJSONURL = "/config/users/",
	writeJSONAPP = "/config/app/",
	uploadImage = "/framework/images/logo1.jpg",
	endpointName = "ws/emosweb",
	serverPort = 8080;
	serverHttpsPort = 443,
	trustedAppServers = [
	];