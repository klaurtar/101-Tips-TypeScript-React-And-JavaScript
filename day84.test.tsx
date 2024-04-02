import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const VerySpecialButtons: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <button onClick={() => setDisabled(false)}>Click me</button>
      <button disabled={disabled}>Don't touch me!</button>
    </div>
  );
};

it('should enable the disabled button when the first button is clicked', async () => {
  const user = userEvent.setup();

  render(<VerySpecialButtons />);

  const clickMeButton = screen.getByRole('button', {
    name: /click me/i,
  });

  const dontClickMeButton = screen.getByRole('button', {
    name: /don't touch me/i,
  });

  expect(dontClickMeButton).toBeDisabled();

  // 👎 Don't use fireEvent...
  fireEvent.click(clickMeButton);

  // instead use userEvent ✅
  await user.click(clickMeButton);

  expect(dontClickMeButton).not.toBeDisabled();
});
