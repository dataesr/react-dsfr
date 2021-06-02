import React from 'react';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';

const PaginationItem = ({
  page,
  anchorAs,
  isActive,
  url,
  aria,
  ...remainingProps
}) => {
  const Tag = `${anchorAs}`;
  const href = (anchorAs === 'a') ? url : undefined;
  const to = (anchorAs !== 'a') ? url : undefined;
  return (
    <li
      {...dataAttributes(remainingProps)}
    >
      <Tag
        aria-current={(isActive && 'page') || undefined}
        href={href}
        to={to}
        className="fr-pagination__link"
        aria-label={aria}
        title={aria}
      >
        {page}
      </Tag>
    </li>
  );
};

PaginationItem.propTypes = {
  page: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  url: PropTypes.string,
  aria: PropTypes.string,
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
};

PaginationItem.defaultProps = {
  anchorAs: 'a',
  isActive: false,
  url: null,
  aria: null,
};
export default PaginationItem;
