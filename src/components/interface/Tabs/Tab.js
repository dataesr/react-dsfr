import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';

import withProps from '../../../utils/withProps';

const Tab = ({
  className, index, activeTab, children, ...remainingProps
}) => (
  <div
    id={`fr-tabpanel-${index}`}
    className={classNames(
      `fr-tabs__panel ${activeTab === index ? 'fr-tabs__panel--selected' : ''}`,
      className,
    )}
    role="tabpanel"
    aria-labelledby={`fr-tab-${index}`}
    tabIndex="0"
    {...dataAttributes(remainingProps)}
  >
    {children}
  </div>
);

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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default withProps(Tab);
