'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Real Racing Telemetry Client App', function() {

  describe('Car list view', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/app/index.html');
    });


    it('should filter the car list as a user types into the search box', function() {

      var carList = element.all(by.repeater('car in cars'));
      var query = element(by.model('query'));

      expect(carList.count()).toBe(4);

      query.sendKeys('ford');
      expect(carList.count()).toBe(2);

      query.clear();
      query.sendKeys('audi');
      expect(carList.count()).toBe(1);
    });
  });
});
