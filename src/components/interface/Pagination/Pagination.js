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
  const Tag = `${anchorAs}`;
  const {
    navigationAria, prevLabel, nextLabel, prevAria,
    nextAria, firstAria, lastAria, currentAria, pageAria,
  } = buttonLabels;

  return (
    <nav
      className="fr-pagination"
      aria-label={navigationAria}
      role="navigation"
      data-testid="pagination-nav"
    >
      <ul className="fr-pagination__list">
        <li>
          <Tag
            href={currentPage > 1 ? buildURL(1) : undefined}
            className={classNames({ 'fr-pagination__link--first': firstAria }, 'fr-pagination__link')}
            aria-label={firstAria}
            title={firstAria}
          />
        </li>
        <li>
          <Tag
            href={currentPage > 1 ? buildURL(currentPage - 1) : undefined}
            className={classNames({ 'fr-pagination__link--prev': prevAria }, 'fr-pagination__link')}
            aria-label={prevAria}
            title={prevAria}
          >
            {prevLabel}
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
          <li>…</li>)}
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
          <li>…</li>)}
        {(pageCount !== 1) && (
          <PaginationItem
            aria={pageAria(pageCount)}
            isVisibleOnMobile
            aria-current={currentPage === pageCount ? 'page' : ''}
            isActive={currentPage === pageCount}
            page={pageCount}
            anchorAs={anchorAs}
            url={buildURL(pageCount)}
          />
        )}
        <li>
          <Tag
            href={currentPage < pageCount ? buildURL(currentPage + 1) : undefined}
            className={classNames({ 'fr-pagination__link--next': nextAria }, 'fr-pagination__link')}
            aria-label={nextAria}
            title={nextAria}
          >
            {nextLabel}
          </Tag>
        </li>
        <li>
          <Tag
            href={currentPage < pageCount ? buildURL(pageCount) : undefined}
            className={classNames({ 'fr-pagination__link--last': lastAria }, 'fr-pagination__link')}
            aria-label={lastAria}
            title={lastAria}
          />
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
  buttonLabels: PropTypes.shape({
    navigationAria: PropTypes.string,
    currentAria: PropTypes.string,
    pageAria: PropTypes.func,
    prevLabel: PropTypes.string,
    nextLabel: PropTypes.string,
    prevAria: PropTypes.string,
    nextAria: PropTypes.string,
    firstAria: PropTypes.string,
    lastAria: PropTypes.string,
  }),
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
