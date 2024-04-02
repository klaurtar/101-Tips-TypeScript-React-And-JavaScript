const returnsRightSide = null ?? 'I love pasta';
console.log(returnsRightSide);
// Expected output: "I love pasta"

const returnsLeftSide = 0 ?? 92;
console.log(returnsLeftSide);
// Expected output: 0

// difference between (??) and (||)

// OR (||) considers any FALSY value to equal false
const myString = '' || "I'm not empty";
console.log(myString); // "I'm not empty"

// ?? only considers null or undefined to be nullish
const myEmptyString = '' ?? "I'm not empty";
console.log(myEmptyString); // ''
