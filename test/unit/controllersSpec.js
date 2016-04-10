'use strict';

/* jasmine specs for controllers go here */
describe('Real Racing Telemetry Client controllers', function() {

  describe('carController', function(){

    beforeEach(module('rrtClientApp'));

    it('should create "cars" model with 3 cars', inject(function($controller) {
      var scope = {},
          ctrl = $controller('carController', {$scope:scope});

      expect(scope.cars.length).toBe(3);
    }));

    it('should create title', inject(function($controller) {
      var scope = {},
          ctrl = $controller('carController', {$scope:scope});

      expect(scope.title).toBe("Admin for Cars and Manufacturers.");
    }));

  });
});
