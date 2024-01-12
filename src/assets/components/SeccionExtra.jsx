import React from 'react'

export default function SeccionExtra(props) {
  return (
   <>
      <h2 className="conteiner__titulo">{props.titulo}</h2>
        <p className="conteiner__texto">{props.descripcion}</p>
   
   </>
  )
}
