import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

/**
 * Système de navigation
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
  } = props;
  const [text, setText] = useState(defaultValue);
  const inputId = uuidv4();
  const onKeyDown = (e) => (e.keyCode === 13) && onSearch(text);
  const formClass = classNames('rf-search-bar', { 'rf-search-bar--lg': (size === 'lg') });
  const buttonClass = classNames('rf-btn', { 'rf-btn--lg': (size === 'lg') });
  return (
    <form role="search" className={formClass} data-testid="search-bar">
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
        className={buttonClass}
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
};

export default SearchBar;
