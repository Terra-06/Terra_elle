import React from 'react'
import '../styles/Toolbar.css'
import PanelToggleButton from './PanelToggleButton'
import girlheadphones from '../imgs/girlheadphones.png'
import { Link } from 'react-router-dom'

const Toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className="toolbar_toggle-button">
                    <PanelToggleButton click={props.handlePanelToggleClick} />
                </div>
                <div className="logo"><Link to='/'><img src={girlheadphones} alt='girl with headphones logo' width="90px" height="90px" /> </Link>
                </div>
                <div className="spacer2" />
                <span className='github' >

                    <a target="_blank" href='https://github.com/Terra-06'>
                        <i className="devicon-github-plain icon" ></i>

                    </a>
                </span>
                <span className="linkedin">
                    <a target='_blank' href='https://www.linkedin.com/in/terra-elle/'>
                        <i className="devicon-linkedin-plain icon"></i>
                    </a>
                </span>

                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">Home *</a></li>
                        <li><a href="/about">About *</a></li>
                        <li><a href="/resume">Resume *</a></li>
                        <li><a href="/projects">Projects *</a></li>
                        <li><a href="/skills">Skills</a></li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar