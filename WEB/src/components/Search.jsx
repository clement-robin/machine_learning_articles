import React, { useState, useRef } from 'react';
import { search_white, search_blue } from '../assets';



function Search({ title, text, setTitle, setText, handleSearch }) {
  const [isHovered, setIsHovered] = useState(false);
  const titleRef = useRef();
  const textRef = useRef();

  function handleSearchInside(){
    setText(textRef.current.value);
    setTitle(titleRef.current.value);
    handleSearch();
  }

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
        <div className='flex'>
          <input
            className="p-2 w-80 border rounded text-black"
            type="search"
            placeholder="Titre d'article..."
            ref={titleRef}
          />

          <textarea
            className="p-2 border w-96 h-36 rounded ml-4 mb-[-117px] resize-none text-black"
            placeholder="Texte..."
            ref={textRef}
          />
          <button
            onClick={handleSearchInside}
            className="p-2 ml-4 bg-blue-500 text-white hover:bg-white hover:text-blue-500 flex rounded"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img
              src={isHovered ? search_blue : search_white}
              alt="Search Logo"
              className="w-6 h-6 mr-3"
            />
            <span>Rechercher</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
