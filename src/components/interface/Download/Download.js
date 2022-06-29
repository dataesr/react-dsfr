import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Icon from '../../foundation/icon/index';

import '@gouvfr/dsfr/dist/component/download/download.css';
import formatBytes from '../../../utils/convertBytes';

/**
 *
 * @visibleName File
 */
const Download = ({
  className,
  label,
  file,
  metaData,
  openFile,
  asCard,
  description,
  lang,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-download',
    className,
    { 'fr-enlarge-link fr-download--card': asCard },
  );

  const [size, setSize] = useState('');
  const [type, setType] = useState('');

  const getFileData = async (url) => fetch(url).then((res) => res.blob());

  useEffect(() => {
    if (!size && !type) {
      getFileData(file).then((blob) => {
        setSize(formatBytes(blob.size));
        const blobType = blob.type.split('/');
        setType(blobType[blobType.length - 1]);
      });
    }
  }, [file, size, type]);

  const link = (
    <a
      hrefLang={lang}
      download={openFile ? undefined : file}
      target={openFile ? '_blank' : undefined}
      href={file}
      className="fr-download__link"
      rel="noreferrer"
    >
      {`${asCard ? 'Télécharger' : ''} ${label}`}
      <span className="fr-download__detail">
        {metaData || `${size} - ${type}`}
      </span>
    </a>
  );

  return (
    <div {...dataAttributes.getAll(remainingProps)} className={_className}>
      <p>
        {link}
      </p>
      {asCard && description && (
      <>
        <p className="fr-download__desc">
          {description}
        </p>
        <Icon name="ri-download-line" size="xl" className="ds-fr-card-icon" />
      </>
      )}
    </div>
  );
};

Download.defaultProps = {
  className: '',
  description: '',
  asCard: false,
  lang: 'fr',
  metaData: '',
  openFile: false,
};

Download.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string.isRequired,
  openFile: PropTypes.bool,
  asCard: PropTypes.bool,
  file: PropTypes.string.isRequired,
  metaData: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
};

export default Download;
