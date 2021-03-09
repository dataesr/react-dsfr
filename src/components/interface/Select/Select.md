### Liste déroulante
La liste déroule fournit une liste d’option parmi laquelle l’utilisateur peut choisir. Seule la partie visible du composant est stylisé : la liste d’option déroulée conserve le style du navigateur.

```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"}, 
    {value: "3", label: "Friendly meals"}, 
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
  />
```

### État d'erreur
L'état d’erreur est signalé par un changement de couleur et par l’apparition d'un message d’erreur en-dessous du composant (cf. couleurs fonctionnelles 🔗 : le rouge est la couleur de l’état erreur).

```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"}, 
    {value: "3", label: "Friendly meals"}, 
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
    message="Texte d'erreur obligatoire"
    messageType="error"
  />
```
### État de succès

L'état succès est signalé par un changement de couleur et par l’apparition d'un message de succès en-dessous du composant (cf. couleurs fonctionnelles 🔗 : le vert est la couleur de l’état erreur).
Le message et le label sont liés par leurs attribut id et aria-describedby .
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"}, 
    {value: "3", label: "Friendly meals"}, 
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
    message="Texte de validation"
    messageType="valid"
  />
```
### État inactif
L'état inactif indique que utilisateur ne peut pas interagir avec l'élément.
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"}, 
    {value: "3", label: "Friendly meals"}, 
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
    disabled={true}
  />
```
### Liste déroulante avec texte d’aide
Il est recommandé d’ajouter un texte d’aide sous le libellé afin de faciliter le choix de l’utilisateur. Il s’affiche sous le libellé du champ.
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true}, 
    {value: "1", label: "Burgers &amp; sandwiches"}, {value: "2", label: "Build your own"}, 
    {value: "3", label: "Friendly meals"}, 
    {value: "4", label: "Save menu &amp; more"}
  ];
  <Select
    label="Label pour liste déroulante"
    hint="Texte de description additionnel"
    options={options}
  />
```