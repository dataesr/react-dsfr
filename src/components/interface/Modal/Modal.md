## Modale simple

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
import { Modal, ModalTitle, ModalContent, ModalFooter } from '.';
const [isOpen, setIsOpen] = useState(false);

const buttonRef = useRef();
const hide = () => {
  setIsOpen(false)
};

<>
  <button ref={buttonRef} onClick={() => setIsOpen(true)}>open modal</button>
  <Modal isOpen={isOpen} hide={() => setIsOpen(false)}>
    <ModalTitle icon>I'm a title</ModalTitle>
    <ModalContent>blah blah</ModalContent>
    <ModalFooter>
      <Button title="Une action">blah</Button>
    </ModalFooter>
  </Modal>
</>
```

Le boutton de fermeture peut etre personnalisé, par exemple pour faciliter le changement de langue:

```jsx
import { useState, useRef } from 'react';
import Button from '../Button'
import { Modal, ModalTitle, ModalContent, ModalFooter, ModalClose } from '.';
const [isOpen, setIsOpen] = useState(false);

const buttonRef = useRef();
const hide = () => {
  setIsOpen(false)
};

<>
  <button ref={buttonRef} onClick={() => setIsOpen(true)}>open modal</button>
  <Modal isOpen={isOpen} hide={() => setIsOpen(false)}>
    <ModalClose hide={hide} title="Close the modal window">Close</ModalClose>
    <ModalTitle icon>I'm a title</ModalTitle>
    <ModalContent>blah blah</ModalContent>
    <ModalFooter>
      <Button title="Une action">blah</Button>
    </ModalFooter>
  </Modal>
</>
```
