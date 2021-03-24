import classNames from 'classnames';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({
  className, children, href,
}) => {
  const _className = classNames('rf-breadcrumb__item', {
    'rf-breadcrumb__item--current': !href,
  }, className);
  return (
    <li className={_className} aria-current={!href && 'page'} data-testid="bc-item">
      {(href) ? <a href={href}>{children}</a> : children}
    </li>
  );
};

BreadcrumbItem.defaultProps = {
  className: '',
  href: '',
};

BreadcrumbItem.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
};

export default BreadcrumbItem;
