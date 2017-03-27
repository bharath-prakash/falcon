'use strict';

var fleetmgntDirectives = angular.module('fleetmgntDirectives', [])

// Click to navigate
// similar to <a href="#/partial"> but hash is not required, 
// e.g. <div click-link="/partial">
fleetmgntDirectives.directive('clickLink', ['$location', function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $location.path(attrs.clickLink);
                });
            });
        }
    }
}]);

fleetmgntDirectives.directive('rulesForm', function() {
  return {
    restrict: 'E',
    
    templateUrl: 'views/rules-form.html'
  };
});


fleetmgntDirectives.directive('locationDir', function() {

  return {
    restrict: 'E',    
    templateUrl: 'views/location-dir.html'
  };
});

fleetmgntDirectives.directive('mapsGrid', function() {

  return {
    restrict: 'E',    
    templateUrl: 'views/maps-grid.html'
  };
});


