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
    children,
    className,
    id,
    keepOpen,
    initExpand,
    size,
    color,
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
    if (e.target.nodeName !== 'BUTTON') {
      e.target = e.target.parentNode;
    }

    const trullyExpanded = (buttonRef.current.ariaExpanded === 'true');
    onClick(trullyExpanded, e, parseFloat(e.target.id.slice(6)));
    setInitItem(false);
  };

  useEffect(() => {
    setIsExpanded(checkExpanded());
  }, [isExpanded, setIsExpanded, checkExpanded]);

  useEffect(() => {
    if (color && buttonRef.current) {
      buttonRef.current.style.color = `${color}`;
    }
  }, [color]);

  const _btnClassName = classNames('fr-accordion__btn', { [`fr-btn--${size}`]: size && size !== 'md' });

  return (
    <li
      className={classNames(className)}
      {...dataAttributes.getAll(remainingProps)}
      ref={ref}
    >
      <section className="fr-accordion">
        <TitleTag className="fr-accordion__title">
          <button
            ref={buttonRef}
            className={_btnClassName}
            id={`button${id}`}
            onClick={(e) => onItemClick(e)}
            type="button"
            aria-controls={`fr-accordion-${id}`}
            aria-expanded={isExpanded}
          >
            {title}
          </button>
        </TitleTag>
        <div
          style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
          className={item.class}
          id={`fr-accordion-${id}`}
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
  size: 'md',
  id: 0,
  color: '',
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
  expandedItems: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  id: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  keepOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

export default AccordionItem;
