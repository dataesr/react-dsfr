import PropTypes from 'prop-types';
import Link from '../Link';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

const Skiplink = ({
  href, target, children, className,
}) => (
  <li className={className}>
    <Link isSimple href={href} target={target}>{children}</Link>
  </li>
);

Skiplink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: CLASS_NAME_TYPE,
  target: PropTypes.string,
};

Skiplink.defaultProps = {
  className: '',
  target: '_self',
};

export default Skiplink;
