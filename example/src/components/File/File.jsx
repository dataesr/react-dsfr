import React from 'react';

import {
  File,
} from '@dataesr/react-dsfr';

const FileExample = () => (
  <File
    onChange={() => {}}
    multiple
    label="Label File"
    hint="Hint"
    errorMessage="Format de fichier non supporté"
  />
);

export default FileExample;
