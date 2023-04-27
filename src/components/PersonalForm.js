import React from "react";

import "../styles/PersonalForm.css";

export default function PersonalForm(props) {
  return (
    <form className="form-personal">
      <div className="input-section">
        <label>First Name</label>
        <input
          id="firstName"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.firstName}
        ></input>
      </div>
      <div className="input-section">
        <label>Last Name</label>
        <input
          id="lastName"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.lastName}
        ></input>
      </div>
      <div className="input-section">
        <label>City</label>
        <input
          id="city"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.city}
        ></input>
      </div>
      <div className="input-section">
        <label>State/Province</label>
        <input
          id="state"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.state}
        ></input>
      </div>
      <div className="input-section">
        <label>Country</label>
        <input
          id="country"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.country}
        ></input>
      </div>
      <div className="input-section">
        <label>Email</label>
        <input
          id="email"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.email}
        ></input>
      </div>
      <div className="input-section">
        <label>Phone Number</label>
        <input
          id="phone"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.phone}
        ></input>
      </div>
      <div className="input-section">
        <label>Personal Description</label>
        <textarea
          id="personalDescription"
          rows="7"
          cols="33"
          style={{ resize: "none" }}
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personalDescription}
        ></textarea>
      </div>
    </form>
  );
}
