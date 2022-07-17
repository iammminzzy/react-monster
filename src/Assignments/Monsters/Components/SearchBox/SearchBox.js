import React from 'react';
import './SearchBox.scss';

function SearchBox({ userInput, handleChange, searchingMonster }) {
  return (
    <form>
      <input
        className='search'
        type='search'
        placeholder='Search...'
        value={userInput}
        onChange={handleChange}
      />
      <button className='searchButton' onClick={searchingMonster}>
        검색
      </button>
    </form>
  );
}

export default SearchBox;
