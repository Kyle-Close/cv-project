import React from "react";

import "../styles/Content.css";

import Tabs from "../components/Tabs";
import PersonalForm from "../components/PersonalForm";

export default function Content(props) {
  const [activeTab, setActiveTab] = React.useState("personal");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="content-container">
      {props.isEditActive && (
        <>
          <Tabs handleClick={handleTabClick} activeTab={activeTab} />
          {activeTab === "personal" && <PersonalForm />}
        </>
      )}
    </div>
  );
}
