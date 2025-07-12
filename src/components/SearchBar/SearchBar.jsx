import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { movieByKeyWordThunk } from '../../redux/films/filmsOperations';
import { Search, SearchBtn, SearchInput } from './SearchBar.styled';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    dispatch(movieByKeyWordThunk(query));
  }, [query, dispatch]);

  const hendleFormSubmit = event => {
    event.preventDefault();
    const movieInSearch = event.currentTarget.elements.movieTitle.value;

    setSearchParams({ query: movieInSearch });
  };

  return (
    <Search>
      <form onSubmit={hendleFormSubmit}>
        <label>
          <SearchInput type="text" name="movieTitle" placeholder="Пошук" />
        </label>
        <SearchBtn type="submit">
          <IoIosSearch />
        </SearchBtn>
      </form>
    </Search>
  );
};

export default SearchBar;
