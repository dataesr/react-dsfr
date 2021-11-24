import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/link/link.css';

/**
 *
 * @visibleName Link
 */
const File = ({
  className,
  label,
  errorMessage,
  hint,
  onChange,
  multiple,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-upload-group',
    className, {
      [`ds-fr--${label}`]: label,
    },
  );

  return (
    <div {...dataAttributes.getAll(remainingProps)} className={_className}>
      <label className="fr-label" htmlFor="file-upload">
        {label}
        {hint && <span className="fr-hint-text">{hint}</span>}
      </label>
      <input
        onChange={onChange}
        className="fr-upload"
        type="file"
        aria-describedby={hint || undefined}
        multiple={multiple}
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
  multiple: false,
  onChange: () => {},
};

File.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  hint: PropTypes.string,
};

export default File;
