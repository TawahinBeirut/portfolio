import React from 'react'
import Themes from '../../Themes.json'

export default function PresentationR() {
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-4/6 flex text-center'>
      <div className=" bg-gray-200 h-full w-1"></div>
      <div>
      <h1 className='font-bold'>{Themes.Presentation.Title}</h1>
      <div className='text-center font-Presentation mt-2 flex flex-col gap-10'>
        {Themes.Presentation.Text.map(el => (
          <p>{el}</p>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}
