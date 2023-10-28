import React from 'react'
import img from '../Assets/Abdel.png'
import Themes from "../Themes.json"
import { delay, motion } from "framer-motion"

export default function Presentation() {
  return (
    <div className="h-screen overflow-hidden">
        <div className='h-5/6 bg-gradient-to-tr from-Abd-el-Bg1 to-Abd-el-Bg2 flex justify-stretch drop-shadow-2xl'>
            <h1 className="font-Button text-xl ml-5">Portfolio</h1>
            <img src={img}></img>
            <div className='flex flex-col w-4/6 justify-start mt-9'>
                <div className="flex justify-center"><h1 className='text-7xl text-center'>{Themes.General.Profession}</h1></div>
                <div className='flex justify-center'><h1 className='text-3xl mt-5 font-thin text-center'>{Themes.General.Prenom1} {Themes.General.Prenom2}</h1></div>
                <div className='flex justify-center'><h1 className='text-3xl font-thin'>{Themes.General.Nom}</h1></div>
                <div className='flex text-2xl font-thin justify-evenly mt-5 text-center'>
                    {Themes.General.Qualitites.map(el => (
                        <p>{el}</p>
                    ))}
                </div>
                <div className='flex justify-center'><div className='bg-black rounded-xl h-1 w-4/6 mt-5'></div></div>
                <div className='flex justify-center'><div className='w-3/6 text-center font-thin mt-10 text-xl'>{Themes.General.ShortPresentation}</div></div>
            </div>
        </div>
    </div>
  )
}
