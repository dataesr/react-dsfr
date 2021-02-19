### Modale  simple

La modale par défaut permet de mettre en évidence une information qui ne nécessite pas d’action de l’utilisateur. Elle s’affiche à la suite du clic sur un bouton.

Elle se compose des éléments de base du composant à savoir :
  - Le lien Fermer - obligatoire.
  - Le titre obligatoire, avec icône optionnelle.
  - La zone de contenu - obligatoire.
    - Peut-être composée de texte ou d'élément de formulaires.
  - Un overlay disposé à l’arrière du composant - obligatoire.

En desktop, ce composant s’affiche au centre de la page.

```jsx
import { useState, useRef } from 'react';
import Button from '../Button'
const [isOpen, setIsOpen] = useState(false);

const buttonRef = useRef();
const show = () => setIsOpen(true);

const hide = () => {
  setIsOpen(false);
  buttonRef.current.focus()
};
<>
  <button ref={buttonRef} onClick={show}>Ouvrir la modale</button>
  <Modal isOpen={isOpen} hide={hide}>
      <Modal.Title icon>Je suis le titre</Modal.Title>
      <Modal.Content>Consequatur unde hic rerum facere sequi fugiat explicabo. Ullam quaerat officia aliquam reiciendis enim ducimus quam sapiente. Enim modi alias nihil. Blanditiis et temporibus voluptatem dolor deserunt cum ut. Nostrum voluptates totam quidem quas animi temporibus et maxime. Ab beatae tempore aliquam sed voluptates quidem eum in.</Modal.Content>
      <Modal.Footer>
          <Button title="Une action">Je suis un button</Button>
      </Modal.Footer>
  </Modal>
</>
```

Le boutton de fermeture peut etre personnalisé, par exemple pour faciliter le changement de langue :
```jsx
import { useState, useRef } from 'react';
import Button from '../Button'
const [isOpen, setIsOpen] = useState(false);

const buttonRef = useRef();
const show = () => setIsOpen(true);
const hide = () => {
  setIsOpen(false)
  buttonRef.current.focus()
};

<>
  <button ref={buttonRef} onClick={show}>open modal</button>
  <Modal isOpen={isOpen} hide={hide}>
    <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
    <Modal.Title icon>I'm a title</Modal.Title>
    <Modal.Content>Im the content</Modal.Content>
    <Modal.Footer>
      <Button title="Une action">Button</Button>
    </Modal.Footer>
  </Modal>
</>
```
