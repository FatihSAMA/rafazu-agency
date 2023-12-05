import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout";
import Home from "~/pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "services",
        element: "hizmetler",
      },
      {
        path: "portfolio",
        element: "referanslar",
      },
      {
        path: "about",
        element: "hakkımızda",
      },
      {
        path: "contact",
        element: "iletişim",
      },
    ],
  },
  {
    path: "*",
    element: "error",
  },
]);

export default routes;
