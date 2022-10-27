import { ComponentStory } from '@storybook/react';

import MediaImage from './MediaImage';

export default {
  title: 'MediaImage',
  component: MediaImage,
  argTypes: {
    size: {
      description: `Si vous souhaitez accentuer la visibilité d'une image vous pouvez utiliser les différentes tailles à votre disposition :
      - lg : dans cette taille, la largeur de l’image est supérieure à celle du contenu.
      - md : dans cette taille, la largeur de l’image correspond à celle du contenu. Par défaut (100%)
      - sm : dans cette taille, la largeur de l’image est inférieure à celle du contenu.
      `,
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
