import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createPortal } from 'react-dom';
import HeaderContext from './headerContext';

const ToolItemGroup = ({ children, className }) => {
  const [menuLinkElement, setMenuLinkElement] = useState();
  const { isMobile, shortcutClassName } = useContext(HeaderContext);
  useEffect(() => {
    setMenuLinkElement(document.querySelector('.fr-header__menu .fr-links-group'));
  }, [shortcutClassName, setMenuLinkElement, menuLinkElement]);

  return (
    <>
      {isMobile && menuLinkElement && createPortal(children, menuLinkElement)}
      <div className={classNames(className, 'fr-header__tools-links')}>
        <ul className="fr-links-group">
          {children}
        </ul>
      </div>
    </>
  );
};
ToolItemGroup.defaultProps = {
  className: '',
};

ToolItemGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default ToolItemGroup;
