import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderBody = ({ children, className }) => (
  <div className="rf-container">
    <div className={classNames(className, 'rf-header__body')} role="banner">
      {children}
    </div>
  </div>
);

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default HeaderBody;
