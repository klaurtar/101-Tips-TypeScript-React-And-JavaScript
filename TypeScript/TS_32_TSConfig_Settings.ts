// tsconfig.json

// {
//   "compilerOptions": {
//     "noImplicitAny": false
//   }
// }

// No error 🤦🏼‍♂️👎
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// This code will run and cause an error!
reverseString(1941);

// ========================

// tsconfig.json

// {
//   "compilerOptions": {
//     "noImplicitAny": true
//   }
// }

// TSError: Parameter 'str' implicitly has an 'any' type. ✅
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// This code will not run until str is correctly typed!
reverseString(1941);
