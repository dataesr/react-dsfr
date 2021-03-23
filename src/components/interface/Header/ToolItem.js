import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link';

const ToolItem = ({
  icon, link, title, className,
}) => (
  <li className={classNames('rf-shortcuts__item', className)} key={title}>
    <Link
      isSimple
      icon={icon || ''}
      iconPosition="left"
      href={link}
    >
      {title}
    </Link>
  </li>
);
ToolItem.defaultProps = {
  className: '',
  icon: '',
};

ToolItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ToolItem;
