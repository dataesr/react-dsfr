import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterTop = ({ children, align, className }) => (
  <div className={classNames('rf-footer__top', className)}>
    <div className="rf-container">
      <div className={`rf-grid-row rf-grid-row--${align} rf-grid-row--gutters`}>
        {children}
      </div>
    </div>
  </div>
);
FooterTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterTop.defaultProps = {
  align: 'center',
  className: '',
};

export default FooterTop;
