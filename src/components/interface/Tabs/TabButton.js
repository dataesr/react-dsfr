import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TabButton = ({
  className, index, activeTab, icon, iconPosition, label, setActiveTab,
}) => (
  <li className={classNames(className)}>
    <button
      onClick={() => setActiveTab(index)}
      type="button"
      className={classNames('rf-tabs__tab', icon, { [`rf-tabs__tab--icon-${iconPosition}`]: iconPosition })}
      tabIndex="0"
      role="tab"
      aria-selected={activeTab === index ? 'true' : 'false'}
      aria-controls={`rf-tabpanel-${index}`}
    >
      {label}
    </button>
  </li>
);

TabButton.defaultProps = {
  className: '',
  icon: '',
  iconPosition: 'left',
};

TabButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  setActiveTab: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default TabButton;
