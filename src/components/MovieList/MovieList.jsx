import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';
import { StyledList } from './MovieList.styled';

const MovieList = ({ topDayMovie }) => {
  return (
    <StyledList>
      {topDayMovie.map(movie => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </StyledList>
  );
};

export default MovieList;
