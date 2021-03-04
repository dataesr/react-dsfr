import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

export const Breadcrumb = ({ label, className, children }) => {
  const button = children.filter((child) => child.type.name === 'BreadcrumbButton');
  const content = children.filter((child) => child.type.name === 'BreadcrumbItem');
  const classes = classnames('rf-breadcrumb', className);
  return (
    <nav className={classes} aria-label={label} data-testid="bc-nav">
      {button && button}
      <ol className="rf-breadcrumb__list" data-testid="bc-list">
        {content}
      </ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  className: '',
};

Breadcrumb.propTypes = {
  label: PropTypes.string.isRequired,
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};

export const BreadcrumbButton = ({ className, children }) => {
  const classes = classnames('rf-breadcrumb__button', className);
  return (
    <button type="button" className={classes} hidden data-testid="bc-button">
      {children}
    </button>
  );
};

BreadcrumbButton.defaultProps = {
  className: '',
};

BreadcrumbButton.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};

export const BreadcrumbItem = ({
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
