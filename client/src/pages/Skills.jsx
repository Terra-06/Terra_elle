import React from 'react';
import '../styles/Skills.css';
import bkgd from '../videos/bkgd.mov'

export default function Skills() {

    return (
        <div className='bkgd_vid'>
            <video loop muted autoPlay src={bkgd}
                style={{
                    position: 'fixed',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                }}
            ></video>
            <div className='skills_main-contain skills'>
                <div className='skills_sub-contain'>
                    <h1>Skills</h1>
                    <div className='skills_skills-contain'>
                        <div className="client-side">
                            <div className="icon-container">
                                <i className="devicon-javascript-plain icon"></i>
                                <p>JavaScript</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-python-plain"></i>
                                <p>Python</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-html5-plain icon"></i>
                                <p>HTML5</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-css3-plain icon"></i>
                                <p>CSS</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-postgresql-plain icon"></i>
                                <p>PostgreSQL</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-mongodb-plain icon"></i>
                                <p>MongoDB</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-express-original icon"></i>
                                <p>Express.js</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-react-original icon"></i>
                                <p>React.js</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-vuejs-plain icon"></i>
                                <p>Vue.js</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-django-plain icon"></i>
                                <p>Django</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-nodejs-plain icon"></i>
                                <p>Node.js</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-github-plain icon"></i>
                                <p>GitHub</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-npm-original-wordmark icon"></i>
                                <p>npm</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-heroku-plain icon"></i>
                                <p>Heroku</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-vscode-plain icon"></i>
                                <p>VS Code</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-linkedin-plain icon"></i>
                                <p>Linked In</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-trello-plain icon"></i>
                                <p>Trello</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-slack-plain icon"></i>
                                <p>Slack</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-photoshop-plain icon"></i>
                                <p>Photoshop</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-illustrator-plain icon"></i>
                                <p>Illustrator</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-inkscape-plain icon"></i>
                                <p>InkScape</p>
                            </div>
                            <div className="icon-container">
                                <i className="devicon-figma-plain icon"></i>
                                <p>Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}