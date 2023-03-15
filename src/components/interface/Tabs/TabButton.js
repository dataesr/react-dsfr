import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

import '../../foundation/icon/icons.css';

const TabButton = (props) => {
  const {
    className,
    index,
    activeTab,
    icon,
    label,
    onClickTab,
    onKeyDownTab,
    ...remainingProps
  } = props;

  const ref = useRef();
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current && activeTab === index) {
      ref.current.focus();
    }
    mounted.current = true;
  }, [activeTab, index]);

  return (
    <li
      role="presentation"
      {...dataAttributes.getAll(remainingProps)}
    >
      <button
        ref={ref}
        type="button"
        role="tab"
        id={`fr-tab-${index}`}
        aria-selected={activeTab === index ? 'true' : 'false'}
        tabIndex={activeTab === index ? 0 : -1}
        aria-controls={`fr-tabpanel-${index}`}
        className={classNames('fr-tabs__tab', {
          'fr-tabs__tab--icon-left': icon,
        })}
        onClick={() => onClickTab(index)}
        onKeyDown={(e) => onKeyDownTab(e, index)}
      >
        {icon && (
        <Icon
          name={icon}
          iconPosition="left"
        />
        )}
        {label}
      </button>
    </li>
  );
};

TabButton.defaultProps = {
  className: '',
  icon: '',
};

TabButton.propTypes = {
  className: PropTypes.string,
  onClickTab: PropTypes.func.isRequired,
  onKeyDownTab: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
  icon: PropTypes.string,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default TabButton;
