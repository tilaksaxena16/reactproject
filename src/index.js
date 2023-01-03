import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Project } from "./Project";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Project />
    ),
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);