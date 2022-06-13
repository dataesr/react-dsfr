import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Light } from '@gouvfr/dsfr/dist/artwork/light.svg';
import { ReactComponent as Dark } from '@gouvfr/dsfr/dist/artwork/dark.svg';
import { Modal, ModalTitle, ModalContent } from '../Modal';
import { RadioGroup, Radio } from '../Radio';
import useTheme from './useTheme';

/*
* DSFR v1.5.0
*/
import '@gouvfr/dsfr/dist/scheme/scheme.css';

const SwitchTheme = ({
  isOpen, setIsOpen, title, legend, darkLabel, lightLabel, systemLabel
}) => {
  const currentTheme = useTheme();

  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(dark)
  let system = dark ? "dark" : "light";
  const themes = [
    { label: lightLabel, value: 'light', svg: <Light /> },
    { label: darkLabel, value: 'dark', svg: <Dark /> },
    { label: systemLabel, value: system, svg: <System /> },
  ];

  

  useEffect(() => {
    let initialTheme = window.localStorage.getItem('prefers-color-scheme');
    if (!initialTheme) {
      const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)');
      initialTheme = (preferedTheme && preferedTheme.matches) ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-fr-theme', initialTheme);
  }, []);

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
          value={currentTheme}
          onChange={(value) => {
            window.localStorage.setItem('prefers-color-scheme', value);
            document.documentElement.setAttribute('data-fr-theme', value);
          }}
        >
          {themes.map((theme) => (
            <Radio
              key={theme.label}
              label={theme.label}
              value={theme.value}
              isExtended
              svg={theme.svg}
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
  systemLabel: 'Thème du système'
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
