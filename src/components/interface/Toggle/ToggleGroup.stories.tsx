import { Story } from '@storybook/react/types-6-0';

import Toggle from './Toggle';
import ToggleGroup, { ToggleGroupProps } from './ToggleGroup';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/interrupteur

export default {
  title: 'Composants/ Groupe Interrupteur - ToggleGroup',
  component: ToggleGroup,
  subcomponent: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Le composant “Interrupteur” permet à l’utilisateur de faire un choix entre deux états opposés (activé / désactivé).',
      },
    },
  },
};

const Template: Story<ToggleGroupProps> = (args) => <ToggleGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<Toggle label="Label 1" description="Texte d'aide pour clarifier l'action" />, <Toggle label="Label 2" description="Texte d'aide pour clarifier l'action" />, <Toggle label="Label 3" description="Texte d'aide pour clarifier l'action" />],
};
Default.storyName = 'Interrupteur avec label à droite';

export const WithAllLabelLeft = Template.bind({});
WithAllLabelLeft.args = {
  labelLeft: true,
  children: [<Toggle label="Label 1" />, <Toggle label="Label 2" />, <Toggle label="Label 3" />],
};
WithAllLabelLeft.storyName = "Groupe d'interrupteur avec labels à gauche";

export const WithSeparators = Template.bind({});
WithSeparators.args = {
  hasSeparator: true,
  children: [<Toggle label="Label 1" />, <Toggle label="Label 2" />, <Toggle label="Label 3" />],
};
WithSeparators.storyName = "Groupe d'interrupteur avec séparateur";

export const WithSeparatorsBetween = Template.bind({});
WithSeparatorsBetween.args = {
  hasSeparator: true,
  children: [<Toggle label="Label 1" hasSeparator />, <Toggle label="Label 2" hasSeparator />, <Toggle label="Label 3" hasSeparator />],
};
WithSeparatorsBetween.storyName = "Groupe d'interrupteur avec séparateurs entre chaque interrupteur";
