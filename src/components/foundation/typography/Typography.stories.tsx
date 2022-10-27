import { ComponentStory } from '@storybook/react';

import AltTitle from './AltTitle/AltTitle';
import Text from './Text/Text';
import Title from './Title/Title';

export default {
  title: 'Typography',
};

const AltTitleTemplate: ComponentStory<typeof AltTitle> = (args) => (
  <AltTitle {...args} />
);

export const TitreAlternatif = AltTitleTemplate.bind({});
TitreAlternatif.args = {
  as: 'h1',
  size: 'md',
  children: 'Titre alternatif de page',
  spacing: 'my-2w pt-3w',
};
TitreAlternatif.storyName = 'Titre alternatif';

const TextTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const TextAlternatif = TextTemplate.bind({});
TextAlternatif.args = {
  size: 'md',
  children: 'Random text',
  spacing: 'my-2w pt-3w',
};
TextAlternatif.storyName = 'Texte alternatif';

const TitleTemplate: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

export const Titre = TitleTemplate.bind({});
Titre.args = {
  as: 'h1',
  look: 'h4',
  children: 'Titre de page',
  spacing: 'my-2w pt-3w',
};
Titre.storyName = 'Titre';
