import React, { useState } from 'react'

function GifSearch({onSearchSubmit}) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(searchText);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Search Gifs:
                <input type="text" value={searchText} onChange={handleInputChange} />
            </label>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default GifSearch