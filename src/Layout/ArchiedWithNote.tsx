import { useLocation, useNavigate, useParams } from "react-router-dom";
import Archived from "../pages/Archived";
import ArchivedNote from "../pages/ArchivedNote";
import { useNoteContext } from "../Provider/NoteProvider";
import searchIcon from "../../public/assets/images/icon-search.svg";
import settingsIcon from "../../public/assets/images/icon-settings.svg";
import deleteIcon from "../../public/assets/images/icon-delete.svg";
import restoreIcon from "../../public/assets/images/icon-restore.svg";

export default function ArchivedWithNote() {
  const { setSearch, notes, setNotes } = useNoteContext();
  const { index } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSeeSettings = () => {
    navigate("/notes/settings");
  };
  const isArchiveOpen = /^\/notes\/archived(\/\d+)?$/.test(location.pathname);
  const isAllArchived = /^\/notes\/archived(\/\d+)?$/.test(location.pathname);
  const handleDelete = () => {
    const newNotes = notes.notes.filter((_, i) => i !== Number(index));
    setNotes({ notes: newNotes });
    window.history.back();
  };
  const handleRestore = () => {
    if (index === undefined) return;

    const updatedNotes = notes.notes.map((note, i) =>
      i === Number(index) ? { ...note, isArchived: false } : note
    );
    setNotes({ notes: updatedNotes });
  };
  return (
    <div className="dk:flex dk:flex-row w-full">
      <Archived />
      <ArchivedNote />
      {isAllArchived && (
        <div className="absolute dk:block tb:hidden mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
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
      {isAllArchived && (
        <div className="dk:flex dk:flex-col dk:gap-[12px] dk:block mb:hidden tb:hidden mt-[50px] ml-[60px]">
          <div
            onClick={handleRestore}
            className="archive w-[242px] flex items-center gap-[8px] rounded-[8px] border-[1px] border-[#CACFD8] py-[12px] px-[16px]"
          >
            <img src={restoreIcon} alt="restore icon" />
            <p className="text-[14px] text-[#0E121B] font-semibold">
              Restore Note
            </p>
          </div>
          <div
            onClick={handleDelete}
            className="delete w-[242px] flex items-center gap-[8px] rounded-[8px] border-[1px] border-[#CACFD8] py-[12px] px-[16px]"
          >
            <img src={deleteIcon} alt="delete icon" />
            <p className="text-[14px] text-[#0E121B] font-semibold">
              Delete Note
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
