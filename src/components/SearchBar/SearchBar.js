import { forwardRef } from 'react';
import PropTypes from 'prop-types';
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
    value,
    onChange,
  } = props;
  const classes = (size === 'lg')
    ? ['rf-search-bar rf-search-bar--lg', 'rf-btn rf-btn--lg']
    : ['rf-search-bar', 'rf-btn'];
  return (
    <div className={classes[0]} id="searchbar">
      <label className="rf-label" htmlFor="search-input">{label}</label>
      <input
        ref={ref}
        className="rf-input"
        placeholder={placeholder}
        type="search"
        id="search-input"
        value={value}
        onChange={onChange}
      />
      <button type="button" className={classes[1]} title={buttonLabel}>
        {buttonLabel}
      </button>
    </div>
  );
});
SearchBar.defaultProps = {
  size: 'md',
  placeholder: '',
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
  * A hint to complement the input label
  */
  value: PropTypes.string.isRequired,
  /**
  * A function that handles value change
  */
  onChange: PropTypes.func.isRequired,
  /**
  * Controls the valid and error state
  */
  size: PropTypes.oneOf(['md', 'lg']),
};

export default SearchBar;
