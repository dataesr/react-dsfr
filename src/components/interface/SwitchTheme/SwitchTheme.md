## Switch Theme - Paramètres d'affichage

Le parcours “Paramètres d’affichage” permet à l’utilisateur de choisir d'afficher le site en thème clair ou en thème sombre.

### Intégré dans l’en-tête du site
Lorsque le lien paramètres d’affichage est mis en avant dans l’en-tête de la page, il prend la forme d’un lien accès rapide.

```jsx
import { useState } from 'react';
import {
  Header,
  HeaderBody,
  Tool,
  ToolItem,
  ToolItemGroup,
} from '../Header';
import SwitchTheme from './SwitchTheme';

const [isOpen, setIsOpen] = useState(false);
<>
    <Header>
        <HeaderBody>
            <Tool closeButtonLabel="fermer">
            <ToolItemGroup>
                <ToolItem onClick={() => setIsOpen(true)}>
                    <span
                        className="fr-fi-theme-fill fr-link--icon-left"
                        aria-controls="fr-theme-modal"
                        data-fr-opened={isOpen}
                    >
                        Paramètres d’affichage
                    </span>
                </ToolItem>
            </ToolItemGroup>
            </Tool>
        </HeaderBody>
    </Header>
    <SwitchTheme isOpen={isOpen} setIsOpen={setIsOpen} />
</>
```

### Intégré dans le pied de page

Lorsque le lien paramètres d’affichage est mis en avant dans le pied de page, il est intégré au niveau des mentions légales.

```jsx
import { useState } from 'react';
import {
  Footer,
  FooterBody,
  FooterBottom,
  FooterLink,
} from '../Footer';
import {
    Logo
} from '../Logo';
import SwitchTheme from './SwitchTheme';

const [isOpen, setIsOpen] = useState(false);
<>
    <Footer>
        <FooterBody
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <FooterBottom>
            <FooterLink href="/">Footer Link</FooterLink>
            <FooterLink onClick={() => setIsOpen(true)}>
                <span
                className="fr-fi-theme-fill fr-link--icon-left"
                aria-controls="fr-theme-modal"
                data-fr-opened={isOpen}
                >
                  Paramètres d’affichage
                </span>
            </FooterLink>
        </FooterBottom>
    </Footer>
    <SwitchTheme isOpen={isOpen} setIsOpen={setIsOpen} />
</>
```

### Personnalisation

Il est possible de personnaliser les textes d'affichage.

```jsx
import { useState } from 'react';
import {
  Header,
  HeaderBody,
  Tool,
  ToolItem,
  ToolItemGroup,
} from '../Header';
import SwitchTheme from './SwitchTheme';

const [isOpen, setIsOpen] = useState(false);
<>
    <Header>
        <HeaderBody>
            <Tool closeButtonLabel="fermer">
            <ToolItemGroup>
                <ToolItem onClick={() => setIsOpen(true)}>
                    <span
                        className="fr-fi-theme-fill fr-link--icon-left"
                        aria-controls="fr-theme-modal"
                        data-fr-opened={isOpen}
                    >
                        Paramètres d’affichage
                    </span>
                </ToolItem>
            </ToolItemGroup>
            </Tool>
        </HeaderBody>
    </Header>
    <SwitchTheme 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        title="Titre de la modal"
        legend="Legende de la modal"
        darkLabel="Texte du mode sombre"
        lightLabel="Texte du mode clair"
     />
</>
```

### Hooks

il est possible de recuperer l'état courant du theme avec un hook react

```jsx
import { useState } from 'react';
import {
    Header,
    HeaderBody,
    Tool,
    ToolItem,
    ToolItemGroup,
} from '../Header';

const [isOpen, setIsOpen] = useState(false);
const theme = useTheme();

<>
    <Header>
        <HeaderBody>
            <Tool closeButtonLabel="fermer">
            <ToolItemGroup>
                <ToolItem onClick={() => setIsOpen(true)}>
                    <span
                        className="fr-fi-theme-fill fr-link--icon-left"
                        aria-controls="fr-theme-modal"
                        data-fr-opened={isOpen}
                    >
                        Paramètres d’affichage
                    </span>
                </ToolItem>
            </ToolItemGroup>
            </Tool>
        </HeaderBody>
    </Header>
    <SwitchTheme 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        title="Titre de la modal"
        legend="Legende de la modal"
        darkLabel="Texte du mode sombre"
        lightLabel="Texte du mode clair"
     />
     <h1>{`Le site est en ${theme} mode`}</h1>
</>
```
