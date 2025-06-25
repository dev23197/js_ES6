// Math.trunc()
// Math.sign()
// Math.cbrt()
// Math.log2()
// Math.log10()


const number1 = 4.75;
const number2 = -5.9;
const number3 = 27;
const number4 = 8;
const number5 = 1000;

console.log("=== Math.trunc() ===");
console.log(`Math.trunc(${number1}) =`, Math.trunc(number1));  // 4
console.log(`Math.trunc(${number2}) =`, Math.trunc(number2));  // -5

console.log("\n=== Math.sign() ===");
console.log(`Math.sign(${number1}) =`, Math.sign(number1));    // 1
console.log(`Math.sign(${number2}) =`, Math.sign(number2));    // -1
console.log(`Math.sign(0) =`, Math.sign(0));                   // 0
console.log(`Math.sign("Dev") =`, Math.sign("Dev"));           // NaN

console.log("\n=== Math.cbrt() ===");
console.log(`Math.cbrt(${number3}) =`, Math.cbrt(number3));    // 3
console.log(`Math.cbrt(-8) =`, Math.cbrt(-8));                 // -2

console.log("\n=== Math.log2() ===");
console.log(`Math.log2(${number4}) =`, Math.log2(number4));    // 3

console.log("\n=== Math.log10() ===");
console.log(`Math.log10(${number5}) =`, Math.log10(number5));  // 3
