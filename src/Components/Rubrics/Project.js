import React from 'react'

export default function Project({title,image,description,Link,GitLink}) {
  return (
    <div className='border border-black flex flex-col gap-10 max-w-lg'>
        <img src={image}/>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{Link}</p>
        <p>{GitLink}</p>
    </div>
  )
}
