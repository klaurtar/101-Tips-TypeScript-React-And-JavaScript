interface Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

// CarKeys = 'make' | 'model' | 'year' | 'isElectric'
type CarKeys = keyof Car;

interface AnyNumber {
  [x: number]: string;
}

// AnyNumberKeys = number
type AnyNumberKeys = keyof AnyNumber;

interface AnyString {
  [y: string]: string;
}

// AnyStringKeys = string | number
type AnyStringKeys = keyof AnyString;