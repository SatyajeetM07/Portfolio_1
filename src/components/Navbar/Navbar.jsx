import React from 'react'
import {FiHome} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineTool} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFolder2} from 'react-icons/bs'
import './Navbar.css'
import { useState } from 'react'



const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
   <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active': ''}><FiHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav === '#about'? 'active': ''}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active': ''}><AiOutlineBook/></a>
    <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills'? 'active': ''}><AiOutlineTool/></a>
     <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects'? 'active': ''}><BsFolder2/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><AiOutlineMail/></a>
    

   </nav> 
  )
}

export default Navbar