import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import './SearchContainer.css';

function SearchContainer({ onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Title');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);
    onSort(selectedSort);
  };

  return (
    <div className='search-sort'>
      <div className='input-container'>
        <div className='input-group'>
          <input 
            className='input' 
            type='text' 
            placeholder='Search Book'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className='icon' onClick={handleSearch} />
        </div>
      </div>
      <div className='input-container'>
        <div className='input-group'>
          <select className='input' value={sortOption} onChange={handleSort}>
            <option>Title</option>
            <option>Newest</option>
            <option>Rating</option>
          </select>
          <SortIcon className='icon' />
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;

