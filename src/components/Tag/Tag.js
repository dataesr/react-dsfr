import PropTypes from 'prop-types';
import className from 'classnames';
/**
 * Le tag catégorise/classe/organise les contenus à l'aide de mots-clés.
 * Il aide les utilisateurs à rechercher et à trouver facilement une information.
 *
 * @visibleName Tag
 */
const Tag = ({
  as, children, size, href, title, target, icon, iconPosition,
}) => {
  const HtmlTag = `${as}`;
  const classes = className('rf-tag', {
    [`rf-tag--${size}`]: size,
    [`rf-fi-${icon}`]: icon,
    [`rf-tag--icon-${iconPosition}`]: (icon && iconPosition),
  });

  return (
    <HtmlTag
      className={classes}
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
  as: 'p',
  size: 'md',
  href: '',
  title: '',
  target: '',
  icon: '',
  iconPosition: 'right',
};

Tag.propTypes = {
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
