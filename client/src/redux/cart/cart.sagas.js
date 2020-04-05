import { all, call, put, takeLatest } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { CartTypes } from "./cart.types";

import { resetCart } from "./cart.action";

export function* resetCartList() {
  yield put(resetCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, resetCartList);
}

export function* onPaySuccess() {
  yield takeLatest(CartTypes.PAY_SUCCESS, resetCartList);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onPaySuccess)]);
}
