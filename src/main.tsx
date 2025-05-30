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
import Archived from "./pages/Archived";
import ArchivedNote from "./pages/ArchivedNote";
import Tags from "./pages/Tags";
import Tag from "./pages/Tag";
import ChosenTag from "./pages/ChosenTag";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import ColorTheme from "./pages/ColorTheme";
import CreateNote from "./pages/CreateNote";

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
      {
        path: "archived",
        element: <Archived />,
      },
      {
        path: "archived/:index",
        element: <ArchivedNote />,
      },
      {
        path: "tags",
        element: <Tags />,
      },
      {
        path: "tags/:tag",
        element: <Tag />,
      },
      {
        path: "tags/:tag/:index",
        element: <ChosenTag />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/color-theme",
        element: <ColorTheme />,
      },
      {
        path: "newnote",
        element: <CreateNote />,
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
