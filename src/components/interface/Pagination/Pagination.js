import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import { getSurrendingLeft, getSurrendingRight } from './helpers';
import PaginationItem from './PaginationItem';

/*
* DSFR v1.3.1
*/
import '@gouvfr/dsfr/dist/component/pagination/pagination.css';

const Pagination = ({
  pageCount,
  currentPage,
  anchorAs,
  buildURL,
  onClick,
  buttonLabels,
  surrendingPages,
  ...remainingProps
}) => {
  const surrendingLeft = getSurrendingLeft(currentPage, surrendingPages);
  const surrendingRight = getSurrendingRight(currentPage, surrendingPages, pageCount);
  const HTMLTag = `${anchorAs}`;
  const {
    navigationAria, prevLabel, nextLabel, prevAria,
    nextAria, firstAria, lastAria, currentAria, pageAria,
  } = buttonLabels;

  const getItem = (down, index, aria, icon, label) => {
    const check = down ? currentPage > 1 : currentPage < pageCount;
    if (buildURL) {
      return (
        <HTMLTag
          href={check ? buildURL(index) : undefined}
          className={classNames({ [`fr-pagination__link--${icon}`]: aria }, 'fr-pagination__link')}
          aria-label={aria}
          title={aria}
        >
          {label}
        </HTMLTag>
      );
    }

    return (
      <button
        type="button"
        onClick={() => onClick(index)}
        disabled={!check}
        className={classNames({ [`fr-pagination__link--${icon}`]: aria }, 'fr-pagination__link')}
        aria-label={aria}
      >
        {label}
      </button>
    );
  };

  return (
    <nav
      className="fr-pagination"
      aria-label={navigationAria}
      role="navigation"
      {...dataAttributes.getAll(remainingProps)}
    >
      <ul className="fr-pagination__list">
        <li>
          {getItem(true, 1, firstAria, 'first')}
        </li>
        <li>
          {getItem(true, currentPage - 1, prevAria, 'prev', prevLabel)}
        </li>
        <PaginationItem
          isVisibleOnMobile
          page={1}
          anchorAs={anchorAs}
          isActive={currentPage === 1}
          buildURL={buildURL}
          onClick={onClick}
          aria={pageAria(1)}
        />
        { surrendingLeft.hasEllipsis && (
          <li>…</li>)}
        {surrendingLeft.pages.map((p) => (
          <PaginationItem
            key={p}
            page={p}
            anchorAs={anchorAs}
            buildURL={buildURL}
            onClick={onClick}
            aria={pageAria(p)}
          />
        ))}
        {((currentPage !== 1) && (currentPage !== pageCount)) && (
          <PaginationItem
            page={currentPage}
            isVisibleOnMobile
            isActive
            aria={currentAria}
          />
        )}
        {surrendingRight.pages.map((p) => (
          <PaginationItem
            key={p}
            page={p}
            anchorAs={anchorAs}
            buildURL={buildURL}
            onClick={onClick}
            aria={pageAria(p)}
          />
        ))}
        { surrendingRight.hasEllipsis && (
          <li>…</li>)}
        {(pageCount !== 1) && (
          <PaginationItem
            aria={pageAria(pageCount)}
            isVisibleOnMobile
            aria-current={(currentPage === pageCount && 'page') || undefined}
            isActive={currentPage === pageCount}
            page={pageCount}
            anchorAs={anchorAs}
            buildURL={buildURL}
            onClick={onClick}
          />
        )}
        <li>
          {getItem(false, currentPage + 1, nextAria, 'next', nextLabel)}
        </li>
        <li>
          {getItem(false, pageCount, lastAria, 'last')}
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  buildURL: (props, propName, componentName) => {
    const { buildURL, onClick } = props;
    if ((!buildURL && !onClick) || (buildURL && onClick)) {
      return new Error(`You must specify only one of props 'buildURL' or 'onClick' in '${componentName}'.`);
    }
    if (buildURL) {
      PropTypes.checkPropTypes(
        {
          buildURL: PropTypes.func,
        },
        { buildURL },
        'prop',
        'Pagination',
      );
    }
    return null;
  },
  onClick: (props, propName, componentName) => {
    const { buildURL, onClick } = props;
    if ((!buildURL && !onClick) || (buildURL && onClick)) {
      return new Error(`You must specify only one of props 'buildURL' or 'onClick' in '${componentName}'.`);
    }
    if (onClick) {
      PropTypes.checkPropTypes(
        {
          onClick: PropTypes.func,
        },
        { onClick },
        'prop',
        'Pagination',
      );
    }
    return null;
  },
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
  buildURL: undefined,
  onClick: undefined,
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
