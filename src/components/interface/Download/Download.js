import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

/*
* DSFR v1.5.0
*/
import '@gouvfr/dsfr/dist/component/download/download.css';

/**
 *
 * @visibleName File
 */
const Download = ({
  className,
  label,
  fileName,
  metaData,
  lang,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-download',
    className,
  );

  return (
    <div {...dataAttributes.getAll(remainingProps)} className={_className}>
      <p>
        <Icon
          size="1x"
          name="ri-download-line"
          iconPosition="right"
        >
          <a
            target="_blank"
            href={fileName}
            download="test.jpg"
            className="fr-download__link"
            rel="noreferrer"
          >
            {label}
            <span className="fr-download__detail">
              {metaData}
            </span>
          </a>
        </Icon>
      </p>
    </div>
  );
};

Download.defaultProps = {
  className: '',
  lang: '',
};

Download.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  metaData: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default Download;
