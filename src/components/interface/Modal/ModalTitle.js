import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalTitle = ({ children, icon, className }) => (
  <h1 id="rf-modal-title-modal" className="rf-modal__title">
    {icon && (
      <span className={classNames('rf-fi-arrow-right-line rf-fi--lg', className)} />
    )}
    {children}
  </h1>
);

ModalTitle.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalTitle.defaultProps = {
  icon: true,
  className: '',
};

export default ModalTitle;
