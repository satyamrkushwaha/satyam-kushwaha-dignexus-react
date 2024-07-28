import React from 'react'
import SectionTitle from '../../helperComponents/SectionTitle'
import Carousel from '../../helperComponents/Carousel'
import { interviews } from '../../data/data'

export default function Interviews() {
    return (
        <div>
            <SectionTitle title="Interviews" />
            <Carousel cards={interviews} />

        </div>
    )
}
