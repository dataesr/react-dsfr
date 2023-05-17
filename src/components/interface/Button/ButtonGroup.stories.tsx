import { ComponentStory } from '@storybook/react';

import ButtonGroup from './ButtonGroup';
import Button from './Button';

export default {
  title: 'Composants/Groupe de Boutons - ButtonGroup',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Le bouton est un élément d\'interaction avec l\'interface permettant à l\'utilisateur d\'effectuer une action. Les boutons dans le contexte d\'un groupe suivent les mêmes règles que le composant bouton',
      },
    },
  },
};

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const VerticalButtons = Template.bind({});
VerticalButtons.args = {
  children: [
    <Button secondary="true">Bouton 1</Button>,
    <Button>Bouton 2</Button>,
    <Button>Bouton 3</Button>,
  ],
};
VerticalButtons.storyName = 'Groupe de boutons vertical';

export const HorizontalButtons = Template.bind({});
HorizontalButtons.args = {
  className: 'fr-btns-group fr-btns-group--inline',
  children: [
    <Button icon="ri-alert-fill">Bouton 1</Button>,
    <Button>Bouton 2</Button>,
    <Button>Bouton 3</Button>,
  ],
};
HorizontalButtons.storyName = 'Groupe de boutons horizontal';
