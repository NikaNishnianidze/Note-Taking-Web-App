import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import createNewNote from "../../public/assets/images/icon-plus.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Archived() {
  const { notes, search } = useNoteContext();
  const navigate = useNavigate();

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
  const archivedNotes = notes.notes.filter(
    (note) =>
      note.isArchived &&
      (note.title?.toLowerCase().includes(search.toLowerCase()) ||
        note.tags?.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        ))
  );

  return (
    <div className="mb:flex mb:flex-col mb:items-center mb:min-h-screen dk:ml-[300px] dk:w-[290px]">
      <div className="logo w-[343px]  py-[13px] tb:py-[23px] tb:w-[704px] mb:block tb:block dk:hidden">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>

      <div className="main-box w-[375px] tb:w-[768px]  dk:w-[290px] dark:bg-[#0E121B] flex-grow rounded-t-[8px] bg-white py-[20px] px-[16px]">
        <div className="text w-[343px] mt-[20px] flex flex-col gap-[8px]">
          <h1 className="text-[24px] dk:hidden text-[#0E121B] dark:text-white font-bold leading-[120%] tracking-[-0.5px]">
            Archived Notes
          </h1>
          <button
            onClick={() => navigate("/notes/archived/newnote")}
            className="mb:hidden tb:hidden dk:block w-[242px] rounded-[8px] mb-[16px] py-[12px] text-white text-[14px] font-semibold bg-[#335CFF]"
          >
            + Create New Note
          </button>
          <p className="text-[14px] dk:w-[242px] text-[#2B303B] tb:w-[704px] tb:mt-[10px] dark:text-[#E0E4EA] font-normal leading-[130%] tracking-[-0.2px]">
            All your archived notes are stored here. You can restore or delete
            them anytime.
          </p>
        </div>
        <div className="archivednotes flex flex-col items-start w-[343px] mt-[24px]">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((note, index) => {
              return (
                <div
                  onClick={() => handleSeeArchivedNote(index)}
                  key={index}
                  className="flex flex-col gap-[14px] p-[8px] "
                >
                  <div className="title">
                    <p className="text-[16px] dark:text-white text-[#0E121B] font-semibold leading-[120%] tracking-[-0.3px]">
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
                  <div className="divider w-[343px] bg-[#E0E4EA] tb:w-[704px] h-[1px] dark:bg-[#232530] dk:w-[230px]"></div>
                </div>
              );
            })
          ) : (
            <div className="text text-[#E0E4EA] flex flex-col gap-[18px] w-[343px] tb:w-[688px]">
              <p>
                No notes have been archived yet. Move notes here for
                safekeeping, or{" "}
                <span
                  onClick={() => navigate("/notes/newnote")}
                  className="underline text-[#E0E4EA]"
                >
                  create a new note.
                </span>
              </p>
            </div>
          )}
        </div>
        <div
          onClick={() => navigate("/notes/newnote")}
          className="new-note dk:hidden fixed bottom-17 right-4 w-[48px] h-[48px] rounded-full bg-[#335CFF] flex justify-center items-center"
        >
          <img
            src={createNewNote}
            alt="new note"
            className="filter brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
}
