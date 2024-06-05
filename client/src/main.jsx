import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import FAQ from "./components/pages/FAQ.jsx";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/faq",
        element: <FAQ />,
        errorElement: <div>404 Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
