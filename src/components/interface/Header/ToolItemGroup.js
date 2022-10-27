import React, {
  useContext, useEffect, useState, Children,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

import HeaderContext from './headerContext';

const ToolItemGroup = ({ children, className, ...remainingProps }) => {
  const [menuLinkElement, setMenuLinkElement] = useState();
  const { isMobile, shortcutClassName } = useContext(HeaderContext);

  const translateTool = Children.toArray(children).filter(
    (child) => child.props && child.props.__TYPE === 'ToolTranslate',
  );

  const itemsTool = Children.toArray(children).filter(
    (child) => child.props && child.props.__TYPE === 'ToolItem',
  );

  useEffect(() => {
    setMenuLinkElement(document.querySelector('.fr-header__menu .fr-links-group'));
  }, [shortcutClassName, setMenuLinkElement, menuLinkElement, isMobile]);

  return (
    <div
      className={classNames(className, 'fr-header__tools-links')}
      {...dataAttributes.getAll(remainingProps)}
    >
      {isMobile && menuLinkElement && createPortal(itemsTool, menuLinkElement)}
      <ul className="fr-links-group">
        {itemsTool}
      </ul>
      {isMobile && menuLinkElement && createPortal(<li>{translateTool}</li>, menuLinkElement)}
      {translateTool}
    </div>
  );
};
ToolItemGroup.defaultProps = {
  __TYPE: 'ToolItemGroup',
  className: '',
};

ToolItemGroup.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ToolItemGroup'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};
export default ToolItemGroup;
