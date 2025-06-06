import { useEffect } from "react";
import AllNotes from "./AllNotes";
import Note from "./Note";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function DesktopContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/notes") {
      navigate("/notes/0", { replace: true });
    }
  }, [location.pathname, navigate]);
  return (
    <div className="dk:flex dk:flex-row dk:items-start">
      <AllNotes />
    </div>
  );
}
