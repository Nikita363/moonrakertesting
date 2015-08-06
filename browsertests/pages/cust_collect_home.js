var Page = require('moonraker').Page;

module.exports = new Page({

    url: { value: 'http://cust-collection-master-8.aws.qantas.com.au/#/competitions' },

    custCollectTable: { get: function () { return this.element("input[id='competition-table']")}},
    tableHeadingId: { get: function () { return this.element("#competition-table > thead > tr > th:nth-child(1)")}},
    tableHeadingName: { get: function () { return this.element("#competition-table > thead > tr > th:nth-child(2)")}},
    tableHeadingDownload: { get: function () { return this.element("#competition-table > thead > tr > th:nth-child(3)")}},
    createCompBtn: { get: function () { return this.element("a[href='#/competition/new']")}}

});