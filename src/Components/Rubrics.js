import React, { useState } from "react";
import Button from "./Button";
import Themes from "../Themes.json";
import PresentationR from "./Rubrics/PresentationR";
import Projects from "./Rubrics/Projects";
import Contact from "./Rubrics/Contact";
import Footer from "./Footer";
import Competences from "./Rubrics/Competences";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
export default function Rubrics() {
  const [Selected, setSelected] = useState(Themes.General.Rubrics[0]);



  const onClick = (e) => {
    setSelected(e.target.name);
  };

  return (
    <div className="flex flex-col -mt-40 sm:-mt-32 ">
      <Tabs>
        <TabList>
          <Tab>Presentation</Tab>
          <Tab>Projets</Tab>
          <Tab>Competences</Tab>
        </TabList>
        <TabPanels>
          <TabPanel> <PresentationR /></TabPanel>

          <TabPanel><Projects /></TabPanel>
          <TabPanel><Competences /></TabPanel>
        </TabPanels>
      </Tabs>
      <Contact />
      <Footer />
    </div>
  );
}
