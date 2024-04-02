interface CarRequirements {
  engine: string;
  seats: string;
  vin: number;
  wheels: string;
}

// is missing the following properties from type 'CarRequirements': seats, vin, wheels
const myCar: CarRequirements = {
  engine: '6.0 Liter',
};

// ✅ Partially contains properties of CarRequirements. No errors
const myPartialCar: Partial<CarRequirements> = {
  engine: '6.0 Liter',
};
