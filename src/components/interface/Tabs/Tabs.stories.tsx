import { ComponentStory } from '@storybook/react';

import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'Composants/Onglets - Tabs',
  component: Tabs,
  subcomponents: {
    Tab,
  },
  parameters: {
    docs: {
      description: {
        component: 'Le composant onglet permet aux utilisateurs de naviguer dans différentes sections de contenu au sein d’une même page.<br />Le système d\'onglet aide à regrouper différents contenus dans un espace limité et permet de diviser un contenu dense en sections accessibles individuellement afin de faciliter la lecture pour l\'utilisateur.',
      },
    },
  },
};

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} />
);

// fix decorator : https://github.com/storybookjs/storybook/issues/12596
Tab.displayName = 'Tab';

export const StoryOne = Template.bind({});
StoryOne.args = {
  children: [
    <Tab label="Label Tab 1">Contenu 1</Tab>,
    <Tab label="Label Tab 2">Contenu 2</Tab>,
    <Tab label="Label Tab 3 avec icon" icon="ri-home-line">Contenu 3</Tab>,
  ],
};
