import React from "react";
import { useLocation } from "react-router-dom";

const CheckoutSuccess = () => {
  const location = useLocation();
  console.log("Location...", location);

  return <div>Checkout successful!</div>;
};

export default CheckoutSuccess;
