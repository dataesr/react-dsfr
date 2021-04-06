import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardTitle = ({
  href, children, as, anchorAs, className,
}) => {
  const Tag = `${as}`;
  const AnchorTag = `${anchorAs}`;
  return (
    <Tag className={classNames('rf-card__title', className)}>
      <AnchorTag href={href} className="rf-card__link">{children}</AnchorTag>
    </Tag>
  );
};

CardTitle.defaultProps = {
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
  anchorAs: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default CardTitle;
