import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

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
  const _className = classNames('fr-badge-group', {}, className);
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
  className: '',
};

BadgeGroup.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default BadgeGroup;
