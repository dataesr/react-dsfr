import { ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
};

Primary.storyName = 'Primary';

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Button',
  secondary: true,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  children: 'Button',
  tertiary: true,
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: 'Button',
  icon: 'ri-alert-fill',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Button',
  disabled: true,
};

export const NoBorder = Template.bind({});

NoBorder.args = {
  children: 'Button',
  hasBorder: false,
};
