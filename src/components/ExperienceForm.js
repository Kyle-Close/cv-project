import React from "react";
import "../styles/ExperienceForm.css";

export default function ExperienceForm(props) {
  const [isValid, setIsValid] = React.useState(false);

  const liItems = [];
  props.currentJobs.forEach((job, index) => {
    const { companyName, role, from, to } = job;
    const el = (
      <li key={index}>{`${companyName} - ${role} (${from} - ${to})`}</li>
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
    [props.formsData.experience]
  );

  function isValidForm() {
    let isValid = true;
    const expObj =
      props.formsData.experience[props.formsData.experience.length - 1];

    // Check if there are already 3 jobs (max)
    if (props.currentJobs.length >= 3) isValid = false;

    // Check if all the fields are entered
    for (const key in expObj) {
      if (expObj[key] == null || expObj[key] === "") isValid = false;
    }

    return isValid;
  }

  return (
    <>
      <form className="form form-experience">
        <div className="input-section">
          <label>Company Name</label>
          <input
            placeholder="Dunder Mifflin"
            id="companyName"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.experience[props.formsData.experience.length - 1]
                .companyName
            }
          ></input>
        </div>
        <div className="input-section">
          <label>Role</label>
          <input
            placeholder="Saleman"
            id="role"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.experience[props.formsData.experience.length - 1]
                .role
            }
          ></input>
        </div>
        <div className="input-section">
          <label>Description</label>
          <textarea
            placeholder="Top-performing salesperson with expertise in the paper industry. Manage client relationships, ensures excellent customer service, and supports daily office operations."
            maxLength={"200"}
            id="description"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.experience[props.formsData.experience.length - 1]
                .description
            }
          ></textarea>
        </div>
        <div className="input-section">
          <label>From</label>
          <input
            placeholder="2001"
            id="from"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.experience[props.formsData.experience.length - 1]
                .from
            }
          ></input>
        </div>
        <div className="input-section">
          <label>To</label>
          <input
            placeholder="Current"
            id="to"
            onChange={(e) => props.handleChange(e.target)}
            value={
              props.formsData.experience[props.formsData.experience.length - 1]
                .to
            }
          ></input>
        </div>
        <button
          onClick={props.handleClick}
          className={"add-job-button"}
          disabled={!isValid}
        >
          Add Job
        </button>
        <div className="current-jobs-section">
          <h4>Current Jobs</h4>
          <ol>{liItems}</ol>
        </div>
      </form>
    </>
  );
}
