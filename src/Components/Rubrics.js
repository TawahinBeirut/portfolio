import React, { useState } from "react";
import Button from "./Button";
import Themes from "../Themes.json";
import PresentationR from "./Rubrics/PresentationR";
import Projects from "./Rubrics/Projects";
import Contact from "./Rubrics/Contact";
import Footer from "./Footer";

export default function Rubrics() {
  const [Selected, setSelected] = useState(Themes.General.Rubrics[0]);


  
  const onClick = (e) => {
    setSelected(e.target.name);
  };

  return (
    <div className="-mt-24">
      <div className="flex justify-center">
        <div className="w-5/6 border border-black flex justify-around">
          {Themes.General.Rubrics.map((el) => (
            <Button
              title={el}
              onClick={onClick}
              selected={Selected == el ? true : false}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col border border-black mt-5">
        <PresentationR />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
