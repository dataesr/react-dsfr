import { ComponentStory } from '@storybook/react';

import Button from './Button';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton

export default {
  title: 'Bouton - Button',
  component: Button,
  argTypes: {},
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
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

export const CustomColor = Template.bind({});

CustomColor.args = {
  children: 'Button',
  colors: ['#f55', '#fff'],
  size: 'lg',
  secondary: true,
  title: 'title',
};
