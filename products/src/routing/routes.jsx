import React from "react";
import { Layout } from "../components/Layout";
import PageNotFound from "../components/PageNotFound";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";

var localRoot = document.getElementById("products_root");

export const routes = [
  {
    path: localRoot ? "/products" : "/",
    element: <Layout />,
    children: [
      {
        path: "products-list",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
    ],
  },
  // Add a 404 handling route with path="*"
  {
    path: "*",
    element: <PageNotFound />,
  },
];
