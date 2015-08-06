var Page = require('moonraker').Page;

module.exports = new Page({

    url: { value: 'http://www.dev.qf.dlbi.me/content/my-airline/global/en/Testing/archive/hotels.html' },

    searchSummaryText: { get: function () { return this.element("p[class='summary-location']")}},

});