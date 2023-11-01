import React from 'react'
import img from '../Assets/Abdel.png'
import Themes from "../Themes.json"
import { delay, motion } from "framer-motion"

export default function Presentation() {
  return (
    <div className="h-screen overflow-hidden">
        <div className='h-4/6 bg-gradient-to-tr from-Abd-el-Bg1 to-Abd-el-Bg2 flex drop-shadow-2xl overflow-hidden justify-stretch sm:h-5/6'>
            <motion.h1 initial={{opacity: 0,y : 10}} animate={{opacity: 1 , y: 0}} transition={{delay: 1}} className="font-Button text-xl ml-5">Portfolio</motion.h1>
            <motion.img initial={{opacity: 0, x : -10}} animate={{opacity: 1,x : 0}} transition={{delay: 0.5}} src={img} className=' hidden -ml-10 sm:flex sm:w-fit'></motion.img>
            <div className='flex flex-col w-4/6 justify-start mt-7'>
                <div className="flex justify-center"><h1 className='text-center text-2xl tablet:text-6xl '>{Themes.General.Profession}</h1></div>
                <div className='flex justify-center'><h1 className=' mt-5 font-thin text-center text-xl tablet:text-3xl'>{Themes.General.Prenom1} {Themes.General.Prenom2}</h1></div>
                <div className='flex justify-center'><h1 className='font-thin text-xl tablet:text-3xl'>{Themes.General.Nom}</h1></div>
                <div className='flex text-2xl font-thin justify-evenly mt-5 text-center'>
                    {Themes.General.Qualitites.map(el => (
                        <p>{el}</p>
                    ))}
                </div>
                <div className='flex justify-center'><div className='bg-black rounded-xl h-1 w-4/6 mt-5'></div></div>
                <div className='flex justify-center'><div className='w-3/6 text-center font-thin mt-5 text-xl'>{Themes.General.ShortPresentation}</div></div>
            </div>
        </div>
    </div>
  )
}
