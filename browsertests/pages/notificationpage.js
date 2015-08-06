var Page = require('moonraker').Page;

module.exports = new Page({

  url: { value: '/tripflowapp/flights.tripflow' },

  heading: { get: function () { return this.element("h1"); } }

});
