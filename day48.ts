const myCrazyCoolMysticalFunction = () => {
  const randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) return 'You win';
  if (randNum === 2) return 1234;
  return true;
};

//  FuncResult = true | "You win" | 1234
type FuncResult = ReturnType<typeof myCrazyCoolMysticalFunction>;

const doSomething = (result: FuncResult) => {
  // imagine this does something cool!
};

doSomething(myCrazyCoolMysticalFunction());
