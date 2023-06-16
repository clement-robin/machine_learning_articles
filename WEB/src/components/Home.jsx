import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';

function Home() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [resultsKey, setResultsKey] = useState(0); // Ajoutez une clé unique pour le composant "Results"

  const handleSearch = () => {
    console.log("test");
    setShowResults(true);
    setResultsKey(resultsKey + 1); // Mettez à jour la clé unique pour le composant "Results"
  };

  return (
    <div>
      <Search title={title} text={text} setTitle={setTitle} setText={setText} handleSearch={handleSearch} />
      {showResults && <Results key={resultsKey} title={title} text={text} />}
    </div>
  );
}

export default Home;
