import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[auth] navigated", {
        detail: "/",
      })
    );
  };

  const handlePricingNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[auth] navigated", {
        detail: "/pricing",
      })
    );
  };

  const handleProductListNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[auth] navigated", {
        detail: "/products/products-list",
      })
    );
  };

  const handleProductDetailsNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[auth] navigated", {
        detail: "/products/product/:123",
      })
    );
  };

  const handleUnauthorizedNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[auth] navigated", { detail: "/unauthorized" })
    );
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleHomeNavigate}>Home</button>
      <button onClick={handlePricingNavigate}>Pricing</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/logout")}>Logout</button>
      <button onClick={handleProductListNavigate}>Products</button>
      <button onClick={handleProductDetailsNavigate}>product details</button>
      <button onClick={handleUnauthorizedNavigate}>Unauthorized</button>
      <button onClick={() => navigate("/sdf")}>Page not Found</button>
    </>
  );
};

export default Login;
