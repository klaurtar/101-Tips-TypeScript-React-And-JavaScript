const partialApply = (fn: Function, ...suppliedArgs: any[]) => {
  return (...allOtherArgs: any[]) => {
    return fn(...suppliedArgs, ...allOtherArgs);
  };
};

const multiply = (x: number, y: number): number => {
  return x * y;
};

const multiplyByFive = partialApply(multiply, 5); // Filled in first arg of multiply with 5

console.log(multiplyByFive(6)); // 30
console.log(multiplyByFive(10)); // 50
console.log(multiplyByFive(1.5)); // 7.5
