'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Real Racing Telemetry Client App', function() {

  describe('Car list view', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/app/index.html#/cars');
    });


    it('should filter the car list as a user types into the search box', function() {

      var carList = element.all(by.repeater('car in cars'));
      var query = element(by.model('query'));

      expect(carList.count()).toBe(142);

      query.sendKeys('atom');
      expect(carList.count()).toBe(2);

      query.clear();
      query.sendKeys('r8');
      expect(carList.count()).toBe(3);
    });

    it('should be possible to control car order via the drop down select box', function() {

      var carModelColumn = element.all(by.repeater('car in cars').column('car.model'));
      var query = element(by.model('query'));

      function getNames() {
        return carModelColumn.map(function(elm) {
          return elm.getText();
        });
      }
      query.sendKeys('fo'); //let's narrow the dataset to make the test assertions shorter

      expect(getNames()).toEqual([
        "Focus RS",
        "Ford GT",
        "Ford GT FIA GT1"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="-model"]')).click();

      expect(getNames()).toEqual([
        "Ford GT FIA GT1",
        "Ford GT",
        "Focus RS"
      ]);
    });

    it('should redirect index.html to index.html#/cars', function() {
      browser.get('http://localhost:8000/app/index.html');
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toEqual('/cars');
      });
    });

    describe('Phone detail view', function() {

      beforeEach(function() {
        browser.get('http://localhost:8000/app/index.html#/cars/56e7037afd49655015a00621');
      });


      it('should display placeholder page with carId', function() {
        expect(element(by.binding('carId')).getText()).toBe('56e7037afd49655015a00621');
      });
    });

  });
});
