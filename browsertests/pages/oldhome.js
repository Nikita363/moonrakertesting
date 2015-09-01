var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: 'http://www.qantas.com.au/' },

  departureAirport: { get: function () {
    return this.element("input[name='intFrom']");
  }},
  destinationAirport: { get: function () {
    return this.element("input[name='intTo']");
  }},
  searchButton: { get: function () {
    return this.element("button[tabindex='15']");
  }},

    airportSelection: { get: function () {
        return this.element("a[class='ui-corner-all']");
    }},

    departDate: { get: function () { return this.element("input[id='intDepart']")}},
    returnDate: { get: function () { return this.element("input[id='intReturn']")}},
    roundTrip: { get: function () { return this.element("input[id='type-return']")}},
    oneWay: { get: function () { return this.element("input[id='type-oneway']")}},
    flexible: { get: function () { return this.element("input[id='dates-flexible']")}},
    adults: { get: function () { return this.element("input[name='intAdults']")}},
    children: { get: function () { return this.element("input[name='intChildren']")}},
    infants: { get: function () { return this.element("input[name='intInfants']")}},
    travelClass: { get: function () { return this.element("input[id='intTravelClass']")}},
    classicRewards: { get: function () { return this.element("input[id='intClassicShowCheckBoxspan']")}},


  selectDepartureAirport: { value: function (airportName) {
    this.departureAirport.sendKeys(airportName + '\n');
  }},
  selectDestinationAirport: { value: function (airportName) {
    this.destinationAirport.sendKeys(airportName + '\n');
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
