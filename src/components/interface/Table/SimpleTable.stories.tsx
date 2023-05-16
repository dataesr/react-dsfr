import { Story } from '@storybook/react';
import SimpleTable from './SimpleTable';

export default {
  title: 'Composants/Tableau simple - SimpleTable',
  component: SimpleTable,
  parameters: {
    docs: {
      description: {
        component: 'Il permet de simplifier l’analyse et la comparaison d’information pour l’utilisateur.',
      },
    },
  },
};

const Template: Story = (args) => <SimpleTable {...args} />;

const data = [
  { id: 1, name: 'Alice Martin', age: 25 },
  { id: 2, name: 'Martin Dupont', age: 30 },
  { id: 3, name: 'Camille Lambert', age: 35 },
];

Template.args = {
  data,
  emptyDataMessage: 'Pas de données',
  fixedLayout: false,
  fixedHeader: false,
  noScroll: false,
  bordered: false,
  captionPosition: 'top',
  caption: 'Classement',
  className: '',
};

export const Default = Template.bind({});
Default.args = { ...Template.args };
Default.storyName = 'Tableau classique';

export const EmptyData = Template.bind({});
EmptyData.args = { ...Template.args, data: [] };
Template.storyName = 'Tableau sans données';

export const EmptyCaption = Template.bind({});
EmptyCaption.args = { ...Template.args, caption: '', noScroll: true };
EmptyCaption.storyName = 'Tableau sans nom, avec le scroll désactivé';

export const BottomCaption = Template.bind({});
BottomCaption.args = { ...Template.args, captionPosition: 'bottom' };
BottomCaption.storyName = 'Tableau dont le nom est en bas';

export const Bordered = Template.bind({});
Bordered.args = { ...Template.args, borderer: true };
Bordered.storyName = 'Tableau avec éléments fond et bordure';

export const ColoredTable = Template.bind({});
ColoredTable.args = { ...Template.args, className: 'fr-table fr-table--green-emeraude' };
ColoredTable.storyName = 'Tableau avec éléments fond et bordure de couleur';
