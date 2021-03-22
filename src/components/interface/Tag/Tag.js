import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';
import { getScheme } from '../../../utils/getters';

/**
 * Le tag catégorise/classe/organise les contenus à l'aide de mots-clés.
 * Il aide les utilisateurs à rechercher et à trouver facilement une information.
 *
 * @visibleName Tag
 */
const Tag = ({
  as,
  children,
  size,
  href,
  title,
  target,
  icon,
  iconPosition,
  className,
  scheme,
}) => {
  const HtmlTag = `${as}`;
  const _scheme = getScheme(scheme);
  const _className = classNames('rf-tag', _scheme, {
    [`rf-tag--${size}`]: size,
    [`rf-fi-${icon}`]: icon,
    [`rf-tag--icon-${iconPosition}`]: (icon && iconPosition),
  }, className);

  return (
    <HtmlTag
      className={_className}
      title={title || undefined}
      href={href || undefined}
      target={target || undefined}
      rel={target === '_blank' ? 'noopener noreferer' : undefined}
    >
      {children}
    </HtmlTag>
  );
};

Tag.defaultProps = {
  className: '',
  scheme: '',
  as: 'p',
  size: 'md',
  href: '',
  title: '',
  target: '',
  icon: '',
  iconPosition: 'right',
};

Tag.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
  as: PropTypes.oneOf(['a', 'span', 'p']),
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  href: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Tag;
