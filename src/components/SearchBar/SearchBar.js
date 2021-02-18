import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import classNames from 'classnames';
import '@gouvfr/all/dist/css/all.min.css';

/**
 * La barre de recherche est un système de navigation qui permet à l'utilisateur
 * d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression.
 *
 * @visibleName Champ de recherche -- SearchBar
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
  const inputId = v4();
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
      <button type="button" onClick={() => onSearch(text)} className={buttonClass} title={buttonLabel}>
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
  /**
  * Searchbar label
  */
  label: PropTypes.string.isRequired,
  /**
  * Searchbar button label
  */
  buttonLabel: PropTypes.string.isRequired,
  /**
  * SearchBar placeholder
  */
  placeholder: PropTypes.string,
  /**
  * A function that handles search action. Input value is passed as prop.
  */
  onSearch: PropTypes.func.isRequired,
  /**
  * Controls the valid and error state
  */
  size: PropTypes.oneOf(['md', 'lg']),
  /**
  * An initial value for the search input
  */
  defaultValue: PropTypes.string,
};

export default SearchBar;
