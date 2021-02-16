import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

const ModalFooter = ({ children }) => (
  <div className="rf-modal__footer">
    {children}
  </div>
);

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalFooter;
