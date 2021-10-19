import React from 'react';
import '../styles/Search.css';

const Search = ({ handleSearch }) => {
  return (
    <div className='input-wrapper'>
      <input
        className='search'
        placeholder='Search...'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;