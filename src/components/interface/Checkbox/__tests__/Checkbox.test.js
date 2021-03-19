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
      />,
    );
    const search = screen.getByTestId('checkbox-testid');
    expect(search).toBeInTheDocument();
  });

  // test de la présence de la class rf-checkbox-group
  it('has rf-checkbox-group class', () => {
    const { container } = render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
      />,
    );
    expect(container.getElementsByClassName('rf-checkbox-group').length).toBe(1);
  });

  // test de la class d'erreur
  it('has rf-select class', () => {
    const { container } = render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
        messageType="error"
      />,
    );
    expect(container.getElementsByClassName('rf-checkbox-group--error').length).toBe(1);
  });
});
