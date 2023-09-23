import {
    createBrowserRouter,
  } from "react-router-dom";
  import LoginPage from "./features/auth/loginPage";
  import Admin from "./routes/admin";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);