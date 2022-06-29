import React, { useState } from 'react';

import { Link, Notice } from '@dataesr/react-dsfr';

const NoticeExample = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Notice
      title="Title"
      visible={visible}
      onClose={() => {
        setVisible(false);
      }}
      asLink={<Link href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</Link>}
    />
  );
};

export default NoticeExample;
