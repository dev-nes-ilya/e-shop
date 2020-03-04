import { shopActionTypes as types } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
