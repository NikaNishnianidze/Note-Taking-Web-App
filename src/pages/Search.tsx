import logo from "../../public/assets/images/logo.svg";
import { useNoteContext } from "../Provider/NoteProvider";
import createNewNote from "../../public/assets/images/icon-plus.svg";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../public/assets/images/icon-search.svg";
import { useState } from "react";

export default function Search() {
  const { notes } = useNoteContext();
  const [search, setSearch] = useState<string>("");
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
  const filteredNotes = notes.notes.filter(
    (note) =>
      note.title?.toLowerCase().includes(search.toLowerCase()) ||
      note.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="logo w-[343px] py-[13px] px-[16px] tb:w-[704px] tb:py-[23px]">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>
      <div className="main-box w-[375px] tb:py-[24px] tb:px-[32px] tb:w-[768px] rounded-t-[8px] flex-grow bg-white py-[20px] px-[16px] dark:bg-[#0E121B]">
        <h1 className="text-[24px] text-[#0E121B] font-bold leading-[120%] tracking-[-0.5px] dark:text-white">
          Search
        </h1>
        <div className="search-input py-[13px] px-[16px] dark:bg-[#0E121B] mt-[16px] w-[343px] tb:w-[704px] border-[1px] border-[#CACFD8] bg-[#F5F7FA] shadow-input flex items-center gap-[8px] rounded-[8px]">
          <img
            src={SearchIcon}
            alt="search icon"
            className="w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="w-[283px] outline-none text-[14px] text-[#0E121B] dark:text-white font-normal leading-[130%] tracking-[-0.2px]"
          />
        </div>
        <div className="notes relative flex flex-col gap-[4px] w-[343px] mt-[16px]">
          {filteredNotes.map((note, index) => {
            const originalIndex = notes.notes.indexOf(note);
            return (
              <div
                onClick={() => handleSeeNote(originalIndex)}
                key={index}
                className="flex flex-col gap-[12px] p-[8px]"
              >
                <div className="title">
                  <p className="text-[16px] text-[#0E121B] dark:text-white font-semibold leading-[120%] tracking-[-0.3px]">
                    {note.title}
                  </p>
                </div>
                <div className="tags flex items-center gap-[4px]">
                  {note.tags.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className="tag py-[2px] px-[6px] text-center rounded-[4px] bg-[#E0E4EA] dark:bg-[#2B303B]"
                      >
                        <p className="text-[12px] text-[#0E121B] dark:text-white font-normal leading-[120%] tracking-[-0.2px]">
                          {tag}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="date mt-[12px]">
                  <p className="text-[12px] text-[#2B303B] dark:text-[#E0E4EA] font-normal leading-[120%] tracking-[-0.2px]">
                    {formattedDates[index]}
                  </p>
                </div>
                <div className="divider w-[343px] tb:w-[704px] bg-[#E0E4EA] h-[1px] dark:bg-[#232530]"></div>
              </div>
            );
          })}
          <div
            onClick={() => {
              navigate("/notes/newnote");
            }}
            className="new-note fixed bottom-17 right-4 w-[48px] h-[48px] rounded-full bg-[#335CFF] flex justify-center items-center"
          >
            <img
              src={createNewNote}
              alt="new note"
              className="filter brightness-0 invert"
            />
          </div>
        </div>
        {filteredNotes.length < 1 ? (
          <div className="mt-[16px] flex flex-col w-[343px] gap-[16px] tb:w-[688px]">
            <p className="text-[14px] font-normal text-[#2B303B] dark:text-[#CACFD8] ">
              All notes matching{" "}
              <span className="dark:text-white">{`"${search}"`}</span> are
              displayed below.
            </p>
            <p className="text-[14px] font-normal text-[#2B303B] dark:text-[#CACFD8]">
              No notes match your search. Try a different keyword or{" "}
              <span className="underline dark:text-white">
                create a new note.
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
