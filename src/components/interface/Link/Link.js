import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cloneElement } from 'react';

/**
 * Navigation
 *
 * @visibleName Link
 */
const Link = ({
  children, href, title, target, isSimple, icon, className, iconPosition, as,
}) => {
  const _className = classNames(icon, className, {
    'rf-link': isSimple,
    'rf-link--icon-left': !isSimple && icon,
    [`rf-link--icon-${iconPosition}`]: iconPosition && isSimple && icon && children,
  });

  const asLink = as ? cloneElement(as, { className: _className }) : null;

  return (
    as ? <>{asLink}</>
      : (
        <a
          href={href}
          title={title || undefined}
          target={target}
          rel={(target === '_blank') ? 'noopener noreferrer' : undefined}
          className={_className || undefined}
        >
          {children}
        </a>
      )
  );
};

Link.defaultProps = {
  className: '',
  title: '',
  target: '_self',
  isSimple: false,
  icon: '',
  as: null,
  iconPosition: 'right',
  href: '',
  children: '',
};

Link.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  href: PropTypes.string,
  as: PropTypes.element,
  title: PropTypes.string,
  target: PropTypes.string,
  isSimple: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Link;
