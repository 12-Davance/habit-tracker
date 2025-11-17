import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
