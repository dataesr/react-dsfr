import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

/**
 *
 * @visibleName Toggle
 */
const ToggleGroup = ({
  className, children, labelLeft, hasSeparator,
  ...remainingProps
}) => {
  const _className = classNames('fr-toggle__list', className, {
    'fr-toggle--border-bottom': hasSeparator,
    'fr-toggle--label-left': labelLeft,
  });
  const childs = Children.toArray(children).map((child, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index}>{child}</li>
  ));
  return (
    <ul
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {childs}
    </ul>
  );
};

ToggleGroup.defaultProps = {
  className: '',
  __TYPE: 'TagGroup',
  labelLeft: false,
  hasSeparator: false,
};

ToggleGroup.propTypes = {
  __TYPE: typeValidation('TagGroup'),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  labelLeft: PropTypes.bool,
  hasSeparator: PropTypes.bool,
};

export default ToggleGroup;
