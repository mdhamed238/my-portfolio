import { useState, useEffect } from 'react';
import Skill from './Skill';
import Brackets from '../../assets/svg/brackets-curly.svg'
import Server from '../../assets/svg/server-network.svg'
import UserSquare from '../../assets/svg/user-square.svg'
import angleDown from '../../assets/images/angle-down.png'
import angleDownWhite from '../../assets/images/angle-down-white.png'
import './Skills.scss'



const Skills = ({ darkMode }) => {
    const [skills, setSkills] = useState({
        frontend: [
            {
                name: 'HTML',
                level: 90
            },
            {
                name: 'CSS',
                level: 80
            },
            {
                name: 'JavaScript',
                level: 80
            },
            {
                name: 'React',
                level: 70
            },
            {
                name: 'Tailwind CSS',
                level: 60
            }
        ],
        backend: [
            {
                name: 'NodeJS',
                level: 70
            },
            {
                name: 'PHP',
                level: 60
            },
            {
                name: 'MySQL',
                level: 60
            },
            {
                name: 'MongoDB',
                level: 60
            },
            {
                name: 'Firebase',
                level: 50
            }
        ],
        design: [
            {
                name: 'Adobe XD',
                level: 70
            },
            {
                name: 'Figma',
                level: 50
            }
        ]
    })


    const onToggle = (e) => {
        e.target.parentElement.parentElement.classList.toggle('collapsed');
        e.target.classList.toggle('rotate')
    }


    return (
        <div className="Skills" id="skills">
            <div className="header">
                <div className="title">
                    Skills
                </div>
                <div className="description">
                    My technical level
                </div>
            </div>
            <div className="skills">
                <div className="frontend">
                    <div className="top">
                        <img src={Brackets} alt="" />
                        <div className="title">Frontend developer</div>
                        <img
                            className="toggle rotate"
                            src={darkMode ? angleDownWhite : angleDown}
                            alt=""
                            onClick={onToggle}
                        />
                    </div>
                    {
                        skills.frontend.map((item, idx) => {
                            return <Skill
                                key={idx}
                                name={item.name}
                                level={item.level}
                            />
                        })
                    }
                </div>
                <div className="backend">
                    <div className="top">
                        <img src={Server} alt="" />
                        <div className="title">Backend developer</div>
                        <img
                            className="toggle rotate"
                            src={darkMode ? angleDownWhite : angleDown}
                            alt=""
                            onClick={onToggle}
                        />
                    </div>
                    {
                        skills.backend.map((item, idx) => {
                            return <Skill
                                key={idx}
                                name={item.name}
                                level={item.level}
                            />
                        })
                    }
                </div>
                <div className="design">
                    <div className="top">
                        <img src={UserSquare} alt="" />
                        <div className="title">UI / UX designer</div>
                        <img
                            className="toggle rotate"
                            src={darkMode ? angleDownWhite : angleDown}
                            alt=""
                            onClick={onToggle}
                        />
                    </div>
                    {
                        skills.design.map((item, idx) => {
                            return <Skill
                                key={idx}
                                name={item.name}
                                level={item.level}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Skills;