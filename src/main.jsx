import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "react-tooltip/dist/react-tooltip.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGroup from "./components/CreateGroup";
import AllGroups from "./components/AllGroups";
import MyGroups from "./components/MyGroups";
import Group from "./components/Group";
import UpdateGroup from "./components/UpdateGroup";
import RootLayout from "./layouts/RootLayout";
import Error from "./components/Error";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "groups",
        Component: AllGroups,
      },
      {
        path: "group/:id",
        Component: Group,
      },
      {
        path: "/updateGroup/:id",
        Component: UpdateGroup,
      },
      {
        path: "myGroups",
        Component: MyGroups,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
