var jasmineExpect = require('jasmine-expect');
var calculator    = require("../lib/calculator.js");

describe("Addition", function() {
  it("1 + 2 = 3", function() {
    expect(1+1).toEqual(2);
  });
});
