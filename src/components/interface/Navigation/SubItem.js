import { useState } from 'react';
import PropTypes from 'prop-types';

const SubItem = ({
  title, link, subItems, index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onClick = () => {
    setIsExpanded(!isExpanded);
  };
  const expandedLine = {
    false: {
      class: 'rf-menu rf-collapse',
      stateHeight: null,
      aria: 'false',
      expanded: false,
    },
    true: {
      class: 'rf-menu rf-collapse rf-collapse--expanded',
      stateHeight: 'none',
      aria: 'true',
      expanded: true,
    },
  };
  const item = expandedLine[isExpanded];

  return (
    subItems && subItems.length > 0 ? (
      <li className="rf-nav__item">
        <button
          aria-controls={`rf-nav-${title}`}
          onClick={onClick}
          type="button"
          aria-expanded={item.aria}
          className="rf-btn"
        >
          {title}
        </button>
        <div
          id={`rf-nav-subitem-${index}`}
          className={item.class}
          style={{ maxHeight: item.stateHeight, '--collapse': '0px' }}
        >
          <ul className="rf-menu__list">
            {subItems.map((subItem) => (
              <li className="rf-menu__item" key={subItem.title}>
                <a className="rf-link" href="/test" target="_self">
                  {subItem.title}
                </a>
              </li>
            ))}

          </ul>
        </div>
      </li>
    ) : (
      <li className="rf-nav__item">
        <a className="rf-link" href={link} target="_self">{title}</a>
      </li>

    )
  );
};

SubItem.defaultProps = {
  link: '',
  subItems: [],
};
SubItem.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  subItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
  })),
};

export default SubItem;
