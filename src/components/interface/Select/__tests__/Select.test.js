import { render, screen } from '@testing-library/react';
import Select from '..';

describe('<Select />', () => {
  const options = [
    { value: '1', label: 'label-1' },
    { value: '2', label: 'label-2' },
  ];

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
