import React from 'react';
import PropTypes from 'prop-types';

import dataAttributes from '../../../utils/data-attributes';

const ToolTranslateItem = ({
  className, children, hrefLang, href, onClick, active, ...remainingProps
}) => (
  <li
    className={className || undefined}
    {...dataAttributes.getAll(remainingProps)}
  >
    <a
      className="fr-translate__language fr-nav__link"
      hrefLang={hrefLang}
      lang={hrefLang}
      href={href}
      aria-current={active || undefined}
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

ToolTranslateItem.defaultProps = {
  className: '',
  onClick: undefined,
  active: false,
};

ToolTranslateItem.propTypes = {
  className: PropTypes.string,
  /**
     * html tag to render
     */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  hrefLang: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ToolTranslateItem;
