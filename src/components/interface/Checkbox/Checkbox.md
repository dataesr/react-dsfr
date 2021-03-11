Les cases à cocher permettent à l’utilisateur de sélectionner une ou plusieurs options dans une liste.
Elles sont utilisées pour effectuer des sélections multiples (de 0 à N éléments) ou bien pour permettre un choix binaire, lorsque l’utilisateur peut sélectionner ou désélectionner une seule option. 

## Case à cocher - checkbox
La case à cocher peut être utilisée seule ou en liste. Évitez les listes de plus de 5 items et lorsque vous souhaitez contraindre le choix à un seul élément - utiliser les boutons radios 🔗 

```jsx
import { useState } from 'react';

<Checkbox
  value="value-1"
  onChange={e => alert(e.target.value)}
  label="Label checkbox"
/>
```

L'état inactif indique que utilisateur ne peux pas interagir avec l'élément.
```jsx
import { useState } from 'react';

<Checkbox
  value="value-1"
  onChange={e => alert(e.target.value)}
  label="Label checkbox"
  isDisabled={true}
/>
```

Texte sous le libellé de chaque case à cocher, afin d’apporter une précision à chaque élément.
```jsx
import { useState } from 'react';

<Checkbox
  value="value-1"
  onChange={e => alert(e.target.value)}
  label="Label checkbox"
  hint="Texte de description additionnel"
/>
```

## Etat d’erreur
Sur une case à cocher simple (choix binaire), l'état d’erreur est signalé par le changement de couleur de la bordure - qui devient rouge - ,  et par l’affichage un message d’erreur apparait en-dessous du composant  (cf. couleurs fonctionnelles 🔗 : le rouge est la couleur de l’état erreur). 
```jsx
import { useState } from 'react';

<Checkbox
  value="value-1"
  onChange={e => alert(e.target.value)}
  label="Label checkbox"
  messageType="error"
  message="Texte d’erreur obligatoire"
  
/>
```

## Tailles
La taille par défaut est de 24px (taille Medium - MD) , ce qui permet optimiser l’ergonomie et l’accessibilité en ayant un zone cliquable confortable.

Une taille ‘small’ (SM) de 16 px est également disponible. Il s’agit de la taille standard proposé par les navigateurs. Attention toutefois à laisser une zone de clic suffisante (notamment pour le tactile ou une zone de 44 px de hauteur est fortement conseillée) cf. proposition de fieldset.
```jsx
import { useState } from 'react';

<Checkbox
  value="value-1"
  onChange={e => alert(e.target.value)}
  label="Label checkbox"
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

### Légende pour l'ensemble des champs
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  legend="Légende pour l’ensemble de champs"
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

## Liste horizontale - Inline checkbox
Cette organisation doit être uniquement utilisée lorsque il y a 2 options ou que les libellés des entrées sont très courtes. Pour les autres cas, il faut privilégier les listes verticales, plus faciles à lire pour l’utilisateur.
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup isInline>
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

## Liste avec texte d’aide
Il est recommandé d’ajouter un texte d’aide afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportés de 2 façons :

- via un texte sous le titre du groupe des cases à cocher, afin d’apporter une précision à l’intitulé du groupe.
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  hint="Texte de description additionnel"
  legend="Légende pour l’ensemble de champs"
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

- via un texte sous le libellé de chaque case à cocher, afin d’apporter une précision à chaque élément.
```jsx
import { CheckboxGroup, Checkbox } from '.';

<CheckboxGroup
  legend="Légende pour l’ensemble de champs"
>
  <Checkbox
    hint="Texte de description additionnel"
    label="Label checkbox 1"
    onChange={e => alert(e.target.value)}
    value="value-1"
  />
  <Checkbox
    hint="Texte de description additionnel"
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
  legend="Légende pour l’ensemble de champs"
  messageType="error"
  message="Texte d’erreur obligatoire"
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