import React from 'react'
import "./styles/flash.scss";

export default function Flash(props) {
  return (
    <div>
    <span className={` flash flash--${props.Tipo}`}></span>
  </div>
  )
}
