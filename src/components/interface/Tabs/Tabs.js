import classnames from 'classnames';
import {
  cloneElement, useState, Children,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE, SCHEME_TYPE } from '../../../utils/variables';

const Tabs = ({
  className, children, defaultActiveTab, scheme,
}) => {
  const [activeTab, setActiveTab] = useState(() => defaultActiveTab);
  const [contentTabHeight, setHeight] = useState(() => 500);
  const addProps = {
    activeTab, setActiveTab, setHeight,
  };
  const elements = Children.toArray(children).map((child, index) => cloneElement(child, {
    ...addProps, index, key: uuidv4(),
  }));

  return (
    <div className={classnames('rf-tabs', className, { [`rf-scheme-${scheme}`]: scheme })} style={{ height: contentTabHeight }}>
      <ul className="rf-tabs__list" role="tablist">
        {elements}
      </ul>
    </div>
  );
};

Tabs.defaultProps = {
  className: '',
  scheme: '',
  defaultActiveTab: 0,
};

Tabs.propTypes = {
  className: CLASS_NAME_TYPE,
  scheme: SCHEME_TYPE,
  defaultActiveTab: PropTypes.number,
  children: CHILDREN_TYPE.isRequired,
};

export default Tabs;
