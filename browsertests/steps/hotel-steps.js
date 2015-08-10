var homePage = require('../pages/hotels_home');
var searchResults = require('../pages/hotels_searchresults');

exports.define = function (steps) {

    steps.given("I have navigated to the hotels page", function () {
        homePage.visit();
    });

    steps.when("the page loads", function () {
        homePage.title(function (t) {
            console.log(t);
        });
    });

    steps.then("I can see the accommodation options", function (introText) {
        homePage.introText.getText().then(function (text) {
            text.should.equal('Choose from 100,000 Hotels and Accommodation options worldwide, including 13,000 Frequent Flyer partner Hotels.');
        })
    });

    steps.given("I have entered hotel search criteria", function () {
        homePage.visit();
        homePage.location.click();
        homePage.location.sendKeys('Sydney' + '\n');
    });

    steps.when("I search for hotels", function () {
        homePage.title(function (t) {
            console.log(t);
        });
    });

    steps.then("the search results match my search criteria", function (searchSummaryText) {
        searchResults.searchSummaryText.getText().then(function (text) {
            text.should.equal('in Sydney.');
        })
    });

    steps.given("the Hotels page has loaded", function () {
        homePage.visit();
        homePage.title(function (t) {
            console.log(t);
        });
    });

    steps.when("I select the check-in calendar", function () {
        homePage.checkIn.click();
    });

    steps.then("the date picker opens", function (checkInField) {
        homePage.checkInField.getElementsByClassName('pika-single').then(function (className) {
            className.should.include('pika-single');
        });
        //homePage.checkInField.click();
        //homePage.checkInCalendarDate.getText().then(function (text) {
        //    text.should.equal('12');
        //})
    });

};


