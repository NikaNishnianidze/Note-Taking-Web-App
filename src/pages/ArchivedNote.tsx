import { useParams } from "react-router-dom";
import { useNoteContext } from "../Provider/NoteProvider";
import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import deleteIcon from "../../public/assets/images/icon-delete.svg";
import archiveIcon from "../../public/assets/images/icon-archive.svg";

export default function ArchivedNote() {
  const { notes } = useNoteContext();
  const { index } = useParams();
  const note = notes.notes[Number(index)];
  const handleGoBack = () => {
    window.history.back();
  };
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
    </div>
  );
}
