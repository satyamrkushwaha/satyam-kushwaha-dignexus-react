import React from 'react'
import Button from '../helperComponents/Button';
import Card from '../helperComponents/Card';
import Feature1 from '../assets/images/features/feature-1.png'
import SectionTitle from '../helperComponents/SectionTitle';

export default function Home() {
    return (
        <div>

            <Button text="Explore More" arrow={true} />
            <SectionTitle title="FEATURES" />
            <Card
                image={Feature1}
                title="April Feature: Plants of the Qur’ān and All the Flowers Are..."
                date="ON APRIL 26TH, 2023"
                description="The Shirley Sherwood Gallery of Botanical Art is a gallery that has been open since 2008 at Kew Gardens and is the world’s first display dedicated to solely..."
                buttonText="READ MORE"

            />
        </div>
    )
}
