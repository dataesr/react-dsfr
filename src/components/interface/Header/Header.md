## Header - En-tête

### Header avec barre de recherche, raccourcis outils et navigation

```
import {
    Header,
    HeaderBody,
    Service,
    Tool,
    ToolItem,
    HeaderNav,
    NavItem,
    NavSubItem,
    ToolItemGroup,
    MegaNavItem,
    MegaNavSubItem,
} from '.';
import Link from './../Link/index';
import SearchBar from '../SearchBar/index';
import Logo from '../Logo';

<Header closeButtonLabel='Close it!'>
    <HeaderBody>
        <Logo splitCharacter={10}>République Française</Logo>
        <Service
            title="Service title"
            description="Service Description"/>
        <Tool>
            <ToolItemGroup>
                <ToolItem icon='ri-lock-line' link='/path'>Tool Item #1</ToolItem>
                <ToolItem icon='ri-add-circle-line' link='/path'>Tool Item #2</ToolItem>
            </ToolItemGroup>
            <SearchBar
                onSearch={() => {
                }}
                label="SearchBar"
                placeholder="Search"
                buttonLabel="Search"
            />
        </Tool>
    </HeaderBody>
    <HeaderNav>
        <NavItem title='nav item #1' link='/'/>
        <NavItem title='nav item #2'>
            <NavSubItem title='nav subItem #1' link='/path-to-resources-1'/>
            <NavSubItem title='nav subItem #2' link='/path-to-resources-2' current/>
            <NavSubItem title='nav subItem #3' link='/path-to-resources-3'/>
        </NavItem>
        <MegaNavItem
            title='mega nav item #3'
            description='This is the description'
            as='h5'
            closeButtonLabel="Close"
            linkLabel='This is a link'
            link='/'>
            <MegaNavSubItem
                title="Category #1"
                link='/path-to-resources-1'>
                <Link title='title' href='/path'>Link #1</Link>
                <Link title='title' href='/path'current>Link #2</Link>
            </MegaNavSubItem>
            <MegaNavSubItem
                title="Category #2"
                link='/path-to-resources-2'
                current>
                <Link title='title' href='/path'>Link #1</Link>
            </MegaNavSubItem>
        </MegaNavItem>
        <NavItem title='nav item #4' link='/' current/>
    </HeaderNav>
</Header>
```

> Le composant Navigation peut être utilisé avec le package react-router-dom
```markup
<HeaderNav path={path}>
    <NavItem
      title="Countries"
      asLink={<RouterLink to="/myCountries" />}
    />
</HeaderNav>
```
