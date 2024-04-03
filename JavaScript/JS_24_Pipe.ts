function pipe(...fns: Function[]) {
  return function piped(v: any) {
    for (let fn of fns) {
      v = fn(v);
    }
    return v;
  };
}

// Example usage with type annotations for each function in the pipeline
const deductFederalIncomeTaxRate: (salary: number) => number = (salary) =>
  salary * 0.9;
const deductFICA: (salary: number) => number = (salary) => salary * 0.92;
const deductStateTaxRate: (salary: number) => number = (salary) =>
  salary * 0.95;
const calcBiWeeklyPay: (salary: number) => number = (salary) => salary / 26;
const deduct401kContribution: (salary: number) => number = (salary) =>
  salary * 0.95;
const convertToCurrency: (amount: number) => string = (amount) =>
  `$${amount.toFixed(2)}`;

const netPayPerBiWeeklyPaycheck = pipe(
  deductFederalIncomeTaxRate,
  deductFICA,
  deductStateTaxRate,
  calcBiWeeklyPay,
  deduct401kContribution,
  convertToCurrency
)(52500);

console.log(netPayPerBiWeeklyPaycheck); //  "$1508.91"
