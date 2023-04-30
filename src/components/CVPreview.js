import React from "react";
import "../styles/CVPreview.css";
import profileImg from "../img/profile.svg";

export default function CVPreview(props) {
  const { personal, experience, education } = props.formsData;
  const fn = personal.firstName.toUpperCase().split("").join(" ");
  const ln = personal.lastName.toUpperCase().split("").join(" ");

  let educationList = education.map((school, index) => {
    return (
      <div className="education-item" key={index}>
        <h5>{school.program}</h5>
        <div>
          <p>{school.schoolName}</p>
          <p>{`${school.from}-${school.to}`}</p>
        </div>
      </div>
    );
  });

  let experienceList = experience.map((experience, index) => {
    return (
      <div className="experience-item" key={index}>
        <p>{`${experience.role} | ${experience.from}-${experience.to}`}</p>
        <h5>{experience.companyName}</h5>
        <p>{experience.description}</p>
      </div>
    );
  });

  educationList.pop(); // Last el in the array is blank. Pop it off before display
  experienceList.pop(); // Last el in the array is blank. Pop it off before display
  return (
    <div className="preview-container">
      <div className="header">
        <div className="name">
          <h4 className="preview-name preview-first-name">{fn}</h4>
          <h2 className="preview-name preview-last-name">{ln}</h2>
        </div>
        <div className="job">
          <p>{`${experience[0].companyName} - ${experience[0].role}`}</p>
        </div>
        {
          <div className="profile-img-container">
            <img
              className="profile-img"
              width={100}
              src={profileImg}
              alt="Default profile"
            ></img>
          </div>
        }
      </div>
      <div className="contact-about">
        <div className="contact-section">
          <h4>CONTACT</h4>
          <ul>
            <li>{`${personal.city}, ${personal.state}, ${personal.country}`}</li>
            <li>{personal.phone}</li>
            <li>{personal.email}</li>
          </ul>
        </div>
        <div className="about-section">
          <h4>ABOUT</h4>
          <p>{personal.description}</p>
        </div>
      </div>
      <div className="education-experience">
        <div className="education-section">
          <h4 className="education-title">EDUCATION</h4>
          {educationList}
        </div>
        <div className="experience-section">
          <h4 className="experience-title">EXPERIENCE</h4>
          {experienceList}
        </div>
      </div>
    </div>
  );
}
