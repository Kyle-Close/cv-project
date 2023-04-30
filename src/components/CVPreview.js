import React from "react";
import "../styles/CVPreview.css";
import profileImg from "../img/profile.svg";

export default function CVPreview(props) {
  const { personal, experience, education } = props.formsData;
  return (
    <div className="preview-container">
      <div className="header">
        <div className="name">
          <h4>{personal.firstName}</h4>
          <h2>{personal.lastName}</h2>
        </div>
        <div className="job">
          <p>{`${experience[0].companyName} - ${experience[0].role}`}</p>
        </div>
        {/* <img width={100} src={profileImg}></img> */}
      </div>
      <div className="contact-about"></div>
      <div className="education-experience"></div>
    </div>
  );
}
