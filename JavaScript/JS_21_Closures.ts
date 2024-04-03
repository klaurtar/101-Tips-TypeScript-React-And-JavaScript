const onlyUseOneTime = () => {
  let counter = 0;
  return (fn: (...args: any[]) => any) => {
    if (counter === 0) {
      counter += 1;
      return fn();
    }
    console.log('This function has already ran once!');
  };
};

const myComplexFn = () => {
  console.log(
    'The 2011 movie "In Time" with Justin Timberlake and Amanda Seyfried is a masterpiece'
  );
};

const initOneUse = onlyUseOneTime();

// 1st call
initOneUse(myComplexFn); // "The 2011 movie "In Time" with Justin Timberlake and Amanda Seyfried is a masterpiece"

// 2nd call 🚫
initOneUse(myComplexFn); // "This function has already ran once!"
