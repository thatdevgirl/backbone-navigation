require.config({ 
	'baseUrl': 'scripts/',
	
    'paths': { 
    	'jquery': 'lib/jquery-1.12.4.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone-min',
		'handlebars': 'lib/handlebars',
		'text': 'lib/text',
		
		'mockjax': 'lib/jquery.mockjax',
		'navigationMockService': 'navigation/mock/navigationMockService'
	},
	'shim': {
		backbone: {
			'deps': ['jquery', 'underscore', 'navigationMockService'],
			'exports': 'Backbone'
		},
		handlebars: {
			'exports': 'Handlebars'
		}
	}	
}); 

require(['navigation/models/navigation', 'navigation/views/navigationView'], function(Navigation, NavigationView) {
	// Get model; data supplied via mocked REST call via mockjax.
	var navigation = new Navigation();
	navigation.fetch({async: false});
	
	// Displey the view.
	var navigationView = new NavigationView({model: navigation});
});