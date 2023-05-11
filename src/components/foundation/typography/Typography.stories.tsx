import { ComponentStory } from '@storybook/react';

import AltTitle from './AltTitle/AltTitle';
import Text from './Text/Text';
import Title from './Title/Title';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-de-l-identite-de-l-etat/typographie

export default {
  title: 'Fondamentaux Techniques/Typographie - Typography',
  parameters: {
    docs: {
      description: {
        component: 'Les typographies Marianne® et Spectral sont les typographies officielles de la charte de l\'État. Leur usage crée une cohérence entre les interfaces et offre une expérience positive à l\'utilisateur. Leur respect renforce également la reconnaissance de la parole de l\'État.',
      },
    },
  },
};

const AltTitleTemplate: ComponentStory<typeof AltTitle> = (args) => (
  <AltTitle {...args} />
);

const TextTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const TextAlternatif = TextTemplate.bind({});
TextAlternatif.args = {
  children: 'Random text',
  size: 'md',
  spacing: 'my-2w pt-3w',
};
TextAlternatif.storyName = 'Texte alternatif';

const TitleTemplate: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

export const Titre = TitleTemplate.bind({});
Titre.args = {
  as: 'h1',
  children: 'Titre de page',
  look: 'h4',
  spacing: 'my-2w pt-3w',
};
Titre.storyName = 'Titre';

export const TitreAlternatif = AltTitleTemplate.bind({});
TitreAlternatif.args = {
  as: 'h1',
  children: 'Titre alternatif de page',
  size: 'md',
  spacing: 'my-2w pt-3w',
};
TitreAlternatif.storyName = 'Titre alternatif';
