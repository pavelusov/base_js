var a = 12;
var b = 10;

console.info("a = ", a.toString(2));
console.info("b = ", b.toString(2));

// &
var resultAnd = a & b;
console.log("and " + resultAnd, " = ", resultAnd.toString(2));

var resultOr = a | b;
console.log("or " + resultOr, " = ", resultOr.toString(2));

var resultXor = a ^ b;
console.log("xor " + resultXor, " = ", resultXor.toString(2));
