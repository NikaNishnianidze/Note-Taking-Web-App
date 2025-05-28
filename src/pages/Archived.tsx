import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import createNewNote from "../../public/assets/images/icon-plus.svg";
import { useNavigate } from "react-router-dom";

export default function Archived() {
  const { notes } = useNoteContext();
  const navigate = useNavigate();
  const archivedNotes = notes.notes.filter((note) => note.isArchived);
  const formattedDates = notes.notes.map((note) => {
    const date = new Date(note.lastEdited);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  });
  const handleSeeArchivedNote = (index: number) => {
    navigate(`/notes/archived/${index}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="logo w-[343px]  py-[13px]">
        <img src={logo} alt="logo icon" />
      </div>
      <div className="text w-[343px] mt-[20px] flex flex-col gap-[8px]">
        <h1 className="text-[24px] text-[#0E121B] font-bold leading-[120%] tracking-[-0.5px]">
          Archived Notes
        </h1>
        <p className="text-[14px] text-[#2B303B] font-normal leading-[130%] tracking-[-0.2px]">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      </div>
      <div className="archivednotes flex flex-col items-start w-[343px] mt-[24px]">
        {archivedNotes.length > 0
          ? archivedNotes.map((note, index) => {
              return (
                <div
                  onClick={() => handleSeeArchivedNote(index)}
                  key={index}
                  className="flex flex-col gap-[14px] p-[8px] "
                >
                  <div className="title">
                    <p className="text-[16px] text-[#0E121B] font-semibold leading-[120%] tracking-[-0.3px]">
                      {note.title}
                    </p>
                  </div>
                  <div className="tags flex items-center gap-[4px]">
                    {note.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="tag py-[2px] px-[6px] text-center rounded-[4px] bg-[#E0E4EA]"
                        >
                          <p className="text-[12px] text-[#0E121B] font-normal leading-[120%] tracking-[-0.2px]">
                            {tag}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="date mt-[12px]">
                    <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
                      {formattedDates[index]}
                    </p>
                  </div>
                  <div className="divider w-[343px] bg-[#E0E4EA] h-[1px]"></div>
                </div>
              );
            })
          : null}
      </div>
      <div className="new-note fixed bottom-17 right-4 w-[48px] h-[48px] rounded-full bg-[#335CFF] flex justify-center items-center">
        <img
          src={createNewNote}
          alt="new note"
          className="filter brightness-0 invert"
        />
      </div>
    </div>
  );
}
