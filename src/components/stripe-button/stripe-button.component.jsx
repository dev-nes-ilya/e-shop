import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_tsuiYAy5gShK9fTFLmQdCYhD00D1VzkZ9S";

  const onToken = token => {
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      lablel="Pay Now"
      name="E-shop Clothihg ltd."
      billingAdress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Yuor total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
