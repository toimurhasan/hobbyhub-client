import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";

import { createBrowserRouter, RouterProvider, RouteObject } from "react-router"; // ✅ react-router-dom
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
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      { path: "groups", element: <AllGroups /> },
      {
        path: "group/:id",
        loader: async ({ params }) =>
          fetch(`https://hobbyhub-server-omega.vercel.app/group/${params.id}`),
        element: (
          <PrivateRoute>
            <Group />
          </PrivateRoute>
        ),
      },
      {
        path: "updateGroup/:id",
        loader: async ({ params }) =>
          fetch(`https://hobbyhub-server-omega.vercel.app/group/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "myGroups",
        element: (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <Error /> },
    ],
  },
] as RouteObject[]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  );
}
