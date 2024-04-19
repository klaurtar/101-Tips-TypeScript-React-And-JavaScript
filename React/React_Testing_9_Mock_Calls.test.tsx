// ShowMockCalls.tsx
import React from 'react';
import handleAnything from './handleAnything';

export const ShowMockCalls: React.FC = () => {
  handleAnything('first', 'second');
  handleAnything(
    true,
    (myString: string) => `My string return value: ${myString}`
  );
  handleAnything(1, 2);

  return <div>This component is only showing off tests</div>;
};

// ============ Test Implementation ============
import { render } from '@testing-library/react';
import { ShowMockCalls } from './ShowMockCalls';
import handleAnything from './handleAnything';

type MockHandleAnything = jest.Mock<typeof handleAnything>;

jest.mock('./handleAnything', () => ({
  default: jest.fn(),
}));

it('should call handleAnything with the correct arguments', () => {
  const handleAnythingMock = handleAnything as MockHandleAnything;
  const myMockString = 'I liek turtles';

  render(<ShowMockCalls />);

  expect(handleAnythingMock.mock.calls).toEqual([
    ['first', 'second'],
    [true, expect.any(Function)],
    [1, 2],
  ]);

  expect(handleAnythingMock.mock.calls[1][1](myMockString)).toBe(
    'My string return value: I liek turtles'
  );
});
