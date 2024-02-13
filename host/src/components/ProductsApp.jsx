import React from "react";
import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";
import { productsRoutingPrefix } from "../routing/constants";
import { useLocation, useNavigate } from "react-router-dom";

const productsBasename = `/${productsRoutingPrefix}`;

const ProductsApp = () => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside products mfe.
  useEffect(() => {
    const productsNavigationEventHandler = (event) => {
      const pathname = event.detail;
      const newPathname = `${productsBasename}${pathname}`;
      if (pathname === location.pathname) {
        return;
      }
      navigate(pathname === "/" ? pathname : newPathname);
    };
    window.addEventListener(
      "[products] navigated",
      productsNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[products] navigated",
        productsNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for host location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(productsBasename)) {
      window.dispatchEvent(
        new CustomEvent("[host] navigated", {
          detail: location.pathname.replace(productsBasename, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount products MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current,
      initialPathname: location.pathname.replace(productsBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="products-mfe" />;
};

export default ProductsApp;
