import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faMoneyBillTrendUp,
  faPager,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
const Alert = ({ risk }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const renderRisk = () => {
    if (risk === "Low Risk") {
      return <span className="text-[#D94111] inline-block ">-0.25 %</span>;
    } else {
      return <span className="text-[#118F4B] inline-block ">-0.25 %</span>;
    }
  };
  return (
    //w-[845px]
    <>
      <ul
        className={`flex flex-wrap justify-around items-center cursor-pointer   rounded-lg ${
          expanded ? "bg-accent-color" : "bg-[#313131]"
        }`}
        onClick={handleToggle}
      >
        <li
          className={`pr-4 h-[60px] border-r-2  ${
            expanded ? "border-white" : "border-[#414040] "
          } min-w-32 flex items-center justify-around`}
        >
          <FontAwesomeIcon
            icon={faFileInvoiceDollar}
            className="text-white w-[25px] h-[25px] "
          />
          <span className="text-white inline-block font-normal ">AMZN</span>
        </li>
        <li
          className={`pr-4  border-r-2 font-normal ${
            expanded ? "border-white" : "border-[#414040] "
          } min-w-32 flex items-center justify-around`}
        >
          <FontAwesomeIcon icon={faMoneyBillTrendUp} className="text-white w-[25px] h-[25px] " />
          <span className="text-white inline-block  ">200</span>
        </li>
        <li
          className={`pr-4  border-r-2 font-normal ${
            expanded ? "border-white" : "border-[#414040] "
          } min-w-32 flex items-center justify-around`}
        >
          <FontAwesomeIcon icon={faPager} className="text-white w-[25px] h-[25px] " />
          {renderRisk()}{" "}
        </li>
        <li
          className={`pr-4  border-r-2 font-normal ${
            expanded ? "border-white" : "border-[#414040] "
          } min-w-32 flex items-center justify-around`}
        >
          {risk === "High Risk" ? (
            <FontAwesomeIcon icon={faLayerGroup} className="text-white w-[25px] h-[25px] " />
          ) : (
            <FontAwesomeIcon icon={faMoneyBillTrendUp} className="text-white w-[25px] h-[25px] " />
          )}
          <span className="text-white inline-block ml-4">{risk}</span>
        </li>
      </ul>
      {expanded && (
        <div className="p-4 max-lg:pl-14 lg:w-[845px] h-[120px] rounded-lg bg-[#181818]">
          <p className="text-white font-normal text-[15px] mb-2">
            <b>$TSLA</b> just announced an acquisition of <b>$NFLX</b> at $200
            B.
          </p>
          <p className="text-white font-normal text-[15px]">
            This is an{" "}
            <a className="underline font-normal text-accent-color" href="/">
              arbitrage opportunity
            </a>
            , with the max gain being %X if the deal closese ,but the possible
            risk is %Y if the deal fails, if the deal success is % and theredore
            the recommended play is{" "}
            <a className="underline font-normal text-accent-color" href="/">
              long/short
            </a>{" "}
            $ABC
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
