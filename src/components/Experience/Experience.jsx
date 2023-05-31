import React from 'react'
import './Experience.css'
import { useState } from 'react'

const Experience = () => {


const [activeExp,setActiveExp] =useState('research')


  return (
    <section id="experience">
      <h5>What have I done so far?</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <article className='experience'>
          <div id='turito' onClick={()=>setActiveExp('turito')} className="experience_head {activeExp === 'turito'?'active':''}">
            <h3>Content Developer</h3>
            <ul className='experience_list'>
              <li>Developed Educational Content in the Mathematics domain.
              </li>
            </ul>
          </div>
        </article>
        <article className='experience'>
          <div id='research' onClick={()=>setActiveExp('research')} className="experience_head {activeExp === 'research'?'active':''}">
            <h3>Research Intern</h3>
            <ul className='experience_list'>
              <li>Project Title: Synthesis and Characterization of Graphene Reinforced Nanocomposite by Continuous melt Processing</li>
              <li>Prepared graphene dispersed composite using casting techniques for fabrication which showed an increase in the conductivity of Al-6082 alloy by 2.3% by using 0.6 wt% of graphene</li>
            </ul>
          </div>
        </article>
        <article className='experience'>
          <div id='chegg' onClick={()=>setActiveExp('chegg')} className="experience_head {activeExp === 'chegg'?'active':''}">
            <h3>Subject Matter Expert</h3>
            <ul className='experience_list'>
              <li>Subject Matter Expert for Advanced Physcs domain</li>
              <li>MATLAB was a major domain of work</li>
            </ul>
          </div>
        </article>
      </div>
 
    </section>
  )
}

export default Experience