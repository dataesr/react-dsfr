import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 * Navigation
 *
 * @visibleName Links
 */
const Link = ({
  children, href, title, target, isSimple, icon, className, iconPosition,
}) => (
  <a
    href={href}
    title={title}
    target={target}
    rel={(target === '_blank') ? 'noopener noreferer' : null}
    className={classnames(icon, className, {
      'rf-link': isSimple,
      'rf-link--icon-left': !isSimple && icon && children,
      [`rf-link--icon-${iconPosition}`]: iconPosition && isSimple && icon && children,
    })}
  >
    {children}
  </a>
);

Link.defaultProps = {
  className: '',
  title: '',
  target: '_self',
  isSimple: false,
  icon: '',
  iconPosition: 'right',
};

Link.propTypes = {
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
  isSimple: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Link;
