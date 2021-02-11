import React from 'react';
import Button from '../components/Button';
import Tag from '../components/Tag';

const Home = () => {
  return (
    <section>
      <Button text="Bouton du Gouvernement"/>
      <br />
      <Tag as="a" href="/" title="titre">Valeur du tag</Tag>
    </section>
  );
};

export default Home;