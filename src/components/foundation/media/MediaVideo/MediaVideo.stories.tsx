import { ComponentStory } from '@storybook/react';

import MediaVideo from './MediaVideo';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/medias

export default {
  title: 'Médias Vidéo - Media Video',
  component: MediaVideo,
  argTypes: {
    size: {
      description: `Si vous souhaitez accentuer la visibilité d'une vidéo vous pouvez utiliser les différentes tailles à votre disposition
      - lg : dans cette taille, la largeur de la vidéo est supérieure à celle du contenu.
      - md : dans cette taille, la largeur de la vidéo correspond à celle du contenu.
      - sm : dans cette taille, la largeur de la vidéo est inférieure à celle du contenu.
      `,
    },
  },
};

const Template: ComponentStory<typeof MediaVideo> = (args) => (
  <MediaVideo {...args}>
    <iframe title="titre de l’iframe" className="fr-responsive-vid__player" src="https://www.youtube.com/embed/HyirpmPL43I" width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" />
  </MediaVideo>
);

export const Video16x9 = Template.bind({});
Video16x9.args = {
  buttonLabel: 'Transcription',
  legend: 'legend',
  size: 'md',
};
Video16x9.storyName = 'Video 16x9';

export const Video4x3 = Template.bind({});
Video4x3.args = {
  buttonLabel: 'Transcription',
  legend: 'legend',
  size: 'md',
  ratio: '4x3',
};
Video4x3.storyName = 'Video 4x3';
