import { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 *
 * @visibleName Button
 */
const ButtonGroup = ({
  children,
  className,
  size,
  isInlineFrom,
  isReversed,
  isEquisized,
  align,
}) => {
  const content = Children.toArray(children).map((child) => <li key={uuidv4()}>{child}</li>);
  const _className = classNames('rf-btns-group', {
    [`rf-btns-group--${size}`]: (size !== 'md'),
    [`rf-btns-group--${align}`]: (align !== 'left'),
    'rf-btns-group--inline': (isInlineFrom === 'xs'),
    [`rf-btns-group--inline-${isInlineFrom}`]: (isInlineFrom !== 'xs'),
    'rf-btns-group--inline-reverse': isReversed,
    'rf-btns-group--equisized': isEquisized,
  }, className);
  return (
    <ul className={_className} data-testid="button-group">
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
  className: CLASS_NAME_TYPE,
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
