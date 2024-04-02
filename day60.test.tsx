import React, { useState } from 'react';
import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const TermsAndCondtions: React.FC<{ handleSubmit: () => void }> = ({
  handleSubmit,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label htmlFor="terms-agreement">
        I agree to the terms and conditions
        <input
          id="terms-agreement"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
      <button type="submit" disabled={!checked} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

it('should call the handleSubmit function when submit button is not disabled and clicked', () => {
  const mockHandleSubmit = jest.fn();

  const { container } = render(
    <TermsAndCondtions handleSubmit={mockHandleSubmit} />
  );

  logRoles(container); // 👇🏼 See comment below test to see output 👇🏼

  // I can select the appropriate item by role and name now!
  const checkbox = screen.getByRole('checkbox', {
    name: /I agree to the terms and conditions/i,
  });

  userEvent.click(checkbox);

  const submitButton = screen.getByRole('button', { name: /Submit/i });

  screen.logTestingPlaygroundURL();

  userEvent.click(submitButton);

  expect(mockHandleSubmit).toHaveBeenCalled();
});

// logRoles Output 🚀
//
// checkbox:

// Name "I agree to the terms and conditions":
// <input
//   id="terms-agreement"
//   type="checkbox"
// />

// --------------------------------------------------
// button:

// Name "Submit":
// <button
//   disabled=""
//   type="submit"
// />

// --------------------------------------------------
