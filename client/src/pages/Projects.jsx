import React from 'react'
import bkgd from '../videos/bkgd.mov'
import '../styles/Projects.css'

export default function Projects() {
    return (
        <div className='projects'>
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
        </div>
    )
}