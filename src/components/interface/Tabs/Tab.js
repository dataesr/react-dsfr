import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import withProps from '../../../utils/withProps';

const Tab = ({
  className, children, index, setActiveTab, activeTab, setHeight, icon, iconPosition, label,
}) => {
  const [translate, setTranslate] = useState('0%');
  const getHeight = (el) => el.getBoundingClientRect().height;
  useEffect(() => {
    if (activeTab === index) {
      const current = document.getElementById(`rf-tabpanel-${index}`);
      const tab = document.querySelector('.rf-tabs__list');
      setHeight(current && tab ? getHeight(current) + getHeight(tab) : 0);
    }
  }, [index, setHeight, activeTab]);
  useEffect(() => {
    // TODO manage animation
    if (activeTab > index) {
      setTranslate('-100%');
    } else if (activeTab < index) {
      setTranslate('100%');
    } else {
      setTranslate('0%');
    }
  }, [activeTab, setTranslate, index]);

  return (
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
      <div
        style={{ transform: `translate(${translate})` }}
        id={`rf-tabpanel-${index}`}
        className={`rf-tabs__panel ${activeTab === index ? 'rf-tabs__panel--selected' : ''}`}
        role="tabpanel"
        tabIndex="0"
      >
        {children}
      </div>
    </li>
  );
};

Tab.defaultProps = {
  className: '',
  icon: '',
  iconPosition: 'left',
};

Tab.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  index: PropTypes.number.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default withProps(Tab);
