import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Register from "../Register";
import Login from "../Login";
import PrivateRoutes from "./PrivateRoutes";
import AddBook from "../Pages/Dashboard/AddBook";
import AllBooks from "../AllBooks";
import BookDetails from "../BookDetails";
import MyOrders from "../Pages/Dashboard/MyOrders";
import ErrorPage from "../ErrorPage";
import MyBook from "../MyBooks";
import UpdateBook from "../UpdateBook";
import PaymentSuccess from "../PaymentSuccess";
import PaymentCancel from "../PaymentCancel";
import Invoice from "../Invoice";
import LibrarianOrders from "../LibrarianOrders";
import UsersManagement from "../UserManagement";
import AdminRoute from "./AdminROute";
import BookManage from "../BookManage";
import Statics from "../Statics";
import MyWish from "../MyWish";
import MyProfile from "../MyProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allBooks",
        Component: AllBooks,
      },
      {
        path: "books/:id",
        Component: BookDetails,
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
    path: "dashBoard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),

    children: [
      {
        index: true,
        Component: Statics,
      },
      {
        path: "statics",
        Component: Statics,
      },
      {
        path: "addBook",
        Component: AddBook,
      },
      {
        path: "myBook",
        Component: MyBook,
      },
      {
        path: "updateBook/:id",
        Component: UpdateBook,
      },
      {
        path: "myOrders",
        Component: MyOrders,
      },
      {
        path: "wishList",
        Component: MyWish,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancel,
      },
      {
        path: "invoice",
        Component: Invoice,
      },
      {
        path: "librarianOrders",
        Component: LibrarianOrders,
      },
      {
        path: "profile",
        Component: MyProfile,
      },
      {
        path: "userManage",
        element: (
          <AdminRoute>
            <UsersManagement></UsersManagement>
          </AdminRoute>
        ),
      },
      {
        path: "bookManage",
        element: (
          <AdminRoute>
            <BookManage></BookManage>
          </AdminRoute>
        ),
      },
    ],
  },
]);
