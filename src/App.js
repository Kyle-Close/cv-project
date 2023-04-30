import React from "react";

import "./App.css";
import "./styles/App.css";

import Title from "./components/Title";
import Slider from "./components/Slider";
import Content from "./components/Content";

function App() {
  const [isEditActive, setIsEditActive] = React.useState(true);

  function handleSliderClick(e) {
    if (e.target.classList.contains("selected")) {
      return;
    } else {
      setIsEditActive((prevIsEditActive) => !prevIsEditActive);
    }
  }

  const updateIsEditActive = (newValue) => {
    setIsEditActive(newValue);
  };

  return (
    <div className="container">
      <Title />
      <Slider isEditActive={isEditActive} handleClick={handleSliderClick} />
      <Content
        isEditActive={isEditActive}
        updateIsEditActive={updateIsEditActive}
      />
    </div>
  );
}

export default App;
