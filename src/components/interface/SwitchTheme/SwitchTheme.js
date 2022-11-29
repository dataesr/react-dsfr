import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Light } from '@gouvfr/dsfr/dist/artwork/light.svg';
import { ReactComponent as Dark } from '@gouvfr/dsfr/dist/artwork/dark.svg';
import { ReactComponent as System } from '@gouvfr/dsfr/dist/artwork/system.svg';
import { Modal, ModalTitle, ModalContent } from '../Modal';
import { RadioGroup, Radio } from '../Radio';

import '@gouvfr/dsfr/dist/scheme/scheme.css';

const DARK = 'dark';
const LIGHT = 'light';
const SYSTEM = 'system';

const SwitchTheme = ({
  isOpen,
  setIsOpen,
  title,
  legend,
  darkLabel,
  lightLabel,
  systemLabel,
  systemHint,
}) => {
  const [storedValue, setStoredValue] = useState('');

  const themes = [
    { label: lightLabel, value: LIGHT, svg: <Light /> },
    { label: darkLabel, value: DARK, svg: <Dark /> },
    {
      label: systemLabel, hint: systemHint, value: SYSTEM, svg: <System />,
    },
  ];

  useEffect(() => {
    setStoredValue(window.localStorage.getItem('prefers-color-scheme') || SYSTEM);
  }, []);

  useEffect(() => {
    if (!storedValue) {
      return;
    }

    let tempTheme = storedValue;
    if (storedValue === SYSTEM) {
      const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)');
      tempTheme = (preferedTheme && preferedTheme.matches) ? DARK : LIGHT;
    }

    window.localStorage.setItem('prefers-color-scheme', storedValue);
    document.documentElement.setAttribute('data-fr-theme', tempTheme);
  }, [storedValue]);

  return (
    <Modal
      id="fr-theme-modal"
      isOpen={isOpen}
      hide={() => setIsOpen(false)}
      aria-labelledby="fr-theme-modal-title"
    >
      <ModalTitle>{title}</ModalTitle>
      <ModalContent className="fr-form-group">
        <RadioGroup
          legend={legend}
          value={window.localStorage.getItem('prefers-color-scheme')}
          onChange={(value) => setStoredValue(value)}
        >
          {themes.map((item) => (
            <Radio
              key={item.value}
              label={item.label}
              value={item.value}
              isExtended
              svg={item.svg}
              hint={item.hint}
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
  systemLabel: 'Système',
  systemHint: 'Utilise les paramètres système.',
};

SwitchTheme.propTypes = {
  title: PropTypes.string,
  legend: PropTypes.string,
  darkLabel: PropTypes.string,
  lightLabel: PropTypes.string,
  systemLabel: PropTypes.string,
  systemHint: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default SwitchTheme;
