import { normalize } from 'normalizr';
import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

// Actions
import { setFlash } from '../flash/actions';

// Schema
import { user as userSchema } from '../schema';

// Selectors
import { getToken } from '../router/selectors';

/**
 * Fetch current user
 */
export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const fetchCurrentUser = () => (dispatch, getState, api) => {
    dispatch(fetchCurrentUserRequest());

    return api.fetchCurrentUser()
        .then(api.checkStatus)
        .then(response => api.getClubId() ? response : api.setClubId(response))
        .then(response => normalize(response.data.user, userSchema))
        .then(normalizedData => dispatch(fetchCurrentUserSuccess(normalizedData)))
        .catch(api.handleError(dispatch, fetchCurrentUserFailure));
};

/**
 * Request password reset
 */
export const requestPasswordResetRequest = createAction('REQUEST_PASSWORD_RESET_REQUEST');
export const requestPasswordResetSuccess = createAction('REQUEST_PASSWORD_RESET_SUCCESS');
export const requestPasswordResetFailure = createAction('REQUEST_PASSWORD_RESET_FAILURE');

export const requestPasswordReset = data => (dispatch, getState, api) => {
    dispatch(requestPasswordResetRequest());

    return api.requestPasswordReset(data)
        .then(api.checkStatus)
        .then(() => dispatch(requestPasswordResetSuccess()))
        .then(() => dispatch(setFlash({message: 'Check your email for your reset password link', type: 'info'})))
        .then(() => dispatch(push('/sign-in')))
        .then(() => api.trackEvent('userRequestedPasswordReset'))
        .catch(api.handleError(dispatch, requestPasswordResetFailure));
};

/**
 * Reset password
 */
export const resetPasswordRequest = createAction('RESET_PASSWORD_REQUEST');
export const resetPasswordSuccess = createAction('RESET_PASSWORD_SUCCESS');
export const resetPasswordFailure = createAction('RESET_PASSWORD_FAILURE');

export const resetPassword = data => (dispatch, getState, api) => {
    dispatch(resetPasswordRequest());

    return api.resetPassword(getToken(getState()), data)
        .then(api.checkStatus)
        .then(() => dispatch(resetPasswordSuccess()))
        .then(() => dispatch(push('/sign-in')))
        .then(() => api.trackEvent('userResetPassword'))
        .catch(api.handleError(dispatch, resetPasswordFailure));
};

/**
 * Sign in
 */
export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const signIn = data => (dispatch, getState, api) => {
    dispatch(signInRequest());

    return api.signIn(data)
        .then(api.checkStatus)
        .then(response => api.getClubId() ? response : api.setClubId(response))
        .then(api.setJwt)
        .then(response => normalize(response.data.user, userSchema))
        .then(normalizedData => dispatch(signInSuccess(normalizedData)))
        .catch(api.handleError(dispatch, signInFailure));
};

/**
 * Sign out
 */
export const SIGN_OUT = 'SIGN_OUT';

export const signOut = () => (dispatch, getState, api) => {
    api.removeClubId();
    api.removeJwt();

    dispatch({type: SIGN_OUT});
};

/**
 * Sign up
 */
export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const signUp = data => (dispatch, getState, api) => {
    dispatch(signUpRequest());

    return api.signUp(data)
        .then(api.checkStatus)
        .then(response => api.getClubId() ? response : api.setClubId(response))
        .then(api.setJwt)
        .then(response => normalize(response.data.user, userSchema))
        .then(normalizedData => dispatch(signUpSuccess(normalizedData)))
        .catch(api.handleError(dispatch, signUpFailure));
};

/**
 * Update settings
 */
export const updateSettingsRequest = createAction('UPDATE_SETTINGS_REQUEST');
export const updateSettingsSuccess = createAction('UPDATE_SETTINGS_SUCCESS');
export const updateSettingsFailure = createAction('UPDATE_SETTINGS_FAILURE');

export const updateSettings = data => (dispatch, getState, api) => {
    dispatch(updateSettingsRequest());

    return api.updateSettings(data)
        .then(api.checkStatus)
        .then(response => normalize(response.data.user, userSchema))
        .then(normalizedData => dispatch(updateSettingsSuccess(normalizedData)))
        .then(() => dispatch(setFlash({message: 'Your settings were updated', type: 'success'})))
        .catch(api.handleError(dispatch, updateSettingsFailure));
};

/**
 * Validate reset password token
 */
export const validateResetPasswordTokenRequest = createAction('VALIDATE_RESET_PASSWORD_TOKEN_REQUEST');
export const validateResetPasswordTokenSuccess = createAction('VALIDATE_RESET_PASSWORD_TOKEN_SUCCESS');
export const validateResetPasswordTokenFailure = createAction('VALIDATE_RESET_PASSWORD_TOKEN_FAILURE');

export const validateResetPasswordToken = () => (dispatch, getState, api) => {
    dispatch(validateResetPasswordTokenRequest());

    return api.validateResetPasswordToken(getToken(getState()))
        .then(api.checkStatus)
        .then(() => dispatch(validateResetPasswordTokenSuccess()))
        .catch(api.handleError(dispatch, validateResetPasswordTokenFailure));
};
