import { Story } from '@storybook/react/types-6-0';

import Share, { ShareProps } from './Share';
import ShareButton from './ShareButton';

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
  children: [
    <ShareButton type="facebook" label="Partager sur Facebook" key="facebook" />,
    <ShareButton type="twitter" label="Partager sur Twitter" key="twitter" />,
    <ShareButton type="linkedin" label="Partager sur LinkedIn" key="linkedin" />,
    <ShareButton type="copy" label="Copier le lien" key="copy" />,
    <ShareButton type="mail" label="Envoyer le lien par email" key="mail" />,
  ],
  title: 'Partager la page',
};
Default.storyName = 'Partage par défaut';

export const ShareWithLink = Template.bind({});
ShareWithLink.args = {
  children: [<ShareButton type="facebook" href="https://exemple.fr" label="Partager sur Facebook" key="faceboook2" />],
  title: 'Partager la page',
};
ShareWithLink.storyName = "Partage par défaut avec lien vers l'icône cliquée";

export const ShareMail = Template.bind({});
ShareMail.args = {
  children: [<ShareButton type="mail" label="Envoyer le lien par email" key="mail2" />],
  title: 'Partager la page',

};
ShareMail.storyName = 'Partager par email';

export const CopyAndShare = Template.bind({});
CopyAndShare.args = {
  children: [<ShareButton type="copy" label="Copier le lien" key="copy2" />],
  title: 'Copier dans le presse-papier',
};
CopyAndShare.storyName = 'Copier dans le presse-papier';
