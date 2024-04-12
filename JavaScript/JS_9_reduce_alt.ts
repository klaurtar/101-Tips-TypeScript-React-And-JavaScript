const multiPointInspection = [5, 6, 4, 1, 10];

const multiplyNumbers = (accumulator: number, currentValue: number) =>
  accumulator * currentValue;

const results = multiPointInspection.reduce(multiplyNumbers, 1);

console.log(results); // 1200
