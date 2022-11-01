import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/component/translate/translate.css';

import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const ToolTranslate = ({
  children, currentLang, className, descCurrentLang, title, ...remainingProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const _className = classNames(className, 'fr-translate fr-nav');
  const translateMenuRef = useRef();
  const close = useCallback((e) => {
    if ((translateMenuRef && translateMenuRef.current !== e.target) && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);
  useOnClickOutside(translateMenuRef, close);

  return (
    <nav
      role="navigation"
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className="fr-nav__item" ref={translateMenuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="fr-btn fr-btn--tertiary fr-translate__btn"
          aria-controls="translate-516"
          aria-expanded={!!isOpen}
          title={title}
        >
          {currentLang}
        </button>
        <div className={`fr-translate__menu fr-menu ${isOpen ? 'fr-collapse--expanded' : 'fr-collapse'}`} id="translate-516" onClick={() => setIsOpen(false)} onKeyDown={(e) => (e.key === 'Enter' ? setIsOpen(false) : null)} role="menuitem" tabIndex={-1}>
          <ul className="fr-menu__list">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};
ToolTranslate.defaultProps = {
  __TYPE: 'ToolTranslate',
  className: '',
  title: 'Sélectionner une langue',
};

ToolTranslate.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ToolTranslate'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  currentLang: PropTypes.string.isRequired,
  descCurrentLang: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default ToolTranslate;
