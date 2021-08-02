import React, {
  forwardRef,
  useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useCollapse from '../../../hooks/useCollapse';
import dataAttributes from '../../../utils/data-attributes';

const AccordionItem = forwardRef((props, ref) => {
  const {
    title,
    titleAs,
    expandedItems,
    onClick,
    onClickInternal,
    children,
    className,
    id,
    keepOpen,
    initExpand,
    ...remainingProps
  } = props;
  const TitleTag = `${titleAs}`;
  const buttonRef = useRef();
  const [initItem, setInitItem] = useState(initExpand);
  const checkExpanded = useCallback(() => {
    const idsExpanded = !!expandedItems.find((it) => it === id);
    return initItem ? true : idsExpanded;
  }, [initItem, expandedItems, id]);
  const [isExpanded, setIsExpanded] = useState(checkExpanded);
  const { item, collapse } = useCollapse(`fr-accordion-${id}`, isExpanded);
  const onItemClick = (e) => {
    const trullyExpanded = (buttonRef.current.ariaExpanded === 'true');
    onClick(trullyExpanded, e);
    onClickInternal(e, parseFloat(e.target.id.slice(6)), trullyExpanded);
    setInitItem(false);
  };
  useEffect(() => {
    setIsExpanded(checkExpanded());
  }, [isExpanded, setIsExpanded, checkExpanded]);

  return (
    <li
      className={classNames(className)}
      {...dataAttributes(remainingProps)}
      ref={ref}
    >
      <section className="fr-accordion">
        <TitleTag className="fr-accordion__title">
          <button
            ref={buttonRef}
            className="fr-accordion__btn"
            id={`button${id}`}
            onClick={(e) => onItemClick(e)}
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
});

AccordionItem.defaultProps = {
  titleAs: 'h3',
  className: '',
  initExpand: false,
  expandedItems: [],
  keepOpen: false,
  onClick: () => {},
  onClickInternal: () => {},
  id: 0,
};

AccordionItem.propTypes = {
  /**
     * Html tag to render in accordion title.
     */
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
     * @ignore
     */
  initExpand: PropTypes.bool,
  onClick: PropTypes.func,
  /**
     * @ignore
     */
  onClickInternal: PropTypes.func,
  /**
     * @ignore
     */
  expandedItems: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  keepOpen: PropTypes.bool,
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
