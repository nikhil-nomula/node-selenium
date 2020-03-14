var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var path = require("path");
chai.use(chaiAsPromised);
chai.should();

exports.assert = chai.assert;
exports.chai = chai;
exports.chaiAsPromised = chaiAsPromised;
exports.path = path;

