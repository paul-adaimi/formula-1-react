import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./Pages/Content.jsx";
import Layout from "./Pages/Layout.jsx";
import Driver, { loader as driverLoader } from "./Pages/Driver";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/video",
        element: <h1>Video</h1>,
      },
      {
        path: "/f1unlocked",
        element: <h1>F1 Unlocked</h1>,
      },
      {
        path: "/live-timing",
        element: <h1>Live Timing</h1>,
      },
      {
        path: "/driver/:driverId",
        loader: driverLoader,
        element: <Driver />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
