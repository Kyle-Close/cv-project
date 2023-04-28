import React from "react";
import "../styles/ExperienceForm.css";

export default function ExperienceForm(props) {
  /*   function isValidForm() {
    const form = 
  } */

  return (
    <form className="form form-experience">
      <div className="input-section">
        <label>Company Name</label>
        <input
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
          id="description"
          onChange={(e) => props.handleChange(e.target)}
          value={
            props.formsData.experience[props.formsData.experience.length - 1]
              .description
          }
        ></textarea>
      </div>
      <div className="input-section">
        <label>To</label>
        <input
          id="to"
          onChange={(e) => props.handleChange(e.target)}
          value={
            props.formsData.experience[props.formsData.experience.length - 1].to
          }
        ></input>
      </div>
      <div className="input-section">
        <label>From</label>
        <input
          id="from"
          onChange={(e) => props.handleChange(e.target)}
          value={
            props.formsData.experience[props.formsData.experience.length - 1]
              .from
          }
        ></input>
      </div>
      <button className="add-job-button">Add Job</button>
    </form>
  );
}
