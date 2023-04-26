import React from "react";

import "../styles/Tab.css";

export default function Tabs(props) {
  let personalClassList = "tab";
  let experienceClassList = "tab";
  let educationClassList = "tab";

  // Determine class names
  switch (props.activeTab) {
    case "personal":
      personalClassList += " selected";
      break;
    case "experience":
      experienceClassList += " selected";
      break;
    case "education":
      educationClassList += " selected";
      break;
    default:
      throw Error("active tab does not exist");
  }

  return (
    <div className="tabs-container">
      <button
        className={personalClassList}
        onClick={() => props.handleClick("personal")}
      >
        Personal Info
      </button>
      <button
        className={experienceClassList}
        onClick={() => props.handleClick("experience")}
      >
        Experience
      </button>
      <button
        className={educationClassList}
        onClick={() => props.handleClick("education")}
      >
        Education
      </button>
    </div>
  );
}
