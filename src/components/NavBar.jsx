import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div className="bg-[#202020] flex justify-around items-center m-3 ">
      <div className="flex justify-center items-center  w-[174px] h-[72px] relative">
        <span className="absolute rounded-md -left-2 top-2 h-3/4 border-l-4 border-blue-500"></span>
        <h1 className="uppercase pb-0.5 text-white text-[45px] font-poppins font-bold relative z-10 leading-[72px]">
          Alerts
        </h1>
      </div>
      <div className="flex items-center gap-3 p-2">
      <div className="relative  border-none  w-388 h-38 border rounded-md ">
        <input
          type="text"
          placeholder="Search By..."
          className="lg:w-[611px] h-[38px] bg-[#313131]  placeholder-[#F5F5F5] rounded-[5px]  pl-4 focus:outline-none"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute right-3 top-2 text-[#F5F5F5] w-[20px] h-[20px]"
          aria-label="Search"
        />
      </div>
      <div className="relative">
        <FontAwesomeIcon
          icon={faBell}
          className="w-[24px] h-[26px] text-[#53ACFF]"
          aria-label="Notifications"
        />
        <div className="absolute -top-0.5 -right-0.5 w-[12px] h-[12px] bg-[#118F4B] rounded-full flex items-center justify-center">
          <span className="text-white text-[10px]">5</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavBar;

