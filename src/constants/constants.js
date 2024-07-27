// socialMediaImages.js
import Facebook from '../assets/icons/socialMedia/facebook.svg';
import Instagram from '../assets/icons/socialMedia/instagram.svg';
import Linkedin from '../assets/icons/socialMedia/linkedIn.svg';
import Youtube from '../assets/icons/socialMedia/youtube.svg'
import Email from '../assets/icons/contact/mail.svg';
import Phone from '../assets/icons/contact/phone.svg';
import Web from '../assets/icons/contact/web.svg'

export const socialMediaImages = {
    facebook: Facebook,
    youtube: Youtube,
    instagram: Instagram,
    linkedin: Linkedin,
  };



export const contactDetails = {
    email :{
        icon: Email,
        content: "info@abundantart.net",
    },
    phone: {
        icon: Phone,
        content: "+91 85214 86147",       
    },
    web: {
        icon: Web,
        content: "www.abundantart.net",       
    },
}


export const navbarLinks = [
    {
        name: "Home",
        link: "/",
        subNames: null,
    },
    {
        name: "Artzine",
        link: "/artzine",
        subNames: [
            {
                name: "Team",
                link: "/team",
            },
            {
                name: "Carrers",
                link: "/carrers",
            },
        ],
    },
    {
        name: "Projects",
        link: "/projects",
        subNames: null,
    },
    {
        name: "About us",
        link: "/about",
        subNames: null,
    },
    {
        name: "Contact us",
        link: "/contact",
        subNames: null,
    },
]
   
  