import { useNavigate } from "react-router-dom";
import logo from "../../public/assets/images/logo.svg";
import tagsIcon from "../../public/assets/images/icon-tag.svg";
import { useNoteContext } from "../Provider/NoteProvider";

const tagList = [
  "cooking",
  "dev",
  "fitness",
  "health",
  "personal",
  "react",
  "recipes",
  "shopping",
  "travel",
  "typescript",
];

export default function Tags() {
  const { setChosenTag, chosenTag, search, notes } = useNoteContext();
  const navigate = useNavigate();
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
  console.log(chosenTag);
  return (
    <div className="flex flex-col items-center gap-[11px] min-h-screen">
      <div className="logo w-[343px] py-[13px] tb:w-[704px] tb:py-[23px] dk:hidden tb:block mb:block">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert "
        />
      </div>
      <div className="main-box w-[375px] dk:w-[272px] dk:mt-0 dk:py-0 flex-grow tb:w-[768px] tb:py-[24px] tb:px-[32px] dark:bg-[#0E121B] rounded-t-[8px] bg-white py-[20px] px-[16px]">
        <div className="title mt-[20px] w-[343px]">
          <p className="text-[#0E121B] text-[24px] dark:text-white font-bold leading-[120%] tracking-[-0.5px] mb-[16px]">
            Tags
          </p>
        </div>
        <div className="tag-list flex flex-col items-center gap-[11.5px]">
          {tagList.map((tag, index) => (
            <div
              onClick={() => setChosenTag(tag)}
              key={index}
              className="flex flex-col items-center gap-[8px] w-[343px] tb:w-[704px] dk:w-[240px]"
            >
              <div className="list flex items-center gap-[8px] w-[343px] tb:w-[704px] dk:w-[240px]">
                <img
                  src={tagsIcon}
                  alt="tags icon"
                  className="w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
                />
                <button
                  key={tag}
                  onClick={() => navigate(`/notes/tags/${tag}`)}
                  className="dark:text-[#CACFD8] text-[#2B303B]"
                >
                  {tag}
                </button>
              </div>
              <div className="divider mt-[12px] tb:w-[704px] dk:w-[240px] w-[343px] h-[1px] bg-[#E0E4EA] dark:bg-[#232530]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
