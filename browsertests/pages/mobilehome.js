var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: 'http://www.qantas.com.au/mobile-travel/airlines/home/global/en' },

    bookFlightLink: { get: function () { return this.element("a[href='/mobile-travel/airlines/book-flight/global/en']")}}


});
