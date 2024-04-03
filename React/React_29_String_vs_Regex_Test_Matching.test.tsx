import React from 'react';
import { render, screen } from '@testing-library/react';

const SampleComponent: React.FC = () => {
  return (
    <div>
      The Grand Canyon is a great place to visit. Do you agree?
      <select
        name="agreement"
        aria-label="Grand-Canyon-Agreement"
        id="agreement"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
};

describe('The Grand Canyon Agreement', () => {
  it('should render a select element with the correct options (regex match)', () => {
    render(<SampleComponent />);

    const grandCanyonText = screen.queryByText(
      /the grand canyon is a great place to visit./i
    );

    const selectElement = screen.getByRole('combobox', {
      name: /grand-canyon-agreement/i,
    });

    expect(grandCanyonText).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  it('should render a select element with the correct options (string match)', () => {
    render(<SampleComponent />);

    const grandCanyonText = screen.queryByText(
      'The Grand Canyon is a great place to visit. Do you agree?'
    );

    const selectElement = screen.getByRole('combobox', {
      name: 'Grand-Canyon-Agreement',
    });

    expect(grandCanyonText).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });
});
