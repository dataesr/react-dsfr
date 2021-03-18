import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/types';

const CalloutText = ({ children, className }) => (
  <p className={classNames('rf-callout__text', className)}>
    {children}
  </p>
);

CalloutText.propTypes = {
  children: PropTypes.string.isRequired,
  className: CLASS_NAME_TYPE,
};
CalloutText.defaultProps = {
  className: '',
};
export default CalloutText;
