import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const CardTitle = ({
  href, children, as, anchorAs, className, ...remainingProps
}) => {
  const Tag = `${as}`;
  const AnchorTag = `${anchorAs}`;
  return (
    <Tag
      className={classNames('fr-card__title', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      <AnchorTag href={href} className="fr-card__link">{children}</AnchorTag>
    </Tag>
  );
};

CardTitle.defaultProps = {
  __TYPE: 'CardTitle',
  anchorAs: 'a',
  as: 'p',
  className: '',
  href: '',
};
CardTitle.propTypes = {
  /**
   * @ignore
   */
  href: PropTypes.string,
  /**
   * @ignore
   */
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardTitle'),
  anchorAs: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default CardTitle;
