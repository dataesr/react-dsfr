import { ComponentStory } from '@storybook/react';
import SideMenu from './SideMenu';
import SideMenuItem from './SideMenuItem';
import SideMenuLink from './SideMenuLink';

export default {
  title: 'Composants/Menu latéral - sidemenu',
  component: SideMenu,
  subcomponents: {
    SideMenuItem,
  },
  parameters: {
    docs: {
      description: {
        component: 'Le menu latéral permet aux utilisateurs de naviguer entre les différentes pages d’une rubrique ou d’un même thème.<br /> Le menu latéral est un système de navigation vertical présentant une liste de liens placée à côté du contenu(à gauche ou à droite de la page) et donnant accès jusqu\'à 3 niveaux d’arborescence. <br />Ce composant doit être utilisé sur les sites avec un niveau de profondeur assez important(2 niveaux de navigation ou plus). <br />Le menu latéral se compose d’un titre de rubrique(optionnel) et d’une liste de liens sur 3 niveaux(les pages associées à une même rubrique sont regroupées dans des collapse).',
      },
    },
  },
};

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
);

export const StoryOne = Template.bind({});
StoryOne.args = {
  children: [
    <SideMenuLink href="#">Lien1</SideMenuLink>,
    <SideMenuLink href="#">Lien2</SideMenuLink>,
    <SideMenuLink href="#">Lien3</SideMenuLink>,
  ],
  sticky: true,
  title: 'Titre du menu',
};
StoryOne.storyName = 'Navigation latérale de base';
StoryOne.parameters = {
  docs: {
    description: {
      story: 'Menu latéral avec un seul niveau d’arborescence(accès direct)',
    },
  },
};

export const StoryTwo = Template.bind({});
StoryTwo.args = {
  children: [
    <SideMenuItem title="Menu1">
      <SideMenuLink href="#">Lien1</SideMenuLink>
      <SideMenuLink href="#">Lien2</SideMenuLink>
      <SideMenuLink href="#">Lien3</SideMenuLink>
    </SideMenuItem>,
    <SideMenuItem title="Menu2">
      <SideMenuLink href="#">Lien1</SideMenuLink>
      <SideMenuLink href="#">Lien2</SideMenuLink>
      <SideMenuLink href="#">Lien3</SideMenuLink>
    </SideMenuItem>,
  ],
};
StoryTwo.storyName = 'Menu latéral avec deux niveaux d’arborescence';
StoryTwo.parameters = {
  docs: {
    description: {
      story: 'Il permet d’afficher les niveaux secondaires d’une rubrique. Le click sur le premier niveau fait apparaitre la liste des liens lui étant rattachée.',
    },
  },
};

export const StoryThree = Template.bind({});
StoryThree.args = {
  children: [
    <SideMenuItem title="Menu1">
      <SideMenuLink href="#">Lien1</SideMenuLink>
      <SideMenuLink href="#">Lien2</SideMenuLink>
      <SideMenuItem title="SubMenu1">
        <SideMenuLink href="#">Lien1</SideMenuLink>
        <SideMenuLink href="#">Lien2</SideMenuLink>
        <SideMenuLink href="#">Lien3</SideMenuLink>
      </SideMenuItem>
      <SideMenuLink href="#">Lien3</SideMenuLink>
    </SideMenuItem>,
  ],
};
StoryThree.storyName = 'Menu latéral avec trois niveaux d’arborescence';
StoryThree.parameters = {
  docs: {
    description: {
      story: 'Il permet d’afficher les niveaux 1, 2 et 3 imbriqués d’une rubrique.',
    },
  },
};

export const StoryFour = Template.bind({});
StoryFour.args = {
  children: [
    <SideMenuLink href="#">Lien1</SideMenuLink>,
    <SideMenuLink href="#">Lien2</SideMenuLink>,
    <SideMenuLink href="#">Lien3</SideMenuLink>,
  ],
  className: 'fr-sidemenu--right',
};
StoryFour.storyName = 'Menu latéral aligné à droite';
StoryFour.parameters = {
  docs: {
    description: {
      story: 'Lorsque le menu est placé à droite de la page, il est nécessaire d’associer à l\'élément<nav> la classe fr- sidemenu avec le modificateur fr- sidemenu--right afin que la bordure se positionne à gauche du menu.On peut également le rendre fixe avec la classe fr- sidemenu--sticky.',
    },
  },
};
export const StoryFive = Template.bind({});
StoryFive.args = {
  children: [
    <SideMenuLink href="#">Lien1</SideMenuLink>,
    <SideMenuLink href="#">Lien2</SideMenuLink>,
    <SideMenuLink href="#">Lien3</SideMenuLink>,
  ],
  className: 'fr-sidemenu--sticky-full-height',
};
StoryFive.storyName = 'Menu latéral fixe, affiché sur 100% de la hauteur de page';
StoryFive.parameters = {
  docs: {
    description: {
      story: 'Enfin vous pouvez afficher un menu latéral fixe sur 100% de la hauteur de votre page.<br />Pour cela il suffit d’associer à l\'élément <nav> la classe a classe fr-sidemenu avec le modificateur fr-sidemenu--sticky-full-height .',
    },
  },
};
