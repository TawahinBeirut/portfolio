import React from 'react'
import Themes from '../../Themes.json'
import Transition from '../../Assets/Footer_Transition.png'

export default function Contact() {
  return (
    <div className='flex flex-col justify-center mt-20 gap-10 bg-Transition text-center text-white'>
      <img className='h-36'src={Transition}/>
      <h1 className=''>{Themes.Contact.Title}</h1>
      <p className=''> Email : {Themes.Contact['E-mail']}</p>
      <p className=''> Number : {Themes.Contact.Number}</p>
      <p className=''> Github : {Themes.Contact['Git-Hub']}</p>
    </div>
  )
}
