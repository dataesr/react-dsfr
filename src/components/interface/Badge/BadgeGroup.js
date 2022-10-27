import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

/**
 *
 * @visibleName Badge
 */
const BadgeGroup = ({
  children,
  className,
  ...remainingProps
}) => {
  const content = Children.toArray(children)
  // eslint-disable-next-line react/no-array-index-key
    .map((child, index) => <li key={index}>{child}</li>);
  const _className = classNames('fr-badges-group', {}, className);
  return (
    <ul
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {content}
    </ul>
  );
};

BadgeGroup.defaultProps = {
  children: '',
  __TYPE: 'BadgeGroup',
  className: '',
};

BadgeGroup.propTypes = {
  __TYPE: typeValidation('BadgeGroup'),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default BadgeGroup;
