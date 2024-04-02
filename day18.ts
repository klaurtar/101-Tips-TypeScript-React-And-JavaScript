interface MeasurementManager {
  calculateDiameter: () => number;
  title: string;
  calculateTime: () => number;
  setTime: () => number;
  receipts: string[];
}

type TypeTransformer<T> = {
  [Property in keyof T]: Property extends `calculate${string}`
    ? number
    : T[Property];
};

type TransformedMeasuments = TypeTransformer<MeasurementManager>;

// ✅ All properties with the word 'calculate' have been transformed to return type number!
// type TransformedMeasuments = {
//   calculateDiameter: number;
//   title: string;
//   calculateTime: number;
//   setTime: () => number;
//   receipts: string[];
// };
