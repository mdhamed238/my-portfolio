// import { useState } from 'react'
import './About.scss'
import Me from '../../assets/images/me.jpeg'
import Download from '../../assets/svg/download-alt.svg'
import Resume from './resume.pdf'



const About = () => {


    return (
        <div className="About" id="about">
            <div className="header">
                <div className="title">
                    About Me
                </div>
                <div className="description">
                    My introduction
                </div>
            </div>
            <div className="container">
                <div className="image">
                    <img src={Me} alt="" />
                </div>
                <div className="content">
                    <div className="description">
                        Web developer with extensive knowledge
                        and years of experience, working in web
                        technologies, delivering quality work
                    </div>
                    <div className="assets">
                        <span>Team Work</span>
                        <span>Ponctuality</span>
                        <span>Problem Solving</span>
                    </div>
                    <div className="btn">
                        <a
                            href={Resume}
                            class="button"
                            download
                        >
                            Download CV
                            <img src={Download} alt="" />
                        </a>
                        {/* <button
                            onClick={saveFile}
                        >
                            Download CV
                            <img src={Download} alt="" />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;