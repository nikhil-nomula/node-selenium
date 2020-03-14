const common = require("../common");
const assert = common.assert;

const add = require("../../app/index").add; 

describe("unit test code", function () { 
    it("should have do the right thing", function ()  { 
        assert.equal(add(3,4), 7); 
    }); 
}); 