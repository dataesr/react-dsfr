import React, { useState, forwardRef, useRef } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.0.0
*/
import '@gouvfr/dsfr/dist/css/core.min.css';
import '@gouvfr/dsfr/dist/css/content.min.css';
import '@gouvfr/dsfr/dist/css/forms.min.css';
import '@gouvfr/dsfr/dist/css/inputs.min.css';

/*
* react-ds-fr
*/
import '../../../style/custom.css';

import '@gouvfr/dsfr/dist/css/search.min.css';

/**
 *
 * @visibleName SearchBar
 */
const SearchBar = forwardRef((props, ref) => {
  const {
    size,
    label,
    buttonLabel,
    placeholder,
    onSearch,
    defaultValue,
    className,
    ...remainingProps
  } = props;
  const [text, setText] = useState(defaultValue);
  const inputId = useRef(uuidv4());
  const onKeyDown = (e) => (e.keyCode === 13) && onSearch(text);
  const _className = classNames('fr-search-bar', {
    'fr-search-bar--lg': (size === 'lg'),
  }, className);
  const _classNameButton = classNames('fr-btn', { 'fr-btn--lg': (size === 'lg') });
  return (
    <form
      role="search"
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      { label && <label className="fr-label" htmlFor={inputId.current}>{label}</label>}
      <input
        ref={ref}
        className="fr-input"
        placeholder={placeholder}
        type="search"
        id={inputId.current}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        type="submit"
        onClick={() => onSearch(text)}
        className={_classNameButton}
        title={buttonLabel}
      >
        {buttonLabel}
      </button>
    </form>
  );
});
SearchBar.defaultProps = {
  size: 'md',
  placeholder: '',
  defaultValue: '',
  className: '',
  label: '',
};
SearchBar.propTypes = {
  label: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  /**
   * A function that handles search action. Input value is passed as prop.
   */
  onSearch: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['md', 'lg']),
  defaultValue: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default SearchBar;
