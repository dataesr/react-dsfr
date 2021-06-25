import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { Link } from '@dataesr/react-dsfr';

const Page2 = () => (
  <>
    <h2>Page 2</h2>
    <Link href="/#" title="title" as={<RouterLink to="/page-1">Internal Link Page 1</RouterLink>} />
  </>
);
export default Page2;
