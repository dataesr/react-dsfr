import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';
import useCollapse from '../../../hooks/useCollapse';

const Accordion = ({
  title, titleAs, isExpanded, onClick, children, className, id,
}) => {
  const TitleTag = `${titleAs}`;
  const { item, collapse } = useCollapse(`rf-accordion-${id}`, isExpanded);
  const _className = classNames(className);
  return (
    <li className={_className} data-testid="accordion">
      <section className="rf-accordion">
        <TitleTag className="rf-accordion__title">
          <button
            data-testid="accordion-button"
            id={`button${id}`}
            onClick={onClick}
            type="button"
            className="rf-accordion__btn"
            aria-controls={`rf-accordion-${id}`}
            aria-expanded={isExpanded}
          >
            {title}
          </button>
        </TitleTag>
        <div
          data-testid="accordion-div"
          style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
          className={item.class}
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
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};

export default Accordion;
