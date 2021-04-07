import React, { useState, Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/accordions.min.css';

/**
 * Condenser l'espace
 *
 * @visibleName Accordion
 */
const Accordion = ({ className, children, as }) => {
  const HtmlTag = `${as}`;
  const [isExpanded, setIsExpanded] = useState('');
  const expand = (e) => {
    if (e.target.id.slice(6) === isExpanded) {
      setIsExpanded('');
    } else {
      setIsExpanded(e.target.id.slice(6));
    }
  };

  const childs = Children.toArray(children).map((child, i) => {
    const id = i.toString();
    return cloneElement(child, {
      id,
      key: id,
      onClick: expand,
      isExpanded: isExpanded === id,
    });
  });

  return (
    <HtmlTag className={classNames(className)} data-testid="accordion-group">
      <ul className="rf-accordions-group">{childs}</ul>
    </HtmlTag>
  );
};

Accordion.defaultProps = {
  as: 'div',
  className: '',
};

Accordion.propTypes = {
  /**
   * Html tag to render accordion wrapper.
   */
  as: PropTypes.oneOf(['div', 'section']),
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
