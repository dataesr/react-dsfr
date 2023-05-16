import { Story } from '@storybook/react';
import Table, { TableProps } from './Table';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau

export default {
  title: 'Composants/Tableau - Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques.',
      },
    },
  },
};

const columns = [
  { name: 'id', label: 'ID' },
  { name: 'name', label: 'Name' },
  { name: 'age', label: 'Age' },
];

const data = [
  { id: 1, name: 'Alice Martin', age: 25 },
  { id: 2, name: 'Martin Dupont', age: 30 },
  { id: 3, name: 'Camille Lambert', age: 35 },
  { id: 4, name: 'Anne Chevalier', age: 40 },
  { id: 5, name: 'Jérémy Laurent', age: 45 },
  { id: 6, name: 'Fred Coquelet', age: 50 },
  { id: 7, name: 'Eric Souverain', age: 55 },
];

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
  rowKey: 'undefined',
};
Default.storyName = 'Tableau classique';

export const TableWithPagination = () => (
  <Table columns={columns} rowKey="id" data={data} pagination perPage={5} />
);
TableWithPagination.storyName = 'Tableau avec pagination';

export const TableWithCaption = () => (
  <Table columns={columns} rowKey="id" data={data} caption="Classement" />
);
TableWithCaption.storyName = 'Tableau avec titre';

export const TableWithBorders = () => (
  <Table columns={columns} rowKey="id" data={data} bordered />
);
TableWithBorders.storyName = 'Tableau avec des bordures';

export const TableWithFixedLayout = () => (
  <Table columns={columns} rowKey="id" data={data} fixedLayout />
);
TableWithFixedLayout.storyName = 'Tableau avec une disposition fixe du layout';

export const TableWithFixedHeader = () => (
  <Table columns={columns} rowKey="id" data={data} fixedHeader />
);
TableWithFixedHeader.storyName = 'Tableau avec une disposition fixe du header';
