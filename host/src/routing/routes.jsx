import React from "react";
import { lazy, Suspense } from "react";
import Progress from "../components/Progress";
import UnAuthorized from "../components/UnAuthorized";
import { authRoutingPrefix, productsRoutingPrefix } from "../routing/constants";
import { Layout } from "../layouts/Layout";

const HomeLazy = lazy(() => import("../components/HomeApp"));
const AuthLazy = lazy(() => import("../components/AuthApp"));
const ProductsLazy = lazy(() => import("../components/ProductsApp"));

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Progress />}>
            <HomeLazy />
          </Suspense>
        ),
      },
      {
        path: "unauthorized",
        element: <UnAuthorized />,
      },
      {
        path: `${authRoutingPrefix}/*`,
        element: (
          <Suspense fallback={<Progress />}>
            <AuthLazy />
          </Suspense>
        ),
      },
      {
        path: `${productsRoutingPrefix}/*`,
        element: (
          <Suspense fallback={<Progress />}>
            <ProductsLazy />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Progress />}>
            <HomeLazy />
          </Suspense>
        ),
      },
    ],
  },
];
