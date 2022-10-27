import React, { Children } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

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
      {...dataAttributes.getAll(remainingProps)}
    >
      {childs}
    </ul>
  );
};

TagGroup.defaultProps = {
  className: '',
  __TYPE: 'TagGroup',
};

TagGroup.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('TagGroup'),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TagGroup;
