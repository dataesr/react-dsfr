import PropTypes from 'prop-types';

const ModalClose = ({ hide, title, children }) => (
  <button
    className="rf-link--close rf-link"
    type="button"
    onClick={hide}
    title={title}
    aria-controls="rf-modal"
    data-testid="modal-close"
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

export default ModalClose;
