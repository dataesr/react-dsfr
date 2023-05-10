import { ComponentStory } from '@storybook/react';

import File from './File';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/ajout-de-fichier

export default {
  title: 'Ajout de fichier - Upload',
  component: File,
  subcomponents: { File },
};

const Template: ComponentStory<typeof File> = (args) => (
  <File {...args} />
);

export const SimpleFile = Template.bind({});
SimpleFile.args = {
  label: 'Label File',
  hint: 'Hint',
};
SimpleFile.storyName = 'Ajout de fichier';

export const AcceptFile = Template.bind({});
AcceptFile.args = {
  label: 'Label File',
  hint: 'Hint',
  accept: '.txt, .csv',
};
AcceptFile.storyName = 'Ajout de fichier spécifique';

export const MultipleFile = Template.bind({});
MultipleFile.args = {
  multiple: true,
  label: 'Label File',
  hint: 'Hint',
};
MultipleFile.storyName = 'Ajout de fichiers multiples';

export const ErrorFile = Template.bind({});
ErrorFile.args = {
  label: 'Label File',
  hint: 'Hint',
  errorMessage: "Message d'erreur",
};
ErrorFile.storyName = 'Ajout de fichier en erreur';
