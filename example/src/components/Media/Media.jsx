import React from 'react';

import {
  Col, Row, MediaVideo, MediaImage,
} from '@dataesr/react-dsfr';

const MediaExample = () => (
  <Col>
    <Row>
      <Col n="8">
        <MediaVideo
          legend="légende de l'image"
          buttonLabel="Transcription"
        >
          <iframe
            title="titre de l’iframe"
            className="fr-responsive-vid__player"
            src="https://www.youtube.com/embed/HyirpmPL43I"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </MediaVideo>
      </Col>
    </Row>
    <Row>
      <Col n="8">
        <MediaImage
          src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
          alt="description alternative à l‘image"
          legend="légende de l'image"
          size="lg"
        />
      </Col>
    </Row>
  </Col>
);

export default MediaExample;
