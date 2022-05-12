import React, { Children } from 'react';
import PropTypes from 'prop-types';
import typeValidation from '../../../utils/type-validation';
import dataAttributes from '../../../utils/data-attributes';

const CardHeader = ({ children, ...remainingProps }) => {
  const img = Children.toArray(children).find((child) => child.props.__TYPE === 'CardImage');
  const elements = Children.toArray(children).find((child) => {
    let content = null;

    if (child.props && child.props.__TYPE) {
      content = child.props.__TYPE === 'BadgeGroup';
    }

    return content;
  });

  return (
    <div
      className="fr-card__header"
      {...dataAttributes.getAll(remainingProps)}
    >
      {elements}
      {img}
    </div>
  );
};

CardHeader.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardHeader'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

CardHeader.defaultProps = {
  __TYPE: 'CardHeader',
};

export default CardHeader;
