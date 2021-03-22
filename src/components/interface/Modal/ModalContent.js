import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalContent = ({ children, className }) => (
  <div className={classNames(className)}>{children}</div>
);

ModalContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalContent.defaultProps = { className: '' };

export default ModalContent;
