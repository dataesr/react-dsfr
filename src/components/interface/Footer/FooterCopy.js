import PropTypes from 'prop-types';

const FooterCopy = ({ children }) => (
  <div className="rf-footer__bottom-copy">
    {children}
  </div>
);
FooterCopy.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FooterCopy;
