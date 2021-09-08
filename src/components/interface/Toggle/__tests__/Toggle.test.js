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
        checked
        onChange={onChange}
        label="Accepter les cookies"
        description="Activez-moi!"
        hasSeparator
        hasLabelLeft
        data-testid="toggle"
      />,
    );
    const toggle = screen.getByTestId('toggle');
    expect(toggle.className).toBe('fr-toggle fr-toggle--border-bottom fr-toggle--label-left');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toMatchSnapshot();
  });

  it('should fire onChange on click', () => {
    const onChange = jest.fn();
    render(
      <Toggle
        checked
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
