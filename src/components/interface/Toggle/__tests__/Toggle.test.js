import { render, screen, fireEvent } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import Toggle from '..';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Toggle />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders Toggle properly', () => {
    const onChange = jest.fn();
    render(
      <Toggle
        isChecked
        onChange={onChange}
        label="Accepter les cookies"
        description="Activez-moi!"
        hasSeparator
        hasLabelLeft
      />,
    );
    const toggle = screen.getByTestId('toggle');
    expect(toggle.className).toBe('rf-toggle rf-toggle--border-bottom rf-toggle--label-left');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toMatchSnapshot();
  });

  it('should fire onChange on click', () => {
    const onChange = jest.fn();
    render(
      <Toggle
        isChecked
        onChange={onChange}
        label="Accepter les cookies"
        description="Activez-moi!"
        hasSeparator
        hasLabelLeft
      />,
    );
    fireEvent.click(screen.getByTestId('toggle-input'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
