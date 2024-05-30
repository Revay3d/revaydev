import React from 'react'
import "./styles/historia.scss";

export default function Historia(props) {
  return (
    <div>
   
    <div className={` historia__item historia__item--${props.tipo}`}>
    <span className="historia__sirculo"></span>{" "}
 
      <h2 className="historia__title">{props.titulo}</h2>
      <span className="historia__fecha">{props.fecha}</span>
      <p className="historia__text">
      {props.texto}
      </p>
    </div>
  </div>
  )
}
