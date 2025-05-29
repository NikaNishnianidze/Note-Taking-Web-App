import { useParams } from "react-router-dom";
import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import deleteIcon from "../../public/assets/images/icon-delete.svg";
import archiveIcon from "../../public/assets/images/icon-archive.svg";
import tagsIcon from "../../public/assets/images/icon-tag.svg";
import statusIcon from "../../public/assets/images/icon-status.svg";
import lastEditedIcon from "../../public/assets/images/icon-clock.svg";
export default function ArchivedNote() {
  const { notes } = useNoteContext();
  const { index } = useParams();
  const note = notes.notes[Number(index)];
  const handleGoBack = () => {
    window.history.back();
  };
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(note.lastEdited));
  return (
    <div className="flex flex-col items-center">
      <div className="logo py-[13px] w-[343px]">
        <img src={logo} alt="logo icon" />
      </div>
      <div className="options flex justify-between items-center w-[343px] mt-[20px]">
        <div
          onClick={handleGoBack}
          className="goback flex items-center gap-[4px]"
        >
          <img
            src={arrowLeft}
            alt="arrow left icon"
            className="w-[18px] h-[18px]"
          />
          <p className="text-[14px] text-[#525866] leading-[120%] tracking-[-0.2px]">
            Go Back
          </p>
        </div>
        <div className="save-cancel-delete-archive flex items-center gap-[16px]">
          <div className="delete">
            <img src={deleteIcon} alt="delete icon" />
          </div>
          <div className="archive">
            <img src={archiveIcon} alt="archive icon" />
          </div>
          <div className="cancel">
            <p className="text-[14px] text-[#525866] font-normal leading-[130%] tracking-[-0.2px]">
              Cancel
            </p>
          </div>
          <div className="save">
            <p className="text-[14px] text-[#335CFF] font-normal leading-[130%] tracking-[-0.2px]">
              Save Note
            </p>
          </div>
        </div>
      </div>
      {note ? (
        <div className="w-[343px] mt-[20px]">
          <div className="title">
            <p className="text-[24px] text-[#0E121B] font-bold leading-[120%] tracking-[-0.5px]">
              {note.title}
            </p>
          </div>
          <div className="basic-info flex flex-col gap-[8px] mt-[16px]">
            <div className="tags flex items-center gap-[74px]">
              <div className="icon flex items-center gap-[8px]">
                <img
                  src={tagsIcon}
                  alt="tags icon"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
                  Tags
                </p>
              </div>
              <div className="items">
                <p className="text-[12px] text-[#0E121B] font-normal leading-[120%] tracking-[-0.2px]">
                  {note.tags.join(", ")}
                </p>
              </div>
            </div>
            <div className="status flex items-center gap-[67px]">
              <div className="icons flex items-center gap-[8px]">
                <img
                  src={statusIcon}
                  alt="status icon"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
                  Status
                </p>
              </div>
              <div className="statusinfo">
                <p className="text-[12px] text-[#0E121B] font-normal leading-[120%] tracking-[-0.2px]">
                  Archived
                </p>
              </div>
            </div>
            <div className="lastedited flex items-center gap-[44px]">
              <div className="last flex items-center gap-[6px]">
                <img
                  src={lastEditedIcon}
                  alt="clock icon"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
                  Last Edited
                </p>
              </div>
              <div className="date">
                <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="divider mt-[12px] w-[343px] h-[1px] bg-[#E0E4EA]"></div>
            <div className="content flex flex-col mt-[12px]">
              {note.content.split("\n").map((line, i) =>
                line.trim() === "" ? (
                  <div key={i} className="h-4" />
                ) : (
                  <p key={i} className="text-sm text-gray-700">
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
