import React from 'react'
import './Skills.css'
import { BsCheckCircleFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What skills do I have?</h5>
      <h2>Skills</h2>
      <div className="container skills_container">
        <div className="technical">
          {/* Technical Skills Section */}
          <h3>Technical</h3>
          <div className="skill_content">
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>HTML</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>CSS</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>TailWind</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>Python</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="non_technical">
          {/* Non Technical Skills Section */}
          <h3>Non-Technical</h3>
          <div className="skill_content">
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>Business Intelligence</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>Resource Management</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_item">
              <BsCheckCircleFill className='skill_item_icon' />
              <div>
                <h4>Numerical Analysis</h4>
                <small>Beginner</small>
              </div>
              </article>
              <article className="skill_item">
                <BsCheckCircleFill className='skill_item_icon' />
                <div>
                  <h4>Data Analysis</h4>
                  <small>Beginner</small>
                </div>
              </article>
              <article className="skill_item">
                <BsCheckCircleFill className='skill_item_icon' />
                <div>
                  <h4>Powerpoint</h4>
                  <small>Intermediate</small>
                </div>
              </article>
              <article className="skill_item">
                <BsCheckCircleFill className='skill_item_icon' />
                <div>
                  <h4>Comunication</h4>
                  <small>Expert</small>
                </div>
              </article>
              <article className="skill_item">
                <BsCheckCircleFill className='skill_item_icon' />
                <div>
                  <h4>Adaptability</h4>
                  <small>Intermediate</small>
                </div>
              </article>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Skills