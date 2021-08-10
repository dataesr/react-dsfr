import React, { Children } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName Tag
 */
const TagGroup = ({
  className, children,
  ...remainingProps
}) => {
  const _className = classNames('fr-tags-group', className);
  // eslint-disable-next-line react/no-array-index-key
  const childs = Children.toArray(children).map((child, index) => <li key={index}>{child}</li>);
  return (
    <ul
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      {childs}
    </ul>
  );
};

TagGroup.defaultProps = {
  className: '',
};

TagGroup.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.node.isRequired,
};

export default TagGroup;
