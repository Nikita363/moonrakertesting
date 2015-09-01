var newHomePage = require('../pages/newhome');
var flightresultsPage = require('../pages/flightresultspage');

exports.define = function (steps) {

    steps.given("I visit the home page", function () {
        newHomePage.visit();
    });

    steps.when("I enter flight search criteria", function () {
        newHomePage.destinationAirport.click();
        newHomePage.destinationAirport.sendKeys('lhr');
        newHomePage.selectAirport.click();
        newHomePage.departDate.sendKeys('\t');
        newHomePage.returnDate.sendKeys('\t');
    });

    steps.when('I search for flights', function () {
        newHomePage.searchButton.click();
    });

    steps.then("I can see a '$heading' title", function (heading) {
        flightresultsPage.heading.getText().then(function (text) {
            text.should.equal(heading);
        });
    });

};
