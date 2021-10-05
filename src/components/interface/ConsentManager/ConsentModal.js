import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import {
  Modal, ModalTitle, ModalContent, ModalClose,
} from '../Modal';

const ConsentModal = ({
  children, className, isOpen, setIsOpen, closeLabel, closeTitle, title, ...remainingProps
}) => {
  const _className = classNames('fr-modal', className);
  return (
    <Modal
      isOpen={isOpen}
      hide={() => setIsOpen(false)}
      className={_className}
      id="fr-consent-modal"
      aria-labelledby="fr-consent-modal-title"
      {...dataAttributes.getAll(remainingProps)}
    >
      <ModalClose hide={() => setIsOpen(false)} title={closeTitle}>{closeLabel}</ModalClose>
      <ModalTitle>{title}</ModalTitle>
      <ModalContent>
        {children}
        <ul className="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
          <li>
            <button className="fr-btn" id="fr-consent-modal" title="Confirmer mes choix">
              Confirmer mes choix
            </button>
          </li>
        </ul>
      </ModalContent>
    </Modal>
  );
};

ConsentModal.defaultProps = { className: '' };

ConsentModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  isOpen: PropTypes.bool.isRequired,
  closeLabel: PropTypes.string.isRequired,
  closeTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default ConsentModal;
