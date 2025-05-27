import logo from "../../public/assets/images/logo.svg";
import { useNoteContext } from "../Provider/NoteProvider";
import createNewNote from "../../public/assets/images/icon-plus.svg";
import { useNavigate } from "react-router-dom";

export default function AllNotes() {
  const { notes } = useNoteContext();
  const navigate = useNavigate();
  const formattedDates = notes.notes.map((note) => {
    const date = new Date(note.lastEdited);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  });
  const handleSeeNote = (index: number) => {
    navigate(`/notes/${index}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="logo w-[343px] py-[13px] px-[16px]">
        <img src={logo} alt="logo icon" />
      </div>
      <div className="main-box w-[375px] rounded-t-[8px] bg-white py-[20px] px-[16px]">
        <h1 className="text-[24px] text-[#0E121B] font-bold leading-[120%] tracking-[-0.5px]">
          All Notes
        </h1>
        <div className="notes relative flex flex-col gap-[4px] w-[343px] mt-[16px]">
          {notes.notes.map((note, index) => {
            return (
              <div
                onClick={() => handleSeeNote(index)}
                key={index}
                className="flex flex-col gap-[12px] p-[8px]"
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
