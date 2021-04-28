import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withProps from '../../../utils/withProps';

const Tab = ({
  className, index, activeTab, setHeight, children,
}) => {
  const getHeight = (el) => el.getBoundingClientRect().height;
  useEffect(() => {
    if (activeTab === index) {
      const current = document.getElementById(`fr-tabpanel-${index}`);
      const tab = document.querySelector('.fr-tabs__list');
      setHeight(current && tab ? getHeight(current) + getHeight(tab) : 0);
    }
  }, [index, setHeight, activeTab]);
  return (
    <div
      id={`fr-tabpanel-${index}`}
      className={classNames(`fr-tabs__panel ${activeTab === index ? 'fr-tabs__panel--selected' : ''}`, className)}
      role="tabpanel"
      tabIndex="0"
    >
      {children}
    </div>
  );
};

Tab.defaultProps = {
  className: '',
};

Tab.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  setHeight: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default withProps(Tab);
