useModal example:

```
import { useRef } from 'react';
import useModal from './useModal';
const backRef = useRef();
const { Modal, show } = useModal({backRef});
<>
  <button ref={backRef} onClick={show}>
    Toggle modal
  </button>
  <Modal.Modal>
    <Modal.Title icon>I'm a title</Modal.Title>
    <Modal.Content>blah blah</Modal.Content>
    <Modal.Footer>
      <button>blah</button>
    </Modal.Footer>
  </Modal.Modal>
</>
```
