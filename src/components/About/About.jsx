import React from 'react'
import './About.css'
import Me from '../../assets/Me.png'
import {FaUniversity} from 'react-icons/fa'
import {IoSchoolSharp} from 'react-icons/io5'

const About = () => {
  return (
    <section id="about">
      <h5>Gt to Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaUniversity className='about_icon'/>
              <h2>NIT Rourkela</h2>
              <h2>Metallurgical and Materials Engineering</h2>
              <h5>8.34/10</h5>
            </article>
            <article className="about_card">
              <IoSchoolSharp className='about_icon'/>
              <h2>Kendriya Vidyalaya</h2>
              <h2>Higher secondary</h2>
              <h5>PCM 88%</h5>
            </article>
            <article className="about_card">
              <IoSchoolSharp className='about_icon'/>
              <h2>De Nobili School</h2>
              <h2>Matriculation</h2>
              <h5>91.66%</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptate impedit aspernatur tempore dolorum, modi officia ipsum eum non! Eveniet nemo consectetur inventore culpa accusantium. Voluptatibus velit atque quibusdam culpa.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section> 
  )
}

export default About