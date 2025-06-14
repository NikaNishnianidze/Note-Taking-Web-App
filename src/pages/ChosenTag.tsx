import { useParams } from "react-router-dom";
import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import deleteIcon from "../../public/assets/images/icon-delete.svg";
import archiveIcon from "../../public/assets/images/icon-archive.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import tagsIcon from "../../public/assets/images/icon-tag.svg";
import lastEditedIcon from "../../public/assets/images/icon-clock.svg";
import { useState } from "react";

export default function ChosenTag() {
  const { notes, setNotes } = useNoteContext();
  const { index, tag } = useParams();
  const filteredNotes = notes.notes.filter(
    (note) =>
      note.tags && note.tags.some((t) => t.toLowerCase() === tag?.toLowerCase())
  );
  const note = filteredNotes[Number(index)];
  const [deleteBox, setDeleteBox] = useState<boolean>(false);
  const [archiveBox, setArchiveBox] = useState<boolean>(false);
  const [archived, setArchived] = useState<boolean>(false);
  const handleGoBack = () => {
    window.history.back();
  };
  const handleDelete = () => {
    const newNotes = notes.notes.filter((_, i) => i !== Number(index));
    setNotes({ notes: newNotes });
    // Go back to tag list
    window.history.back();
  };
  const handleArchive = () => {
    if (index === undefined) return;

    const updatedNotes = notes.notes.map((note, i) =>
      i === Number(index) ? { ...note, isArchived: true } : note
    );
    setNotes({ notes: updatedNotes });
    setArchiveBox(false);
    setArchived(true);
  };
  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-red-500 text-lg">Note not found for this tag.</p>
      </div>
    );
  }
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(note.lastEdited));
  return (
    <div
      className="flex flex-col items-center
    dk:static absolute
    dk:w-[500px] w-full
    dk:left-auto left-0 dk:right-auto right-0
    dk:top-auto top-0
    dk:bottom-0 bottom-[56px]
    dk:z-auto z-50
    dk:mx-0 mx-auto
    bg-white dark:bg-[#0E121B] dk:ml-[40px]"
    >
      <div className="logo py-[13px] w-[343px] tb:w-[704px] tb:py-[23px] dk:hidden">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>
      {deleteBox && (
        <div className="fixed inset-0 bg-[#0E121B]/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[343px] dark:bg-[#2B303B] dark:border-[1px] dark:border-[#525866] shadow-lg p-[20px]">
            <div className="deteleicon-text flex items-start gap-[16px]">
              <div className="icon dark:bg-[#525866)] dark:w-[40px] dark:h-[40px] dark:rounded-[8px]">
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  className="w-[24px] h-[25px] dark:filter dark:brightness-0 dark:invert"
                />
              </div>
              <div className="text flex flex-col gap-[6px] w-[247px]">
                <p className="text-[16px] text-[#0E121B] font-semibold leading-[120%] tracking-[-0.3px] dark:text-white">
                  Delete Note
                </p>
                <p className="text-[14px] text-[#2B303B] font-normal leading-[130%] tracking-[-0.2px] dark:text-[#E0E4EA]">
                  Are you sure you want to permanently delete this note? This
                  action cannot be undone.
                </p>
              </div>
            </div>
            <div className="buttons mt-[21px] flex justify-end items-center gap-[16px]">
              <button
                onClick={() => setDeleteBox(false)}
                className="rounded-[8px] w-[78px] py-[12px] bg-[#F3F5F8] text-[14px] text-[#525866] font-medium leading-[120%] tracking-[-0.2px]"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="w-[110px] rounded-[8px] py-[12px] bg-[#FB3748] text-white font-medium leading-[120%] text-[14px] trackin-[-0.2px]"
              >
                Delete Note
              </button>
            </div>
          </div>
        </div>
      )}
      {archiveBox && (
        <div className="fixed inset-0 bg-[#0E121B]/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[343px] dark:bg-[#2B303B] dark:border-[1px] dark:border-[#525866] shadow-lg p-[20px]">
            <div className="deteleicon-text flex items-start gap-[16px]">
              <div className="icon">
                <img
                  src={archiveIcon}
                  alt="archive icon"
                  className="w-[24px] h-[25px] dark:filter dark:brightness-0 dark:invert"
                />
              </div>
              <div className="text flex flex-col gap-[6px] w-[247px]">
                <p className="text-[16px] text-[#0E121B] dark:text-white font-semibold leading-[120%] tracking-[-0.3px]">
                  Archive Note
                </p>
                <p className="text-[14px] text-[#2B303B] dark:text-[#E0E4EA] font-normal leading-[130%] tracking-[-0.2px]">
                  Are you sure you want to archive this note? You can find it in
                  the Archived Notes section and restore it anytime.
                </p>
              </div>
            </div>
            <div className="buttons mt-[21px] flex justify-end items-center gap-[16px]">
              <button
                onClick={() => setArchiveBox(false)}
                className="rounded-[8px] w-[78px] py-[12px] bg-[#F3F5F8] text-[14px] text-[#525866] font-medium leading-[120%] tracking-[-0.2px]"
              >
                Cancel
              </button>
              <button
                onClick={handleArchive}
                className="w-[110px] rounded-[8px] py-[12px] bg-[#335CFF] text-white font-medium leading-[120%] text-[14px] trackin-[-0.2px]"
              >
                Archive Note
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className="main-box 
  w-[375px] tb:w-[768px] dk:w-[588px] 
  flex-grow 
  py-[20px] px-[16px] tb:py-[24px] tb:px-[32px] dk:py-[2px] 
  bg-white dark:bg-[#0E121B] 
  rounded-t-[8px] 
  absolute dk:static 
  top-0 left-0 tb:left-0 dk:left-auto 
  z-50 dk:z-auto"
      >
        <div className="options flex justify-between items-center w-[343px] mt-[20px] tb:w-[704px]">
          <div
            onClick={handleGoBack}
            className="goback dk:hidden flex items-center gap-[4px]"
          >
            <img
              src={arrowLeft}
              alt="arrow left icon"
              className="w-[18px] h-[18px] dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[14px] text-[#525866] dark:text-white leading-[120%] tracking-[-0.2px]">
              Go Back
            </p>
          </div>
          <div className="save-cancel-delete-archive dk:hidden flex items-center gap-[16px]">
            <div className="delete">
              <img
                onClick={() => setDeleteBox(true)}
                src={deleteIcon}
                alt="delete icon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
            <div className="archive">
              <img
                onClick={() => setArchiveBox(true)}
                src={archiveIcon}
                alt="archive icon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
            <div onClick={handleGoBack} className="cancel">
              <p className="text-[14px] text-[#525866] dark:text-white font-normal leading-[130%] tracking-[-0.2px]">
                Cancel
              </p>
            </div>
            <div onClick={handleGoBack} className="save">
              <p className="text-[14px] text-[#335CFF] font-normal leading-[130%] tracking-[-0.2px]">
                Save Note
              </p>
            </div>
          </div>
        </div>
        <div className="titile mt-[12px] w-[343px] ">
          <p className="text-[24px] text-[#0E121B] tb:w-[704px] dk:w-[450px] dark:text-white font-bold leading-[120%] tracking-[-0.5px]">
            {note.title}
          </p>
        </div>
        <div className="tags flex items-center gap-[74px] w-[343px] mt-[16px]">
          <div className="icon flex items-center gap-[8px]">
            <img
              src={tagsIcon}
              alt="tags icon"
              className="w-[16px] h-[16px] dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[12px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[120%] tracking-[-0.2px]">
              Tags
            </p>
          </div>
          <div className="items">
            <p className="text-[12px] text-[#0E121B] dark:text-white font-normal leading-[120%] tracking-[-0.2px]">
              {note.tags.join(", ")}
            </p>
          </div>
        </div>
        <div className="lastedited flex items-center gap-[42px] w-[343px] mt-[12px]">
          <div className="last flex items-center gap-[6px]">
            <img
              src={lastEditedIcon}
              alt="clock icon"
              className="w-[16px] h-[16px] dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[12px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[120%] tracking-[-0.2px]">
              Last Edited
            </p>
          </div>
          <div className="date">
            <p className="text-[12px] text-[#2B303B] dark:text-[#CACFD8] font-normal leading-[120%] tracking-[-0.2px]">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="divider mt-[12px] w-[343px] tb:w-[704px] dk:w-[330px] h-[1px] bg-[#E0E4EA] dark:bg-[#232530]"></div>
        <div className="content flex flex-col mt-[12px] w-[343px]">
          {note.content.split("\n").map((line, i) =>
            line.trim() === "" ? (
              <div key={i} className="h-4" />
            ) : (
              <p key={i} className="text-sm text-gray-700 dark:text-[#F3F5F8]">
                {line}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
