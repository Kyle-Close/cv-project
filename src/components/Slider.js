import React from "react";
import "../styles/Slider.css";

export default function Slider(props) {
  const editClassNames = props.isEditActive ? "slider selected" : "slider";
  const sliderClassNames = props.isEditActive ? "slider" : "slider selected";

  return (
    <div className="slider-container">
      <button onClick={props.handleClick} className={editClassNames}>
        EDIT
      </button>
      <button onClick={props.handleClick} className={sliderClassNames}>
        PREVIEW
      </button>
    </div>
  );
}
