import { ComponentStory } from '@storybook/react';

import Card from './Card';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardDetail from './CardDetail';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';
import Tag from '../Tag/Tag';
import TagGroup from '../Tag/TagGroup';
import Badge from '../Badge/Badge';
import BadgeGroup from '../Badge/BadgeGroup';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte

export default {
  title: 'Composants/Carte - Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardImage,
    CardDetail,
    CardTitle,
    CardDescription,
  },
};

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  href: '/',
  children: [
    <CardHeader>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
    </CardHeader>,
    <CardTitle>
      Card Title
    </CardTitle>,
    <CardDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Uenim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardDescription>],
};
SimpleCard.storyName = 'Carte';

export const HorizontalCard = Template.bind({});
HorizontalCard.args = {
  href: '/',
  isHorizontal: true,
  children: [
    <CardHeader>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
    </CardHeader>,
    <CardTitle>
      Card Title
    </CardTitle>,
    <CardDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Uenim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardDescription>],
};
HorizontalCard.storyName = 'Carte horizontal';

export const TaggedCard = Template.bind({});
TaggedCard.args = {
  href: '/',
  children: [
    <CardHeader>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
    </CardHeader>,
    <CardTitle>
      Card Title
    </CardTitle>,
    <CardDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Uenim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <TagGroup>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
      </TagGroup>
    </CardDescription>],
};
TaggedCard.storyName = 'Carte avec tag';

export const DetailedCard = Template.bind({});
DetailedCard.args = {
  href: '/',
  children: [
    <CardHeader>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
    </CardHeader>,
    <CardDetail position="bottom">Detail</CardDetail>,
    <CardTitle>
      Card Title
    </CardTitle>,
    <CardDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Uenim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardDescription>],
};
DetailedCard.storyName = 'Carte avec detail';

export const BadgedCard = Template.bind({});
BadgedCard.args = {
  href: '/',
  children: [
    <CardHeader>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
    </CardHeader>,
    <CardDetail>
      <BadgeGroup>
        <Badge
          text="Badge #1"
        />
        <Badge
          text="Badge #2"
        />
      </BadgeGroup>
    </CardDetail>,
    <CardTitle>
      Card Title
    </CardTitle>,
    <CardDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Uenim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardDescription>],
};
BadgedCard.storyName = 'Carte avec badge';

export const BorderlessCard = Template.bind({});
BorderlessCard.args = {
  href: '/',
  hasBorder: false,
  children: [
    <CardHeader>
      <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
    </CardHeader>,
    <CardTitle>
      Card Title
    </CardTitle>,
    <CardDescription>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Uenim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardDescription>],
};
BorderlessCard.storyName = 'Carte sans bordure';
