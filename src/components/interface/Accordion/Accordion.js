import React, {
  useState, Children, cloneElement,
} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/accordion/accordion.css';

const Accordion = ({
  as,
  children,
  className,
  color,
  keepOpen,
  size,
  ...remainingProps
}) => {
  const HtmlTag = `${as}`;
  const [expandedItems, setExpandedItems] = useState([]);

  const expand = (isExpanded, e, newItem) => {
    let action = 'open';
    const actionObject = {
      open: (oldArray) => [...oldArray, newItem],
      close: expandedItems.filter((item) => item !== newItem),
      closeOthers: () => [...[], newItem],
    };
    if (expandedItems.indexOf(newItem) > -1 || isExpanded) {
      action = 'close';
    } else if (!keepOpen) {
      action = 'closeOthers';
    }
    setExpandedItems(actionObject[action]);
  };

  const childs = Children.toArray(children).map((child, i) => {
    // TODO fix custom id by AccordionItem
    const id = i + 1;
    return cloneElement(child, {
      id,
      key: id,
      size,
      color,
      onClick: (isExpanded, e, newItem) => {
        child.props.onClick(isExpanded, e, newItem);
        expand(isExpanded, e, newItem);
      },
      keepOpen,
      expandedItems,
    });
  });

  return (
    <HtmlTag
      className={classNames(className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      <ul className="fr-accordions-group">
        {childs}
      </ul>
    </HtmlTag>
  );
};

Accordion.defaultProps = {
  as: 'div',
  className: '',
  color: '',
  keepOpen: false,
  size: 'md',
};

Accordion.propTypes = {
  as: PropTypes.oneOf(['div', 'section']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  keepOpen: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Accordion;
