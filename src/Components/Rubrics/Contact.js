import React from 'react'
import Themes from '../../Themes.json'

export default function Contact() {
  return (
    <div className='flex flex-col justify-center mt-20 gap-10'>
      <h1 className='text-center'>{Themes.Contact.Title}</h1>
      <p className='text-center'> Email : {Themes.Contact['E-mail']}</p>
      <p className='text-center'> Number : {Themes.Contact.Number}</p>
      <p className='text-center'> Github : {Themes.Contact['Git-Hub']}</p>
    </div>
  )
}
