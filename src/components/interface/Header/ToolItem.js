import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import HeaderContext from './headerContext';
import typeValidation from '../../../utils/type-validation';

const ToolItem = ({
  icon, link, className, children, asLink, target, as, onClick, ...remainingProps
}) => {
  const { onOpenNav } = useContext(HeaderContext);
  const HtmlTag = `${as}`;

  const onClickToolItem = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }
    onOpenNav(false);
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      {...dataAttributes.getAll(remainingProps)}
      onClick={() => onOpenNav(false)}
    >
      {as ? (
        <HtmlTag
          onClick={onClickToolItem}
          className={className}
        >
          {children}
        </HtmlTag>
      ) : (
        <Link
          onClick={onClick ? onClickToolItem : undefined}
          as={asLink}
          target={target}
          className={className}
          isSimple
          display="flex"
          icon={icon}
          iconPosition="left"
          iconSize="1x"
          href={onClick && !link ? '/' : link}
        >
          {children}
        </Link>
      )}
    </li>
  );
};

ToolItem.defaultProps = {
  __TYPE: 'ToolItem',
  className: '',
  icon: '',
  link: '',
  asLink: null,
  as: undefined,
  target: '_self',
  onClick: undefined,
};

ToolItem.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ToolItem'),
  className: PropTypes.string,
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
