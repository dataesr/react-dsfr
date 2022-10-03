import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { Link } from '@dataesr/react-dsfr';

const Page2 = () => (
  <div className="page">
    <h2>Page 2</h2>
    <Link href="/#" title="title" as={<RouterLink to="/page-1">Internal Link Page 1</RouterLink>} />
  </div>
);
export default Page2;
