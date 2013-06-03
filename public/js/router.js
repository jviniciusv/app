define(['views/index', 'views/register'], function(indexView, registerView){	
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
				indexView.render();
			},
			
			register : function(){
				registerView.render();
			}
		});
		
		return new Model;
	

})
