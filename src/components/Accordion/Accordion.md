### Les accordéons

Les accordéons permettent aux utilisateurs d'afficher et de masquer des sections de contenu présentés dans une page.

#### Accordéons par défaut

Les accordéons sont utilisés pour condenser l'espace en cachant le contenu et en le révélant au besoin.

Un accordéon est constitué des éléments suivants :

* En-tête : le titre de la section
* Icône : “+” indique quand le panneau est fermé, “-” quand le panneau est ouvert.
* Contenu : une section de contenu libre associée à un accordéon.

Par défaut, les accordéons sont fermés et comprennent l’en tête et l’icône “+”.

### Accordéon simple

```js
const group = [{ 'title': 'One Simple Line', 'children': 'Content of line' }];

<Accordion group={group}></Accordion>
```

### Accordéon multiple

```js
const group = [{ 'title': 'First Line', 'children': '<p>HTML content children</p>' }, {
    'title': 'Second Line',
    'children': 'Content text'
}];

<Accordion group={group}>
    <p>Accordion Group Title</p>
</Accordion>
```

### Accordéon contenu type HTML

```jsx
const children = <article><h1>Content title</h1><p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto assumenda autem deleniti eius error
        eum exercitationem hic libero modi mollitia numquam obcaecati provident quis quisquam, repellendus tempore
        temporibus ullam.
</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum debitis doloribus magni reiciendis ullam voluptates voluptatibus! Asperiores aspernatur ipsum magni. Aperiam consequatur, dignissimos esse laborum minus possimus tempora tenetur!</p>
</article>
const group = [{ 'title': 'See more', 'children': children }];

<Accordion group={group}>
    <p>Accordion Group Title</p>
</Accordion>
```