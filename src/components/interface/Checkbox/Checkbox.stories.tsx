import { ComponentStory } from '@storybook/react';

import Checkbox from './Checkbox';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/case-a-cocher

export default {
  title: 'Composants/Case à cocher - Checkbox',
  component: Checkbox,
  subcomponents: { Checkbox },
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  label: 'Label checkbox',
  hint: 'Additionnal description',
};
SimpleCheckbox.storyName = 'Case à cocher';

export const InactiveCheckbox = Template.bind({});
InactiveCheckbox.args = {
  label: 'Label checkbox',
  disabled: true,
};
InactiveCheckbox.storyName = 'Case à cocher inactive';

export const ErrorCheckbox = Template.bind({});
ErrorCheckbox.args = {
  label: 'Label checkbox',
  messageType: 'error',
  message: 'Error message',
};
ErrorCheckbox.storyName = 'Case à cocher en erreur';

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
  label: 'Label checkbox',
  size: 'sm',
};
SmallCheckbox.storyName = 'Case à cocher petite';
