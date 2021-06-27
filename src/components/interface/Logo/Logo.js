import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

import '../../../style.css';
import './logo.css';

/**
 *
 * @visibleName Logo
 */
const Logo = ({
  children, href, to, className, splitCharacter, hrefTitle, ...remainingProps
}) => {
  // TODO Better system to split
  const regex = new RegExp(`.{${splitCharacter.toString()}}\\S*\\s+`, 'g');
  const arrayStr = children.replace(regex, '$&@').split(/\s+@/);
  const title = arrayStr.reduce((el, a, i) => el.concat(a, i < arrayStr.length - 1 ? (
    <br key={uuidv4()} />) : ''), []);

  return (
    <Link
      className={classNames(className)}
      title={hrefTitle || children}
      href={href}
      to={to}
      {...dataAttributes(remainingProps)}
    >
      <p className="fr-logo">
        {title}
      </p>
    </Link>
  );
};

Logo.defaultProps = {
  __TYPE: 'Logo',
  href: undefined,
  to: undefined,
  hrefTitle: '',
  splitCharacter: 12,
  className: '',
};

Logo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('Logo'),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.string.isRequired,
  hrefTitle: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  /**
  * Number of characters to split title
  */
  splitCharacter: PropTypes.number,
};

export default Logo;
