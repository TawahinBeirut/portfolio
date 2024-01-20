import React, { useEffect } from 'react'
import Themes from "../../Themes.json"
import Project from './Project';

import img from '../../Assets/FinalDesign.png';

import img1 from '../../Assets/Languages.png';  
import img2 from '../../Assets/framework1.png';
import img3 from '../../Assets/English.png';
import img4 from '../../Assets/Work_Team.png'  
import img5 from '../../Assets/Figma.png' 
import {motion} from 'framer-motion'

export default function Projects() {
  const tab = [img1,img2,img3,img4,img5];

  let i = -1 ;
  
  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col'>
      <div className='text-center font-bold font-Presentation text-3xl'>Competences</div>
      <div className="flex flex-wrap justify-center gap-12">
        
        {Themes.Competences.map(el => {
          i++;
          return (
          <motion.div whileHover= {{scale: 1.1, transition:{duration :1}}}><Project  title={el.Title} image={tab[i] ? tab[i] : img } description={el.Description}/></motion.div>)
;})}
      </div>
      </div>
    </div>
  )
}
