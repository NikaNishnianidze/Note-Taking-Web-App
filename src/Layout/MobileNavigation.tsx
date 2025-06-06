import { useState } from "react";
import homeIcon from "../../public/assets/images/icon-home.svg";
import searchIcon from "../../public/assets/images/icon-search.svg";
import archiveIcon from "../../public/assets/images/icon-archive.svg";
import tagIcon from "../../public/assets/images/icon-tag.svg";
import settingIcon from "../../public/assets/images/icon-settings.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../public/assets/images/logo.svg";
import Tags from "../pages/Tags";
import DesktopContent from "../pages/DesktopContent";
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
    <div>
      <div className="mb:fixed tb:fixed mb:block tb:block dk:hidden bottom-0 left-0 w-full bg-white border-t-[1px] dark:bg-[#0E121B] border-[#E0E4EA] dark:border-[#232530] shadow-nav dark:shadow-darknav border-gray-200 mb:flex mb:items-center tb:gap-[76px] mb:justify-center tb:flex tb:items-center tb:justify-center py-[12px] px-[16px] z-50">
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
      <div className="mb:hidden tb:hidden dk:block">
        <div className="fixed left-0 top-0 h-full w-[272px] flex flex-col items-center bg-white dark:bg-[#0E121B] py-[12px] px-[16px] text-white shadow-lg">
          <div className="innerdiv w-[240px]">
            <img
              src={logo}
              alt="logo icon"
              className="dark:filter dark:brightness-0 dark:invert"
            />
            <div
              onClick={() => {
                setActive("home");
                navigate("/notes");
              }}
              className={`${iconContainerBase} ${
                active === "home"
                  ? "bg-[#EBF1FF] dark:bg-[#2B303B]"
                  : "bg-white dark:bg-[#0E121B]"
              } flex items-center gap-[8px] w-[240px] mt-[26px] flex justify-start items-center py-[10px] px-[12px]`}
            >
              <img
                src={homeIcon}
                alt="home icon"
                className={active === "home" ? activeFilter : darkActive}
              />
              <p className="font-medium text-[14px] text-[#2B303B] dark:text-white">
                All Notes
              </p>
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
              } flex items-center gap-[8px] w-[240px] mt-[6px] flex justify-start items-center py-[10px] px-[12px]`}
            >
              <img
                src={archiveIcon}
                alt="archive icon"
                className={active === "archive" ? activeFilter : darkActive}
              />
              <p className="font-medium text-[14px] text-[#2B303B] dark:text-white">
                Archived Notes
              </p>
            </div>
            <div className="divider mt-[8px] w-[240px] h-[1px] bg-[#E0E4EA] dark:bg-[#232530]"></div>
            <div className="tags">
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
