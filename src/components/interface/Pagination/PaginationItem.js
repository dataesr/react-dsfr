import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationItem = ({
  page,
  anchorAs,
  isActive,
  isVisibleOnMobile,
  url,
  aria,
}) => {
  const Tag = `${anchorAs}`;
  const href = (anchorAs === 'a') ? url : undefined;
  const to = (anchorAs !== 'a') ? url : undefined;
  const _className = classNames('rf-pagination__item', {
    'rf-pagination__item--from-md': !isVisibleOnMobile,
    'rf-pagination__item--active': isActive,
  });
  if (isActive) return <li className={_className} aria-current={aria}>{page}</li>;
  return (
    <li className={_className}>
      <Tag
        href={href}
        to={to}
        className="rf-pagination__link"
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
  isVisibleOnMobile: PropTypes.bool,
  url: PropTypes.string,
  aria: PropTypes.string,
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
};

PaginationItem.defaultProps = {
  anchorAs: 'a',
  isActive: false,
  isVisibleOnMobile: false,
  url: null,
  aria: null,
};
export default PaginationItem;
