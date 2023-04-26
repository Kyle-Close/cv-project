import React from "react";

import "../styles/PersonalForm.css";

export default function PersonalForm() {
  return (
    <form className="form-personal">
      <div className="input-section">
        <label>First Name</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>Last Name</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>City</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>State/Province</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>Country</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>Email</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>Phone Number</label>
        <input></input>
      </div>
      <div className="input-section">
        <label>Personal Description</label>
        <textarea rows="7" cols="33" style={{ resize: "none" }}></textarea>
      </div>
    </form>
  );
}
