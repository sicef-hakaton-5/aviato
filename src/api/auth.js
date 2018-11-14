
import axios from '.';

export function login(email, password) {
  return axios.post('/auth/login', {
    email,
    password,
  });
}

export function register(name, email, password) {
  return axios.post('/auth/register', {
    name,
    email,
    password,
    isDoctor: false,
  });
}
