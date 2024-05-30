import React from 'react'
import "./styles/consejosCart.scss";

export default function ConsejosCart(props) {
  return (
    <div className="consejo__card">
    <div className="card__interior">
      <div className="card__icon"><i className={`fa-solid fa-${props.icono}`}></i></div>
      <h1 className="card__title">{props.titulo}</h1>
      <p className="card__descripcion">{props.descripcion}</p>
      <div className="card__footer">
        <ul>
          <li><a href={props.url1} target="_blank"> {props.texto_url1}</a></li>
          <li><a href={props.url2} target="_blank"> {props.texto_url2}</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}
