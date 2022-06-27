import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/notice/notice.css';

const Notice = ({
  title, className, asLink, ...remainingProps
}) => {
  const _className = classNames('fr-notice fr-notice--info', className, {});

  return (
    <div className={_className} {...dataAttributes.getAll(remainingProps)}>
      <div className="fr-container">
        <div className="fr-notice__body">
          <p className="fr-notice__title">
            {title}
            {asLink}
          </p>
        </div>
      </div>
    </div>
  );
};

Notice.defaultProps = {
  className: '',
  title: '',
  children: '',
  asLink: null,
};

Notice.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string,
  asLink: PropTypes.element,
};

export default Notice;
