### Barre de recherche Medium

```jsx
<SearchBar
  onSearch={() => {}}
  label="SearchBar du gouvernement"
  placeholder="Rechercher dans..."
  buttonLabel="Rechercher"
/>
```

### Barre de recherche Large

```jsx
<SearchBar
  size="lg"
  onSearch={() => {}}
  label="SearchBar du gouvernement"
  placeholder="Rechercher dans..."
  buttonLabel="Rechercher"
/>
```

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

Pour le libellé du bouton de recherche, nous préconisons par défaut d’utiliser le texte “Rechercher” qui est le plus clair pour l’utilisateur et respecte les règles d'écriture pour le contenu des boutons.
