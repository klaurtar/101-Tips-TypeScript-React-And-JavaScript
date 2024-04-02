type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Building {
  height: number;
  numberOfFloors: number;
  name: string;
}

type LazyBuilding = Getters<Building>;

// type LazyBuilding = {
//   getHeight: () => number;
//   getNumberOfFloors: () => number;
//   getName: () => string;
// };
