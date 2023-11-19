import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Axis from "./pages/Axis.jsx";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/axis",
    element: <Axis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
