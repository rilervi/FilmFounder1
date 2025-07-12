import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import {
  selectDayTopMovies,
  selectMoviesError,
  selectTopRatedMovies,
  selectWeekTopMovies,
  selectSearchedMovies,
} from '../redux/films/films.selectors';
import {
  topDayMoviesThunk,
  topWeekMoviesThunk,
  topRatedMoviesThunk,
} from '../redux/films/filmsOperations';
import { StyledContainer } from 'Styles/Container.styled';
import Category from 'components/Category/Category';
import {
  handlResetFilmData,
  handlResetSearch,
} from '../redux/films/filmsReduser';
import MovieList from 'components/MovieList/MovieList';
import FilterBar from 'components/FilterBar/FilterBar';

const Home = () => {
  const topDayMovie = useSelector(selectDayTopMovies);
  const topWeekMovie = useSelector(selectWeekTopMovies);
  const topRatedMovies = useSelector(selectTopRatedMovies);
  const searchedMovies = useSelector(selectSearchedMovies);
  const movieError = useSelector(selectMoviesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topDayMoviesThunk());
    dispatch(topWeekMoviesThunk());
    dispatch(topRatedMoviesThunk());
    dispatch(handlResetFilmData());
    dispatch(handlResetSearch());
  }, [dispatch]);

  return (
    <section>
      <StyledContainer>
        <FilterBar />
        {movieError && Notiflix.Notify.failure(movieError)}
        {searchedMovies.length ? (
          <MovieList topDayMovie={searchedMovies} />
        ) : (
          <>
            <Category
              moviesFromCategory={topDayMovie}
              categoryTitle={'Топ Дня'}
            />
            <Category
              moviesFromCategory={topWeekMovie}
              categoryTitle={'Топ Тижня'}
            />
            <Category
              moviesFromCategory={topRatedMovies}
              categoryTitle={'Найпопулярніші'}
            />
          </>
        )}
      </StyledContainer>
    </section>
  );
};

export default Home;
