import { useState } from 'react';
import Button from '../components/Button/Button';

const Home = () => {
  const [value, setValue] = useState('')
  return (
    <section>
      <Button text="Bouton du Gouvernement"/>
    </section>
  );
};

export default Home;
