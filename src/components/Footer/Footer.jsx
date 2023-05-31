import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Satyajeet Mazumdar</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <div className="footer_socials">
        <a href="facebook"><FaLinkedin/></a>
        <a href="instagram"><FaInstagram/></a>
        <a href="twitter"><FaTwitter/></a>
        <a href="linkedin"><FaLinkedin/></a>
      </div>
      <h5>Made with React.js</h5>

    </footer>
  )
}

export default Footer