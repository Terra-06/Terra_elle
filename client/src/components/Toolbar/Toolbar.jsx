import React from 'react'
import './Toolbar.css'
import PanelToggleButton from '../SidePanel/PanelToggleButton'

const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className="toggle-button">
                    <PanelToggleButton click={props.handlePanelToggleClick} />
                </div>
                <div className="toolbar_logo"><a href="/">LOGO</a>
                </div>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar