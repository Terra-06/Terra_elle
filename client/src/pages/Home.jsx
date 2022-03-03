import React from 'react'
import bkgd from '../videos/bkgd.mov'
import Tportvid from '../videos/Tportvid.mov'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='bkgd_vid'>
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
                        <Link to='/projects'><video loop muted autoPlay src={Tportvid}></video></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}