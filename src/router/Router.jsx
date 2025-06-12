import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
   {
    path: "/",
    element: <Layout/>,
  },
  {
    path:"/",
    element: <PrivateRouter/>,  //! Yetki kontrolü - Giriş kontrolü
    children:[
          {
            path:"details/:id",
            element: <Details/>
          },
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}