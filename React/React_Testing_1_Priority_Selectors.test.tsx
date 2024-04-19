import { render, screen } from '@testing-library/react';

it(`should select the correct elements using React Testing Library's selector priority`, () => {
  render(<MyComponent />);

  // 🏆🏆🏆 The most accessible queries (ranked in order) 🏆🏆🏆
  screen.getByRole('textbox', {
    name: /favorite flower/i,
  });

  screen.getByLabelText(/favorite flower/i);

  screen.getByPlaceholderText(/favorite flower/i);

  screen.getByText(/favorite flower/i);

  screen.getByDisplayValue(/favorite flower/i);

  // 🥈🥈🥈 Less accessible queries 🥈🥈🥈
  screen.getByAltText(/favorite flower/i);

  screen.getByTitle(/favorite flower/i);

  // 🚫🚫🚫 Avoid using this query 🚫🚫🚫
  screen.getByTestId('favorite-flower');
});
