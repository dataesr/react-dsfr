### Barre de recherche Medium

Choisissez la barre de recherche medium lorsqu'il y a des contraintes d'espace dans vos interfaces. Le cas d’usage principal est l’accès à la recherche globale depuis le header.

Il peut également être spécifique à certains composants dans le cas de recherche contextuelle (exemple : recherche pour filtrer des listes ou un tableau de données).

```
import { useState } from 'react';

const [value, setValue] = useState('');

<SearchBar
  value={value}
  onChange={e => setValue(e.target.value)}
  label="SearchBar du gouvernement"
  placeholder="Rechercher dans..."
  buttonLabel="Rechercher"
/>
```

### Barre de recherche Large
Choisissez la barre de recherche large pour présenter un moteur de recherche global à l’intérieur d'une page (exemple : mise en avant de la recherche depuis la home page, moteur de recherche sur la liste de résultats de recherche).

```
import { useState } from 'react';

const [value, setValue] = useState('');

<SearchBar
  size="lg"
  value={value}
  onChange={e => setValue(e.target.value)}
  label="SearchBar du gouvernement"
  placeholder="Rechercher dans..."
  buttonLabel="Rechercher"
/>
```

### Barre de recherche responsive
Pour l’affichage mobile/tablette, nous proposons une seule barre de recherche quelque soit la barre de recherche choisie pour le desktop. À noter que l’adaptation responsive se fera automatiquement, pour la barre de recherche MD et LG.

### Règles d’utilisation

#### Usage
La barre de recherche doit être assez large, pour afficher 27 caractères minimum. Cela doit permettre aux utilisateurs de saisir plusieurs termes et qu’ils restent tous visibles. Si les termes de la recherche reste visible, l’utilisateur peut plus facilement vérifier sa requête avant de la soumettre.

Quand un site propose une recherche globale :
  - celle-ci doit être intégrée dans le header (cf le composant En-tête 🔗 )  et accessible depuis l’ensemble des pages de votre site.
  - si elle constitue le point de départ de la navigation pour l’utilisateur, la barre de recherche Large doit être présentée comme l'élément le plus important sur la page d’accueil.

#### Accessibilité
Les règles d’accessibilité sur la barre de recherche :
  - Le champ de recherche doit avoir une étiquette (visible ou non) et un attribut title permettant de comprendre la nature de la saisie attendue
  - L’attribut title du champ de recherche doit contenir la fonction du champ ET le contenu de l'attribut placeholder
  - Le bouton de validation de recherche doit avoir un attribut title et un libellé (éventuellement masqué avec la classe sr-only)

#### Contenu
Pour le libellé du champ de saisie, utiliser un texte clair et concis qui définit le contexte de recherche à l'utilisateur (recherche globale ? recherche d’un type de contenu spécifiques ?…).

Pour le libellé du bouton de recherche, nous préconisons par défaut d’utiliser le texte “Rechercher” qui est le plus clair pour l’utilisateur et respecte les règles d'écriture pour le contenu des boutons 🔗 .
