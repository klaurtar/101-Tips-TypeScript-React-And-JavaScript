class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  displayInfo(): string {
    return `Car Make: ${this.make}, Model: ${this.model}`;
  }
}

// Example usage
const myCar = new Car('Ford', 'Mustang');
console.log(myCar.displayInfo());
