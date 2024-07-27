import React from 'react'
import './HelperComps.css'
import { ReactComponent as DonateIcon } from '../assets/icons/donate.svg'

export default function Button({ text, arrow, leftIcon, onClick, variant }) {

  return (
    <div className={`button-main-container ${variant === 'red' ? 'red-bg-btn' : 'white-bg-btn'}`} onClick={onClick}>
      {leftIcon && <DonateIcon className="icon" />}
      <span className='btn-content'> {text}</span>
      {arrow && <span className="arrow">▼</span>}
    </div>
  )
}
