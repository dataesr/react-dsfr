import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';
import Link from '../Link';

const CardTitle = ({
  href, children, as, anchorAs, className, asLink, onClick, ariaLabel, ...remainingProps
}) => {
  const HTMLTag = `${as}`;
  const AnchorTag = onClick ? 'button' : `${anchorAs}`;

  return (
    <HTMLTag
      className={classNames('fr-card__title', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      {asLink ? (
        <Link
          as={asLink}
          href={href}
          className="fr-card__link"
          onClick={onClick}
        >
          {children}
        </Link>
      )
        : (
          <AnchorTag
            aria-label={ariaLabel || undefined}
            type={onClick ? 'button' : undefined}
            onClick={onClick}
            href={href || undefined}
            className="fr-card__link"
          >
            {children}
          </AnchorTag>
        )}
    </HTMLTag>
  );
};

CardTitle.defaultProps = {
  __TYPE: 'CardTitle',
  anchorAs: 'a',
  as: 'p',
  className: '',
  href: '',
  ariaLabel: '',
  asLink: null,
  onClick: undefined,
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
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  asLink: PropTypes.element,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default CardTitle;
