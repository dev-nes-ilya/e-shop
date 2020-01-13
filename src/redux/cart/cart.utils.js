export const addItemToCart = (cartItems, cartToAdd) => {
  const cartIsExist = cartItems.find(cartItem => cartItem.id === cartToAdd.id);

  if (cartIsExist) {
    return cartItems.map(cartItem =>
      cartItem.id === cartToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartToRemove) => {
  const cartIsExist = cartItems.find(
    cartItem => cartItem.id === cartToRemove.id
  );

  if (cartIsExist.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartToRemove.id
      ? { ...cartItem, quantity: cartToRemove.quantity - 1 }
      : cartItem
  );
};
