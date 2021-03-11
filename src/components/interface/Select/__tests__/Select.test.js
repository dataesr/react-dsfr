import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import Select from '..';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('<Select />', () => {
  const options = [
    { value: '1', label: 'label-1' },
    { value: '2', label: 'label-2' },
  ];
  beforeEach(() => {
    uuidv4.mockImplementationOnce(() => 'xxxxxxx');
  });
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Select
          label="Label pour liste déroulante"
          options={options}
          messageType="valid"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('in document', () => {
    render(
      <Select
        label="Label pour liste déroulante"
        options={options}
        messageType="valid"
      />,
    );
    const search = screen.getByTestId('select');
    expect(search).toBeInTheDocument();
  });

  // test de la présence de la class rf-select
  it('has rf-select class', () => {
    const { container } = render(
      <Select
        label="Label pour liste déroulante"
        options={options}
        messageType="valid"
      />,
    );
    expect(container.getElementsByClassName('rf-select').length).toBe(1);
  });

  // test de la class d'erreur
  it('has rf-select class', () => {
    const { container } = render(
      <Select
        label="Label pour liste déroulante"
        options={options}
        messageType="error"
      />,
    );
    expect(container.getElementsByClassName('rf-select--error').length).toBe(1);
  });

  // test de la class succès
  it('has rf-select class', () => {
    const { container } = render(
      <Select
        label="Label pour liste déroulante"
        options={options}
        messageType="valid"
      />,
    );
    expect(container.getElementsByClassName('rf-select--valid').length).toBe(1);
  });
});
