import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import HeaderContext from './headerContext';

const ToolItemGroup = ({ children, className }) => {
  const [shortcutListElement, setShortcutListElement] = useState();
  const { isMobile, shortcutClassName } = useContext(HeaderContext);
  useEffect(() => {
    setShortcutListElement(document.querySelector('.rf-shortcuts__list'));
  }, [shortcutClassName, setShortcutListElement]);
  return (
    <>
      {isMobile && shortcutListElement && createPortal(children, shortcutListElement)}
      {!isMobile && (
        <div className={classNames(className, 'rf-shortcuts')}>
          <ul className="rf-shortcuts__list">
            {children}
          </ul>
        </div>
      )}
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
