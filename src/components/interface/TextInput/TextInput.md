## Champs de saisie simple - Input 

Le champ simple est un champ de saisie libre, qui accepte une courte ligne de contenu (texte ou/ et nombre). Le libellé se trouve au-dessus du champs de saisie, pour faciliter la lecture.

### État par défaut

```jsx
import { useState } from 'react';

const [value, setValue] = useState('');

<TextInput
  value={value}
  onChange={e => setValue(e.target.value)}
  label="Text input du gouvernement"
/>
```

### État validé et erreur

Ils sont signalés par le changement de couleur de la bordure (cf. couleurs fonctionnelles 🔗 ) et l’apparition d’un message sous le champs, obligatoire pour le cas d’erreur.
Le message et le label sont liés par leurs attribut `id` et `aria-describedby` qui sont gérés par le composant.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('');

<>
  <TextInput
    value={value}
    onChange={e => setValue(e.target.value)}
    label="Text input du gouvernement"
    messageType="error"
    message="Je suis un message ! "
  />

  <TextInput
    value={value}
    onChange={e => setValue(e.target.value)}
    label="Text input du gouvernement"
    messageType="valid"
    message="Je suis un message ! "
  />
</>
```

### État inactif

L'état inactif est utilisé lorsque le champ ne peut être utilisé. Il indique que utilisateur ne peux pas saisir de contenus, par exemple jusqu'à ce qu'une autre action soit terminée. Il ne doit être utilisé que très ponctuellement, préférez masquer le champs si celui-ci n’est pas requis.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('');

<TextInput
  inactive
  value={value}
  onChange={e => setValue(e.target.value)}
  label="Text input du gouvernement"
/>
```

### Champ avec texte d’aide
Il est recommandé d’ajouter un texte d’aide sous le libellé afin de faciliter la saisie

```jsx
import { useState } from 'react';

const [value, setValue] = useState('');

<TextInput
  value={value}
  hint="Le label du dessus n'est pas assez explicite ?"
  onChange={e => setValue(e.target.value)}
  label="Text input du gouvernement"
/>
```

## Zone de texte - Textarea
Le champs “zone de texte” est un champ de saisie libre, qui accepte plus d’une ligne de contenu (texte ou/ et nombre). Il reprend le style du champ simple et augmente uniquement sa hauteur.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('');

<TextInput
  textarea
  value={value}
  hint="Le label du dessus n'est pas assez explicite ?"
  onChange={e => setValue(e.target.value)}
  label="Text input du gouvernement"
/>
```
