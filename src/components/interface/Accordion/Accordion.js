import React, { useState, Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.0.0
*/
import '@gouvfr/dsfr/dist/css/core.min.css';
import '@gouvfr/dsfr/dist/css/content.min.css';
import '@gouvfr/dsfr/dist/css/forms.min.css';
import '@gouvfr/dsfr/dist/css/inputs.min.css';

/*
* react-ds-fr
*/
import '../../../style/colors.css';
import '../../../style/custom.css';

import '@gouvfr/dsfr/dist/css/accordions.min.css';

/**
 *
 * @visibleName Accordion
 */
const Accordion = ({
  className, children, as, ...remainingProps
}) => {
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
    <HtmlTag
      className={classNames(className)}
      {...dataAttributes(remainingProps)}
    >
      <ul className="fr-accordion-group">{childs}</ul>
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
