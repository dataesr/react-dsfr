import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import { Radio } from '../index';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Radio />', () => {
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Radio
          label="Label de la radio"
          value="value"
          data-testid="radio"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('in document', () => {
    render(
      <Radio
        label="Label de la radio"
        value="value"
        data-testid="radio"
      />,
    );
    const search = screen.getByTestId('radio');
    expect(search).toBeInTheDocument();
  });

  // test de la présence de la class fr-radio-group
  it('has fr-radio-group class', () => {
    const { container } = render(
      <Radio
        label="Label de la radio"
        value="value"
      />,
    );
    expect(container.getElementsByClassName('fr-radio-group').length).toBe(1);
  });

  // test de la class d'erreur
  it('has fr-select class', () => {
    const { container } = render(
      <Radio
        label="Label de la radio"
        value="value"
        messageType="error"
      />,
    );
    expect(container.getElementsByClassName('fr-radio-group--error').length).toBe(1);
  });
});
