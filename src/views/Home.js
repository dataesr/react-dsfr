import { useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Home = () => {
  const [value, setValue] = useState('')
  return (
    <>
    <section>
      <Button text="Bouton du Gouvernement"/>
    </section>
    <section>
      <TextInput
        value={value}
        onChange={e => setValue(e.target.value)}
        label="Text input du gouvernement"
        message="Y'a une erreur non ?"
        messageType="error"
        hint="Je suis un champs de saisie de texte."
      />
    </section>
    </>
  );
};

export default Home;
