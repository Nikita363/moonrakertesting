var homePage = require('../pages/mobilehome');
var bookFlight = require('../pages/mobile_book_flight');
var flightResults = require('../pages/mobile_flightresults');


exports.define = function (steps) {

    steps.given("I visit the home page", function () {
        homePage.visit();
    });

    steps.when("I enter flight search criteria", function () {
        homePage.bookFlightLink.click();
        bookFlight.fromField.click();
        bookFlight.fromField.sendKeys('syd');
        bookFlight.fromSelection.click();
        bookFlight.toField.click();
        bookFlight.toField.sendKeys('lhr');
        bookFlight.toSelection.click();
    });

    steps.when('I search for flights', function () {
        bookFlight.searchButton.click();
    });

    steps.then("I can see a '$heading' title", function (title) {
        flightResults.title.getText().then(function (text) {
            text.should.equal(title);
        });
    });

};
