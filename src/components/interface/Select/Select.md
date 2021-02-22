### Liste déroulante

```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Burgers & sandwiches"}, {value: "2", label: "Build your own"},
    {value: "3", label: "Friendly meals"},
    {value: "4", label: "Save menu & more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
  />
```

### État d'erreur
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Burgers & sandwiches"}, {value: "2", label: "Build your own"},
    {value: "3", label: "Friendly meals"},
    {value: "4", label: "Save menu & more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
    message="Texte d'erreur obligatoire"
    messageType="error"
  />
```
### État de succès
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Burgers & sandwiches"}, {value: "2", label: "Build your own"},
    {value: "3", label: "Friendly meals"},
    {value: "4", label: "Save menu & more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
    message="Texte de validation"
    messageType="valid"
  />
```
### État inactif
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Burgers & sandwiches"}, {value: "2", label: "Build your own"},
    {value: "3", label: "Friendly meals"},
    {value: "4", label: "Save menu & more"}
  ];
  <Select
    label="Label pour liste déroulante"
    options={options}
    disabled={true}
  />
```
### Liste déroulante avec texte d’aide
```jsx padded
  const options = [
    {value: "", label: "- Select -", disabled: true, hidden: true},
    {value: "1", label: "Burgers & sandwiches"}, {value: "2", label: "Build your own"},
    {value: "3", label: "Friendly meals"},
    {value: "4", label: "Save menu & more"}
  ];
  <Select
    label="Label pour liste déroulante"
    hint="Texte de description additionnel"
    options={options}
  />
```
