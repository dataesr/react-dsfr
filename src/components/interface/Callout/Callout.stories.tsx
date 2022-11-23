import { ComponentStory } from '@storybook/react';

import Callout from './Callout';
import CalloutTitle from './CalloutTitle';
import CalloutText from './CalloutText';
import Button from '../Button/Button';

export default {
  title: 'Callout',
  component: Callout,
  subcomponents: { CalloutTitle, CalloutText },
};

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args} />
);

export const SimpleCallout = Template.bind({});
SimpleCallout.args = {
  children: [
    <CalloutTitle as="h3">Callout title</CalloutTitle>,
    <CalloutText>Callout text that might be short and concise.</CalloutText>,
  ],
};
SimpleCallout.storyName = 'Mise en avant';

export const ButtonCallout = Template.bind({});
ButtonCallout.args = {
  children: [
    <CalloutTitle as="h3">Callout title</CalloutTitle>,
    <CalloutText>Callout text that might be short and concise.</CalloutText>,
    <Button title="acceder...">
      Accéder au service
    </Button>,

  ],
};
ButtonCallout.storyName = 'Mise en avant avec bouton';

export const WithoutIconCallout = Template.bind({});
WithoutIconCallout.args = {
  icon: null,
  children: [
    <CalloutTitle as="h3">Callout title</CalloutTitle>,
    <CalloutText>Callout text that might be short and concise.</CalloutText>,
  ],
};
WithoutIconCallout.storyName = 'Mise en avant sans icone';

export const DifferentIconCallout = Template.bind({});
DifferentIconCallout.args = {
  icon: 'fr-fi-lock-line',
  children: [
    <CalloutTitle as="h3">Callout title</CalloutTitle>,
    <CalloutText>Callout text that might be short and concise.</CalloutText>,
  ],
};
DifferentIconCallout.storyName = 'Mise en avant avec une autre icone';

export const ColoredCallout = Template.bind({});
ColoredCallout.args = {
  colors: ['#f13d3d', '#ffb0b0'],
  children: [
    <CalloutTitle as="h3">Callout title</CalloutTitle>,
    <CalloutText>Callout text that might be short and concise.</CalloutText>,
  ],
};
ColoredCallout.storyName = 'Mise en avant couleur personalisée';

export const PredefinedColoredCallout = Template.bind({});
PredefinedColoredCallout.args = {
  colorFamily: 'beige-gris-galet',
  children: [
    <CalloutTitle as="h3">Callout title</CalloutTitle>,
    <CalloutText>Callout text that might be short and concise.</CalloutText>,
  ],
};
PredefinedColoredCallout.storyName = 'Mise en avant couleur prédefinie';
