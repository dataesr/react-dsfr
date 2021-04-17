import { render, screen } from '@testing-library/react';
import data from './__mocks__/data.json';
import { Table, SimpleTable } from '..';

describe('<Table />', () => {
  it('renders Table properly', () => {
    render(
      <Table bordered captionPosition="bottom" caption="Mon super tableau">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Titre</th>
            <th scope="col">Titre</th>
            <th scope="col">Titre</th>
            <th scope="col">Titre</th>
            <th scope="col">Titre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
          </tr>
          <tr>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
            <td>Donnée</td>
          </tr>
        </tbody>
      </Table>,
    );
    const table = screen.getByTestId('table');
    const caption = screen.getByTestId('table-caption');
    expect(table).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
    expect(caption).toHaveTextContent('Mon super tableau');
    expect(table.className).toBe('fr-table fr-table--caption-bottom fr-table--bordered');
    expect(table).toMatchSnapshot();
  });
  it('renders simple table properly', () => {
    render(
      <SimpleTable data={data} caption="Mon super tableau" />,
    );
    const cell = screen.getByText('Mathematics');
    expect(cell).toBeInTheDocument();
    expect(cell).toMatchSnapshot();
  });
});
