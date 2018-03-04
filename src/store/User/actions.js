import { createAction } from 'redux-actions';

/**
 * Activate account
 */
export const activateAccountRequest = createAction('ACTIVE_ACCOUNT_REQUEST');
export const activateAccountSuccess = createAction('ACTIVE_ACCOUNT_SUCCESS');
export const activateAccountFailure = createAction('ACTIVE_ACCOUNT_FAILURE');

/**
 * Fetch current user
 */
export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

/**
 * Request password reset
 */
export const requestPasswordResetRequest = createAction('REQUEST_PASSWORD_RESET_REQUEST');
export const requestPasswordResetSuccess = createAction('REQUEST_PASSWORD_RESET_SUCCESS');
export const requestPasswordResetFailure = createAction('REQUEST_PASSWORD_RESET_FAILURE');

/**
 * Reset password
 */
export const resetPasswordRequest = createAction('RESET_PASSWORD_REQUEST');
export const resetPasswordSuccess = createAction('RESET_PASSWORD_SUCCESS');
export const resetPasswordFailure = createAction('RESET_PASSWORD_FAILURE');

/**
 * Sign in
 */
export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

/**
 * Sign out
 */
export const SIGN_OUT = 'SIGN_OUT';

/**
 * Update settings
 */
export const updateSettingsRequest = createAction('UPDATE_SETTINGS_REQUEST');
export const updateSettingsSuccess = createAction('UPDATE_SETTINGS_SUCCESS');
export const updateSettingsFailure = createAction('UPDATE_SETTINGS_FAILURE');

/**
 * Validate activate account token
 */
export const validateActivateAccountTokenRequest = createAction('VALIDATE_ACTIVATE_ACCOUNT_TOKEN_REQUEST');
export const validateActivateAccountTokenSuccess = createAction('VALIDATE_ACTIVATE_ACCOUNT_TOKEN_SUCCESS');
export const validateActivateAccountTokenFailure = createAction('VALIDATE_ACTIVATE_ACCOUNT_TOKEN_FAILURE');

/**
 * Validate reset password token
 */
export const validateResetPasswordTokenRequest = createAction('VALIDATE_RESET_PASSWORD_TOKEN_REQUEST');
export const validateResetPasswordTokenSuccess = createAction('VALIDATE_RESET_PASSWORD_TOKEN_SUCCESS');
export const validateResetPasswordTokenFailure = createAction('VALIDATE_RESET_PASSWORD_TOKEN_FAILURE');
