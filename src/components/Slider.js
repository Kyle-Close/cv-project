import React from "react";
import "../styles/Slider.css";

export default function Slider() {
  const [isEditActive, setIsEditActive] = React.useState(true);

  function handleClick(e) {
    if (e.target.classList.contains("selected")) {
      return;
    } else {
      setIsEditActive((prevIsEditActive) => !prevIsEditActive);
    }
  }

  const editClassNames = isEditActive ? "slider selected" : "slider";
  const sliderClassNames = isEditActive ? "slider" : "slider selected";

  return (
    <div>
      <button onClick={handleClick} className={editClassNames}>
        EDIT
      </button>
      <button onClick={handleClick} className={sliderClassNames}>
        PREVIEW
      </button>
    </div>
  );
}
