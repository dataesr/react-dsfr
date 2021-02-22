import classnames from 'classnames';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const AccordionLine = (props) => {
  const {
    title, children, id, className,
  } = props;
  const expandedLine = {
    false: {
      class: 'rf-collapse', stateHeight: null, aria: 'false', expanded: false,
    },
    true: {
      class: 'rf-collapse rf-collapse--expanded', stateHeight: 'none', aria: 'true', expanded: true,
    },
  };

  const [collapse, setCollapse] = useState('0px');
  const [line, setLine] = useState(expandedLine.false);

  useEffect(() => {
    const lineElement = document.getElementById(`rf-accordion-${id}`);
    setCollapse(`-${lineElement.getBoundingClientRect().height}px`);
  }, [setCollapse, id, line]);

  return (
    <li className={classnames(className)}>
      <section className="rf-accordion">
        <h3 className="rf-accordion__title">
          <button
            onClick={() => setLine(expandedLine[!line.expanded])}
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

AccordionLine.defaultProps = {
  className: '',
};

AccordionLine.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default AccordionLine;
