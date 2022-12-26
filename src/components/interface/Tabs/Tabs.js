import React, {
  cloneElement, useState, Children,
} from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import TabButton from './TabButton';

import '@gouvfr/dsfr/dist/component/tab/tab.css';

/**
 *
 * @visibleName Tabs
 */
const Tabs = ({
  className, children, defaultActiveTab, onChange, ...remainingProps
}) => {
  const [activeTab, setActiveTab] = useState(() => defaultActiveTab);
  const tabsPanel = Children.toArray(children).map((child, index) => cloneElement(child, {
    activeTab,
    index,
  }));

  const changeTab = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  const onKeyDownTab = (e, index) => {
    // Behavior from WAI-ARIA Authoring Practices 1.1
    // https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-19
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        changeTab((index + 1) % tabsPanel.length);
        break;

      case 'ArrowLeft':
        e.preventDefault();
        changeTab(index - 1 < 0 ? tabsPanel.length - 1 : index - 1);
        break;

      case 'Home':
        e.preventDefault();
        changeTab(0);
        break;

      case 'End':
        e.preventDefault();
        changeTab(tabsPanel.length - 1);
        break;

      default:
        // do nothing => apply normal behavior
    }
  };

  const _className = classNames('fr-tabs', className);
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <ul
        className="fr-tabs__list"
        role="tablist"
      >
        {tabsPanel.map((element, index) => (
          <TabButton
            key={element.props.label}
            activeTab={activeTab}
            onClickTab={changeTab}
            onKeyDownTab={onKeyDownTab}
            index={index}
            label={element.props.label}
            icon={element.props.icon}
          />
        ))}
      </ul>
      {tabsPanel}
    </div>
  );
};

Tabs.defaultProps = {
  className: '',
  defaultActiveTab: 0,
  onChange: undefined,
};

Tabs.propTypes = {
  className: PropTypes.string,
  defaultActiveTab: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Tabs;
