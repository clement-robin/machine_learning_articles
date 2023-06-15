import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';

function Home() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    console.log("test");
    setShowResults(true);
  };

  return (
    <div>
      <Search title={title} text={text} setTitle={setTitle} setText={setText} handleSearch={handleSearch} />
      {showResults && <Results title={title} text={text} />}
    </div>
  );
}

export default Home;
