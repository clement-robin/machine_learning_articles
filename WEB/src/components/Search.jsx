import React from 'react';

function Search({ title, setTitle, handleSearch }) {
  return (
    <div className="min-h-screen flex items-center ml-auto">
      <div>
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Titre d'article..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="p-2 ml-4 bg-blue-500 text-white rounded" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
