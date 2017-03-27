'use strict';

/* Services */

var fleetmgntServices = angular.module('fleetmgntServices', ['ngResource']);

fleetmgntServices.factory('Login', ['$resource',
  function($resource){
    return $resource('logins/:userId.json', {}, {
      query: {method:'GET', params:{userId:'logins'}, isArray:true}
    });
  }]);

fleetmgntServices.factory('DialogController',['$scope','$mdDialog',
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}]);


fleetmgntServices.factory('Navigate',['$scope','$location',
function ($scope,$location) {
return {
  go : function(param){
    console.log(param);
    $location.path(param);
  }
}

  
}]);

fleetmgntServices.factory('GetGeoLocation', ['$http','$rootScope','$q',
  function($http,$rootScope,$q){
    return {
      getMapData: function(lat,long){
        var mapData, urlBase = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';  
        return  $http.get(urlBase+lat+','+long+'&sensor=true')
                .then(function(response) {
                        if (typeof response.data === 'object') {
                            //return response.data;

                            mapData = response.data;
                            //console.log(mapData);
                            //console.log(mapData.results[0]);
                            return mapData.results[0];
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        return $q.reject(response.data);
                    });    
      
                }

          };
    
     
  }]);



