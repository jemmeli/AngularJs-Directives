(function(){

	var app = angular.module("directivesModule", []);

	app.directive('helloWorld', function(){
		//$compile
		//DDO => directive definition object
		return{
			template: 'hello world'
		};
	});

}());