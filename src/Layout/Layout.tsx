import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import AllNotes from "../pages/AllNotes";
import searchIcon from "../../public/assets/images/icon-search.svg";
import settingsIcon from "../../public/assets/images/icon-settings.svg";
import { useNoteContext } from "../Provider/NoteProvider";
import ArchiveIcon from "../../public/assets/images/icon-archive.svg";
import deleteIcon from "../../public/assets/images/icon-delete.svg";

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
  const { setSearch, notes, setNotes } = useNoteContext();
  const { index } = useParams();
  const isArchiveOpen =
    location.pathname === "/notes/archived" ||
    location.pathname === "/notes/archived/";
  const handleSeeSettings = () => {
    navigate("/notes/settings");
  };
  const handleDelete = () => {
    const newNotes = notes.notes.filter((_, i) => i !== Number(index));
    setNotes({ notes: newNotes });
    window.history.back();
  };
  const handleArchive = () => {
    if (index === undefined) return;

    const updatedNotes = notes.notes.map((note, i) =>
      i === Number(index) ? { ...note, isArchived: true } : note
    );
    setNotes({ notes: updatedNotes });
  };
  return (
    <div className="flex ">
      <MobileNavigation />
      <div className="flex gap-[90px] dk:mt-[75px]">
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
        <div className="dk:flex dk:flex-col dk:gap-[12px] dk:mt-[40px] dk:block mb:hidden tb:hidden dk:mt-[110px]">
          <div
            onClick={handleArchive}
            className="archive w-[242px] flex items-center gap-[8px] rounded-[8px] border-[1px] border-[#CACFD8] py-[12px] px-[16px]"
          >
            <img
              src={ArchiveIcon}
              alt="archive icon"
              className="dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[14px] dark:text-white text-[#0E121B] font-semibold">
              Archive Note
            </p>
          </div>
          <div
            onClick={handleDelete}
            className="delete w-[242px] flex items-center gap-[8px] rounded-[8px] border-[1px] border-[#CACFD8] py-[12px] px-[16px]"
          >
            <img
              src={deleteIcon}
              alt="delete icon"
              className="dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[14px] dark:text-white text-[#0E121B] font-semibold">
              Delete Note
            </p>
          </div>
        </div>
      )}
      {isAllNotes && (
        <div className="absolute dk:block dark:bg-[#0E121B] tb:hidden mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#0E121B] dark:text-white text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            All Notes
          </p>
          <div className="input-images flex items-center gap-[25px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[300px] border-[1px] border-[#CACFD8] dark:bg-[#0E121B] dark:placeholder-[#99A0AE] relative flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
              placeholder="Search by title, content, or tags…"
            />
            <img
              src={searchIcon}
              alt="search Icon"
              className="absolute right-83 w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
            />
            <img
              className="dark:filter dark:brightness-0 dark:invert"
              src={settingsIcon}
              alt="settings icon"
              onClick={handleSeeSettings}
            />
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="fixed dk:block tb:hidden dark:bg-[#0E121B]  mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#0E121B] dark:text-white text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Settings
          </p>
          <div className="input-images flex items-center gap-[25px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[300px] border-[1px] border-[#CACFD8] dark:bg-[#0E121B] dark:placeholder-[#99A0AE] relative flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
              placeholder="Search by title, content, or tags…"
            />
            <img
              src={searchIcon}
              alt="search Icon"
              className="absolute right-83 w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
            />
            <img
              className="dark:filter dark:brightness-0 dark:invert"
              src={settingsIcon}
              alt="settings icon"
              onClick={handleSeeSettings}
            />
          </div>
        </div>
      )}
      {isArchiveOpen && (
        <div className="absolute dk:block dark:bg-[#0E121B] tb:hidden mb:hidden top-4 left-0 dk:ml-[270px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#0E121B] dark:text-white text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Archived Notes
          </p>
          <div className="input-images flex items-center gap-[25px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[300px] border-[1px] border-[#CACFD8] dark:bg-[#0E121B] dark:placeholder-[#99A0AE] relative flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
              placeholder="Search by title, content, or tags…"
            />
            <img
              src={searchIcon}
              alt="search Icon"
              className="absolute right-83 w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
            />
            <img
              className="dark:filter dark:brightness-0 dark:invert"
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
