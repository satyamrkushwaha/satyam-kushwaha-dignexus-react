import React from 'react'
import './footer.css'
import Brand from '../../helperComponents/Brand'
import { contactDetails } from '../../constants/constants'
import SocialBand from '../../helperComponents/SocialBand'
import ArtImg from '../../assets/icons/art-gallery.png'

export default function Footer() {
  return (
    <div className="footer-main-container">
      <div className='footer-left-section-container'>
        <div><Brand /> </div>
        <div> <img src={contactDetails?.email?.icon} alt="Email Icon" /> <span>{contactDetails?.email?.content}</span></div>
        <div> <img src={contactDetails?.web?.icon} alt="Web Icon" /> <span>{contactDetails?.web?.content}</span></div>
        <div> <img src={contactDetails?.phone?.icon} alt="Phone Icon" /> <span>{contactDetails?.phone?.content}</span></div>
      </div>
      <div className='footer-right-section-container'>
        <h2>Follow Us :</h2>
        <SocialBand />
        <div>
          <div> <img src={ArtImg} alt="Address Icon" /></div>
          <div>{contactDetails?.webGallery.content}</div>
          <p>Visit for paintings, sculptures, & photography</p>
        </div>
      </div>
      <hr className="hr-divider" />
      <p className="footer-copyright"><span >&copy;</span> All Rights Reserved</p>
    </div>
  )
}
