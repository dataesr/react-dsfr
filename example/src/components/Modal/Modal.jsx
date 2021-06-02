import React, { useState } from 'react';

import {
  Col, Button, Modal, ModalTitle, ModalContent, ModalFooter,
} from '@dataesr/react-dsfr';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Col>
      <Button title="open modal" onClick={() => setIsOpen(true)}>open modal</Button>
      <Modal isOpen={isOpen} hide={() => setIsOpen(false)}>
        <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          <Button title="Une action">blah</Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};

export default ModalExample;
