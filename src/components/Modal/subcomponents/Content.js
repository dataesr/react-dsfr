import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';


const ModalContent = ({ children }) => children;

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContent
