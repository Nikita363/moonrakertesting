var homePage = require('../pages/newhome');
var flightresultsPage = require('../pages/flightresultspage');

exports.define = function (steps) {

  steps.given("I visit the home page", function () {
    homePage.visit();
  });

    steps.when("I enter flight search criteria", function () {
        homePage.destinationAirport.click();
        homePage.destinationAirport.sendKeys('lhr');
        homePage.selectAirport.click();
        homePage.departDate.sendKeys('\t');
        homePage.returnDate.sendKeys('\t');
    });

  steps.when('I search for flights', function () {
          homePage.searchButton.click();
  });

  steps.then("I can see a '$heading' title", function (heading) {
    flightresultsPage.heading.getText().then(function (text) {
      text.should.equal(heading);
    });
  });

};
