import React from 'react';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';

const PaginationItem = ({
  page,
  anchorAs,
  isActive,
  buildURL,
  onClick,
  aria,
  ...remainingProps
}) => {
  const HTMLTag = `${anchorAs}`;
  if (buildURL) {
    const href = (anchorAs === 'a') ? buildURL(page) : undefined;
    const to = (anchorAs !== 'a') ? buildURL(page) : undefined;
    return (
      <li
        {...dataAttributes.getAll(remainingProps)}
      >
        <HTMLTag
          aria-current={(isActive && 'page') || undefined}
          href={href}
          to={to}
          className="fr-pagination__link"
          aria-label={aria}
          title={aria}
        >
          {page}
        </HTMLTag>
      </li>
    );
  }
  return (
    <li
      {...dataAttributes.getAll(remainingProps)}
    >
      <button
        type="button"
        aria-current={(isActive && 'page') || undefined}
        onClick={() => {
          if (onClick) {
            onClick(page);
          }
        }}
        aria-label={aria}
        className="fr-pagination__link"
      >
        {page}
      </button>
    </li>
  );
};

PaginationItem.propTypes = {
  page: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  buildURL: PropTypes.func,
  onClick: PropTypes.func,
  aria: PropTypes.string,
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
};

PaginationItem.defaultProps = {
  anchorAs: 'a',
  isActive: false,
  buildURL: undefined,
  onClick: undefined,
  aria: null,
};
export default PaginationItem;
