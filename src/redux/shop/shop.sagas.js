import { takeLatest, put, call } from "redux-saga/effects";

import { shopActionTypes as types } from "./shop.types";

import {
  firestore,
  convertCollectionsSnaphsotToMap
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnaphsotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(types.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
