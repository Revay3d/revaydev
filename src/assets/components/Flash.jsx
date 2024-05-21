import React from 'react'

export default function Flash(props) {
  return (
    <div>
    <span className={` flash flash--${props.Tipo}`}></span>
  </div>
  )
}
