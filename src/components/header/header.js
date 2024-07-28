import React from 'react'
import './header.css'
import Brand from '../../helperComponents/Brand'
import SocialBand from '../../helperComponents/SocialBand'
import Navbar from '../../helperComponents/Navbar'
import ArtGallery from '../../assets/icons/art-gallery.png'
import Search from '../../helperComponents/Search'
import { contactDetails } from '../../constants/constants'
import Button from '../../helperComponents/Button'
import HeroSection from '../../helperComponents/HeroSection'

export default function Header() {
  return (<>
    <div className='header-main-container'>
      <Brand />
      <div className="header-sub-container">
        <div className='art-gallery-email-conatiner'>
          <div className='flex' >
            <img src={ArtGallery} alt="Logo" />
            <span>Visit Our Abundantart Art Gallery</span>
          </div>
          <div className='flex'>
            <img src={contactDetails?.email?.icon} alt="Logo" />
            <span>{contactDetails?.email?.content}</span>
          </div>
          <div>
            <SocialBand />
          </div>
        </div>
        <div className='flex  navlinks-donate' >
          <Navbar />
          <Search />
          <Button text="DONATE" leftIcon={true} variant={'red'} />
        </div>
      </div>
    </div>
    <HeroSection />
  </>)
}
