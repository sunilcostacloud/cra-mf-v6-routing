import React from "react";
import { Layout } from "../components/Layout";
import Login from "../components/Login";
import Logout from "../components/Logout";
import PageNotFound from "../components/PageNotFound";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  // Add a 404 handling route with path="*"
  {
    path: "*",
    element: <PageNotFound />,
  },
];
