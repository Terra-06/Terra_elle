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
                <li><a href="/">About</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Links</a></li>
            </ul>
        </nav>
    )
}


export default sidePanel