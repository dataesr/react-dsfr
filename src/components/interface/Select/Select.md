## Select - Liste déroulante
### Liste déroulante avec options
La liste déroule fournit une liste d’option parmi laquelle l’utilisateur peut choisir. Seule la partie visible du composant est stylisé : la liste d’option déroulée conserve le style du navigateur.

```jsx
   const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Option Label #1"},
    {value: "2", label: "Option Label #2"},
    {value: "3", label: "Option Label #3"},
    {value: "4", label: "Option Label #4"}
  ];
  <Select
    label="Select Label"
    options={options}
  />
```

### État d'erreur
L'état d’erreur est signalé par un changement de couleur et par l’apparition d'un message d’erreur en-dessous du composant (cf. couleurs fonctionnelles 🔗 : le rouge est la couleur de l’état erreur).

```jsx
   const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Option Label #1"},
    {value: "2", label: "Option Label #2"},
    {value: "3", label: "Option Label #3"},
    {value: "4", label: "Option Label #4"}
  ];
  <Select
    label="Select Label"
    options={options}
    message="Error message"
    messageType="error"
  />
```
### État de succès

L'état succès est signalé par un changement de couleur et par l’apparition d'un message de succès en-dessous du composant (cf. couleurs fonctionnelles 🔗 : le vert est la couleur de l’état erreur).
Le message et le label sont liés par leurs attribut id et aria-describedby .
```jsx
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Option Label #1"},
    {value: "2", label: "Option Label #2"}, 
    {value: "3", label: "Option Label #3"}, 
    {value: "4", label: "Option Label #4"}
  ];
  <Select
    label="Select Label"
    options={options}
    message="Valid message"
    messageType="valid"
  />
```
### État inactif
L'état inactif indique que utilisateur ne peut pas interagir avec l'élément.
```jsx
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"}, 
    {value: "3", label: "Friendly meals"}, 
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Select Label"
    options={options}
    disabled={true}
  />
```
### Liste déroulante avec texte d’aide
Il est recommandé d’ajouter un texte d’aide sous le libellé afin de faciliter le choix de l’utilisateur. Il s’affiche sous le libellé du champ.
```jsx
   const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"},
    {value: "3", label: "Friendly meals"},
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Select Label"
    hint="Additionnal description"
    options={options}
  />
```

### Usage avec le hook useState
```jsx
import { useState } from 'react';

const [selectedValue, setSelectedvalue] = useState('');

<Select
    selected={selectedValue}
    label="Label"
    options={ [
        { value: '1', label: 'Burgers' },
        { value: '2', label: 'Build your own' },
        { value: '3', label: 'Friendly meals' }]}
    onChange={(e) => {
        setSelectedvalue(e.target.value);
    }}
/>
```
