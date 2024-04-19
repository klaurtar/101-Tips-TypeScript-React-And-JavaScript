it(`should render instructions when "Get Started" button is clicked`, () => {
  render(<MyButtonComponent />);

  const myButton = screen.getByRole('button');

  userEvent.click(myButton);

  // Prints the ENTIRE DOM at this point in the test!
  screen.debug(undefined, Infinity);

  expect(screen.queryByText('DO NOT PRESS THE RED BUTTON')).toBeInTheDocument();
});
