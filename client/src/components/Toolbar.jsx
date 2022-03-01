import React from 'react'
import '../styles/Toolbar.css'
import PanelToggleButton from './PanelToggleButton'
import girlheadphones from '../imgs/girlheadphones.png'
import { Link } from 'react-router-dom'

const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className="toolbar_toggle-button">
                    <PanelToggleButton click={props.handlePanelToggleClick} />
                </div>
                <div className="toolbar_logo"><Link to='/'><img src={girlheadphones} width="90px" height="90px" className='logo' alt='logo' /> </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">Home *</a></li>
                        <li><a href="/about">About *</a></li>
                        <li><a href="/projects">Projects *</a></li>
                        <li><a href="/skills">Skills *</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar