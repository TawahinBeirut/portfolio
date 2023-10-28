import React from 'react'

export default function Button({title,onClick,selected}) {

    // Styliser les bouttons ( Mettre des animations )

    const style = selected ? 'text-red-600' : ''

  return (
    <button name={title} className={style} onClick={onClick} >{title}</button>
  )
}
