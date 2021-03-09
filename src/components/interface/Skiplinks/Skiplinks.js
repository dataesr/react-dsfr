import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Les liens d’évitement permettent aux utilisateurs naviguant au clavier,
 * ou équipés de lecteurs d'écran, d’accéder plus rapidement à des zones précises de la page.
 *
 * @visibleName Skiplinks
 */
export const Skiplink = ({ href, children, className }) => (
  <li className={className}>
    <a className="rf-link" href={href}>{children}</a>
  </li>
);
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
  className: PropTypes.string,
};
Skiplinks.defaultProps = {
  className: '',
};

Skiplink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Skiplink.defaultProps = {
  className: '',
};
