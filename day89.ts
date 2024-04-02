const repeater = (phrase: string, repeatCount: number) => {
  return phrase.repeat(repeatCount);
};

type RepeaterParams = Parameters<typeof repeater>;
// type RepeaterParams = [phrase: string, repeatCount: number]

const repeatMe: RepeaterParams = ['I love JavaScript! ', 2];

console.log(repeater(...repeatMe)); // "I love JavaScript! I love JavaScript! "

// Access Parameters by index

function processData<T extends object>(data: T, callbackFn: (arg: T) => void) {
  callbackFn(data);
}

type ProcessDataParams = Parameters<typeof processData>;
// type ProcessDataParams = [data: object, callbackFn: (arg: object) => void]

const inventory: ProcessDataParams[0] = {
  mixer: 2,
  whisk: 1,
  spoons: 4,
};

const printInventory: ProcessDataParams[1] = (
  inventory: ProcessDataParams[0]
) => {
  console.log(Object.keys(inventory));
};

processData(inventory, printInventory); // ["mixer", "whisk", "spoons"]
