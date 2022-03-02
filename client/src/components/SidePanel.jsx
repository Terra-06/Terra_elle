import React from 'react'
import '../styles/SidePanel.css'

const sidePanel = props => {

    let panelClasses = "side-panel"

    if (props.show) {
        panelClasses = "side-panel open"
    }
    return (
        <nav className={panelClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/skills">Skills</a></li>

            </ul>
        </nav>
    )
}


export default sidePanel