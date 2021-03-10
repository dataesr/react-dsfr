import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
Skiplinks.defaultProps = {
  className: '',
};
