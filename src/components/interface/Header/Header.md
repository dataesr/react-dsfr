L’en-tête permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

### Header avec barre de recherche, raccourcis outils et navigation

```jsx
import { Header, HeaderBody, Service, Tool, ToolItem, HeaderNav, NavItem, NavSubItem, Brand, ToolItemGroup } from '.';
import SearchBar from '../SearchBar/index';

<Header>
    <HeaderBody>
        <Brand
            title="republique<br>française"
            linkTitle="République française" />
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation" />
        <Tool
            buttonClose='fermer'
        >
            <ToolItemGroup>
                <ToolItem title='Se connecter' icon='rf-fi-lock-line' link='/path'></ToolItem>
                <ToolItem title='Créer un espace' icon='rf-fi-add-circle-line' link='/path'></ToolItem>
            </ToolItemGroup>
            <SearchBar
                onSearch={() => {
                }}
                label="SearchBar du gouvernement"
                placeholder="Rechercher"
                buttonLabel="Rechercher"
            />
        </Tool>
    </HeaderBody>
    <HeaderNav>
        <NavItem title='Home' link='/' />
        <NavItem title='Resources'>
            <NavSubItem title='Ressource #1' link='/path-to-resources-1' />
            <NavSubItem title='Ressource #2' link='/path-to-resources-2' />
            <NavSubItem title='Ressource #3' link='/path-to-resources-3' />
        </NavItem>
    </HeaderNav>
</Header>
```