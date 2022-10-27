import { ComponentStory } from '@storybook/react';

import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
);

export const Information = Template.bind({});
Information.args = {
  title: 'Information',
  description: "Description de l'alerte",
};
Information.storyName = 'Information';

export const Succes = Template.bind({});
Succes.args = {
  title: 'Succes',
  description: 'Vous avez reussi',
  type: 'success',
};
Succes.storyName = 'Succes';

export const Erreur = Template.bind({});
Erreur.args = {
  title: 'Erreur',
  description: "Impossible d'effectuer cette action",
  type: 'error',
};
Erreur.storyName = 'Erreur';

export const Petite = Template.bind({});
Petite.args = {
  title: 'Information',
  description: "Description de l'alerte",
  small: true,
};
Petite.storyName = 'Petite';

export const Fermable = Template.bind({});
Fermable.args = {
  title: 'Information',
  description: "Description de l'alerte",
  closable: true,
};
Fermable.storyName = 'Fermable';
