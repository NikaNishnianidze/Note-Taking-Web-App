import AllNotes from "../pages/AllNotes";
import CreateNote from "../pages/CreateNote";
import searchIcon from "../../public/assets/images/icon-search.svg";
import settingsIcon from "../../public/assets/images/icon-settings.svg";
import { useNoteContext } from "../Provider/NoteProvider";
import { useNavigate } from "react-router-dom";

export default function AllNotesWithCreateNote() {
  const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
  const { setSearch } = useNoteContext();
  const navigate = useNavigate();
  const handleSeeSettings = () => {
    navigate("/notes/settings");
  };
  return isDesktop ? (
    <div className="dk:flex dk:flex-row w-full">
      <AllNotes />
      <CreateNote />
      <div className="absolute dark:bg-[#0E121B] dk:block tb:hidden mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
        <p className="text-[#0E121B] text-[24px] font-bold leading-[120%] dark:text-white tracking-[-0.5px]">
          All Notes
        </p>
        <div className="input-images flex items-center gap-[25px]">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-[300px] border-[1px] border-[#CACFD8] dark:border-[#525866] dark:bg-[#0E121B] dark:placeholder-[#99A0AE] relative flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
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
    </div>
  ) : (
    <CreateNote />
  );
}
