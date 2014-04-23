define([
	'backbone',
	'handlebars',
	'text!../templates/navigationView.handlebars',
	'text!../templates/navigationLevel.handlebars'
], function(
	Backbone,
	Handlebars,
	NavigationViewTemplate,
	NavigationLevelTemplate
){
	
	// Handlebars helper: equivalent of: if (v1 == v2)
	Handlebars.registerHelper('ifCond', function(v1, v2, options) {
	  if (v1 === v2) {
	    return options.fn(this);
	  }
  
	  return options.inverse(this);
	});

	// Handlebars helper - iterates through an array of navigation objects and calls a navigation level template for each. 
	Handlebars.registerHelper('navigationHelper', function(info) {
		var html = '';
		var template = Handlebars.compile(NavigationLevelTemplate);
		
		for (var i in info) {
			html += template(info[i]);
		}
		
		return html;
	});
	
	// Core navigation view.
	var NavigationView = Backbone.View.extend({
		el: '#navigation',
		
		template: Handlebars.compile(NavigationViewTemplate),
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			this.$el.append(this.template(this.model.attributes));
		}
	});
	
	return NavigationView;
	
});