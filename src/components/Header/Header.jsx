import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Satyajeet Mazumdar</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll to bottom</a>
      </div>
    </header>
  )
}

export default Header