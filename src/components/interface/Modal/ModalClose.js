import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalClose = ({
  hide, title, children, className,
}) => (
  <button
    className={classNames('rf-link--close rf-link', className)}
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
  /**
   * @ignore
   */
  hide: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalClose.defaultProps = {
  children: 'Fermer',
  title: 'Fermer la fenêtre modale',
  className: '',
  hide: () => {},

};

export default ModalClose;
