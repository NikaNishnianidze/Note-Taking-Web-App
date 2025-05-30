import logo from "../../public/assets/images/logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import infoCircle from "../../public/assets/images/icon-info.svg";
import type { IInputs } from "../Inputs";
import showPasswordIcon from "../../public/assets/images/icon-show-password.svg";
import hidePasswordIcon from "../../public/assets/images/icon-hide-password.svg";
import { useState } from "react";
import googleIcon from "../../public/assets/images/icon-google.svg";
import { useNavigate } from "react-router-dom";

const schema: yup.ObjectSchema<IInputs> = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("email is required"),
  password: yup.string().required("password is required"),
});
export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const onSubmit: SubmitHandler<IInputs> = (data) => {
    event?.preventDefault();
    window.scrollTo(0, 0);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/login");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container w-[343px] py-[48px] px-[16px] dark:bg-[#0E121B] bg-white rounded-[12px]">
        <div className="logo flex justify-center">
          <img
            src={logo}
            alt="logo icon"
            className="dark:filter dark:brightness-0 dark:invert"
          />
        </div>
        <h1 className="mt-[24px] text-center text-[#0E121B] text-[24px] font-bold dark:text-white">
          Create Your Account
        </h1>
        <p className="mt-[8px] text-center text-[14px] text-[#525866] dark:text-[#CACFD8] leading-[18.2px] tracking-[-0.2px]">
          Sign up to start organizing your notes and boost your productivity.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email mt-[40px] flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-[14px] dark:text-white text-[#0E121B] font-semibold"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="email@example.com"
              className="w-[311px] py-[12px] px-[16px] shadow-input rounded-[8px] border-[1px] border-[#CACFD8] dark:bg-[#0E121B] dark:border-[#525866] outline-none text-[14px] font-normal text-[#717784]"
            />
            <div className="errors">
              {errors.email && (
                <p className="text-[12px] text-[#D92D2A] flex items-center gap-[4px]">
                  <img src={infoCircle} alt="info icon" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="password relative mt-[16px] flex flex-col gap-[6px] ">
            <label
              htmlFor="password"
              className="text-[14px] dark:text-white text-[#0E121B] font-semibold"
            >
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              {...register("password")}
              className="w-[311px] py-[12px] px-[16px] shadow-input rounded-[8px] dark:border-[#525866] border-[1px] border-[#CACFD8] outline-none text-[14px] font-normal text-[#717784]"
            />
            <img
              src={isPasswordVisible ? hidePasswordIcon : showPasswordIcon}
              alt="show/hide password icon"
              style={{ cursor: "pointer" }}
              className="w-[20px] h-[20px] absolute right-[15px] top-[65%] transform -translate-y-[50%]"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            />
            <div className="errors">
              {errors.password && (
                <p className="text-[12px] text-[#D92D2A] flex items-center gap-[4px]">
                  <img src={infoCircle} alt="info icon" />
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-[16px] w-[311px] py-[12.5px] rounded-[8px] bg-[#335CFF] text-white text-[14px] font-semibold "
          >
            Sign up
          </button>
        </form>
        <div className="divider w-[311px] h-[1px] bg-[#CACFD8] mt-[16px]"></div>
        <p className="mt-[24px] text-center text-[14px] dark:text-[#CACFD8] text-[#525866] font-normal">
          Or log in with:
        </p>
        <button className="mt-[16px] w-[311px] flex items-center gap-[16px] justify-center text-[16px] text-[#0E121B] font-semibold border-[1px] border-[#CACFD8] rounded-[12px] py-[16px]">
          <img
            src={googleIcon}
            alt=""
            className="dark:filter dark:brightness-0 dark:invert"
          />
          <p className="dark:text-white">Google</p>
        </button>
        <div className="divider w-[311px] h-[1px] bg-[#CACFD8] mt-[16px]"></div>
        <p className="mt-[16px] dark:text-[#CACFD8] text-center text-[14px] text-[#525866] font-normal">
          Already have an account?{" "}
          <span
            onClick={handleLogin}
            className="text-[14px] dark:text-white text-[#0E121B] font-normal"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
