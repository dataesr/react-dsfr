import React from 'react';

import {
  Notice, Link,
} from '@dataesr/react-dsfr';

const NoticeExample = () => (
  <Notice
    title="Title"
    asLink={(
      <Link href="https://legifrance.gouv.fr" target="_blank">
        legifrance.gouv.fr
      </Link>
)}
  />
);

export default NoticeExample;
