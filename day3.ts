const pets: string[] = ['Lucky', 'Rocky', 'Meowser', 'Larry', 'Fluffington'];

// Old Way 🚫
console.log(pets[pets.length - 1]); // Fluffington

// New Way Using .at ✅
console.log(pets.at(-1)); // Fluffington
console.log(pets.at(-3)); // Meowser
console.log(pets.at(0)); // Lucky
console.log(pets.at(1)); // Rocky
