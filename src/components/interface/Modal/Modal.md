## Modal - modale
La modale permet de concentrer l’attention de l’utilisateur exclusivement sur une tâche ou
 un élément d’information, sans perdre le contexte de la page en cours. Ce composant nécessite
 une action de l’utilisateur afin d'être clôturé ou ouverte.

```jsx
import { useState } from 'react';
import { Button } from '../Button'
import { Modal, ModalTitle, ModalContent, ModalFooter, ModalClose } from '.';
const [isOpen, setIsOpen] = useState(false);

<>
  <Button title="open modal" onClick={() => setIsOpen(true)}>open modal</Button>
  <Modal isOpen={isOpen} hide={() => setIsOpen(false)}>
    <ModalClose hide={() => setIsOpen(false)} title="Close the modal window">Close</ModalClose>
    <ModalTitle icon="ri-arrow-right-fill">Modal Title</ModalTitle>
    <ModalContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ModalContent>
    <ModalFooter>
      <Button title="title">Modal Button</Button>
    </ModalFooter>
  </Modal>
</>
```

### Forcer une action utilisateur
```jsx
import { useState } from 'react';
import { Button } from '../Button'
import { Modal, ModalTitle, ModalContent, ModalFooter, ModalClose } from '.';
const [isOpen, setIsOpen] = useState(false);

<>
  <Button title="open modal" onClick={() => setIsOpen(true)}>open modal</Button>
  <Modal isOpen={isOpen} hide={() => setIsOpen(false)} canClose={false}>
    <ModalTitle icon="ri-arrow-right-fill">Modal d'action</ModalTitle>
    <ModalContent>Pour fermer la modal, l'utilisateur doit cliquer sur le bouton.</ModalContent>
    <ModalFooter>
      <Button title="title" onClick={() => setIsOpen(false)}>Modal Button</Button>
    </ModalFooter>
  </Modal>
</>
```

