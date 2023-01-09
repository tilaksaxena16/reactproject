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
import { Webpage } from "./Webpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Website />
    ),
  },
  {
    path: "/webpage",
    element: (
     <Webpage />
    ),
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);