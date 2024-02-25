import React, { useState } from 'react';

import {
  SearchForm,
  SearchButton,
  SearchSpan,
  SearchInput,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = inputValue.trim();
    onSubmit(searchQuery);
    setInputValue('');
  };

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          <span></span>
        </a>
        <SearchButton>
          <SearchSpan>Search</SearchSpan>
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};
export default SearchBar;
