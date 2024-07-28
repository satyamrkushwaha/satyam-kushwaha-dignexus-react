import React from 'react'
import './HelperComps.css'
import { ReactComponent as DonateIcon } from '../assets/icons/donate.svg'

export default function Button({ text, arrow, leftIcon, onClick, variant, width }) {

  return (
    <div className={`button-main-container ${variant === 'red' ? 'red-bg-btn' : 'white-bg-btn'}`} onClick={onClick} style={{ width: width }}>
      {leftIcon && <DonateIcon className="icon" />}
      <span className='btn-content'> {text}</span>
      {arrow && <span className="arrow">▼</span>}
    </div>
  )
}
