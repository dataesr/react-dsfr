import React, {
  Children, cloneElement, useRef, createRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import {
  Modal, ModalTitle, ModalContent, ModalClose,
} from '../Modal';
import { Button } from '../Button';

const ConsentModal = ({
  children,
  className,
  isOpen,
  setIsOpen,
  closeLabel,
  closeTitle,
  title,
  confirmButtonLabel,
  confirmButtonTitle,
  confirmConsent,
  ...remainingProps
}) => {
  const _className = classNames('fr-modal', className);
  const refs = useRef([]);

  const consentChildren = Children.toArray(children);
  refs.current = consentChildren.map((_, i) => refs.current[i] ?? createRef());
  const childs = consentChildren.map((child, i) => cloneElement(child, {
    ref: refs.current[i],
  }));

  return (
    <Modal
      isOpen={isOpen}
      hide={() => setIsOpen(false)}
      className={_className}
      id="fr-consent-modal"
      aria-labelledby="fr-consent-modal-title"
      {...dataAttributes.getAll(remainingProps)}
    >
      <ModalClose
        hide={() => setIsOpen(false)}
        title={closeTitle}
      >
        {closeLabel}
      </ModalClose>
      <ModalTitle>{title}</ModalTitle>
      <ModalContent>
        {childs}
        <ul className="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
          <li>
            <Button
              title={confirmButtonTitle || confirmButtonLabel}
              onClick={() => confirmConsent(childs)}
            >
              {confirmButtonLabel}
            </Button>
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
  confirmButtonLabel: PropTypes.string.isRequired,
  confirmButtonTitle: PropTypes.string.isRequired,
  closeTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  confirmConsent: PropTypes.func.isRequired,
};
export default ConsentModal;
