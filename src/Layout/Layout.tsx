import { Outlet } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

export default function Layout() {
  return (
    <>
      <MobileNavigation />
      <Outlet />
    </>
  );
}
