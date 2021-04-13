## Checkbox - Case à cocher 
Les cases à cocher permettent à l’utilisateur de sélectionner une ou plusieurs options dans une liste.. La case à cocher peut être utilisée seule ou en liste. Évitez les listes de plus de 5 items et lorsque vous souhaitez contraindre le choix à un seul élément - utiliser les boutons radios 🔗 

```jsx
<Checkbox
  value="value-1"
  onChange={() => {}}
  label="Label checkbox"
/>
```

L'état inactif indique que utilisateur ne peux pas interagir avec l'élément.
```jsx
<Checkbox
  value="value-1"
  onChange={() => {}}
  label="Label checkbox disabled"
  isDisabled={true}
/>
```

Texte sous le libellé de chaque case à cocher, afin d’apporter une précision à chaque élément.
```jsx
<Checkbox
  value="value-1"
  onChange={() => {}}
  label="Label checkbox"
  hint="Additionnal description"
/>
```

## Etat d’erreur
Sur une case à cocher simple (choix binaire), l'état d’erreur est signalé par le changement de couleur de la bordure - qui devient rouge - ,  et par l’affichage un message d’erreur apparait en-dessous du composant  (cf. couleurs fonctionnelles 🔗 : le rouge est la couleur de l’état erreur). 
```jsx
<Checkbox
  value="value-1"
  onChange={() => {}}
  label="Label checkbox"
  messageType="error"
  message="Error message"
  
/>
```

## Tailles
La taille par défaut est de 24px (taille Medium - MD) , ce qui permet optimiser l’ergonomie et l’accessibilité en ayant un zone cliquable confortable.

Une taille ‘small’ (SM) de 16 px est également disponible. Il s’agit de la taille standard proposé par les navigateurs. Attention toutefois à laisser une zone de clic suffisante (notamment pour le tactile ou une zone de 44 px de hauteur est fortement conseillée) cf. proposition de fieldset.
```jsx
<Checkbox
  value="value-1"
  onChange={() => {}}
  label="Label checkbox size sm"
  size="sm"
/>
```

## Liste verticale  - checkbox block
Cette organisation verticale d’une liste de cases à cocher est les plus courante et la plus facile à lire pour l’utilisateur.
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup>
  <Checkbox
    label="Label checkbox 1"
    onChange={() => {}}
    value="value-1"
  />
  <Checkbox
    label="Label checkbox 2"
    onChange={() => {}}
    value="value-2"
  />
</CheckboxGroup>
```

### Légende pour l'ensemble des champs
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  legend="Legend"
>
  <Checkbox
    label="Label checkbox 1"
    onChange={() => {}}
    value="value-1"
  />
  <Checkbox
    label="Label checkbox 2"
    onChange={() => {}}
    value="value-2"
  />
</CheckboxGroup>
```

## Liste horizontale - Inline checkbox
Cette organisation doit être uniquement utilisée lorsque il y a 2 options ou que les libellés des entrées sont très courtes. Pour les autres cas, il faut privilégier les listes verticales, plus faciles à lire pour l’utilisateur.
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup isInline>
  <Checkbox
    label="Label checkbox 1"
    onChange={() => {}}
    value="value-1"
  />
  <Checkbox
    label="Label checkbox 2"
    onChange={() => {}}
    value="value-2"
  />
</CheckboxGroup>
```

## Liste avec texte d’aide
Il est recommandé d’ajouter un texte d’aide afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportés de 2 façons :

### Via un texte sous le titre du groupe
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  hint="Additionnal descritption"
  legend="Legend"
>
  <Checkbox
    label="Label checkbox 1"
    onChange={() => {}}
    value="value-1"
  />
  <Checkbox
    label="Label checkbox 2"
    onChange={() => {}}
    value="value-2"
  />
</CheckboxGroup>
```

### Via un texte sous le libellé de chaque case à cocher
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  legend="Legend"
>
  <Checkbox
    hint="Additionnal description"
    label="Label checkbox 1"
    onChange={e => alert(e.target.value)}
    value="value-1"
  />
  <Checkbox
    hint="Additionnal description"
    label="Label checkbox 2"
    onChange={e => alert(e.target.value)}
    value="value-2"
  />
</CheckboxGroup>
```

### Etat d’erreur des groupes
Sur les groupes de cases à cocher, l'état d’erreur est signalé par un ligne verticale rouge et par un message d’erreur placé sous le composant (cf. couleurs fonctionnelles 🔗 : le rouge est la couleur de l’état erreur)
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  legend="Legend"
  messageType="error"
  message="Error message"
>
  <Checkbox
    label="Label checkbox 1"
    onChange={e => alert(e.target.value)}
    value="value-1"
  />
  <Checkbox
    label="Label checkbox 2"
    onChange={e => alert(e.target.value)}
    value="value-2"
  />
</CheckboxGroup>
```