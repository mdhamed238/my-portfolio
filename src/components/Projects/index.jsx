import { useState, useEffect } from 'react'
import Cinema from '../../assets/images/cinema.png'
import WebDevBootcamp from '../../assets/images/webdevbootcamp.png'
import TicTaeToeGame from '../../assets/images/TicTaeToe.png'
import './Projects.scss'


const Projects = () => {
    const [index, setIndex] = useState(0)
    const [projects, setProjects] = useState([
        {
            name: "Cinema web app",
            description: "Website to find informations about movies and their ratings. Where users can create their own favorite list.",
            path: "javascript:void(0)",
            image: Cinema
        },
        {
            name: "Web dev bootcamp",
            description: "Fully responsive modern website, can be used for bootcamp registration purposes.",
            path: "https://webdevbootcamp1.netlify.app/",
            image: WebDevBootcamp
        },
        {
            name: "TicTaeToe Game",
            description: "Tic Tae Toe Game, responsive with all screens. 2 players can play against each other or 1 player vs computer",
            path: "https://optimistic-engelbart-397d0a.netlify.app/",
            image: TicTaeToeGame
        }
    ])


    const nextProject = () => {
        if (index === projects.length - 1) setIndex(0)
        else setIndex(index + 1)
    }
    const previousProject = () => {
        if (index === 0) setIndex(projects.length - 1)
        else setIndex(index - 1)
    }


    return (
        <div className="Projects" id="projects">
            <div className="header">
                <div className="title">
                    Recent Projects
                </div>
                <div className="description">
                    Portfolio
                </div>
            </div>
            <div className="portfolio">
                <div className="pag-left" onClick={previousProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="#6338FB" d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
                    </svg>
                </div>
                <div className="left">
                    <img src={projects[index].image} alt="" />
                </div>
                <div className="right">
                    <div className="title">
                        {projects[index].name}
                    </div>
                    <div className="description">
                        {projects[index].description}
                    </div>
                    <div className="button">
                        Demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                        </svg>
                    </div>
                </div>
                <div className="pagination">
                    <span
                        className={`circle ${index === 0 ? 'active' : ''}`}
                    >
                    </span>
                    <span
                        className={`circle ${index === 1 ? 'active' : ''}`}
                    >
                    </span>
                    <span
                        className={`circle ${index === 2 ? 'active' : ''}`}
                    >
                    </span>
                </div>
                <div className="pag-right" onClick={nextProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="#6338FB" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Projects;