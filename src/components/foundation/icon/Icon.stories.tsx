import { Story } from '@storybook/react/types-6-0';

import Icon, { IconProps } from './Icon';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/icone

export default {
  title: 'Fondamentaux Techniques/Icône - icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "Les icônes fonctionnelles sont des symboles visuels qui accompagnent l’utilisateur dans ses actions et qui aident à sa compréhension de l’interface. Dans cette version, toutes les icônes de remixicon sont acceptées. Une nouvelle version est en court de développement pour correspondre aux icônes attendues par le système de design de l'état.",
      },
    },
  },
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'ri-account-circle-fill',
};
Default.storyName = 'Ajouter une îcone';

export const IconSize = Template.bind({});
IconSize.args = {
  name: 'ri-account-circle-fill',
  size: 'xs',
  children: 'icône xs',
};
IconSize.storyName = "Modifier la taille d'une îcone";

export const IconPosition = Template.bind({});
IconPosition.args = {
  name: 'ri-account-circle-fill',
  iconPosition: 'right',
  children: 'icône à droite du texte',
};
IconPosition.storyName = "Positionner l'îcone à droite du texte";

export const TitleIcon = Template.bind({});
TitleIcon.args = {
  name: 'ri-account-circle-fill',
  verticalAlign: 'top',
  children: 'icône lègérement en hauteur',
};
TitleIcon.storyName = "Positionner l'îcone en hauteur";

export const IconColor = Template.bind({});
IconColor.args = {
  name: 'ri-account-circle-fill',
  color: 'green',
  children: 'icône en vert',
};
IconColor.storyName = "Changer la couleur de l'icône";
