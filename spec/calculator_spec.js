var jasmineExpect = require( 'jasmine-expect' );
var calculator    = require( "../lib/calculator.js" );

describe("Addition", function() {
  it("1 + 4 = 5", function() {
    expect(calculator.add(1, 4)).toEqual(5);
  });
});

describe("Subtraction", function() {
  it("1 - 4 = 5", function() {
    expect(calculator.subtract(1, 4)).toEqual(-3);
  });
});

describe("Multiplication", function() {
  it("12 * 4 = 48", function() {
    expect(calculator.multiply(12, 4)).toEqual(48);
  });
});

describe("Division", function() {
  it("33 / 11 = 3", function() {
    expect(calculator.divide(33, 11)).toEqual(3);
  });
});

describe("Division by 0 returns NaN", function() {
  it("33 / 11 = 3", function() {
    expect(calculator.divide(99, 0)).toBeNaN();
  });
});

describe("Exponents", function() {
  it("3^4 = 81", function() {
    expect(calculator.pow(3, 4)).toEqual(81);
  });
});
