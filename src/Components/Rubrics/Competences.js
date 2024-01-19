import React from "react";

export default function Competences(){

    
    return (
        <div className='flex justify-center mt-20 drop-shadow-xl'>
      <div className='w-4/6 flex text-center'>
      <div>
      <h1 className='font-bold font-Presentation text-3xl'>{Themes.Competences.Title}</h1>
      <div className='text-center text-xl font-Presentation mt-2 flex flex-col gap-10 font-bold'>
        {Themes.Competences.Text.map(el => (
          <motion.div ref={ref} animate={controls} variants={RubricsVariants} initial="hidden">{el}</motion.div>
        ))}
      </div>
      </div>
      </div>
    </div>
    )
}