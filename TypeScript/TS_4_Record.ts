type MathKeys = 'radius' | 'x' | 'y' | 'z';

type MathProperties = Record<MathKeys, number>;

const myMathProperty: MathProperties = {
  radius: 3.14,
  x: 25.98,
  y: 198.67,
  z: 13.76,
};

// any string key and string value will satisfy this type!
const allStrings: Record<string, string> = {
  example: 'Hey no errors!',
};
