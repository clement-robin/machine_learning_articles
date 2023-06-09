import React from 'react';
import { useState } from 'react'

function Home() {
    const [title, setTitle] = useState('');

    const handleSearch = () => {
        console.log("ouioui");
    };

    return (
        <div className="p-10">
            <input
                className="p-2 border rounded"
                type="text"
                placeholder="Enter article title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className="p-2 ml-4 bg-blue-500 text-white rounded" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default Home;
