'use strict';

// Declare app level module which depends on views, and components
var fleetmgntApp = angular.module('fleetmgntApp', [
  'ngRoute',
  'fleetmgntControllers',
  'fleetmgntServices'
]);

fleetmgntApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).otherwise({
        redirectTo: '/'
      });;
}])
