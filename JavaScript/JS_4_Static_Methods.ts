class MoneyCounter {
  private total: number;

  constructor(initialAmount: number = 0) {
    this.total = initialAmount;
  }

  static taxAmount(amount: number) {
    return amount * 0.0876;
  }

  add(amount: number): void {
    this.total += amount;
  }

  subtract(amount: number): void {
    this.total -= amount;
  }

  getTotal(): number {
    return this.total;
  }
}

// Call the static method without the new keyword
console.log(MoneyCounter.taxAmount(50)); // 4.38

const myMoney = new MoneyCounter(25);
myMoney.subtract(3);
// new keyword must be called to access non-static methods
console.log(myMoney.getTotal()); // 22
