import React from 'react'
import '../styles/Toolbar.css'
import PanelToggleButton from './PanelToggleButton'

const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className="toolbar_toggle-button">
                    <PanelToggleButton click={props.handlePanelToggleClick} />
                </div>
                <div className="toolbar_logo"><a href="/">LOGO</a>
                </div>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/links">Links</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar