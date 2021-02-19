import React, { useState } from 'react';
import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../utils/variables';

/**
 * Condenser l'espace
 *
 * @visibleName Accordion
 */
const AccordionGroup = ({ className, children }) => {
  const [isExpanded, setIsExpanded] = useState('');
  const expand = (e) => {
    if (e.target.id.slice(6) === isExpanded) {
      setIsExpanded('');
    } else {
      setIsExpanded(e.target.id.slice(6));
    }
  };

  const childs = React.Children.toArray(children).map((child, i) => {
    const id = i.toString();
    return React.cloneElement(child, {
      id,
      key: id,
      onClick: expand,
      isExpanded: (isExpanded === id),
    });
  });

  return (
    <section className={classNames(className)} data-testid="accordion-group">
      <ul className="rf-accordions-group">
        {childs}
      </ul>
    </section>
  );
};

AccordionGroup.defaultProps = {
  children: '',
  className: '',
};

AccordionGroup.propTypes = {
  children: CHILDREN_TYPE,
  className: CLASS_NAME_TYPE,
};

export default AccordionGroup;
