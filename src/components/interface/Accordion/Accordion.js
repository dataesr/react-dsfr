import classnames from 'classnames';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const Accordion = ({
  title, titleAs, isExpanded, onClick, children, className, id,
}) => {
  const TitleTag = `${titleAs}`;
  const expandedLine = {
    false: {
      class: 'rf-collapse',
      stateHeight: null,
      aria: 'false',
      expanded: false,
    },
    true: {
      class: 'rf-collapse rf-collapse--expanded',
      stateHeight: 'none',
      aria: 'true',
      expanded: true,
    },
  };

  const [collapse, setCollapse] = useState('0px');
  const line = expandedLine[isExpanded];

  useEffect(() => {
    const lineElement = document.getElementById(`rf-accordion-${id}`);
    setCollapse(`-${lineElement.getBoundingClientRect().height}px`);
  }, [id]);

  return (
    <li className={classnames(className)} data-testid="accordion">
      <section className="rf-accordion">
        <TitleTag className="rf-accordion__title">
          <button
            data-testid="accordion-button"
            id={`button${id}`}
            onClick={onClick}
            type="button"
            className="rf-accordion__btn"
            aria-controls={`rf-accordion-${id}`}
            aria-expanded={line.aria}
          >
            {title}
          </button>
        </TitleTag>
        <div
          data-testid="accordion-div"
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
  titleAs: 'p',
  className: '',
  isExpanded: false,
  onClick: () => {},
  id: '',
};

Accordion.propTypes = {
  /**
   * Html tag to render in accordion title.
   */
  titleAs: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * @ignore
   */
  isExpanded: PropTypes.bool,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};

export default Accordion;
