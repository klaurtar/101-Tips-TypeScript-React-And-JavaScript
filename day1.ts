// Not Curried
const logger = (
  fileName: `${string}.${'tsx' | 'ts'}`,
  fnName: string,
  msg: string
) => console.log(`${fileName} -> ${fnName} -> ${msg}`);

// Curried ✅
// call it like curriedLogger('example.ts')('myFn')('It worked!')
// output to console: example.ts -> myFn -> It worked!
const curriedLogger =
  (fileName: `${string}.${'tsx' | 'ts'}`) =>
  (fnName: string) =>
  (msg: string) =>
    console.log(`${fileName} -> ${fnName} -> ${msg}`);

const fileLogger = curriedLogger('MyCoolFile.tsx');

const fetchStuff = () => {
  const fnLogger = fileLogger('fetchStuff');
  try {
    // do some async call
    fnLogger('Successful fetch'); // MyCoolFile.tsx -> fetchStuff -> Successful fetch
  } catch (err) {
    //something went wrong
    fnLogger(`Error: ${err}`); // MyCoolFile.tsx -> fetchStuff -> Error: ...
  }
};

fetchStuff();
