import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee.jsx";
import EmployeeList from "./pages/EmployeeList/EmployeeList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
