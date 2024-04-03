// tsconfig.json

// {
//   "compilerOptions": {
//     "noUnusedParameters": false,
//   },
// }

// No error 🤦🏼‍♂️👎
const addWorldToString = (str: string) => {
  return 'Hello World';
};

// tsconfig.json

// {
//   "compilerOptions": {
//     "noUnusedParameters": true,
//   },
// }

// TSError: 'str' is declared but its value is never read. ✅
const addWorldToString = (str: string) => {
  return 'Hello World';
};
