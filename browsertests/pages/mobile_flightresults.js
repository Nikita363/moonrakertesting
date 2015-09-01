var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: 'http://www.qantas.com.au/mobile-travel/airlines/home/global/en' },

    title: { get: function () { return this.element("h1[class='ui-title']")}}


});
