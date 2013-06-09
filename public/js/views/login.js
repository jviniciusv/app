define(['text!templates/login.html'], function(loginTemplate){
	var loginView = Backbone.View.extend({
		el : $("#content"),
		
		initialize: function(){

		},
		
		render : function(){
			this.$el.html(loginTemplate);
		}
	});
	
	return new loginView;
})