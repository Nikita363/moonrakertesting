var homePage = require('../pages/cust_collect_home');
var createComp = require('../pages/create_comp');

exports.define = function (steps) {

    steps.given("I have navigated to the customer collection home page", function () {
        homePage.visit();
    });

    steps.when("I view the page", function () {
        homePage.title(function (t) {
            console.log(t);
        });
    });

    steps.then("I can see the list of competitions", function (tableHeadingDownload) {
        homePage.tableHeadingDownload.getText().then(function (text) {
            text.should.equal('Download');
        })
    });

    steps.given("I have loaded the customer collection page", function () {
        homePage.visit();
    });

    steps.when("I add a new competition", function () {
        homePage.createCompBtn.click();
        createComp.compName.click();
        createComp.compName.sendKeys('Moonraker');
        createComp.createBtn.click();
    });

    steps.then("the competition is added to the list of competitions", function () {
        //homePage.custCollectTable.getText().then(function (text) {
        //    text.should.equal('Moonraker')
        //})
    });
};


