'use strict';

/* Controllers */

var rrtClientAppControllers = angular.module('rrtClientAppControllers', []);

rrtClientAppControllers.controller('CarListCtrl', ['$scope', '$http',
  function($scope, $http) {

  $http.get('data/cars.json').success(function(data) {
    $scope.cars = data;
  });
  // dropdown order by default selection.
  $scope.orderProp = 'manufacturerId';
  // page title
  $scope.title = 'Admin > Cars and Manufacturers.';
}]);

rrtClientAppControllers.controller('CarDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.carId = $routeParams.carId;
  }]);
