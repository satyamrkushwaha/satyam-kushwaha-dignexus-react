import React from 'react'
import SectionTitle from '../../helperComponents/SectionTitle'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { artzine } from '../../data/data'

export default function Artzine() {
  return (
    <div className="artzine-main-container">
        <SectionTitle title="Artzine" />
        <FiveBoxGrid cardsData={artzine} />
    </div>
  )
}
