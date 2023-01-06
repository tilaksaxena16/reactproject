import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
//import { Project } from "./Project";
//import { Clockapp } from "./Npm/Clockapp";
import { Website } from "./Website";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Website />
    ),
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);