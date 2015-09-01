var Page = require('moonraker').Page;

module.exports = new Page({

    url: { value: 'http://cust-collection-master-8.aws.qantas.com.au/#/competition/new' },

    compName: { get: function () { return this.element(".col-xs-10 > input[id='competition-name']")}},
    createBtn: { get: function () { return this.element("button[class='btn btn-success']")}},
    compTitle: { get: function () { return this.element(".ng-scope > div > div > h1")}}

});