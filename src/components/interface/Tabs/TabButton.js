import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../foundation/icon/index';

const TabButton = ({
  className, index, activeTab, icon, iconPosition, label, setActiveTab,
}) => {
  const _tab = (
    <li
      role="tab"
      aria-selected={activeTab === index ? 'true' : 'false'}
      className={classNames(className)}
      tabIndex="0"
      aria-controls={`fr-tabpanel-${index}`}
      onClick={() => setActiveTab(index)}
      onKeyDown={() => setActiveTab(index)}
    >
      <div
        className={classNames('fr-tabs__tab', {
          [`fr-tabs__tab--icon-${iconPosition}`]: icon && iconPosition,
          [`icon-${iconPosition}`]: icon && iconPosition,
        })}
      >
        {label}
      </div>
    </li>
  );
  return (
    <>
      {icon ? (
        <Icon name={icon} size="lg" iconPosition={icon && 'left'}>
          {_tab}
        </Icon>
      ) : _tab}
    </>
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
