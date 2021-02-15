### Modale  simple

La modale par défaut permet de mettre en évidence une information qui ne nécessite pas d’action de l’utilisateur. Elle s’affiche à la suite du clic sur un bouton.

Elle se compose des éléments de base du composant à savoir :
  - Le lien Fermer - obligatoire.
  - Le titre  obligatoire,  avec  icône  🔗 optionnelle.
  - La zone de contenu - obligatoire.
    - Peut-être composée de texte ou d'élément de formulaires.
  - Un overlay disposé à l’arrière du composant - obligatoire.

En desktop, ce composant s’affiche au centre de la page.

```
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
  {
    (isOpen) && (
      <Modal hide={hide}>
        <Modal.Title icon>I'm a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button text="blah" />
        </Modal.Footer>
      </Modal>
    )
  }
</>
```

Le boutton de fermeture peut etre personnalisé:
```
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
  {
    (isOpen) && (
      <Modal hide={hide}>
        <Modal.Close hide={hide} title="Close the modal window">Close</Modal.Close>
        <Modal.Title icon>I'm a title</Modal.Title>
        <Modal.Content>blah blah</Modal.Content>
        <Modal.Footer>
          <Button text="blah"/>
        </Modal.Footer>
      </Modal>
    )
  }
</>
```
