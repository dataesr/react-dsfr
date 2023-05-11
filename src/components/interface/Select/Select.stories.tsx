import { ComponentStory } from '@storybook/react';

import Select from './Select';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/liste-deroulante

export default {
  title: 'Composants/Liste déroulante - Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'La liste déroulante permet à un utilisateur de choisir un élément dans une liste donnée.',
      },
    },
  },
};

const Template: ComponentStory<typeof Select> = (args) => (<Select {...args} />);

export const Simple = Template.bind({});
Simple.args = {
  label: 'Label pour liste déroulante',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};
Simple.storyName = 'Liste déroulante simple';

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Label pour liste déroulante',
  message: 'Texte d\'erreur obligatoire',
  messageType: 'error',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};
ErrorState.storyName = 'État d\'erreur';

export const SuccessState = Template.bind({});
SuccessState.args = {
  label: 'Label pour liste déroulante',
  message: 'Texte de validation',
  messageType: 'valid',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};
SuccessState.storyName = 'État de succès';

export const DeactivatedState = Template.bind({});
DeactivatedState.args = {
  disabled: true,
  label: 'Label pour liste déroulante',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};
DeactivatedState.storyName = 'État désactivé';

export const HelpText = Template.bind({});
HelpText.args = {
  hint: 'Texte de description additionnel',
  label: 'Label pour liste déroulante',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};
HelpText.storyName = 'Liste déroulante avec texte d\'aide';
