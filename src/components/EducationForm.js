import React from "react";
import "../styles/Education.css";

export default function EducationForm(props) {
  const [isValid, setIsValid] = React.useState(false);

  const liItems = [];
  props.currentSchools.forEach((school, index) => {
    const { schoolName, program, from, to } = school;
    const el = (
      <li key={index}>{`${schoolName} - ${program} (${from} - ${to})`}</li>
    );
    liItems.push(el);
  });
  React.useEffect(
    function () {
      if (isValidForm()) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    },
    [props.formsData.education]
  );

  function isValidForm() {
    let isValid = true;
    const expObj =
      props.formsData.education[props.formsData.education.length - 1];

    // Check if there are already 3 schools (max)
    if (props.currentSchools.length >= 3) isValid = false;

    // Check if all the fields are entered
    for (const key in expObj) {
      if (expObj[key] == null || expObj[key] === "") isValid = false;
    }

    return isValid;
  }

  return (
    <>
      <form className="form form-education">
        <div className="input-section">
          <label>School Name</label>
          <input
            placeholder="School"
            id="schoolName"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.education[props.formsData.education.length - 1]
                .schoolName
            }
          ></input>
        </div>
        <div className="input-section">
          <label>Program</label>
          <input
            placeholder="Computer Engineering"
            id="program"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.education[props.formsData.education.length - 1]
                .program
            }
          ></input>
        </div>
        <div className="input-section">
          <label>City</label>
          <input
            placeholder="Scranton"
            id="city"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.education[props.formsData.education.length - 1]
                .city
            }
          ></input>
        </div>
        <div className="input-section">
          <label>From</label>
          <input
            placeholder="1993"
            id="from"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.education[props.formsData.education.length - 1]
                .from
            }
          ></input>
        </div>
        <div className="input-section">
          <label>To</label>
          <input
            placeholder="1997"
            id="to"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.education[props.formsData.education.length - 1].to
            }
          ></input>
        </div>
        <button
          className="add-school-button"
          onClick={props.handleClick}
          disabled={!isValid}
        >
          Add School
        </button>
        <div className="current-schools-section">
          <h4>Current Schools</h4>
          {<ol>{liItems}</ol>}
        </div>
      </form>
    </>
  );
}
