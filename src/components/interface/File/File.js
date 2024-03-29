import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/link/link.css';

/**
 *
 * @visibleName File
 */
const File = ({
  className,
  label,
  errorMessage,
  hint,
  onChange,
  multiple,
  accept,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-upload-group',
    className,
    {
      [`ds-fr--${label}`]: label,
    },
  );

  return (
    <div {...dataAttributes.getAll(remainingProps)} className={_className}>
      <label className="fr-label" htmlFor="file-upload">
        {label}
        {hint && <p className="fr-hint-text">{hint}</p>}
      </label>
      <input
        onChange={onChange}
        className="fr-upload"
        type="file"
        aria-describedby={hint || undefined}
        multiple={multiple}
        accept={accept}
      />
      {errorMessage && (
      <p id="file-upload-with-error-desc-error" className="fr-error-text">
        {errorMessage}
      </p>
      )}
    </div>
  );
};

File.defaultProps = {
  className: '',
  hint: '',
  errorMessage: '',
  accept: undefined,
  multiple: false,
  onChange: () => {},
};

File.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  hint: PropTypes.string,
  accept: PropTypes.string,
};

export default File;
