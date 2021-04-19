import React, {
  cloneElement, Children, useRef, useEffect,
} from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useFocusTrap from '../../../hooks/useFocusTrap';
import ModalClose from './ModalClose';

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
}) => {
  const modalRef = useRef();
  const _className = classNames('fr-modal', {
    [`fr-modal--${size}`]: (size !== 'md'),
  }, className);
  const focusBackTo = document.activeElement;
  const handleTabulation = useFocusTrap(modalRef);
  const title = Children.toArray(children).filter((child) => child.type.name === 'ModalTitle');
  const content = Children.toArray(children).filter((child) => child.type.name === 'ModalContent');
  const footer = Children.toArray(children).filter((child) => child.type.name === 'ModalFooter');
  const close = Children.toArray(children).filter((child) => child.type.name === 'ModalClose');

  const handleAnimatedUnmount = () => {
    if (modalRef.current) {
      modalRef.current.style.opacity = '0';
    }
    setTimeout(() => {
      if (focusBackTo) focusBackTo.focus();
      hide();
    }, MODAL_ANIMATION_TIME);
  };
  const handleOverlayClick = (e) => {
    if (!modalRef.current || (modalRef.current === e.target)) {
      handleAnimatedUnmount();
    }
  };
  const handleNoBodyScroll = () => document.querySelector('html').classList.toggle('fr-no-scroll');

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.visibility = 'visible';
    }
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.style.opacity = '1';
      }
    }, 0);
    handleNoBodyScroll();
    return () => {
      handleNoBodyScroll();
    };
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
        data-testid="modal"
      >
        <div className="fr-container--fluid fr-container-md">
          <div className="fr-grid-row fr-grid-row--center">
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
  size, hide, children, isOpen, className,
}) => (isOpen) && (
  <ModalDialog className={className} size={size} hide={hide}>{children}</ModalDialog>
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
