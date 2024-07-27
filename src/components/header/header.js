import React from 'react'
import './header.css'
import Brand from '../../helperComponents/Brand'
import SocialBand from '../../helperComponents/SocialBand'
import Navbar from '../../helperComponents/Navbar'
import ArtGallery from '../../assets/icons/art-gallery.png'
import Search from '../../helperComponents/Search'
import { contactDetails } from '../../constants/constants'

export default function Header() {
  return (
    <div className='header-main-container'>
      <Brand />
      <div className="header-sub-container">
        <div>
          <div>
            <img src={ArtGallery} alt="Logo" />
            <span>Visit Our Abundantart Art Gallery</span>
          </div>
          <div>
            <img src={contactDetails?.email?.icon} alt="Logo" />
            <span>{contactDetails?.email?.content}</span>
          </div>
          <div>
            <SocialBand />
          </div>
        </div>
        <div>
          <div>
            <Navbar />
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}
