import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSurrendingLeft, getSurrendingRight } from './helpers';
import PaginationItem from './PaginationItem';

import '@gouvfr/dsfr/dist/css/pagination.min.css';

const Pagination = ({
  pageCount,
  currentPage,
  anchorAs,
  buildURL,
  buttonLabels,
  surrendingPages,
}) => {
  const surrendingLeft = getSurrendingLeft(currentPage, surrendingPages);
  const surrendingRight = getSurrendingRight(currentPage, surrendingPages, pageCount);
  const prevClasses = classNames({ 'rf-pagination__item--disabled': currentPage === 1 });
  const nextClasses = classNames({ 'rf-pagination__item--disabled': currentPage === pageCount });
  const Tag = `${anchorAs}`;
  const {
    navigationAria, prevLabel, nextLabel, prevAria,
    nextAria, firstAria, lastAria, currentAria, pageAria,
  } = buttonLabels;

  return (
    <nav className="rf-pagination" aria-label={navigationAria} data-testid="pagination-nav">
      <ul className="rf-pagination__list">
        <li className={`rf-pagination__item--first rf-pagination__item ${prevClasses}`}>
          <Tag className="rf-pagination__link" aria-label={firstAria} title={firstAria} />
        </li>
        <li className={`rf-pagination__item--prev rf-pagination__item ${prevClasses}`}>
          <Tag className="rf-pagination__link" aria-label={prevAria} title={prevAria}>
            <span className="rf-pagination__label">{prevLabel}</span>
          </Tag>
        </li>
        <PaginationItem
          isVisibleOnMobile
          page={1}
          anchorAs={anchorAs}
          isActive={currentPage === 1}
          url={buildURL(1)}
          aria={pageAria(1)}
        />
        { surrendingLeft.hasEllipsis && (
          <li className="rf-pagination__item rf-pagination__item--from-md">…</li>)}
        {surrendingLeft.pages.map((p) => (
          <PaginationItem
            key={p}
            page={p}
            anchorAs={anchorAs}
            url={buildURL(p)}
            aria={pageAria(p)}
          />
        ))}
        {((currentPage !== 1) && (currentPage !== pageCount)) && (
          <PaginationItem page={currentPage} isVisibleOnMobile isActive aria={currentAria} />
        )}
        {surrendingRight.pages.map((p) => (
          <PaginationItem
            key={p}
            page={p}
            anchorAs={anchorAs}
            url={buildURL(p)}
            aria={pageAria(p)}
          />
        ))}
        { surrendingRight.hasEllipsis && (
          <li className="rf-pagination__item rf-pagination__item--from-md">…</li>)}
        {(pageCount !== 1) && (
          <PaginationItem
            aria={pageAria(pageCount)}
            isVisibleOnMobile
            isActive={currentPage === pageCount}
            page={pageCount}
            anchorAs={anchorAs}
            url={buildURL(pageCount)}
          />
        )}
        <li className={`rf-pagination__item--next rf-pagination__item ${nextClasses}`}>
          <Tag className="rf-pagination__link" aria-label={nextAria} title={nextAria}>
            <span className="rf-pagination__label">{nextLabel}</span>
          </Tag>
        </li>
        <li className={`rf-pagination__item--last rf-pagination__item ${nextClasses}`}>
          <Tag className="rf-pagination__link" aria-label={lastAria} title={lastAria} />
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  buildURL: PropTypes.func.isRequired,
  anchorAs: PropTypes.oneOf(['a', PropTypes.elementType]),
  buttonLabels: PropTypes.shape(),
  surrendingPages: PropTypes.number,
};

Pagination.defaultProps = {
  anchorAs: 'a',
  surrendingPages: 2,
  buttonLabels: {
    navigationAria: 'Pagination navigation',
    currentAria: 'page',
    pageAria: (page) => `Page ${page}`,
    prevLabel: 'Précédente',
    nextLabel: 'Suivante',
    prevAria: 'Page précédente',
    nextAria: 'Page suivante',
    firstAria: 'Première page',
    lastAria: 'Dernière Page',
  },
};
export default Pagination;
