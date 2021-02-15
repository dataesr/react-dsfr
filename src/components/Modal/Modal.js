import { Component, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';
import useFocusTrap from '../../hooks/useFocusTrap';

/**
 * La modale permet de concentrer l’attention de l’utilisateur exclusivement sur une tâche ou
 * un élément d’information, sans perdre le contexte de la page en cours. Ce composant nécessite
 * une action de l’utilisateur afin d'être clôturé ou ouverte.
 *
 * @visibleName Modale -- Modal
 */

const ModalFooter = ({ children }) => (
  <div className="rf-modal__footer">
    {children}
  </div>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

const ModalTitle = ({ children, icon }) => (
  <h1 id="rf-modal-title-modal" className="rf-modal__title">
    {icon && <span className="rf-fi-arrow-right-line rf-fi--lg" />}
    {children}
  </h1>
);

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
};
ModalTitle.defaultProps = {
  icon: true,
};

const ModalContent = ({ children }) => children;

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
};

const ModalClose = ({ hide, title, children }) => (
  <button
    className="rf-link--close rf-link"
    type="button"
    onClick={hide}
    title={title}
    aria-controls="rf-modal"
    target="_self"
  >
    {children}
  </button>
);
ModalClose.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  hide: PropTypes.func.isRequired,
};
ModalClose.defaultProps = {
  children: 'Fermer',
  title: 'Fermer la fenêtre modale',
};

const ModalDialog = ({ children, hide, size }) => {
  const modalRef = useRef();
  const sizeModifier = (size !== 'md') ? ` rf-modal--${size}` : '';
  const handleTabulation = useFocusTrap(modalRef);
  const title = children.filter((child) => child.type.name === 'ModalTitle');
  const content = children.filter((child) => child.type.name === 'ModalContent');
  const footer = children.filter((child) => child.type.name === 'ModalFooter');
  const close = children.filter((child) => child.type.name === 'ModalClose');
  const handleOverlayClick = (e) => {
    if (!modalRef.current || (modalRef.current === e.target)) {
      hide();
    }
  };

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
        aria-labelledby="rf-modal-title-modal"
        id="rf-modal"
        className={`rf-modal${sizeModifier}`}
        ref={modalRef}
        onKeyDown={(e) => handleAllKeyDown(e)}
        style={{ opacity: 1, visibility: 'visible' }}
        onClick={(e) => handleOverlayClick(e)}
      >
        <div className="rf-container--fluid rf-container-md">
          <div className="rf-grid-row rf-grid-row--center">
            <div className="rf-col-12 rf-col-md-6">
              <div className="rf-modal__body">
                <div className="rf-modal__header">
                  {(close.length > 1) ? close : <ModalClose hide={hide} />}
                </div>
                <div className="rf-modal__content">
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

class Modal extends Component {
  render() {
    const { size, hide, children } = this.props;
    return (
      <ModalDialog size={size} hide={hide}>{children}</ModalDialog>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
Modal.defaultProps = {
  size: 'md',
};
Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
Modal.Close = ModalClose;

export default Modal;
