import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/champ-de-saisie

export default {
  title: 'Champ de saisie - Input',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {};

export const TextArea = Template.bind({});
TextArea.args = {
  textarea: true,
  rows: 3,
};
