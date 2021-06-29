import { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function useCollapse(id, isExpanded, className) {
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
    const element = (id)
      ? document.getElementById(id)
      : document.querySelector(`.${className}`);
    if (element) {
      setCollapse(`-${element.getBoundingClientRect().height}px`);
    }
  }, [id, className]);
  return { item, collapse };
}
