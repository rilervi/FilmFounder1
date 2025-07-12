import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://filmfinder-rest-api.onrender.com/',
  // baseURL: 'http://localhost:6969/',
});

export const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const reqestRegister = async formData => {
  const { data } = await contactsInstance.post('users/register', formData);
  setToken(data.token);
  return data;
};

export const reqestLogIn = async formData => {
  const { data } = await contactsInstance.post('users/login', formData);
  setToken(data.token);
  return data;
};

export const reqestLogOut = async () => {
  const { data } = await contactsInstance.post('users/logout');
  return data;
};

export const reqestRefresh = async () => {
  const { data } = await contactsInstance.get('users/current');
  return data;
};
