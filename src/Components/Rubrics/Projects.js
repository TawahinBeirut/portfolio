import React from 'react'
import ProjectsList from '../../Projects.json'
import Project from './Project'
import img from '../../Assets/FinalDesign.png'

export default function Projects() {

  const el = ProjectsList[0]

  return (
    <div className='flex justify-center mt-20'>
      <div className='flex flex-col'>
      <div className='text-center font-bold font-Presentation text-3xl'>Projects</div>
      <div className="flex flex-wrap justify-center gap-16">
        
        {/* {ProjectsList.map(el => ( */}
          <Project title={el.Title} image={img} description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/>
          <Project title={el.Title} image={img} description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/>
          <Project title={el.Title} image={img} description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/>
          <Project title={el.Title} image={img} description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/>
          <Project title={el.Title} image={img} description={el.Description} Link={el.Lien} GitLink={el['Lien-Git']}/>
        {/* ))} */}
      </div>
      </div>
    </div>
  )
}
