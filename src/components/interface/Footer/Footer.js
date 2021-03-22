import PropTypes from 'prop-types';

const Footer = ({ children }) => {
  const top = children.filter((child) => child.type.name === 'FooterTop');
  const rest = children.filter((child) => child.type.name !== 'FooterTop');
  return (
    <footer data-testid="footer" className="rf-footer" role="contentinfo" id="footer">
      {top}
      <div className="rf-container">
        {rest}
      </div>
    </footer>
  );
};
Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
