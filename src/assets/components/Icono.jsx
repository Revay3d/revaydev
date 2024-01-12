import React from 'react'

export default function Icono(props) {
  return (
    <div className="lenguajes__iconos">
    <div className="icon"><i className={`fa-brands fa-${props.icono}`}></i><span className="iconos__texto">{props.texto}</span></div>


  </div>
  )
}
