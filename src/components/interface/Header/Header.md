L’en-tête permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

### Header avec barre de recherche, raccourcis outils et navigation

```jsx noeditor
import { Header, HeaderBody, Service, Tool, ToolItem, HeaderNav, NavItem, NavSubItem, ToolItemGroup } from '.';
import SearchBar from '../SearchBar/index';
import Logo from '../Logo';

<Header>
    <HeaderBody>
        <Logo splitCharacter={10}>République Française</Logo>
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
        <Tool
            buttonClose='fermer'
        >
            <ToolItemGroup>
                <ToolItem icon='rf-fi-lock-line' link='/path'>Se connecter</ToolItem>
                <ToolItem icon='rf-fi-add-circle-line' link='/path'>Créer un espace</ToolItem>
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
        <NavItem title='Home' link='/'/>
        <NavItem title='Resources'>
            <NavSubItem title='Ressource #1' link='/path-to-resources-1'/>
            <NavSubItem title='Ressource #2' link='/path-to-resources-2'/>
            <NavSubItem title='Ressource #3' link='/path-to-resources-3'/>
        </NavItem>
    </HeaderNav>
</Header>
```
