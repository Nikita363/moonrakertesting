var Page = require('moonraker').Page;

module.exports = new Page({

    url: { value: 'http://www-staging.qantas.com.au/travel/airlines/home/au/en' },

    departureAirport: { get: function () {
        return this.element("input[id='from-city']");
    }},
    destinationAirport: { get: function () {
        return this.element("input[id='to-city']");
    }},
    searchButton: { get: function () {
        return this.element("button[id='flightSearch']");
    }},

    selectAirport: { get: function () {
        return this.element("#to-city-box > div > div > div > ul > li:nth-child(313)");
    }},

    selection: { get: function () {
        return this.element("input[id='to-city-box']");
    }},

    flightsDropDown: { get: function () {
        return this.element("a[class='ui-tab-container']");
    }},

    departDate: { get: function () { return this.element("input[id='flightsDepartTextField']")}},
    returnDate: { get: function () { return this.element("input[id='flightsReturnTextField']")}},
    roundTrip: { get: function () { return this.element("input[id='type-return']")}},
    oneWay: { get: function () { return this.element("input[id='type-oneway']")}},
    flexible: { get: function () { return this.element("input[class='form-group form-checkbox dates-flexible']")}}, //Flexible option is within dates drop downs
    adults: { get: function () { return this.element("input[id='f-adult']")}},
    children: { get: function () { return this.element("input[id='f-child']")}},
    infants: { get: function () { return this.element("input[id='f-infant']")}},
    travelClass: { get: function () { return this.element("input[id='travelClass']")}}, //Only displays once the to and from airports have been selected
    classicRewards: { get: function () { return this.element("input[id='classic-awards']")}},


    selectDepartureAirport: { value: function (airportName) {
        this.departureAirport.sendKeys(airportName);
    }},
    selectDestinationAirport: { value: function (airportName) {
        this.destinationAirport.sendKeys(airportName);
    }},
    search: { value: function () {
        this.searchButton.click();
    }},

    searchForFlight: { value: function (departurePort, destinationPort) {
        this.departureAirport.sendKeys(departurePort + '\n');
        this.destinationAirport.sendKeys(destinationPort + '\n');
        this.searchButton.click();
    }}
});
