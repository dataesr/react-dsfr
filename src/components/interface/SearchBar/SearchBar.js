import React, { useState, forwardRef } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/forms.min.css';
import '@gouvfr/dsfr/dist/css/inputs.min.css';
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
  } = props;
  const [text, setText] = useState(defaultValue);
  const inputId = uuidv4();
  const onKeyDown = (e) => (e.keyCode === 13) && onSearch(text);
  const _className = classNames('rf-search-bar', {
    'rf-search-bar--lg': (size === 'lg'),
  }, className);
  const _classNameButton = classNames('rf-btn', { 'rf-btn--lg': (size === 'lg') });
  return (
    <form role="search" className={_className} data-testid="search-bar">
      <label className="rf-label" htmlFor={inputId}>{label}</label>
      <input
        ref={ref}
        className="rf-input"
        placeholder={placeholder}
        type="search"
        id={inputId}
        data-testid="search-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        type="button"
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
};
SearchBar.propTypes = {
  label: PropTypes.string.isRequired,
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
