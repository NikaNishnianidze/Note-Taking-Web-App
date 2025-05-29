import logo from "../../public/assets/images/logo.svg";
import arrowLeft from "../../public/assets/images/icon-arrow-left.svg";
import sunIcon from "../../public/assets/images/icon-sun.svg";
import moonIcon from "../../public/assets/images/icon-moon.svg";
import systemIcon from "../../public/assets/images/icon-system-theme.svg";
import { useState } from "react";

export default function ColorTheme() {
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
    <div className="flex flex-col items-center">
      <div className="logo w-[343px] py-[13px]">
        <img src={logo} alt="logo icon" />
      </div>
      <div
        onClick={goBack}
        className="goback w-[343px] mt-[24px] flex items-center gap-[8px]"
      >
        <img src={arrowLeft} alt="arrow left" className="w-[20px] h-[20px]" />
        <p>Settings</p>
      </div>
      <div className="title flex flex-col w-[343px] mt-[12px] ">
        <h1 className="text-[24px] text-[#0E121B] font-bold leading-[120%] tracking-[-0.5px]">
          Color Theme
        </h1>
        <p className="text-[14px] font-normal text-[#2B303B] leading-[130%] tracking-[-0.2px]">
          Choose your color theme:
        </p>
      </div>
      <div className="modes flex flex-col gap-[16px]">
        <div className="lightmode w-[343px] flex items-center gap-[16px] border-[1px] border-[#E0E4EA] rounded-[12px] p-[16px] mt-[20px]">
          <div className="icon w-[40px] h-[40px] border-[1px] border-[#E0E4EA] rounded-[12px] flex items-center justify-center">
            <img src={sunIcon} alt="sunIcon" />
          </div>
          <div className="text flex flex-col gap-[6px] w-[223px]">
            <h2 className="font-medium text-[14px] text-[#0E121B] leading-[120%] tracking-[-0.2px]">
              Light Mode
            </h2>
            <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
              Pick a clean and classic light theme
            </p>
          </div>
          <div className="checkbox">
            <input
              checked={lightMode}
              onChange={(e) => setLightChecked(e.target.checked)}
              type="checkbox"
              className="w-[16px] h-[16px] appearance-none rounded-full border border-[#E0E4EA] checked:border-[#335CFF] checked:bg-white cursor-pointer checked:border-[4px] transition-colors"
            />
          </div>
        </div>
        <div className="darkmode w-[343px] flex items-center gap-[16px] border-[1px] border-[#E0E4EA] rounded-[12px] p-[16px] mt-[20px]">
          <div className="icon w-[40px] h-[40px] border-[1px] border-[#E0E4EA] rounded-[12px] flex items-center justify-center">
            <img src={moonIcon} alt="moon icon" />
          </div>
          <div className="text flex flex-col gap-[6px] w-[223px]">
            <h2 className="font-medium text-[14px] text-[#0E121B] leading-[120%] tracking-[-0.2px]">
              Dark Mode
            </h2>
            <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
              Select a sleek and modern dark theme
            </p>
          </div>
          <div className="checkbox">
            <input
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              type="checkbox"
              className="w-[16px] h-[16px] appearance-none rounded-full border border-[#E0E4EA] checked:border-[#335CFF] checked:bg-white cursor-pointer checked:border-[4px] transition-colors"
            />
          </div>
        </div>
        <div className="systemMode w-[343px] flex items-center gap-[16px] border-[1px] border-[#E0E4EA] rounded-[12px] p-[16px] mt-[20px]">
          <div className="icon w-[40px] h-[40px] border-[1px] border-[#E0E4EA] rounded-[12px] flex items-center justify-center">
            <img src={systemIcon} alt="system icon" />
          </div>
          <div className="text flex flex-col gap-[6px] w-[223px]">
            <h2 className="font-medium text-[14px] text-[#0E121B] leading-[120%] tracking-[-0.2px]">
              System
            </h2>
            <p className="text-[12px] text-[#2B303B] font-normal leading-[120%] tracking-[-0.2px]">
              Adapts to your device’s theme
            </p>
          </div>
          <div className="checkbox">
            <input
              checked={systemMode}
              onChange={(e) => setSystemMode(e.target.checked)}
              type="checkbox"
              className="w-[16px] h-[16px] appearance-none rounded-full border border-[#E0E4EA] checked:border-[#335CFF] checked:bg-white cursor-pointer checked:border-[4px] transition-colors"
            />
          </div>
        </div>
        <div className="apply mt-[4px] w-[343px] flex justify-end">
          <button
            onClick={handleChangeMode}
            className="py-[12px] w-[132px] rounded-[8px] bg-[#335CFF] text-[14px] text-white font-medium leading-[120%] tracking-[-0.2px]"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
}
