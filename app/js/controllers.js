'use strict';

/* Controllers */

var rrtClientApp = angular.module('rrtClientApp', []);

rrtClientApp.controller('carController', function($scope, $http) {

  $scope.title = 'Admin > Cars and Manufacturers.'

  $http.get('data/cars.json').success(function(data) {
    $scope.cars = data;
  });
  // dropdown order by default selection.
  $scope.orderProp = 'manufacturerId';
});
