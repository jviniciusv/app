define(['text!templates/register.html'], function(registerTemplate){
	var RegisterView = Backbone.View.extend({
		el: $('#content'),
		
		render: function(){
			this.$el.html(registerTemplate);			
		}
	});
	
	return new RegisterView;
})