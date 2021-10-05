import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import {
  Modal, ModalTitle, ModalContent, ModalClose,
} from '../Modal';

const ConsentModal = ({
  className, isOpen, setIsOpen, ...remainingProps
}) => {
  const _className = classNames('fr-modal', className);
  return (
    <Modal
      isOpen={isOpen}
      hide={() => setIsOpen(false)}
      className={_className}
      id="fr-consent-modal"
      aria-labelledby="fr-consent-modal-title"
      {...dataAttributes.getAll(remainingProps)}
    >
      <ModalClose hide={() => setIsOpen(false)} title="Close the modal window">Close</ModalClose>
      <ModalTitle> Panneau de gestion des cookies</ModalTitle>
      <ModalContent>
        <div className="fr-consent-manager">
          <div className="fr-consent-service fr-consent-manager__header">
            <fieldset className="fr-fieldset fr-fieldset--inline">
              <legend className="fr-consent-service__title">
                Préférences pour tous les services.
                <a href="">Données personnelles et cookies</a>
              </legend>
              <div className="fr-consent-service__radios">
                <div className="fr-radio-group">
                  <input type="radio" id="consent-all-accept" name="consent-all" />
                  <label className="fr-label" htmlFor="consent-all-accept">Tout accepter</label>
                </div>
                <div className="fr-radio-group">
                  <input type="radio" id="consent-all-refuse" name="consent-all" />
                  <label className="fr-label" htmlFor="consent-all-refuse">Tout refuser</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="fr-consent-service">
            <fieldset className="fr-fieldset fr-fieldset--inline">
              <legend aria-describedby="" className="fr-consent-service__title">Cookies obligatoires</legend>
              <div className="fr-consent-service__radios">
                <div className="fr-radio-group">
                  <input type="radio" id="consent-finality-0-accept" name="consent-finality-0" />
                  <label className="fr-label" htmlFor="consent-finality-0-accept">
                    Accepter
                  </label>
                </div>
                <div className="fr-radio-group">
                  <input disabled="" type="radio" id="consent-finality-0-refuse" name="consent-finality-0" />
                  <label className="fr-label" htmlFor="consent-finality-0-refuse">
                    Refuser
                  </label>
                </div>
              </div>
              <p id="finality-0-desc" className="fr-consent-service__desc">Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés.</p>
            </fieldset>
          </div>
          <div className="fr-consent-service">
            <fieldset className="fr-fieldset fr-fieldset--inline">
              <legend aria-describedby="" className="fr-consent-service__title">Nom de la finalité</legend>
              <div className="fr-consent-service__radios">
                <div className="fr-radio-group">
                  <input type="radio" id="consent-finality-1-accept" name="consent-finality-1-" />
                  <label className="fr-label" htmlFor="consent-finality-1-accept">
                    Accepter
                  </label>
                </div>
                <div className="fr-radio-group">
                  <input type="radio" id="consent-finality-1-refuse" name="consent-finality-1-" />
                  <label className="fr-label" htmlFor="consent-finality-1-refuse">
                    Refuser
                  </label>
                </div>
              </div>
              <p id="finality-1-desc" className="fr-consent-service__desc">Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.</p>
              <div className="fr-consent-service__collapse">
                <button className="fr-consent-service__collapse-btn" aria-expanded="false" aria-controls="finality-1-collapse"> Voir plus de détails</button>
              </div>
              <div className="fr-consent-services fr-collapse" id="finality-1-collapse">
                <div className="fr-consent-service">
                  <fieldset className="fr-fieldset fr-fieldset--inline">
                    <legend className="fr-consent-service__title">Sous finalité 1</legend>
                    <div className="fr-consent-service__radios fr-fieldset--inline">
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-1-service-1-accept" name="consent-finality-1-service-1" />
                        <label className="fr-label" htmlFor="consent-finality-1-service-1-accept">
                          Accepter
                        </label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-1-service-1-refuse" name="consent-finality-1-service-1" />
                        <label className="fr-label" htmlFor="consent-finality-1-service-1-refuse">
                          Refuser
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="fr-consent-service">
                  <fieldset className="fr-fieldset fr-fieldset--inline">
                    <legend className="fr-consent-service__title">Sous finalité 2</legend>
                    <div className="fr-consent-service__radios fr-fieldset--inline">
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-1-service-2-accept" name="consent-finality-1-service-2" />
                        <label className="fr-label" htmlFor="consent-finality-1-service-2-accept">
                          Accepter
                        </label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-1-service-2-refuse" name="consent-finality-1-service-2" />
                        <label className="fr-label" htmlFor="consent-finality-1-service-2-refuse">
                          Refuser
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="fr-consent-service">
                  <fieldset className="fr-fieldset fr-fieldset--inline">
                    <legend className="fr-consent-service__title">Sous finalité 3</legend>
                    <div className="fr-consent-service__radios fr-fieldset--inline">
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-1-service-3-accept" name="consent-finality-1-service-3" />
                        <label className="fr-label" htmlFor="consent-finality-1-service-3-accept">
                          Accepter
                        </label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-1-service-3-refuse" name="consent-finality-1-service-3" />
                        <label className="fr-label" htmlFor="consent-finality-1-service-3-refuse">
                          Refuser
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="fr-consent-service">
            <fieldset className="fr-fieldset fr-fieldset--inline">
              <legend aria-describedby="" className="fr-consent-service__title">Nom de la finalité</legend>
              <div className="fr-consent-service__radios">
                <div className="fr-radio-group">
                  <input type="radio" id="consent-finality-2-accept" name="consent-finality-2-" />
                  <label className="fr-label" htmlFor="consent-finality-2-accept">
                    Accepter
                  </label>
                </div>
                <div className="fr-radio-group">
                  <input type="radio" id="consent-finality-2-refuse" name="consent-finality-2-" />
                  <label className="fr-label" htmlFor="consent-finality-2-refuse">
                    Refuser
                  </label>
                </div>
              </div>
              <p id="finality-2-desc" className="fr-consent-service__desc">Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.</p>
              <div className="fr-consent-service__collapse">
                <button className="fr-consent-service__collapse-btn" aria-expanded="false" aria-controls="finality-2-collapse"> Voir plus de détails</button>
              </div>
              <div className="fr-consent-services fr-collapse" id="finality-2-collapse">
                <div className="fr-consent-service">
                  <fieldset className="fr-fieldset fr-fieldset--inline">
                    <legend className="fr-consent-service__title">Sous finalité 1</legend>
                    <div className="fr-consent-service__radios fr-fieldset--inline">
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-2-service-1-accept" name="consent-finality-2-service-1" />
                        <label className="fr-label" htmlFor="consent-finality-2-service-1-accept">Accepter</label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-2-service-1-refuse" name="consent-finality-2-service-1" />
                        <label className="fr-label" htmlFor="consent-finality-2-service-1-refuse">
                          Refuser
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="fr-consent-service">
                  <fieldset className="fr-fieldset fr-fieldset--inline">
                    <legend className="fr-consent-service__title" aria-decribedby="">Sous finalité 2</legend>
                    <div className="fr-consent-service__radios fr-fieldset--inline">
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-2-service-2-accept" name="consent-finality-2-service-2" />
                        <label className="fr-label" htmlFor="consent-finality-2-service-2-accept">
                          Accepter
                        </label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-2-service-2-refuse" name="consent-finality-2-service-2" />
                        <label className="fr-label" htmlFor="consent-finality-2-service-2-refuse">
                          Refuser
                        </label>
                      </div>
                    </div>
                    <p id="-desc" className="fr-consent-service__desc">Ce service utilise 3 cookies.</p>
                  </fieldset>
                </div>
                <div className="fr-consent-service">
                  <fieldset className="fr-fieldset fr-fieldset--inline">
                    <legend className="fr-consent-service__title">Sous finalité 3</legend>
                    <div className="fr-consent-service__radios fr-fieldset--inline">
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-2-service-3-accept" name="consent-finality-2-service-3" />
                        <label className="fr-label" htmlFor="consent-finality-2-service-3-accept">
                          Accepter
                        </label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="consent-finality-2-service-3-refuse" name="consent-finality-2-service-3" />
                        <label className="fr-label" htmlFor="consent-finality-2-service-3-refuse">
                          Refuser
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </fieldset>
          </div>
          <ul className="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
            <li>
              <button className="fr-btn" id="fr-consent-modal" title="Confirmer mes choix">
                Confirmer mes choix
              </button>
            </li>
          </ul>
        </div>
      </ModalContent>
    </Modal>
  );
};

ConsentModal.defaultProps = { className: '' };

ConsentModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default ConsentModal;
