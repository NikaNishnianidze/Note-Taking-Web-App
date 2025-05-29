import logo from "../../public/assets/images/logo.svg";
import sunIcon from "../../public/assets/images/icon-sun.svg";
import fontIcon from "../../public/assets/images/icon-font.svg";
import changePasswordIcon from "../../public/assets/images/icon-lock.svg";
import logoutIcon from "../../public/assets/images/icon-logout.svg";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="logo w-[343px] py-[13px]">
        <img src={logo} alt="logo icon" />
      </div>
      <h1 className="mt-[24px] w-[343px] text-[24px] text-[#0E121B] font-bold leading-[120%] tracking-[-0.5px]">
        Settings
      </h1>
      <div className="settings flex flex-col w-[343px] gap-[24px] mt-[24px]">
        <div
          onClick={() => {
            navigate("/notes/settings/color-theme");
          }}
          className="theme flex items-center gap-[8px]"
        >
          <img src={sunIcon} alt="sun icon" className="w-[20px] h-[20px]" />
          <p className="text-[14px] font-medium text-[#0E121B]">Color Theme</p>
        </div>

        <div
          onClick={handleLogout}
          className="logout flex items-center gap-[8px]"
        >
          <img src={logoutIcon} alt="logout" className="w-[20px] h-[20px]" />
          <p className="text-[14px] font-medium text-[#0E121B]">Logout</p>
        </div>
      </div>
    </div>
  );
}
