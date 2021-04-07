import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../Link';

const Service = ({
  title, description, className, link,
}) => (
  <div className={classNames(className, 'rf-header__service')}>
    <div className="rf-service">
      <Link className="rf-header__service-title" href={link} title={title}>
        {title}
      </Link>
      <p className="rf-header__service-tagline">{description}</p>
    </div>
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
