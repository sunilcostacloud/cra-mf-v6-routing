import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <>
          <h1>This is Host App</h1>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/pricing")}>Pricing</button>
          <button onClick={() => navigate("/auth/login")}>Login</button>
          <button onClick={() => navigate("/auth/logout")}>Logout</button>
          <button onClick={() => navigate("/products")}>Products</button>
          <button onClick={() => navigate("/products/:123")}>
            product details
          </button>
          <button onClick={() => navigate("/unauthorized")}>
            Unauthorized
          </button>
          <button onClick={() => navigate("/sdf")}>Page not Found</button>
        </>
      </div>
      <hr />
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
}
