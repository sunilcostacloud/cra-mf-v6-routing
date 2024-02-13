import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleAuthLoginNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[home] navigated", { detail: "/auth/login" })
    );
  };

  const handleAuthLogoutNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[home] navigated", { detail: "/auth/logout" })
    );
  };

  const handleProductListNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[home] navigated", {
        detail: "/products/products-list",
      })
    );
  };

  const handleProductDetailsNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[home] navigated", {
        detail: "/products/product/:123",
      })
    );
  };

  const handleUnauthorizedNavigate = () => {
    window.dispatchEvent(
      new CustomEvent("[home] navigated", { detail: "/unauthorized" })
    );
  };

  return (
    <>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/pricing")}>Pricing</button>
      <button onClick={handleAuthLoginNavigate}>Login</button>
      <button onClick={handleAuthLogoutNavigate}>Logout</button>
      <button onClick={handleProductListNavigate}>Products</button>
      <button onClick={handleProductDetailsNavigate}>product details</button>
      <button onClick={handleUnauthorizedNavigate}>Unauthorized</button>
      <button onClick={() => navigate("/sdf")}>Page not Found</button>
    </>
  );
};

export default PageNotFound;
