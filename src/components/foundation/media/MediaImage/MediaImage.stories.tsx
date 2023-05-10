import { ComponentStory } from '@storybook/react';

import MediaImage from './MediaImage';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/medias

export default {
  title: 'Fondamentaux Techniques/Médias Image - Media Image',
  component: MediaImage,
  argTypes: {
    size: {
      description: `Si vous souhaitez accentuer la visibilité d'une image vous pouvez utiliser les différentes tailles à votre disposition :
      - lg : dans cette taille, la largeur de l'image est supérieure à celle du contenu.
      - md : dans cette taille, la largeur de l'image correspond à celle du contenu. Par défaut (100%)
      - sm : dans cette taille, la largeur de l'image est inférieure à celle du contenu.
      `,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Les médias sont des images ou des vidéos présents au sein des pages du site. Ils sont utilisés pour donner une information visuelle ou dans un but purement décoratif.',
      },
    },
  },
};

const Template: ComponentStory<typeof MediaImage> = (args) => <MediaImage {...args} />;

export const Image = Template.bind({});
Image.args = {
  src: 'https://3.bp.blogspot.com/-PyzgZNWTD7c/UbzG65ExiMI/AAAAAAAABlw/ODiasL9Nb0Y/s320/ASPIRE+Wallpaper.jpg',
  alt: 'alternative description',
  legend: 'legend',
  size: 'md',
};

Image.storyName = 'Image';
