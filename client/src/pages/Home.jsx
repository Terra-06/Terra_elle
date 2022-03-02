import React from 'react'
import bkgd from '../videos/bkgd.mov'
import Tportvid from '../videos/Tportvid.mov'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='home'>
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
            <div className='home_vid-contain'>
                <div className='home_vid-subContain'>
                    <div className='home_vid'>
                        <video loop muted autoPlay src={Tportvid}></video>
                    </div>

                </div>

                {/* <div className='home_resume-button'>
                    <a href="/">
                        <button>Resume</button>
                    </a>
                </div> */}
            </div>
        </div >
    )
}