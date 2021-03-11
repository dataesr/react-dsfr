import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const Tab = ({
  className, children, index, setActiveTab, activeTab, setContentTabHeight,
}) => {
  const content = useRef(null);
  useEffect(() => {
    if (activeTab === index) {
      setContentTabHeight(content.current ? content.current.clientHeight : 500);
    }
  }, [index, setContentTabHeight, activeTab]);
  const obj = {
    true: {
      aria: 'true',
      class: 'rf-tabs__panel rf-tabs__panel--selected',
    },
    false: {
      aria: 'false',
      class: 'rf-tabs__panel',
    },
  };

  let trans = '0%';
  if (activeTab > index) {
    trans = '-100%';
  } else if (activeTab < index) {
    trans = '100%';
  }
  console.log('==== test ==== ', index);
  return (
    <li className={classnames(className)}>
      <button
        onClick={() => setActiveTab(index)}
        type="button"
        className="rf-tabs__tab rf-fi-checkbox-line rf-tabs__tab--icon-left"
        tabIndex="0"
        role="tab"
        aria-selected={obj[activeTab === index].aria}
        aria-controls={`rf-tabpanel-${index}`}
      >
        Label Tab 1
      </button>
      <div
        style={{ transform: `translate(${trans})` }}
        ref={content}
        id={`rf-tabpanel-${index}`}
        className={obj[activeTab === index].class}
        role="tabpanel"
        tabIndex="0"
      >
        <div className="rf-prose">
          {children}
          <h4 className="rf-h4">Contenu panneau 1</h4>
          <ul>
            <li>
              list item
              <ul>
                <li>list item niveau 2</li>
              </ul>
            </li>
            <li>
              list item
              <p>Lorem ipm saepe sed tempora, velit, vero!</p>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

Tab.defaultProps = {
  className: '',
};

Tab.propTypes = {
  className: CLASS_NAME_TYPE,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setContentTabHeight: PropTypes.func.isRequired,
  children: CHILDREN_TYPE.isRequired,
};

export default Tab;
