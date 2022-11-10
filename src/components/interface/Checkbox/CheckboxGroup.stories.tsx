import { ComponentStory } from '@storybook/react';

import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  subcomponents: { Checkbox },
};

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  legend: 'Legende',
  hint: 'Additionnal description',
  children: [
    <Checkbox label="Label checkbox 1" />,
    <Checkbox label="Label checkbox 2" />,
  ],
};
SimpleCheckbox.storyName = 'Cases à cocher';

export const HorizontalCheckbox = Template.bind({});
HorizontalCheckbox.args = {
  legend: 'Legende',
  hint: 'Additionnal description',
  isInline: true,
  children: [
    <Checkbox label="Label checkbox 1" />,
    <Checkbox label="Label checkbox 2" />,
  ],
};
HorizontalCheckbox.storyName = 'Cases à cocher horizontales';

export const ErrorCheckbox = Template.bind({});
ErrorCheckbox.args = {
  legend: 'Legende',
  hint: 'Additionnal description',
  messageType: 'error',
  message: 'Error message',
  children: [
    <Checkbox label="Label checkbox 1" />,
    <Checkbox label="Label checkbox 2" />,
  ],
};
ErrorCheckbox.storyName = 'Cases à cocher en erreur';
