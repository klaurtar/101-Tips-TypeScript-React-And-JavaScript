interface AnyStringWillWork {
  [key: string]: string;
}

// Adds optional to every property
type OptionalProperties<Type> = {
  [Key in keyof Type]?: Type[Key];
};

type DisplayInApp<Type> = {
  [Key in keyof Type]: boolean;
};

interface Dog {
  name: string;
  favoriteFood: string;
  favoriteToy: string;
  pawColor: string;
  age: number;
}

// ✅ This meets the requirements!
const myStrings: AnyStringWillWork = {
  exercise: 'pull ups',
  cat: 'Wacky',
};

type OptionalDog = OptionalProperties<Dog>;

// type OptionalDog = {
//     name?: string | undefined;
//     favoriteFood?: string | undefined;
//     favoriteToy?: string | undefined;
//     pawColor?: string | undefined;
//     age?: number | undefined;
// }

type DisplayDog = DisplayInApp<Dog>;

// type DisplayDog = {
//     name: boolean;
//     favoriteFood: boolean;
//     favoriteToy: boolean;
//     pawColor: boolean;
//     age: boolean;
// }
