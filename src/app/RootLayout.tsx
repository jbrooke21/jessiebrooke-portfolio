import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

export default function RootLayout() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}