import React from 'react'

export default function Estadisticas(props) {
  return (
    <div className='estadisticas__item'>
    <h3 className='item__title'>{props.titulo}</h3>
    <p className='item__numero'>{props.numero} <span className='item__letra'>{props.letra}</span></p>
  </div>
  )
}
