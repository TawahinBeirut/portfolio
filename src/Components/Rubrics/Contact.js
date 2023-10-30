import React from 'react'
import Themes from '../../Themes.json'

export default function Contact() {
  return (
    <div className='flex flex-col justify-center mt-20 gap-10 bg-black text-center text-white'>
      <h1 className=''>{Themes.Contact.Title}</h1>
      <p className=''> Email : {Themes.Contact['E-mail']}</p>
      <p className=''> Number : {Themes.Contact.Number}</p>
      <p className=''> Github : {Themes.Contact['Git-Hub']}</p>
    </div>
  )
}
