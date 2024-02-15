import React from "react";
import Alert from "./Alert";

const DashboardAlerts = () => {
  const riskValues = [
    "Low Risk",
    "High Risk",
    "High Risk",
    "Low Risk",
    "High Risk",
    "Low Risk",
    "Low Risk",
    "Low Risk",
    "Low Risk",
    "Low Risk",
  ];

  return (
    <ul className="overflow-y-auto bg-[#202020] w-full py-2">
      {riskValues.map((risk, index) => (
        <li className="mb-3" key={index}>
          <Alert risk={risk} />
        </li>
      ))}
    </ul>
  );
};
 
export default DashboardAlerts;
