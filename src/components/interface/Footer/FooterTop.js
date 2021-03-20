import PropTypes from 'prop-types';

const FooterTop = ({ children, align }) => (
  <div className="rf-footer__top">
    <div className="rf-container">
      <div className={`rf-grid-row rf-grid-row--${align} rf-grid-row--gutters`}>
        {children}
      </div>
    </div>
  </div>
);
FooterTop.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['center', 'start', 'end']),
};
FooterTop.defaultProps = {
  align: 'center',
};

export default FooterTop;
