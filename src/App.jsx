import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
