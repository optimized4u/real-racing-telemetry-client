'use strict';

/* jasmine specs for controllers go here */
describe('Real Racing Telemetry Client controllers', function() {

  describe('carController', function() {

    var scope, ctrl, $httpBackend;

    beforeEach(module('rrtClientApp'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/cars.json').
        respond([{ model: 'Atom 3.5' }, { model: 'Atom V8' }]);

      scope = $rootScope.$new();
      ctrl = $controller('carController', { $scope: scope });
    }));

    it('should create "cars" model with 2 cars fetched from xhr', function() {
      expect(scope.cars).toBeUndefined();
      $httpBackend.flush();

      expect(scope.cars).toEqual([{ model: 'Atom 3.5' },
        { model: 'Atom V8' }]);
    });

    it('should create title', inject(function($controller) {
      expect(scope.title).toBe("Admin > Cars and Manufacturers.");
    }));

    it('should set the default value of orderProp manufacturer', function() {
      expect(scope.orderProp).toBe('manufacturerId');
    });
  });
});
