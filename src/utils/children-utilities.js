// Thanks to https://www.npmjs.com/package/react-children-utilities
import { Children, cloneElement, isValidElement } from 'react';

const hasChildren = (element) => isValidElement(element) && Boolean(element.props.children);

const hasComplexChildren = (element) => isValidElement(element)
    && hasChildren(element)
    && Children.toArray(element.props.children)
      .reduce((response, child) => response || isValidElement(child), false);

const deepForEach = (children, deepForEachFn) => {
  Children.forEach(children, (child, index) => {
    if (isValidElement(child) && hasComplexChildren(child)) {
      // Each inside the child that has children
      deepForEach(child.props.children, deepForEachFn);
    }
    deepForEachFn(child, index);
  });
};

const deepFilter = (children, deepFilterFn) => Children.toArray(children)
  .filter(deepFilterFn)
  .map((child) => {
    if (isValidElement(child) && hasComplexChildren(child)) {
      // Clone the child that has children and filter them too
      return cloneElement(child, {
        ...child.props,
        children: deepFilter(child.props.children, deepFilterFn),
      });
    }
    return child;
  });

export {
  deepFilter, hasChildren, hasComplexChildren, deepForEach,
};
