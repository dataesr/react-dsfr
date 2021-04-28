import { useState, useEffect } from 'react';
import classNames from 'classnames';

const useCollapse = (id, isExpanded, className) => {
  const expandedItem = {
    false: {
      class: classNames(className, 'fr-collapse'),
      stateHeight: null,
    },
    true: {
      class: classNames(className, 'fr-collapse fr-collapse--expanded'),
      stateHeight: 'none',
    },
  };
  const [collapse, setCollapse] = useState('0px');
  const item = expandedItem[isExpanded];

  useEffect(() => {
    setCollapse(`-${document.getElementById(id).getBoundingClientRect().height}px`);
  }, [id]);

  return { item, collapse };
};

export default useCollapse;
