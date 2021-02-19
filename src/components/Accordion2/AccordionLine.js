import classnames from 'classnames';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../utils/variables';

const Accordion = ({
  title, isExpanded, onClick, children, className, id,
}) => {
  const expandedLine = {
    false: {
      class: 'rf-collapse', stateHeight: null, aria: 'false', expanded: false,
    },
    true: {
      class: 'rf-collapse rf-collapse--expanded', stateHeight: 'none', aria: 'true', expanded: true,
    },
  };

  const [collapse, setCollapse] = useState('0px');
  const line = expandedLine[isExpanded];

  useEffect(() => {
    const lineElement = document.getElementById(`rf-accordion-${id}`);
    setCollapse(`-${lineElement.getBoundingClientRect().height}px`);
  }, [setCollapse, id, line]);
  return (
    <li className={classnames(className)}>
      <section className="rf-accordion">
        <h3 className="rf-accordion__title">
          <button
            id={`button${id}`}
            onClick={onClick}
            type="button"
            className="rf-accordion__btn"
            aria-controls={`rf-accordion-${id}`}
            aria-expanded={line.aria}
          >
            {title}
          </button>
        </h3>
        <div
          style={{ maxHeight: line.stateHeight, '--collapse': collapse }}
          className={line.class}
          id={`rf-accordion-${id}`}
        >
          {children}
        </div>
      </section>
    </li>
  );
};

Accordion.defaultProps = {
  className: '',
};

Accordion.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};

export default Accordion;
