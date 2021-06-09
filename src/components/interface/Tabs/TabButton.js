import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const TabButton = ({
  className, index, activeTab, icon, label, setActiveTab, ...remainingProps
}) => (
  <li
    role="presentation"
    {...dataAttributes(remainingProps)}
  >
    <button
      type="button"
      role="tab"
      aria-selected={activeTab === index ? 'true' : 'false'}
      tabIndex="0"
      aria-controls={`fr-tabpanel-${index}`}
      className={classNames('fr-tabs__tab', {
        [icon]: icon,
        'fr-tabs__tab--icon-left': icon,
      })}
      onClick={() => setActiveTab(index)}
      onKeyDown={() => setActiveTab(index)}
    >
      {label}
    </button>
  </li>
);

TabButton.defaultProps = {
  className: '',
  icon: '',
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
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default TabButton;
