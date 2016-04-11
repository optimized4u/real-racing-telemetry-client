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

    it('should be possible to control car order via the drop down select box', function() {

      var carModelColumn = element.all(by.repeater('car in cars').column('car.model'));
      var query = element(by.model('query'));

      function getNames() {
        return carModelColumn.map(function(elm) {
          return elm.getText();
        });
      }
      query.sendKeys('f'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Focus RS",
        "Fusion",
        "LaFerrari"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="manufacturer"]')).click();

      expect(getNames()).toEqual([
        "LaFerrari",
        "Focus RS",
        "Fusion"
      ]);
    });

  });
});
