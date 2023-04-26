import { ComponentStory } from '@storybook/react';

import Radio from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {},
};

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultChecked: true,
  hint: '',
  label: 'label',
  size: 'md',
  value: 'value',
};
