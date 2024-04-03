interface Person {
  name: string;
  age: number;
  favoriteFood: string;
}

interface Car {
  make: string;
  model: string;
  age: number;
  fuelType: 'gasoline' | 'diesel' | 'electric';
}

type PersonCarUnion = Person | Car;
type PersonCarIntersection = Person & Car;

// Person OR Car
const personCarUnion: PersonCarUnion = {
  name: 'Meganium',
  age: 17,
  favoriteFood: 'Green Bean Casserole',
};

// Person AND Car
const personCarIntersection: PersonCarIntersection = {
  name: 'Huckleberry',
  age: 17,
  favoriteFood: 'Green Bean Casserole',
  make: 'Fiat',
  model: '500',
  fuelType: 'gasoline',
};

declare function getPersonCarUnion(): PersonCarUnion;
declare function getPersonCarIntersection(): PersonCarIntersection;

const myCarOrPerson = getPersonCarUnion();

// ✅ can ONLY access age, as it's the only shared property between Person or Car
myCarOrPerson.age;

// 🚫 Property 'make' does not exist on type 'PersonCarUnion'.
myCarOrPerson.make;

const myCarAndPerson = getPersonCarIntersection();

// ✅ ALL properties are accessible!
myCarAndPerson.age;
myCarAndPerson.favoriteFood;
myCarAndPerson.fuelType;
