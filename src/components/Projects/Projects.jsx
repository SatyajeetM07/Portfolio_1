import React from 'react'
import './Projects.css'
import movie from '../../assets/movie.jpg'
import bot from '../../assets/chatbot.jpg'

const data = [
    {
        id: 1,
        image: movie,
        title: 'IMDB Clone',
        github: ""
    },
    {
        id: 2,
        image: bot,
        title: 'Interactive Chatbot',
        github: ""
    },
]
const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Works</h5>
            <h2>Projects</h2>

            <div className="container projects_container">
                {
                    data.map(({ id, image, title, github, }) => {
                        return (
                            <article key={id} className="project_item">
                                <div className="project_item_image">
                                    <img src={image} alt={title} />
                                </div>

                                <div className="project_btn">
                                    <h3>{title}</h3>
                                    <a href={github} className='btn' target='_blank'>Github Link</a>
                                </div>

                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Projects