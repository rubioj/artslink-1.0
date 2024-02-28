import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mobile } from "./screens/Mobile";
import { Search } from "./screens/Search";
import { Menu } from "./screens/Menu";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Mobile />,
  },
  {
    path: "/mobile-home3",
    element: <Mobile />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
