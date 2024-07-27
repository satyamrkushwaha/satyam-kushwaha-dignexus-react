import React from 'react'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { reviews } from '../../data/data'
import SectionTitle from '../../helperComponents/SectionTitle'

export default function Reviews() {
  return (
    <div className="reviews-main-container">
        <SectionTitle title="Reviews" />
        <FiveBoxGrid cardsData={reviews} />
    </div>
  )
}
