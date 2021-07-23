import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import HeaderContext from './headerContext';

const ToolItem = ({
  icon, link, className, children, asLink, target, as, ...remainingProps
}) => {
  const { onOpenNav } = useContext(HeaderContext);
  const HtmlTag = `${as}`;

  return (
    <li
      key={uuidv4()}
      {...dataAttributes(remainingProps)}
    >
      {as ? (
        <HtmlTag
          onClick={() => onOpenNav(false)}
          className={className}
        >
          {children}
        </HtmlTag>
      ) : (
        <Link
          onClick={() => onOpenNav(false)}
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
  as: '',
  target: '_self',
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
  as: PropTypes.oneOf(['p', 'span', 'div']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  link: PropTypes.string,
  asLink: PropTypes.element,
  target: PropTypes.string,
};

export default ToolItem;
