import { ComponentStory } from '@storybook/react';

import Badge from './Badge';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/badge

export default {
  title: 'Composants/Badge - Badge',
  component: Badge,
};

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
);

export const Succes = Template.bind({});
Succes.args = { text: 'Success', type: 'success', hasIcon: true };
Succes.storyName = 'Succes';

export const Nouveau = Template.bind({});
Nouveau.args = { text: 'Nouveau', type: 'new', hasIcon: true };
Nouveau.storyName = 'Nouveau';

export const Information = Template.bind({});
Information.args = { text: 'Info', type: 'info', hasIcon: true };
Information.storyName = 'Information';

export const Warning = Template.bind({});
Warning.args = { text: 'Warning', type: 'warning', hasIcon: true };
Warning.storyName = 'Warning';

export const Erreur = Template.bind({});
Erreur.args = { text: 'Erreurs', type: 'error', hasIcon: true };
Erreur.storyName = 'Erreur';

export const Petit = Template.bind({});
Petit.args = { text: 'Petit', type: 'success', isSmall: true };
Petit.storyName = 'Petit';

export const Icon = Template.bind({});
Icon.args = { text: 'Icon', type: 'success', hasIcon: false };
Icon.storyName = 'Sans icone';
