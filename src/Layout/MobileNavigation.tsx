import { useState } from "react";
import homeIcon from "../../public/assets/images/icon-home.svg";
import searchIcon from "../../public/assets/images/icon-search.svg";
import archiveIcon from "../../public/assets/images/icon-archive.svg";
import tagIcon from "../../public/assets/images/icon-tag.svg";
import settingIcon from "../../public/assets/images/icon-settings.svg";
import { useNavigate } from "react-router-dom";

export default function MobileNavigation() {
  const [active, setActive] = useState<string>("home");
  const navigate = useNavigate();
  const darkActive =
    "dark:filter dark:invert-[29%] dark:sepia-[98%] dark:saturate-[747%] dark:hue-rotate-[189deg] dark:brightness-[95%] dark:contrast-[92%]";
  const activeFilter =
    "filter invert-[29%] sepia-[98%] saturate-[747%] hue-rotate-[189deg] brightness-[95%] contrast-[92%] dark:filter dark:invert-[29%] dark:sepia-[98%] dark:saturate-[747%] dark:hue-rotate-[189deg] dark:brightness-[95%] dark:contrast-[92%]";
  const iconContainerBase =
    "w-[68.6px] py-[4px] flex justify-center items-center rounded-[4px]";
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t-[1px] dark:bg-[#0E121B] border-[#E0E4EA] dark:border-[#232530] shadow-nav dark:shadow-darknav border-gray-200 flex items-center justify-center py-[12px] px-[16px] z-50">
      <div
        onClick={() => {
          setActive("home");
          navigate("/notes");
        }}
        className={`${iconContainerBase} ${
          active === "home"
            ? "bg-[#EBF1FF] dark:bg-[#2B303B]"
            : "bg-white dark:bg-[#0E121B]"
        }`}
      >
        <img
          src={homeIcon}
          alt="home icon"
          className={active === "home" ? activeFilter : darkActive}
        />
      </div>
      <div
        onClick={() => {
          setActive("search");
          navigate("/notes/search");
        }}
        className={`${iconContainerBase} ${
          active === "search"
            ? "bg-[#EBF1FF] dark:bg-[#2B303B]"
            : "bg-white dark:bg-[#0E121B]"
        }`}
      >
        <img
          src={searchIcon}
          alt="search icon"
          className={active === "search" ? activeFilter : darkActive}
        />
      </div>
      <div
        onClick={() => {
          setActive("archive");
          navigate("/notes/archived");
        }}
        className={`${iconContainerBase} ${
          active === "archive"
            ? "bg-[#EBF1FF] dark:bg-[#2B303B]"
            : "bg-white dark:bg-[#0E121B]"
        }`}
      >
        <img
          src={archiveIcon}
          alt="archive icon"
          className={active === "archive" ? activeFilter : darkActive}
        />
      </div>
      <div
        onClick={() => {
          setActive("tag");
          navigate("/notes/tags");
        }}
        className={`${iconContainerBase} ${
          active === "tag"
            ? "bg-[#EBF1FF]  dark:bg-[#2B303B]"
            : "bg-white dark:bg-[#0E121B]"
        }`}
      >
        <img
          src={tagIcon}
          alt="tag icon"
          className={active === "tag" ? activeFilter : darkActive}
        />
      </div>
      <div
        onClick={() => {
          setActive("settings");
          navigate("/notes/settings");
        }}
        className={`${iconContainerBase} ${
          active === "settings"
            ? "bg-[#EBF1FF] dark:bg-[#2B303B]"
            : "bg-white dark:bg-[#0E121B]"
        }`}
      >
        <img
          src={settingIcon}
          alt="setting icon"
          className={active === "settings" ? activeFilter : darkActive}
        />
      </div>
    </div>
  );
}
