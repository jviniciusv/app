define(['text!templates/register.html'], function(registerTemplate){
	var RegisterView = Backbone.View.extend({
		el: $('#content'),
		
		events : {
			'click .show_face' : 'showface'
		},
		
		render: function(){
			this.$el.html(registerTemplate);			
		},
		
		showface: function(){
			$('.face').toggle();
		}
	});
	
	return new RegisterView;
})