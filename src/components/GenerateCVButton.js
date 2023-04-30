import React from "react";

import "../styles/GenerateCVButton.css";

export default function GenerateCVButton(props) {
  return (
    <div className="generate-cv-container">
      <button
        onClick={() => props.updateIsEditActive(false)}
        className="generate-cv-button"
        disabled={!props.isGenerateCV}
      >
        Generate CV
      </button>
    </div>
  );
}
