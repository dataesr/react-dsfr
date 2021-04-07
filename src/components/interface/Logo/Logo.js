import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import Link from '../Link';

import '@gouvfr/dsfr/dist/css/logo.min.css';

/**
 *
 * @visibleName Bloc-marque
 */
const Logo = ({
  children, href, className, splitCharacter, hrefTitle,
}) => {
  // TODO Better system to split
  const regex = new RegExp(`.{${splitCharacter.toString()}}\\S*\\s+`, 'g');
  const arrayStr = children.replace(regex, '$&@').split(/\s+@/);
  const title = arrayStr.reduce((el, a, i) => el.concat(a, i < arrayStr.length - 1 ? (
    <br
      key={uuidv4()}
    />
  ) : ''), []);

  return (
    <Link
      title={hrefTitle || children}
      href={href}
      className={classNames('rf-logo', className)}
    >
      <span className="rf-logo__title">
        {title}
      </span>
    </Link>
  );
};

Logo.defaultProps = {
  href: '/',
  hrefTitle: '',
  splitCharacter: 12,
  className: '',
};
Logo.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.string.isRequired,
  hrefTitle: PropTypes.string,
  href: PropTypes.string,
  /**
  * Number of characters to split title
  */
  splitCharacter: PropTypes.number,
};

export default Logo;
