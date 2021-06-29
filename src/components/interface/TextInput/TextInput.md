## Text input - Champs de saisie
Les champs permettent à un utilisateur d'entrer du contenu et données.
Le champ simple est un champ de saisie libre, qui accepte une courte ligne de contenu (texte ou/ et nombre). Le libellé se trouve au-dessus du champs de saisie, pour faciliter la lecture.

### État par défaut

```jsx
<TextInput
  label="Text input label"
/>
```

### État validé et erreur

Ils sont signalés par le changement de couleur de la bordure (cf. couleurs fonctionnelles 🔗 ) et l’apparition d’un message sous le champs, obligatoire pour le cas d’erreur.
Le message et le label sont liés par leurs attribut `id` et `aria-describedby` qui sont gérés par le composant.

```jsx
<>
  <TextInput
    label="Text input Label"
    messageType="error"
    message="Message"
  />

  <TextInput
    label="Text input du gouvernement"
    messageType="valid"
    message="Je suis un message ! "
  />
</>
```

### Usage avec React state

```jsx
import { useState } from 'react';
const [value, setValue] = useState('');

<TextInput
    value={value}
    onChange={e => setValue(e.target.value)}
    label="Text input Label"
/>
```

### État inactif

L'état inactif est utilisé lorsque le champ ne peut être utilisé.

```jsx
<TextInput 
  value=""
  inactive
  label="Text input du gouvernement"
/>
```

### Champ avec texte d’aide

```jsx
<TextInput
  hint="Additionnal description"
  label="Text input Label"
/>
```

## Textarea - Zone de texte
Le champs “zone de texte” est un champ de saisie libre, qui accepte plus d’une ligne de contenu (texte ou/ et nombre). Il reprend le style du champ simple et augmente uniquement sa hauteur.

```jsx
<TextInput
  textarea
  hint="Additionnal description"
  label="Text input Label"
/>
```
