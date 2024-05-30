import React from 'react'
import "./styles/icono.scss";

export default function Icono(props) {
  return (
    <div>
    <div className="icon"><i className={`fa-brands fa-${props.icono}`}></i><span className="iconos__texto">{props.texto}</span></div>


  </div>
  )
}
