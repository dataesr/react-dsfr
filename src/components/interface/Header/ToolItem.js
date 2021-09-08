import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import HeaderContext from './headerContext';

const ToolItem = ({
  icon, link, className, children, asLink, target, as, onClick, ...remainingProps
}) => {
  const { onOpenNav } = useContext(HeaderContext);
  const HtmlTag = `${as}`;

  const closeNav = (e) => {
    if (onClick) {
      onClick(e);
    }
    onOpenNav(false);
  };
  return (
    <li
      {...dataAttributes.getAll(remainingProps)}
    >
      {as ? (
        <HtmlTag
          onClick={closeNav}
          className={className}
        >
          {children}
        </HtmlTag>
      ) : (
        <Link
          onClick={closeNav}
          as={asLink}
          target={target}
          className={className}
          isSimple
          display="flex"
          icon={icon}
          iconPosition="left"
          iconSize="1x"
          href={link}
        >
          {children}
        </Link>
      )}
    </li>
  );
};

ToolItem.defaultProps = {
  className: '',
  icon: '',
  link: '',
  asLink: null,
  as: undefined,
  target: '_self',
  onClick: undefined,
};

ToolItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  /**
   * html tag to render
   */
  as: PropTypes.oneOf(['p', 'span', 'div', '']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  asLink: PropTypes.element,
  target: PropTypes.string,
};

export default ToolItem;
