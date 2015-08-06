var Page = require('moonraker').Page;

module.exports = new Page({

    url: { value: 'http://www.dev.qf.dlbi.me/content/my-airline/global/en/Testing/archive/hotels.html' },

    introText: { get: function () { return this.element("p[class='intro intro--small']")}},
    location: { get: function () { return this.element(".main > div > div > div > div > selection > div > div > form > div > div > div > div > input[name='hotels-form__location']")}},
    checkIn: { get: function () { return this.element("input[id='hotels-form__checkin-date']")}},
    checkOut: { get: function () { return this.element("input[id='hotels-form__checkout-date']")}},
    adults: { get: function () { return this.element("input[id='hotels-form__adults']")}},
    children: { get: function () { return this.element("input[id='hotels-form__children']")}},
    infants: { get: function () { return this.element("input[id='hotels-form__infants']")}},
    findHotels: { get: function () { return this.element("button[class='button button--large button--fullwidth']")}},


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
