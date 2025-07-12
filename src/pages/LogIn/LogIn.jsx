import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authorization/authOperations';
import {
  Button,
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  Label,
  PageSection,
} from './Login.styled';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <PageSection>
      <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <p className="auth">Авторизація</p>
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
            {...register('password', { required: true, minLength: 6 })}
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
          Не маєте акаунту{' '}
          <NavLink to={'/register'} className="linkl">
            зареєструйте
          </NavLink>{' '}
        </p>
        <Button type="submit" className="login-btn">
          Ввійти
        </Button>
      </Form>
    </PageSection>
  );
};

export default LoginPage;
