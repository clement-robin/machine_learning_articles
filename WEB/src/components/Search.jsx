import React, { useState } from 'react';
import { search_white, search_blue } from '../assets';

function Search({ title, setTitle, text, handleSearch }) {
  const [category, setCategory] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div>
      <div className="mt-28 flex justify-center">
        <input
          className="p-2 w-6/12 border rounded text-black"
          type="url"
          placeholder="Lien d'un article..."
        />
      </div>
      <div className="mt-5 flex justify-center">OU</div>
      <div className="mt-5 flex justify-center">
        <div>
          <input
            className="p-2 w-80 border rounded text-black"
            type="search"
            placeholder="Titre d'article..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="p-2 border rounded ml-4 text-black"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">- Sélectionner un sujet -</option>
            <option value="politicsNews">politicsNews</option>
            <option value="worldnews">worldnews</option>
            <option value="News">News</option>
            <option value="politics">politics</option>
            <option value="left-news">left-news</option>
            <option value="Government News">Government News</option>
            <option value="US_News">US_News</option>
            <option value="Middle-east">Middle-east</option>
          </select>

          <textarea
            className="p-2 border w-96 h-36 rounded ml-4 mb-[-117px] resize-none text-black"
            placeholder="Texte..."
            value={text}
          />
          <button
            onClick={handleSearch}
            className="p-2 ml-4 bg-blue-500 text-white hover:bg-white hover:text-blue-500 rounded"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img
              src={isHovered ? search_blue : search_white}
              alt="Search Logo"
              className="w-6 h-6"
            />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
