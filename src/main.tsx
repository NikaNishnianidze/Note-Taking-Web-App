import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import App from "./App";
import NoteProvider from "./Provider/NoteProvider";
import Login from "./pages/Login";
import Layout from "./Layout/Layout";
import Note from "./pages/Note";
import Archived from "./pages/Archived";
import Tags from "./pages/Tags";
import Search from "./pages/Search";
import SettingsWithColorTheme from "./pages/SettingsWithColorTheme";
import Settings from "./pages/Settings";
import ArchivedWithNote from "./Layout/ArchiedWithNote";
import TagsAndTag from "./Layout/TagsAngTag";
import AllNotesWithCreateNote from "./Layout/AllNotesWithCreateNote";
import ArchivedWithCreateNote from "./Layout/ArchivedWithCreateNote";
import TagWithCreateNote from "./Layout/TagWithCreateNote";

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
      { path: ":index", element: <Note /> },
      { path: "archived", element: <Archived /> },
      { path: "archived/:index", element: <ArchivedWithNote /> },
      { path: "archived/newnote", element: <ArchivedWithCreateNote /> },
      { path: "tags", element: <Tags /> },
      { path: "tags/:tag", element: <TagsAndTag /> },
      { path: "tags/:tag/:index", element: <TagsAndTag /> },
      { path: "tags/:tag/newnote", element: <TagWithCreateNote /> },
      { path: "search", element: <Search /> },
      { path: "settings", element: <Settings /> },
      { path: "settings/color-theme", element: <SettingsWithColorTheme /> },
      { path: "newnote", element: <AllNotesWithCreateNote /> },
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
