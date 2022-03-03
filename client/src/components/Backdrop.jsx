import React from 'react';

import '../styles/Backdrop.css';

const Backdrop = props => {
    return (
        <div className="backdrop" onClick={props.click} />
    )
}

export default Backdrop