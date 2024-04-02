// MyButton.tsx
import React from 'react';

const MyButtonComponent: React.FC = () => {
  const handleClick = () => {
    console.log('Did this work?');
    console.log('Button clicked!'); // Logs a message to the console
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default MyButtonComponent;

// MyButton.test.tsx
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyButtonComponent from './MyButton';

it('should call e.preventDefault when clicked', () => {
  // ✅ spying on console functions is easy!
  const consoleSpy = jest.spyOn(global.console, 'log');

  render(<MyButtonComponent />);

  const myButton = screen.getByRole('button');

  userEvent.click(myButton);

  expect(consoleSpy).toHaveBeenCalledWith('Button clicked!');
});
