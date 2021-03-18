import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';
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
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};
export default ToolItemGroup;
