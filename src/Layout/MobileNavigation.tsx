import { useState } from "react";
import homeIcon from "../../public/assets/images/icon-home.svg";
import searchIcon from "../../public/assets/images/icon-search.svg";
import archiveIcon from "../../public/assets/images/icon-archive.svg";
import tagIcon from "../../public/assets/images/icon-tag.svg";
import settingIcon from "../../public/assets/images/icon-settings.svg";

export default function MobileNavigation() {
  const [active, setActive] = useState<string>("home");
  const activeFilter =
    "filter invert-[29%] sepia-[98%] saturate-[747%] hue-rotate-[189deg] brightness-[95%] contrast-[92%]";
  const iconContainerBase =
    "w-[68.6px] py-[4px] flex justify-center items-center rounded-[4px]";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t-[1px] border-[#E0E4EA] shadow-nav border-gray-200 flex items-center justify-center py-[12px] px-[16px] z-50">
      <div
        onClick={() => setActive("home")}
        className={`${iconContainerBase} ${
          active === "home" ? "bg-[#EBF1FF]" : "bg-white"
        }`}
      >
        <img
          src={homeIcon}
          alt="home icon"
          className={active === "home" ? activeFilter : ""}
        />
      </div>
      <div
        onClick={() => setActive("search")}
        className={`${iconContainerBase} ${
          active === "search" ? "bg-[#EBF1FF]" : "bg-white"
        }`}
      >
        <img
          src={searchIcon}
          alt="search icon"
          className={active === "search" ? activeFilter : ""}
        />
      </div>
      <div
        onClick={() => setActive("archive")}
        className={`${iconContainerBase} ${
          active === "archive" ? "bg-[#EBF1FF]" : "bg-white"
        }`}
      >
        <img
          src={archiveIcon}
          alt="archive icon"
          className={active === "archive" ? activeFilter : ""}
        />
      </div>
      <div
        onClick={() => setActive("tag")}
        className={`${iconContainerBase} ${
          active === "tag" ? "bg-[#EBF1FF]" : "bg-white"
        }`}
      >
        <img
          src={tagIcon}
          alt="tag icon"
          className={active === "tag" ? activeFilter : ""}
        />
      </div>
      <div
        onClick={() => setActive("settings")}
        className={`${iconContainerBase} ${
          active === "settings" ? "bg-[#EBF1FF]" : "bg-white"
        }`}
      >
        <img
          src={settingIcon}
          alt="setting icon"
          className={active === "settings" ? activeFilter : ""}
        />
      </div>
    </div>
  );
}
