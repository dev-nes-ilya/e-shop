import { CartTypes as types } from "./cart.types";

export const toggleCartDropdown = () => ({
  type: types.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: types.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: types.REMOVE_ITEM,
  payload: item
});
export const clearItem = item => ({
  type: types.CLEAR_ITEM,
  payload: item
});
