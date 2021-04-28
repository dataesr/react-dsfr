## Header - En-tête

### Header avec barre de recherche, raccourcis outils et navigation

```jsx
import { Header, HeaderBody, Service, Tool, ToolItem, HeaderNav, NavItem, NavSubItem, ToolItemGroup } from '.';
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
                <ToolItem icon='fr-fi-lock-line' link='/path'>Tool Item #1</ToolItem>
                <ToolItem icon='rf-fi-add-circle-line' link='/path'>Tool Item #2</ToolItem>
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
        <NavItem title='nav item #3' link='/' current/>
    </HeaderNav>
</Header>
```
