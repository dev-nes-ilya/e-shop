import { shopActionTypes as types } from "./shop.types";

import {
  firestore,
  convertCollectionsSnaphsotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: types.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: types.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: types.FETCH_COLLECTIONS_FAILURE,
  pyload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(async snapshot => {
        const collectionsMap = convertCollectionsSnaphsotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
