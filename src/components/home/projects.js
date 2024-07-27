import React from 'react'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { projects } from '../../data/data'
import SectionTitle from '../../helperComponents/SectionTitle'

export default function Projects() {
    return (
        <div className="projects-main-container">
            <SectionTitle title="Projects" />
            <FiveBoxGrid cardsData={projects} />
        </div>
    )
}
