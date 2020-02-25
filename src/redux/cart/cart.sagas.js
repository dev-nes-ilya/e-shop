import { all, call, put, takeLatest } from 'redux-saga/effects'

import { UserActionTypes as types } from "../user/user.types";

import { resetCart } from './cart.action'

export function* resetCartListOnSignOut() {
  yield put(resetCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(types.SIGN_OUT_SUCCESS, resetCartListOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}