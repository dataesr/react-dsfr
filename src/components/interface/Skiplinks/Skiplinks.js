import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
/**
 * Les liens d’évitement permettent aux utilisateurs naviguant au clavier,
 * ou équipés de lecteurs d'écran, d’accéder plus rapidement à des zones précises de la page.
 *
 * @visibleName Skiplinks
 */
export const Skiplink = ({
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

export const Skiplinks = ({ children, className }) => (
  <div data-testid="skiplinks" className={classNames('rf-skiplinks', className)}>
    <div className="rf-container">
      <ul className="rf-skiplinks__list">
        {children}
      </ul>
    </div>
  </div>
);

Skiplinks.propTypes = {
  children: PropTypes.node.isRequired,
  className: CLASS_NAME_TYPE,
};
Skiplinks.defaultProps = {
  className: '',
};
