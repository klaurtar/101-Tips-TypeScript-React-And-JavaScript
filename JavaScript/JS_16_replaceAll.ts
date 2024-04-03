const alexanderParagraph = `
  Alexander the Great, known for his unparalleled achievements as a military commander, was born in 356 BC.
  Alexander, tutored by Aristotle, developed a thirst for conquest early in his life.
  By the age of thirty, Alexander had created one of the largest empires of the ancient world.
  Today, Alexander remains a legendary figure in history, symbolizing the might and ambition of ancient Macedonia.
`;

// ✅ Replace all instances of Alexander with Bob!
const bobParagraph = alexanderParagraph.replaceAll(/Alexander/gi, 'Bob');

console.log(bobParagraph);
// Bob the Great, known for his unparalleled achievements as a military commander, was born in 356 BC.
// Bob, tutored by Aristotle, developed a thirst for conquest early in his life.....
