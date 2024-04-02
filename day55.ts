// Difference in NaN equality
console.log(NaN === NaN); // 🙅‍♂️ false
console.log(Object.is(NaN, NaN)); // ✅ true

// Difference in -0 and +0 equality
console.log(-0 === +0); // ✅ true
console.log(Object.is(-0, +0)); // 🙅‍♂️ false

// Object equality is the same!
const obj1 = { data: '123' };
const obj2 = { data: '123' };

console.log(obj1 === obj2); // 🙅‍♂️ false
console.log(Object.is(obj1, obj2)); //  🙅‍♂️ false

// Primitive equality is the same!
console.log('candy' === 'candy'); // ✅ true
console.log(Object.is('candy', 'candy')); // ✅ true
