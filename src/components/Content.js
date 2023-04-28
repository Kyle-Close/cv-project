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
    personal: {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      country: "",
      email: "",
      phone: "",
      description: "",
    },
    experience: [
      {
        companyName: "",
        role: "",
        description: "",
        from: "",
        to: "",
      },
    ],
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
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        // If the value is an object or array, recursively call isFormsValid
        if (!isFormsValid(value)) {
          return false;
        }
      } else if (typeof value !== "string" || value.trim() === "") {
        // If the value is not a string or is an empty string, return false
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

    const formClassName = target.parentElement.parentElement.classList[1];
    let form;

    if (formClassName === "form-personal") form = "personal";
    else if (formClassName === "form-experience") form = "experience";
    else if (formClassName === "form-education") form = "education";

    console.log(formsData.experience);

    if (form === "personal") {
      setFormsData((prevFormsData) => {
        return {
          ...prevFormsData,
          personal: {
            ...prevFormsData.personal,
            [property]: value,
          },
        };
      });
    } else {
      setFormsData((prevFormsData) => {
        return {
          ...prevFormsData,
          [form]: [
            ...prevFormsData[form].map((experience, index) =>
              index === 0 ? { ...experience, [property]: value } : experience
            ),
          ],
        };
      });
    }
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
          {activeTab === "experience" && (
            <ExperienceForm
              formsData={formsData}
              handleChange={handleFormChange}
            />
          )}
          {activeTab === "education" && <EducationForm />}
          <GenerateCVButton isGenerateCV={isGenerateCV} />
        </>
      )}
    </div>
  );
}
