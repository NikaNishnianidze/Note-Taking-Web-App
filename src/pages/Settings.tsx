import logo from "../../public/assets/images/logo.svg";
import sunIcon from "../../public/assets/images/icon-sun.svg";
import logoutIcon from "../../public/assets/images/icon-logout.svg";
import { useNavigate } from "react-router-dom";

export default function Settings({ noMargin = false }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        noMargin ? "dk:ml-[430px]" : "dk:ml-[430px]"
      } dk:w-[258px]`}
    >
      <div className="logo w-[343px] py-[13px] tb:w-[704px] tb:py-[23px] dk:hidden">
        <img
          src={logo}
          alt="logo icon"
          className="dark:filter dark:brightness-0 dark:invert"
        />
      </div>
      <div className="main-box w-[375px] tb:w-[768px] dk:w-[528px] tb:py-[24px] tb:px-[32px] flex-grow rounded-t-[8px] bg-white py-[20px] px-[16px] dark:bg-[#0E121B]">
        <h1 className="mt-[24px] dk:hidden w-[343px] text-[24px] text-[#0E121B] dark:text-white font-bold leading-[120%] tracking-[-0.5px]">
          Settings
        </h1>
        <div className="settings flex flex-col w-[343px] gap-[24px] mt-[24px]">
          <div
            onClick={() => {
              navigate("/notes/settings/color-theme");
            }}
            className="theme flex items-center gap-[8px]"
          >
            <img
              src={sunIcon}
              alt="sun icon"
              className="w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[14px] font-medium text-[#0E121B] dark:text-white">
              Color Theme
            </p>
          </div>

          <div
            onClick={handleLogout}
            className="logout flex items-center gap-[8px]"
          >
            <img
              src={logoutIcon}
              alt="logout"
              className="w-[20px] h-[20px] dark:filter dark:brightness-0 dark:invert"
            />
            <p className="text-[14px] font-medium text-[#0E121B] dark:text-white">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
