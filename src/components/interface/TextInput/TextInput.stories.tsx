import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/champ-de-saisie

export default {
  title: 'Composants/Champ de saisie - Input',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'Les champs permettent à un utilisateur d\'entrer du contenu et données. Le champ simple est un champ de saisie libre, qui accepte une courte ligne de contenu (texte ou/ et nombre). Le libellé se trouve au-dessus du champs de saisie, pour faciliter la lecture.',
      },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {};

export const TextArea = Template.bind({});
TextArea.args = {
  textarea: true,
  rows: 3,
};
