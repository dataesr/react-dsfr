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
      />,
    );
    const search = screen.getByTestId('radio-testid');
    expect(search).toBeInTheDocument();
  });

  // test de la présence de la class rf-radio-group
  it('has rf-radio-group class', () => {
    const { container } = render(
      <Radio
        label="Label de la radio"
        value="value"
      />,
    );
    expect(container.getElementsByClassName('rf-radio-group').length).toBe(1);
  });

  // test de la class d'erreur
  it('has rf-select class', () => {
    const { container } = render(
      <Radio
        label="Label de la radio"
        value="value"
        messageType="error"
      />,
    );
    expect(container.getElementsByClassName('rf-radio-group--error').length).toBe(1);
  });
});
