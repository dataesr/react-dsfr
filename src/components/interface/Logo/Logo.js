import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

import '@gouvfr/dsfr/dist/component/logo/logo.css';

/**
 *
 * @visibleName Logo
 */
const Logo = ({
  children, href, className, splitCharacter, hrefTitle, asLink, ...remainingProps
}) => {
  // TODO Better system to split
  const regex = new RegExp(`.{${splitCharacter.toString()}}\\S*\\s+`, 'g');
  const arrayStr = children.replace(regex, '$&@').split(/\s+@/);
  const title = arrayStr.reduce((el, a, i) => el.concat(
    a,
    i < arrayStr.length - 1
      // eslint-disable-next-line react/no-array-index-key
      ? <br key={i} />
      : '',
  ), []);

  return (
    <Link
      className={classNames(className)}
      as={asLink}
      title={hrefTitle || children}
      href={href}
      {...dataAttributes.getAll(remainingProps)}
    >
      <p className="fr-logo">
        {title}
      </p>
    </Link>
  );
};

Logo.defaultProps = {
  __TYPE: 'Logo',
  href: '/',
  hrefTitle: '',
  splitCharacter: 12,
  className: '',
  asLink: null,
};

Logo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('Logo'),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  hrefTitle: PropTypes.string,
  href: PropTypes.string,
  /**
  * Number of characters to split title
  */
  splitCharacter: PropTypes.number,
  asLink: PropTypes.element,
};

export default Logo;
