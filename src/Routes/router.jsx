import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import { Component } from "react";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../layouts/NewsDetails";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component:Login
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
     loader: () => fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
  },
  {
    path: "*",
    element: <h2>error 404</h2>,
  },
]);
