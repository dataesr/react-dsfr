import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Link from '../Link';

const ToolItem = ({
  icon, link, className, children,
}) => (
  <li key={uuidv4()}>
    <Link
      className={classNames(className)}
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
};

ToolItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default ToolItem;
