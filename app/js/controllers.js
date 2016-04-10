'use strict';

/* Controllers */

var rrtClientApp = angular.module('rrtClientApp', []);

rrtClientApp.controller('carController', function($scope) {
  $scope.title = "Admin for Cars and Manufacturers."
  $scope.cars = [
    {'model': 'Focus RS',
     'manufacturer': 'Ford'},
    {'model': 'R8 V10',
     'manufacturer': 'Audi'},
    {'model': 'LaFerrari',
     'manufacturer': 'Ferrari'}
  ];
});
