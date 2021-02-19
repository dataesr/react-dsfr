# Les accordéons

Les accordéons permettent aux utilisateurs d'afficher et de masquer des sections de contenu présentés dans une page. Ils sont utilisés pour condenser l'espace en cachant le contenu et en le révélant au besoin.


## Accordéon simple

```jsx
import Accordion from './Accordion';
import AccordionLine from './AccordionLine';

<Accordion className="custom-class">
  <AccordionLine title="first line accordion">
    Anything I want
  </AccordionLine>
</Accordion>
```

```jsx
import Accordion from './Accordion';
import AccordionLine from './AccordionLine';

<Accordion className="custom-class">
  <AccordionLine title="first line accordion">
    Anything I want
  </AccordionLine>
  <AccordionLine title="second line accordion">
    Anything I want
  </AccordionLine>
  <AccordionLine title="third line accordion">
    <article>
      <h1>Content title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto assumenda autem deleniti eius error
        eum exercitationem hic libero modi mollitia numquam obcaecati provident quis quisquam, repellendus tempore
        temporibus ullam.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum debitis doloribus magni reiciendis ullam voluptates voluptatibus! Asperiores aspernatur ipsum magni. Aperiam consequatur, dignissimos esse laborum minus possimus tempora tenetur!</p>
    </article>
  </AccordionLine>
</Accordion>
```
