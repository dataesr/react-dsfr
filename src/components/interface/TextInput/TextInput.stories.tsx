import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {};

export const TextArea = Template.bind({});
TextArea.args = {
  textarea: true,
  rows: 3,
};
