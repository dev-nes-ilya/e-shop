import { UserActionTypes as types } from "./user.types";

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: types.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: types.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: types.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: types.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: types.SIGN_OUT_START
});

export const signOutSucces = () => ({
  type: types.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: types.SIGN_OUT_FAILURE,
  payload: error
});
