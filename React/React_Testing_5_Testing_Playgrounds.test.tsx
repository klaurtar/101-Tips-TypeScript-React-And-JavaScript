it('should set the correct car step when VIN search is clicked', async () => {
  const setAddCarStep = jest.fn();

  render(<ChooseUploadMethodScreen setAddCarStep={setAddCarStep} />);

  const searchByVinButton = await screen.findByRole('button', {
    name: /type in vin/i,
  });

  userEvent.click(searchByVinButton);

  // ✅ Pulls up an HTML page to visualize your tests!
  screen.logTestingPlaygroundURL();

  expect(setAddCarStep).toHaveBeenCalledWith('search by vin flow');
});
