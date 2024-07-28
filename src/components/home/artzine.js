import React from 'react'
import SectionTitle from '../../helperComponents/SectionTitle'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { artzine } from '../../data/data'
import ArtzineImg from '../../assets/images/artzine/artzine-logo.png'
import ContentGrid from '../../helperComponents/ContentGrid'
import Button from '../../helperComponents/Button'

export default function Artzine() {
  return (
    <div className="artzine-main-container">
      <SectionTitle title="Artzine" customTitle={ArtzineImg} />
      <ContentGrid items={artzine} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button text="Explore More" arrow={true} />
      </div>
    </div>
  )
}

