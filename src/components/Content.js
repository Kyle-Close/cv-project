import React from "react";

import "../styles/Content.css";

import Tabs from "../components/Tabs";
import PersonalForm from "../components/PersonalForm";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EducationForm";
import GenerateCVButton from "../components/GenerateCVButton";

export default function Content(props) {
  const [isGenerateCV, setIsGenerateCV] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("personal");
  const [formsData, setFormsData] = React.useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phone: "",
    personalDescription: "",
  });

  React.useEffect(() => {
    if (isFormsValid(formsData)) {
      setIsGenerateCV(true);
    } else {
      setIsGenerateCV(false);
    }
  }, [formsData]);

  function isFormsValid(obj) {
    for (const key in obj) {
      if (typeof obj[key] !== "string" || obj[key].trim() === "") {
        return false;
      }
    }
    return true;
  }

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const handleFormChange = (target) => {
    const value = target.value;
    const property = target.id;

    setFormsData((prevFormsData) => {
      return {
        ...prevFormsData,
        [property]: value,
      };
    });
  };

  return (
    <div className="content-container">
      {props.isEditActive && (
        <>
          <Tabs handleClick={handleTabClick} activeTab={activeTab} />
          {activeTab === "personal" && (
            <PersonalForm
              formsData={formsData}
              handleChange={handleFormChange}
            />
          )}
          {activeTab === "experience" && <ExperienceForm />}
          {activeTab === "education" && <EducationForm />}
          <GenerateCVButton isGenerateCV={isGenerateCV} />
        </>
      )}
    </div>
  );
}
