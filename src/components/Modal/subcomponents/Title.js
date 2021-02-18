
import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

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

export default ModalTitle;
