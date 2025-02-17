import React, { useEffect } from 'react'
import ProjectsList from '../../Projects.json'
import Project from './Project';

import img1 from "../../Assets/image.png"
import img from '../../Assets/FinalDesign.png';

import img2 from '../../Assets/UniShareMinia.png'
import img3 from '../../Assets/ComradeMinia.png';
import img4 from '../../Assets/KebabMinia.png';
import img5 from '../../Assets/UnifreeMinia.png'

import {motion} from 'framer-motion'

export default function Projects() {
  const tab = [img1,img2,img3,img4,img5];

  let i = -1 ;
  
  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col'>
      <div className='text-center font-bold font-Presentation text-3xl'>Projects</div>
      <div className="flex flex-wrap justify-center gap-12">
        
        {ProjectsList.map(el => {
          i++;
          return (
          <motion.div whileHover= {{scale: 1.1, transition:{duration :1}}}><Project  title={el.Title} image={tab[i] ? tab[i] : img } description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/></motion.div>)
;})}
      </div>
      </div>
    </div>
  )
}
