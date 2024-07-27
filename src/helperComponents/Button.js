import React from 'react'
import './HelperComps.css'

export default function Button({ text,arrow, onClick }) {

  return (
    <div className="button-main-container" onClick={onClick}>
      {text} 
      
      {arrow && <span className="arrow">▼</span>} 
    </div>
  )
}
