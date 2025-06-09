import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckoutPage from "../pages/books/CheckoutPage.jsx";
import SingleBook from "../pages/books/SingleBook.jsx";
import OrderPage from "../pages/books/OrderPage.jsx";


import Contact from "../pages/Contact.jsx";
import Fiction from "../pages/Fiction.jsx";
import NonFiction from "../pages/Nonfiction.jsx";
import Highlights from "../pages/Highlights.jsx";
import About from "../pages/About.jsx";
import AdminRoute from "./AdminRoute.jsx";
import AdminLogin from "../components/AdminLogin.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks.jsx";
import AddBook from "../pages/dashboard/addBook/AddBook.jsx";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/nonfiction",
        element: <NonFiction />
      },
      {
        path: "/hightlights",
        element: <Highlights />
      },
      {
        path: "/fiction",
        element: <Fiction />
      },
    
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin/>
  },
  {
    path: "/dashboard",
    element: <AdminRoute><DashboardLayout/></AdminRoute>,
    children: [
      {
        path: "",
        element: <AdminRoute><Dashboard /></AdminRoute>,
      },
      {
        path: "add-new-book",
        element: <AdminRoute><AddBook /></AdminRoute>,
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute><UpdateBook /></AdminRoute>,
      },
      {
        path: "manage-books",
        element: <AdminRoute>
          <ManageBooks />
        </AdminRoute>,
      },
    ]
  }
]);

export default router;




