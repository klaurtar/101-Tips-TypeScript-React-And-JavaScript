import { React } from 'react';

interface ButtonProps {
  doSomething?: () => void;
}

const BigRedButton: React.FC<ButtonProps> = ({ doSomething }) => {
  const handleClick = () => {
    // 🚫 if statement to check if doSomething is defined before running
    if (doSomething) doSomething();
    // Do more stuff
  };

  return <button onClick={handleClick()}>DO NOT PRESS</button>;
};

const BigGreenButton: React.FC<ButtonProps> = ({ doSomething }) => {
  const handleClick = () => {
    // ✅ Optional Chaining does the same as the if statement with less code!
    doSomething?.();
    // Do more stuff
  };

  return <button onClick={handleClick()}>PRESS ME</button>;
};
