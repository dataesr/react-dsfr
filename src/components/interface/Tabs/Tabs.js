import React, {
  cloneElement, useState, Children,
} from 'react';

import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import { SCHEMES } from '../../../utils/constants';
import TabButton from './TabButton';

import '@gouvfr/dsfr/dist/css/tabs.min.css';

/**
 *
 * @visibleName Tabs
 */
const Tabs = ({
  className, children, defaultActiveTab, scheme, ...remainingProps
}) => {
  const [activeTab, setActiveTab] = useState(() => defaultActiveTab);
  const tabsPanel = Children.toArray(children).map((child, index) => cloneElement(child, {
    activeTab,
    index,
  }));

  const onKeyDownTab = (e, index) => {
    // Behavior from WAI-ARIA Authoring Practices 1.1
    // https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-19
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        setActiveTab((index + 1) % tabsPanel.length);
        break;

      case 'ArrowLeft':
        e.preventDefault();
        setActiveTab(index - 1 < 0 ? tabsPanel.length - 1 : index - 1);
        break;

      case 'Home':
        e.preventDefault();
        setActiveTab(0);
        break;

      case 'End':
        e.preventDefault();
        setActiveTab(tabsPanel.length - 1);
        break;

      default:
        // do nothing => apply normal behavior
    }
  };

  const _className = classNames('fr-tabs', className, { [`fr-scheme-${scheme}`]: scheme });
  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <ul
        className="fr-tabs__list"
        role="tablist"
      >
        {tabsPanel.map((element, index) => (
          <TabButton
            key={element.props.label}
            activeTab={activeTab}
            onClickTab={setActiveTab}
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
