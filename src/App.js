import React from 'react'
import Presentation from './Components/Presentation'
import Rubrics from './Components/Rubrics'

export default function App() {
  return (
    <div className="bg-Background overflow-hidden">
        <Presentation/> 
        <Rubrics/>
    </div>
  )
}
