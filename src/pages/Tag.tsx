import { useNavigate, useParams } from "react-router-dom";
import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import createNewNote from "../../public/assets/images/icon-plus.svg";

export default function Tag() {
  const { tag } = useParams();
  const { notes } = useNoteContext();
  const navigate = useNavigate();
  const filteredNotes = notes.notes.filter((note) =>
    note.tags.some((t) => t.toLowerCase() === tag?.toLowerCase())
  );
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

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="logo w-[343px] py-[13px]">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>
      <div className="main-box w-[375px] dark:bg-[#0E121B] rounded-t-[8px] bg-white py-[20px] px-[16px]">
        <div className="goback flex items-center mt-[20px] gap-[8px] w-[343px]">
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
          <p className="text-[#525866] text-[24px] font-bold leading-[120%] tracking-[-0.5px]">
            Notes Tagged:{" "}
            <span className="text-[24px] text-[#0E121B] dark:text-white font-bold leading-[120%] tracking-[-0.5px]">
              {tag}
            </span>
          </p>
          <p className="mt-[16px] text-[14px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[130%] tracking-[-0.2px]">
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
          <div className="new-note fixed bottom-17 right-4 w-[48px] h-[48px] rounded-full bg-[#335CFF] flex justify-center items-center">
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
