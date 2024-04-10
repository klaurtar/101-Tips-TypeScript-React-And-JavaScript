interface Dog {
  name: string;
}

type Cat = {
  name: string;
};

// Both can be extended!
interface Frank extends Dog {
  favoriteFood: string;
}

type Daisy = Cat & {
  favoriteFood: string;
};

// New fields can be added to an existing interface
interface Car {
  make: string;
}

interface Car {
  model: string;
}

const myToyota: Car = {
  make: 'Toyota',
  model: 'Supra',
};
