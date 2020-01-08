import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  console.log("isGoogleSignIn: ", isGoogleSignIn);

  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in " : ""}custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
