import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGraduationCap,
  faGears,
  faFolderOpen,
  faMoneyBillTrendUp,
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sideBarElements = [
    { name: "Alerts", icon: faBell },
    { name: "Training", icon: faGraduationCap },
    { name: "Automation", icon: faGears },
    { name: "Portfolio", icon: faFolderOpen },
    { name: "Trading", icon: faMoneyBillTrendUp },
  ];

  return (
    <div
      className={`fixed left-2 top-0 h-[835px] bg-primary-color rounded-md overflow-hidden transition-all duration-300 ${
        isExpanded
          ? "w-[180px] flex flex-col justify-between"
          : "w-[90px] flex flex-col justify-between "
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col justify-start items-center">
        <div
          className={`my-10  transition-all duration-300 ml-8 w-[150px] ${
            isExpanded && " w-[300px]"
          }`}
        >
          <a href="/" className="">
            <img
              src="src/assets/targetLogo.webp"
              alt="Logo"
              className={` object-cover`}
            />
          </a>
        </div>
        <div>
          <ul className="w-[147px] h-[205px]">
            {sideBarElements.map((ele, index) => (
              <li
                key={index}
                className={`relative flex items-center mb-4 
              ${
                index >= sideBarElements.length - 3
                  ? ""
                  : "rounded-md w-fit p-[5px] hover:bg-accent-color"
              }
              `}
              >
                {isExpanded && (
                  <div
                    className={`absolute top-0 left-0 w-full h-[.001px] shadow-custom transition-opacity duration-300 opacity-0
                   ${
                     index >= sideBarElements.length - 3
                       ? "hover:opacity-100"
                       : ""
                   }  font-poppins font-bold text-white z-100`}
                  >
                    <p className="z-1000 font-poppins">Coming soon!</p>
                  </div>
                )}
                <FontAwesomeIcon
                  icon={ele.icon}
                  className={`${isExpanded ? "" : "ml-[60px]"} mr-2 ${
                    index >= sideBarElements.length - 3
                      ? "text-[#5D5D5D]"
                      : "text-white"
                  } text-lg transition-all duration-300 `}
                />
                <span
                  className={`font-poppins ${
                    index >= sideBarElements.length - 3
                      ? "text-[#5D5D5D]"
                      : "text-white"
                  } text-base leading-[28.5px]
                 transition-colors duration-300 
                 ${isExpanded ? "" : "hidden"}
                 `}
                >
                  {ele.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className={` ${isExpanded ? "" : "mb-3"}`}>
          <FontAwesomeIcon icon={faCircleUser} className="text-[40px] text-accent-color" />
          </div>
          <div
            className={`ml-4 transition-all duration-300 ${
              isExpanded ? "" : "hidden"
            }`}
          >
            <p className="text-white font-poppins text-[15px] leading-[22.5px]">
              Moni Roy
            </p>
            <p className="text-[#979797] font-poppins text-[13px] leading-[19.5px]">
              Beginner
            </p>
          </div>
        </div>
        <p
          className={`text-[#424242] text-[14px] my-3 mb-5transition-all duration-300 ${
            isExpanded ? "" : "hidden"
          }`}
        >
          Street Suite. 2.0
        </p>
      </div>
    </div>
  );
};

export default SideBar;
