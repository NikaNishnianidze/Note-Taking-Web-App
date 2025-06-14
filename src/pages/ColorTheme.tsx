import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import sunIcon from "../../public/assets/images/icon-sun.svg";
import moonIcon from "../../public/assets/images/icon-moon.svg";
import systemIcon from "../../public/assets/images/icon-system-theme.svg";
import { useState } from "react";

export default function ColorTheme({ noMargin = false }) {
  const [lightMode, setLightChecked] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [systemMode, setSystemMode] = useState<boolean>(false);
  const goBack = () => {
    window.history.back();
  };
  const handleChangeMode = () => {
    if (systemMode) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else {
      if (darkMode) {
        document.body.classList.add("dark");
      } else if (lightMode) {
        document.body.classList.remove("dark");
      }
    }
  };
  return (
    <div
      className={`flex flex-col items-center dk:w-[500px] mb:fixed tb:fixed dk:static top-0 left-0 w-full mb:bottom-[56px] tb:bottom-[56px] dk:bottom-0 z-50 bg-white dark:bg-[#0E121B] ${
        noMargin ? "" : "dk:ml-[600px]"
      } dk:w-[528px]`}
    >
      <div className="logo w-[343px] py-[13px] tb:w-[704px] tb:py-[23px] dk:hidden">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>
      <div className="main-box w-[375px] dk:w-[528px] tb:w-[768px] tb:py-[24px] tb:px-[32px] flex-grow rounded-t-[8px] bg-white py-[20px] px-[16px] dark:bg-[#0E121B]">
        <div
          onClick={goBack}
          className="goback w-[343px] dk:hidden tb:w-[704px] mt-[24px] flex items-center gap-[8px]"
        >
          <img
            src={arrowLeft}
            alt="arrow left"
            className="w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
          />
          <p className="dark:text-white">Settings</p>
        </div>
        <div className="title flex flex-col w-[343px] mt-[12px] ">
          <h1 className="text-[24px] text-[#0E121B] dark:text-white font-bold leading-[120%] tracking-[-0.5px]">
            Color Theme
          </h1>
          <p className="text-[14px] font-normal text-[#2B303B] dark:text-[#CACFD8] leading-[130%] tracking-[-0.2px]">
            Choose your color theme:
          </p>
        </div>
        <div className="modes flex flex-col gap-[16px]">
          <div className="lightmode w-[343px] tb:w-[704px] dk:w-[528px] flex items-center dark:bg-[#232530] dark:border-[#232530] gap-[16px] border-[1px] border-[#E0E4EA] rounded-[12px] p-[16px] mt-[20px]">
            <div className="icon w-[40px] h-[40px] dark:bg-[#0E121B] dark:border-[#2B303B] border-[1px] border-[#E0E4EA] rounded-[12px] flex items-center justify-center">
              <img
                src={sunIcon}
                alt="sunIcon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
            <div className="text flex flex-col gap-[6px] w-[223px] tb:w-[584px] dk:w-[528px]">
              <h2 className="font-medium text-[14px] text-[#0E121B] leading-[120%] tracking-[-0.2px] dark:text-white">
                Light Mode
              </h2>
              <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px] dark:text-[#CACFD8]">
                Pick a clean and classic light theme
              </p>
            </div>
            <div className="checkbox">
              <input
                checked={lightMode}
                onChange={(e) => setLightChecked(e.target.checked)}
                type="checkbox"
                className="w-[16px] h-[16px] appearance-none rounded-full border border-[#E0E4EA] dark:border-[#525866] checked:border-[#335CFF] checked:bg-white cursor-pointer checked:border-[4px] transition-colors"
              />
            </div>
          </div>
          <div className="darkmode w-[343px] dk:w-[528px] dark:bg-[#232530] tb:w-[704px] dark:border-[#232530] flex items-center gap-[16px] border-[1px] border-[#E0E4EA] rounded-[12px] p-[16px] mt-[20px]">
            <div className="icon w-[40px] h-[40px] dark:bg-[#0E121B] dark:border-[#2B303B] border-[1px] border-[#E0E4EA] rounded-[12px] flex items-center justify-center">
              <img
                src={moonIcon}
                alt="moon icon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
            <div className="text flex flex-col gap-[6px] w-[223px] tb:w-[584px] dk:w-[528px]">
              <h2 className="font-medium text-[14px] text-[#0E121B] leading-[120%] tracking-[-0.2px] dark:text-white">
                Dark Mode
              </h2>
              <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px] dark:text-[#CACFD8]">
                Select a sleek and modern dark theme
              </p>
            </div>
            <div className="checkbox">
              <input
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                type="checkbox"
                className="w-[16px] h-[16px] appearance-none rounded-full border border-[#E0E4EA] dark:border-[#525866] checked:border-[#335CFF] checked:bg-white cursor-pointer checked:border-[4px] transition-colors"
              />
            </div>
          </div>
          <div className="systemMode w-[343px] tb:w-[704px] dk:w-[528px] dark:bg-[#232530] dark:border-[#232530] flex items-center gap-[16px] border-[1px] border-[#E0E4EA] rounded-[12px] p-[16px] mt-[20px]">
            <div className="icon w-[40px] h-[40px] dark:bg-[#0E121B] dark:border-[#2B303B] border-[1px] border-[#E0E4EA] rounded-[12px] flex items-center justify-center">
              <img
                src={systemIcon}
                alt="system icon"
                className="dark:filter dark:brightness-0 dark:invert"
              />
            </div>
            <div className="text flex flex-col gap-[6px] w-[223px] tb:w-[584px] dk:w-[528px]">
              <h2 className="font-medium text-[14px] text-[#0E121B] leading-[120%] tracking-[-0.2px] dark:text-white">
                System
              </h2>
              <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px] dark:text-[#CACFD8]">
                Adapts to your device’s theme
              </p>
            </div>
            <div className="checkbox">
              <input
                checked={systemMode}
                onChange={(e) => setSystemMode(e.target.checked)}
                type="checkbox"
                className="w-[16px] h-[16px] appearance-none rounded-full border border-[#E0E4EA] dark:border-[#525866] checked:border-[#335CFF] checked:bg-white cursor-pointer checked:border-[4px] transition-colors"
              />
            </div>
          </div>
          <div className="apply mt-[4px] w-[343px] flex justify-end tb:w-[704px] dk:w-[528px]">
            <button
              onClick={handleChangeMode}
              className="py-[12px] w-[132px] rounded-[8px] bg-[#335CFF] text-[14px] text-white font-medium leading-[120%] tracking-[-0.2px]"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
