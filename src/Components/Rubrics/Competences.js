import React from "react";
import Themes from "../../Themes.json"

import {motion,useAnimation} from 'framer-motion'

import { useInView } from 'react-intersection-observer';

const RubricsVariants = {
    visible : {opacity : 1, x : 0, transition: {duration: 0.5}},
    hidden : {opacity: 0, x : -10}
  };

export default function Competences(){

    
  const controls = useAnimation();
  const [ref,inView] = useInView();

  useEffect(() => {
    if (inView){
      controls.start("visible")
    }
  },[controls,inView])

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