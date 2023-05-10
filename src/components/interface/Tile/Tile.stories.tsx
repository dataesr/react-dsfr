import { ComponentStory } from '@storybook/react';

import Tile from './Tile';
import TileBody from './TileBody';
import TileImage from './TileImage';

export default {
  title: 'Composants/Tuile - Tile',
  component: Tile,
  subcomponents: { TileBody, TileImage },
};

const Template: ComponentStory<typeof Tile> = (args) => (
  <Tile {...args} />
);

export const SimpleTile = Template.bind({});
SimpleTile.args = {
  children: [
    <TileBody title="Titre MD bold">
      Description
    </TileBody>,
  ],
};
SimpleTile.storyName = 'Tuile simple';

export const SimpleTileWithImage = Template.bind({});
SimpleTileWithImage.args = {
  children: [
    <TileBody title="Titre MD bold">
      Tuile avec image
    </TileBody>,
    <TileImage alt="" src="https://picsum.photos/200/300" />,
  ],
};
SimpleTileWithImage.storyName = 'Tuile simple avec image';

export const HorizontalTile = Template.bind({});
HorizontalTile.args = {
  children: [
    <TileBody title="Titre MD bold">
      Tuile horizontale
    </TileBody>,
  ],
  horizontal: true,
};
HorizontalTile.storyName = 'Tuile horizontale';

export const HorizontalMDTile = Template.bind({});
HorizontalMDTile.args = {
  children: [
    <TileBody title="Titre MD bold">
      Tuile horizontale MD
    </TileBody>,
  ],
  horizontalMedium: true,
};
HorizontalMDTile.storyName = 'Tuile horizontale MD';

export const VerticalMDTile = Template.bind({});
VerticalMDTile.args = {
  children: [
    <TileBody title="Titre MD bold">
      Tuile verticale MD
    </TileBody>,
  ],
  verticalMedium: true,
};
VerticalMDTile.storyName = 'Tuile verticale MD';
