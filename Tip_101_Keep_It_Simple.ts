type ComplicatedTransform<T> = {
  [P in keyof T as P extends string
    ? T[P] extends string
      ? `str_${P}`
      : P
    : P]: T[P] extends number
    ? string
    : T[P] extends boolean
    ? T[P] | undefined
    : T[P] extends any[]
    ? readonly T[P][number][]
    : T[P] extends object
    ? { [SubKey in keyof T[P]]: T[P][SubKey] | null } // Convert nested object properties to nullable
    : T[P];
};

interface Example {
  id: number;
  name: string;
  isActive: boolean;
  tags: string[];
  settings: {
    darkMode: boolean;
    fontSize: number;
  };
}

type TransformedExample = ComplicatedTransform<Example>;

// type TransformedExample = {
//     id: string;
//     str_name: string;
//     isActive: boolean | undefined;
//     tags: readonly string[];
//     settings: {
//         darkMode: boolean | null;
//         fontSize: number | null;
//     };
// }
