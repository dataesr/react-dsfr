import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalTitle, ModalContent } from '../Modal';
import { RadioGroup, Radio } from '../Radio';

const SwitchTheme = ({
  isOpen, setIsOpen, title, legend, darkLabel, lightLabel,
}) => {
  const getInitialTheme = () => {
    let initialTheme = window.localStorage.getItem('prefers-color-scheme');
    if (!initialTheme) {
      initialTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
    }

    return initialTheme;
  };
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  const themes = [
    { label: lightLabel, value: 'light' },
    { label: darkLabel, value: 'dark' },
  ];

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
      <ModalTitle>{title}</ModalTitle>
      <ModalContent className="fr-switch-theme">
        <RadioGroup
          className="fr-text--regular"
          legend={legend}
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
  title: 'Paramètres d’affichage',
  legend: 'Choisissez un thème pour personnaliser l’apparence du site.',
  darkLabel: 'Thème sombre',
  lightLabel: 'Thème clair',
};

SwitchTheme.propTypes = {
  title: PropTypes.string,
  legend: PropTypes.string,
  darkLabel: PropTypes.string,
  lightLabel: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default SwitchTheme;
