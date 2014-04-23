define(['backbone'], function(Backbone){
	var NavigationItem = Backbone.Model.extend({	
		url: 'rest/navigation',
		
		defaults: {
			title: '',
			value: '',
			type: '',
			navigation: []
		}
	});
	
	return NavigationItem;
});