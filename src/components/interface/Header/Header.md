L’en-tête permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

### Header simple

```jsx
import { Header, HeaderBody } from '.';

<Header>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
    </HeaderBody>
</Header>
```

### Header avec titre et description du service

```jsx
import { Header, HeaderBody, Service } from '.';

<Header>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
    </HeaderBody>
</Header>
```

### Header avec logo, titre et description du service

```jsx
import { Header, HeaderBody, Service, Logo } from '.';

<Header>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
        <Logo
            src="https://dummyimage.com/120x60/000091/fff.png&text=logo+horizontal"
            alt="Texte alternatif logo"/>
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
    </HeaderBody>
</Header>
```

### Header avec raccourcis outils

```jsx
import { Header, HeaderBody, Service, Tools } from '.';

<Header
    navTools={[
        { title: 'Se connecter', icon: 'rf-fi-lock-line', link: '/path' },
        { title: 'Créer un espace', icon: 'rf-fi-add-circle-line', link: '/path' }
    ]}>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
        <Tools/>
    </HeaderBody>
</Header>
```

### Header avec barre de recherche

```jsx
import { Header, HeaderBody, Service, Tools } from '.';
import SearchBar from '../SearchBar/index';

<Header>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
        <Tools
            buttonClose='fermer'
        >
            <SearchBar
                onSearch={() => {
                }}
                label="SearchBar du gouvernement"
                placeholder="Rechercher"
                buttonLabel="Rechercher"
            />
        </Tools>
    </HeaderBody>
</Header>
```

### Header avec navigation

```jsx
import { Header, HeaderBody, Service, Tools } from '.';
import SearchBar from '../SearchBar/index';

<Header navItems={[
    { title: 'Home', link: '/home' },
    { title: 'Ressources', subItems: [
            { title: 'Ressource #1', link: '/path-to-resources-1' },
            { title: 'Ressource #2', link: '/path-to-resources-2' }
        ]
    }]}>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
    </HeaderBody>
</Header>
```

### Header avec barre de recherche, raccourcis outils et navigation

```jsx
import { Header, HeaderBody, Service, Tools } from '.';
import SearchBar from '../SearchBar/index';

<Header
    navTools={[
        { title: 'Se connecter', icon: 'rf-fi-lock-line', link: '/path' },
        { title: 'Créer un espace', icon: 'rf-fi-add-circle-line', link: '/path' }
    ]}
    navItems={[
        { title: 'Home', link: '/home' },
        { title: 'Ressources', subItems: [
                { title: 'Ressource #1', link: '/path-to-resources-1' },
                { title: 'Ressource #2', link: '/path-to-resources-2' }
            ]
        }]}>
    <HeaderBody
        brand="republique<br>française"
        brandLinkTitle="République française">
        <Service
            title="Nom du service"
            description="baseline - précisions sur l‘organisation"/>
        <Tools
            buttonClose='fermer'
        >
            <SearchBar
                onSearch={() => {
                }}
                label="SearchBar du gouvernement"
                placeholder="Rechercher"
                buttonLabel="Rechercher"
            />
        </Tools>
    </HeaderBody>
</Header>
```