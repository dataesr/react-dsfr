import { Story } from '@storybook/react/types-6-0';

import Toggle, { ToggleProps } from './Toggle';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/interrupteur

export default {
  title: 'Composants/ Interrupteur - Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Le composant “Interrupteur” permet à l’utilisateur de faire un choix entre deux états opposés (activé / désactivé).',
      },
    },
  },
};

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Un label d’interrupteur doit être concis (ne pas dépasser 3 mots si possible)',
};
Default.storyName = 'Interrupteur avec label à droite';

export const LeftLabelOnToggle = Template.bind({});
LeftLabelOnToggle.args = {
  label: 'Action interrupteur avec label à gauche',
  hasLabelLeft: true,
};
LeftLabelOnToggle.storyName = 'Interrupteur avec label à gauche';

export const CheckedToggle = Template.bind({});
CheckedToggle.args = {
  label: 'Un interrupteur activé',
  checked: true,
};
CheckedToggle.storyName = 'Interrupteur activé';

export const ToggleWithSeparator = Template.bind({});
ToggleWithSeparator.args = {
  label: 'Un interrupteur avec un séparateur',
  hasSeparator: true,
};
ToggleWithSeparator.storyName = 'Interrupteur avec un séparateur';

export const ToggleWithDescription = Template.bind({});
ToggleWithDescription.args = {
  label: 'Un interrupteur avec une description',
  description: 'Si le label seul ne permet pas de comprendre l’action proposée, nous recommandons d’y associer une description',
};
ToggleWithDescription.storyName = 'Interrupteur avec description';

export const ColoredToggle = Template.bind({});
ColoredToggle.args = {
  label: 'Un interrupteur avec une couleur',
  toggleColor: 'red',
};
ColoredToggle.storyName = 'Interrupteur avec couleur';
