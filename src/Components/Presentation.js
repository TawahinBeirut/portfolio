import React from 'react'
import img from '../Assets/Abdel.png'
import Themes from "../Themes.json"

export default function Presentation() {
  return (
    <div className="h-screen">
        <div className='h-5/6 bg-gradient-to-tr from-Abd-el-Bg1 to-Abd-el-Bg2 flex justify-stretch'>
            <h1 className="font-Button text-xl ml-5">Portfolio</h1>
            <img src={img}></img>
            <div className='flex flex-col w-4/6 justify-start mt-9'>
                <div className="flex justify-center"><h1 className='text-6xl text-center'>{Themes.Profession}</h1></div>
                <div className='flex justify-center'><h1 className='text-3xl mt-5 font-thin text-center'>{Themes.Prenom1} {Themes.Prenom2}</h1></div>
                <div className='flex justify-center'><h1 className='text-3xl font-thin'>{Themes.Nom}</h1></div>
                <div className='flex text-2xl font-thin justify-evenly mt-5 text-center'>
                    {Themes.Qualitites.map(el => (
                        <p>{el}</p>
                    ))}
                </div>
                <div className='flex justify-center'><div className='bg-black rounded-xl h-1 w-4/6 mt-5'></div></div>
                <div className='flex justify-center'><div className='w-3/6 text-center font-thin mt-10 text-xl'>{Themes.ShortPresentation}</div></div>


            </div>
        </div>
    </div>
  )
}
