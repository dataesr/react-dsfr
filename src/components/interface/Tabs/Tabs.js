import classnames from 'classnames';
import {
  cloneElement, useState, Children, useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

// TODO add uuid by Tab

const Tabs = ({
  className, children,
}) => {
  const [activeTab, setActiveTab] = useState(() => 0);
  const [contentTabHeight, setContentTabHeight] = useState(() => 0);

  return (
    <div className={classnames('rf-tabs', className)} style={{ height: contentTabHeight }}>
      <ul className="rf-tabs__list" role="tablist">
        {children.map((child, index) => cloneElement(child, {
          ...children, index, activeTab, setActiveTab, setContentTabHeight, key: uuidv4(),
        }))}
      </ul>
    </div>
  );
};

Tabs.defaultProps = {
  className: '',
};

Tabs.propTypes = {
  className: CLASS_NAME_TYPE,
  children: CHILDREN_TYPE.isRequired,
};

export default Tabs;
