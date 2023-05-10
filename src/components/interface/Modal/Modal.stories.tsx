import { useState } from 'react';
import { ComponentStory } from '@storybook/react';

import Modal from './Modal';
import ModalClose from './ModalClose';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalTitle from './ModalTitle';

import Button from '../Button/Button';

export default {
  title: 'Modale - Modal',
  component: Modal,
  subcomponents: {
    ModalClose, ModalContent, ModalFooter, ModalTitle,
  },
  parameters: {
    docs: {
      description: {
        component: "La modale permet de concentrer l’attention de l’utilisateur exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours. Ce composant nécessite une action de l’utilisateur afin d'être clôturée ou ouverte.",
      },
    },
  },
};

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal {...args} isOpen={isOpen} />
      <Button onClick={() => setIsOpen(true)}>Ouvrir la modale</Button>
    </>
  );
};

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  children: [
    <ModalClose />,
    <ModalTitle>Titre de la modale</ModalTitle>,
    <ModalContent>Contenu de la modale</ModalContent>,
  ],
  isOpen: false,
};
SimpleModal.storyName = 'Modale simple';

export const ModalWithFooter = Template.bind({});
ModalWithFooter.args = {
  children: [
    <ModalClose />,
    <ModalTitle>Titre de la modale</ModalTitle>,
    <ModalContent>Contenu de la modale</ModalContent>,
    <ModalFooter>
      <Button title="Action">
        Action
      </Button>
    </ModalFooter>,
  ],
  isOpen: false,
};
ModalWithFooter.storyName = "Modale avec zone d'action";
