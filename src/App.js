import React, { createContext, useState } from 'react'
import Abdel from './Composants/Abdel';
import Jasser from './Composants/Jasser';

export default function App() {

  const [LightTheme,setLightTheme] = useState(true);

  const ChangeTheme = () => {
    setLightTheme(!LightTheme);
  }

  return (
    <div className=''>
      {LightTheme ? <Abdel onClick={ChangeTheme}/> : <Jasser onClick={ChangeTheme}/>}
    </div>
  )
}
