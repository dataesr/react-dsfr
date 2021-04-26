import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Link from '../Link/index';

const ToolItem = ({
  icon, link, className, children, asLink,
}) => (
  <li key={uuidv4()}>
    <Link
      as={asLink}
      className={className}
      isSimple
      icon={icon || ''}
      iconPosition="left"
      href={link}
    >
      {children}
    </Link>
  </li>
);
ToolItem.defaultProps = {
  className: '',
  icon: '',
  link: '',
  asLink: null,
};

ToolItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
  asLink: PropTypes.element,
};
export default ToolItem;
