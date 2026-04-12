import React from 'react'
import MacWindow from '../MacWindow'
import githubData from '../../../assets/github.json'
import './GitHub.scss'

const GitCard = ({ project = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return (
        <div className="card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className='description'>{project.description}</p>

            <div className="tags">
                {
                    project.tags.map((tag) => <p className='tag'>{tag}</p>)
                }
            </div>

            <div className="urls">
                <a href={project.repoLink}>Repository</a>
                {project.demoLink && <a href={project.demoLink}>Demo Link</a>}
            </div>
        </div>
    )
}

const GitHub = () => {
    return (<MacWindow>
        <div className="cards">
            {githubData.map(project => {
                return <GitCard key={project.id} project={project} />
            })}
        </div>
    </MacWindow>
    )
}

export default GitHub
