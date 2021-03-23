import classNames from 'classnames';
import PropTypes from 'prop-types';
import useCollapse from '../../../hooks/useCollapse';

const AccordionItem = ({
  title, titleAs, isExpanded, onClick, children, className, id,
}) => {
  const TitleTag = `${titleAs}`;
  const { item, collapse } = useCollapse(`rf-accordion-${id}`, isExpanded);
  return (
    <li className={classNames(className)} data-testid="accordion">
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

AccordionItem.defaultProps = {
  titleAs: 'p',
  className: '',
  isExpanded: false,
  onClick: () => {},
  id: '',
};

AccordionItem.propTypes = {
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default AccordionItem;
