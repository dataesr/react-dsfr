import PropTypes from 'prop-types';
import { CHILDREN_TYPE } from '../../utils/variables';

const AccordionLine = (props) => {
  const {
    onClick, title, children, id,
  } = props;
  return (
    <li>
      <section className="rf-accordion">
        <h3 className="rf-accordion__title">
          <button
            onClick={onClick}
            type="button"
            className="rf-accordion__btn"
            aria-controls={`rf-accordion-${id}`}
            aria-expanded="false"
            data-button={id}
          >
            {title}
          </button>
        </h3>
        <div
          data-line={id}
          className="rf-collapse"
          id={`rf-accordion-${id}`}
        >
          {children}
        </div>
      </section>
    </li>
  );
};

AccordionLine.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: CHILDREN_TYPE.isRequired,
};

export default AccordionLine;
