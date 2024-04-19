class Person {
  #firstName;
  #lastName;
  constructor(firstName: string, lastName: string) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst();
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  #lastFirst() {
    return `${this.#lastName} ${this.#firstName}`;
  }
}

const person = new Person('John', 'Doe');
console.log(person.getFullName()); // 'John Doe'
console.log(person.#lastFirst()); // Not accessible
