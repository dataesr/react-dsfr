import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SubItem from './SubItem';

const Navigation = ({ items }) => (
  <ul className="rf-nav__list">
    {items.map((item) => (
      <SubItem
        key={uuidv4()}
        index={uuidv4()}
        title={item.title}
        link={item.link}
        subItems={item.subItems}
      />
    ))}
  </ul>
);
Navigation.defaultProps = {
  items: [],
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    subItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  })),
};

export default Navigation;
