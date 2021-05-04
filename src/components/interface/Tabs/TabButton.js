import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../foundation/Icon/index';

const TabButton = ({
  className, index, activeTab, icon, iconPosition, label, setActiveTab,
}) => {
  const _tab = (
    <button
      onClick={() => setActiveTab(index)}
      type="button"
      className={classNames('fr-tabs__tab', {
        [`fr-tabs__tab--icon-${iconPosition}`]: icon && iconPosition,
        [`icon-${iconPosition}`]: icon && iconPosition,
      })}
      tabIndex="0"
      role="tab"
      aria-selected={activeTab === index ? 'true' : 'false'}
      aria-controls={`fr-tabpanel-${index}`}
    >
      {label}
    </button>
  );
  return (

    <li className={classNames(className)}>
      {icon ? (
        <Icon name={icon} size="lg" iconPosition={icon && 'left'}>
          {_tab}
        </Icon>
      ) : _tab}
    </li>
  );
};

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
