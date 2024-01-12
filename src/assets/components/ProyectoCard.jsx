import React from 'react'

export default function ProyectoCard(props) {
  return (
  
    
    <div class="proyecto__interior">

      <h1 class="proyecto__carta--titulo">{props.titulo}</h1>
    
      <p class="proyecto__descripcion">{props.descripcion}</p>
    
      <div class="proyecto__botones">
      <span class={props.codigo ? 'proyecto__boton proyecto__boton--codigo' : ''}>
        <a href={props.url1} target="_blank">
            {props.texto_url1}</a>
        </span>
        <span class={props.info ? 'proyecto__boton proyecto__boton--info' : ''}>
          <a href={props.url2} target="_blank">
            {props.texto_url2}</a>
        </span>
    
      </div>
    </div>
    
   
  )
}
