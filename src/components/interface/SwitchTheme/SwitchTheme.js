import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalTitle, ModalContent } from '../Modal';
import { RadioGroup, Radio } from '../Radio';

const themes = [
  { label: 'Thème clair', value: 'light' },
  { label: 'Thème sombre', value: 'dark' },
];

const SwitchTheme = ({ isOpen, setIsOpen }) => {
  const getInitialTheme = () => {
    let initialTheme = window.localStorage.getItem('prefers-color-scheme');
    if (!initialTheme) {
      initialTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    }

    return initialTheme;
  };
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-fr-theme', currentTheme);
  }, [currentTheme]);

  return (
    <Modal
      id="fr-theme-modal"
      isOpen={isOpen}
      hide={() => setIsOpen(false)}
      aria-labelledby="fr-theme-modal-title"
    >
      <ModalTitle>Paramètres d’affichage</ModalTitle>
      <ModalContent className="fr-switch-theme">
        <RadioGroup
          className="fr-text--regular"
          legend="Choisissez un thème pour personnaliser l’apparence du site."
          value={currentTheme}
          onChange={(value) => {
            window.localStorage.setItem('prefers-color-scheme', value);
            setCurrentTheme(value);
          }}
        >
          {themes.map((theme) => (
            <Radio
              key={theme.value}
              label={theme.label}
              value={theme.value}
              isExtended
            />
          ))}
        </RadioGroup>
      </ModalContent>
    </Modal>
  );
};

SwitchTheme.defaultProps = {
};

SwitchTheme.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default SwitchTheme;
