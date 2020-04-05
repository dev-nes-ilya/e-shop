import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { paySuccess } from "../../redux/cart/cart.action";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_tsuiYAy5gShK9fTFLmQdCYhD00D1VzkZ9S";
  const dispatch = useDispatch();

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        dispatch(paySuccess());
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with you payment. Pleas sure, that you use a provided credit card."
        );
      });
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
