import React from 'react'
import ProjectsList from '../../Projects.json'
import Project from './Project'
import img from '../../Assets/FinalDesign.png'
import {motion} from 'framer-motion'

export default function Projects() {


  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col'>
      <div className='text-center font-bold font-Presentation text-3xl'>Projects</div>
      <div className="flex flex-wrap justify-center gap-12">
        
        {ProjectsList.map(el => (
          <motion.div whileHover= {{scale: 1.1, transition:{duration :1}}}><Project  title={el.Title} image={img} description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/></motion.div>
        ))}
      </div>
      </div>
    </div>
  )
}
