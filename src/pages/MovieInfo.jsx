import { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { movieDetailsThunk } from '../redux/films/filmsOperations';
import { selectData } from '../redux/films/films.selectors';

import MovieInfo from 'components/MovieInfo/MovieInfo';

const InfoPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const dispatch = useDispatch();
  const movie = useSelector(selectData);

  useEffect(() => {
    if (!movieId) return;
    dispatch(movieDetailsThunk(movieId));
  }, [dispatch, movieId]);

  return (
    <MovieInfo backLinkHref={backLinkHref} movie={movie} movieId={movieId} />
  );
};

export default InfoPage;
