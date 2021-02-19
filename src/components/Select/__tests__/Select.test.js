import { render, screen } from '@testing-library/react';
import Select from '..';

describe('<Select />', () => {
  const options = [
    { value: '1', label: 'label-1' },
    { value: '2', label: 'label-2' },
  ];

  it('renders Select properly', () => {
    // const onChange = jest.fn();
    render(
      <Select
        label="Label pour liste déroulante"
        options={options}
        messageType="valid"
      />,
    );
    const search = screen.getByTestId('select');
    expect(search).toBeInTheDocument();
    // expect(search).toMatchSnapshot();
  });

  // test du nombre d'items

  // test de la présence de la class rf-select

  // test du label

  // test de la fonction onChange

  // test de la class d'erreur
  // label
  // select
  // message
  // aria

  // test de la class succès
  // label
  // select
  // message
  // aria

  // test disable

  // test hint
  // ...
});
