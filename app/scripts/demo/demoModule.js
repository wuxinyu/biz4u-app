
'use strict';

var demoModule =angular
  .module('demoModule', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/demo', {
        templateUrl: 'views/demo/main.html',
        controller: 'MainCtrl'
      });
  });


demoModule.factory('demoService',  function() {
	return new DemoService();
});

demoModule.factory('demoModel', ['demoService', function(demoService) {
	return new DemoModel(demoService);
}]);

demoModule.controller('MainCtrl', ['$scope','demoModel',DemoController]);