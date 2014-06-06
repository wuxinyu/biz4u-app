
'use strict';

function DemoController($scope,demoModel) {
	this.scope = $scope;
	this.scope.awesomeThings = ['s','d','df'];
	this.scope.vm = demoModel;
	return (this);
}