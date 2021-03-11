import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
import Link from '../Link';

const ToolItem = ({
  icon, link, title, className,
}) => (
  <li className={classnames('rf-shortcuts__item', className)} key={title}>
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
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ToolItem;
