import React from 'react'

export default function Project({title,image,description,Link,GitLink}) {
  return (
    <div className='border border-black flex flex-col gap-5 max-w-lg bg-white rounded-xl overflow-hidden mt-10 text-xl text-center'>
        <img src={image}/>
        <div className='font-bold font-Presentation'><h1>{title}</h1></div>
        <div className='flex justify-center'><div className='bg-black rounded-xl h-1 w-4/6'></div></div>
        <div className='font-Button font-light mt-4'><p>{description}</p></div>
        <div className='font-Presentation text-blue-300'><a href={Link}>{Link}</a></div>
        <div className=''><p>Depot Github : <a  className="text-blue-300"href={GitLink}>{GitLink}</a></p></div>
    </div>
  )
}
