interface Garden {
  fruit?: boolean;
  vegetables?: boolean;
  soil: boolean;
  sunlight: boolean;
  water: boolean;
}

type EverythingGarden = Required<Garden>;

// type EverythingGarden = {
//     fruit: boolean;
//     vegetables: boolean;
//     soil: boolean;
//     sunlight: boolean;
//     water: boolean;
// }
