import { instance } from '../api';

export const fetchCurrentUser = () => instance().get('/users/current.json');

export const requestPasswordReset = data => instance().patch('/users/request-password-reset.json', data);

export const resetPassword = (token, data) => instance().patch(`/users/reset-password.json?token=${token}`, data);

export const signIn = data => instance().post('/users/login.json', data);

export const signUp = data => instance().post('/users.json', data);

export const updateSettings = data => instance().put('/users.json', data);

export const validateResetPasswordToken = token => instance().get(`/users/reset-password.json?token=${token}`);
