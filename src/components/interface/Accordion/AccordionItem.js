import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useCollapse from '../../../hooks/useCollapse';
import dataAttributes from '../../../utils/data-attributes';

const AccordionItem = ({
  title, titleAs, isExpanded, onClick, children, className, id, ...remainingProps
}) => {
  const TitleTag = `${titleAs}`;
  const { item, collapse } = useCollapse(`fr-accordion-${id}`, isExpanded);
  return (
    <li
      className={classNames(className)}
      {...dataAttributes(remainingProps)}
    >
      <section className="fr-accordion">
        <TitleTag className="fr-accordion__title">
          <button
            className="fr-accordion__btn"
            id={`button${id}`}
            onClick={onClick}
            type="button"
            aria-controls={`fr-accordion-${id}`}
            aria-expanded={isExpanded}
            data-testid="accordion-button"
          >
            {title}
          </button>
        </TitleTag>
        <div
          style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
          className={item.class}
          id={`fr-accordion-${id}`}
          data-testid="accordion-div"
        >
          {children}
        </div>
      </section>
    </li>
  );
};

AccordionItem.defaultProps = {
  titleAs: 'h3',
  className: '',
  isExpanded: false,
  onClick: () => {},
  id: '',
};

AccordionItem.propTypes = {
  /**
   * Html tag to render in accordion title.
   */
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
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
