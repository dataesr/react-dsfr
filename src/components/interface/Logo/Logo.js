import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Logo = ({ children, href }) => {
  const content = children.split('|').map((item) => item.trim()).reduce(
    (arr, line) => arr.concat(line, <br key={uuidv4()} />), [],
  );
  return (
    <a
      className="rf-logo"
      href={href}
      title={children.split('|').map((item) => item.trim()).join(' ')}
    >
      <span className="rf-logo__title">
        {content}
      </span>
    </a>
  );
};

Logo.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
};
Logo.defaultProps = {
  href: '/',
};

export default Logo;
