var Page = require('moonraker').Page;

module.exports = new Page({

    url: { value: 'http://www.dev.qf.dlbi.me/content/my-airline/global/en/Testing/archive/hotels.html' },

    introText: { get: function () { return this.element("p[class='intro intro--small']")}},
    location: { get: function () { return this.element("input[name='hotels-form__location']")}},
    checkIn: { get: function () { return this.element("input[id='hotels-form__checkin-date']")}},
    checkInField: { get: function () { return this.element(".pika-single > div > table > tbody > tr > td")}},
    calendarDays: { get: function () { return this.element(".pika-single > div > table > thead > tr > th:nth-child(1)")}}, //Sunday
    checkOut: { get: function () { return this.element("input[id='hotels-form__checkout-date']")}},
    adults: { get: function () { return this.element("input[id='hotels-form__adults']")}},
    children: { get: function () { return this.element("input[id='hotels-form__children']")}},
    infants: { get: function () { return this.element("input[id='hotels-form__infants']")}},
    findHotels: { get: function () { return this.element("button[class='button button--large button--fullwidth']")}},

});
