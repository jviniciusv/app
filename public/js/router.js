define(['views/login', 'views/register'], function(loginView, registerView){	
		var Model = Backbone.Router.extend({
			initialize: function(){
				$('body').css('background', "lightblue");
			},
			
			currentView : null,
			
			routes: {
				'' : 'index',
				'register' : 'register'
			},
			
			index : function(){
				loginView.render();
			},
			
			register : function(){
				registerView.render();
			}
		});
		
		return new Model;
	

})
