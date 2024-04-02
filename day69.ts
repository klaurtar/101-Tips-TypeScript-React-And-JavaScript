function* myGenerator(): Generator<string, { summary: string }, string | number> {
  const numberInput = yield "2 + 2 =";
  console.log(`Your answer: ${numberInput}`, `Correct answer: 4`);

  const textInput = yield "Your favorite word";
  console.log(`Your favorite word is: ${textInput}`);

  // Return a summary object at the end
  return {
    summary: `You answered the math question with: ${numberInput} and your favorite word is: ${textInput}.`
  };
}

const generator = myGenerator();

console.log(generator.next().value); // "2 + 2 =" 

console.log(generator.next(4).value); // "Your answer: 4",  "Correct answer: 4", "Your favorite word"
// "Your favorite word"

const finalStep = generator.next("Mumbo Jumbo");
console.log(finalStep.value); // { summary: "You answered the math question with: 4 and your favorite word is: Mumbo Jumbo." }