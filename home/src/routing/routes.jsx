import React from "react";
import Home from "../components/Home";
import { Layout } from "../components/Layout";
import PageNotFound from "../components/PageNotFound";
import Pricing from "../components/Pricing";
import { Navigate } from "react-router-dom";

const dispatchCustomEvent = (path) => {
  window.dispatchEvent(new CustomEvent("[home] navigated", { detail: path }));
};

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: (
          <Navigate
            to="/auth/login"
            onNavigate={() => dispatchCustomEvent("/auth/login")}
          />
        ),
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  // Add a 404 handling route with path="*"
  {
    path: "*",
    element: <PageNotFound />,
  },
];
