import React, { Children } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
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
  const childs = Children.toArray(children).map((child) => <li key={uuidv4()}>{child}</li>);
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
