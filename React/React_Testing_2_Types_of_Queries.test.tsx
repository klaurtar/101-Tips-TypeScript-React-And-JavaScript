import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [showDelayedInput, setShowDelayedInput] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="big-red-button"
        onClick={() => setShowDelayedInput(true)}
      >
        Show delayed input
      </button>
      {showDelayedInput && (
        <input
          type="text"
          name="delayedInput"
          id="delayedInput"
          aria-label="delayed-input"
        />
      )}
    </>
  );
};

it('should render two text inputs', async () => {
  render(<MyComponent />);

  // getBy queries will throw an error if it can't find the element
  const bigRedButton = screen.getByRole('button', {
    name: /big-red-button/i,
  });

  userEvent.click(bigRedButton);

  // queryBy queries will return null if it can't find the element
  const nonExistentInput = screen.queryByRole('textbox', {
    name: /non-existent/i,
  });

  // findBy queries will return a promise that resolves when the element is found or the promise is rejected if it can't find the element
  // The default timeout is 1000 ms
  const delayedInput = await screen.findByRole('textbox', {
    name: /delayed-input/i,
  });

  expect(nonExistentInput).not.toBeInTheDocument();
  expect(delayedInput).toBeInTheDocument();
});
