import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../../utils/data-attributes';

/**
 *
 * @visibleName MediaVideo
 */
const MediaVideo = ({
  buttonLabel,
  className,
  children,
  legend,
  onTranscriptionClick,
  ratio,
  size,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-content-media',
    `fr-content-media--${size}`,
    className,
  );
  const _classNameRatio = classNames(
    'fr-responsive-vid',
    { 'fr-responsive-vid--4x3': ratio },
  );

  return (
    <div
      {...dataAttributes.getAll(remainingProps)}
      className={_className}
    >
      <div className={_classNameRatio}>
        {children}
      </div>
      <div className="fr-content-media__caption">{legend}</div>
      {
        (buttonLabel) ? (
          <div className="fr-content-media__transcription">
            <button
              className="fr-btn"
              title={buttonLabel}
              type="button"
              onClick={onTranscriptionClick}
            >
              {buttonLabel}
            </button>
          </div>
        ) : null
      }
    </div>
  );
};

MediaVideo.defaultProps = {
  buttonLabel: '',
  className: '',
  legend: '',
  onTranscriptionClick: () => {},
  ratio: '',
  size: 'md',
};

MediaVideo.propTypes = {
  buttonLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  legend: PropTypes.string,
  onTranscriptionClick: PropTypes.func,
  ratio: PropTypes.oneOf(['', '4x3']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default MediaVideo;
