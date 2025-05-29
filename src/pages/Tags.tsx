import { useNavigate } from "react-router-dom";
import logo from "../../public/assets/images/logo.svg";
import tagsIcon from "../../public/assets/images/icon-tag.svg";

const tagList = [
  "cooking",
  "dev",
  "fitness",
  "health",
  "personal",
  "react",
  "recipes",
  "shopping",
  "travel",
  "typescript",
];

export default function Tags() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-[11px]">
      <div className="logo w-[343px] py-[13px]">
        <img src={logo} alt="logo icon" />
      </div>
      <div className="title mt-[20px] w-[343px]">
        <p className="text-[#0E121B] text-[24px] font-bold leading-[120%] tracking-[-0.5px] mb-[16px]">
          Tags
        </p>
      </div>
      <div className="tag-list flex flex-col items-center gap-[11.5px]">
        {tagList.map((tag, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[8px] w-[343px]"
          >
            <div className="list flex items-center gap-[8px] w-[343px]">
              <img
                src={tagsIcon}
                alt="tags icon"
                className="w-[20px] h-[20px]"
              />
              <button key={tag} onClick={() => navigate(`/notes/tags/${tag}`)}>
                {tag}
              </button>
            </div>
            <div className="divider mt-[12px] w-[343px] h-[1px] bg-[#E0E4EA]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
