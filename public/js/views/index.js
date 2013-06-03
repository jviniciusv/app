define(['text!templates/index.html'], function(indexTemplate){
	var indexView = Backbone.View.extend({
		el : $("#content"),
		
		initialize: function(){
			alert('View instanciada');
		},
		
		render : function(){
			this.$el.html(indexTemplate);
		}
	});
	
	return new indexView;
})