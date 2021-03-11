import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const BreadcrumbItem = ({
  className, children, current, href,
}) => {
  const classes = classnames(
    'rf-breadcrumb__item',
    { 'rf-breadcrumb__item--current': current },
    className,
  );
  return (
    <li className={classes} aria-current={current && 'page'} data-testid="bc-item">
      {
                (href)
                  ? <a href={href}>{children}</a>
                  : children
            }
    </li>
  );
};

BreadcrumbItem.defaultProps = {
  className: '',
  current: false,
  href: null,
};

BreadcrumbItem.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
  current: PropTypes.bool,
  href: PropTypes.string,
};

export default BreadcrumbItem;
