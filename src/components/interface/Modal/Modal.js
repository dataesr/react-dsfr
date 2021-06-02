import React, {
  cloneElement, Children, useRef, useEffect, useState,
} from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useFocusTrap from '../../../hooks/useFocusTrap';
import ModalClose from './ModalClose';
import dataAttributes from '../../../utils/data-attributes';

import './modal.css';

/**
 *
 * @visibleName Modale -- Modal
 */

const MODAL_ANIMATION_TIME = 300;

const ModalDialog = ({
  children,
  hide,
  size,
  className,
  isOpen,
  ...remainingProps
}) => {
  const modalRef = useRef();
  const [openedModal, setOpenedModal] = useState(() => isOpen);
  const _className = classNames('fr-modal', {
    [`fr-modal--${size}`]: (size !== 'md'),
    'fr-modal--opened': openedModal,
  }, className);
  const focusBackTo = document.activeElement;
  const handleTabulation = useFocusTrap(modalRef);
  const title = Children.toArray(children).filter((child) => child.props.__TYPE === 'ModalTitle');
  const content = Children.toArray(children).filter((child) => child.props.__TYPE === 'ModalContent');
  const footer = Children.toArray(children).filter((child) => child.props.__TYPE === 'ModalFooter');
  const close = Children.toArray(children).filter((child) => child.props.__TYPE === 'ModalClose');

  const handleModal = (open) => {
    if (modalRef.current) {
      setOpenedModal(open);
      document.body.style.overflow = open ? 'hidden' : null;
    }
  };

  const handleAnimatedUnmount = () => {
    handleModal(false);
    setTimeout(() => {
      if (focusBackTo) focusBackTo.focus();
      hide();
    }, MODAL_ANIMATION_TIME);
  };
  const handleOverlayClick = (e) => {
    if (!modalRef.current || (modalRef.current === e.target) || e.target.className.indexOf('closing-overlay') > -1) {
      handleAnimatedUnmount();
    }
  };

  useEffect(() => {
    handleModal(true);
  }, []);

  const handleAllKeyDown = (e) => {
    if (e.keyCode === 27) {
      hide();
      e.preventDefault();
    }
    if (e.keyCode === 9) {
      handleTabulation(e);
    }
  };

  return (
    ReactDOM.createPortal(
      // eslint-disable-next-line
      <dialog
        aria-labelledby="fr-modal-title-modal"
        className={_className}
        ref={modalRef}
        onKeyDown={(e) => handleAllKeyDown(e)}
        onClick={(e) => handleOverlayClick(e)}
        {...dataAttributes(remainingProps)}
      >
        <div className="fr-container--fluid fr-container-md">
          <div className="fr-grid-row fr-grid-row--center closing-overlay">
            <div className="fr-col-12 fr-col-md-6">
              <div className="fr-modal__body">
                <div className="fr-modal__header">
                  {
                    (close.length > 0)
                      ? cloneElement(close[0], { hide: handleAnimatedUnmount })
                      : <ModalClose hide={handleAnimatedUnmount} />
                  }
                </div>
                <div className="fr-modal__content">
                  {title}
                  {content}
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </dialog>, document.body,
    )
  );
};

const Modal = ({
  size, hide, children, isOpen, className, ...remainingProps
}) => (isOpen) && (
  <ModalDialog
    className={className}
    size={size}
    hide={hide}
    {...dataAttributes(remainingProps)}
  >
    {children}

  </ModalDialog>
);

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  hide: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Modal.defaultProps = {
  isOpen: false,
  size: 'md',
  className: '',
};

export default Modal;
