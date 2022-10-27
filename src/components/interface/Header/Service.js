import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const Service = ({
  title, description, className, link, linkTitle, asLink, ...remainingProps
}) => (
  <div
    className={classNames(className, 'fr-header__service')}
    {...dataAttributes.getAll(remainingProps)}
  >
    <Link
      as={asLink}
      className="fr-header__service-title"
      href={link}
      title={linkTitle}
    >
      {title}
    </Link>
    <p className="fr-header__service-tagline">{description}</p>
  </div>
);

Service.defaultProps = {
  __TYPE: 'Service',
  className: '',
  description: 'Ouvrir le menu',
  link: '/',
  linkTitle: 'Accueil',
  asLink: null,
};

Service.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('Service'),
  description: PropTypes.node,
  title: PropTypes.node.isRequired,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
  className: PropTypes.string,
  asLink: PropTypes.element,
};

export default Service;
