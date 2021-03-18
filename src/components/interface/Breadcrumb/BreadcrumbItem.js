import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';

const BreadcrumbItem = ({
  className, children, href,
}) => {
  const _className = classNames('rf-breadcrumb__item', {
    'rf-breadcrumb__item--current': !href,
  }, className);
  return (
    <li className={_className} aria-current={!href && 'page'} data-testid="bc-item">
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
  href: null,
};

BreadcrumbItem.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
  href: PropTypes.string,
};

export default BreadcrumbItem;
