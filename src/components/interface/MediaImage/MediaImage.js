import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/content.min.css';

/**
 *
 * @visibleName MediaImage
 */
const MediaImage = ({
  alt,
  className,
  legend,
  size,
  src,
}) => {
  const _className = classNames(
    'rf-content-media',
    `rf-content-media--${size}`,
    className,
  );

  return (
    <figure className={_className} data-testid="image-test">
      <div className="rf-content-media__img">
        <img src={src} alt={alt} />
      </div>
      <figcaption className="rf-content-media__caption">{legend}</figcaption>
    </figure>
  );
};

MediaImage.defaultProps = {
  alt: '',
  className: '',
  legend: '',
  size: 'md',
};

MediaImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  legend: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  src: PropTypes.string.isRequired,
};

export default MediaImage;
