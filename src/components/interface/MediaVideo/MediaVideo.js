import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
}) => {
  const _className = classNames(
    'rf-content-media',
    `rf-content-media--${size}`,
    className,
  );
  const _classNameRatio = classNames(
    'rf-responsive-vid',
    { 'rf-responsive-vid--4x3': ratio },
  );

  return (
    <div className={_className} data-testid="video-test">
      <div className={_classNameRatio}>
        {children}
      </div>
      <div className="rf-content-media__caption">{legend}</div>
      {
        (buttonLabel) ? (
          <div className="rf-content-media__transcription">
            <button
              className="rf-btn"
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
