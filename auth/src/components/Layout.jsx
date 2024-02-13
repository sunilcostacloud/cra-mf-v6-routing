import React from "react";
import { useEffect } from "react";
import {
  matchRoutes,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { routes } from "../routing/routes";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function hostNavigationHandler(event) {
      const pathname = event.detail;
      if (
        location.pathname === pathname ||
        !matchRoutes(routes, { pathname })
      ) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener("[host] navigated", hostNavigationHandler);

    return () => {
      window.removeEventListener("[host] navigated", hostNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[auth] navigated", { detail: location.pathname })
    );
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
}
