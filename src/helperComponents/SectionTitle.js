import React from 'react'
import './HelperComps.css'

export default function SectionTitle({ title, customTitle }) {
    return (
        <div className="main-title">
            {customTitle ? <img src={customTitle} alt={title} /> : <h1>{title}</h1>}
            <h1>{title}</h1>
            <div className="underline"></div>
        </div>
    )
}
