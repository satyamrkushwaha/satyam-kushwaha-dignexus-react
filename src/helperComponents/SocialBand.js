import React from 'react'
import { socialMediaImages } from '../constants/constants';

export default function SocialBand() {
    return (
        <div className="social-band-main-container">
            {socialMediaImages && Object.keys(socialMediaImages).map((key, index) => (
                <img key={index} src={socialMediaImages[key]} alt={key} />
            ))}
        </div>
    )
}
