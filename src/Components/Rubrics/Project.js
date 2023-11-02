import React from 'react'
import {motion} from 'framer-motion'

export default function Project({title,image,description,Link,GitLink}) {

  // Taille fenetre responsive 960 px


  return (
    <div className=' drop-shadow-2xl flex flex-col max-w-lg rounded-xl overflow-hidden mt-10 '>
        <img src={image}/>
        <div className='flex flex-col gap-5 bg-white text-sm sm:text-xl text-center p-5'> 
        <div className='font-bold font-Presentation text-xl'><h1>{title}</h1></div>
        <div className='flex justify-center'><div className='bg-black rounded-xl h-1 w-4/6'></div></div>
        <div className='font-Presentation font-light mt-4'><p>{description}</p></div>
        {Link ? <div className='font-Presentation text-blue-300'><a href={Link}>{Link}</a></div> : null}
        {GitLink ? <div className=''><p>Depot Github : <a  className="text-blue-300"href={GitLink}>{GitLink}</a></p></div> : null}
        </div>
    </div>
  )
}
