import React from 'react'
import "./styles/seccionExtra.scss";

export default function SeccionExtra(props) {
  return (
   <>

     <span className='Caja_conteiner__titulo'> <span>{props.titulo}</span>
     </span>

        <p className="conteiner__texto"><span>{props.descripcion}</span></p>
   
   </>
  )
}
