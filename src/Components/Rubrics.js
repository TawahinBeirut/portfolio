import React, { useState } from "react";
import Button from "./Button";
import Themes from "../Themes.json";
import PresentationR from "./Rubrics/PresentationR";
import Projects from "./Rubrics/Projects";
import Contact from "./Rubrics/Contact";
import Footer from "./Footer";
import Competences from "./Rubrics/Competences";

export default function Rubrics() {
  const [Selected, setSelected] = useState(Themes.General.Rubrics[0]);


  
  const onClick = (e) => {
    setSelected(e.target.name);
  };

  return (
      <div className="flex flex-col -mt-40 sm:-mt-32 ">
        <PresentationR />
        <Projects/>
        <Competences/>
        <Contact/>
        <Footer/>
      </div>
  );
}
