define(['mockjax', 'text!navigation/mock/navigationJSON.js'], function(Mockjax, NavigationJSON) {
	
	$.mockjax({
		url: 'rest/navigation',
		responseTime: 750,
		dataType: 'json',
		contentType: 'application/json',
		responseText: NavigationJSON,
		type: 'GET',
		status: 200
	});
	
});