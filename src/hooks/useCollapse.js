import { useState, useEffect } from 'react';
import classNames from 'classnames';

const useCollapse = (id, isExpanded, className) => {
  const expandedItem = {
    false: {
      class: classNames(className, 'rf-collapse'),
      stateHeight: null,
    },
    true: {
      class: classNames(className, 'rf-collapse rf-collapse--expanded'),
      stateHeight: 'none',
    },
  };
  const [collapse, setCollapse] = useState('0px');
  const item = expandedItem[isExpanded];

  useEffect(() => {
    const itemElement = document.getElementById(id);
    setCollapse(`-${itemElement.getBoundingClientRect().height}px`);
  }, [id]);

  return { item, collapse };
};

export default useCollapse;
