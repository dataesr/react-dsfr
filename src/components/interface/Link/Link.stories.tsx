import { Story } from '@storybook/react/types-6-0';

import Link, { LinkProps } from './Link';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lien

export default {
  title: 'Composants/Lien - Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: 'Le lien permet la navigation entre une page et un autre contenu au sein de la même page, du même site ou externe.',
      },
    },
  },
};

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Votre lien',
  href: 'https://www.example.com',
};
Default.storyName = 'Lien';

export const LinkInText = Template.bind({});
LinkInText.args = {
  children: (
    <p>
      {' '}
      Votre
      {' '}
      <Link href="https://www.example.com">lien</Link>
    </p>
  ),
};
LinkInText.storyName = 'Lien au fil du texte';

export const Target = Template.bind({});
Target.args = {
  children: "Lien vers l'exterieur",
  href: 'https://www.example.com',
  target: '_blank',
};
Target.storyName = "Lien vers l'exterieur";

export const Size = Template.bind({});
Size.args = {
  children: 'Petit',
  href: 'https://www.example.com',
  size: 'sm',
};
Size.storyName = 'Taille du lien';

export const Title = Template.bind({});
Title.args = {
  children: 'Votre lien avec description',
  href: 'https://www.example.com',
  title: 'Vers le lien https://www.example.com',
};
Title.storyName = 'Description du lien';

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Lien avec icône à gauche',
  href: 'https://www.example.com',
  icon: 'fr-fi-arrow-right-line',
  iconPosition: 'left',
};
LeftIcon.storyName = 'Lien avec icône à gauche';

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Lien avec icône à droite',
  href: 'https://www.example.com',
  icon: 'fr-fi-arrow-right-line',
  iconPosition: 'right',
};
RightIcon.storyName = 'Lien avec icône à droite';

export const IconSize = Template.bind({});
IconSize.args = {
  children: 'Grande icône sur lien',
  href: 'https://www.example.com',
  icon: 'fr-fi-arrow-right-line',
  iconSize: 'xl',
  iconPosition: 'right',
};
IconSize.storyName = "Taille de l'icône";

export const IconVerticalPosition = Template.bind({});
IconVerticalPosition.args = {
  children: 'Icône en position vers le haut',
  href: 'https://www.example.com',
  icon: 'fr-fi-arrow-right-line',
  verticalIconPosition: 'top',
};
IconVerticalPosition.storyName = "Position vertical de l'icône";
