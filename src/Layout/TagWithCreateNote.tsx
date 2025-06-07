import CreateNote from "../pages/CreateNote";
import Tag from "../pages/Tag";
import { useNoteContext } from "../Provider/NoteProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../../public/assets/images/icon-search.svg";
import settingsIcon from "../../public/assets/images/icon-settings.svg";
export default function TagWithCreateNote() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAllTag = /^\/notes\/tags\/[^/]+(\/(\d+|newnote))?$/.test(
    location.pathname
  );
  const { chosenTag, setSearch } = useNoteContext();
  const handleSeeSettings = () => {
    navigate("/notes/settings");
  };
  const isDesktop = window.matchMedia("(min-width: 1440px)").matches;
  return isDesktop ? (
    <div className="dk:flex dk:flex-row w-full">
      <Tag />
      <CreateNote />
      {isAllTag && (
        <div className="absolute dk:block tb:hidden mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#525866] text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Notes Tagged:{" "}
            <span className="text-[#0E121B] text-[24px] font-bold">
              {chosenTag}
            </span>
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
  ) : (
    <CreateNote />
  );
}
