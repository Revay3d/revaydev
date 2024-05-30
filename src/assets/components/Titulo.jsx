import React from 'react'
import "./styles/titulo.scss";

export default function Titulo(props) {
  return (
    <div className="caja">
    <h2 className="titulo">{props.titulo}</h2>{" "}
  </div>
  )
}
