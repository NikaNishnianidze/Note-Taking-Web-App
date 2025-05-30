import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import { useNoteContext } from "../Provider/NoteProvider";
import { useState } from "react";
import tagsIcon from "../../public/assets/images/icon-tag.svg";
import clockIcon from "../../public/assets/images/icon-clock.svg";
import type { IInfos } from "../data";

export default function CreateNote() {
  const { notes, setNotes } = useNoteContext();
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);
  const [savedDate, setSavedDate] = useState<Date | null>(null);
  const [noteText, setNoteText] = useState<string>("");

  const handleGoback = () => {
    window.history.back();
  };
  const handleSaveNote = () => {
    const now = new Date();

    const newNote: IInfos = {
      title: title.trim() || "Untitled Note",
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      content: noteText,
      lastEdited: now.toISOString(),
      isArchived: false,
    };

    setNotes((prevNotes) => ({
      ...prevNotes,
      notes: [...prevNotes.notes, newNote],
    }));

    setSaved(true);
    setSavedDate(now);
    window.history.back();
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
      <div className="main-box w-[375px] flex-grow rounded-t-[8px] bg-white py-[20px] px-[16px] dark:bg-[#0E121B]">
        <div className="options flex items-center justify-between w-[343px] mt-[20px]">
          <div
            onClick={handleGoback}
            className="goback flex items-center gap-[8px]"
          >
            <img
              src={arrowLeft}
              alt="arrow left"
              className="w-[18px] h-[18px] dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[#525866] text-[14px] font-normal leading-[130%] dark:text-white tracking-[-0.2px]">
              Go Back
            </p>
          </div>
          <div className="cancel-save flex items-center gap-[16px]">
            <p
              onClick={handleGoback}
              className="text-[#525866] text-[14px] font-normal dark:text-white leading-[130%] tracking-[-0.2px]"
            >
              Cancel
            </p>
            <p
              onClick={() => {
                setSaved(true);
                setSavedDate(new Date());
                handleSaveNote();
              }}
              className="text-[14px] text-[#335CFF] font-normal leading-[130%] tracking-[-0.2px] cursor-pointer"
            >
              Save Note
            </p>
          </div>
        </div>
        <div className="content flex flex-col mt-[24px]">
          <div className="title w-[343px]">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="outline-none text-[20px] font-bold leading-[120%] tracking-[-0.3px] text-[#0E121B] placeholder-[#0E121B] placeholder-white"
              placeholder="Enter a title…"
            />
          </div>
          <div className="basic-content flex flex-col gap-[9px] mt-[18px]">
            <div className="tags flex items-center justify-between w-[343px]">
              <div className="icons w-[115px] flex items-center gap-[6px]">
                <img
                  src={tagsIcon}
                  alt="tags icon"
                  className="w-[16px] h-[16px] dark:filter dark:brightness-0 dark:invert"
                />
                <p className="text-[12px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[120%] tracking-[-0.2px]">
                  Tags
                </p>
              </div>
              <textarea
                onChange={(e) => setTags(e.target.value)}
                className="outline-none w-full max-w-[220px]  text-[#99A0AE] placeholder-[#99A0AE] placeholder-[#99A0AE] text-[12px] font-normal leading-[120%] tracking-[-0.2px] resize-none"
                placeholder="Add tags separated by commas (e.g. Work, Planning)"
              />
            </div>
            <div className="edited flex items-center w-[343px] justify-between">
              <div className="icons flex items-center gap-[6px]">
                <img
                  src={clockIcon}
                  alt="date icon"
                  className="w-[16px] h-[16px] dark:filter dark:brightness-0 dark:invert"
                />
                <p className="text-[12px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[120%] tracking-[-0.2px]">
                  Last Edited
                </p>
              </div>
              <p className="w-[220px] text-[12px] text-[#99A0AE] font-normal leading-[120%] tracking-[-0.2px]">
                {saved && savedDate
                  ? savedDate.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Not Saved"}
              </p>
            </div>
          </div>
        </div>
        <div className="note-text w-[343px] mt-[25px]">
          <input
            onChange={(e) => setNoteText(e.target.value)}
            type="text"
            className="w-[343px] outline-none h-full text-[12px] dark:placeholder-[#F3F5F8] text-[#2B303B] placeholder-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]"
            placeholder="Start typing your note here…"
          />
        </div>
      </div>
    </div>
  );
}
