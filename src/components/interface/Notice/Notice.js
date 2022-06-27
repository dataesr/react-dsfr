import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.5.0
*/
import '@gouvfr/dsfr/dist/component/link/link.css';

const Notice = ({ chlidren, className, ...remainingProps }) => {
  const _className = classNames('fr-notice fr-notice--info', className, {});

  return (
    <div className={_className} {...dataAttributes.getAll(remainingProps)}>
      <div className="fr-container">
        <div className="fr-notice__body">
          <p className="fr-notice__title">
            Titre du bandeau,
            <a href="#" rel="noopener" target="_blank">lien au fil du texte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

Notice.defaultProps = {
  className: '',
  children: '',
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
};
export default Notice;
