import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/authorization/authOperations';
import {
  Button,
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  Label,
  PageSection,
} from './Register.styled';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <PageSection>
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <p className="auth">Реєстрація</p>
        <FormGroup className="form__group field">
          <Input
            {...register('userName', { required: true })}
            type="text"
            className="form__field"
            placeholder="Name"
          />
          <Label className="form__label">Name</Label>
          {errors.userName && (
            <ErrorMessage className="error-message">
              This field is required
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup className="form__group field">
          <Input
            {...register('email', { required: true })}
            type="email"
            className="form__field"
            placeholder="Email"
          />
          <Label className="form__label">Email</Label>
          {errors.email && (
            <ErrorMessage className="error-message">
              This field is required
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup className="form__group field">
          <Input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            className="form__field"
            placeholder="Password"
          />
          <Label className="form__label">Password</Label>
          {errors.password && (
            <ErrorMessage className="error-message">
              Password must contain at least 7 characters
            </ErrorMessage>
          )}
        </FormGroup>

        <p className="link-to">
          Вже маєте акаунту ?{' '}
          <NavLink to={'/login'} className="linkl">
            Ввійдіть
          </NavLink>{' '}
        </p>

        <Button type="submit" className="login-btn">
          Зареэструвати
        </Button>
      </Form>
    </PageSection>
  );
};

export default RegisterPage;
