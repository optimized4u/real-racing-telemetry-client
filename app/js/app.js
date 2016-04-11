'use strict';

/* App Module */

var rrtClientApp = angular.module('rrtClientApp', [
  'ngRoute',
  'rrtClientAppControllers'
]);

rrtClientApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cars', {
        templateUrl: 'partials/car-list.html',
        controller: 'CarListCtrl'
      }).
      when('/cars/:carId', {
        templateUrl: 'partials/car-detail.html',
        controller: 'CarDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cars'
      });
  }]);
