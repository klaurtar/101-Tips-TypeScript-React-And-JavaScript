jest.mock('luxon', () => {
  const actualLuxon = jest.requireActual('luxon');
  return {
    ...actualLuxon,
    DateTime: {
      ...actualLuxon.DateTime,
      now: jest
        .fn()
        .mockReturnValue(actualLuxon.DateTime.fromISO('2023-06-30T00:00:00')),
    },
  };
});
