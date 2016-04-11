'use strict';

/* jasmine specs for controllers go here */
describe('Real Racing Telemetry Client controllers', function() {

  describe('carController', function(){

    var scope, ctrl;

    beforeEach(module('rrtClientApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('carController', {$scope:scope});
    }));

    it('should create "cars" model with 4 cars', inject(function($controller) {
      expect(scope.cars.length).toBe(4);
    }));

    it('should create title', inject(function($controller) {
      expect(scope.title).toBe("Admin for Cars and Manufacturers.");
    }));

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('model');
    });
  });
});
