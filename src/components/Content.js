import React from "react";

import "../styles/Content.css";

import Tabs from "../components/Tabs";
import PersonalForm from "../components/PersonalForm";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EducationForm";
import GenerateCVButton from "../components/GenerateCVButton";

export default function Content(props) {
  const [currentJobs, setCurrentJobs] = React.useState([]);
  const [currentSchools, setCurrentSchools] = React.useState([]);
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
    education: [
      {
        schoolName: "",
        program: "",
        city: "",
        from: "",
        to: "",
      },
    ],
  });

  React.useEffect(() => {
    if (isFormsValid()) {
      setIsGenerateCV(true);
    } else {
      setIsGenerateCV(false);
    }
  }, [formsData]);

  function isFormsValid() {
    const formObj = formsData;
    let isValid = true;
    // Validate the personal form is filled out
    for (const key in formObj.personal) {
      if (formObj.personal[key] === "") isValid = false;
    }
    // Validate at least 1 experience has been entered
    if (currentJobs.length < 1) isValid = false;

    // Validate at least 1 school has been entered
    if (currentSchools.length < 1) isValid = false;

    return isValid;
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
    } else if (form === "experience") {
      setFormsData((prevFormsData) => {
        return {
          ...prevFormsData,
          [form]: [
            ...prevFormsData[form].map((experience, index) =>
              index === prevFormsData[form].length - 1
                ? { ...experience, [property]: value }
                : experience
            ),
          ],
        };
      });
    } else if (form === "education") {
      setFormsData((prevFormsData) => {
        return {
          ...prevFormsData,
          [form]: [
            ...prevFormsData[form].map((education, index) =>
              index === prevFormsData[form].length - 1
                ? { ...education, [property]: value }
                : education
            ),
          ],
        };
      });
    }
  };

  React.useEffect(() => {
    logFormData(formsData);
  }, [formsData]);

  function logFormData(formData) {
    const mains = ["Personal", "Experience", "Education"];
    const personalArr = [
      "firstName",
      "lastName",
      "city",
      "state",
      "country",
      "email",
      "phone",
      "description",
    ];
    const experienceArr = ["companyName", "role", "description", "to", "from"];
    const educationArr = ["schoolName", "program", "city", "from", "to"];

    let output = "";

    mains.forEach((tab) => {
      output += tab + "\n";
      if (tab === "Personal") {
        personalArr.forEach((prop) => {
          output += `   ${prop}: ${formData.personal[prop]}\n`;
        });
      } else if (tab === "Experience") {
        for (let i = 0; i < formData.experience.length; i++) {
          output += `   Experience[${i}]\n`;
          for (let j = 0; j < experienceArr.length; j++) {
            output += `      ${experienceArr[j]}: ${
              formData.experience[i][experienceArr[j]]
            }\n`;
          }
        }
      } else if (tab === "Education") {
        for (let i = 0; i < formData.education.length; i++) {
          output += `   Education[${i}]\n`;
          for (let j = 0; j < educationArr.length; j++) {
            output += `      ${educationArr[j]}: ${
              formData.education[i][educationArr[j]]
            }\n`;
          }
        }
      }
    });
    console.log(output);
  }

  function handleAddExperience(e) {
    e.preventDefault();
    const blankExperienceObj = {
      companyName: "",
      role: "",
      description: "",
      from: "",
      to: "",
    };

    setFormsData((prevFormsData) => {
      return {
        ...prevFormsData,
        experience: [...prevFormsData.experience, blankExperienceObj],
      };
    });

    setCurrentJobs(() => {
      const result = [];
      for (let i = 0; i < formsData.experience.length; i++) {
        const { companyName, role, from, to } = formsData.experience[i];
        const obj = {
          companyName: companyName,
          role: role,
          from: from,
          to: to,
        };
        result.push(obj);
      }
      return result;
    });
  }

  function handleAddEducation(e) {
    e.preventDefault();
    const blankEducationObj = {
      schoolName: "",
      program: "",
      city: "",
      from: "",
      to: "",
    };

    setFormsData((prevFormsData) => {
      return {
        ...prevFormsData,
        education: [...prevFormsData.education, blankEducationObj],
      };
    });

    setCurrentSchools(() => {
      const result = [];
      for (let i = 0; i < formsData.education.length; i++) {
        const { schoolName, program, from, to } = formsData.education[i];
        const obj = {
          schoolName: schoolName,
          program: program,
          from: from,
          to: to,
        };
        result.push(obj);
      }
      return result;
    });
  }

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
              handleClick={handleAddExperience}
              currentJobs={currentJobs}
            />
          )}
          {activeTab === "education" && (
            <EducationForm
              formsData={formsData}
              handleChange={handleFormChange}
              handleClick={handleAddEducation}
              currentSchools={currentSchools}
            />
          )}
          <GenerateCVButton isGenerateCV={isGenerateCV} />
        </>
      )}
    </div>
  );
}
