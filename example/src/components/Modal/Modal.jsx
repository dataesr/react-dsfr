import React, { useState } from 'react';

import {
  Row, Col, Button, Modal, ModalTitle, ModalContent, ModalFooter,
} from '@dataesr/react-dsfr';

const ModalExample = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  return (
    <Col>
      <Row>
        <Col>
          <Button title="open modal" onClick={() => setIsOpenModal1(true)}>open modal</Button>
          <Modal isOpen={isOpenModal1} hide={() => setIsOpenModal1(false)}>
            <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
            <ModalContent>
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
              blah blah
              <br />
            </ModalContent>
            <ModalFooter>
              <Button title="Une action">blah</Button>
            </ModalFooter>
          </Modal>
        </Col>
        <Col>
          <Button title="force action modal" onClick={() => setIsOpenModal2(true)}>Force action modal</Button>
          <Modal isOpen={isOpenModal2} hide={() => setIsOpenModal2(false)} canClose={false}>
            <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
            <ModalContent>blah blah</ModalContent>
            <ModalFooter>
              <Button title="Une action" onClick={() => setIsOpenModal2(false)}>blah</Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </Col>
  );
};

export default ModalExample;
