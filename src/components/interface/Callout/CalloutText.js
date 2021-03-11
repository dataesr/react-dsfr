import classNames from 'classnames';
import PropTypes from 'prop-types';

const CalloutText = ({ children, className }) => (
  <p className={classNames('rf-callout__text', className)}>
    {children}
  </p>
);

CalloutText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
CalloutText.defaultProps = {
  className: '',
};

export default CalloutText;
