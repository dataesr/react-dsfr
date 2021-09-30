import React, { useContext, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderContext from './headerContext';
import { deepFilter } from '../../../utils/children-utilities';
import dataAttributes from '../../../utils/data-attributes';

const HeaderBody = ({
  children, className, closeButtonLabel, ...remainingProps
}) => {
  const managedTypes = ['HeaderOperator', 'Logo', 'Service'];
  const headerBodyChildren = deepFilter(children,
    (child) => child.type && !managedTypes.includes(child.props.__TYPE));
  const logo = deepFilter(children, (child) => child.type && child.props.__TYPE === 'Logo');
  const service = deepFilter(children, (child) => child.type && child.props.__TYPE === 'Service');
  const headerOperator = Children.toArray(children).find((child) => child.type && child.props.__TYPE === 'HeaderOperator');

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
    <div
      className="fr-header__body"
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className="fr-container">
        <div className={classNames(className, 'fr-header__body-row')}>
          <div className="fr-header__brand fr-enlarge-link">
            <div className="fr-header__brand-top">
              {logo && (
              <div className="fr-header__logo">
                {logo}
              </div>
              )}
              {headerOperator}
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
          {headerBodyChildren.map((child) => cloneElement(child, { closeButtonLabel }))}
        </div>
      </div>
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
  closeButtonLabel: 'Fermer',
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
  closeButtonLabel: PropTypes.string,
};

export default HeaderBody;
