import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from '../index';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Checkbox />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Checkbox
          label="Label de la checkbox"
          value="value"
          data-testid="checkbox"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('in document', () => {
    render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
        data-testid="checkbox"
      />,
    );
    const search = screen.getByTestId('checkbox');
    expect(search).toBeInTheDocument();
  });

  // test de la présence de la class fr-checkbox-group
  it('has fr-checkbox-group class', () => {
    const { container } = render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
      />,
    );
    expect(container.getElementsByClassName('fr-checkbox-group').length).toBe(1);
  });

  // test de la class d'erreur
  it('has fr-select class', () => {
    const { container } = render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
        messageType="error"
      />,
    );
    expect(container.getElementsByClassName('fr-checkbox-group--error').length).toBe(1);
  });
});
