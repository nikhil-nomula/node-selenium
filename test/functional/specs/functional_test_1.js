
const common = require("../../common");
const assert = common.assert;

const { promise } = require('selenium-webdriver');
promise.USE_PROMISE_MANAGER = false;

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var path = require('path');
chai.use(chaiAsPromised);
chai.should();

var webdriver = require("selenium-webdriver"),
    chrome = require("selenium-webdriver/chrome"),
    driver;


var googleUrl = "http://www.google.com";

before(function() {
    driver = new webdriver.Builder()
    .forBrowser("chrome")
    .build(); 

    driver.get(googleUrl)
                .then(() => console.log("Done fetching the Google url: " + googleUrl))
                .catch((err) => console.log("Error while fetching the url", err));
})

describe("Google page loads", function () {

    it("sample title test", function () {

        return driver.getTitle().then((title) => {
            assert.equal('Google', title);
        }).catch((err) => {
                    console.log(err)
                    throw {
                        msg: "Error while fetching title!!"
                    }
                });

    });

});

after(function() {
    return driver.quit();
})
