import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signup");
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}
