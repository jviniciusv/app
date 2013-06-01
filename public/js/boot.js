require.config({
	paths: {
		jQuery : '/js/libs/jquery',
		Underscore : '/js/libs/underscore',
		Backbone : '/js/libs/backbone',
		text : '/js/libs/text',
		templates : '../templates'
	},
	
	shim: {
		'Backbone' : ['Underscore', 'jQuery'],
		'MiniSurvey' : ['Backbone']
	}
});

require(['MiniSurvey'], function(MiniSurvey){
	MiniSurvey.initialize();
})