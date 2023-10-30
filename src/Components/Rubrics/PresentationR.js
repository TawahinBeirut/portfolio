import React from 'react'
import Themes from '../../Themes.json'

export default function PresentationR() {
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-4/6 flex text-center'>
      <div>
      <h1 className='font-bold font-Presentation text-3xl'>{Themes.Presentation.Title}</h1>
      <div className='text-center text-xl font-Presentation mt-2 flex flex-col gap-10 font-bold'>
        {Themes.Presentation.Text.map(el => (
          <p>{el}</p>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}
