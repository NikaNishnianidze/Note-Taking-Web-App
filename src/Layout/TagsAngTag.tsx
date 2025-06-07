import ChosenTag from "../pages/ChosenTag";
import Tag from "../pages/Tag";
import { useNoteContext } from "../Provider/NoteProvider";
import searchIcon from "../../public/assets/images/icon-search.svg";
import settingsIcon from "../../public/assets/images/icon-settings.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import deleteIcon from "../../public/assets/images/icon-delete.svg";
import ArchiveIcon from "../../public/assets/images/icon-archive.svg";

export default function TagsAndTag() {
  const location = useLocation();
  const isAllTag = /^\/notes\/tags\/[^/]+(\/\d+)?$/.test(location.pathname);
  const { index } = useParams();
  const navigate = useNavigate();
  const { setSearch, search, chosenTag, notes, setNotes } = useNoteContext();
  const handleSeeSettings = () => {
    navigate("/notes/settings");
  };
  const filteredNotes = notes.notes.filter(
    (note) =>
      note.tags &&
      note.tags.some((t) => t.toLowerCase() === chosenTag?.toLowerCase()) &&
      (note.title?.toLowerCase().includes(search.toLowerCase()) ||
        note.content?.toLowerCase().includes(search.toLowerCase()) ||
        note.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        ))
  );

  const noteToDelete = filteredNotes[Number(index)];
  const globalIndex = notes.notes.findIndex(
    (note) => note.title === noteToDelete?.title
  );

  const handleDelete = () => {
    if (globalIndex === -1) return;
    const newNotes = notes.notes.filter((_, i) => i !== globalIndex);
    setNotes({ notes: newNotes });
    window.history.back();
  };
  const handleArchive = () => {
    if (globalIndex === -1) return;

    const updatedNotes = notes.notes.map((note, i) =>
      i === globalIndex ? { ...note, isArchived: true } : note
    );
    setNotes({ notes: updatedNotes });
    window.history.back();
  };
  return (
    <div className="dk:flex dk:flex-row w-full">
      <Tag />
      {index !== undefined && <ChosenTag />}
      {isAllTag && (
        <div className="absolute dk:block tb:hidden dark:bg-[#0E121B] mb:hidden top-4 left-0 dk:ml-[290px] w-[1168px] bg-white px-4 py-2 dk:flex dk:items-center dk:justify-between">
          <p className="text-[#525866] dark:text-[#CACFD8] text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Notes Tagged:{" "}
            <span className="text-[#0E121B] dark:text-white text-[24px] font-bold">
              {chosenTag}
            </span>
          </p>
          <div className="input-images flex items-center gap-[25px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[300px] border-[1px] border-[#CACFD8] dark:placeholder-[#99A0AE] relative dark:bg-[#0E121B] flex items-center pl-[44px] bg-white rounded-[8px] py-[12px] outline-none text-[14px] font-normal tracking-[-0.2px]"
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
      {isAllTag && (
        <div className="dk:flex dk:flex-col dk:gap-[12px] dk:block mb:hidden tb:hidden mt-[30px]">
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
    </div>
  );
}
