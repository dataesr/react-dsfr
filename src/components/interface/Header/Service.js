import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../Link';

const Service = ({
  title, description, className, link,
}) => (
  <div className={classNames(className, 'fr-header__service')}>
    <Link className="fr-header__service-title" href={link} title={title}>
      {title}
    </Link>
    <p className="fr-header__service-tagline">{description}</p>
  </div>
);

Service.defaultProps = {
  className: '',
  description: 'Ouvrir le menu',
  link: '/',
};

Service.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default Service;
