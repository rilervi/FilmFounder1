import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilmCast } from '../../redux/films/films.selectors';
import { movieCastThunk } from '../../redux/films/filmsOperations';
import 'simplebar-react/dist/simplebar.min.css';
import { ActorImg, ActorWrapper, CastItem, CastList } from './Cast.styled';

const Cast = ({ movieId }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const dispatch = useDispatch();
  const cast = useSelector(selectFilmCast);

  useEffect(() => {
    if (!movieId) return;
    dispatch(movieCastThunk(movieId));
  }, [dispatch, movieId]);

  return (
    cast && (
      <CastList>
        {cast.slice(0, 7).map(({ name, character, profile_path, id }) => {
          return (
            <CastItem key={id}>
              <ActorWrapper>
                <ActorImg src={BASE_IMG_URL + profile_path} alt={name} />
              </ActorWrapper>
              <p>{name}</p>
              <p>Персонаж: </p>
              <p>{character}</p>
            </CastItem>
          );
        })}
      </CastList>
    )
  );
};

export default Cast;
