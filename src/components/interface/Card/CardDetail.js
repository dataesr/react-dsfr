import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardDetail = ({
  children, className, position, ...remainingProps
}) => {
  const _className = classNames({
    'fr-card__start': position === 'top',
    'fr-card__end': position === 'bottom',
  }, className);

  const elements = Children.toArray(children).find((child) => {
    let content = null;

    if (child.props && child.props.__TYPE) {
      content = child.props.__TYPE === 'TagGroup' || 'BadgeGroup' || 'ButtonGroup';
    }

    return content;
  });

  const text = Children.toArray(children).find((child) => {
    let content = null;

    if (child && !child.props) {
      content = child;
    }

    return content;
  });

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {elements}
      <p className="fr-card__detail fr-icon-warning-fill">{text}</p>
    </div>
  );
};

CardDetail.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardDetail'),
  position: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDetail.defaultProps = {
  __TYPE: 'CardDetail',
  className: '',
  position: 'top',
};

export default CardDetail;
