Les boutons radio permettent à l’utilisateur de sélectionner une seule option dans une liste.

Le bouton radio ne peut pas être utilisé seul : il faut au minimum 2 options. Il est préférable de ne pas sélectionner d’option par défaut pour que le choix de l’utilisateur soit conscient (en particulier si le choix est obligatoire).

## Liste verticale
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```

L'état inactif indique que l'utilisateur ne peux pas interagir avec l'élément
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  isDisabled
>
  <Radio
    label="Label Radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label Radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```
## Liste horizontale (radio buttons inline)
Il faut privilégier les listes verticales aux listes horizontales, plus difficile à lire pour l’utilisateur. 
Cette organisation est donc à utiliser uniquement lorsqu'il n’y a que  2 options ou que les libellés sont courts.
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  isInline
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```

## Liste avec texte d’aide
Il est recommandé d’ajouter un texte d’aide afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de 2 façons : 

- via un texte sous le titre de la liste
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  hint="Texte de description additionnel"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```

- via un texte sous le libellé de chaque bouton radio
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
    hint="Texte de description additionnel"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
    hint="Texte de description additionnel"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
    hint="Texte de description additionnel"
  />
</RadioGroup>
```

## État d'erreur
L'état d’erreur est signalé par l’affichage d’une ligne rouge et d'un message d’erreur en-dessous du composant (cf. couleurs fonctionnelles 🔗 : le rouge est la couleur de l’état erreur).

- Pour le groupe de bouton radio 
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  messageType="error"
  message="Texte d’erreur obligatoire"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```


- Pour les liste de boutons radio en ligne
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  isInline
  messageType="error"
  message="Texte d’erreur obligatoire"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```

## État de succès
L'état de succès est signalé par l’affichage d’une ligne verte et d'un message de succès en-dessous du composant (cf. couleurs fonctionnelles 🔗 : le vert est la couleur de l’état succès).

- Pour le groupe de bouton radio 
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  messageType="valid"
  message="Texte de validation"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```


- Pour les liste de boutons radio en ligne
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
  isInline
  messageType="valid"
  message="Texte de validation"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
  />
</RadioGroup>
```

## Tailles
Le “bouton radio” est proposé par défaut en 24px (taille Medium - MD) ce choix a été fait pour optimiser l’ergonomie et l’accessibilité. 

Il existe également une version plus petite 16 px / Small (SM) correspondant à la taille standard proposés par les navigateurs. Attention, la zone cliquable doit être suffisante pour l'utilisation au doigt sur écran tactile (44 px de hauteur). 
```jsx
import { RadioGroup, Radio } from '.';

<RadioGroup
  legend="Légende pour l’ensemble de champs"
>
  <Radio
    label="Label radio 1"
    onChange={() => {}}
    value="value-1"
    size="sm"
  />
  <Radio
    label="Label radio 2"
    onChange={() => {}}
    value="value-2"
    size="sm"
  />
  <Radio
    label="Label radio 3"
    onChange={() => {}}
    value="value-3"
    size="sm"
  />
</RadioGroup>
```
