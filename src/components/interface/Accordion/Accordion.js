import React, {
  useState, Children, cloneElement,
} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/accordion/accordion.css';

/**
 *
 * @visibleName Accordion
 */
const Accordion = ({
  className, children, as, keepOpen, size, color, ...remainingProps
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
      <ul className="fr-accordions-group">{childs}</ul>
    </HtmlTag>
  );
};

Accordion.defaultProps = {
  as: 'div',
  className: '',
  keepOpen: false,
  size: 'md',
  color: '',
};

Accordion.propTypes = {
  /**
   * Html tag to render accordion wrapper.
   */
  as: PropTypes.oneOf(['div', 'section']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  keepOpen: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Accordion;
