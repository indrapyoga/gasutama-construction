import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import WWDPages from "./pages/WhatWeDo/WWDPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>404 PUUUUH</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/what-we-do",
    element: <WWDPages />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
