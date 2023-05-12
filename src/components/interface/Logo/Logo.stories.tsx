import { ComponentStory } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Composants/Logo - Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Le composant permet de formatter le texte qui accompagne le logo du Ministère.',
      },
    },
  },
};

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const FormatLogo = Template.bind({});
FormatLogo.args = {
  children: 'Ministère de l\'enseignement supérieur et de la Recherche',
};
FormatLogo.storyName = 'Logo formatté';
