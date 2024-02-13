import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Unauthorized</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/pricing")}>Pricing</button>
      <button onClick={() => navigate("/auth/login")}>Login</button>
      <button onClick={() => navigate("/auth/logout")}>Logout</button>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/products/:123")}>
        product details
      </button>
      <button onClick={() => navigate("/unauthorized")}>Unauthorized</button>
      <button onClick={() => navigate("/sdf")}>Page not Found</button>
    </>
  );
};

export default Unauthorized;
