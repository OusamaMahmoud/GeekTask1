import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMagnifyingGlass,
  faCaretDown,
  faHeartPulse,
  faRecycle,
  faBolt,
  faShoppingBag,
  faCartShopping,
  faBuilding,
  faComments,
  faIndustry,
  faTint,
  faCoins,
  faLitecoinSign,
} from "@fortawesome/free-solid-svg-icons";
const Filters = () => {
  const industryLeftElements = [
    { name: "Health care", icon: faHeartPulse },
    { name: "Materials", icon: faRecycle },
    { name: "Energy", icon: faBolt },
    { name: "Consumer discretionary", icon: faShoppingBag },
    { name: "Consumer staples", icon: faCartShopping },
    { name: "Real estate", icon: faBuilding },
  ];
  const industryRightElements = [
    { name: "IT", icon: faLitecoinSign },
    { name: "Communication", icon: faComments },
    { name: "Industrials", icon: faIndustry },
    { name: "Utilities", icon: faTint },
    { name: "Financials", icon: faCoins },
  ];
  return (
    <div className="overflow-hidden rounded-md bg-[#181818] lg:ml-10 w-[427px] max-lg:w-full  h-[800px] max-lg:h-fit p-4 flex flex-col items-center">
      <h1 className="text-[24px] font-semibold text-[#ffffff]">
        Filters
      </h1>
      <div>
        <div className="w-[378px] max-lg:w-full h-[75px] mb-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[#979797] text-[14px]">
              Filters Applied
            </p>
            <p className="font-semibold text-white text-[14px]">
              Clear ALL
            </p>
          </div>
          <div className="rounded-md h-[51px] px-2 pt-1 flex justify-start items-start bg-[#202020]">
            <p className=" font-semibold  bg-accent-color px-2 text-[12px] rounded-md">
              Real state <FontAwesomeIcon icon={faXmark} />{" "}
            </p>
          </div>
        </div>
        <div className="w-[378px] max-lg:w-full bg-[#202020] rounded-md py-2 my-4">
          <div className="mx-2 sm:grid grid-cols-2  gap-x-10  gap-y-10 lg:block">
            <div className="mb-4">
              <h1 className="font-semibold text-white text-[15px] leading-8">
                Stock
              </h1>
              <div className="relative  border-none outline-none  w-[324px] h-[27px] rounded-md ">
                <input
                  type="text"
                  placeholder="$ TICKER"
                  className="w-full h-[38px] bg-[#313131] font-semibold  placeholder-[#6B6B6B] rounded-[5px]  pl-4 focus:outline-none"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-3 top-2 text-[#6B6B6B] w-[20px] h-[20px]"
                />
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-white text-[15px] leading-8">
                <FontAwesomeIcon icon={faCaretDown} className="mr-1" /> Industry
              </h1>
              <div className="flex justify-between items-center mx-3">
                <ul className="border-l-2 pl-3 max-lg:mt-4">
                  {industryLeftElements.map((ele, index) => (
                    <li key={index} className="rounded-md w-fit p-[5px] hover:bg-accent-color  flex items-center mb-1">
                      <FontAwesomeIcon
                        icon={ele.icon}
                        className="mr-2 text-white "
                      />
                      <span className="text-white font-semibold text-[12px]">
                        {ele.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="border-l-2 pl-3 mx-2">
                  {industryRightElements.map((ele, index) => (
                    <li key={index} className="flex items-center p-[5px] mb-1 rounded-md w-fit hover:bg-accent-color ">
                      <FontAwesomeIcon
                        icon={ele.icon}
                        className="mr-2 text-white"
                      />
                      <span className="text-white font-semibold  text-[12px]">
                        {ele.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="mt-4 ">
                <div className="flex justify-around">
                  <ul>
                    <h1 className=" font-semibold text-white text-[15px] leading-8">
                      <FontAwesomeIcon icon={faCaretDown} className="mr-1" />{" "}
                      Market Cap
                    </h1>
                    <div className="pl-2 ">
                      <li className="flex items-center ">
                        <div className="bg-[#494949] rounded-full w-[16px] h-[16px] flex justify-center items-center">
                          <div className="w-[6px] h-[6px] bg-[#202020]  rounded-full"></div>
                        </div>
                        <span className="inline-block ml-2 font-semibold text-white bg-transparent">
                          Micro
                        </span>
                      </li>
                      <li className="flex items-center ">
                        <div className="bg-[#494949]  rounded-full w-[16px] h-[16px] flex justify-center items-center">
                          <div className="w-[6px] h-[6px] bg-[#202020]  rounded-full"></div>
                        </div>
                        <span className="inline-block ml-2 font-semibold text-white bg-transparent">
                          Small
                        </span>
                      </li>
                      <li className="flex items-center ">
                        <div className="bg-[#494949] rounded-full w-[16px] h-[16px] flex justify-center items-center">
                          <div className="w-[6px] h-[6px] bg-accent-color rounded-full"></div>
                        </div>
                        <span className="inline-block ml-2 font-semibold text-white bg-transparent">
                          Large
                        </span>
                      </li>
                    </div>
                  </ul>
                  <ul>
                    <h1 className=" font-semibold text-white text-[15px] leading-8">
                      <FontAwesomeIcon icon={faCaretDown} className="mr-1" />{" "}
                      Risk Level
                    </h1>
                    <div className="pl-2">
                      <li className="flex items-center ">
                        <div className="bg-[#494949] rounded-full w-[16px] h-[16px] flex justify-center items-center">
                          <div className="w-[6px] h-[6px] bg-[#202020]  rounded-full"></div>
                        </div>
                        <span className="inline-block ml-2 font-semibold text-white bg-transparent">
                          Low Risk
                        </span>
                      </li>
                      <li className="flex items-center ">
                        <div className="bg-[#494949] rounded-full w-[16px] h-[16px] flex justify-center items-center">
                          <div className="w-[6px] h-[6px] bg-accent-color  rounded-full"></div>
                        </div>
                        <span className="inline-block ml-2 font-semibold text-white bg-transparent">
                          Mid Risk
                        </span>
                      </li>
                      <li className="flex items-center ">
                        <div className="bg-[#494949] rounded-full w-[16px] h-[16px] flex justify-center items-center">
                          <div className="w-[6px] h-[6px] bg-[#202020]  rounded-full"></div>
                        </div>
                        <span className="inline-block ml-2 font-semibold text-white bg-transparent">
                          High Risk
                        </span>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-2 p-2">
              <div className="flex flex-col items-center">
                <h1 className="mb-1 font-semibold text-white text-[15px] leading-8">
                  Stratgy
                </h1>
                <ul className="flex flex-col items-center">
                  <li className="pb-1 bg-gradient-to-b  from-gray-900 to-white  text-transparent bg-clip-text text-[13px]  font-semibold">
                    Big Option Buys
                  </li>
                  <li className="p-1 bg-accent-color text-white rounded-md text-[13px]  font-semibold">
                    Merger Arbitrage
                  </li>
                  <li className="bg-gradient-to-b from-gray-900 to-white  text-transparent bg-clip-text text-[13px] font-semibold">
                    Short Reports
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mb-1 font-semibold text-white text-[15px] leading-8">
                  Assest
                </h1>
                <ul className="flex flex-col items-center">
                  <p className="pb-1 bg-gradient-to-b from-gray-900 to-white  text-transparent bg-clip-text text-[13px]  font-semibold">
                    Stocks
                  </p>
                  <li className="p-1 bg-accent-color text-white rounded-md text-[13px] font-semibold">
                    Options
                  </li>
                  <li className="bg-gradient-to-b from-gray-900 to-white  text-transparent bg-clip-text text-[13px]  font-semibold">
                    Futures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className=" bg-[#53ACFF] max-lg:w-1/2 w-[160px] h-[43px] rounded-md text-[20px] leading-8 font-semibold text-white">
        Apply
      </button>
    </div>
  );
};

export default Filters;
