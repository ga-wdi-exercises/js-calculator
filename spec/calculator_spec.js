var fs = require("fs")
var solution = fs.readFileSync("calculator.js","utf8")
describe("Solution", function(){
  it("has no syntax errors", function(){
    eval(solution)
  })
  it("defines a calculator object", function(){
    eval(solution)
    expect(typeof calculator).toBe("object")
  })
  it("'s calculator can add", function(){
    eval(solution)
    var sum = calculator.add(7,2)
    expect(sum).toBe(9)
  })
  it("'s calculator can subtract", function(){
    eval(solution)
    var sum = calculator.subtract(7,2)
    expect(sum).toBe(5)
  })
  it("'s calculator can multiply", function(){
    eval(solution)
    var sum = calculator.multiply(7,2)
    expect(sum).toBe(14)
  })
  it("'s calculator can divide", function(){
    eval(solution)
    var sum = calculator.divide(8,2)
    expect(sum).toBe(4)
  })
  it("'s calculator can exponentiate", function(){
    eval(solution)
    var sum = calculator.exponentiate(8,2)
    expect(sum).toBe(64)
  })
})