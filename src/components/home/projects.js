import React from 'react'
import FiveBoxGrid from '../../helperComponents/FiveBoxGrid'
import { projects } from '../../data/data'
import SectionTitle from '../../helperComponents/SectionTitle'
import Button from '../../helperComponents/Button'

export default function Projects() {
    return (
        <div className="projects-main-container">
            <SectionTitle title="Projects" />
            <FiveBoxGrid cardsData={projects} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button text="View More" width={"10%"} />
            </div>
        </div>
    )
}
