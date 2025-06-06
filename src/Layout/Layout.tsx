import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import AllNotes from "../pages/AllNotes";
import searchIcon from "../../public/assets/images/icon-search.svg";
import settingsIcon from "../../public/assets/images/icon-settings.svg";
import { useNoteContext } from "../Provider/NoteProvider";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNoteOpen = /^\/notes\/\d+$/.test(location.pathname);
  const isSettingsOpen =
    location.pathname === "/notes/settings" ||
    location.pathname === "/notes/settings/color-theme";
  const showAllNotes =
    /^\/notes(\/\d+)?$/.test(location.pathname) ||
    location.pathname === "/notes" ||
    location.pathname === "/notes/";
  const isAllNotes =
    /^\/notes(\/\d+)?$/.test(location.pathname) ||
    location.pathname === "/notes/";
  const { setSearch } = useNoteContext();
  const handleSeeSettings = () => {
    navigate("/notes/settings");
  };
  return (
    <div className="flex ">
      <MobileNavigation />
      <div className="flex gap-[35px] dk:mt-[75px]">
        {showAllNotes && <AllNotes />}
        <div
          className={
            isNoteOpen
              ? "mb:absolute tb:absolute dk:static top-0 left-0 w-full mb:bottom-[56px] tb:bottom-[56px] dk:bottom-0 z-50"
              : "dk:static"
          }
        >
          <Outlet />
        </div>
      </div>

      {isAllNotes && (
        <div className="fixed dk:block tb:hidden mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#0E121B] text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            All Notes
          </p>
          <div className="input-images flex items-center gap-[25px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[300px] border-[1px] border-[#CACFD8] relative flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
              placeholder="Search by title, content, or tags…"
            />
            <img
              src={searchIcon}
              alt="search Icon"
              className="absolute right-83 w-[20px] h-[20px]"
            />
            <img
              src={settingsIcon}
              alt="settings icon"
              onClick={handleSeeSettings}
            />
          </div>
        </div>
      )}
      {isSettingsOpen && (
        <div className="fixed dk:block tb:hidden mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#0E121B] text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Settings
          </p>
          <div className="input-images flex items-center gap-[25px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[300px] border-[1px] border-[#CACFD8] relative flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
              placeholder="Search by title, content, or tags…"
            />
            <img
              src={searchIcon}
              alt="search Icon"
              className="absolute right-83 w-[20px] h-[20px]"
            />
            <img
              src={settingsIcon}
              alt="settings icon"
              onClick={handleSeeSettings}
            />
          </div>
        </div>
      )}
    </div>
  );
}
