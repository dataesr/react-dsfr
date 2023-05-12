import { Story } from '@storybook/react/types-6-0';

import Share, { ShareProps } from './Share';
import ShareButton, { ShareButtonProps } from './ShareButton';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/partage

export default {
  title: 'Composants/Partage - Share',
  component: Share,
  subcomponents: { ShareButton },
  parameters: {
    docs: {
      description: {
        component: 'Les boutons de partage permettent aux utilisateurs de partager facilement un contenu qu’il consulte à d’autres utilisateurs.',
      },
    },
  },
};

const Template: Story<ShareProps> = (args) => <Share {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<ShareButton type="facebook" />, <ShareButton type="twitter" />, <ShareButton type="linkedin" />, <ShareButton type="copy" />, <ShareButton type="mail" />],
  title: 'Partager la page',
};
Default.storyName = 'Partage par défaut';

export const ShareWithLink = Template.bind({});
ShareWithLink.args = {
  children: [<ShareButton type="facebook" href="https://exemple.fr" />],
  title: 'Partager la page',
};
ShareWithLink.storyName = "Partage par défaut avec lien vers l'icône cliquée";

export const ShareMail = Template.bind({});
ShareMail.args = {
  children: [<ShareButton type="mail" />],
  title: 'Partager la page',

};
ShareMail.storyName = 'Partager par email';

export const CopyAndShare = Template.bind({});
CopyAndShare.args = {
  children: [<ShareButton type="copy" />],
  title: 'Copier dans le presse-papier',
};
CopyAndShare.storyName = 'Copier dans le presse-papier';
