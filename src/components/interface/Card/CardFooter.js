import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardFooter = ({
  children, className, ...remainingProps
}) => {
  const _className = classNames('fr-card__footer', className);

  const elements = Children.toArray(children).find((child) => {
    let content = null;

    if (child.props && child.props.__TYPE) {
      content = child.props.__TYPE === 'ButtonGroup';
    }

    return content;
  });

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {elements}
    </div>
  );
};

CardFooter.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardFooter'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};
CardFooter.defaultProps = {
  __TYPE: 'CardFooter',
  className: '',
};

export default CardFooter;
