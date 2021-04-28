import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderContext from './headerContext';
import { deepFilter } from '../../../utils/children-utilities';

const HeaderBody = ({ children, className }) => {
  const elements = deepFilter(children, (child) => child.type && (child.type.name !== 'Logo' && child.type.name !== 'Service'));
  const logo = deepFilter(children, (child) => child.type && child.type.name === 'Logo');
  const service = deepFilter(children, (child) => child.type && child.type.name === 'Service');

  const context = useContext(HeaderContext);
  const {
    searchButton,
    isSearchBar,
    onOpenSearch,
    onOpenNav,
    navButton,
    isNavBar,
    isNavTool,
  } = context;

  return (
    <div className="fr-header__body">
      <div className="fr-container">
        <div className={classNames(className, 'fr-header__body-row')} role="banner">
          <div className="fr-header__brand fr-enlarge-link">
            <div className="fr-header__brand-top">
              <div className="fr-header__logo">
                {logo}
              </div>
              {(isNavBar || isNavTool) && (
                <div className="fr-header__navbar">
                  <button
                    onClick={onOpenNav}
                    type="button"
                    className="fr-btn--menu fr-btn"
                    title={navButton}
                    aria-label="ouvrir la navigation"
                  >
                    {navButton}
                  </button>
                  {isSearchBar && (
                  <button
                    onClick={onOpenSearch}
                    type="button"
                    className="fr-btn--search fr-btn fr-fi-search-line fr-btn--icon"
                    title={searchButton}
                    aria-label="ouvrir la recherche"
                  >
                    {searchButton}
                  </button>
                  )}
                </div>
              )}
            </div>
            {service}
          </div>
          {elements}
        </div>
      </div>
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default HeaderBody;
