import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import App from "./App";
import NoteProvider from "./Provider/NoteProvider";
import Login from "./pages/Login";
import Layout from "./Layout/Layout";
import AllNotes from "./pages/AllNotes";
import Note from "./pages/Note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/notes",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <AllNotes />,
      },
      {
        path: ":index",
        element: <Note />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NoteProvider>
      <RouterProvider router={router} />
    </NoteProvider>
  </StrictMode>
);
