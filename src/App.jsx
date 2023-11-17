import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import OurWorkPages from "./pages/OurWork/OurWorkPages";
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
  {
    path: "/our-work",
    element: <OurWorkPages />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
