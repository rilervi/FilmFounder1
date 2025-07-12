import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenres } from '../../redux/films/films.selectors';
import {
  ErrorMessage,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  StyledForm,
  SubmitButton,
} from './FilterBar.styled';
import { movieSortedThunk } from '../../redux/films/filmsOperations';
import { sortMethods } from '../../service/moviesAPI';

const FilterBar = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(movieSortedThunk(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="form__group field">
        <div>
          <FormLabel className="form__label">Оберіть жанр</FormLabel>
          {errors.genre && (
            <ErrorMessage className="error-message">{' *'}</ErrorMessage>
          )}
        </div>
        <FormSelect {...register('genre')}>
          <option value="">Жанри</option>
          {genres.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </FormSelect>
      </FormGroup>

      <FormGroup className="form__group field">
        <div>
          <FormLabel className="form__label">Рік</FormLabel>
          {errors.year && <span className="error-message">{' *'}</span>}
        </div>
        <FormInput
          {...register('year')}
          type="number"
          autoComplete="off"
          className={errors.name ? 'form-input input-error' : 'form-input'}
        />
      </FormGroup>

      <FormGroup className="form__group field">
        <div>
          <FormLabel className="form__label">Сортувати за</FormLabel>
          {errors.method && (
            <ErrorMessage className="error-message">{' *'}</ErrorMessage>
          )}
        </div>
        <FormSelect {...register('method')}>
          {/* <option value="">Оберіть жанр</option> */}
          {sortMethods.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </FormSelect>
      </FormGroup>

      <SubmitButton type="submit" className="send-btn">
        Сортувати
      </SubmitButton>
    </StyledForm>
  );
};

export default FilterBar;
