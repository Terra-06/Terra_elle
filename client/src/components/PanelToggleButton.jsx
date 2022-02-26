import React from 'react';
import '../styles/PanelToggleButton.css'

const panelToggleButton = props => {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
        </button>
    )

};

export default panelToggleButton;