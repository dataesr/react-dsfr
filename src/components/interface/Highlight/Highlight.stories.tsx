import { ComponentStory } from '@storybook/react';

import Highlight from './Highlight';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-exergue

export default {
  title: 'Mise en exergue - Highlight',
  component: Highlight,
  subcomponents: { Highlight },
};

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args}>Text à mettre en exergue</Highlight>
);

export const SimpleHighlight = Template.bind({});
SimpleHighlight.args = {
};
SimpleHighlight.storyName = 'Mise en exergue';

export const SmallHighlight = Template.bind({});
SmallHighlight.args = {
  size: 'sm',
};
SmallHighlight.storyName = 'Mise en exergue petite';
