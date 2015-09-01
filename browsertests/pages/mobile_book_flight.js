var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: 'http://www.qantas.com.au/mobile-travel/airlines/home/global/en' },

    fromField: { get: function () { return this.element("span[id='mbFrom-auto-placeholder']")}},
    toField: { get: function () { return this.element("span[id='mbTo-auto-placeholder']")}},
    searchButton: { get: function () { return this.element("button[id='search_frm']")}},
    fromSelection: { get: function () { return this.element("#mbFrom-auto-list > ul > li >  a[href='#SYD']")}},
    toSelection: { get: function () { return this.element("#mbFrom-auto-list > ul > li >  a[href='#LHR']")}}


});
