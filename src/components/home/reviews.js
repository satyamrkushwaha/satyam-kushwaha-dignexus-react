import React from 'react'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { reviews } from '../../data/data'
import SectionTitle from '../../helperComponents/SectionTitle'
import Button from '../../helperComponents/Button'

export default function Reviews() {
  return (
    <div className="reviews-main-container">
        <SectionTitle title="Reviews" />
        <FiveBoxGrid cardsData={reviews} />
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Button text="View More" width={"10%"} />
        </div>
        
    </div>
  )
}
