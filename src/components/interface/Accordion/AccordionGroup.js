import { useState, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';

/**
 * Condenser l'espace
 *
 * @visibleName Accordion
 */
const AccordionGroup = ({ className, children, as }) => {
  const HtmlTag = `${as}`;
  const _className = classNames(className);
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
      isExpanded: (isExpanded === id),
    });
  });

  return (
    <HtmlTag className={_className} data-testid="accordion-group">
      <ul className="rf-accordions-group">
        {childs}
      </ul>
    </HtmlTag>
  );
};

AccordionGroup.defaultProps = {
  as: 'div',
  children: '',
  className: '',
};

AccordionGroup.propTypes = {
  /**
   * Html tag to render accordion wrapper.
   */
  as: PropTypes.oneOf(['div', 'section']),
  children: CHILDREN_TYPE,
  className: CLASS_NAME_TYPE,
};

export default AccordionGroup;
