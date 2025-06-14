import { useNavigate, useParams } from "react-router-dom";
import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import createNewNote from "../../public/assets/images/icon-plus.svg";

export default function Tag() {
  const { tag } = useParams();
  const { notes, search, chosenTag } = useNoteContext();
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };
  const formattedDates = notes.notes.map((note) => {
    const date = new Date(note.lastEdited);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  });
  const handleSeeTag = (index: number) => {
    navigate(`/notes/tags/${tag}/${index}`);
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

  return (
    <div className="flex flex-col items-center min-h-screen dk:ml-[300px]">
      <div className="logo w-[343px] py-[13px] tb:w-[704px] tb:py-[23px] dk:hidden">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>
      <div className="main-box w-[375px] dk:w-[290px] flex-grow tb:w-[768px] tb:py-[24px] tb:px-[32px] dark:bg-[#0E121B] rounded-t-[8px] bg-white py-[20px] px-[16px]">
        <div className="goback dk:hidden flex items-center mt-[20px] gap-[8px] w-[343px] ">
          <img
            src={arrowLeft}
            alt="arrow left"
            className="w-[18px] h-[18px] dark:filter dark:brightness-0 dark:invert"
          />
          <p onClick={handleGoBack} className="dark:text-white">
            Go Back
          </p>
        </div>
        <div className="taggednote w-[343px] mt-[16px]">
          <p className="text-[#525866] dk:hidden text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Notes Tagged:{" "}
            <span className="text-[24px] text-[#0E121B] dark:text-white font-bold leading-[120%] tracking-[-0.5px]">
              {tag}
            </span>
          </p>
          <button
            onClick={() => navigate(`/notes/tags/${tag}/newnote`)}
            className="mb:hidden tb:hidden dk:block w-[242px] rounded-[8px] py-[12px] text-center bg-[#335CFF] text-white text-[14px] font-semibold"
          >
            + Create New Note
          </button>
          <p className="mt-[16px] dk:w-[242px] text-[14px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[130%] tracking-[-0.2px]">
            All notes with the{" "}
            <span className="text-[14px] text-[#0E121B] dark:text-white font-normal leading-[130%] tracking-[-0.2px]">{`"${tag}"`}</span>{" "}
            tag are shown here.
          </p>
        </div>
        <div className="filteredtags flex flex-col gap-[16px] w-[343px] mt-[16px]">
          {filteredNotes.map((note, index) => {
            return (
              <div
                onClick={() => handleSeeTag(index)}
                key={index}
                className="flex flex-col gap-[12px]"
              >
                <div className="title">
                  <p className="text-[#0E121B] dark:text-white text-[16px] font-semibold leading-[120%] tracking-[-0.3px]">
                    {note.title}
                  </p>
                </div>
                <div className="tags flex items-center gap-[4px]">
                  {note.tags &&
                    note.tags.map((tag, tagIdx) => (
                      <div
                        key={tagIdx}
                        className="tag py-[2px] px-[6px] text-center rounded-[4px] bg-[#E0E4EA] dark:bg-[#2B303B]"
                      >
                        <p className="text-[12px] text-[#0E121B] font-normal dark:text-white leading-[120%] tracking-[-0.2px]">
                          {tag}
                        </p>
                      </div>
                    ))}
                </div>
                <div className="date mt-[12px]">
                  <p className="text-[12px] text-[#2B303B] dark:text-[#E0E4EA] font-normal leading-[120%] tracking-[-0.2px]">
                    {formattedDates[index]}
                  </p>
                </div>
                <div className="divider w-[343px] bg-[#E0E4EA] h-[1px] dark:bg-[#232530]"></div>
              </div>
            );
          })}
          <div
            onClick={() => navigate(`/notes/tags/${tag}/newnote`)}
            className="new-note flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#335CFF] dk:hidden mb:fixed tb:fixed bottom-17 right-4 z-50"
          >
            <img
              src={createNewNote}
              alt="new note"
              className="filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
