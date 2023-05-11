import { Story } from '@storybook/react/types-6-0';

import SearchBar, { SearchBarProps } from './SearchBar';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/barre-de-recherche

export default {
  title: 'Composants/Barre de recherche - Search',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: "La barre de recherche est un système de navigation qui permet à l'utilisateur d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression. Pour l’affichage mobile/tablette, il est obligatoire d’utiliser le format MD qui est le plus adapté. ",
      },
    },
  },
};

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Par défaut, la taille est fixée à "md"',
};
Default.storyName = 'Barre de recherche';

export const MDSize = Template.bind({});
MDSize.args = {
  placeholder: 'Rechercher',
  size: 'lg',
};
MDSize.storyName = 'Barre de recherche large';

export const ButtonLabel = Template.bind({});
ButtonLabel.args = {
  placeholder: 'Rechercher',
  buttonLabel: 'Cliquez ici pour effectuer votre recherche',
};
ButtonLabel.storyName = 'Label sur le bouton';
