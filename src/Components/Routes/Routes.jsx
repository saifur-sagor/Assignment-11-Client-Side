import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Register from "../Register";
import Login from "../Login";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
  // dashboard
  {
    path: "/dashBoard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),

    children: "",
  },
]);
