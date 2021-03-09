import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/interface/Modal';

/**
 * useModal permet de gérer l'ouverture et la fermeture de la modale plus facilement
 *
 * @visibleName useModal
 */
const useModal = ({ backRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const returnFocusTo = (ref) => (ref.current) && ref.current.focus();

  const show = () => {
    setIsOpen(true);
  };
  const hide = () => {
    setIsOpen(false);
    returnFocusTo(backRef);
  };

  const MyModal = ({ children, size }) => (
    (isOpen) ? <Modal size={size} hide={hide}>{children}</Modal> : null
  );

  MyModal.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
  };
  MyModal.defaultProps = {
    size: 'md',
  };
  Modal.Modal = MyModal;

  return {
    show,
    hide,
    Modal,
  };
};

useModal.propTypes = {
  backRef: PropTypes.ref,
};
useModal.defaultProps = {
  backRef: null,
};

export default useModal;
