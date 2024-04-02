interface ThingInfo {
  id: number;
  name: string;
}

const favoritePets: ThingInfo[] = [
  { id: 123, name: 'Wacky' },
  { id: 45, name: 'Daisy' },
  { id: 345, name: 'Neezer' },
];

const favoriteThings: ThingInfo[] = [
  { id: 13, name: 'Playstation' },
  { id: 45, name: 'Daisy' },
  { id: 87, name: 'Computer' },
];

// O(n^2) Time Complexity
let isPresent;

for (let i = 0; i < favoritePets.length; i += 1) {
  const pet = favoritePets[i];
  for (let j = 0; j < favoriteThings.length; j += 1) {
    const thing = favoriteThings[j];
    if (pet.id === thing.id) {
      isPresent = true;
      break;
    }
  }
}

console.log(isPresent); // true

// Linear Complexity O(n) ✅
const petsMap = new Map([
  ...favoritePets.map((pet, index): [number, number] => {
    return [pet.id, index];
  }),
]);

const petExistsInThing = favoriteThings.some((thing) => petsMap.has(thing.id));

console.log(petExistsInThing); // true
