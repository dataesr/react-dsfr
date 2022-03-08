import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName ButtonGroup
 */
const ButtonGroup = ({
  children,
  className,
  size,
  isInlineFrom,
  isReversed,
  isEquisized,
  align,
  ...remainingProps
}) => {
  const content = Children.toArray(children)
    // eslint-disable-next-line react/no-array-index-key
    .map((child, index) => <li key={index}>{child}</li>);
  const _className = classNames('fr-btns-group', {
    [`fr-btns-group--${size}`]: (size !== 'md'),
    [`fr-btns-group--${align}`]: (align !== 'left'),
    'fr-btns-group--inline': (isInlineFrom === 'xs'),
    [`fr-btns-group--inline-${isInlineFrom}`]: (isInlineFrom !== 'xs'),
    'fr-btns-group--inline-reverse': isReversed,
    'fr-btns-group--equisized': isEquisized,
  }, className);
  return (
    <ul
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {content}
    </ul>
  );
};

ButtonGroup.defaultProps = {
  size: 'md',
  isInlineFrom: null,
  children: '',
  className: '',
  isReversed: false,
  isEquisized: false,
  align: 'left',
};

ButtonGroup.propTypes = {
  isInlineFrom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isReversed: PropTypes.bool,
  isEquisized: PropTypes.bool,
};

export default ButtonGroup;
