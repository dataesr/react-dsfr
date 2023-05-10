import { ComponentStory } from '@storybook/react';

import Header from './Header';

import HeaderBody from './HeaderBody';
import HeaderOperator from './HeaderOperator';
import Service from './Service';
import Tool from './Tool';
import ToolItemGroup from './ToolItemGroup';
import ToolItem from './ToolItem';
import HeaderNav from './HeaderNav';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';
import MegaNavItem from './MegaNavItem';
import MegaNavSubItem from './MegaNavSubItem';

import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete

export default {
  title: 'En-tête - Header',
  component: Header,
  subcomponents: {
    HeaderBody,
    HeaderOperator,
    Service,
    Tool,
    ToolItemGroup,
    ToolItem,
    HeaderNav,
    NavItem,
    NavSubItem,
    MegaNavItem,
    MegaNavSubItem,
  },
};

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  closeButtonLabel: 'Fermeture',
  children: [
    <HeaderBody>
      <Logo splitCharacter={10}>République Française</Logo>
      <HeaderOperator>
        <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
      </HeaderOperator>
      <Service
        title="Service title"
        description="Service Description"
      />
      <Tool>
        <ToolItemGroup>
          <ToolItem icon="ri-lock-line" link="/path">Tool Item #1</ToolItem>
          <ToolItem icon="ri-add-circle-line" link="/path">Tool Item #2</ToolItem>
        </ToolItemGroup>
        <SearchBar
          onSearch={() => {
          }}
          label="SearchBar"
          placeholder="Search"
          buttonLabel="Search"
        />
      </Tool>
    </HeaderBody>,
    <HeaderNav>
      <NavItem title="nav item #1" link="/" />
      <NavItem title="nav item #2">
        <NavSubItem title="nav subItem #1" link="/path-to-resources-1" />
        <NavSubItem title="nav subItem #2" link="/path-to-resources-2" current />
        <NavSubItem title="nav subItem #3" link="/path-to-resources-3" />
      </NavItem>
      <MegaNavItem
        title="mega nav item #3"
        description="This is the description"
        as="h5"
        closeButtonLabel="Close"
        linkLabel="This is a link"
        link="/"
      >
        <MegaNavSubItem
          title="Category #1"
          link="/path-to-resources-1"
        >
          <Link title="title" href="/path">Link #1</Link>
          <Link title="title" href="/path" current>Link #2</Link>
        </MegaNavSubItem>
        <MegaNavSubItem
          title="Category #2"
          link="/path-to-resources-2"
        >
          <Link title="title" href="/path">Link #1</Link>
        </MegaNavSubItem>
      </MegaNavItem>
      <NavItem title="nav item #4" link="/" current />
      <NavItem title="nav item onClick" link="#" onClick={() => console.log('NavItem onClick')} />
    </HeaderNav>],
};
SimpleCheckbox.storyName = 'En-tête';
