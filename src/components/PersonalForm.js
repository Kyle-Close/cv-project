import React from "react";

import "../styles/PersonalForm.css";

export default function PersonalForm(props) {
  return (
    <form className="form form-personal">
      <div className="input-section">
        <label>First Name</label>
        <input
          placeholder="Dwight"
          id="firstName"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.firstName}
        ></input>
      </div>
      <div className="input-section">
        <label>Last Name</label>
        <input
          placeholder="Schrute"
          id="lastName"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.lastName}
        ></input>
      </div>
      <div className="input-section">
        <label>City</label>
        <input
          placeholder="Scranton"
          id="city"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.city}
        ></input>
      </div>
      <div className="input-section">
        <label>State/Province</label>
        <input
          placeholder="PA"
          id="state"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.state}
        ></input>
      </div>
      <div className="input-section">
        <label>Country</label>
        <input
          placeholder="USA"
          id="country"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.country}
        ></input>
      </div>
      <div className="input-section">
        <label>Email</label>
        <input
          placeholder="dwight.schrute@dundermifflin.com"
          id="email"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.email}
        ></input>
      </div>
      <div className="input-section">
        <label>Phone Number</label>
        <input
          placeholder="(570)-123-4567"
          id="phone"
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.phone}
        ></input>
      </div>
      <div className="input-section">
        <label>Personal Description</label>
        <textarea
          placeholder="Expert salesman, beet farmer extraordinaire, and martial arts enthusiast. Possessor of numerous awards, including the prestigious Assistant Regional Manager of the Year. "
          id="description"
          rows="7"
          cols="33"
          style={{ resize: "none" }}
          onChange={(e) => props.handleChange(e.target)}
          value={props.formsData.personal.description}
        ></textarea>
      </div>
    </form>
  );
}
