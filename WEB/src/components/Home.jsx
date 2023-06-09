import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';

function Home() {
  const [title, setTitle] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    console.log("ouioui");
    setShowResults(true);
  };

  return (
    <div>
      <Search title={title} setTitle={setTitle} handleSearch={handleSearch} />
      {showResults && <Results />}
    </div>
  );
}

export default Home;
