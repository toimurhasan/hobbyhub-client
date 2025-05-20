import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGroup from "./components/CreateGroup";
import AllGroups from "./components/AllGroups";
import MyGroups from "./components/MyGroups";
import Group from "./components/Group";
import UpdateGroup from "./components/UpdateGroup";

const router = createBrowserRouter([
  {
    path: "/",
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
        Component: CreateGroup,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
