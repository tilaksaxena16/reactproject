import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Project } from "./Project";
import { Clockapp } from "./Npm/Clockapp";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Project />
    ),
  },
  {
    path: "/clock",
    element: (
      <Clockapp />
    ),
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);