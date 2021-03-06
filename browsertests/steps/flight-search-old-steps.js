var homePage = require('../pages/oldhome');
var flightresultsPage = require('../pages/flightresultspage');

exports.define = function (steps) {

    steps.given("I visit the home page", function () {
        homePage.deleteAllCookies();
        homePage.visit();
    });

    steps.given("I visit the home page on a tablet device", function () {
        homePage.visit();
        var session = require('moonraker').session;
        session.resizeWindow(500, 300);
    });

    steps.when("I enter flight search criteria", function () {
        homePage.departureAirport.click();
        homePage.selectDepartureAirport('syd');
        homePage.destinationAirport.sendKeys('lhr');
        homePage.airportSelection.click();
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
