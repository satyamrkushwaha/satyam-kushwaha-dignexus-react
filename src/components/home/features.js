import React from 'react'
import SectionTitle from '../../helperComponents/SectionTitle'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { features } from '../../data/data'

export default function Features() {
  return (
    <div className="features-main-container">
        <SectionTitle title="Features" />
        <FiveBoxGrid cardsData={features} />
    </div>
  )
}
