import classNames from 'classnames';
import {
  cloneElement, useState, Children,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { SCHEMES } from '../../../utils/constants';

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
  const _className = classNames('rf-tabs', className, { [`rf-scheme-${scheme}`]: scheme });
  return (
    <div className={_className} style={{ height: contentTabHeight }}>
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  scheme: PropTypes.oneOf(SCHEMES),
  defaultActiveTab: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Tabs;
