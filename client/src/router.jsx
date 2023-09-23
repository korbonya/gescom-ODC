import {
    createBrowserRouter,
  } from "react-router-dom";
  import LoginPage from "./features/auth/loginPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
  ]);